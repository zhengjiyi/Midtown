(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"0e26":function(t,e,i){"use strict";i.r(e);var n=i("df60"),a=i("d7b6");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("adf2");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"3111c27d",null);e["default"]=c.exports},1063:function(t,e,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("bd86")),o=n(i("b0e9")),s={components:{cityPicker:o.default},data:function(){var t;return t={userArr:[],array:[],index:0,indicatorStyle:"",visible:!0,code:"",mobile:"",countdown:"获取验证码",disabled:!1,timestatus:!1,clear:"",nickname:"",phone:"",email:"",company_name:"",position:"",city:""},(0,a.default)(t,"code",""),(0,a.default)(t,"desc",""),(0,a.default)(t,"avatar",""),(0,a.default)(t,"picked",{labels:["请选择您的所在城市>"]}),t},onBackPress:function(e){t.log(e),uni.switchTab({url:"/pages/index/home/home"})},mounted:function(){var e=this,i=uni.getStorageSync("token");uni.request({url:"http://zc.demo.yudw.com/api/config/getRegion",method:"GET",dataType:"json",success:function(t){e.array=t.data.data}}),uni.request({url:"http://zc.demo.yudw.com/api/user/checkRegist",method:"GET",data:{token:i},dataType:"json",success:function(n){t.log(n),e.check=n.data.data,1==n.data.data&&uni.request({url:"http://zc.demo.yudw.com/api/user/getUser",method:"GET",data:{token:i},dataType:"json",success:function(i){t.log(i),e.userArr=i.data.date},fail:function(e){t.log(e)}})},fail:function(e){t.log(e)}})},methods:(0,a.default)({endCity:function(e){this.city=e.value,t.log(e.value),this.picked=e},formate:function(t){var e=[];for(var i in t)e.push({value:i,label:t[i]});return e},bindPickerChange:function(e){t.log("picker发送选择改变，携带值为",e.target.value),this.index=e.target.value},save:function(){var e=uni.getStorageSync("token");uni.request({url:"http://zc.demo.yudw.com/api/user/edit",method:"get",data:{token:e,nickname:this.nickname,phone:this.phone,email:this.email,company_name:this.company_name,position:this.position,city:this.city,code:this.code,desc:this.desc},dataType:"json",success:function(e){1===e.data.status?(t.log(e.data.msg),uni.showToast({title:e.data.msg,icon:"success",success:function(){setTimeout(function(){uni.switchTab({url:"../index/my/my"})},2e3)}})):uni.showToast({title:e.data.msg,icon:"none"})}})},getCode:function(){var e=this;if(""==e.phone)uni.showToast({title:"请输入手机号码",icon:"none"});else{t.log(111);var i=uni.getStorageSync("token");e.disabled=!0,uni.request({url:"http://zc.demo.yudw.com/api/user/sendSms",method:"GET",data:{token:i,mobile:this.phone},dataType:"json",success:function(i){1==i.data.status?(uni.showToast({title:i.data.msg,icon:"none"}),e.countdown=60,t.log(e.countdown),e.timestatus=!0,e.clear=setInterval(e.countDown,1e3)):(uni.showToast({title:i.data.msg,icon:"none"}),e.disabled=!1)},fail:function(e){t.log(e)}})}},countDown:function(){var t=this;t.countdown?--t.countdown:(t.disabled=!1,t.timestatus=!1,t.countdown="获取验证码",clearInterval(t.clear))}},"bindPickerChange",function(e){t.log(e.target.value),this.index=e.target.value})};e.default=s}).call(this,i("5a52")["default"])},"3c6b":function(t,e,i){var n=i("c0c5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b198e17e",n,!0,{sourceMap:!1,shadowMode:!1})},"469f":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("7d7b")},"4b8c":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5d73"));i("ac6a");var o=n(i("a745"));i("c5f6");var s={props:{pickerList:{value:Array,require:!0,default:function(){return[]}},pickerKey:{value:Object,default:function(){return{value:"value",label:"label",children:"children"}}},pickerStyle:{value:Object,default:function(){return{cancel:{},confirm:{},column:[]}}},defaultValue:{value:Array,default:function(){return[]}},columnNum:{value:Number,default:0},itemRotateDeg:{value:Number,default:15},beforeSetColumn:{value:Function,default:null}},data:function(){return{show:!1,reactModel:!0,columns:[],pickerItemHeight:Math.floor(68*screen.width/750),startScrollTop:0,lastPickedIndex:0,scrollingColumnIndex:0}},watch:{pickerList:function(){this.init()},defaultValue:function(){this.init()}},mounted:function(){},methods:{init:function(){var t=this;(0,o.default)(this.pickerList[0])?(this.pickerList.forEach(function(e,i){t.setColumn(i,e)}),this.reactModel=!1):this.setColumn(0,this.pickerList)},showPicker:function(){var t=this;if(this.init(),this.inited)this.show=!0;else{var e=this.$refs.picker;document.body.appendChild(e),setTimeout(function(){t.show=!0},20),this.inited=!0}},confirm:function(){var t={index:[],value:[],label:[],indexes:[],values:[],labels:[]},e=!0,i=!1,n=void 0;try{for(var o,s=(0,a.default)(this.columns);!(e=(o=s.next()).done);e=!0){var c=o.value,r=this.columnPickedInfo(c);r?(t.index=r.index,t.value=r.value,t.label=r.label,t.indexes.push(r.index),t.values.push(r.value),t.labels.push(r.label)):(t.indexes.push(null),t.values.push(null),t.labels.push(null))}}catch(l){i=!0,n=l}finally{try{e||null==s.return||s.return()}finally{if(i)throw n}}this.$emit("confirm",t),this.hide()},cancel:function(){this.$emit("cancel"),this.hide()},hide:function(){this.show=!1},columnPickedInfo:function(t){return t.pickerList.length<1?null:{index:t.pickedIndex,value:t.pickerList[t.pickedIndex][this.pickerKey.value],label:t.pickerList[t.pickedIndex][this.pickerKey.label]}},touchstart:function(t){this.scrollingColumnIndex=t.currentTarget.dataset.column,this.startScrollTop=t.changedTouches[0].clientY,this.lastPickedIndex=this.columns[this.scrollingColumnIndex].pickedIndex},touchmove:function(t){var e=this.startScrollTop-t.changedTouches[0].clientY,i=Math.round(e/this.pickerItemHeight),n=this.lastPickedIndex+i,a=this.columns[this.scrollingColumnIndex];a.pickedIndex!==n&&n>=0&&n<a.pickerList.length&&(a.pickedIndex=n,this.$emit("change",a.index,this.columnPickedInfo(a)),this.scrollColumn(a))},setColumn:function(t,e){var i=this;if(!(5===t||this.columnNum>0&&t>=this.columnNum)){e=e||[];var n=e;if(this.beforeSetColumn&&(n=this.beforeSetColumn(t,n)),n.length<1){if(0===this.columnNum)return void this.clearColumns(t);if(!(t<this.columnNum))return;this.setColumn(t+1,[])}var a=this.columns[t]||{},o={index:t,pickerList:n,pickedIndex:0};o.pickedIndex=Math.min(a.pickedIndex,o.pickerList.length-1)||0;var s=this.defaultValue&&this.defaultValue[t]||!1;void 0===a.pickedIndex&&!1!==s&&o.pickerList.map(function(t,e){t[i.pickerKey.value]==s&&(o.pickedIndex=e)}),this.scrollColumn(o),this.$set(this.columns,t,o)}},scrollColumn:function(t){var e=t.pickedIndex*this.pickerItemHeight;t.animationData=uni.createAnimation({duration:200,timingFunction:"linear"}).translateY(-e).step().export(),this.reactModel&&t.pickerList[t.pickedIndex]&&this.setColumn(t.index+1,t.pickerList[t.pickedIndex][this.pickerKey.children])},clearColumns:function(t){this.columns=this.columns.filter(function(e){return e.index<t})},pickerItemStyle:function(t,e){var i=Math.abs(t-e);return i<=3?{transform:"rotateX("+i*this.itemRotateDeg+"deg)"}:{}}}};e.default=s},5696:function(t,e,i){"use strict";i.r(e);var n=i("4b8c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"5d73":function(t,e,i){t.exports=i("469f")},"7d7b":function(t,e,i){var n=i("e4ae"),a=i("7cd6");t.exports=i("584a").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},"889d":function(t,e,i){"use strict";var n=i("d023"),a=i.n(n);a.a},adf2:function(t,e,i){"use strict";var n=i("3c6b"),a=i.n(n);a.a},b0e9:function(t,e,i){"use strict";i.r(e);var n=i("bda9"),a=i("5696");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("889d");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"52285f6e",null);e["default"]=c.exports},bda9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPicker.apply(void 0,arguments)}}},[t._t("default")],2),i("div",{ref:"picker",staticClass:"picker-pop",on:{touchmove:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"picker-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}}),i("div",{staticClass:"picker-panel",class:{"picker-panel-translate":t.show}},[i("div",{staticClass:"picker-action"},[i("p",{staticClass:"cancel",style:t.pickerStyle.cancel,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")]),i("p",{staticClass:"confirm",style:t.pickerStyle.confirm,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确定")])]),i("div",{staticClass:"picker-content"},t._l(t.columns,function(e,n){return i("div",{staticClass:"picker-column",style:t.pickerStyle.column[n],attrs:{"data-column":n},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)}}},[i("div",{staticClass:"scroll-wrapper"},[i("div",{staticClass:"top-cover"}),i("div",{staticClass:"bottom-cover"}),i("v-uni-view",{staticClass:"scroll-list",attrs:{animation:e.animationData}},t._l(e.pickerList,function(n,a){return i("div",[i("div",{staticClass:"picker-item",style:t.pickerItemStyle(e.pickedIndex,a)},[t._v(t._s(n[t.pickerKey.label]))])])}),0)],1)])}),0)])])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},c0c5:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-common-mt[data-v-3111c27d]{margin:0 %?30?%;padding-bottom:%?250?%}.uni-form-item[data-v-3111c27d]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?34?% 0;border-bottom:%?2?% solid #f1f1f1;position:relative}uni-label[data-v-3111c27d]{font-size:%?30?%;font-weight:400;color:#464f57}.cists[data-v-3111c27d],uni-input[data-v-3111c27d]{font-size:%?26?%;font-weight:400;color:#a9a9a9;text-align:right;position:absolute;right:0}.req[data-v-3111c27d]{color:red}.smscode[data-v-3111c27d]{position:relative}.yjh[data-v-3111c27d]{width:%?688?%;height:%?171?%;background:#f1f1f1;border-radius:%?5?%;font-size:%?26?%;font-weight:400;color:#919191;text-indent:%?23?%}.get_vcode[data-v-3111c27d]{width:%?177?%;height:%?51?%;line-height:%?50?%;border:%?2?% solid #b6000e;border-radius:%?26?%;font-size:%?26?%;color:#b6000e!important;background:none}.but_text[data-v-3111c27d]{font-size:%?26?%;font-weight:400;color:#b6000e!important}.button[data-v-3111c27d]{margin:%?50?% 0}.buus[data-v-3111c27d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?50?% 0 %?100?% 0}.cacle[data-v-3111c27d]{width:%?260?%;height:%?66?%;background:#999;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.baocun[data-v-3111c27d]{width:%?260?%;height:%?66?%;background:#deb156;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.buus uni-view[data-v-3111c27d]{text-align:center;margin:0 %?25?%}",""])},d023:function(t,e,i){var n=i("f798");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1ad4cfe8",n,!0,{sourceMap:!1,shadowMode:!1})},d7b6:function(t,e,i){"use strict";i.r(e);var n=i("1063"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},df60:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("姓名"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.nickname},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("手机号码"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"number",value:"","adjust-position":!1,placeholder:t.userArr.phone},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("工作邮箱"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.email},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("公司名称"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.company_name},model:{value:t.company_name,callback:function(e){t.company_name=e},expression:"company_name"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("职位"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.position},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("所在城市"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("cityPicker",{attrs:{pickerList:t.array,defaultValue:t.array,columnNum:"2"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.endCity.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cists"},[t._v(t._s(t.picked.labels.join("-")))])],1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("公司简介")],1)],1),i("v-uni-view",{},[i("v-uni-textarea",{staticClass:"yjh",attrs:{placeholder:t.userArr.company_desc},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("短信验证码")],1),i("v-uni-input",{staticClass:"smscode",attrs:{type:"number",value:"","adjust-position":!1,placeholder:"请输入您的短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-button",{staticClass:"get_vcode",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.countdown)),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.timestatus,expression:"timestatus"}],staticClass:"but_text"},[t._v("秒重获")])],1)],1),i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},f798:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.picker-pop .picker-mask[data-v-52285f6e]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;width:100vw;height:100vh;background-color:rgba(0,0,0,.6)}.picker-pop .picker-panel[data-v-52285f6e]{position:fixed;bottom:0;left:0;z-index:999;width:100%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.picker-pop .picker-panel .picker-action[data-v-52285f6e]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.picker-pop .picker-panel .picker-action[data-v-52285f6e]:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-action p[data-v-52285f6e]{color:#999;padding:%?30?%;line-height:1;font-size:%?36?%}.picker-pop .picker-panel .picker-action .confirm[data-v-52285f6e]{color:#007aff}.picker-pop .picker-panel .picker-content[data-v-52285f6e]{height:calc(%?68?% * 7);overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.picker-pop .picker-panel .picker-content .picker-column[data-v-52285f6e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%;overflow:hidden}.picker-pop .picker-panel .picker-content .scroll-wrapper[data-v-52285f6e]{position:relative;height:calc(%?68?% * 7)}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e],.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-52285f6e]{width:100%;position:absolute;z-index:1;-webkit-transform:translateZ(0);transform:translateZ(0);height:calc(%?68?% * 3);background:-webkit-linear-gradient(bottom,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(0deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e]:before,.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-52285f6e]:before{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-52285f6e]{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e]{bottom:0;background:-webkit-linear-gradient(top,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(180deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e]:before{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list[data-v-52285f6e]{padding-top:calc(%?68?% * 3)}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list .picker-item[data-v-52285f6e]{text-align:center;font-size:%?32?%;line-height:%?68?%;height:%?68?%;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.picker-pop .picker-panel-translate[data-v-52285f6e]{-webkit-transform:translate(0);transform:translate(0)}',""])}}]);