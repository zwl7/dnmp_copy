"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      privacy: `<p><br></p><p style="text-indent: 28pt;"><span style="font-family: 宋体;">我们深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息:权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。</span></p><p><span style="font-family: 宋体;">请在使用我们的产品前，仔细阅读并了解本《隐私条款》。</span></p><p><span style="font-family: 宋体;">一.信息传播条款</span></p><p><span style="font-family: 宋体;">本协议所述内容是指用户使用本产品及服务过程中所制作，复制，发布，传播的任何信息。</span></p><p><span style="font-family: 宋体;">我们一直致力于为用户提供健康，规范的网络环境，在您使用本软件期间，您将不能利用本软件制作，复制，发布，传播以下干扰软件正常使用，以及侵犯其他用户或第三方合法权益的内容。</span></p><p><span style="font-family: 宋体;">1.发布、传播、储存违反国家法律法规禁止的内容;</span></p><p><span style="font-family: 宋体;">2.发布、传播、储存侵害他人合法权益的内容;</span></p><p><span style="font-family: 宋体;"> </span></p><p><span style="font-family: 宋体;">3.发布、传播、储存涉及他人隐私，个人资料的内容;</span></p><p><span style="font-family: 宋体;">4.发布、传播、储存骚扰广告信息及垃圾信息或包含色情信息;</span></p><p><span style="font-family: 宋体;">5.发布其他违反法律法规，社会公德的内容。</span></p><p><span style="font-family: 宋体;">您使用本软件即视为您已阅读并同意接受本协议的约束，如果您违反以上内容，我们将删除违规内容，情节严重的将封禁您的账号。</span></p><p><span style="font-family: 宋体;">二、用户隐私条款</span></p><p><span style="font-family: 宋体;">我们收集用户的两类信息:</span></p><p><span style="font-family: 宋体;">1.与个人身份无关的信息</span></p><p><span style="font-family: 宋体;">当用户使用我们的应用，我们收集和汇总诸如哪些功能被使用，使用的顺序等信息。收集这些信息涉及到记录访问应用的每个用户的IP地址、操作平台、浏览器软件等。尽管这些信息无关个人身份，但我们能够通过其IP地址确定其使用的ISP和其上网的地理位置。这些无关个人身份的信息都帮助我们辩别我们的应用最受欢迎的地区并确定我们推广活动的有效性。</span></p><p><span style="font-family: 宋体;">2.有关个人身份的信息</span></p><p><span style="font-family: 宋体;">在使用应用的某些功能时，用户会被要求提供用户信息，比如手机号，身份证号等，我们需要这些信息来辅助实现我们应用所对应的功能。我们的目标是为用户提供方便快捷强大的服务，而这些个人信息有助於我们实现这一目标。</span></p><p><span style="font-family: 宋体;">3.信息的披露</span></p><p><span style="font-family: 宋体;">我们将在出现下述情形时披露您有关个人身份的信息。</span></p><p><span style="font-family: 宋体;">1.您授权或同意披露;</span></p><p><span style="font-family: 宋体;">2.在紧急情况下，为了保护其他用户的合法权益或公共安全及利益;</span></p><p><span style="font-family: 宋体;">3.根据法律规定或有关部门的要求提供您的个人信息;</span></p><p><span style="font-family: 宋体;">4.根据我们各服务条款及声明中的相关规定，或者我们认为必要的其他情形下。我们可能适时会对本隐私条款进行调整或变更，除法律法规或监管规定另有强制性规定外。如您在隐私条款调整或变更后继续使用我们提供的任一服务或访问我们相关网站的，我们相信这代表您已充分阅读、理解并接受修改后的隐私条款并受其约束。</span></p><p><span style="font-family: 宋体;">如果您对本隐私条款有任何疑问、意见或建议，请与我们联系。</span></p><p style="text-indent: 98pt;"><span style="font-family: 宋体;"> </span></p><p style="text-indent: 98pt;"></p><p><br></p>`
    };
  },
  onLoad() {
    getApp();
  },
  methods: {}
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.privacy
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d0a51c61"]]);
wx.createPage(MiniProgramPage);
