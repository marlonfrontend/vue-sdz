import{n,g as r,S as a,a as i,P as d}from"./index.b6025da3.js";import l from"./Index.86be8910.js";import"./Index.aba078f8.js";var u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"s-feedbacks-example"},[s("s-title",{attrs:{size:"title-1"}},[e._v("Feedbacks")]),s("s-box",[s("s-feedbacks",{attrs:{dismissible:e.dismissible,feedbacks:e.$feedback.list},on:{close:function(o){return e.$feedback.remove(o)}}}),s("s-button",{attrs:{outlined:"","full-width":""},on:{click:function(o){e.dismissible=!e.dismissible}}},[e._v("toggle dismissible")]),s("div",{staticClass:"buttons-actions flex-inline"},[s("s-button",{on:{click:e.onInfo}},[e._v("show feedback")]),s("s-button",{attrs:{error:""},on:{click:e.onError}},[e._v("show feedback error")]),s("s-button",{attrs:{success:""},on:{click:e.onSucces}},[e._v("show feedback success")])],1)],1),s("pre-code",{attrs:{code:e.code}})],1)},b=[];const f={components:{SButton:r,SFeedbacks:l,SBox:a,STitle:i,PreCode:d},data(){return{code:`<s-button @click="onInfo">show feedback</s-button>
      <s-button error @click="onError">show feedback error</s-button>
      <s-button success @click="onSucces">show feedback success</s-button>`,dismissible:!0}},methods:{onInfo(){this.$feedback.add({type:"info",message:"teste"})},onSucces(){this.$feedback.add({type:"success",message:"A sua compra foi",highlighted:"aprovada!"})},onError(){this.$feedback.add({type:"error",message:"A sua compra foi",highlighted:"recusada!"})}}},c={};var _=n(f,u,b,!1,m,null,null,null);function m(e){for(let t in c)this[t]=c[t]}var p=function(){return _.exports}();export{p as default};
