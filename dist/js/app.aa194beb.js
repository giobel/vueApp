(function(e){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],h=0,u=[];h<o.length;h++)n=o[h],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(u.length)u.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(s=!1)}s&&(a.splice(t--,1),e=n(n.s=i[0]))}return e}var s={},r={app:0},a=[];function n(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var s=i("85ec"),r=i.n(s);r.a},3278:function(e,t,i){"use strict";var s=i("a73d"),r=i.n(s);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("h1",[e._v("BGH")]),i("HelloWorld",{attrs:{msg:e.items}}),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[e._v(" With Bootstrap! "),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}],n=(i("159b"),i("bc3a")),o=i.n(n),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("div",{staticClass:"container-fluid mt-4"},[i("div",{staticClass:"row justify-content-center"},e._l(e.statusSummary,(function(e,t){return i("Card",{key:t,attrs:{title:e,bodycontent:(t+1).toString()}})})),1)]),i("h3",[e._v("List of values")]),e._l(e.msg,(function(t,s){return i("li",{key:s},[e._v(" "+e._s(t.eid)+" : "+e._s(t.last_updated)+" - Warnings "+e._s(t.warnings))])})),i("div",{attrs:{id:"apexchart"}})],2)},c=[],d=i("e122"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-auto mb-3"},[i("div",{staticClass:"card bg-light mb-3",staticStyle:{width:"30rem"}},[i("h2",{staticClass:"card-title text-primary"},[e._v(e._s(e.title[1][e.title[1].length-1]))]),i("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(e.title[0]))]),e._m(0)])])},u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card-body"},[i("div",{attrs:{id:"charte"}})])}],f={name:"Card",props:{title:Array,bodycontent:String},data:function(){return{chart:null}},mounted:function(){this.apexc()},methods:{apexc:function(){var e={chart:{type:"area",height:250,foreColor:"#999",stacked:!0,dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:["#00E396","#0090FF"],stroke:{curve:"smooth",width:3},dataLabels:{enabled:!1},series:[{name:this.title[0],data:this.title[1]}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{type:"category",categories:this.title[2],labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!1,showDuplicates:!0,trim:!0,minHeight:void 0,maxHeight:120,style:{colors:[],fontSize:"12px",fontFamily:"Helvetica, Arial, sans-serif",cssClass:"apexcharts-xaxis-label"},offsetX:0,offsetY:0},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{offsetX:14,offsetY:-5},tooltip:{enabled:!1}},grid:{padding:{left:-5,right:5}},legend:{position:"top",horizontalAlign:"left"},fill:{type:"solid",fillOpacity:.7}};try{document.getElementById("charte").id="chart"+this.bodycontent}catch(t){console.log(t)}this.chart=new d["a"](document.getElementById("chart"+this.bodycontent),e),this.chart.render(),console.log("body content "+this.bodycontent),console.log("Run function")}}},p=f,m=i("2877"),v=Object(m["a"])(p,h,u,!1,null,null,null),y=v.exports,b=i("b9b9"),w={name:"HelloWorld",props:{msg:Array},components:{Card:y},data:function(){return{chart:null,statusSummary:[],newDate:[],sheetsTimeSerie:[],warningTimeSerie:[],viewsTimeSerie:[],elementsTimeSerie:[],elementsTypeTimeSerie:[],viewportsTimeSerie:[]}},created:function(){},watch:{msg:function(e){null!=this.chart&&this.chart.remove(),this.apex(e)}},methods:{apex:function(){var e=this;this.msg.forEach((function(t){var i=new Date(t.last_updated[0]);e.newDate.push(b(i,"dd/mm htt")),e.sheetsTimeSerie.push(t.sheets[0]),e.warningTimeSerie.push(t.warnings[0]),e.viewsTimeSerie.push(t.views[0]),e.elementsTimeSerie.push(t.elements[0]),e.elementsTypeTimeSerie.push(t.elementTypes[0]),e.viewportsTimeSerie.push(t.viewports[0])})),this.statusSummary.push(["Sheets",this.sheetsTimeSerie,this.newDate],["Views",this.viewsTimeSerie,this.newDate],["Viewports",this.viewportsTimeSerie,this.newDate],["Elements",this.elementsTimeSerie,this.newDate],["Element Types",this.elementsTypeTimeSerie,this.newDate],["Warnings",this.warningTimeSerie,this.newDate]),console.log(this.sheetsTimeSerie),console.log(this.newDate);var t={chart:{type:"area",height:300,foreColor:"#999",stacked:!0,dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:["#00E396","#0090FF"],stroke:{curve:"smooth",width:3},dataLabels:{enabled:!1},series:[{name:"Warnings",data:this.warningTimeSerie},{name:"Sheets",data:this.sheetsTimeSerie}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{categories:this.newDate,axisBorder:{show:!1},axisTicks:{show:!0}},yaxis:{labels:{offsetX:14,offsetY:-5},tooltip:{enabled:!0}},grid:{padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"}},legend:{position:"top",horizontalAlign:"left"},fill:{type:"solid",fillOpacity:.7}};this.chart=new d["a"](document.querySelector("#apexchart"),t),this.chart.render()}}},g=w,S=(i("3278"),Object(m["a"])(g,l,c,!1,null,"8cc5ff4c",null)),T=S.exports;console.log("secret");var _={name:"app",data:function(){return{items:[],startups:[]}},created:function(){this.loadItems()},methods:{loadItems:function(){var e=this,t="app7DOsL5PdjPEbzq",i="keyHB9zJWPfGu8OLQ";this.items=[],o.a.get("https://api.airtable.com/v0/"+t+"/Model%20Status?maxRecords=100&sort%5B0%5D%5Bfield%5D=Id&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view",{headers:{Authorization:"Bearer "+i}}).then((function(t){var i=t.data.records;i.forEach((function(t){var i={eid:[t["fields"]["Id"],"Element Id"],last_updated:[t["fields"]["Created"],"Updated"],warnings:[t["fields"]["WARNINGS"],"Warnings"],sheets:[t["fields"]["SHEETS"],"Sheets"],elements:[t["fields"]["ELEMENTS"],"Elements"],views:[t["fields"]["VIEWS"],"Views"],elementTypes:[t["fields"]["ELEMENT TYPES"],"Views"],viewports:[t["fields"]["VIEWPORTS"],"Viewports"]};e.items.push(i)}))})).catch((function(e){console.log(e)}))}},components:{HelloWorld:T}},x=_,E=(i("034f"),Object(m["a"])(x,r,a,!1,null,null,null)),O=E.exports;i("4989"),i("ab8b"),i("f9e3");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,i){},a73d:function(e,t,i){}});
//# sourceMappingURL=app.aa194beb.js.map