(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-findDetails-findDetails"],{"2fa6":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"pdr"},[n("v-uni-view",{staticClass:"head_fx"}),n("v-uni-view",{staticClass:"findeta"},[n("v-uni-view",{staticClass:"findeta_num"},[n("v-uni-text",[t._v(t._s(t.arr.add_time))]),n("v-uni-text",[t._v("浏览量:"+t._s(t.arr.volume_num))])],1),n("v-uni-view",{staticClass:"find_titles"},[n("v-uni-text",[t._v(t._s(t.arr.title))])],1),n("v-uni-view",{staticClass:"findeta_img"},[n("v-uni-image",{attrs:{src:t.arr.img,mode:""}})],1),n("v-uni-view",{staticClass:"findeta_cont"},[n("v-uni-text",{domProps:{innerHTML:t._s(t.arr.content)}},[t._v(t._s(t.arr.content))])],1)],1)],1)},e=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return e})},"636a":function(t,i,n){"use strict";n.r(i);var a=n("2fa6"),e=n("c786");for(var c in e)"default"!==c&&function(t){n.d(i,t,function(){return e[t]})}(c);n("82b8");var o=n("2877"),d=Object(o["a"])(e["default"],a["a"],a["b"],!1,null,"2ccb9f98",null);i["default"]=d.exports},"82b8":function(t,i,n){"use strict";var a=n("d51a"),e=n.n(a);e.a},c786:function(t,i,n){"use strict";n.r(i);var a=n("ecd6"),e=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(i,t,function(){return a[t]})}(c);i["default"]=e.a},d290:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".pdr[data-v-2ccb9f98]{padding-bottom:%?100?%}.findeta[data-v-2ccb9f98]{margin:%?40?% %?30?%}.findeta_num[data-v-2ccb9f98]{font-size:%?30?%;font-weight:400;color:#b5b5b5;display:-webkit-box;display:-webkit-flex;display:flex;height:%?40?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.find_titles[data-v-2ccb9f98]{height:%?69?%;line-height:%?40?%;margin:%?20?% 0 %?40?% 0}.find_titles uni-text[data-v-2ccb9f98]{font-size:%?36?%;font-weight:700;color:#525b63}.findeta_img[data-v-2ccb9f98]{margin-bottom:%?20?%}.findeta_cont[data-v-2ccb9f98]{width:%?688?%;overflow:hidden;white-space:pre-wrap;font-size:%?30?%;font-weight:400;color:#474747;line-height:%?50?%}.button[data-v-2ccb9f98]{margin-top:%?50?%}.findeta_img uni-image[data-v-2ccb9f98]{width:%?688?%;height:%?410?%;border-radius:%?10?%}.head_fx[data-v-2ccb9f98]{top:%?88?%;margin-bottom:%?30?%}",""])},d51a:function(t,i,n){var a=n("d290");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("f535cf22",a,!0,{sourceMap:!1,shadowMode:!1})},ecd6:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n("196a"),e={data:function(){return{id:"",arr:[]}},onLoad:function(t){this.id=t.id},mounted:function(){var t=this;(0,a.newsInfo)({id:this.id}).then(function(i){console.log(i),t.arr=i.data.data})},methods:{}};i.default=e}}]);