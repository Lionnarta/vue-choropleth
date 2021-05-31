(function(t){function e(e){for(var o,a,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-choropleth/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"205b":function(t,e,n){"use strict";n("dace")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6cc5");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Map")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"map"}},[n("div",{staticClass:"areaContainer"},[n("div",{staticClass:"areaInfo"},[t._v(" US State Population Density "),n("div",{staticClass:"info"},[t.dataClick?[n("p",{staticClass:"info-content"},[t._v(t._s(t.dataClick.name))]),n("p",{staticClass:"info-content"},[t._v(t._s(t.dataClick.density)+" people/mi"),n("sup",[t._v("2")])])]:[n("p",[t._v("Click state to get information")])]],2)])]),n("div",{attrs:{id:"map"}})])},c=[],s=(n("d81d"),n("b0c0"),n("bc3a")),l=n.n(s),u=n("e11e"),p=n.n(u),f={data:function(){return{map:null,center:[37.0902,-95.7129],zoom:5,mapboxAccessToken:"pk.eyJ1IjoibGlvbm5hcnRhIiwiYSI6ImNrcDJjanBmNjFqMHcyb213NjlzYzJvaHgifQ.GLBCmJTmjCBql0vAb4arpw",dataClick:null,geojson:null}},mounted:function(){var t=this;this.map=p.a.map("map",{center:this.center,zoom:this.zoom}),p.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token="+this.mapboxAccessToken,{id:"mapbox/light-v9",tileSize:512,zoomOffset:-1}).addTo(this.map),this.map.zoomControl.setPosition("bottomright"),l.a.get("https://raw.githubusercontent.com/lulumalik/choropleth/master/public/us.json").then((function(e){p.a.geoJSON(e.data,{style:t.style,onEachFeature:t.onEachFeature}).addTo(t.map)}))},methods:{densityToColor:function(t){return t>1e3?"#800026":t>500?"#BD0026":t>200?"#E31A1C":t>100?"#FC4E2A":t>50?"#FD8D3C":t>20?"#FEB24C":t>10?"#FED976":"#FFEDA0"},style:function(t){return{fillColor:this.densityToColor(t.properties.density),weight:1,opacity:1,color:"white",dashArray:"3",fillOpacity:.7}},highlightedFeature:function(t){var e=t.target;e.setStyle({weight:5,color:"#423b3b",dashArray:"",fillOpacity:0}),p.a.Browser.ie||p.a.Browser.edge||p.a.Browser.opera||e.bringToFront()},resetFeature:function(t){var e=t.target;e.setStyle({weight:1,opacity:1,color:"white",dashArray:"3",fillOpacity:.7})},infoFeature:function(t){this.dataClick=t.target.feature.properties},onEachFeature:function(t,e){e.on({mouseover:this.highlightedFeature,mouseout:this.resetFeature,click:this.infoFeature}),e.bindTooltip(t.properties.name,{direction:"center",className:"my-labels"}).openTooltip()}}},d=f,h=(n("c3f0"),n("205b"),n("2877")),m=Object(h["a"])(d,a,c,!1,null,"3432f23e",null),b=m.exports,y={name:"App",components:{Map:b}},v=y,g=(n("034f"),Object(h["a"])(v,r,i,!1,null,null,null)),w=g.exports;delete u["Icon"].Default.prototype._getIconUrl,u["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(w)}}).$mount("#app")},"63dc":function(t,e,n){},"85ec":function(t,e,n){},c3f0:function(t,e,n){"use strict";n("63dc")},dace:function(t,e,n){}});
//# sourceMappingURL=app.8bdaae95.js.map