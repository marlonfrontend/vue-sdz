import{n as s,b as r,S as u,a as i,P as c}from"./index.077a4272.js";import p from"./Index.1168f2b2.js";import"./vendor.0f0055ec.js";import"./Index.606fa9ba.js";import"./Index.fc047e67.js";var l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"s-input-example"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Search")]),t("p",{staticClass:"subtitle"},[e._v(" Input Search \xE9 um campo de busca e permite que a pessoa usu\xE1ria encontre um conte\xFAdo de forma r\xE1pida. Hoje \xE9 um componente de input simples, no futuro a ideia \xE9 que contemple tamb\xE9m comportamentos como autocomplete. ")]),t("s-title",{attrs:{size:"title-2"}},[e._v("Quando usar")]),t("p",{staticClass:"subtitle"},[e._v(" \xC9 utilizado quando a pessoa usu\xE1ria deseja encontrar um conte\xFAdo dispon\xEDvel; ")]),t("p",{staticClass:"subtitle"},[e._v(" Pode ser adicionado a outros componentes, como por exemplo o Header. ")]),t("source-code",{attrs:{file:"SSearchExample",comp:"SInput"}}),t("s-title",{attrs:{size:"title-2"}},[e._v("Default")]),t("s-box",[t("s-input",{attrs:{round:"",icon:"sdz-search",value:e.inputSearch,placeholder:"Search"},on:{input:function(n){return e.inputSearch=n}}})],1),t("pre-code",{attrs:{code:e.code1}})],1)},d=[];const m={components:{SInput:r,SBox:u,STitle:i,SourceCode:p,PreCode:c},data(){return{inputMask:"",inputMoney:"",inputRounded:"",inputSearch:"",inputDataError:"",inputTeste:"",inputFloatLabel:"",code1:`<s-input
        round
        icon="sdz-search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
      />`}},methods:{onInputMoney(e){this.inputMoney=e}}},a={};var _=s(m,l,d,!1,v,null,null,null);function v(e){for(let o in a)this[o]=a[o]}var I=function(){return _.exports}();export{I as default};
