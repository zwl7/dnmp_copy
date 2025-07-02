"use strict";
var DEF_PI = 3.14159265359;
var DEF_2PI = 6.28318530712;
var DEF_PI180 = 0.01745329252;
var DEF_R = 63706935e-1;
function getShortDistanceBase(lat1, lon1, lat2, lon2) {
  var ew1, ns1, ew2, ns2;
  var dx, dy, dew;
  var distance;
  ew1 = lon1 * DEF_PI180;
  ns1 = lat1 * DEF_PI180;
  ew2 = lon2 * DEF_PI180;
  ns2 = lat2 * DEF_PI180;
  dew = ew1 - ew2;
  if (dew > DEF_PI) {
    dew = DEF_2PI - dew;
  } else if (dew < -DEF_PI) {
    dew = DEF_2PI + dew;
  }
  dx = DEF_R * Math.cos(ns1) * dew;
  dy = DEF_R * (ns1 - ns2);
  distance = Number(Math.sqrt(dx * dx + dy * dy).toFixed(0));
  return distance;
}
exports.getShortDistanceBase = getShortDistanceBase;
//# sourceMappingURL=mapUtils.js.map
