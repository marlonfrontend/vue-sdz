import{n as r}from"./index.b6025da3.js";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"shadowed",class:e.classes},[e._t("default")],2)},h=[];const n={name:"Shadowed",props:{target:String,hasUpperShadow:{type:Boolean,default:!0},hasBottomShadow:{type:Boolean,default:!0}},data(){return{observer:null,upperShadow:!1,bottomShadow:!1}},mounted(){this.setShadow(),this.initObservers()},computed:{classes(){return["shadowed",{"-upper-shadow":this.hasUpperShadow&&this.upperShadow,"-bottom-shadow":this.hasBottomShadow&&this.bottomShadow}]},element(){var e;return this.target?document.querySelector(this.target):(e=this.$slots.default[0])==null?void 0:e.elm}},methods:{setShadow(){if(!this.element)return;const{scrollTop:e,scrollHeight:t,clientHeight:s}=this.element;this.hasUpperShadow&&(this.upperShadow=!!e),this.hasBottomShadow&&(this.bottomShadow=t>s+e)},initObservers(){this.observer=new MutationObserver(this.setShadow),this.observer.observe(this.element,{childList:!0}),this.element.addEventListener("scroll",this.setShadow)}},beforeDestroy(){this.observer.disconnect(),this.element.removeEventListener("scroll",this.setShadow)}},o={};var i=r(n,a,h,!1,d,"c3d6d344",null,null);function d(e){for(let t in o)this[t]=o[t]}var u=function(){return i.exports}();export{u as default};
