(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d48":function(t,e,a){"use strict";var i=a("6ef2"),n=a.n(i);n.a},2195:function(t,e,a){t.exports=a.p+"img/react.3021c88c.png"},2205:function(t,e,a){"use strict";var i=a("7e77"),n=a.n(i);n.a},"2b8f":function(t,e,a){t.exports=a.p+"img/sass.54332111.png"},"3af8":function(t,e,a){t.exports=a.p+"img/con1.5eca2ec7.png"},"3b75":function(t,e,a){t.exports=a.p+"img/con3.9f4d32f5.png"},"4d81":function(t,e,a){"use strict";var i=a("51a8"),n=a.n(i);n.a},"51a8":function(t,e,a){},"55d7":function(t,e,a){t.exports=a.p+"img/hy70.3f944185.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{"font-family":"'Poppins','Open Sans', 'Noto Sans KR'"}},[a("v-container",{staticStyle:{"margin-top":"50px","max-width":"1215px !important"}},[a("v-flex",{attrs:{id:"bg"}},[a("div",{staticStyle:{width:"1185px","margin-left":"auto","margin-right":"auto"}},[a("div",{attrs:{id:"APPbar"}},[a("AppNav")],1),a("div",{attrs:{id:"rightSideWrapper"}},[a("div",{staticClass:"ContentBox"},[a("v-content",[a("Home",{attrs:{id:"Home"}}),a("About",{attrs:{id:"About"}}),a("Experience",{attrs:{id:"Resume"}}),a("Myskills",{attrs:{id:"Myskils"}}),a("Service",{attrs:{id:"Work"}}),a("Getintouch",{attrs:{id:"Contact"}})],1)],1)])])])],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"head"}},[i("v-navigation-drawer",{attrs:{permanent:"",id:"box",height:"600px"}},[i("div",{attrs:{id:"boxbox"}},[i("v-img",{attrs:{id:"img"}},[i("img",{attrs:{src:a("55d7"),height:"70px",width:"70px"}})]),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title",attrs:{id:"tit"}},[t._v("HaYeon")]),i("v-list-item-subtitle",{attrs:{id:"subtit"}},[t._v("DEVELOPER")])],1)],1),i("v-list",{attrs:{id:"nav",dense:"",nav:""}},t._l(t.items,(function(e){return i("v-list-item",{key:e.title,on:{click:function(a){return a.preventDefault(),t.scrollAnimateTo(e.href)}}},[i("v-list-item-icon",{attrs:{id:"mu"}},[i("v-icon",{staticStyle:{"font-size":"20px",color:"#fff"}},[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",{staticStyle:{"font-size":"15px","font-weight":"500",color:"#fff"}},[t._v(t._s(e.title))])],1)],1)})),1)],1)])],1)},r=[],l={name:"AppNav",data:function(){return{items:[{title:"Home",icon:"mdi-home-outline",href:"Home"},{title:"About",icon:"mdi-account-outline",href:"About"},{title:"Resume",icon:"mdi-school-outline",href:"Resume"},{title:"Work",icon:"mdi-layers-outline",href:"Work"},{title:"Contact",icon:"mdi-chat-outline",href:"Contact"}],right:null}},methods:{scrollAnimateTo:function(t){var e=document.getElementById(t).offsetTop;window.scrollTo({behavior:"smooth",top:e})}}},c=l,u=(a("9bb1"),a("2877")),d=a("6544"),m=a.n(d),p=a("132d"),f=a("adda"),v=a("8860"),b=a("da13"),g=a("5d23"),h=a("34c3"),x=a("f774"),y=Object(u["a"])(c,o,r,!1,null,"2d71c608",null),_=y.exports;m()(y,{VIcon:p["a"],VImg:f["a"],VList:v["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:h["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VNavigationDrawer:x["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-12 bigbox"},[a("v-container",{attrs:{id:"wrap"}},[a("div",{staticClass:"align-self"},[a("div",[a("div",{attrs:{id:"one"}},[a("h1",[t._v("I'm Hayeon")])]),a("div",{attrs:{id:"two"}},[t._v(" 안녕하세요."),a("p",[t._v("신입 Frontend Develop 김하연입니다.")])]),a("div",{staticClass:"btn"},[a("v-btn",{attrs:{id:"btn1",rounded:"",color:"#FF5959",dark:""},on:{click:function(e){return t.scrollAnimateTo("Work")}}},[a("v-icon",{staticClass:"icon"},[t._v("mdi-widgets")]),t._v("View Portfolio ")],1),a("v-btn",{attrs:{id:"btn2",outlined:"",color:"#FFF",dark:"",rounded:""},on:{click:function(e){return e.preventDefault(),t.scrollAnimateTo("Contact")}}},[a("v-icon",{staticClass:"icon"},[t._v("mdi-email-outline")]),t._v("Hire me ")],1)],1)])])])],1)},w=[],V={name:"Home",data:function(){return{items:[{tit:"View Portfolio",href:"Work"},{tit:"Hire me",href:"Contact"}]}},methods:{scrollAnimateTo:function(t){var e=document.getElementById(t).offsetTop;window.scrollTo({behavior:"smooth",top:e})}}},S=V,k=(a("d3ec"),a("8336")),T=a("b0af"),O=a("a523"),j=Object(u["a"])(S,C,w,!1,null,"4be01689",null),E=j.exports;m()(j,{VBtn:k["a"],VCard:T["a"],VContainer:O["a"],VIcon:p["a"]});var F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mb-12 bigbox"},[i("v-container",{staticStyle:{position:"relative"},attrs:{mb12:""}},[i("div",{attrs:{id:"headline"}},[i("h3",[t._v("About me")])]),i("v-spacer",{staticStyle:{height:"40px"}}),i("v-layout",{staticStyle:{position:"relative",margin:"auto"},attrs:{row:"",wrap:"",flex:"",md12:""}},[i("v-flex",{staticStyle:{padding:"10px"},attrs:{sm4:""}},[i("v-img",{staticClass:"img"},[i("img",{attrs:{src:a("b20f"),height:"150",width:"150"}})])],1),i("v-flex",{attrs:{sm8:""}},[i("v-layout",{staticStyle:{position:"relative",padding:"10px",margin:"auto"},attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{mb12:""}},[i("h2",[t._v("Hello,")]),i("v-spacer",{staticStyle:{height:"20px"}}),i("div",{attrs:{id:"subtit1"}},[t._v("안녕하세요, 김하연입니다.")]),i("v-spacer",{staticStyle:{height:"20px"}}),i("v-layout",{staticStyle:{"margin-right":"-10px","margin-left":"-0px"},attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"flex1",attrs:{mb6:""}},[i("v-flex",{staticClass:"flex2",attrs:{mb3:""}},[i("span",{staticClass:"span"},[t._v(" Name:")]),t._v(" Hayeon kim ")]),i("v-flex",{staticClass:"flex2",attrs:{mb3:""}},[i("span",{staticClass:"span"},[t._v("Birthday:")]),t._v(" 28 December, 1994 ")])],1),i("v-flex",{staticClass:"flex1",attrs:{mb6:""}},[i("v-flex",{staticClass:"flex2",attrs:{mb3:""}},[i("span",{staticClass:"span"},[t._v("Location:")]),t._v(" Republic of Korea ")]),i("v-flex",{staticClass:"flex2",attrs:{mb3:""}},[i("span",{staticClass:"span"},[t._v("Email:")]),t._v(" kmhayeon12@gmail.com")])],1)],1),i("v-spacer",{staticStyle:{height:"20px"}}),i("div",[i("v-btn",{attrs:{id:"btnhm",rounded:"",color:"#4c67e4",dark:""},on:{click:function(e){return t.downloadCV(2)}}},[i("v-icon",{staticClass:"icon"},[t._v("fab fa-github")]),t._v("git hub")],1)],1)],1)],1)],1)],1)],1)],1)},I=[],A={name:"About",data:function(){return{url:"https://drive.google.com/open?id=1rmgI5t_ulXbGHUUiGE2QvZp0YIrs_wdi",gitHubUrl:"https://github.com/kmhayeon?tab=repositories"}},methods:{scrollAnimateTo:function(t){var e=document.getElementById(t).offsetTop;window.scrollTo({behavior:"smooth",top:e})},downloadCV:function(t){1==t?location.href=this.url:2==t&&(location.href=this.gitHubUrl)}}},H=A,L=(a("7fd4"),a("0e8f")),M=a("a722"),P=a("2fa4"),D=Object(u["a"])(H,F,I,!1,null,"f2c78192",null),R=D.exports;m()(D,{VBtn:k["a"],VCard:T["a"],VContainer:O["a"],VFlex:L["a"],VIcon:p["a"],VImg:f["a"],VLayout:M["a"],VSpacer:P["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-12 bigbox"},[a("v-container",{staticStyle:{position:"relative"},attrs:{mb12:""}},[a("div",{attrs:{id:"headline"}},[a("h3",[t._v("Experience")])]),a("v-spacer",{staticStyle:{height:"65px"}}),a("v-form",{staticClass:"mb-9"},t._l(t.items,(function(e){return a("v-card-text",{key:e.no,staticClass:"py-0",staticStyle:{position:"relative"}},[a("v-timeline",{staticStyle:{left:"-10px"},attrs:{dense:""}},[a("v-timeline-item",{staticStyle:{"padding-bottom":"40px"},attrs:{color:"#FF5959",small:""}},[a("v-layout",{attrs:{"pt-3":""}},[a("v-flex",{attrs:{xs3:""}},[a("span",{staticClass:"day"},[t._v(t._s(e.day))])]),a("v-flex",[a("strong",{staticClass:"tit"},[t._v(t._s(e.title))]),a("div",{staticClass:"subtit"},[t._v(t._s(e.subtitle))])])],1)],1)],1)],1)})),1)],1)],1)},U=[],$={name:"Experience",data:function(){return{items:[{no:1,day:"2019.02 - 2020.02",title:"DataRep.Up",subtitle:"Data & Platform팀 근무"},{no:2,day:"2018.04 - 2018.06",title:"LUNA SOFT",subtitle:"플랫폼 기획팀 인턴"},{no:3,day:"2014.03 - 2017.02",title:"계원예술대학",subtitle:"디지털 미디어과 졸업"}],right:null}}},B=$,W=(a("4d81"),a("99d9")),G=a("4bd4"),J=a("8414"),z=a("1e06"),Y=Object(u["a"])(B,N,U,!1,null,"4fc7c39c",null),K=Y.exports;m()(Y,{VCard:T["a"],VCardText:W["a"],VContainer:O["a"],VFlex:L["a"],VForm:G["a"],VLayout:M["a"],VSpacer:P["a"],VTimeline:J["a"],VTimelineItem:z["a"]});var Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mb-12 bigbox"},[i("v-container",{staticStyle:{position:"relative",padding:"auto"},attrs:{"pa-9":""}},[i("v-layout",t._l(t.items,(function(t){return i("v-flex",{key:t.no,staticStyle:{position:"relative",padding:"10px"},attrs:{sm3:""}},[i("v-img",{staticClass:"imgre",attrs:{src:a("7584")("./"+t.img)}})],1)})),1)],1)],1)},X=[],Z={name:"Myskills",data:function(){return{items:[{no:1,img:"html.png"},{no:2,img:"js.png"},{no:3,img:"sass.png"},{no:4,img:"react.png"},{no:5,img:"vue.png"}]}}},q=Z,tt=(a("f8fd"),Object(u["a"])(q,Q,X,!1,null,"471e5d9e",null)),et=tt.exports;m()(tt,{VCard:T["a"],VContainer:O["a"],VFlex:L["a"],VImg:f["a"],VLayout:M["a"]});var at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mb-12 bigbox"},[i("div",{attrs:{id:"headline"}},[i("h3",[t._v("Portfoilo")])]),i("v-spacer",{staticStyle:{height:"100px"}}),i("v-layout",[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[t._l(t.items,(function(e,n){return[i("v-col",{key:n,staticStyle:{"max-width":"260px","max-height":"210px"},attrs:{cols:"12",md:"4"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var s=n.hover;return[i("v-card",[i("v-img",{attrs:{src:a("7584")("./"+e.image),height:"180px"},on:{click:function(a){return t.card(e.url)}}},[s?i("div",{staticClass:"transition-fast-in-fast-out white--text"},[i("v-card-title",[i("v-row",{staticClass:"fill-height flex-column",attrs:{justify:"space-between"}},[i("div",{staticClass:"mt-4 subheading text-left",attrs:{id:"text"}},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"subtext"},[t._v(" "+t._s(e.subtitle)+" ")]),i("div",{staticClass:"subtext"},[t._v(" "+t._s(e.cont)+" ")])])],1)],1):t._e()])],1)]}}],null,!0)})],1)]}))],2)],1)],1)},it=[],nt={name:"Service",data:function(){return{items:[{title:"D.aid",subtitle:"기획 및 프론트엔드 개발",cont:"HTML / CSS / Javascript / Vue",image:"con1.png",url:"https://drive.google.com/open?id=13h5nxIywueOUpQZskQ_WzxRbxOC9MlY4"},{title:"Project",subtitle:"디자인 시안 프론트엔드 개발",cont:"HTML / CSS / Javascript / React",image:"con2.png",url:"https://www.hacoding.com/react"},{title:"Hacoding",subtitle:"디자인 시안 프론트엔드 개발",cont:"HTML / CSS / Javascript / Vue",image:"con3.png",url:"https://www.hacoding.com/"}]}},methods:{card:function(t){location.href=t}}},st=nt,ot=(a("2205"),a("62ad")),rt=a("ce87"),lt=a("0fd9"),ct=Object(u["a"])(st,at,it,!1,null,"f4e71c7a",null),ut=ct.exports;m()(ct,{VCard:T["a"],VCardTitle:W["b"],VCol:ot["a"],VHover:rt["a"],VImg:f["a"],VLayout:M["a"],VRow:lt["a"],VSpacer:P["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-12 bigbox"},[a("v-container",{staticStyle:{position:"relative"},attrs:{mb12:""}},[a("div",{attrs:{id:"headline"}},[a("h3",[t._v("Get in touch")])]),a("v-spacer",{staticStyle:{height:"70px"}}),a("v-form",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{sm4:""}},t._l(t.items,(function(e){return a("div",{key:e.title},[a("h3",{staticStyle:{"font-size":"17px"}},[a("v-icon",{staticStyle:{"padding-right":"13px"},attrs:{color:"#FF5959"}},[t._v(t._s(e.icon)+" ")]),t._v(t._s(e.title))],1),a("div",{staticClass:"imsub"},[t._v(t._s(e.sub))]),a("v-spacer",{staticClass:"mb-6"})],1)})),0),a("v-flex",{attrs:{sm8:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{sm6:""}},[a("v-text-field",{staticClass:"txtfield",staticStyle:{"padding-right":"10px"},attrs:{label:"Your name",outlined:"",rounded:"",dense:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-flex",{attrs:{sm6:""}},[a("v-text-field",{staticClass:"txtfield",attrs:{label:"Email Address",outlined:"",rounded:"",dense:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-text-field",{staticClass:"txtfield",attrs:{label:"Subject",outlined:"",rounded:"",dense:""},model:{value:t.sub,callback:function(e){t.sub=e},expression:"sub"}}),a("v-textarea",{staticClass:"txtfield",attrs:{label:"Message...","auto-grow":"",outlined:"",rounded:"",rows:"1","row-height":"100"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),a("v-btn",{attrs:{type:"submit",id:"btnsm",rounded:"",color:"#FF5959",dark:""},on:{click:function(e){return e.preventDefault(),t.sendMail(e)}}},[t._v("Submit Message")])],1)],1)],1)],1)],1)},mt=[],pt=(a("b0c0"),a("4c53"),{name:"Getintouch",data:function(){return{items:[{title:"Phone",sub:"010-2715-9304",icon:"mdi-phone-outline"},{title:"Email address",sub:"kmhayeon12@gmail.com",icon:"mdi-email-outline"},{title:"Location",sub:"Republic of Korea",icon:"mdi-map-marker-outline"}],right:null,name:"",email:"",sub:"",msg:""}},methods:{sendMail:function(){var t={name:this.name,email:this.email,sub:this.sub,msg:this.msg};console.log(t);var e=new XMLHttpRequest,a=new FormData;a.append("name",this.name),a.append("email",this.email),a.append("sub",this.sub),a.append("msg",this.msg),e.onload=function(){200===e.status||201===e.status?console.log(e.responseText):console.error(e.responseText)},e.open("POST","https://www.hacoding.com/email"),e.send(a),alert("추후 연락 드리도록 하겠습니다"),this.name="",this.email="",this.sub="",this.msg=""}}}),ft=pt,vt=(a("b83c"),a("8654")),bt=a("a844"),gt=Object(u["a"])(ft,dt,mt,!1,null,"661ed0d7",null),ht=gt.exports;m()(gt,{VBtn:k["a"],VCard:T["a"],VContainer:O["a"],VFlex:L["a"],VForm:G["a"],VIcon:p["a"],VLayout:M["a"],VSpacer:P["a"],VTextField:vt["a"],VTextarea:bt["a"]});var xt={name:"App",components:{AppNav:_,Home:E,About:R,Experience:K,Myskills:et,Service:ut,Getintouch:ht}},yt=xt,_t=(a("0d48"),a("7496")),Ct=a("a75b"),wt=Object(u["a"])(yt,n,s,!1,null,"2ebf90eb",null),Vt=wt.exports;m()(wt,{VApp:_t["a"],VContainer:O["a"],VContent:Ct["a"],VFlex:L["a"]});var St=a("f309");a("5363"),a("15f5");i["default"].use(St["a"]);var kt=new St["a"]({icons:{iconfont:"mdiSvg"}}),Tt=a("2901"),Ot=a.n(Tt);i["default"].config.productionTip=!1,new i["default"]({vuetify:kt,render:function(t){return t(Vt)}}).$mount("#app"),i["default"].use(Ot.a)},"668a":function(t,e,a){},"6ef2":function(t,e,a){},7584:function(t,e,a){var i={"./con1.png":"3af8","./con2.png":"7ef9","./con3.png":"3b75","./css.png":"96b9","./html.png":"d9e2","./hy150.png":"b20f","./hy70.png":"55d7","./js.png":"f2da","./react.png":"2195","./sass.png":"2b8f","./vue.png":"d191"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="7584"},"7e77":function(t,e,a){},"7ef9":function(t,e,a){t.exports=a.p+"img/con2.94c2e184.png"},"7fd4":function(t,e,a){"use strict";var i=a("ad40"),n=a.n(i);n.a},"96b9":function(t,e,a){t.exports=a.p+"img/css.85a39523.png"},"9bb1":function(t,e,a){"use strict";var i=a("e88c"),n=a.n(i);n.a},aa1e:function(t,e,a){},ad40:function(t,e,a){},b20f:function(t,e,a){t.exports=a.p+"img/hy150.6de0481b.png"},b83c:function(t,e,a){"use strict";var i=a("aa1e"),n=a.n(i);n.a},c4f5:function(t,e,a){},d191:function(t,e,a){t.exports=a.p+"img/vue.8fb37a74.png"},d3ec:function(t,e,a){"use strict";var i=a("668a"),n=a.n(i);n.a},d9e2:function(t,e,a){t.exports=a.p+"img/html.129a2149.png"},e88c:function(t,e,a){},f2da:function(t,e,a){t.exports=a.p+"img/js.e37d1bf6.png"},f8fd:function(t,e,a){"use strict";var i=a("c4f5"),n=a.n(i);n.a}});
//# sourceMappingURL=app.3da5499a.js.map