import{n as e}from"./index.09a55be9.js";import"./vendor.5affd582.js";const a={name:"SCheckbox",props:{value:{type:Boolean,required:!0},label:String,negative:Boolean,disabled:Boolean},computed:{classes(){return["s-checkbox",{"--is-checked":this.value,"--is-negative":this.negative,"--is-disabled":this.disabled}]}}},t={};var s=e(a,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{class:e.classes},[t("input",{staticClass:"input",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.value},on:{input:function(a){return e.$emit("input",a.target.checked)}}}),e._m(0),t("span",{staticClass:"text"},[e._v(e._s(e.label))])])}),[function(){var e=this.$createElement,a=this._self._c||e;return a("span",{staticClass:"check"},[a("i",{staticClass:"icon sdz-check"})])}],!1,l,null,null,null);function l(e){for(let a in t)this[a]=t[a]}const n={};var c=e({components:{SCheckbox:function(){return s.exports}()},data:()=>({data0:!1,data1:!0,data2:!0,data3:!0})},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"s-checkbox-example"},[t("s-checkbox",{model:{value:e.data0,callback:function(a){e.data0=a},expression:"data0"}}),t("s-checkbox",{attrs:{label:"positive"},model:{value:e.data1,callback:function(a){e.data1=a},expression:"data1"}}),t("s-checkbox",{attrs:{label:"negative",negative:""},model:{value:e.data2,callback:function(a){e.data2=a},expression:"data2"}}),t("s-checkbox",{attrs:{label:"disabled",disabled:""},model:{value:e.data3,callback:function(a){e.data3=a},expression:"data3"}})],1)}),[],!1,i,null,null,null);function i(e){for(let a in n)this[a]=n[a]}var o=function(){return c.exports}();export{o as default};
