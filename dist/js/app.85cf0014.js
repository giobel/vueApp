(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),s=r.n(a);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("BGH")]),r("HelloWorld",{attrs:{msg:t.items}}),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" With Bootstrap! "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(r("159b"),r("bc3a")),o=r.n(i),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("div",{staticClass:"container-fluid mt-4"},[r("div",{staticClass:"row justify-content-center"},t._l(t.statusSummary,(function(t,e){return r("Card",{key:e,attrs:{title:t,bodycontent:(e+1).toString()}})})),1)]),r("h3",[t._v("List of values")]),t._l(t.msg,(function(e,a){return r("li",{key:a},[t._v(" "+t._s(e.eid)+" : "+t._s(e.last_update)+" - Warnings "+t._s(e.warnings))])})),r("div",{attrs:{id:"apexchart"}})],2)},c=[],d=(r("4fad"),r("e122")),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-auto mb-3"},[r("div",{staticClass:"card bg-light mb-3",staticStyle:{width:"30rem"}},[r("h2",{staticClass:"card-title"},[t._v(t._s(t.title[1]))]),r("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.title[0]))]),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text"},[t._v(t._s(t.bodycontent))]),r("div",{attrs:{id:t.bodycontent}},[t._v(t._s(t.apex()))]),r("div",{attrs:{id:"charte"}})])])])},f=[],h={name:"Card",props:{title:Array,bodycontent:String},methods:{apex:function(){var t={chart:{type:"area",height:300,foreColor:"#999",stacked:!0,dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:["#00E396","#0090FF"],stroke:{curve:"smooth",width:3},dataLabels:{enabled:!1},series:[{name:"Total Views "+this.bodycontent,data:r(0,18)},{name:"Unique Views",data:r(1,18)}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{offsetX:14,offsetY:-5},tooltip:{enabled:!0}},grid:{padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"}},legend:{position:"top",horizontalAlign:"left"},fill:{type:"solid",fillOpacity:.7}};try{document.getElementById("charte").id="chart"+this.bodycontent}catch(a){console.log(a)}var e=new d["a"](document.querySelector("#chart"+this.bodycontent),t);function r(t,e){var r=[[4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5],[2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2]],a=0,s=[],n=new Date("11 Nov 2012").getTime();while(a<e)s.push([n,r[t][a]]),n+=864e5,a++;return s}e.render(),console.log("body content "+this.bodycontent),console.log("Run function")}}},p=h,m=r("2877"),y=Object(m["a"])(p,u,f,!1,null,null,null),b=y.exports,v=r("b9b9"),g={name:"HelloWorld",props:{msg:Array},components:{Card:b},data:function(){return{chart:null,statusSummary:[],newDate:[],sheetsTimeSerie:[],warningTimeSerie:[]}},created:function(){},watch:{msg:function(t){null!=this.chart&&this.chart.remove(),this.statusSummary=Object.entries(this.msg[this.msg.length-1]),this.apex(t)}},methods:{apex:function(){var t=this;this.msg.forEach((function(e){var r=new Date(e.last_update);t.newDate.push(v(r,"ddd dd/mm/yy htt")),t.sheetsTimeSerie.push(e.sheets),t.warningTimeSerie.push(e.warnings)}));var e={chart:{type:"area",height:300,foreColor:"#999",stacked:!0,dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:["#00E396","#0090FF"],stroke:{curve:"smooth",width:3},dataLabels:{enabled:!1},series:[{name:"Warnings",data:this.warningTimeSerie},{name:"Sheets",data:this.sheetsTimeSerie}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{categories:this.newDate,axisBorder:{show:!1},axisTicks:{show:!0}},yaxis:{labels:{offsetX:14,offsetY:-5},tooltip:{enabled:!0}},grid:{padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"}},legend:{position:"top",horizontalAlign:"left"},fill:{type:"solid",fillOpacity:.7}};this.chart=new d["a"](document.querySelector("#apexchart"),e),this.chart.render()}}},w=g,_=(r("bac8"),Object(m["a"])(w,l,c,!1,null,"510024ce",null)),x=_.exports;console.log("secret");var S={name:"app",data:function(){return{items:[],startups:[]}},created:function(){this.loadItems()},methods:{loadItems:function(){var t=this,e="app7DOsL5PdjPEbzq",r="keyHB9zJWPfGu8OLQ";this.items=[],o.a.get("https://api.airtable.com/v0/"+e+"/Model%20Status?maxRecords=100&sort%5B0%5D%5Bfield%5D=Id&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view",{headers:{Authorization:"Bearer "+r}}).then((function(e){var r=e.data.records;r.forEach((function(e){var r={eid:e["fields"]["Id"],last_update:e["fields"]["Created"],warnings:e["fields"]["WARNINGS"],sheets:e["fields"]["SHEETS"]};t.items.push(r)}))})).catch((function(t){console.log(t)}))}},components:{HelloWorld:x}},O=S,k=(r("034f"),Object(m["a"])(O,s,n,!1,null,null,null)),C=k.exports;r("4989"),r("ab8b"),r("f9e3");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,r){},bac8:function(t,e,r){"use strict";var a=r("c4ee"),s=r.n(a);s.a},c4ee:function(t,e,r){}});
//# sourceMappingURL=app.85cf0014.js.map