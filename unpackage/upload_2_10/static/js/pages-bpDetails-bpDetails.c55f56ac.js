(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bpDetails-bpDetails"],{"05af":function(t,a,s){"use strict";var i=s("d872"),n=s.n(i);n.a},3593:function(t,a,s){a=t.exports=s("2350")(!1),a.push([t.i,".black[data-v-49711603],.bule[data-v-49711603],.green[data-v-49711603]{margin-top:%?92?%}.BP_hd_last[data-v-49711603]{margin:0 %?30?%}",""])},8201:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",{staticClass:"BP"},[s("v-uni-view",{staticClass:"head_fx"}),s("v-uni-view",{},[s("v-uni-view",{staticClass:"BP_hd_frist"},[s("v-uni-view",{staticClass:"company_logo_img"},[s("v-uni-image",{staticClass:"company_logo",attrs:{src:t.bpArr.logo,mode:""}})],1),s("v-uni-view",{staticClass:"BP_hd_cont"},[s("v-uni-view",{staticClass:"company_name"},[t._v(t._s(t.bpArr.title))]),s("v-uni-view",{staticClass:"company-desc"},[t._v(t._s(t.bpArr.one_desc))])],1),s("v-uni-view",{},[0===t.bpArr.status?s("v-uni-text",{staticClass:"bule"},[t._v(t._s(t.bpArr.status_name))]):t._e(),1===t.bpArr.status?s("v-uni-text",{staticClass:"green"},[t._v(t._s(t.bpArr.status_name))]):t._e(),2===t.bpArr.status?s("v-uni-text",{staticClass:"black"},[t._v(t._s(t.bpArr.status_name))]):t._e(),3===t.bpArr.status?s("v-uni-text",{staticClass:"black"},[t._v(t._s(t.bpArr.status_name))]):t._e(),4===t.bpArr.status?s("v-uni-text",{staticClass:"black"},[t._v(t._s(t.bpArr.status_name))]):t._e()],1)],1),s("v-uni-view",{staticClass:"BP_hd_last"},[s("v-uni-view",{staticClass:"BP_hd_last_item"},[s("v-uni-view",{staticClass:"BP_hd_last_item_name"},[t._v("当前轮次及融资需求")]),s("v-uni-view",{staticClass:"BP_hd_last_item_js"},[t._v(t._s(t.bpArr.stage_name)+"︱"+t._s(t.bpArr.capital_name))])],1),s("v-uni-view",{staticClass:"gan"}),s("v-uni-view",{staticClass:"BP_hd_last_item br"},[s("v-uni-view",{staticClass:"BP_hd_last_item_name"},[t._v("所属领域")]),s("v-uni-view",{staticClass:"BP_hd_last_item_js"},[t._v(t._s(t.bpArr.field_name))])],1),s("v-uni-view",{staticClass:"gan"}),s("v-uni-view",{staticClass:"BP_hd_last_item"},[s("v-uni-view",{staticClass:"BP_hd_last_item_name"},[t._v("所属地")]),s("v-uni-view",{staticClass:"BP_hd_last_item_js"},[t._v(t._s(t.bpArr.address))])],1)],1)],1),s("v-uni-view",{staticClass:"company"},[s("v-uni-view",{staticClass:"find_title"},[s("v-uni-text",{staticClass:"shux"}),s("v-uni-text",{staticClass:"hd"},[t._v("公司信息：")])],1),s("v-uni-view",{staticClass:"company_content"},[s("v-uni-view",{},[s("v-uni-text",{staticClass:"company_title"},[t._v("公司全称："),s("v-uni-text",{staticClass:"company_qc"},[t._v(t._s(t.bpArr.company_name))])],1)],1),s("v-uni-view",{staticClass:"company_item"},[s("v-uni-text",{staticClass:"company_jan"},[t._v("公司简介：")]),s("v-uni-text",{staticClass:"company_nr"},[t._v(t._s(t.bpArr.company_desc))])],1)],1)],1),s("v-uni-view",{staticClass:"financing"},[s("v-uni-view",{staticClass:"find_title"},[s("v-uni-text",{staticClass:"shux"}),s("v-uni-text",{staticClass:"hd"},[t._v("融资经历：")])],1),s("v-uni-view",{staticClass:"financing_content"},[s("v-uni-view",{staticClass:"financing_text"},[t._v(t._s(t.bpArr.financing))])],1)],1),s("v-uni-view",{staticClass:"business"},[s("v-uni-view",{staticClass:"sy"},[s("v-uni-text",{staticClass:"shux"}),s("v-uni-text",{staticClass:"hd"},[t._v("商业计划书：")]),s("v-uni-text",{staticClass:"business_wj",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.down.apply(void 0,arguments)}}},[t._v(t._s(t.bpArr.file_name))])],1)],1)],1)},n=[];s.d(a,"a",function(){return i}),s.d(a,"b",function(){return n})},"8a6d":function(t,a,s){"use strict";s.r(a);var i=s("a21d"),n=s.n(i);for(var e in i)"default"!==e&&function(t){s.d(a,t,function(){return i[t]})}(e);a["default"]=n.a},a21d:function(t,a,s){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,s("386d"),s("4917"),s("3b2b");var i={data:function(){return{uid:"",bpArr:[]}},onLoad:function(t){this.uid=t.id},mounted:function(){var a=this,s=uni.getStorageSync("token"),i=this;uni.request({url:"http://zc.demo.yudw.com/api/user/bpInfo",method:"get",data:{id:this.uid,token:s},dataType:"json",success:function(s){if(403==s.data.status){var n=window.location.href;if(0==window.location.href.indexOf("code")||window.location.href.indexOf("code")<=0)uni.request({url:"http://zc.demo.yudw.com/api/login/get_code_url",method:"get",data:{baseUrl:n},dataType:"json",success:function(a){t.log(a),i.hr=a.data.data,window.location.href=a.data.data}});else{var e=a.getQueryString("code");uni.request({url:"http://zc.demo.yudw.com/api/login/login",method:"get",data:{code:e},dataType:"json",success:function(a){t.log(a,7897894566),1==a.data.status&&(t.log("登录成功"),t.log("token:",a.data.data.token),uni.setStorageSync("token",a.data.data.token))},fail:function(a){t.log(a)}})}}a.bpArr=s.data.data}})},methods:{down:function(){window.location.href=this.bpArr.file},getQueryString:function(t){var a=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),s=window.location.search.substr(1).match(a);return null!=s?unescape(s[2]):null}}};a.default=i}).call(this,s("5a52")["default"])},ceb9:function(t,a,s){"use strict";s.r(a);var i=s("8201"),n=s("8a6d");for(var e in n)"default"!==e&&function(t){s.d(a,t,function(){return n[t]})}(e);s("05af");var u=s("2877"),c=Object(u["a"])(n["default"],i["a"],i["b"],!1,null,"49711603",null);a["default"]=c.exports},d872:function(t,a,s){var i=s("3593");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=s("4f06").default;n("1dac9b25",i,!0,{sourceMap:!1,shadowMode:!1})}}]);