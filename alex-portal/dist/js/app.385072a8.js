(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function s(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a6319e53"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1771:function(e,t,n){var a={"./icon.png":"555a","./logo.png":"cf05","./logo.svg":"9b19"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id="1771"},2336:function(e,t,n){"use strict";n("640d")},2663:function(e,t,n){"use strict";n("4a90")},"3bb2":function(e,t,n){"use strict";n("6ccd")},"4a90":function(e,t,n){},"555a":function(e,t,n){e.exports=n.p+"img/icon.8780fefb.png"},"640d":function(e,t,n){},"6ccd":function(e,t,n){},"778c":function(e,t,n){"use strict";n("bb5f")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"},bb5f:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticStyle:{background:"#e5c5a7"}},[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",absolute:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1)]),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{staticStyle:{"background-color":"#b4f837"},attrs:{app:"",padless:"",absolute:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Cool Guy Inc")])])],1)],1)},o=[],s=a["a"].extend({name:"App"}),r=s,l=n("2877"),c=n("6544"),u=n.n(c),p=n("7496"),d=n("40dc"),f=n("62ad"),m=n("a523"),v=n("553a"),h=n("adda"),g=n("f6c4"),b=Object(l["a"])(r,i,o,!1,null,null,null),y=b.exports;u()(b,{VApp:p["a"],VAppBar:d["a"],VCol:f["a"],VContainer:m["a"],VFooter:v["a"],VImg:h["a"],VMain:g["a"]});n("d3b7");var _=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Resume")],1)},k=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("div",{staticClass:"resume"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"left"},[n("h1",[e._v("ALEX PADEN")]),n("MusicBox"),n("Subtitle"),n("br"),n("SkillPanel"),n("br"),n("hr"),n("h2",[e._v("WORK EXPERIENCE")]),n("WorkHistory"),n("hr"),n("p",[e._v("ggg")]),n("ResumeFooter")],1),n("div",{staticClass:"right"},[e._v(" Very long content ")])])])])},C=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"res-footer"},[n("h3",[e._v("Project Samples")]),n("div",{staticClass:"footer-icons"},[n("ResIcon",{attrs:{filename:"icon.png",title:"something"}}),n("ResIcon",{attrs:{filename:"icon.png",title:"other thing"}}),n("ResIcon",{attrs:{filename:"icon.png",title:"big bong"}}),n("ResIcon",{attrs:{filename:"icon.png",title:"danmkk weed"}}),n("ResIcon",{attrs:{filename:"icon.png",title:"memes"}})],1)])},O=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icon"},[a("img",{attrs:{src:n("1771")("./"+e.filename)}}),a("h5",[e._v(e._s(e.title))])])},P=[],I={name:"ResIcon",props:{title:String,filename:String}},S=I,V=(n("2663"),Object(l["a"])(S,j,P,!1,null,"a6337bda",null)),R=V.exports,M={name:"ResumeFooter",components:{ResIcon:R}},L=M,H=(n("3bb2"),Object(l["a"])(L,E,O,!1,null,"ad39f858",null)),$=H.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"subtitle"},[n("h2",[e._v(" Something Cool Here ")])])}],F={name:"subtitle"},B=F,z=(n("f596"),Object(l["a"])(B,T,A,!1,null,"01845eb1",null)),D=z.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-timeline",{attrs:{dense:""}},e._l(e.positions,(function(t,a){return n("v-timeline-item",{key:a,attrs:{title:t.title,subtitle:t.subtitle,description:t.description,small:""}},[n("h3",[e._v(e._s(t.title))]),n("h4",[e._v(e._s(t.subtitle))]),n("v-text",[e._v(e._s(t.description))])],1)})),1)],1)},W=[],J={name:"WorkHistory",data:function(){return{positions:[{i:1,title:"fucking ganbgster",subtitle:"kill ppl inc.",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{i:2,title:"big man",subtitle:"1969",description:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem."},{i:3,title:"small man",subtitle:"short person and company",description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}]}}},K=J,U=(n("778c"),n("8414")),X=n("1e06"),q=Object(l["a"])(K,N,W,!1,null,"b5f66fd8",null),G=q.exports;u()(q,{VContainer:m["a"],VTimeline:U["a"],VTimelineItem:X["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"skillz"},[n("v-row",{attrs:{justify:"center"}},[n("v-expansion-panels",{attrs:{inset:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" header (title content) ")]),n("v-expansion-panel-content",[e._v(" content here ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" header cageine ")]),n("v-expansion-panel-content",[n("v-btn",{attrs:{"x-large":""}},[e._v("test")])],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" test ")]),n("v-expansion-panel-content",[e._v(" kast one ")])],1)],1)],1)],1)},Q=[],Z={name:"SkillPanel"},ee=Z,te=n("8336"),ne=n("cd55"),ae=n("49e2"),ie=n("c865"),oe=n("0393"),se=n("0fd9"),re=Object(l["a"])(ee,Y,Q,!1,null,"7512c14d",null),le=re.exports;u()(re,{VBtn:te["a"],VExpansionPanel:ne["a"],VExpansionPanelContent:ae["a"],VExpansionPanelHeader:ie["a"],VExpansionPanels:oe["a"],VRow:se["a"]});var ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"visualizer"},[n("h1",[e._v("Kinesis Example")]),n("kinesis-container",{attrs:{audio:e.audio,playAudio:e.isPlaying,crossOrigin:"anonymous"}},[n("button",{staticClass:"button",class:e.isPlaying&&"button--playing",on:{click:e.changeState}},[e._v("hey")]),n("audio",{attrs:{controls:""}},[n("source",{attrs:{src:"static/temp.mp3"}})]),n("kinesis-audio",{attrs:{audioIndex:10,crossOrigin:"anonymous"}},[n("kinesis-element",{attrs:{strength:10}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"80",viewBox:"0 0 24 24",width:"80"}},[n("path",{attrs:{d:"M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1h-3zM5 5h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"}})])])],1)],1)],1)},ue=[],pe=n("94b3"),de={components:{},data:function(){return{audio:"/static/temp.mp3",isPlaying:!1}},methods:{changeState:function(){this.isPlaying=!this.isPlaying}}},fe=de,me=Object(l["a"])(fe,ce,ue,!1,null,null,null),ve=me.exports,he=a["a"].extend({name:"Resume",components:{ResumeFooter:$,Subtitle:D,WorkHistory:G,SkillPanel:le,MusicBox:ve}}),ge=he,be=(n("2336"),Object(l["a"])(ge,w,C,!1,null,"0ca2448e",null)),ye=be.exports;u()(be,{VContainer:m["a"]});var _e=a["a"].extend({name:"Home",components:{Resume:ye}}),xe=_e,ke=Object(l["a"])(xe,x,k,!1,null,null,null),we=ke.exports;a["a"].use(_["a"]);var Ce=[{path:"/",name:"Home",component:we},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ee=new _["a"]({routes:Ce}),Oe=Ee,je=n("2f62");a["a"].use(je["a"]);var Pe=new je["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ie=n("f309");a["a"].use(Ie["a"]);var Se=new Ie["a"]({});a["a"].use(pe["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Oe,store:Pe,vuetify:Se,render:function(e){return e(y)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f596:function(e,t,n){"use strict";n("f969")},f969:function(e,t,n){}});
//# sourceMappingURL=app.385072a8.js.map