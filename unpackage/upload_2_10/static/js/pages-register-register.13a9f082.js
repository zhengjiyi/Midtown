(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"0e26":function(e,t,i){"use strict";i.r(t);var n=i("2a98"),a=i("d7b6");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("c3e2");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"ade8418e",null);t["default"]=r.exports},1063:function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("bd86")),o=n(i("b0e9")),s={components:{cityPicker:o.default},data:function(){var e;return e={userArr:[],array:[],index:0,indicatorStyle:"",visible:!0,code:"",mobile:"",countdown:"获取验证码",disabled:!1,timestatus:!1,clear:"",nickname:"",phone:"",email:"",company_name:"",position:"",city:""},(0,a.default)(e,"code",""),(0,a.default)(e,"desc",""),(0,a.default)(e,"avatar",""),(0,a.default)(e,"picked",{labels:["请选择您的所在城市>"]}),e},onBackPress:function(t){e.log(t),uni.switchTab({url:"/pages/index/home/home"})},mounted:function(){var t=this,i=uni.getStorageSync("token");uni.request({url:"http://zc.demo.yudw.com/api/config/getRegion",method:"GET",dataType:"json",success:function(e){t.array=e.data.data}}),uni.request({url:"http://zc.demo.yudw.com/api/user/getUser",method:"GET",data:{token:i},dataType:"json",success:function(i){e.log(i),t.userArr=i.data.date},fail:function(t){e.log(t)}})},methods:(0,a.default)({endCity:function(t){this.city=t.value,e.log(t.value),this.picked=t},formate:function(e){var t=[];for(var i in e)t.push({value:i,label:e[i]});return t},bindPickerChange:function(t){e.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},save:function(){var t=uni.getStorageSync("token");uni.request({url:"http://zc.demo.yudw.com/api/user/edit",method:"get",data:{token:t,nickname:this.nickname,phone:this.phone,email:this.email,company_name:this.company_name,position:this.position,city:this.city,code:this.code,desc:this.desc},dataType:"json",success:function(t){1===t.data.status?(e.log(t.data.msg),uni.showToast({title:t.data.msg,icon:"success",success:function(){setTimeout(function(){uni.switchTab({url:"../index/my/my"})},2e3)}})):uni.showToast({title:t.data.msg,icon:"none"})}})},getCode:function(){var t=this;if(""==t.phone)uni.showToast({title:"请输入手机号码",icon:"none"});else{e.log(111);var i=uni.getStorageSync("token");t.disabled=!0,uni.request({url:"http://zc.demo.yudw.com/api/user/sendSms",method:"GET",data:{token:i,mobile:this.phone},dataType:"json",success:function(i){1==i.data.status?(uni.showToast({title:i.data.msg,icon:"none"}),t.countdown=60,e.log(t.countdown),t.timestatus=!0,t.clear=setInterval(t.countDown,1e3)):(uni.showToast({title:i.data.msg,icon:"none"}),t.disabled=!1)},fail:function(t){e.log(t)}})}},countDown:function(){var e=this;e.countdown?--e.countdown:(e.disabled=!1,e.timestatus=!1,e.countdown="获取验证码",clearInterval(e.clear))}},"bindPickerChange",function(t){e.log(t.target.value),this.index=t.target.value})};t.default=s}).call(this,i("5a52")["default"])},"1d1c":function(e,t,i){"use strict";var n=i("dde9"),a=i.n(n);a.a},"2a98":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("姓名"),i("v-uni-text",{staticClass:"req"},[e._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:e.userArr.nickname},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("手机号码"),i("v-uni-text",{staticClass:"req"},[e._v("*")])],1),i("v-uni-input",{attrs:{type:"number",value:"","adjust-position":!1,placeholder:e.userArr.phone},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("工作邮箱"),i("v-uni-text",{staticClass:"req"},[e._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:e.userArr.email},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("公司名称"),i("v-uni-text",{staticClass:"req"},[e._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:e.userArr.company_name},model:{value:e.company_name,callback:function(t){e.company_name=t},expression:"company_name"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("职位"),i("v-uni-text",{staticClass:"req"},[e._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:e.userArr.position},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("所在城市"),i("v-uni-text",{staticClass:"req"},[e._v("*")])],1),i("cityPicker",{attrs:{pickerList:e.array,defaultValue:e.array,columnNum:"2"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.endCity.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cists"},[e._v(e._s(e.picked.labels.join("-")))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("公司简介")],1)],1),i("v-uni-view",{},[i("v-uni-textarea",{staticClass:"yjh",attrs:{placeholder:e.userArr.company_desc},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),e._v("短信验证码")],1),i("v-uni-input",{staticClass:"smscode",attrs:{type:"number",value:"","adjust-position":!1,placeholder:"请输入您的短信验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),i("v-uni-button",{staticClass:"get_vcode",attrs:{type:"primary",disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.countdown)),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.timestatus,expression:"timestatus"}],staticClass:"but_text"},[e._v("秒重获")])],1)],1),i("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v("保存")])],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"469f":function(e,t,i){i("6c1c"),i("1654"),e.exports=i("7d7b")},"4b8c":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("5d73"));i("c5f6");var o={props:{pickerList:{value:Array,require:!0,default:function(){return[]}},defaultValue:{value:Array,default:function(){return[]}},columnNum:{value:Number,default:0},itemRotateDeg:{value:Number,default:15},beforeSetColumn:{value:Function,default:null},customStyle:{value:Object,default:function(){return{cancel:{color:"#999"},confirm:{color:"#1CABEB"},column:[{flex:1},{flex:1},{flex:3}]}}}},data:function(){return{show:!1,columns:[],pickerItemHeight:Math.floor(68*screen.width/750),startScrollTop:0,lastPickedIndex:0,scrollingColumnIndex:0}},watch:{defaultValue:function(){this.init()}},mounted:function(){},methods:{init:function(){this.setColumn(0,this.pickerList)},showPicker:function(){var e=this;if(this.init(),this.inited)this.show=!0;else{var t=this.$refs.picker;document.body.appendChild(t),setTimeout(function(){e.show=!0},20),this.inited=!0}},confirm:function(){var e={index:[],value:[],label:[],indexes:[],values:[],labels:[]},t=!0,i=!1,n=void 0;try{for(var o,s=(0,a.default)(this.columns);!(t=(o=s.next()).done);t=!0){var r=o.value,c=this.columnPickedInfo(r);c?(e.index=c.index,e.value=c.value,e.label=c.label,e.indexes.push(c.index),e.values.push(c.value),e.labels.push(c.label)):(e.indexes.push(null),e.values.push(null),e.labels.push(null))}}catch(l){i=!0,n=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw n}}this.$emit("confirm",e),this.hide()},cancel:function(){this.$emit("cancel"),this.hide()},hide:function(){this.show=!1},columnPickedInfo:function(e){return e.pickerList.length<1?null:{index:e.pickedIndex,value:e.pickerList[e.pickedIndex].value,label:e.pickerList[e.pickedIndex].label}},touchstart:function(e){this.scrollingColumnIndex=e.currentTarget.dataset.column,this.startScrollTop=e.changedTouches[0].clientY,this.lastPickedIndex=this.columns[this.scrollingColumnIndex].pickedIndex},touchmove:function(e){var t=this.startScrollTop-e.changedTouches[0].clientY,i=Math.round(t/this.pickerItemHeight),n=this.lastPickedIndex+i,a=this.columns[this.scrollingColumnIndex];a.pickedIndex!==n&&n>=0&&n<a.pickerList.length&&(a.pickedIndex=n,this.$emit("change",a.index,this.columnPickedInfo(a)),this.scrollColumn(a))},setColumn:function(e,t){if(!(5===e||this.columnNum>0&&e>=this.columnNum)){t=t||[];var i=t;if(this.beforeSetColumn&&(i=this.beforeSetColumn(e,i)),i.length<1){if(0===this.columnNum)return this.$delete(this.columns,e),void this.clearChildrenColumns(e,!0);if(!(e<this.columnNum))return;this.clearChildrenColumns(e)}var n=this.columns[e]||{},a={index:e,pickerList:i,pickedIndex:0};a.pickedIndex=Math.min(n.pickedIndex,a.pickerList.length-1)||0;var o=this.defaultValue&&this.defaultValue[e]||!1;void 0===n.pickedIndex&&!1!==o&&a.pickerList.map(function(e,t){e.value==o&&(a.pickedIndex=t)}),this.scrollColumn(a),this.$set(this.columns,e,a)}},scrollColumn:function(e){this.setColumn(e.index+1,e.pickerList[e.pickedIndex].children||[{value:"",label:""}]);var t=e.pickedIndex*this.pickerItemHeight;e.animationData=uni.createAnimation({duration:200,timingFunction:"linear"}).translateY(-t).step().export()},clearChildrenColumns:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i?this.columns.filter(function(t){return t.index<e}):this.columns.map(function(i){i.index>e&&t.setColumn(i.index,[])})},pickerItemStyle:function(e,t){var i=Math.abs(e-t);return i<=3?{transform:"rotateX("+i*this.itemRotateDeg+"deg)"}:{}}}};t.default=o},5696:function(e,t,i){"use strict";i.r(t);var n=i("4b8c"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"5b24":function(e,t,i){var n=i("b742");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("dfa648f2",n,!0,{sourceMap:!1,shadowMode:!1})},"5d73":function(e,t,i){e.exports=i("469f")},"7d7b":function(e,t,i){var n=i("e4ae"),a=i("7cd6");e.exports=i("584a").getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},"9e24":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPicker.apply(void 0,arguments)}}},[e._t("default")],2),i("div",{ref:"picker",staticClass:"picker-pop",on:{touchmove:function(t){t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"picker-mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}}),i("div",{staticClass:"picker-panel",class:{"picker-panel-translate":e.show}},[i("div",{staticClass:"picker-action"},[i("p",{staticClass:"cancel",style:e.customStyle.cancel,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v("取消")]),i("p",{staticClass:"confirm",style:e.customStyle.confirm,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v("确定")])]),i("div",{staticClass:"picker-content"},e._l(e.columns,function(t,n){return i("div",{staticClass:"picker-column",style:e.customStyle.column[n],attrs:{"data-column":n},on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.touchstart.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=e.$handleEvent(t),e.touchmove.apply(void 0,arguments)}}},[i("div",{staticClass:"scroll-wrapper"},[i("div",{staticClass:"top-cover"}),i("div",{staticClass:"bottom-cover"}),i("v-uni-view",{staticClass:"scroll-list",attrs:{animation:t.animationData}},e._l(t.pickerList,function(n,a){return i("div",{key:n.value},[i("div",{staticClass:"picker-item",style:e.pickerItemStyle(t.pickedIndex,a)},[e._v(e._s(n.label))])])}),0)],1)])}),0)])])])},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},b0e9:function(e,t,i){"use strict";i.r(t);var n=i("9e24"),a=i("5696");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("1d1c");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"1044d432",null);t["default"]=r.exports},b742:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-common-mt[data-v-ade8418e]{margin:0 %?30?%;padding-bottom:%?250?%}.uni-form-item[data-v-ade8418e]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?34?% 0;border-bottom:%?2?% solid #f1f1f1;position:relative}uni-label[data-v-ade8418e]{font-size:%?30?%;font-weight:400;color:#464f57}.cists[data-v-ade8418e],uni-input[data-v-ade8418e]{font-size:%?26?%;font-weight:400;color:#a9a9a9;text-align:right;position:absolute;right:0}.req[data-v-ade8418e]{color:red}.smscode[data-v-ade8418e]{position:relative}.yjh[data-v-ade8418e]{width:%?688?%;height:%?171?%;background:#f1f1f1;border-radius:%?5?%;font-size:%?26?%;font-weight:400;color:#919191;text-indent:%?23?%}.get_vcode[data-v-ade8418e]{width:%?177?%;height:%?51?%;line-height:%?50?%;border:%?2?% solid #b6000e;border-radius:%?26?%;font-size:%?26?%;color:#b6000e!important;background:none}.but_text[data-v-ade8418e]{font-size:%?26?%;font-weight:400;color:#b6000e!important}.button[data-v-ade8418e]{margin:%?50?% 0}.buus[data-v-ade8418e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?50?% 0 %?100?% 0}.cacle[data-v-ade8418e]{width:%?260?%;height:%?66?%;background:#999;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.baocun[data-v-ade8418e]{width:%?260?%;height:%?66?%;background:#deb156;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.buus uni-view[data-v-ade8418e]{text-align:center;margin:0 %?25?%}",""])},c3e2:function(e,t,i){"use strict";var n=i("5b24"),a=i.n(n);a.a},d295:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.picker-pop .picker-mask[data-v-1044d432]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;width:100vw;height:100vh;background-color:rgba(0,0,0,.6)}.picker-pop .picker-panel[data-v-1044d432]{position:fixed;bottom:0;left:0;z-index:999;width:100%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.picker-pop .picker-panel .picker-action[data-v-1044d432]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.picker-pop .picker-panel .picker-action[data-v-1044d432]:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-action p[data-v-1044d432]{color:#999;padding:%?30?%;line-height:%?32?%;height:%?32?%;font-size:%?32?%}.picker-pop .picker-panel .picker-action .confirm[data-v-1044d432]{color:#1cabeb}.picker-pop .picker-panel .picker-content[data-v-1044d432]{height:calc(%?68?% * 7);overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.picker-pop .picker-panel .picker-content .picker-column[data-v-1044d432]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%;overflow:hidden}.picker-pop .picker-panel .picker-content .scroll-wrapper[data-v-1044d432]{position:relative;height:calc(%?68?% * 7)}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432],.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-1044d432]{width:100%;position:absolute;z-index:1;-webkit-transform:translateZ(0);transform:translateZ(0);height:calc(%?68?% * 3);background:-webkit-linear-gradient(bottom,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(0deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432]:before,.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-1044d432]:before{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-1044d432]{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432]{bottom:0;background:-webkit-linear-gradient(top,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(180deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-1044d432]:before{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list[data-v-1044d432]{padding-top:calc(%?68?% * 3)}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list .picker-item[data-v-1044d432]{text-align:center;font-size:%?32?%;line-height:%?68?%;height:%?68?%;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.picker-pop .picker-panel-translate[data-v-1044d432]{-webkit-transform:translate(0);transform:translate(0)}',""])},d7b6:function(e,t,i){"use strict";i.r(t);var n=i("1063"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},dde9:function(e,t,i){var n=i("d295");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("bb7fc57e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);