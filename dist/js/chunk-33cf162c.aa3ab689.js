(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33cf162c"],{"0d92":function(t,e,s){},3014:function(t,e,s){"use strict";s("a6f5")},"355f":function(t,e,s){"use strict";s("f24e")},"6ab7":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("detail-navbar",{ref:"navbar",staticClass:"navbar",on:{navClick:t.navClick}}),s("scroll",{ref:"scroll",staticClass:"scroll",on:{contentScroll:t.contentScroll}},[s("detail-swiper",{attrs:{images:t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{detailInfo:t.detailInfo},on:{imageLoad:t.goodsInfoImgLoad}}),s("detail-params",{ref:"params",attrs:{paramInfo:t.paramsInfo}}),s("detail-comment-info",{ref:"comment",attrs:{commentInfo:t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{data:t.recommend},on:{imageLoad:t.recommendImgLoad}})],1),s("detail-bottom-bar",{staticClass:"bottomBar",on:{addCart:t.addCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.showBackTop,expression:"showBackTop"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},a=[],i=s("5d17"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav-bar",{staticClass:"navbar"},[n("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[n("img",{attrs:{src:s("7a74"),alt:""}})]),n("div",{staticClass:"center",attrs:{slot:"center"},slot:"center"},t._l(t.list,(function(e,s){return n("span",{key:e,class:{active:t.currentIndex==s},on:{click:function(e){return t.navClick(s)}}},[t._v(t._s(e))])})),0)])},c=[],r=s("a7ac"),l={data:function(){return{list:["商品","参数","评论","推荐"],currentIndex:0}},components:{NavBar:r["a"]},methods:{backClick:function(){this.$router.back(-1)},navClick:function(t){this.currentIndex=t,this.$emit("navClick",t)}}},d=l,f=(s("9f29"),s("2877")),u=Object(f["a"])(d,o,c,!1,null,"b9e3347e",null),m=u.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"swiper",attrs:{isImgLoad:t.isImgLoad}},t._l(t.images,(function(e,n){return s("swiper-item",{key:n},[s("img",{attrs:{src:e},on:{load:t.imgLoad}})])})),1)},p=[],_=s("dc2c"),v={data:function(){return{loadCounter:0,isImgLoad:!1}},props:{images:{type:Array,default:[]}},components:{Swiper:_["a"],SwiperItem:_["b"]},methods:{imgLoad:function(){this.loadCounter++,this.loadCounter==this.images.length&&(this.isImgLoad=!0,console.log("swiperimg loaded count"+this.loadCounter))}}},g=v,I=(s("ddbc"),Object(f["a"])(g,h,p,!1,null,"ad3d3d30",null)),b=I.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!=Object.keys(t.goods).length?s("div",{staticClass:"root"},[s("div",{staticClass:"info-title"},[s("span",[t._v(t._s(t.goods.title))])]),s("div",{staticClass:"info-price"},[s("span",[t._v(t._s(t.goods.realPrice))]),s("span",[t._v(t._s(t.goods.oldPrice))]),s("span",[t._v(t._s(t.goods.discount))])]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-services"},t._l(t.goods.services.length-1,(function(e){return s("div",{key:e},[s("img",{attrs:{src:t.goods.services[e].icon}}),s("span",[t._v(t._s(t.goods.services[e].name))])])})),0)]):t._e()},k=[],y={props:{goods:{type:Object,default:function(){return{}}}},created:function(){setTimeout((function(){}),500)}},w=y,O=(s("3014"),Object(f["a"])(w,C,k,!1,null,"0c4d8e92",null)),$=O.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!=Object.keys(t.shop).length?s("div",[s("div",{staticClass:"shop-title"},[s("img",{attrs:{src:t.shop.logo,alt:""}}),s("span",[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-detail"},[s("div",{staticClass:"shop-desc-1"},[s("div",[t._v(t._s(t.shop.fans))]),s("div",[t._v("总销量")])]),s("div",{staticClass:"shop-desc-2"},[s("div",[t._v(t._s(t.shop.goodsCount))]),s("div",[t._v("全部宝贝")])]),s("table",{staticClass:"shop-score"},t._l(t.shop.score,(function(e){return s("tr",{key:e.name,staticClass:"score-row"},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"style1",class:{isBetter:e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"style2",class:{isBetter:e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]):t._e()},j=[],x={props:{shop:{type:Object,default:function(){return{}}}}},B=x,T=(s("a558"),Object(f["a"])(B,E,j,!1,null,"36b50786",null)),L=T.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!=Object.keys(t.detailInfo).length?s("div",{attrs:{id:"detail_goods_info"}},[s("div",{staticClass:"goods_info_desc"},[t._m(0),s("div",{staticClass:"desc_text"},[t._v(" "+t._s(t.detailInfo.desc)+" ")]),t._m(1)]),s("div",{staticClass:"goods_info_key"},[t._v(" "+t._s(t.detailInfo.detailImage[0].key)+" ")]),s("div",{staticClass:"goods_info_imgs"},t._l(t.detailInfo.detailImage[0].list,(function(e,n){return s("img",{key:n,attrs:{src:e,alt:""},on:{load:t.loadImg}})})),0)]):t._e()},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"desc_line",staticStyle:{float:"left"}},[s("i",{staticClass:"desc_dot"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"desc_line",staticStyle:{float:"right"}},[s("i",{staticClass:"desc_dot",staticStyle:{right:"0px"}})])}],D={props:{detailInfo:{type:Object,default:function(){return{}}}},data:function(){return{counter:0,imageLength:0}},methods:{loadImg:function(){this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imageLength=this.detailInfo.detailImage[0].list.length}}},R=D,N=(s("86b9"),Object(f["a"])(R,S,P,!1,null,"6267e8c2",null)),q=N.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!=Object.keys(t.paramInfo).length?s("div",{attrs:{id:"detail_params"}},[s("table",{staticClass:"params_rule"},[s("tbody",t._l(t.paramInfo.sizes[0],(function(e,n){return"-"!=e[1]?s("tr",{key:n},[s("th",[t._v(t._s(e[0]))]),t._l(e.length-1,(function(n,a){return s("td",{key:a},[t._v(" "+t._s(e[n])+" ")])}))],2):t._e()})),0)]),s("table",{staticClass:"params_set"},[s("tbody",t._l(t.paramInfo.infos,(function(e,n){return s("tr",{key:n},[s("th",[t._v(t._s(e.key))]),s("td",[t._v(t._s(e.value))])])})),0)]),""!=t.paramInfo.image?s("div",{staticClass:"info_img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()]):t._e()},z=[],J={props:{paramInfo:{type:Object,default:function(){return{}}}}},A=J,G=(s("d915"),Object(f["a"])(A,M,z,!1,null,null,null)),F=G.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!=Object.keys(t.commentInfo).length?s("div",{attrs:{id:"detail_commentInfo"}},[t._m(0),s("div",{staticClass:"commentInfo_info"},[s("div",{staticClass:"u_info"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"commentInfo_content"},[s("div",{staticClass:"content"},[t._v(t._s(t.commentInfo.content))]),s("p",{staticClass:"content_info"},[t._v(" "+t._s(t._f("dateShow")(t.commentInfo.created))+" "+t._s(t.commentInfo.style)+" ")])])]),null!=t.commentInfo.explain?s("div",{staticClass:"shop_reply"},[t._v(" "+t._s(t.commentInfo.explain)+" ")]):t._e(),null!=t.commentInfo.images?s("div",{staticClass:"commentInfo_img"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t,alt:""}})})),0):t._e()]):t._e()},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"commentInfo_title"},[s("span",{staticClass:"commentInfo_name"},[t._v("用户评价")]),s("span",{staticClass:"commentInfo_more"},[t._v("更多")])])}],Q=s("90b9"),U={props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{dateShow:function(t){var e=new Date(1e3*t);return Object(Q["b"])(e,"yyyy-MM-dd mm:hh:ss")}}},V=U,W=(s("355f"),Object(f["a"])(V,H,K,!1,null,"9e020750",null)),X=W.exports,Y=s("45f9"),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"bottomBar"}},[t._m(0),s("div",{staticClass:"bottom_right"},[s("div",{staticClass:"cart",on:{click:t.addCart}},[t._v(" 加入购物车 ")]),s("div",{staticClass:"buy"},[t._v(" 购买 ")])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom_left"},[s("div",{staticClass:"service"},[s("i",{staticClass:"icon"}),s("span",[t._v("客服")])]),s("div",{staticClass:"shop"},[s("i",{staticClass:"icon"}),s("span",[t._v("店铺")])]),s("div",{staticClass:"collect"},[s("i",{staticClass:"icon"}),s("span",[t._v("收藏")])])])}],et={methods:{addCart:function(){this.$emit("addCart")}}},st=et,nt=(s("a02b"),Object(f["a"])(st,Z,tt,!1,null,"2c4e75fc",null)),at=nt.exports,it=s("4c3c");function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s("b0c0");var ct=s("1bab");function rt(t){return Object(ct["a"])({url:"/detail",params:{iid:t}})}function lt(){return Object(ct["a"])({url:"/recommend"})}var dt=function t(e,s,n){ot(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=n,this.realPrice=e.lowNowPrice},ft=function t(e,s){ot(this,t),this.image="undefined"!=typeof e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},ut={name:"detail",data:function(){return{counter:0,topImages:[],goods:{},shop:{},detailInfo:{},paramsInfo:{},commentInfo:{},recommend:{list:[]},ElementOffset:[0,1e3,2e3,3e3],showBackTop:!1}},components:{Scroll:i["a"],DetailSwiper:b,DetailNavbar:m,DetailBaseInfo:$,DetailShopInfo:L,DetailGoodsInfo:q,DetailParams:F,DetailCommentInfo:X,goodsList:Y["a"],DetailBottomBar:at,backTop:it["a"]},methods:{goodsInfoImgLoad:function(){this.newRefresh(),this.updateOffset()},recommendImgLoad:function(){this.newRefresh(),this.updateOffset()},navClick:function(t){this.$refs.scroll.scrollTo(0,-this.ElementOffset[t],100)},backClick:function(){this.$refs.scroll.scrollTo(0,0)},updateOffset:function(){this.ElementOffset[1]=this.$refs.params.$el.offsetTop,this.ElementOffset[2]=this.$refs.comment.$el.offsetTop,this.ElementOffset[3]=this.$refs.recommend.$el.offsetTop},contentScroll:function(t){this.updateBackTop(t),this.updateIndex(t)},newRefresh:function(){this.$refs.scroll.refresh()},updateBackTop:function(t){-t.y<1e3?this.showBackTop=!1:this.showBackTop=!0},updateIndex:function(t){-t.y>0&&-t.y<this.ElementOffset[1]&&(this.$refs.navbar.currentIndex=0),-t.y>this.ElementOffset[1]&&-t.y<this.ElementOffset[2]&&(this.$refs.navbar.currentIndex=1),-t.y>this.ElementOffset[2]&&-t.y<this.ElementOffset[3]&&(this.$refs.navbar.currentIndex=2),-t.y>this.ElementOffset[3]&&(this.$refs.navbar.currentIndex=3)},addCart:function(){var t={iid:this.$route.query.iid,image:this.topImages[0],title:this.goods.title,desc:this.goods.desc,price:parseInt(this.goods.realPrice),quantity:1,isChecked:!1};this.$store.commit("addProduct",t),console.log(this.$toast),this.$toast.showMessage("成功加入到购物车",1e3)}},created:function(){var t=this;rt(this.$route.query.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new dt(s.itemInfo,s.columns,s.shopInfo.services),t.detailInfo=s.detailInfo,t.paramsInfo=new ft(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),lt().then((function(e){t.recommend.list=e.data.list})),this.newRefresh=Object(Q["a"])(this.newRefresh,100),this.updateBackTop=Object(Q["c"])(this.updateBackTop,300)},mounted:function(){}},mt=ut,ht=(s("ba8e"),Object(f["a"])(mt,n,a,!1,null,"62855086",null));e["default"]=ht.exports},"7a74":function(t,e,s){t.exports=s.p+"img/back.d5a990cc.svg"},"86b9":function(t,e,s){"use strict";s("ae97")},9099:function(t,e,s){},"9f29":function(t,e,s){"use strict";s("a1d6")},a02b:function(t,e,s){"use strict";s("a917")},a1d6:function(t,e,s){},a558:function(t,e,s){"use strict";s("0d92")},a6f5:function(t,e,s){},a917:function(t,e,s){},ae97:function(t,e,s){},ba8e:function(t,e,s){"use strict";s("9099")},c9b9:function(t,e,s){},d33c:function(t,e,s){},d915:function(t,e,s){"use strict";s("c9b9")},ddbc:function(t,e,s){"use strict";s("d33c")},f24e:function(t,e,s){}}]);
//# sourceMappingURL=chunk-33cf162c.aa3ab689.js.map