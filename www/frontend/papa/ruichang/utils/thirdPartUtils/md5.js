"use strict";
let w_md5 = {};
function hex_md5(string, bit) {
  function md5_RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }
  function md5_AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 2147483648;
    lY8 = lY & 2147483648;
    lX4 = lX & 1073741824;
    lY4 = lY & 1073741824;
    lResult = (lX & 1073741823) + (lY & 1073741823);
    if (lX4 & lY4) {
      return lResult ^ 2147483648 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 1073741824) {
        return lResult ^ 3221225472 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 1073741824 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }
  function md5_F(x2, y, z) {
    return x2 & y | ~x2 & z;
  }
  function md5_G(x2, y, z) {
    return x2 & z | y & ~z;
  }
  function md5_H(x2, y, z) {
    return x2 ^ y ^ z;
  }
  function md5_I(x2, y, z) {
    return y ^ (x2 | ~z);
  }
  function md5_FF(a2, b2, c2, d2, x2, s, ac) {
    a2 = md5_AddUnsigned(a2, md5_AddUnsigned(md5_AddUnsigned(md5_F(b2, c2, d2), x2), ac));
    return md5_AddUnsigned(md5_RotateLeft(a2, s), b2);
  }
  function md5_GG(a2, b2, c2, d2, x2, s, ac) {
    a2 = md5_AddUnsigned(a2, md5_AddUnsigned(md5_AddUnsigned(md5_G(b2, c2, d2), x2), ac));
    return md5_AddUnsigned(md5_RotateLeft(a2, s), b2);
  }
  function md5_HH(a2, b2, c2, d2, x2, s, ac) {
    a2 = md5_AddUnsigned(a2, md5_AddUnsigned(md5_AddUnsigned(md5_H(b2, c2, d2), x2), ac));
    return md5_AddUnsigned(md5_RotateLeft(a2, s), b2);
  }
  function md5_II(a2, b2, c2, d2, x2, s, ac) {
    a2 = md5_AddUnsigned(a2, md5_AddUnsigned(md5_AddUnsigned(md5_I(b2, c2, d2), x2), ac));
    return md5_AddUnsigned(md5_RotateLeft(a2, s), b2);
  }
  function md5_ConvertToWordArray(string2) {
    var lWordCount;
    var lMessageLength = string2.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string2.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  function md5_WordToHex(lValue) {
    var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  function md5_Utf8Encode(string2) {
    string2 = string2.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string2.length; n++) {
      var c2 = string2.charCodeAt(n);
      if (c2 < 128) {
        utftext += String.fromCharCode(c2);
      } else if (c2 > 127 && c2 < 2048) {
        utftext += String.fromCharCode(c2 >> 6 | 192);
        utftext += String.fromCharCode(c2 & 63 | 128);
      } else {
        utftext += String.fromCharCode(c2 >> 12 | 224);
        utftext += String.fromCharCode(c2 >> 6 & 63 | 128);
        utftext += String.fromCharCode(c2 & 63 | 128);
      }
    }
    return utftext;
  }
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
  var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
  var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
  var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
  string = md5_Utf8Encode(string);
  x = md5_ConvertToWordArray(string);
  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;
  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = md5_FF(a, b, c, d, x[k + 0], S11, 3614090360);
    d = md5_FF(d, a, b, c, x[k + 1], S12, 3905402710);
    c = md5_FF(c, d, a, b, x[k + 2], S13, 606105819);
    b = md5_FF(b, c, d, a, x[k + 3], S14, 3250441966);
    a = md5_FF(a, b, c, d, x[k + 4], S11, 4118548399);
    d = md5_FF(d, a, b, c, x[k + 5], S12, 1200080426);
    c = md5_FF(c, d, a, b, x[k + 6], S13, 2821735955);
    b = md5_FF(b, c, d, a, x[k + 7], S14, 4249261313);
    a = md5_FF(a, b, c, d, x[k + 8], S11, 1770035416);
    d = md5_FF(d, a, b, c, x[k + 9], S12, 2336552879);
    c = md5_FF(c, d, a, b, x[k + 10], S13, 4294925233);
    b = md5_FF(b, c, d, a, x[k + 11], S14, 2304563134);
    a = md5_FF(a, b, c, d, x[k + 12], S11, 1804603682);
    d = md5_FF(d, a, b, c, x[k + 13], S12, 4254626195);
    c = md5_FF(c, d, a, b, x[k + 14], S13, 2792965006);
    b = md5_FF(b, c, d, a, x[k + 15], S14, 1236535329);
    a = md5_GG(a, b, c, d, x[k + 1], S21, 4129170786);
    d = md5_GG(d, a, b, c, x[k + 6], S22, 3225465664);
    c = md5_GG(c, d, a, b, x[k + 11], S23, 643717713);
    b = md5_GG(b, c, d, a, x[k + 0], S24, 3921069994);
    a = md5_GG(a, b, c, d, x[k + 5], S21, 3593408605);
    d = md5_GG(d, a, b, c, x[k + 10], S22, 38016083);
    c = md5_GG(c, d, a, b, x[k + 15], S23, 3634488961);
    b = md5_GG(b, c, d, a, x[k + 4], S24, 3889429448);
    a = md5_GG(a, b, c, d, x[k + 9], S21, 568446438);
    d = md5_GG(d, a, b, c, x[k + 14], S22, 3275163606);
    c = md5_GG(c, d, a, b, x[k + 3], S23, 4107603335);
    b = md5_GG(b, c, d, a, x[k + 8], S24, 1163531501);
    a = md5_GG(a, b, c, d, x[k + 13], S21, 2850285829);
    d = md5_GG(d, a, b, c, x[k + 2], S22, 4243563512);
    c = md5_GG(c, d, a, b, x[k + 7], S23, 1735328473);
    b = md5_GG(b, c, d, a, x[k + 12], S24, 2368359562);
    a = md5_HH(a, b, c, d, x[k + 5], S31, 4294588738);
    d = md5_HH(d, a, b, c, x[k + 8], S32, 2272392833);
    c = md5_HH(c, d, a, b, x[k + 11], S33, 1839030562);
    b = md5_HH(b, c, d, a, x[k + 14], S34, 4259657740);
    a = md5_HH(a, b, c, d, x[k + 1], S31, 2763975236);
    d = md5_HH(d, a, b, c, x[k + 4], S32, 1272893353);
    c = md5_HH(c, d, a, b, x[k + 7], S33, 4139469664);
    b = md5_HH(b, c, d, a, x[k + 10], S34, 3200236656);
    a = md5_HH(a, b, c, d, x[k + 13], S31, 681279174);
    d = md5_HH(d, a, b, c, x[k + 0], S32, 3936430074);
    c = md5_HH(c, d, a, b, x[k + 3], S33, 3572445317);
    b = md5_HH(b, c, d, a, x[k + 6], S34, 76029189);
    a = md5_HH(a, b, c, d, x[k + 9], S31, 3654602809);
    d = md5_HH(d, a, b, c, x[k + 12], S32, 3873151461);
    c = md5_HH(c, d, a, b, x[k + 15], S33, 530742520);
    b = md5_HH(b, c, d, a, x[k + 2], S34, 3299628645);
    a = md5_II(a, b, c, d, x[k + 0], S41, 4096336452);
    d = md5_II(d, a, b, c, x[k + 7], S42, 1126891415);
    c = md5_II(c, d, a, b, x[k + 14], S43, 2878612391);
    b = md5_II(b, c, d, a, x[k + 5], S44, 4237533241);
    a = md5_II(a, b, c, d, x[k + 12], S41, 1700485571);
    d = md5_II(d, a, b, c, x[k + 3], S42, 2399980690);
    c = md5_II(c, d, a, b, x[k + 10], S43, 4293915773);
    b = md5_II(b, c, d, a, x[k + 1], S44, 2240044497);
    a = md5_II(a, b, c, d, x[k + 8], S41, 1873313359);
    d = md5_II(d, a, b, c, x[k + 15], S42, 4264355552);
    c = md5_II(c, d, a, b, x[k + 6], S43, 2734768916);
    b = md5_II(b, c, d, a, x[k + 13], S44, 1309151649);
    a = md5_II(a, b, c, d, x[k + 4], S41, 4149444226);
    d = md5_II(d, a, b, c, x[k + 11], S42, 3174756917);
    c = md5_II(c, d, a, b, x[k + 2], S43, 718787259);
    b = md5_II(b, c, d, a, x[k + 9], S44, 3951481745);
    a = md5_AddUnsigned(a, AA);
    b = md5_AddUnsigned(b, BB);
    c = md5_AddUnsigned(c, CC);
    d = md5_AddUnsigned(d, DD);
  }
  if (bit == 32) {
    return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
  }
  return (md5_WordToHex(b) + md5_WordToHex(c)).toLowerCase();
}
w_md5.hex_md5_16 = function(string) {
  return hex_md5(string, 16);
};
w_md5.hex_md5_16Upper = function(string) {
  return hex_md5(string, 16).toUpperCase();
};
w_md5.hex_md5_32 = function(string) {
  return hex_md5(string, 32);
};
w_md5.hex_md5_32Upper = function(string) {
  return hex_md5(string, 32).toUpperCase();
};
exports.w_md5 = w_md5;
//# sourceMappingURL=md5.js.map
