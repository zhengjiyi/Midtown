(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newDetails-newDetails"],{"0d67":function(t,a,n){"use strict";n.r(a);var e=n("b5dc"),i=n("fc4c");for(var s in i)"default"!==s&&function(t){n.d(a,t,function(){return i[t]})}(s);n("1944");var o=n("2877"),c=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,"5f650f9d",null);a["default"]=c.exports},1944:function(t,a,n){"use strict";var e=n("1f70"),i=n.n(e);i.a},"1f70":function(t,a,n){var e=n("3a95");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("73ef38f5",e,!0,{sourceMap:!1,shadowMode:!1})},"3a95":function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".BP_hd[data-v-5f650f9d]{height:auto}.company[data-v-5f650f9d]{border:none;margin-bottom:%?114?%}",""])},a3123:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("196a"),i={data:function(){return{type:"advert",value:!1,mData:{src:"../../static/img/company_logo.png",width:"600upx",height:"350upx"},id:"",detailsArr:[]}},methods:{showModel:function(){console.log(111),this.value=!0},onConfirm:function(){this.value=!1},cancel:function(){this.value=!1}},onLoad:function(t){this.id=t.id},mounted:function(){var t=this;(0,e.investorInfo)({id:this.id}).then(function(a){console.log(a,111),t.detailsArr=a.data.date});var a=localStorage.getItem("token");(0,e.checkRegist)({token:a}).then(function(a){console.log(a.data.data),t.check=a.data.data,1!=a.data.data&&uni.showModal({title:"请先注册",success:function(t){t.confirm?(console.log(1),uni.navigateTo({url:"/pages/register/register"})):t.cancel&&console.log(2)}})})}};a.default=i},b5dc:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"BP"},[n("v-uni-view",{staticClass:"BP_hd"},[n("v-uni-view",{staticClass:"BP_hd_frist"},[n("v-uni-view",{staticClass:"company_logo_img"},[n("v-uni-image",{staticClass:"company_logo",attrs:{src:t.detailsArr.logo,mode:""}})],1),n("v-uni-view",{staticClass:"BP_hd_cont"},[n("v-uni-view",{staticClass:"company_name"},[t._v(t._s(t.detailsArr.company_name))]),n("v-uni-view",{staticClass:"company-desc"},[t._v(t._s(t.detailsArr.city))])],1)],1)],1),n("v-uni-view",{staticClass:"projectBrief"},[n("v-uni-view",{staticClass:"find_title"},[n("v-uni-text",{staticClass:"shux"}),n("v-uni-text",{staticClass:"hd"},[t._v("机构简介：")])],1),n("v-uni-text",{staticClass:"projectBrief_text"},[t._v(t._s(t.detailsArr.company_desc))])],1),n("v-uni-view",{staticClass:"find_title"},[n("v-uni-text",{staticClass:"shux"}),n("v-uni-text",{staticClass:"hd"},[t._v("投资偏好：")])],1),n("v-uni-text",{staticClass:"projectBrief_text"},[t._v(t._s(t.detailsArr.stage_desc))]),n("v-uni-view",{staticClass:"content"},[n("chunLei-modal",{attrs:{mData:t.mData,type:t.type,navMask:""},on:{onConfirm:function(a){arguments[0]=a=t.$handleEvent(a),t.onConfirm.apply(void 0,arguments)},cancel:function(a){arguments[0]=a=t.$handleEvent(a),t.cancel.apply(void 0,arguments)}},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),n("v-uni-view",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModel.apply(void 0,arguments)}}},[t._v("联系平台")])],1)},i=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return i})},fc4c:function(t,a,n){"use strict";n.r(a);var e=n("a3123"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);a["default"]=i.a}}]);