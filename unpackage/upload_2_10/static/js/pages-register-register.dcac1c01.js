(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"009d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("姓名"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.nickname},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("手机号码"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"number",value:"","adjust-position":!1,placeholder:t.userArr.phone},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("工作邮箱"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.email},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("公司名称"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.company_name},model:{value:t.company_name,callback:function(e){t.company_name=e},expression:"company_name"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("职位"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-input",{attrs:{type:"text",value:"","adjust-position":!1,placeholder:t.userArr.position},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("所在城市"),i("v-uni-text",{staticClass:"req"},[t._v("*")])],1),i("v-uni-picker",{attrs:{mode:"multiSelector",range:t.array,"range-key":"label",value:t.index},on:{columnchange:function(e){e=t.$handleEvent(e),t.columnchanges(e)},change:function(e){e=t.$handleEvent(e),t.bindTimeChange(e)}}},[i("v-uni-view",{staticClass:"cists"},[t._v(t._s(t.city_name))])],1),t._v("·")],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("公司简介")],1)],1),i("v-uni-view",{},[i("v-uni-textarea",{staticClass:"yjh",attrs:{placeholder:t.userArr.company_desc},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-row"},[i("v-uni-label",[i("v-uni-text",{staticClass:"shux"}),t._v("短信验证码")],1),i("v-uni-input",{staticClass:"smscode",attrs:{type:"number",value:"","adjust-position":!1,placeholder:"请输入您的短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-button",{staticClass:"get_vcode",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){e=t.$handleEvent(e),t.getCode(e)}}},[t._v(t._s(t.countdown)),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.timestatus,expression:"timestatus"}],staticClass:"but_text"},[t._v("秒重获")])],1)],1),i("v-uni-view",{staticClass:"button",on:{click:function(e){e=t.$handleEvent(e),t.save(e)}}},[t._v("保存")])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"1bb0":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{city_name:"请选择",userArr:[],array:[[{label:0}],[{label:0}]],tempArray:[],index:[0,0],indicatorStyle:"",visible:!0,code:"",mobile:"",countdown:"获取验证码",disabled:!1,timestatus:!1,clear:"",nickname:"",phone:"",email:"",company_name:"",position:"",city:"",desc:"",avatar:"",picked:{labels:["请选择您的所在城市>"]}}},onBackPress:function(e){t.log(e),uni.switchTab({url:"/pages/index/home/home"})},mounted:function(){var e=this,i=uni.getStorageSync("token");uni.request({url:"http://zc.demo.yudw.com/api/config/getRegion",method:"GET",dataType:"json",success:function(t){e.tempArray=t.data.data,e.array=[e.tempArray.map(function(t){return{label:t.label,value:t.value}}),e.tempArray[0].children.map(function(t){return{label:t.label,value:t.value}})]}}),uni.request({url:"http://zc.demo.yudw.com/api/user/checkRegist",method:"GET",data:{token:i},dataType:"json",success:function(a){t.log(a),e.check=a.data.data,1==a.data.data&&uni.request({url:"http://zc.demo.yudw.com/api/user/getUser",method:"GET",data:{token:i},dataType:"json",success:function(i){t.log(i),e.userArr=i.data.date},fail:function(e){t.log(e)}})},fail:function(e){t.log(e)}})},methods:{bindTimeChange:function(e){t.log("picker发送选择改变，携带值为",e.target.value),this.index=e.target.value,this.city=this.array[1][this.index[1]].value,this.city_name=this.array[0][this.index[0]].label+this.array[1][this.index[1]].label},columnchanges:function(e){t.log("picker发送选择改变，携带值为",e.detail),this.array[1]=this.tempArray[e.detail.value].children.map(function(t){return{label:t.label,value:t.value}})},endCity:function(e){this.city=e.value,t.log(e.value),this.picked=e},formate:function(t){var e=[];for(var i in t)e.push({value:i,label:t[i]});return e},bindPickerChange:function(e){t.log("picker发送选择改变，携带值为",e.target.value),this.index=e.target.value},save:function(){var e=uni.getStorageSync("token");uni.request({url:"http://zc.demo.yudw.com/api/user/edit",method:"get",data:{token:e,nickname:this.nickname,phone:this.phone,email:this.email,company_name:this.company_name,position:this.position,city:this.city,code:this.code,desc:this.desc},dataType:"json",success:function(e){1===e.data.status?(t.log(e.data.msg),uni.showToast({title:e.data.msg,icon:"success",success:function(){setTimeout(function(){uni.switchTab({url:"../index/my/my"})},2e3)}})):uni.showToast({title:e.data.msg,icon:"none"})}})},getCode:function(){var e=this;if(""==e.phone)uni.showToast({title:"请输入手机号码",icon:"none"});else{t.log(111);var i=uni.getStorageSync("token");e.disabled=!0,uni.request({url:"http://zc.demo.yudw.com/api/user/sendSms",method:"GET",data:{token:i,mobile:this.phone},dataType:"json",success:function(i){1==i.data.status?(uni.showToast({title:i.data.msg,icon:"none"}),e.countdown=60,t.log(e.countdown),e.timestatus=!0,e.clear=setInterval(e.countDown,1e3)):(uni.showToast({title:i.data.msg,icon:"none"}),e.disabled=!1)},fail:function(e){t.log(e)}})}},countDown:function(){var t=this;t.countdown?--t.countdown:(t.disabled=!1,t.timestatus=!1,t.countdown="获取验证码",clearInterval(t.clear))}}};e.default=i}).call(this,i("5a52")["default"])},5156:function(t,e,i){"use strict";i.r(e);var a=i("009d"),n=i("9b7e");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("cc61");var o=i("2877"),u=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1d3475dc",null);e["default"]=u.exports},"9b7e":function(t,e,i){"use strict";i.r(e);var a=i("1bb0"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},bd51:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-common-mt[data-v-1d3475dc]{margin:0 %?30?%;padding-bottom:%?250?%}.uni-form-item[data-v-1d3475dc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?34?% 0;border-bottom:%?2?% solid #f1f1f1;position:relative}uni-label[data-v-1d3475dc]{font-size:%?30?%;font-weight:400;color:#464f57}.cists[data-v-1d3475dc],uni-input[data-v-1d3475dc]{font-size:%?26?%;font-weight:400;color:#a9a9a9;text-align:right;position:absolute;right:0}.req[data-v-1d3475dc]{color:red}.smscode[data-v-1d3475dc]{position:relative}.yjh[data-v-1d3475dc]{width:%?688?%;height:%?171?%;background:#f1f1f1;border-radius:%?5?%;font-size:%?26?%;font-weight:400;color:#919191;text-indent:%?23?%}.get_vcode[data-v-1d3475dc]{width:%?177?%;height:%?51?%;line-height:%?50?%;border:%?2?% solid #b6000e;border-radius:%?26?%;font-size:%?26?%;color:#b6000e!important;background:none}.but_text[data-v-1d3475dc]{font-size:%?26?%;font-weight:400;color:#b6000e!important}.button[data-v-1d3475dc]{margin:%?50?% 0}.buus[data-v-1d3475dc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?50?% 0 %?100?% 0}.cacle[data-v-1d3475dc]{width:%?260?%;height:%?66?%;background:#999;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.baocun[data-v-1d3475dc]{width:%?260?%;height:%?66?%;background:#deb156;border-radius:%?33?%;color:#fff;font-size:%?28?%;line-height:%?66?%}.buus uni-view[data-v-1d3475dc]{text-align:center;margin:0 %?25?%}",""])},cc61:function(t,e,i){"use strict";var a=i("e684"),n=i.n(a);n.a},e684:function(t,e,i){var a=i("bd51");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4b1fa59d",a,!0,{sourceMap:!1,shadowMode:!1})}}]);