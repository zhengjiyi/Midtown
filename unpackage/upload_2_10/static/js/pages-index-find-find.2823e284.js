(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-find-find"],{"0b45":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.itenArr,function(e,n){return i("v-uni-view",{key:n,staticClass:"new",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoDetails(e)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"new_deso"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"new_time"},[i("v-uni-text",[t._v(t._s(e.add_time))]),i("v-uni-text",{staticClass:"fr"},[t._v("浏览量 : "+t._s(e.volume_num))])],1)],1),i("v-uni-view",{staticClass:"new_img"},[i("v-uni-image",{staticClass:"new_imgs",attrs:{src:e.img,mode:""}})],1)],1)}),1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"0b79":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{bannerList:{type:Array,default:function(){return[]}},swiperConfig:{type:Object,default:function(){return{indicatorDots:!0,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",autoplay:!1,interval:3e3,duration:300,circular:!0,previousMargin:"58rpx",nextMargin:"58rpx"}}},scaleX:{type:String,default:(634/550).toFixed(4)},scaleY:{type:String,default:(378/328).toFixed(4)}},computed:{listLen:function(){return this.bannerList.length}},data:function(){return{curIndex:0,descIndex:0,isDescAnimating:!1}},methods:{swiperChange:function(e){t.log(e);var i=this;this.curIndex=e.mp.detail.current,this.isDescAnimating=!0;var n=setTimeout(function(){i.descIndex=e.mp.detail.current,clearTimeout(n)},150)},animationfinish:function(t){this.isDescAnimating=!1},getBannerDetail:function(e){t.log(e),""==e.href?uni.navigateTo({url:"/pages/findDetails/findDetails?id="+e.id}):window.location.href=e.href}}};e.default=i}).call(this,i("5a52")["default"])},"306b":function(t,e,i){var n=i("fdf5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37f3eec6",n,!0,{sourceMap:!1,shadowMode:!1})},"331c":function(t,e,i){"use strict";i.r(e);var n=i("af6c"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"3cb9":function(t,e,i){"use strict";var n=i("59bc"),a=i.n(n);a.a},"3e73":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".fr[data-v-cab3066e]{float:right}.new[data-v-cab3066e]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?1?% solid #f1f1f1;padding-bottom:%?41?%;margin:%?30?%}.new_img[data-v-cab3066e]{width:%?246?%;height:%?164?%;background:#efefef;border-radius:%?10?%;margin-left:%?27?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new_imgs[data-v-cab3066e]{width:%?246?%;height:%?164?%;border-radius:%?10?%}.new_deso[data-v-cab3066e]{width:%?402?%;height:%?130?%;font-size:%?30?%;font-weight:700;color:#525b63;line-height:%?40?%;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.new_time[data-v-cab3066e]{width:%?400?%;height:%?30?%;font-size:%?25?%;font-weight:400;color:#b5b5b5;line-height:%?30?%}",""])},"3fda":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"find_title"},[i("v-uni-text",{staticClass:"shux"}),i("v-uni-text",{staticClass:"hd"},[t._v("热门活动")])],1),i("banner",{attrs:{"banner-list":t.bannerList,"swiper-config":t.swiperConfig}}),i("v-uni-view",{staticClass:"br"},[i("v-uni-view",{staticClass:"find_title "},[i("v-uni-text",{staticClass:"shux"}),i("v-uni-text",{staticClass:"hd"},[t._v("新闻资讯")])],1),i("findItem",{attrs:{itenArr:t.itenArr}}),i("v-uni-view",{staticClass:"tost"},[t._v(t._s(t.loadingText))])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},5371:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner-container"},[i("v-uni-swiper",{style:{width:"100vw",height:"410rpx"},attrs:{"indicator-dots":t.swiperConfig.indicatorDots,"indicator-color":t.swiperConfig.indicatorColor,"indicator-active-color":t.swiperConfig.indicatorActiveColor,autoplay:t.swiperConfig.autoplay,interval:t.swiperConfig.interval,duration:t.swiperConfig.duration,circular:t.swiperConfig.circular,"previous-margin":t.swiperConfig.previousMargin,"next-margin":t.swiperConfig.nextMargin},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.bannerList,function(e,n){return i("v-uni-swiper-item",{key:n},[i("div",{staticClass:"image-container",class:[0===t.curIndex?n===t.listLen-1?"item-left":1===n?"item-right":"item-center":t.curIndex===t.listLen-1?0===n?"item-right":n===t.listLen-2?"item-left":"item-center":n===t.curIndex-1?"item-left":n===t.curIndex+1?"item-right":"item-center"]},[i("v-uni-image",{staticClass:"slide-image",style:{transform:t.curIndex===n?"scale("+t.scaleX+","+t.scaleY+")":"scale(1,1)",transitionDuration:".3s",transitionTimingFunction:"ease"},attrs:{src:e.img},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getBannerDetail(e)}}})],1)])}),1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},5595:function(t,e,i){var n=i("3e73");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("431279d7",n,!0,{sourceMap:!1,shadowMode:!1})},"59b7":function(t,e,i){"use strict";i.r(e);var n=i("66dd"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"59bc":function(t,e,i){var n=i("8b84");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("44ac6cdd",n,!0,{sourceMap:!1,shadowMode:!1})},"61d7":function(t,e,i){"use strict";i.r(e);var n=i("5371"),a=i("645d");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("3cb9");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"c00639c6",null);e["default"]=s.exports},"645d":function(t,e,i){"use strict";i.r(e);var n=i("0b79"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"66dd":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{itenArr:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{gotoDetails:function(e){t.log(e),""==e.href?uni.navigateTo({url:"/pages/findDetails/findDetails?id="+e.id}):window.location.href=e.href}}};e.default=i}).call(this,i("5a52")["default"])},"79b8":function(t,e,i){"use strict";i.r(e);var n=i("0b45"),a=i("59b7");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("9839");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"cab3066e",null);e["default"]=s.exports},"8b84":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.banner-container[data-v-c00639c6]{width:100vw;height:%?424?%}.banner-container .image-container[data-v-c00639c6]{box-sizing:border-box;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.banner-container .image-container .slide-image[data-v-c00639c6]{width:%?686?%;height:%?293?%;z-index:200;border-radius:%?24?%}.banner-container .item-left[data-v-c00639c6]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?56?% %?26?% 0 0}.banner-container .item-right[data-v-c00639c6]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?56?% 0 0 %?26?%}.banner-container .item-center[data-v-c00639c6]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?56?% 0 0 0}.banner-container .desc-wrap[data-v-c00639c6]{box-sizing:border-box;width:100%;height:%?98?%;padding:%?24?% %?66?% 0}.banner-container .desc-wrap .title[data-v-c00639c6]{width:100%;height:%?42?%;line-height:%?42?%;color:#222;font-size:%?30?%;font-family:PingFangTC-Regular;font-weight:600;text-align:left}.banner-container .desc-wrap .desc[data-v-c00639c6]{margin-top:%?4?%;width:100%;height:%?34?%;line-height:%?34?%;color:#999;font-size:%?24?%;font-family:PingFangTC-Regular;text-align:left}@keyframes descAnimation-data-v-c00639c6{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}to{opacity:1}}@-webkit-keyframes descAnimation-data-v-c00639c6{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}to{opacity:1}}.banner-container .hideAndShowDesc[data-v-c00639c6]{animation:descAnimation-data-v-c00639c6 .3s ease 1;-webkit-animation:descAnimation-data-v-c00639c6 .3s ease 1}',""])},9839:function(t,e,i){"use strict";var n=i("5595"),a=i.n(n);a.a},af6c:function(t,e,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("75fc")),r=n(i("f499")),o=n(i("61d7")),s=n(i("79b8")),c={components:{banner:o.default,findItem:s.default},data:function(){return{list:[],bannerList:[],swiperConfig:{indicatorDots:!0,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",autoplay:!1,interval:3e3,duration:300,circular:!0,previousMargin:"58rpx",nextMargin:"58rpx"},itenArr:[],page:1,num:2,loadingText:"上拉加载更多数据",oldArr:[],tempArr:[]}},onTabItemTap:function(){uni.navigateBack()},onReachBottom:function(){this.tempArr.length<this.num?this.loadingText="没有更多数据了":(this.page++,this.getnewList(!0))},methods:{getnewList:function(e){var i=this,n=[];uni.request({url:"http://zc.demo.yudw.com/api/news/getNews",method:"get",data:{page:this.page,num:this.num},dataType:"json",success:function(o){var s;(t.log(o,"新闻"),n=o.data.data,i.tempArr=n,i.tempArr.length<i.num)?i.loadingText="没有更多数据了":e?(i.oldArr=JSON.parse((0,r.default)(i.itenArr)),(s=i.oldArr).push.apply(s,(0,a.default)(n)),i.itenArr=i.oldArr):i.itenArr=n},fail:function(e){t.log(e)}})}},mounted:function(){var e=this;uni.request({url:"http://zc.demo.yudw.com/api/news/index",method:"GET",dataType:"json",success:function(i){t.log(i,"活动"),e.bannerList=i.data.data},fail:function(e){t.log(e)}}),this.getnewList()}};e.default=c}).call(this,i("5a52")["default"])},ce50:function(t,e,i){"use strict";var n=i("306b"),a=i.n(n);a.a},fbee:function(t,e,i){"use strict";i.r(e);var n=i("3fda"),a=i("331c");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("ce50");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"7e35f5b0",null);e["default"]=s.exports},fdf5:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".br[data-v-7e35f5b0]{border-top:%?13?% solid #f1f1f1}.find_title[data-v-7e35f5b0]{margin:%?35?% %?30?% %?0?%}.shux[data-v-7e35f5b0]{display:inline-block;width:%?6?%;height:%?35?%;background:#deb156;border-radius:%?3?%;margin-right:%?17?%;vertical-align:middle}.hd[data-v-7e35f5b0]{font-size:%?32?%;font-weight:700;color:#464f57}.fr[data-v-7e35f5b0]{float:right}.new[data-v-7e35f5b0]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?1?% solid #f1f1f1;padding-bottom:%?41?%;margin:%?30?%}.new_img[data-v-7e35f5b0]{width:%?246?%;height:%?164?%;background:#efefef;border-radius:%?10?%;margin-left:%?27?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new_imgs[data-v-7e35f5b0]{width:%?246?%;height:%?164?%;border-radius:%?10?%}.new_deso[data-v-7e35f5b0]{width:%?402?%;height:%?130?%;font-size:%?28?%;font-weight:700;color:#525b63;line-height:%?40?%}.new_time[data-v-7e35f5b0]{width:%?400?%;height:%?20?%;font-size:%?20?%;font-weight:400;color:#b5b5b5;line-height:%?26?%}",""])}}]);