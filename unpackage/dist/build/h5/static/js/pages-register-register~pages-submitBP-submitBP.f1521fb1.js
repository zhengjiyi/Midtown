(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register~pages-submitBP-submitBP"],{"0ce0":function(e,l,a){l=e.exports=a("2350")(!1),l.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.simple-address[data-v-121967e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.simple-address-mask[data-v-121967e0]{position:fixed;bottom:0;top:0;left:0;right:0;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;opacity:0;z-index:99}.mask-ani[data-v-121967e0]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.simple-bottom-mask[data-v-121967e0]{opacity:1}.simple-center-mask[data-v-121967e0]{opacity:1}.simple-address--fixed[data-v-121967e0]{position:fixed;bottom:0;left:0;right:0;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transform:translateY(%?460?%);transform:translateY(%?460?%);z-index:99}.simple-address-content[data-v-121967e0]{background-color:#fff}.simple-content-bottom[data-v-121967e0]{bottom:0;left:0;right:0;-webkit-transform:translateY(%?500?%);transform:translateY(%?500?%)}.content-ani[data-v-121967e0]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.simple-bottom-content[data-v-121967e0]{-webkit-transform:translateY(0);transform:translateY(0)}.simple-center-content[data-v-121967e0]{-webkit-transform:scale(1);transform:scale(1);opacity:1}.simple-address__header[data-v-121967e0]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom-color:#f2f2f2;border-bottom-style:solid;border-bottom-width:%?1?%}.simple-address--fixed-top[data-v-121967e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-top-color:#c8c7cc;border-top-style:solid;border-top-width:%?1?%}.simple-address__header-btn-box[data-v-121967e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?70?%}.simple-address__header-text[data-v-121967e0]{text-align:center;font-size:%?28?%;color:#000!important;line-height:%?70?%;padding-left:%?40?%;padding-right:%?40?%}.simple-address__box[data-v-121967e0]{position:relative}.simple-address-view[data-v-121967e0]{position:relative;bottom:0;left:0;width:100%;height:%?408?%;background-color:#fff}.picker-item[data-v-121967e0]{text-align:center;line-height:%?70?%;text-overflow:ellipsis;font-size:%?28?%}',""])},"469f":function(e,l,a){a("6c1c"),a("1654"),e.exports=a("7d7b")},"4b8c":function(e,l,a){"use strict";var t=a("288e");Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=t(a("5d73"));a("ac6a");var n=t(a("a745"));a("c5f6");var u={props:{pickerList:{value:Array,require:!0,default:function(){return[]}},pickerKey:{value:Object,default:function(){return{value:"value",label:"label",children:"children"}}},pickerStyle:{value:Object,default:function(){return{cancel:{},confirm:{},column:[]}}},defaultValue:{value:Array,default:function(){return[]}},columnNum:{value:Number,default:0},itemRotateDeg:{value:Number,default:15},beforeSetColumn:{value:Function,default:null}},data:function(){return{show:!1,reactModel:!0,columns:[],pickerItemHeight:Math.floor(68*screen.width/750),startScrollTop:0,lastPickedIndex:0,scrollingColumnIndex:0}},watch:{pickerList:function(){this.init()},defaultValue:function(){this.init()}},mounted:function(){},methods:{init:function(){var e=this;(0,n.default)(this.pickerList[0])?(this.pickerList.forEach(function(l,a){e.setColumn(a,l)}),this.reactModel=!1):this.setColumn(0,this.pickerList)},showPicker:function(){var e=this;if(this.init(),this.inited)this.show=!0;else{var l=this.$refs.picker;document.body.appendChild(l),setTimeout(function(){e.show=!0},20),this.inited=!0}},confirm:function(){var e={index:[],value:[],label:[],indexes:[],values:[],labels:[]},l=!0,a=!1,t=void 0;try{for(var n,u=(0,i.default)(this.columns);!(l=(n=u.next()).done);l=!0){var r=n.value,o=this.columnPickedInfo(r);o?(e.index=o.index,e.value=o.value,e.label=o.label,e.indexes.push(o.index),e.values.push(o.value),e.labels.push(o.label)):(e.indexes.push(null),e.values.push(null),e.labels.push(null))}}catch(s){a=!0,t=s}finally{try{l||null==u.return||u.return()}finally{if(a)throw t}}this.$emit("confirm",e),this.hide()},cancel:function(){this.$emit("cancel"),this.hide()},hide:function(){this.show=!1},columnPickedInfo:function(e){return e.pickerList.length<1?null:{index:e.pickedIndex,value:e.pickerList[e.pickedIndex][this.pickerKey.value],label:e.pickerList[e.pickedIndex][this.pickerKey.label]}},touchstart:function(e){this.scrollingColumnIndex=e.currentTarget.dataset.column,this.startScrollTop=e.changedTouches[0].clientY,this.lastPickedIndex=this.columns[this.scrollingColumnIndex].pickedIndex},touchmove:function(e){var l=this.startScrollTop-e.changedTouches[0].clientY,a=Math.round(l/this.pickerItemHeight),t=this.lastPickedIndex+a,i=this.columns[this.scrollingColumnIndex];i.pickedIndex!==t&&t>=0&&t<i.pickerList.length&&(i.pickedIndex=t,this.$emit("change",i.index,this.columnPickedInfo(i)),this.scrollColumn(i))},setColumn:function(e,l){var a=this;if(!(5===e||this.columnNum>0&&e>=this.columnNum)){l=l||[];var t=l;if(this.beforeSetColumn&&(t=this.beforeSetColumn(e,t)),t.length<1){if(0===this.columnNum)return void this.clearColumns(e);if(!(e<this.columnNum))return;this.setColumn(e+1,[])}var i=this.columns[e]||{},n={index:e,pickerList:t,pickedIndex:0};n.pickedIndex=Math.min(i.pickedIndex,n.pickerList.length-1)||0;var u=this.defaultValue&&this.defaultValue[e]||!1;void 0===i.pickedIndex&&!1!==u&&n.pickerList.map(function(e,l){e[a.pickerKey.value]==u&&(n.pickedIndex=l)}),this.scrollColumn(n),this.$set(this.columns,e,n)}},scrollColumn:function(e){var l=e.pickedIndex*this.pickerItemHeight;e.animationData=uni.createAnimation({duration:200,timingFunction:"linear"}).translateY(-l).step().export(),this.reactModel&&e.pickerList[e.pickedIndex]&&this.setColumn(e.index+1,e.pickerList[e.pickedIndex][this.pickerKey.children])},clearColumns:function(e){this.columns=this.columns.filter(function(l){return l.index<e})},pickerItemStyle:function(e,l){var a=Math.abs(e-l);return a<=3?{transform:"rotateX("+a*this.itemRotateDeg+"deg)"}:{}}}};l.default=u},5696:function(e,l,a){"use strict";a.r(l);var t=a("4b8c"),i=a.n(t);for(var n in t)"default"!==n&&function(e){a.d(l,e,function(){return t[e]})}(n);l["default"]=i.a},"5d73":function(e,l,a){e.exports=a("469f")},6905:function(e,l,a){"use strict";var t=a("6ae9"),i=a.n(t);i.a},"6ae9":function(e,l,a){var t=a("0ce0");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=a("4f06").default;i("86a45a00",t,!0,{sourceMap:!1,shadowMode:!1})},"6b6b":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{value:10100,label:"全国"}],[{value:110100,label:"北京市"}],[{value:120100,label:"天津市"}],[{value:130100,label:"石家庄市"},{value:130200,label:"唐山市"},{value:130300,label:"秦皇岛市"},{value:130400,label:"邯郸市"},{value:130500,label:"邢台市"},{value:130600,label:"保定市"},{value:130700,label:"张家口市"},{value:130800,label:"承德市"},{value:130900,label:"沧州市"},{value:131e3,label:"廊坊市"},{value:131100,label:"衡水市"}],[{value:140100,label:"太原市"},{value:140200,label:"大同市"},{value:140300,label:"阳泉市"},{value:140400,label:"长治市"},{value:140500,label:"晋城市"},{value:140600,label:"朔州市"},{value:140700,label:"晋中市"},{value:140800,label:"运城市"},{value:140900,label:"忻州市"},{value:141e3,label:"临汾市"},{value:141100,label:"吕梁市"}],[{value:150100,label:"呼和浩特市"},{value:150200,label:"包头市"},{value:150300,label:"乌海市"},{value:150400,label:"赤峰市"},{value:150500,label:"通辽市"},{value:150600,label:"鄂尔多斯市"},{value:150700,label:"呼伦贝尔市"},{value:150800,label:"巴彦淖尔市"},{value:150900,label:"乌兰察布市"},{value:152200,label:"兴安盟"},{value:152500,label:"锡林郭勒盟"},{value:152900,label:"阿拉善盟"}],[{value:210100,label:"沈阳市"},{value:210200,label:"大连市"},{value:210300,label:"鞍山市"},{value:210400,label:"抚顺市"},{value:210500,label:"本溪市"},{value:210600,label:"丹东市"},{value:210700,label:"锦州市"},{value:210800,label:"营口市"},{value:210900,label:"阜新市"},{value:211e3,label:"辽阳市"},{value:211100,label:"盘锦市"},{value:211200,label:"铁岭市"},{value:211300,label:"朝阳市"},{value:211400,label:"葫芦岛市"}],[{value:220100,label:"长春市"},{value:220200,label:"吉林市"},{value:220300,label:"四平市"},{value:220400,label:"辽源市"},{value:220500,label:"通化市"},{value:220600,label:"白山市"},{value:220700,label:"松原市"},{value:220800,label:"白城市"},{value:222400,label:"延边朝鲜族自治州"}],[{value:230100,label:"哈尔滨市"},{value:230200,label:"齐齐哈尔市"},{value:230300,label:"鸡西市"},{value:230400,label:"鹤岗市"},{value:230500,label:"双鸭山市"},{value:230600,label:"大庆市"},{value:230700,label:"伊春市"},{value:230800,label:"佳木斯市"},{value:230900,label:"七台河市"},{value:231e3,label:"牡丹江市"},{value:231100,label:"黑河市"},{value:231200,label:"绥化市"},{value:232700,label:"大兴安岭地区"}],[{value:310100,label:"上海市"}],[{value:320100,label:"南京市"},{value:320200,label:"无锡市"},{value:320300,label:"徐州市"},{value:320400,label:"常州市"},{value:320500,label:"苏州市"},{value:320600,label:"南通市"},{value:320700,label:"连云港市"},{value:320800,label:"淮安市"},{value:320900,label:"盐城市"},{value:321e3,label:"扬州市"},{value:321100,label:"镇江市"},{value:321200,label:"泰州市"},{value:321300,label:"宿迁市"}],[{value:330100,label:"杭州市"},{value:330200,label:"宁波市"},{value:330300,label:"温州市"},{value:330400,label:"嘉兴市"},{value:330500,label:"湖州市"},{value:330600,label:"绍兴市"},{value:330700,label:"金华市"},{value:330800,label:"衢州市"},{value:330900,label:"舟山市"},{value:331e3,label:"台州市"},{value:331100,label:"丽水市"}],[{value:340100,label:"合肥市"},{value:340200,label:"芜湖市"},{value:340300,label:"蚌埠市"},{value:340400,label:"淮南市"},{value:340500,label:"马鞍山市"},{value:340600,label:"淮北市"},{value:340700,label:"铜陵市"},{value:340800,label:"安庆市"},{value:341e3,label:"黄山市"},{value:341100,label:"滁州市"},{value:341200,label:"阜阳市"},{value:341300,label:"宿州市"},{value:341400,label:"巢湖市"},{value:341500,label:"六安市"},{value:341600,label:"亳州市"},{value:341700,label:"池州市"},{value:341800,label:"宣城市"}],[{value:350100,label:"福州市"},{value:350200,label:"厦门市"},{value:350300,label:"莆田市"},{value:350400,label:"三明市"},{value:350500,label:"泉州市"},{value:350600,label:"漳州市"},{value:350700,label:"南平市"},{value:350800,label:"龙岩市"},{value:350900,label:"宁德市"}],[{value:360100,label:"南昌市"},{value:360200,label:"景德镇市"},{value:360300,label:"萍乡市"},{value:360400,label:"九江市"},{value:360500,label:"新余市"},{value:360600,label:"鹰潭市"},{value:360700,label:"赣州市"},{value:360800,label:"吉安市"},{value:360900,label:"宜春市"},{value:361e3,label:"抚州市"},{value:361100,label:"上饶市"}],[{value:370100,label:"济南市"},{value:370200,label:"青岛市"},{value:370300,label:"淄博市"},{value:370400,label:"枣庄市"},{value:370500,label:"东营市"},{value:370600,label:"烟台市"},{value:370700,label:"潍坊市"},{value:370800,label:"济宁市"},{value:370900,label:"泰安市"},{value:371e3,label:"威海市"},{value:371100,label:"日照市"},{value:371200,label:"莱芜市"},{value:371300,label:"临沂市"},{value:371400,label:"德州市"},{value:371500,label:"聊城市"},{value:371600,label:"滨州市"},{value:371700,label:"荷泽市"}],[{value:410100,label:"郑州市"},{value:410200,label:"开封市"},{value:410300,label:"洛阳市"},{value:410400,label:"平顶山市"},{value:410500,label:"安阳市"},{value:410600,label:"鹤壁市"},{value:410700,label:"新乡市"},{value:410800,label:"焦作市"},{value:410900,label:"濮阳市"},{value:411e3,label:"许昌市"},{value:411100,label:"漯河市"},{value:411200,label:"三门峡市"},{value:411300,label:"南阳市"},{value:411400,label:"商丘市"},{value:411500,label:"信阳市"},{value:411600,label:"周口市"},{value:411700,label:"驻马店市"}],[{value:420100,label:"武汉市"},{value:420200,label:"黄石市"},{value:420300,label:"十堰市"},{value:420500,label:"宜昌市"},{value:420600,label:"襄樊市"},{value:420700,label:"鄂州市"},{value:420800,label:"荆门市"},{value:420900,label:"孝感市"},{value:421e3,label:"荆州市"},{value:421100,label:"黄冈市"},{value:421200,label:"咸宁市"},{value:421300,label:"随州市"},{value:422800,label:"恩施土家族苗族自治州"},{value:429e3,label:"省直辖行政单位"}],[{value:430100,label:"长沙市"},{value:430200,label:"株洲市"},{value:430300,label:"湘潭市"},{value:430400,label:"衡阳市"},{value:430500,label:"邵阳市"},{value:430600,label:"岳阳市"},{value:430700,label:"常德市"},{value:430800,label:"张家界市"},{value:430900,label:"益阳市"},{value:431e3,label:"郴州市"},{value:431100,label:"永州市"},{value:431200,label:"怀化市"},{value:431300,label:"娄底市"},{value:433100,label:"湘西土家族苗族自治州"}],[{value:440100,label:"广州市"},{value:440200,label:"韶关市"},{value:440300,label:"深圳市"},{value:440400,label:"珠海市"},{value:440500,label:"汕头市"},{value:440600,label:"佛山市"},{value:440700,label:"江门市"},{value:440800,label:"湛江市"},{value:440900,label:"茂名市"},{value:441200,label:"肇庆市"},{value:441300,label:"惠州市"},{value:441400,label:"梅州市"},{value:441500,label:"汕尾市"},{value:441600,label:"河源市"},{value:441700,label:"阳江市"},{value:441800,label:"清远市"},{value:441900,label:"东莞市"},{value:442e3,label:"中山市"},{value:445100,label:"潮州市"},{value:445200,label:"揭阳市"},{value:445300,label:"云浮市"}],[{value:450100,label:"南宁市"},{value:450200,label:"柳州市"},{value:450300,label:"桂林市"},{value:450400,label:"梧州市"},{value:450500,label:"北海市"},{value:450600,label:"防城港市"},{value:450700,label:"钦州市"},{value:450800,label:"贵港市"},{value:450900,label:"玉林市"},{value:451e3,label:"百色市"},{value:451100,label:"贺州市"},{value:451200,label:"河池市"},{value:451300,label:"来宾市"},{value:451400,label:"崇左市"}],[{value:460100,label:"海口市"},{value:460200,label:"三亚市"},{value:469e3,label:"省直辖县级行政单位"}],[{value:500100,label:"重庆市"}],[{value:510100,label:"成都市"},{value:510300,label:"自贡市"},{value:510400,label:"攀枝花市"},{value:510500,label:"泸州市"},{value:510600,label:"德阳市"},{value:510700,label:"绵阳市"},{value:510800,label:"广元市"},{value:510900,label:"遂宁市"},{value:511e3,label:"内江市"},{value:511100,label:"乐山市"},{value:511300,label:"南充市"},{value:511400,label:"眉山市"},{value:511500,label:"宜宾市"},{value:511600,label:"广安市"},{value:511700,label:"达州市"},{value:511800,label:"雅安市"},{value:511900,label:"巴中市"},{value:512e3,label:"资阳市"},{value:513200,label:"阿坝藏族羌族自治州"},{value:513300,label:"甘孜藏族自治州"},{value:513400,label:"凉山彝族自治州"}],[{value:520100,label:"贵阳市"},{value:520200,label:"六盘水市"},{value:520300,label:"遵义市"},{value:520400,label:"安顺市"},{value:522200,label:"铜仁地区"},{value:522300,label:"黔西南布依族苗族自治州"},{value:522400,label:"毕节地区"},{value:522600,label:"黔东南苗族侗族自治州"},{value:522700,label:"黔南布依族苗族自治州"}],[{value:530100,label:"昆明市"},{value:530300,label:"曲靖市"},{value:530400,label:"玉溪市"},{value:530500,label:"保山市"},{value:530600,label:"昭通市"},{value:530700,label:"丽江市"},{value:530800,label:"思茅市"},{value:530900,label:"临沧市"},{value:532300,label:"楚雄彝族自治州"},{value:532500,label:"红河哈尼族彝族自治州"},{value:532600,label:"文山壮族苗族自治州"},{value:532800,label:"西双版纳傣族自治州"},{value:532900,label:"大理白族自治州"},{value:533100,label:"德宏傣族景颇族自治州"},{value:533300,label:"怒江傈僳族自治州"},{value:533400,label:"迪庆藏族自治州"}],[{value:540100,label:"拉萨市"},{value:542100,label:"昌都地区"},{value:542200,label:"山南地区"},{value:542300,label:"日喀则地区"},{value:542400,label:"那曲地区"},{value:542500,label:"阿里地区"},{value:542600,label:"林芝地区"}],[{value:610100,label:"西安市"},{value:610200,label:"铜川市"},{value:610300,label:"宝鸡市"},{value:610400,label:"咸阳市"},{value:610500,label:"渭南市"},{value:610600,label:"延安市"},{value:610700,label:"汉中市"},{value:610800,label:"榆林市"},{value:610900,label:"安康市"},{value:611e3,label:"商洛市"}],[{value:620100,label:"兰州市"},{value:620200,label:"嘉峪关市"},{value:620300,label:"金昌市"},{value:620400,label:"白银市"},{value:620500,label:"天水市"},{value:620600,label:"武威市"},{value:620700,label:"张掖市"},{value:620800,label:"平凉市"},{value:620900,label:"酒泉市"},{value:621e3,label:"庆阳市"},{value:621100,label:"定西市"},{value:621200,label:"陇南市"},{value:622900,label:"临夏回族自治州"},{value:623e3,label:"甘南藏族自治州"}],[{value:630100,label:"西宁市"},{value:632100,label:"海东地区"},{value:632200,label:"海北藏族自治州"},{value:632300,label:"黄南藏族自治州"},{value:632500,label:"海南藏族自治州"},{value:632600,label:"果洛藏族自治州"},{value:632700,label:"玉树藏族自治州"},{value:632800,label:"海西蒙古族藏族自治州"}],[{value:640100,label:"银川市"},{value:640200,label:"石嘴山市"},{value:640300,label:"吴忠市"},{value:640400,label:"固原市"},{value:640500,label:"中卫市"}],[{value:650100,label:"乌鲁木齐市"},{value:650200,label:"克拉玛依市"},{value:652100,label:"吐鲁番地区"},{value:652200,label:"哈密地区"},{value:652300,label:"昌吉回族自治州"},{value:652700,label:"博尔塔拉蒙古自治州"},{value:652800,label:"巴音郭楞蒙古自治州"},{value:652900,label:"阿克苏地区"},{value:653e3,label:"克孜勒苏柯尔克孜自治州"},{value:653100,label:"喀什地区"},{value:653200,label:"和田地区"},{value:654e3,label:"伊犁哈萨克自治州"},{value:654200,label:"塔城地区"},{value:654300,label:"阿勒泰地区"},{value:659e3,label:"省直辖行政单位"}],[{value:66e4,label:"澳门"},{value:661e3,label:"台湾"},{value:662e3,label:"香港"}],[{value:831e3,label:"海外"}]],i=t;l.default=i},"75fe":function(e,l,a){"use strict";a.r(l);var t=a("d412"),i=a("868f");for(var n in i)"default"!==n&&function(e){a.d(l,e,function(){return i[e]})}(n);a("6905");var u=a("2877"),r=Object(u["a"])(i["default"],t["a"],t["b"],!1,null,"121967e0",null);l["default"]=r.exports},7998:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{value:1e5,label:"全国"},{value:11e4,label:"北京市"},{value:12e4,label:"天津市"},{value:13e4,label:"河北省"},{value:14e4,label:"山西省"},{value:15e4,label:"内蒙古自治区"},{value:21e4,label:"辽宁省"},{value:22e4,label:"吉林省"},{value:23e4,label:"黑龙江省"},{value:31e4,label:"上海市"},{value:32e4,label:"江苏省"},{value:33e4,label:"浙江省"},{value:34e4,label:"安徽省"},{value:35e4,label:"福建省"},{value:36e4,label:"江西省"},{value:37e4,label:"山东省"},{value:41e4,label:"河南省"},{value:42e4,label:"湖北省"},{value:43e4,label:"湖南省"},{value:44e4,label:"广东省"},{value:45e4,label:"广西壮族自治区"},{value:46e4,label:"海南省"},{value:5e5,label:"重庆市"},{value:51e4,label:"四川省"},{value:52e4,label:"贵州省"},{value:53e4,label:"云南省"},{value:54e4,label:"西藏自治区"},{value:61e4,label:"陕西省"},{value:62e4,label:"甘肃省"},{value:63e4,label:"青海省"},{value:64e4,label:"宁夏回族自治区"},{value:65e4,label:"新疆维吾尔自治区"},{value:71e4,label:"港澳台"},{value:83e4,label:"海外"}],i=t;l.default=i},"7d7b":function(e,l,a){var t=a("e4ae"),i=a("7cd6");e.exports=a("584a").getIterator=function(e){var l=i(e);if("function"!=typeof l)throw TypeError(e+" is not iterable!");return t(l.call(e))}},"868f":function(e,l,a){"use strict";a.r(l);var t=a("cfaa"),i=a.n(t);for(var n in t)"default"!==n&&function(e){a.d(l,e,function(){return t[e]})}(n);l["default"]=i.a},"889d":function(e,l,a){"use strict";var t=a("d023"),i=a.n(t);i.a},b0e9:function(e,l,a){"use strict";a.r(l);var t=a("bda9"),i=a("5696");for(var n in i)"default"!==n&&function(e){a.d(l,e,function(){return i[e]})}(n);a("889d");var u=a("2877"),r=Object(u["a"])(i["default"],t["a"],t["b"],!1,null,"52285f6e",null);l["default"]=r.exports},bda9:function(e,l,a){"use strict";var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("div",{on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.showPicker.apply(void 0,arguments)}}},[e._t("default")],2),a("div",{ref:"picker",staticClass:"picker-pop",on:{touchmove:function(l){l.preventDefault(),arguments[0]=l=e.$handleEvent(l)}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"picker-mask",on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.cancel.apply(void 0,arguments)}}}),a("div",{staticClass:"picker-panel",class:{"picker-panel-translate":e.show}},[a("div",{staticClass:"picker-action"},[a("p",{staticClass:"cancel",style:e.pickerStyle.cancel,on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.cancel.apply(void 0,arguments)}}},[e._v("取消")]),a("p",{staticClass:"confirm",style:e.pickerStyle.confirm,on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.confirm.apply(void 0,arguments)}}},[e._v("确定")])]),a("div",{staticClass:"picker-content"},e._l(e.columns,function(l,t){return a("div",{staticClass:"picker-column",style:e.pickerStyle.column[t],attrs:{"data-column":t},on:{touchstart:function(l){arguments[0]=l=e.$handleEvent(l),e.touchstart.apply(void 0,arguments)},touchmove:function(l){arguments[0]=l=e.$handleEvent(l),e.touchmove.apply(void 0,arguments)}}},[a("div",{staticClass:"scroll-wrapper"},[a("div",{staticClass:"top-cover"}),a("div",{staticClass:"bottom-cover"}),a("v-uni-view",{staticClass:"scroll-list",attrs:{animation:l.animationData}},e._l(l.pickerList,function(t,i){return a("div",[a("div",{staticClass:"picker-item",style:e.pickerItemStyle(l.pickedIndex,i)},[e._v(e._s(t[e.pickerKey.label]))])])}),0)],1)])}),0)])])])},i=[];a.d(l,"a",function(){return t}),a.d(l,"b",function(){return i})},cfaa:function(e,l,a){"use strict";var t=a("288e");Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=t(a("7998")),n=t(a("6b6b")),u={name:"simpleAddress",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"bottom"},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0},maskBgColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},themeColor:{type:String,default:""},pickerValueDefault:{type:Array,default:function(){return[0,0,0]}}},data:function(){return{ani:"",showPopup:!1,pickerValue:[0,0,0],provinceDataList:[],cityDataList:[]}},watch:{show:function(e){e?this.open():this.close()},pickerValueDefault:function(){this.init()}},created:function(){this.init()},methods:{init:function(){this.handPickValueDefault(),this.provinceDataList=i.default,this.cityDataList=n.default[this.pickerValueDefault[0]],this.pickerValue=this.pickerValueDefault},handPickValueDefault:function(){this.pickerValueDefault!==[0,0,0]&&(this.pickerValueDefault[0]>i.default.length-1&&(this.pickerValueDefault[0]=i.default.length-1),this.pickerValueDefault[1]>n.default[this.pickerValueDefault[0]].length-1&&(this.pickerValueDefault[1]=n.default[this.pickerValueDefault[0]].length-1))},pickerChange:function(e){var l=e.detail.value;this.pickerValue[0]!==l[0]?(this.cityDataList=n.default[l[0]],l[1]=0,l[2]=0):(this.pickerValue[1],l[1]),this.pickerValue=l,this._$emit("onChange")},_$emit:function(e){var l={label:this._getLabel(),value:this.pickerValue,cityCode:this._getCityCode(),areaCode:this._getAreaCode(),provinceCode:this._getProvinceCode()};this.$emit(e,l)},_getLabel:function(){var e=this.provinceDataList[this.pickerValue[0]].label+"-"+this.cityDataList[this.pickerValue[1]].label;return e},_getCityCode:function(){return this.cityDataList[this.pickerValue[1]].value},_getProvinceCode:function(){return this.provinceDataList[this.pickerValue[0]].value},_getAreaCode:function(){},clear:function(){},hideMask:function(){this._$emit("onCancel"),this.close()},pickerCancel:function(){this._$emit("onCancel"),this.close()},pickerConfirm:function(){this._$emit("onConfirm"),this.close()},open:function(){var e=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){e.ani="simple-"+e.type},100)})},close:function(e){var l=this;!this.maskClick&&e||(this.ani="",this.$nextTick(function(){setTimeout(function(){l.showPopup=!1},300)}))}}};l.default=u},d023:function(e,l,a){var t=a("f798");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=a("4f06").default;i("1ad4cfe8",t,!0,{sourceMap:!1,shadowMode:!1})},d412:function(e,l,a){"use strict";var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return e.showPopup?a("v-uni-view",{staticClass:"simple-address",on:{touchmove:function(l){l.stopPropagation(),l.preventDefault(),arguments[0]=l=e.$handleEvent(l),e.clear.apply(void 0,arguments)}}},[e.maskClick?a("v-uni-view",{staticClass:"simple-address-mask",class:[e.ani+"-mask",e.animation?"mask-ani":""],style:{"background-color":e.maskBgColor},on:{touchmove:function(l){l.stopPropagation(),l.preventDefault(),arguments[0]=l=e.$handleEvent(l),e.clear.apply(void 0,arguments)},click:function(l){arguments[0]=l=e.$handleEvent(l),e.hideMask(!0)}}}):e._e(),a("v-uni-view",{staticClass:"simple-address-content simple-address--fixed",class:[e.type,e.ani+"-content",e.animation?"content-ani":""]},[a("v-uni-view",{staticClass:"simple-address__header"},[a("v-uni-view",{staticClass:"simple-address__header-btn-box",on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.pickerCancel.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"simple-address__header-text"},[e._v("取消")])],1),a("v-uni-view",{staticClass:"simple-address__header-btn-box",on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.pickerConfirm.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"simple-address__header-text",style:{color:e.themeColor}},[e._v("确定")])],1)],1),a("v-uni-view",{staticClass:"simple-address__box"},[a("v-uni-picker-view",{staticClass:"simple-address-view",attrs:{"indicator-style":"height: 70rpx;",value:e.pickerValue},on:{change:function(l){arguments[0]=l=e.$handleEvent(l),e.pickerChange.apply(void 0,arguments)}}},[a("v-uni-picker-view-column",e._l(e.provinceDataList,function(l,t){return a("v-uni-view",{key:t,staticClass:"picker-item"},[e._v(e._s(l.label))])}),1),a("v-uni-picker-view-column",e._l(e.cityDataList,function(l,t){return a("v-uni-view",{key:t,staticClass:"picker-item"},[e._v(e._s(l.label))])}),1)],1)],1)],1)],1):e._e()},i=[];a.d(l,"a",function(){return t}),a.d(l,"b",function(){return i})},f798:function(e,l,a){l=e.exports=a("2350")(!1),l.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.picker-pop .picker-mask[data-v-52285f6e]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;width:100vw;height:100vh;background-color:rgba(0,0,0,.6)}.picker-pop .picker-panel[data-v-52285f6e]{position:fixed;bottom:0;left:0;z-index:999;width:100%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.picker-pop .picker-panel .picker-action[data-v-52285f6e]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.picker-pop .picker-panel .picker-action[data-v-52285f6e]:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-action p[data-v-52285f6e]{color:#999;padding:%?30?%;line-height:1;font-size:%?36?%}.picker-pop .picker-panel .picker-action .confirm[data-v-52285f6e]{color:#007aff}.picker-pop .picker-panel .picker-content[data-v-52285f6e]{height:calc(%?68?% * 7);overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.picker-pop .picker-panel .picker-content .picker-column[data-v-52285f6e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%;overflow:hidden}.picker-pop .picker-panel .picker-content .scroll-wrapper[data-v-52285f6e]{position:relative;height:calc(%?68?% * 7)}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e],.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-52285f6e]{width:100%;position:absolute;z-index:1;-webkit-transform:translateZ(0);transform:translateZ(0);height:calc(%?68?% * 3);background:-webkit-linear-gradient(bottom,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(0deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e]:before,.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-52285f6e]:before{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#dedede}.picker-pop .picker-panel .picker-content .scroll-wrapper .top-cover[data-v-52285f6e]{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e]{bottom:0;background:-webkit-linear-gradient(top,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9));background:linear-gradient(180deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.9))}.picker-pop .picker-panel .picker-content .scroll-wrapper .bottom-cover[data-v-52285f6e]:before{top:0}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list[data-v-52285f6e]{padding-top:calc(%?68?% * 3)}.picker-pop .picker-panel .picker-content .scroll-wrapper .scroll-list .picker-item[data-v-52285f6e]{text-align:center;font-size:%?32?%;line-height:%?68?%;height:%?68?%;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.picker-pop .picker-panel-translate[data-v-52285f6e]{-webkit-transform:translate(0);transform:translate(0)}',""])}}]);