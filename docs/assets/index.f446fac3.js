import{V as e,a as t,R as n,v as i}from"./vendor.5affd582.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),e.use(t);const r=new t.Store({});function s(e,t,n,i,r,s,a,d){var o,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=o):r&&(o=d?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(c.functional){c._injectStyles=o;var l=c.render;c.render=function(e,t){return o.call(t),l(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,o):[o]}return{exports:e,options:c}}const a={};var d=s({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("Home")])}),[],!1,o,null,null,null);function o(e){for(let t in a)this[t]=a[t]}var c=function(){return d.exports}();const l={};var u=s({name:"Components"},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("router-view")],1)}),[],!1,_,null,null,null);function _(e){for(let t in l)this[t]=l[t]}var m=function(){return u.exports}();const p={},v=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`https://seedz-ag.github.io/vue-sdz/${e}`)in p)return;p[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};const h=e=>()=>function(e){switch(e){case"./SButton/Index.vue":return v((()=>import("./Index.83b0f7a1.js")),["assets/Index.83b0f7a1.js","assets/Index.55f56540.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/vendor.5affd582.js"]);case"./SCard/Index.vue":return v((()=>import("./Index.b767ed4d.js")),["assets/Index.b767ed4d.js","assets/Index.4e35f282.css","assets/Index.b7866dab.js","assets/Index.84c75e40.css","assets/vendor.5affd582.js"]);case"./SCollapsible/Index.vue":return v((()=>import("./Index.74789719.js")),["assets/Index.74789719.js","assets/Index.946a1f67.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/vendor.5affd582.js"]);case"./SFeedbacks/Index.vue":return v((()=>import("./Index.d6a519f3.js")),["assets/Index.d6a519f3.js","assets/Index.ae331878.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/Index.b7866dab.js","assets/Index.84c75e40.css","assets/vendor.5affd582.js"]);case"./SIcon/Index.vue":return v((()=>import("./Index.1581da3c.js")),["assets/Index.1581da3c.js","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/vendor.5affd582.js"]);case"./SInput/Index.vue":return v((()=>import("./Index.0d74de8d.js")),["assets/Index.0d74de8d.js","assets/Index.5a6a333c.css","assets/vendor.5affd582.js","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css"]);case"./SModal/Index.vue":return v((()=>import("./Index.7e45cde7.js")),["assets/Index.7e45cde7.js","assets/Index.e74df871.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/Index.9f14cebf.js","assets/Index.6eda2915.css","assets/vendor.5affd582.js"]);case"./SOverlay/Index.vue":return v((()=>import("./Index.c02c6c80.js")),["assets/Index.c02c6c80.js","assets/Index.aab72517.css","assets/Index.9f14cebf.js","assets/Index.6eda2915.css","assets/vendor.5affd582.js"]);case"./SShadowed/Index.vue":return v((()=>import("./Index.3f878ba1.js")),["assets/Index.3f878ba1.js","assets/Index.1b466918.css","assets/Index.85764b3d.js","assets/Index.3d0b963f.css","assets/vendor.5affd582.js"]);case"./SSidebar/Index.vue":return v((()=>import("./Index.61abcd63.js")),["assets/Index.61abcd63.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]);case"./STable/Index.vue":return v((()=>import("./Index.8614b5c4.js")),["assets/Index.8614b5c4.js","assets/Index.83625d21.css","assets/Index.85764b3d.js","assets/Index.3d0b963f.css","assets/vendor.5affd582.js"]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./${e}/Index.vue`),I={"./SButton/Index.vue":()=>v((()=>import("./Index.83b0f7a1.js")),["assets/Index.83b0f7a1.js","assets/Index.55f56540.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/vendor.5affd582.js"]),"./SCard/Index.vue":()=>v((()=>import("./Index.b767ed4d.js")),["assets/Index.b767ed4d.js","assets/Index.4e35f282.css","assets/Index.b7866dab.js","assets/Index.84c75e40.css","assets/vendor.5affd582.js"]),"./SCollapsible/Index.vue":()=>v((()=>import("./Index.74789719.js")),["assets/Index.74789719.js","assets/Index.946a1f67.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/vendor.5affd582.js"]),"./SFeedbacks/Index.vue":()=>v((()=>import("./Index.d6a519f3.js")),["assets/Index.d6a519f3.js","assets/Index.ae331878.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/Index.b7866dab.js","assets/Index.84c75e40.css","assets/vendor.5affd582.js"]),"./SIcon/Index.vue":()=>v((()=>import("./Index.1581da3c.js")),["assets/Index.1581da3c.js","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/vendor.5affd582.js"]),"./SInput/Index.vue":()=>v((()=>import("./Index.0d74de8d.js")),["assets/Index.0d74de8d.js","assets/Index.5a6a333c.css","assets/vendor.5affd582.js","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css"]),"./SModal/Index.vue":()=>v((()=>import("./Index.7e45cde7.js")),["assets/Index.7e45cde7.js","assets/Index.e74df871.css","assets/Index.80a46512.js","assets/Index.d3ab40eb.css","assets/Index.ae6e9458.js","assets/Index.2f50eb59.css","assets/Index.9f14cebf.js","assets/Index.6eda2915.css","assets/vendor.5affd582.js"]),"./SOverlay/Index.vue":()=>v((()=>import("./Index.c02c6c80.js")),["assets/Index.c02c6c80.js","assets/Index.aab72517.css","assets/Index.9f14cebf.js","assets/Index.6eda2915.css","assets/vendor.5affd582.js"]),"./SShadowed/Index.vue":()=>v((()=>import("./Index.3f878ba1.js")),["assets/Index.3f878ba1.js","assets/Index.1b466918.css","assets/Index.85764b3d.js","assets/Index.3d0b963f.css","assets/vendor.5affd582.js"]),"./SSidebar/Index.vue":()=>v((()=>import("./Index.61abcd63.js")),["assets/Index.61abcd63.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]),"./STable/Index.vue":()=>v((()=>import("./Index.8614b5c4.js")),["assets/Index.8614b5c4.js","assets/Index.83625d21.css","assets/Index.85764b3d.js","assets/Index.3d0b963f.css","assets/vendor.5affd582.js"])};var f=Object.keys(I).map((e=>e.replace(/^\.\//,"").replace(/\.\w+$/,"").split("/")[0])).map((e=>({component:h(e),name:`component-${e}`,path:"/vue-sdz/components/"+e.toLowerCase().slice(1)})));const x={};var E=s({name:"Components"},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("router-view")],1)}),[],!1,b,null,null,null);function b(e){for(let t in x)this[t]=x[t]}const S=e=>()=>function(e){switch(e){case"./SButton/Index.vue":return v((()=>import("./Index.7ddc3563.js")),["assets/Index.7ddc3563.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]);case"./SCard/Index.vue":return v((()=>import("./Index.d9e39af1.js")),["assets/Index.d9e39af1.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]);case"./SModal/Index.vue":return v((()=>import("./Index.7ec1af11.js")),["assets/Index.7ec1af11.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]);case"./SOverlay/Index.vue":return v((()=>import("./Index.571887ac.js")),["assets/Index.571887ac.js","assets/Index.aab72517.css","assets/Index.9f14cebf.js","assets/Index.6eda2915.css","assets/vendor.5affd582.js"]);case"./SSidebar/Index.vue":return v((()=>import("./Index.86ca7318.js")),["assets/Index.86ca7318.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./${e}/Index.vue`),C={"./SButton/Index.vue":()=>v((()=>import("./Index.7ddc3563.js")),["assets/Index.7ddc3563.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]),"./SCard/Index.vue":()=>v((()=>import("./Index.d9e39af1.js")),["assets/Index.d9e39af1.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]),"./SModal/Index.vue":()=>v((()=>import("./Index.7ec1af11.js")),["assets/Index.7ec1af11.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"]),"./SOverlay/Index.vue":()=>v((()=>import("./Index.571887ac.js")),["assets/Index.571887ac.js","assets/Index.aab72517.css","assets/Index.9f14cebf.js","assets/Index.6eda2915.css","assets/vendor.5affd582.js"]),"./SSidebar/Index.vue":()=>v((()=>import("./Index.86ca7318.js")),["assets/Index.86ca7318.js","assets/Index.aab72517.css","assets/vendor.5affd582.js"])};const A=[{path:"/vue-sdz/getting-started",name:"getting-started",component:c},{path:"/components",name:"components",component:m,children:f},{path:"/api",name:"api",component:function(){return E.exports}(),children:Object.keys(C).map((e=>e.replace(/^\.\//,"").replace(/\.\w+$/,"").split("/")[0])).map((e=>({component:S(e),name:`api-${e}`,path:e.toLowerCase().slice(1)})))}];e.use(n);const O=new n({mode:"history",routes:A});const L={};var T=s({name:"SSidebarItem",props:{item:{type:Object,required:!0},activeChildren:{type:Array,required:!0},index:Number,activeItem:Number,activeChild:Number},computed:{itemsSize(){var e,t;return 40*(null==(e=this.activeChildren)?void 0:e.length)+10*((null==(t=this.activeChildren)?void 0:t.length)+1)+"px"}},methods:{defaultClasses:e=>["item",{"--is-disabled":e.disabled}],itemClasses(e,t){return[...this.defaultClasses(e),{"--is-active-item":this.activeItem===t}]},childClasses(e,t){return[...this.defaultClasses(e),{"--is-active-child":this.activeChild===t}]},onActiveItem(e,t){if(!e.disabled){if(e.child&&this.activeItem===t)return this.$emit("active-item",null);this.$emit("active-item",t),this.$emit("active-child",null),this.$emit("redirect",e.redirect)}},onActiveChild(e,t){e.disabled||(this.$emit("active-child",t),this.$emit("redirect",e.redirect))},getListHeight(e){var t;return(null==(t=this.activeChildren)?void 0:t.length)&&this.activeItem===e?this.itemsSize:0}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"s-sidebar-item"},[n("li",{class:e.itemClasses(e.item,e.index)},[n("div",{staticClass:"content",on:{click:function(t){return e.onActiveItem(e.item,e.index)}}},[e.item.icon?n("span",{staticClass:"icon"},[e._v(e._s(e.item.icon))]):e._e(),n("span",{staticClass:"name"},[e._v(e._s(e.item.name))]),e.item.child?n("span",{staticClass:"action"},[e._v("-")]):e._e()]),n("ul",{staticClass:"s-sidebar-item",style:{height:e.getListHeight(e.index)}},e._l(e.item.child,(function(t,i){return n("li",{key:i,class:e.childClasses(t,i)},[n("div",{staticClass:"content",on:{click:function(n){return e.onActiveChild(t,i)}}},[n("span",{staticClass:"name"},[e._v(e._s(t.name))])])])})),0)])])}),[],!1,R,null,null,null);function R(e){for(let t in L)this[t]=L[t]}const y={};var j=s({name:"SSidebar",components:{SSidebarItem:function(){return T.exports}()},props:{items:{type:Array,required:!0}},data:()=>({activeItem:null,activeChild:null}),mounted(){setTimeout((()=>{const e=this.$route.path;this.setActiveItem(e),this.setActiveChild(e)}),100)},computed:{activeChildren(){const e=this.items.find((({child:e},t)=>t===this.activeItem&&e));return e?e.child:[]}},methods:{setActiveItem(e){e&&(this.activeItem=this.items.findIndex((t=>t.redirect===e||t.child&&t.child.find((t=>t.redirect===e)))))},setActiveChild(e){var t,n;e&&(this.activeChild=null==(n=null==(t=this.items.find(((e,t)=>t===this.activeItem)))?void 0:t.child)?void 0:n.findIndex((t=>t.redirect===e)))}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"s-sidebar"},[e._t("header"),e._l(e.items,(function(t,i){return n("s-sidebar-item",e._g(e._b({key:i,attrs:{item:t,index:i,"active-item":e.activeItem,"active-child":e.activeChild,"active-children":e.activeChildren},on:{"active-item":function(t){return e.activeItem=t},"active-child":function(t){return e.activeChild=t}}},"s-sidebar-item",e.$attrs,!1),e.$listeners))})),e._t("footer")],2)}),[],!1,P,null,null,null);function P(e){for(let t in y)this[t]=y[t]}var V=function(){return j.exports}();const $={};var D=s({name:"Examples",components:{SSidebar:V},data:()=>({items:[{name:"Getting Started",icon:"aaa",redirect:"/vue-sdz/getting-started"},{name:"components",icon:"xxx",child:[{name:"button",redirect:"/vue-sdz/components/button"},{name:"card",redirect:"/vue-sdz/components/card"},{name:"table",redirect:"/vue-sdz/components/table"},{name:"shadowed",redirect:"/vue-sdz/components/shadowed"},{name:"icon",redirect:"/vue-sdz/components/icon"},{name:"modal",redirect:"/vue-sdz/components/modal"},{name:"feedbacks",redirect:"/vue-sdz/components/feedbacks"},{name:"collapsible",redirect:"/vue-sdz/components/collapsible"},{name:"input",redirect:"/vue-sdz/components/input"}]},{name:"api",icon:"yyy",child:[{name:"button",redirect:"/vue-sdz/api/button"},{name:"card",redirect:"/vue-sdz/api/card"},{name:"table",redirect:"/vue-sdz/api/table"},{name:"shadowed",redirect:"/vue-sdz/api/shadowed"},{name:"icon",redirect:"/vue-sdz/api/icon"},{name:"modal",redirect:"/vue-sdz/api/modal"},{name:"feedbacks",redirect:"/vue-sdz/api/feedbacks"},{name:"collapsible",redirect:"/vue-sdz/api/collapsible"},{name:"input",redirect:"/vue-sdz/api/input"}]}]}),methods:{onRedirect(e){e&&e!==this.$route.path&&this.$router.push(e)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("s-sidebar",{attrs:{items:e.items},on:{redirect:e.onRedirect}}),n("router-view")],1)}),[],!1,g,null,null,null);function g(e){for(let t in $)this[t]=$[t]}var w=function(){return D.exports}();e.config.productionTip=!1,e.use(i.exports.VueCoeFeedback,r,{delay:3e3}),new e({store:r,router:O,render:e=>e(w)}).$mount("#app");export{V as S,s as n};
