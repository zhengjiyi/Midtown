(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-findDetails-findDetails"],{2356:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".pdr[data-v-1ebc01d6]{padding-bottom:%?100?%}.findeta[data-v-1ebc01d6]{margin:%?40?% %?30?%}.findeta_num[data-v-1ebc01d6]{font-size:%?30?%;font-weight:400;color:#b5b5b5;display:-webkit-box;display:-webkit-flex;display:flex;height:%?40?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.find_titles[data-v-1ebc01d6]{height:%?69?%;line-height:%?40?%;margin:%?20?% 0 %?40?% 0}.find_titles uni-text[data-v-1ebc01d6]{font-size:%?36?%;font-weight:700;color:#525b63}.findeta_img[data-v-1ebc01d6]{margin-bottom:%?20?%}.findeta_cont[data-v-1ebc01d6]{width:%?688?%;overflow:hidden;white-space:pre-wrap;font-size:%?30?%;font-weight:400;color:#474747;line-height:%?50?%}.button[data-v-1ebc01d6]{margin-top:%?50?%}.findeta_img uni-image[data-v-1ebc01d6]{width:%?688?%;height:%?410?%;border-radius:%?10?%}.head_fx[data-v-1ebc01d6]{top:%?80?%;margin-bottom:%?30?%}@media (min-width:750px){.findeta_num[data-v-1ebc01d6]{font-size:20px}.find_titles[data-v-1ebc01d6]{font-size:25px!important}.findeta_cont uni-text[data-v-1ebc01d6]{font-size:25px!important}.head_fx[data-v-1ebc01d6]{top:45px;height:11px}.findeta[data-v-1ebc01d6]{margin:30px!important}.findeta_img uni-image[data-v-1ebc01d6]{width:400px!important;height:200px!important}}",""])},"33ea":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{id:"",arr:[]}},onLoad:function(t){this.id=t.id},mounted:function(){var t=this;uni.request({url:"http://zc.demo.yudw.com/api/news/info",method:"get",dataType:"json",data:{id:this.id},success:function(i){t.arr=i.data.data}})},methods:{}};i.default=a},4635:function(t,i,e){var a=e("2356");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("1515f63d",a,!0,{sourceMap:!1,shadowMode:!1})},"636a":function(t,i,e){"use strict";e.r(i);var a=e("b1fd"),n=e("c786");for(var d in n)"default"!==d&&function(t){e.d(i,t,function(){return n[t]})}(d);e("ad1a");var o=e("f0c5"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1ebc01d6",null);i["default"]=s.exports},ad1a:function(t,i,e){"use strict";var a=e("4635"),n=e.n(a);n.a},b1fd:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"pdr"},[e("v-uni-view",{staticClass:"head_fx"}),e("v-uni-view",{staticClass:"findeta"},[e("v-uni-view",{staticClass:"findeta_num"},[e("v-uni-text",[t._v(t._s(t.arr.add_time))]),e("v-uni-text",[t._v("浏览量:"+t._s(t.arr.volume_num))])],1),e("v-uni-view",{staticClass:"find_titles"},[e("v-uni-text",{staticClass:"find_titles_text"},[t._v(t._s(t.arr.title))])],1),e("v-uni-view",{staticClass:"findeta_img"},[e("v-uni-image",{attrs:{src:t.arr.img,mode:""}})],1),e("v-uni-view",{staticClass:"findeta_cont"},[e("v-uni-text",{domProps:{innerHTML:t._s(t.arr.content)}},[t._v(t._s(t.arr.content))])],1)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},c786:function(t,i,e){"use strict";e.r(i);var a=e("33ea"),n=e.n(a);for(var d in a)"default"!==d&&function(t){e.d(i,t,function(){return a[t]})}(d);i["default"]=n.a}}]);