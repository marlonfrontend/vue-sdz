import{n as _,b as c,P as l,_ as n}from"./index.b6025da3.js";import m from"./Index.4bc3257e.js";import d from"./Index.634c21a0.js";import"./clickOutside.84c04b54.js";var v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"source-code-container"},[e.title?r("h1",[e._v(e._s(e.title))]):e._e(),e.subtitle?r("h2",{staticClass:"subtitle"},[e._v(e._s(e.subtitle))]):e._e(),r("div",{staticClass:"header"},[r("p",[e._v("Preview")]),e._t("header")],2),r("div",{staticClass:"body"},[e._t("content")],2)])},p=[];const E={name:"SourceCodeContainer",props:{title:String,subtitle:String}},u={};var I=_(E,v,p,!1,S,null,null,null);function S(e){for(let t in u)this[t]=u[t]}var f=function(){return I.exports}(),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"source-code"},[r("source-code-container",{attrs:{title:e.structure.title,subtitle:e.structure.subtitle},scopedSlots:e._u([{key:"header",fn:function(){return[e.structure?r(e.currentComponent,e._b({tag:"component"},"component",e.getObject,!1),[e._t("default")],2):e._e()]},proxy:!0},{key:"content",fn:function(){return[r("button",{staticClass:"tab",class:e.tab=="prop"?"active":null,on:{click:function(o){e.tab="prop"}}},[e._v("Props")]),r("button",{staticClass:"tab",class:e.tab=="api"?"active":null,on:{click:function(o){e.tab="api"}}},[e._v("API")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="prop",expression:"tab=='prop'"}],staticClass:"tabprop"},e._l(e.structure.props,function(o){return r("div",{key:o.name,staticClass:"item"},[o.values.length<=1?r("div",[r("s-input",{attrs:{small:"",label:o.name,value:o.value,placeholder:o.placeholder},on:{input:function(s){return o.value=s}}})],1):e._e(),o.type=="boolean"?r("div",[r("label",[e._v(e._s(o.name))]),r("s-radiobox",{attrs:{name:o.name,label:"Sim",value:"true"},on:{change:function(s){return o.value=s}}}),r("s-radiobox",{attrs:{name:o.name,label:"N\xE3o",value:"false"},on:{change:function(s){return o.value=s}}})],1):e._e(),o.values.length>1&&o.type!="boolean"?r("div",[r("s-select",{attrs:{label:o.name,display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",small:"",items:o.values.map(function(s){return{name:s||"none",slug:s}})},scopedSlots:e._u([{key:"option",fn:function(s){var i=s.option;return r("div",{},[e._v(" "+e._s(i.name)+" ")])}}],null,!0),model:{value:o.value,callback:function(s){e.$set(o,"value",s)},expression:"prop.value"}})],1):e._e()])}),0),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="api",expression:"tab=='api'"}],staticClass:"tabapi"},[r("table",{staticClass:"table-api"},[r("thead",[r("tr",[r("th",[e._v("Name")]),r("th",[e._v("Default")]),r("th",[e._v("Type")]),r("th",[e._v("Description")])])]),r("tbody",e._l(e.structure.props,function(o){return r("tr",{key:o.name},[r("td",[r("code",{staticClass:"codespan"},[e._v(e._s(o.name))])]),r("td",[e._v(e._s(o.default))]),r("td",[e._v(e._s(o.type))]),r("td",[e._v(e._s(o.description))])])}),0)])])]},proxy:!0}],null,!0)}),r("pre-code",{attrs:{code:e.code}})],1)},P=[];function h(e){switch(e){case"./assets/SAlertExample.json":return n(()=>import("./SAlertExample.45daad01.js"),[]);case"./assets/SButtonExample.json":return n(()=>import("./SButtonExample.dfac1779.js"),[]);case"./assets/SCardExample.json":return n(()=>import("./SCardExample.8163a941.js"),[]);case"./assets/SCheckboxExample.json":return n(()=>import("./SCheckboxExample.44bf5aae.js"),[]);case"./assets/SCollapsibleExample.json":return n(()=>import("./SCollapsibleExample.dc2c7078.js"),[]);case"./assets/SInputExample.json":return n(()=>import("./SInputExample.3e572d5e.js"),[]);case"./assets/SLinkExample.json":return n(()=>import("./SLinkExample.ce0b66db.js"),[]);case"./assets/SLoaderExample.json":return n(()=>import("./SLoaderExample.bc8f0a29.js"),[]);case"./assets/SModalExample.json":return n(()=>import("./SModalExample.b368b307.js"),[]);case"./assets/SPasswordExample.json":return n(()=>import("./SPasswordExample.d0403a83.js"),[]);case"./assets/SPopoverExample.json":return n(()=>import("./SPopoverExample.a25afaf8.js"),[]);case"./assets/SRadioboxExample.json":return n(()=>import("./SRadioboxExample.d5fe7e3f.js"),[]);case"./assets/SSearchExample.json":return n(()=>import("./SSearchExample.45269ef7.js"),[]);case"./assets/SSelectExample.json":return n(()=>import("./SSelectExample.9e9d3f50.js"),[]);case"./assets/SSwitchExample.json":return n(()=>import("./SSwitchExample.6e94b183.js"),[]);case"./assets/STextareaExample.json":return n(()=>import("./STextareaExample.03efc6ce.js"),[]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function b(e){switch(e){case"../../../src/components/SAlert/Index.vue":return n(()=>import("./Index.83e6dd48.js"),["assets/Index.83e6dd48.js","assets/Index.336ab2b0.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SAvatar/Index.vue":return n(()=>import("./Index.d8c9257a.js"),["assets/Index.d8c9257a.js","assets/Index.2b074534.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SBadge/Index.vue":return n(()=>import("./Index.2956f746.js"),["assets/Index.2956f746.js","assets/Index.5ccba5e5.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SBreadcrumb/Index.vue":return n(()=>import("./Index.4798de29.js"),["assets/Index.4798de29.js","assets/Index.f4d33d0e.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SButton/Index.vue":return n(()=>import("./index.b6025da3.js").then(function(t){return t.I}),["assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SCard/Index.vue":return n(()=>import("./Index.aba078f8.js"),["assets/Index.aba078f8.js","assets/Index.547ffa47.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SCarousel/Index.vue":return n(()=>import("./Index.0233c7d9.js"),["assets/Index.0233c7d9.js","assets/Index.3a3867f8.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SCheckbox/Index.vue":return n(()=>import("./Index.2ba8ea73.js"),["assets/Index.2ba8ea73.js","assets/Index.06a85ecc.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SCollapsible/Index.vue":return n(()=>import("./index.b6025da3.js").then(function(t){return t.j}),["assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SDrawer/Index.vue":return n(()=>import("./Index.6c223975.js"),["assets/Index.6c223975.js","assets/Index.56c22f93.css","assets/Index.2c509558.js","assets/Index.6eda2915.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SFeedbacks/Index.vue":return n(()=>import("./Index.86be8910.js"),["assets/Index.86be8910.js","assets/Index.0e5eec3a.css","assets/Index.aba078f8.js","assets/Index.547ffa47.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SFormBuilder/Index.vue":return n(()=>import("./Index.998812de.js").then(function(t){return t.I}),["assets/Index.998812de.js","assets/Index.55787306.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SGrid/Index.vue":return n(()=>import("./Index.dc89ed68.js"),["assets/Index.dc89ed68.js","assets/Index.02961953.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SHeader/Index.vue":return n(()=>import("./index.b6025da3.js").then(function(t){return t.o}),["assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SIcon/Index.vue":return n(()=>import("./index.b6025da3.js").then(function(t){return t.i}),["assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SImage/Index.vue":return n(()=>import("./Index.94b1305c.js"),["assets/Index.94b1305c.js","assets/Index.8c586c2e.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SInput/Index.vue":return n(()=>import("./index.b6025da3.js").then(function(t){return t.m}),["assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SInputContainer/Index.vue":return n(()=>import("./index.b6025da3.js").then(function(t){return t.l}),["assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SLink/Index.vue":return n(()=>import("./Index.dad6e5cb.js"),["assets/Index.dad6e5cb.js","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SLoader/Index.vue":return n(()=>import("./Index.c425e0ac.js"),["assets/Index.c425e0ac.js","assets/Index.faa0736c.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SModal/Index.vue":return n(()=>import("./Index.d749a993.js"),["assets/Index.d749a993.js","assets/Index.f57a583c.css","assets/Index.2c509558.js","assets/Index.6eda2915.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SOverlay/Index.vue":return n(()=>import("./Index.2c509558.js"),["assets/Index.2c509558.js","assets/Index.6eda2915.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SPagination/Index.vue":return n(()=>import("./Index.e53b23ef.js"),["assets/Index.e53b23ef.js","assets/Index.3da39662.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SPin/Index.vue":return n(()=>import("./Index.38248a8c.js"),["assets/Index.38248a8c.js","assets/Index.2bf80427.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SPopover/Index.vue":return n(()=>import("./Index.f4fa96de.js"),["assets/Index.f4fa96de.js","assets/Index.8ddd653c.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SProgressbar/Index.vue":return n(()=>import("./Index.f1374985.js"),["assets/Index.f1374985.js","assets/Index.de6b7408.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SRadiobox/Index.vue":return n(()=>import("./Index.634c21a0.js"),["assets/Index.634c21a0.js","assets/Index.69d581d5.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SSearch/Index.vue":return n(()=>import("./Index.e93c0456.js"),["assets/Index.e93c0456.js","assets/Index.8605cae8.css","assets/index.b6025da3.js","assets/index.bdccd867.css","assets/Index.f4fa96de.js","assets/Index.8ddd653c.css","assets/clickOutside.84c04b54.js"]);case"../../../src/components/SSelect/Index.vue":return n(()=>import("./Index.4bc3257e.js"),["assets/Index.4bc3257e.js","assets/Index.242549bc.css","assets/index.b6025da3.js","assets/index.bdccd867.css","assets/clickOutside.84c04b54.js"]);case"../../../src/components/SShadowed/Index.vue":return n(()=>import("./Index.9a270a1d.js"),["assets/Index.9a270a1d.js","assets/Index.b8eccc17.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SSidebar/Index.vue":return n(()=>import("./index.b6025da3.js").then(function(t){return t.k}),["assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SSkeleton/Index.vue":return n(()=>import("./Index.6d092756.js"),["assets/Index.6d092756.js","assets/Index.5fc41b01.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SStepper/Index.vue":return n(()=>import("./Index.c83a8630.js"),["assets/Index.c83a8630.js","assets/Index.1a7b8c59.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/SSwitch/Index.vue":return n(()=>import("./Index.9611c624.js"),["assets/Index.9611c624.js","assets/Index.68a34eae.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/STabber/Index.vue":return n(()=>import("./Index.0b717936.js"),["assets/Index.0b717936.js","assets/Index.51a51569.css","assets/index.b6025da3.js","assets/index.bdccd867.css"]);case"../../../src/components/STable/Index.vue":return n(()=>import("./Index.6390ccd0.js"),["assets/Index.6390ccd0.js","assets/Index.0fa3bf01.css","assets/index.b6025da3.js","assets/index.bdccd867.css","assets/Index.f4fa96de.js","assets/Index.8ddd653c.css"]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const R={name:"SourceCode",components:{SourceCodeContainer:f,SInput:c,SRadiobox:d,SSelect:m,PreCode:l},props:{file:{type:String,required:!0},comp:{type:String,required:!0}},data(){return{structure:{title:"",subtitle:"",props:[],imports:[]},tab:"prop"}},created(){this.loader().then(e=>{this.structure=JSON.parse(JSON.stringify(e))})},computed:{code(){let e="";return e+=`<template>
	<${this.renderName(!0)}
`,this.structure.props.map(t=>{if(t.value=t.value||t.default,t.value){let r=this.renderValueProp(t.type,t.value);t.type=="prop"?e+=`		${r}
`:r!="false"&&(e+=`		${t.name}=${r}
`)}}),e+=`	/>
</template>`,e+=this.getScripts(),e},currentComponent(){return this.comp?()=>b("../../../src/components/"+this.comp+"/Index.vue"):""},loader(){return this.file?()=>h(`./assets/${this.file}.json`):""},getObject(){let e={items:[]};return this.structure.props.map(t=>{if(t.value=t.value||t.default,!t.value)return e;if(t.type!="prop"){if(t.type!="boolean")return e[t.name]=t.type=="array"?JSON.parse(t.value):t.value;if(t.value=="true")return e[t.name]=!0}let o=typeof t.value!="string"?t.value.slug:t.value;o&&(e[o]=!0)}),e}},methods:{getScripts(){var t;let e=`

<script>
`;return this.structure.imports.map(r=>{e+=`	import ${r.as||r.name} from '${r.name}';
`}),e+=`	import ${this.renderName()} from '${(t=this.structure.component)==null?void 0:t.name}';
`,e+=`
	export default {
		name: 'Example',
		components: {
      			${this.renderName(!0)}
      		}
	}
<\/script>`,e},renderValueProp(e,t){return e=="string"||e=="array"?`"${t}"`:e=="object"?`{${t}}`:String(t)},renderName(e){return this.structure.component?this.structure.component.as?e?this.structure.component.as.replace(/[^a-zA-Z]/g,"").trim():this.structure.component.as:this.structure.component.name:""}}},a={};var O=_(R,x,P,!1,T,null,null,null);function T(e){for(let t in a)this[t]=a[t]}var y=function(){return O.exports}();export{y as default};
