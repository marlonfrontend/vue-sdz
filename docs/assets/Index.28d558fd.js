import{n as C,c as b,d as O}from"./index.c517d76c.js";import{c as v}from"./clickOutside.84c04b54.js";const w={data(){return{pointer:-1}},methods:{pointerReset(){this.pointer=-1},pointerSet(e){this.pointer=e},pointerForward(){this.pointer<this.options.length-1&&this.pointer++},pointerBackward(){this.pointer>0&&this.pointer--},addPointerElement({key:e}="Enter"){var r;if(((r=this.options)==null?void 0:r.length)&&e==="Enter"){const s=this.pointer,t=this.options.find((n,i)=>i===s);this.selected={option:t,index:s},this.$nextTick(()=>this.outside())}}}},E={data(){return{searchQuery:""}},methods:{onSearch({target:{value:e}}){this.isOpened=!0,this.focused=!1,this.searchQuery=e}}};function p(e){return Array.isArray(e)?!!e.length:typeof e=="object"?!!Object.keys(e).length:typeof e=="string"?!!e.length:!!e}function m(e,r){if(!p(e)||!p(r))return!1;const s=n=>typeof n=="object",t=(n,i,u)=>n.hasOwnProperty(u)===i.hasOwnProperty(u);return Object.keys(e).every(n=>t(e,r,n)?s(e[n])?m(e[n],r[n]):e[n]===r[n]:!1)}function a(e){return e?e.normalize("NFKD").replace(/[\u0080-\uF8FF]/g,"").toLowerCase():""}function _(e){return e?e.toString().toLowerCase():""}function B(e){return _(e).split(" ").filter(r=>!!r)}function P(e,r){return r.filter(s=>e.some(t=>Object.keys(t).includes(s)))}function I(e,r){var t;const s=a(r);return(t=e.map(n=>a(n)).filter(n=>s.includes(a(n))))==null?void 0:t.length}function x(e,r,s){return e.map(t=>_(r[t])).reduce((t,n,i)=>(t[i]=I(s,n),t),[])}function T(e,r,s,t){return e.get(r)||e.set(r,x(s,r,t)).get(r)}function D(e=[],r="",s=[],t=!0){if(!r)return e;const n=B(r),i=P(e,s),u=new WeakMap,c=e.map(o=>{const l=T(u,o,i,n);return{...o,matchesArray:l,matches:l.reduce((k,S)=>k+S,0)}});if(t){const o=Math.max(...c.map(l=>l.matches));return c.filter(({matches:l})=>o===l)}return c}function R(e){return e.trim().split(" ")}function L(e,r){var s;return e?((s=r.toLowerCase().split(e.toLowerCase()))==null?void 0:s.length)-1:0}function A(e=[],r="",s=""){const t=R(r);return e.filter(n=>t.every(i=>L(i,n[s]||"")))}const d=(e,r)=>Object.prototype.toString.call(e)===`[object ${r}]`,F=".",H=e=>d(e,"String")?e.split(F):[],Q=(e,r)=>(d(e,"Object")||d(e,"Module"))&&e.hasOwnProperty(r)||Array.isArray(e)&&e[r]!=null?e[r]:null,M=(e,r)=>H(r).reduce(Q,e),q=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909"],z=/[.-]/g,K=/[^\d]/g;function h(e){const r=e.split("").map(i=>parseInt(i,10)),s=r.length+1,n=r.map((i,u)=>i*(s-u)).reduce((i,u)=>i+u)%11;return n<2?0:11-n}function N(e,r){const s=r?z:K;return(e||"").replace(s,"")}function V(e,r){const s=N(e,r);if(!s||s.length!==11||q.includes(s))return!1;let t=s.substr(0,9);return t+=h(t),t+=h(t),t.substr(-2)===s.substr(-2)}function f(e){let r=2;const t=[...e].reverse().reduce((n,i)=>(n+=Number(i)*r,r=r===9?2:r+1,n),0)%11;return t<2?0:11-t}function U(e){const r=/[\\.\\/\\-]/g,s=e.toString().replace(r,"");if(!s||s.length!==14||/^(\d)\1+$/.test(s))return!1;let t=s.substr(0,12);return t+=f(t),t+=f(t),t.substr(-2)===s.substr(-2)}function W(e){if(e===""||e===null)return!1;const r=e.trim().split(" ");return r.length===1||e.length<9?!1:r.length>1?r[0].length>=3&&r[r.length-1].length>=3:!0}function G(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function X(e){if(e=e.replace(/\D/g,""),e.length!==11)return!1;let r=parseInt(e.substring(0,2)),s=parseInt(e.substring(2,3)),t=e.substring(3);return!(s!==9||[11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,64,63,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99].indexOf(r)===-1||t==="99999999"||t==="88888888"||t==="77777777"||t==="66666666"||t==="55555555"||t==="44444444"||t==="33333333"||t==="22222222"||t==="11111111"||t==="00000000")}var Y=(e,r)=>e?r.split(e).length-1:0,j=(e,r)=>[...e.reduce((t,n)=>(t.has(n[r])||t.set(n[r],n),t),new Map).values()],g={equals:m,findByExclusive:D,findByInclusive:A,get:M,isCpf:V,isCnpj:U,isName:W,isEmail:G,isPhone:X,isValid:p,matches:Y,normalize:a,removeDuplicates:j},J=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("s-input-container",e._b({class:e.containerClasses},"s-input-container",e.$attrs,!1),[s("div",{staticClass:"select"},[s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"field",attrs:{tabindex:e.tabindex},on:{"!click":function(t){return e.openingHandler.apply(null,arguments)}}},[s("div",{staticClass:"selections"},[e._l(e.values,function(t,n){return s("span",{key:n,staticClass:"selected",on:{click:function(i){return i.stopPropagation(),e.removeSelected(n)}}},[e._v(" "+e._s(e.values[n])+" ")])}),s("input",{ref:"searchable",class:["input",{"--placeholder":!e.value&&!e.searchQuery&&e.placeholder}],attrs:{placeholder:e.placeholder},domProps:{value:e.searchQuery||e.value[e.displayBy]},on:{input:e.onSearch,"&keyup":function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.escHandler.apply(null,arguments)},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")||(t.stopPropagation(),t.target!==t.currentTarget)?null:e.escHandler.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])||t.target!==t.currentTarget?null:(t.preventDefault(),e.pointerBackward.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])||t.target!==t.currentTarget?null:(t.preventDefault(),e.pointerForward.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")&&e._k(t.keyCode,"tab",9,t.key,"Tab")||(t.stopPropagation(),t.target!==t.currentTarget)?null:e.addPointerElement.apply(null,arguments)}]}})],2),s("i",{staticClass:"icon sdz-chevron-down"})]),s("div",{staticClass:"items"},[e._t("options",function(){return[s("s-collapsible",{attrs:{"no-header":"",height:e.contentHeight,"is-opened":!!(e.isOpened&&e.options.length)},on:{target:function(t){return e.contentHeight=t.childElementCount*50}}},e._l(e.options,function(t,n){return s("div",{key:n,class:e.itemClasses(t,n),attrs:{"aria-hidden":"true"},on:{click:function(i){i.stopPropagation(),e.selected={option:t,index:n}},mouseenter:function(i){return i.target!==i.currentTarget?null:e.pointerSet(n)}}},[e._t("option",function(){return[s("div",{staticClass:"option-container"},[s("span",{staticClass:"text"},[e._v(e._s(t[e.displayBy]))]),s("span",{staticClass:"disclaimer"},[e._v(" "+e._s(e.isSelected(t,n)?e.optionUnselectPlaceholder:e.optionSelectPlaceholder)+" ")])])]},{option:t})],2)}),0)]},{options:e.options})],2)])])},Z=[];const $={components:{SCollapsible:b,SInputContainer:O},directives:v,mixins:[w,E],props:{value:[Object,Array],items:{type:Array,required:!0},tabindex:{type:Number,default:0},trackBy:{type:String,required:!0},displayBy:{type:String,required:!0},multiple:Boolean,disabled:Boolean,placeholder:String,hideSelected:Boolean,optionSelectPlaceholder:String,optionUnselectPlaceholder:String},data(){return{isOpened:!1,contentHeight:null}},computed:{error(){return this.trackBy?this.multiple&&!Array.isArray(this.value)?"Value must be a array":this.items.some(e=>typeof e=="object")?"":"You need to set displayBy.":"You need to set trackBy."},containerClasses(){var e;return["s-select",{"--is-opened":this.isOpened,"--is-disabled":this.disabled,"--is-empty-search":this.searchQuery&&!((e=this.options)!=null&&e.length)}]},values(){var e;return!this.multiple||!((e=this.value)!=null&&e.length)?[]:this.value.map(r=>r[this.displayBy])},options(){return this.error?[]:this.searchQuery?this.items.filter(e=>{const r=e[this.displayBy];return typeof r=="string"?g.matches(this.searchQuery.toLowerCase(),r.toLowerCase()):g.matches(this.searchQuery.toString().toLowerCase(),r.toString().toLowerCase())}):this.items},selected:{get(){if(this.disabled)return[];if(this.multiple)return this.values;const e=this.items.find(r=>r===this.value[this.displayBy]);return e?e[this.displayBy]?this.value:"":"Op\xE7\xE3o inv\xE1lida"},set({option:e,index:r}){var s;if(r<0)return this.outside();if(!!((s=this.options)!=null&&s.length)){if(!this.multiple)return this.emitInput(this.isSelected(e)?{}:e);if(!this.isSelected(e))return this.emitInput([...this.value,e]);this.emitInput(this.value.filter(t=>!this.isEqual(t,e)))}}}},methods:{itemClasses(e,r){return["item",{"--active":r===this.pointer,"--selected":this.isSelected(e)}]},openingHandler(){this.isOpened=!this.isOpened,this.setFocus()},escHandler(){this.isOpened&&this.outside()},emitInput(e){this.outside(),this.$emit("input",e)},removeSelected(e){this.emitInput(this.value.filter((r,s)=>!Object.is(s,e)))},isEqual(e,r){return(e==null?void 0:e[this.trackBy])===(r==null?void 0:r[this.trackBy])},isSelected(e){return this.multiple?this.value.some(r=>this.isEqual(r,e)):this.isEqual(this.value,e)},outside(){this.isOpened=!1,this.focused=!1,this.unsetFocus(),this.searchQuery="",this.pointerReset()},setFocus(){this.$refs.searchable.focus()},unsetFocus(){this.$refs.searchable.blur()}}},y={};var ee=C($,J,Z,!1,te,null,null,null);function te(e){for(let r in y)this[r]=y[r]}var ne=function(){return ee.exports}();export{ne as default};
