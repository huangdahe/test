webpackJsonp([1],{"8/c5":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"block"},[a("el-carousel",{attrs:{height:"150px",arrow:"always"}},t._l(t.flowInfo.list,function(t,i){return a("el-carousel-item",{key:i},[a("img",{staticClass:"banner",attrs:{src:t.url}})])}))],1),t._v(" "),a("el-row",{staticClass:"seach-product"},[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{placeholder:"商品搜索：请输入商品关键字","prefix-icon":"el-icon-search"},model:{value:t.flowInfo.product,callback:function(i){t.$set(t.flowInfo,"product",i)},expression:"flowInfo.product"}})],1)],1),t._v(" "),a("el-row",{staticClass:"sort"},t._l(t.flowInfo.sortIist,function(i,s){return a("el-col",{key:s,attrs:{span:t.flowInfo.sort}},[a("img",{staticClass:"sort-item",attrs:{src:i.url}}),t._v(" "),a("div",{staticClass:"sortName"},[t._v(t._s(i.name))])])})),t._v(" "),a("el-row",{staticClass:"zone-product"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"title-product"},[a("div"),t._v("热卖专区")])])],1),t._v(" "),a("el-row",t._l(t.flowInfo.productList,function(i,s){return a("el-col",{key:s,attrs:{span:12}},[a("div",{staticClass:"zone-product-list"},[a("div",{staticClass:"product-list-img"},[a("img",{attrs:{src:i.url}})]),t._v(" "),a("div",{staticClass:"product-name"},[t._v(t._s(i.name))]),t._v(" "),a("div",{staticClass:"product-price"},[a("span",[t._v("活动价￥"+t._s(i.price))]),t._v(" "),a("span",[t._v("￥"+t._s(i.originalPrice))])])])])}))],1)},staticRenderFns:[]};var r=a("VU/8")({data:function(){return{flowInfo:{list:[{id:1,url:"./static/image/1.png"},{id:2,url:"./static/image/2.png"}],product:null,sort:0,sortItem:4,sortIist:[{url:"./static//image/58.jpg",name:"彩妆专区"},{url:"./static//image/58.jpg",name:"彩妆专区"},{url:"./static//image/58.jpg",name:"彩妆专区"},{url:"./static//image/58.jpg",name:"彩妆专区"}],productList:[{name:"神仙水",url:"./static//image/240x240.jpg",price:100,originalPrice:120},{name:"神仙水22",url:"./static//image/240.jpg",price:600,originalPrice:720},{name:"神仙水",url:"./static//image/240x240.jpg",price:100,originalPrice:120},{name:"神仙水22",url:"./static//image/240.jpg",price:600,originalPrice:720},{name:"神仙水",url:"./static//image/240x240.jpg",price:100,originalPrice:120},{name:"神仙水22",url:"./static//image/240.jpg",price:600,originalPrice:720}]}}},mounted:function(){this.flowInfo.sort=24/this.flowInfo.sortItem}},s,!1,function(t){a("kjYb")},"data-v-29ecabd8",null);i.default=r.exports},kjYb:function(t,i){}});