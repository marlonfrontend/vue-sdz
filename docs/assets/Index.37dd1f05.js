import t from"./Index.c2e70daf.js";import{n as s}from"./index.97cf1478.js";const a={name:"SInputContainer",components:{SIcon:t},props:{label:String,leftIcon:String,rightIcon:String,validation:String,required:Boolean},computed:{classes(){return["s-input-container",{"--label":this.label,"--validation":this.validation}]}}},n={};var i=s(a,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:t.classes},[t.label?a("label",{staticClass:"label"},[t.required?a("span",{staticClass:"required"},[t._v("*")]):t._e(),t.leftIcon?a("s-icon",{staticClass:"left-icon",attrs:{icon:t.leftIcon}}):a("span",{staticClass:"text"},[t._v(t._s(t.label))])],1):t._e(),t._t("default"),t.rightIcon?a("s-icon",t._b({staticClass:"right-icon"},"s-icon",t.$attrs,!1)):t._e(),a("transition",{attrs:{name:"fade"}},[t.validation?a("div",{staticClass:"validation"},[a("p",{staticClass:"message"},[a("span",{staticClass:"text",domProps:{innerHTML:t._s(t.validation)}})])]):t._e()])],2)}),[],!1,e,null,null,null);function e(t){for(let s in n)this[s]=n[s]}var l=function(){return i.exports}();export{l as S};
