import{n as l,b as i,S as r,a as o,P as u}from"./index.b6025da3.js";import p from"./Index.351005cc.js";import"./Index.4bc3257e.js";import"./clickOutside.84c04b54.js";import"./Index.634c21a0.js";var d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{size:"title-1"}},[t._v("Inputs")]),e("p",{staticClass:"subtitle"},[t._v(" Input Text permite a pessoa usu\xE1ria interagir e inserir conte\xFAdo e dados. Pode ser usado para entradas de formul\xE1rios longos e curtos. ")]),e("p",{staticClass:"subtitle"},[t._v(" Use em formul\xE1rios para permitir as pessoas inserirem informa\xE7\xF5es; ")]),e("p",{staticClass:"subtitle"},[t._v(" Podem fazer parte de componentes como modais no caso de um modal de login, por exemplo; ")]),e("p",{staticClass:"subtitle"},[t._v(" Os tipos de entrada de texto comuns incluem: nomes de pessoas usu\xE1rias, descri\xE7\xF5es, URLs, e-mails, endere\xE7os e qualquer outra forma de inser\xE7\xE3o de informa\xE7\xE3o. ")]),e("p",{staticClass:"subtitle"},[t._v(" Considerar Input Text sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),e("source-code",{attrs:{file:"SInputExample",comp:"SInput"}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Stats")]),e("s-box",[e("s-input",{attrs:{label:"Default"}}),e("s-input",{attrs:{label:"With Button",button:"Alterar","button-icon":"check",outlined:""}}),e("s-input",{attrs:{placeholder:"Input without label"}}),e("s-input",{attrs:{label:"disabled",disabled:"disabled",placeholder:"Disabled input"}}),e("s-input",{attrs:{readonly:"readonly",placeholder:"Disabled readonly input"}}),e("s-input",{attrs:{label:"error",validation:t.inputDataError?"":"error msg",value:t.inputDataError},on:{input:function(a){return t.inputDataError=a}}}),e("s-input",{attrs:{label:"is float label","float-label":"",value:t.inputFloatLabel},on:{input:function(a){return t.inputFloatLabel=a}}})],1),e("pre-code",{attrs:{code:t.code1}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Sizing")]),e("s-box",{staticClass:"sizing flex-inline"},[e("s-input",{attrs:{label:"Small",small:""}}),e("s-input",{attrs:{label:"Default"}}),e("s-input",{attrs:{label:"Larger",larger:""}})],1),e("pre-code",{attrs:{code:t.code2}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Rounded")]),e("s-box",[e("s-input",{attrs:{label:"rounded",round:"",value:t.inputRounded},on:{input:function(a){return t.inputRounded=a}}})],1),e("pre-code",{attrs:{code:t.code3}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Masked Input")]),t._m(0),e("s-box",[e("s-input",{attrs:{raw:"",label:"CPF",mask:["###.###.###-##"],value:t.inputMask},on:{input:function(a){return t.inputMask=a}}}),e("s-input",{attrs:{raw:"",label:"Phone",mask:["(##) ####-####"],value:t.inputMask},on:{input:function(a){return t.inputMask=a}}}),e("s-input",{attrs:{label:"money","is-money":"",value:t.inputMoney},on:{input:t.onInputMoney}})],1),e("pre-code",{attrs:{code:t.code4}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Enhancers")]),e("s-box",[e("s-input",{attrs:{round:"",icon:"search",value:t.inputSearch,placeholder:"Search"},on:{input:function(a){return t.inputSearch=a}}})],1),e("pre-code",{attrs:{code:t.code5}})],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"subtitle"},[t._v(" CPF: 000.000.000-00"),e("br"),t._v(" CNPJ: 00.000.000/0000-00"),e("br"),t._v(" Telefone: (00) 00000-0000"),e("br")])}];const b={components:{SInput:i,SBox:r,STitle:o,SourceCode:p,PreCode:u},data(){return{inputMask:"",inputMoney:0,inputRounded:"",inputSearch:"",inputDataError:"",inputTeste:"",inputFloatLabel:"",code1:`<s-input label="Default" />

    <s-input
      placeholder="Disabled input"
      disabled="disabled"
    />

    <s-input
      placeholder="Disabled readonly input"
      readonly="readonly"
    />

    <s-input
      label="error"
      :validation="inputDataError ? '' : 'error msg'"
      :value="inputDataError"
      @input="value => inputDataError = value"
    />

    <s-input
      label="is float label"
      float-label
      :value="inputFloatLabel"
      @input="value => inputFloatLabel = value"
    />`,code2:`<s-input
        label="Small"
        small
      />
      <s-input
        label="Default"
      />
      <s-input
        label="Larger"
        larger
      />`,code3:`<s-input
        label="rounded"
        round
        :value="inputRounded"
        @input="value => inputRounded = value"
      />`,code4:`<s-input
        raw
        label="CPF"
        :mask="['###.###.###-##']"
        :value="inputMask"
        @input="value => inputMask = value"
      />
      <s-input
        raw
        label="Phone"
        :mask="['(##) ####-####']"
        :value="inputMask"
        @input="value => inputMask = value"
      />
      <s-input
        label="money"
        is-money
        :value="inputMoney"
        @input="onInputMoney"
      />`,code5:`<s-input
        round
        icon="search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
      />`}},methods:{onInputMoney(t){this.inputMoney=t}}},s={};var v=l(b,d,c,!1,m,null,null,null);function m(t){for(let n in s)this[n]=s[n]}var S=function(){return v.exports}();export{S as default};
