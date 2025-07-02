import{d as A,A as T,B as U,ac as I,c as R,r as l,S as H,T as M,$ as N,I as z,k as D,e as C,o as O,a as q,b as n,f as u,u as s,U as F,m as L,p as $,w as b,q as E,_ as j}from"./index-73817fb6.js";import{T as G,E as J}from"./style-6cf98c5c.js";import{u as K}from"./useFormEdit-e635c879.js";import{u as P}from"./upload-d8b475c5.js";import"./tabs-3df7d807.js";const Q={id:"editor-main-container"},W={class:"toolbar-container"},X={id:"content"},Y={id:"editor-container"},Z={id:"title-container"},ee={id:"editor-text-area"},te={class:"form-container"},oe={class:"button"},le=A({__name:"wordEdit",props:{value:String},emits:["update:value"],setup(ne,{emit:ae}){const f=T();U();const{closeCurrent:w,ruleFormRef:re,setTitle:ie}=K(),d=I(),p=R(()=>d.themeConfig),B=()=>{d.setThemeConfig({...p.value,maximize:!0})},v=()=>{d.setThemeConfig({...p.value,maximize:!1})};B();const _=()=>{v(),w()},r=l(""),g=l(""),x=()=>{let e={title:r.value,content:i.value};localStorage.setItem(g.value,JSON.stringify(e)),_()},i=l(""),m=H();l(null),l(null),l(null);const h={};h.excludeKeys=["insertVideo","codeBlock","group-video","fullScreen","insertLink"];const k={scroll:!1,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9...",MENU_CONF:{lineHeight:{lineHeightList:["1","1.5","2","2.5"]},uploadImage:{async customUpload(e,t){const o=new FileReader;o.readAsDataURL(e),o.onload=async c=>{const a=new FormData;a.append("image",e);try{const{data:y}=await P(a);t(y.imgUrl)}catch{}}}}}};M(()=>{const e=m.value;e!=null&&(e.destroy(),v())});const V=e=>{m.value=e},S=e=>{};return l([]),l([]),N({type:"",tag_ids:""}),z(async()=>{let e=f.query.title;r.value=e;let t=f.query.type;g.value=t;let o="";switch(t){case"saihuiAdd":o=localStorage.getItem("saihuiContent");break;case"evntAdd":o=localStorage.getItem("evntContent");break;case"noticeAdd":o=localStorage.getItem("noticeContent");break}await D(),i.value=o}),(e,t)=>{const o=C("el-input"),c=C("el-button");return O(),q("div",Q,[n("div",W,[u(s(G),{editor:s(m),defaultConfig:h},null,8,["editor"])]),n("div",X,[n("div",Y,[n("div",Z,[u(o,{modelValue:s(r),"onUpdate:modelValue":t[0]||(t[0]=a=>F(r)?r.value=a:null),type:"textarea",class:"textarea",autosize:"",placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u7684\u6807\u9898",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),n("div",ee,[u(s(J),{modelValue:s(i),"onUpdate:modelValue":t[1]||(t[1]=a=>F(i)?i.value=a:null),defaultConfig:k,onOnCreated:V,onOnChange:S,id:"editor",style:{background:"#ffffff"}},null,8,["modelValue"])]),n("div",te,[L(e.$slots,"default",{},void 0,!0),$(` <el-form ref="form" label-position="left" label-width="120px">\r
						<el-form-item label="\u7C7B\u578B">\r
							<el-select v-model="form.type" placeholder="\u9009\u62E9\u7C7B\u578B" class="w-280">\r
								<el-option v-for="item in options" :key="item.value" :label="item.text" :value="item.value" />\r
							</el-select>\r
						</el-form-item>\r
						<el-form-item label="\u6807\u7B7E">\r
							<el-select v-model="form.tag_ids" placeholder="\u8BF7\u9009\u62E9\u6807\u7B7E" class="w-280">\r
								<el-option v-for="(item, index) in labels" :key="index" :label="item" :value="item" />\r
							</el-select>\r
						</el-form-item>\r
						<el-form-item label="\u7F51\u5740">\r
							<el-input v-model="form.url" placeholder="\u8F93\u5165\u94FE\u63A5\u4EE5\u5F15\u7528\u516C\u4F17\u53F7\u6587\u7AE0,\u542F\u7528\u94FE\u63A5\u5C06\u5BFC\u81F4\u6B63\u6587\u5931\u6548" />\r
						</el-form-item>\r
						<el-form-item label="\u53D1\u5E03\u65F6\u95F4">\r
							<el-date-picker\r
								v-model="form.released_time"\r
								align="right"\r
								type="datetime"\r
								placeholder="\u9009\u62E9\u65E5\u671F"\r
								format="yyyy-MM-dd HH:mm:ss"\r
								value-format="yyyy-MM-dd HH:mm:ss"\r
							/>\r
						</el-form-item>\r
				\r
					</el-form> `)])]),n("div",oe,[n("div",null,[u(c,{type:"primary",onClick:x},{default:b(()=>[E("\u7ACB\u5373\u521B\u5EFA")]),_:1}),u(c,{onClick:_},{default:b(()=>[E("\u8FD4\u56DE")]),_:1})])])])])}}});const fe=j(le,[["__scopeId","data-v-825c594a"],["__file","/Users/zwl/dnmp/www/frontend/ppos-sport-online/src/views/operation/wordEdit.vue"]]);export{fe as default};
