import k from"./Index.f23f84c0.js";import{n as g,S as x,a as w,P as W}from"./index.88ccfa18.js";var P={name:"Pagination",inject:["items","data"],props:{totalPages:Number},computed:{containerWidth:function(){var t=this.totalPages-1;return{"--width":t*10+t*5+35+"px"}}},methods:{setClasses:function(t){return["option",{"-active":Math.ceil(this.data.position/-100)===t-1}]},goToPage:function(t){if(t===1)return this.data.position=0;if(this.data.totalPages===t)return this.data.position=this.data.endPosition;this.data.position=-(t-1)*100}},render:function(t){var i=this,n=Array.from({length:this.totalPages},function(o,r){return r+1}).map(function(o){return t("div",{key:o,class:i.setClasses(o),on:{click:function(){return i.goToPage(o)}}})});return t("div",{style:this.containerWidth,staticClass:"pagination"},[n])}};function h(e,t,i,n,o,r,u,c,p,y){typeof u=="function"&&(p=c,c=u,u=!1);const a=typeof i=="function"?i.options:i;e&&e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),n&&(a._scopeId=n);let l;if(r?(l=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),t&&t.call(this,p(s)),s&&s._registeredComponents&&s._registeredComponents.add(r)},a._ssrRegister=l):t&&(l=u?function(){t.call(this,y(this.$root.$options.shadowRoot))}:function(s){t.call(this,c(s))}),l)if(a.functional){const s=a.render;a.render=function($,f){return l.call(f),s($,f)}}else{const s=a.beforeCreate;a.beforeCreate=s?[].concat(s,l):[l]}return i}var z=P;P.__file="Pagination.vue";var D=void 0,S=void 0,L=void 0,B=void 0,_=h({},D,z,S,B,L,void 0,void 0),d=function(){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp2|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)},b={name:"Carousel",components:{Pagination:_},props:{pagination:{type:Boolean,default:!0},controllers:{type:Boolean,default:!1},perPage:{type:[String,Number],default:1},isDraggable:{type:Boolean,default:!0},isLoopable:Boolean,loopDelay:{type:[String,Number],default:1e3},breakpoints:{type:Object,default:function(){return{}}},friction:{type:Number,default:.97},centerAfterDragging:Boolean},data:function(){return{initPosition:0,position:0,currentWidth:0,isDragging:!1,events:{}}},provide:function(){var t=this,i={},n=function(o,r){return Object.defineProperty(i,o,{get:r,enumerable:!0})};return n("data",function(){return t}),n("items",function(){return t.itemQtd}),i},mounted:function(){this.events={start:d()?"touchstart":"mousedown",move:d()?"touchmove":"mousemove",end:d()?"touchend":"mouseup"},this.isLoopable&&this.initLoop(),this.hasBreakpoints&&this.setCurrentWidth({target:{innerWidth:document.body.clientWidth}}),window.addEventListener("resize",this.setCurrentWidth)},computed:{itemSize:function(){return 100/this.internalPerPage},itemQtd:function(){return this.$slots.default.filter(function(t){var i=t.componentOptions;return i&&i.tag==="coerousel-item"}).length},totalPages:function(){return Math.ceil(this.itemQtd/this.internalPerPage)||0},endPosition:function(){var t=this.$slots.default.filter(function(i){var n=i.componentOptions;return n&&n.tag==="coerousel-item"}).length+1;return-(this.itemSize*t)+(100+this.itemSize)},hasBreakpoints:function(){return!!Object.keys(this.breakpoints).length},internalPerPage:function(){var t=this.breakpoints,i=this.currentWidth;return this.hasBreakpoints&&t[i]?t[i].perPage:this.perPage},currentPage:function(){var t=~~this.position*-1;return Math.ceil(t/100)+1},containerWidth:function(){return this.$refs.inner?~~(this.$refs.inner.clientWidth/100):0},carouselClasses:function(){var t=this.itemQtd>this.internalPerPage;return["vue-coerousel",{"--has-controllers":this.controllers,"--has-previous":t&&this.position<0,"--has-next":t&&this.position>this.endPosition}]},style:function(){return{transform:"translateX("+this.position+"%)",cursor:this.isDragging?"pointer":"initial"}}},methods:{fixPosition:function(){var t=this.position/this.itemSize,i=!String(t).split("").includes(".");!i&&this.position>=this.endPosition&&(this.position=Math.round(this.position/this.itemSize)*100/this.internalPerPage)},startLoop:function(){return~~this.position<=0&&this.position>this.endPosition?this.position-=this.itemSize:this.position=0},initLoop:function(){window.setInterval(this.startLoop,this.loopDelay)},setCurrentWidth:function(t){var i=t.target.innerWidth;i>=1024&&(this.currentWidth=1024),i<=1024&&i>=769&&(this.currentWidth=768),i<=768&&i>=641&&(this.currentWidth=640),i<=640&&i>=320&&(this.currentWidth=320)},getX:function(t){return t.changedTouches&&t.changedTouches[0]&&t.changedTouches[0].clientX||t.clientX},next:function(){if(this.position<this.endPosition+100)return this.position=this.endPosition;this.position-=100},previous:function(){if(this.position>-100)return this.position=0;this.position+=100},mousemove:function(t){this.isDragging=!0;var i=this.getX(t),n=~~(i/this.containerWidth-this.initPosition);this.position=n,this.position>0&&(this.position=0),this.position<this.endPosition&&(this.position=this.endPosition)},mousedown:function(t){if(!this.isDraggable)return!1;this.isDragging=!0;var i=this.getX(t);this.initPosition=~~(i/this.containerWidth)-this.position,window.addEventListener(this.events.move,this.mousemove),window.addEventListener(this.events.end,this.mouseup)},mouseup:function(t){if(!this.isDraggable)return!1;this.centerAfterDragging&&this.fixPosition(),this.isDragging=!1,window.removeEventListener(this.events.move,this.mousemove)}},render:function(t){var i,n=t("div",{staticClass:"inner",ref:"inner",style:this.style,on:(i={},i[this.events.start]=this.mousedown,i)},this.$slots.default),o=t("div",{staticClass:"controller next",on:{click:this.next}},this.$slots.next),r=t("div",{staticClass:"controller previous",on:{click:this.previous}},this.$slots.previous),u=t("div",{staticClass:"wrapper",ref:"wrapper"},[n]),c=this.pagination&&t(_,{props:{totalPages:this.totalPages}});return t("div",{class:this.carouselClasses},[this.controllers?r:!1,u,this.controllers?o:!1,c])},beforeDestroy:function(){window.removeEventListener("resize",this.setCurrentWidth)}},E=b;b.__file="Carousel.vue";var O=void 0,X=void 0,R=void 0,T=void 0,N=h({},O,E,X,T,R,void 0,void 0),C={name:"Item",inject:["data"],computed:{flex:function(){return{flex:"1 0 "+100/this.data.internalPerPage+"%"}},isDraggable:function(){return this.data.isDraggable&&!this.data.isLoopable}},render:function(t){return t("div",{style:this.flex,staticClass:"carousel-item"},this.$slots.default)}},A=C;C.__file="CarouselItem.vue";var j=void 0,I=void 0,Q=void 0,F=void 0,M=h({},j,A,I,F,Q,void 0,void 0),q=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("coerousel",t._b({staticClass:"s-carousel"},"coerousel",t.$attrs,!1),[n("s-icon",{staticClass:"previous",attrs:{slot:"previous",icon:"sdz-chevron-left",size:"15"},slot:"previous"}),t._l(t.items,function(o,r){return n("coerousel-item",{key:r},[t._t("default",null,{item:o})],2)}),n("s-icon",{staticClass:"next",attrs:{slot:"next",icon:"sdz-chevron-right",size:"15"},slot:"next"})],2)},U=[];const V={name:"SCarousel",components:{SIcon:k,coerousel:N,"coerousel-item":M},props:{items:{type:Array,required:!0}}},v={};var G=g(V,q,U,!1,H,null,null,null);function H(e){for(let t in v)this[t]=v[t]}const J=function(){return G.exports}();var K=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"s-carousel-example"},[n("s-title",{attrs:{size:"title-1"}},[t._v("Carousel")]),n("s-box",[n("s-carousel",{attrs:{controllers:"",items:t.items,"per-page":2,"is-loopable":!1,breakpoints:t.breakpoints},scopedSlots:t._u([{key:"default",fn:function(r){var u=r.item;return n("div",{staticClass:"ball",style:{backgroundColor:u.color}})}}])})],1),n("pre-code",{attrs:{code:t.code}})],1)},Y=[];const Z={name:"SCarouselExample",components:{SCarousel:J,SBox:x,STitle:w,PreCode:W},data(){return{code:`<s-carousel
        controllers
        :items="items"
        :per-page="2"
        :is-loopable="false"
        :breakpoints="breakpoints"
      >
        <div slot-scope="{ item }" class="ball" :style="{ backgroundColor: item.color }">
          <!-- {{ item }} -->
        </div>
      </s-carousel>`,items:[{color:"blue"},{color:"yellow"},{color:"red"},{color:"black"},{color:"pink"},{color:"turquoise"},{color:"magenta"},{color:"white"},{color:"orange"},{color:"green"},{color:"purple"},{color:"cyan"},{color:"lime"},{color:"lightblue"}],breakpoints:{1024:{perPage:4},768:{perPage:3},640:{perPage:2},320:{perPage:1}}}}},m={};var tt=g(Z,K,Y,!1,et,null,null,null);function et(e){for(let t in m)this[t]=m[t]}const ot=function(){return tt.exports}();export{ot as default};
