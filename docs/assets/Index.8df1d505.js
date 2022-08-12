import s from"./Index.b2ab09d0.js";import{n as u,S as l,a as p,P as d}from"./index.88ccfa18.js";import c from"./Index.2ff795a4.js";import"./Index.05a6b9d7.js";import"./Index.f23f84c0.js";import"./Index.ace444db.js";import"./clickOutside.84c04b54.js";import"./Index.87d626b8.js";var m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{size:"title-1"}},[t._v("Text Area")]),e("p",{staticClass:"subtitle"},[t._v(" Input Text Area permite que a pessoa usu\xE1ria insira textos longos em um campo. ")]),e("s-title",{attrs:{size:"title-2"}},[t._v("Quando usar")]),e("p",{staticClass:"subtitle"},[t._v(" Representa um controle de edi\xE7\xE3o de texto simples de v\xE1rias linhas, \xFAtil quando voc\xEA deseja permitir que as pessoas usu\xE1rias insiram uma quantidade consider\xE1vel de texto de formato livre, por exemplo, um coment\xE1rio em um formul\xE1rio de revis\xE3o ou feedback; ")]),e("source-code",{attrs:{file:"STextareaExample",comp:"SInput"}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Default")]),e("s-box",[e("s-input",{attrs:{label:"textarea",rows:"20",cols:"5","text-area":"",value:t.inputTextArea},on:{input:function(a){return t.inputTextArea=a}}})],1),e("pre-code",{attrs:{code:t.code1}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Negative")]),e("s-box",[e("s-input",{attrs:{label:"textarea","text-area":"",value:t.inputDataError,validation:t.inputDataError?"":"error msg"},on:{input:function(a){return t.inputDataError=a}}})],1),e("pre-code",{attrs:{code:t.code2}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Disabled")]),e("s-box",[e("s-input",{attrs:{label:"Disabled",disabled:"","text-area":"",value:t.inputTextArea},on:{input:function(a){return t.inputTextArea=a}}})],1),e("pre-code",{attrs:{code:t.code3}})],1)},v=[];const x={components:{SInput:s,SBox:l,STitle:p,SourceCode:c,PreCode:d},data(){return{inputTextArea:"",inputDataError:"",inputFloatLabel:"",code1:`<s-input
        label="textarea"
        rows="20"
        cols="5"
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />`,code2:`<s-input
        label="textarea"
        text-area
        :value="inputDataError"
        :validation="inputDataError ? '' : 'error msg'"
        @input="value => inputDataError = value"
      />`,code3:`<s-input
        label="Disabled"
        disabled
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />`}},methods:{onInputMoney(r){this.inputMoney=r}}},o={};var _=u(x,m,v,!1,b,null,null,null);function b(r){for(let t in o)this[t]=o[t]}const C=function(){return _.exports}();export{C as default};
