import u from"./Index.d35ce498.js";import{n as _,v as d,g as v}from"./index.c517d76c.js";var p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("coe-feedback",e._g({attrs:{feedbacks:e.feedbacks},scopedSlots:e._u([{key:"feedbacks",fn:function(o){var a=o.feedbacks,c=o.success,l=o.error;return e._l(a,function(r,i){return s("s-card",{key:i,class:e.getClasses(r.type)},[s("div",{staticClass:"message-container"},[s("span",{staticClass:"message"},[e._v(e._s(r.message)+" ")]),s("span",{staticClass:"highlighted",style:{color:e.getColor(r.type,c,l)}},[e._v(" "+e._s(r.highlighted)+" ")])]),e.dismissible?s("s-button",{staticClass:"button",attrs:{grey:"",icon:"sdz-close"},on:{click:function(C){return e.$emit("close",r)}}}):e._e()],1)})}}])},e.$listeners))},m=[];const f={name:"SFeedbacks",components:{CoeFeedback:d.exports.CoeFeedback,SCard:u,SButton:v},props:{feedbacks:{type:Array,default:()=>[]},dismissible:{type:Boolean,default:!0}},methods:{getClasses(e){return["feedback",{"--is-negative":e==="error","--is-positive":e==="success"}]},getColor(e,t,s){return{success:t,error:s}[e]}}},n={};var g=_(f,p,m,!1,b,null,null,null);function b(e){for(let t in n)this[t]=n[t]}var h=function(){return g.exports}();export{h as default};
