import{n as o,_ as e}from"./index.4742542f.js";const t={name:"SButton",components:{SIcon:()=>e((()=>import("./Index.58098f16.js")),["assets/Index.58098f16.js","assets/Index.9dcd8ee6.css","assets/index.4742542f.js","assets/index.08ca29e4.css","assets/vendor.5affd582.js"]).then((o=>o.default)),SLink:()=>e((()=>import("./Index.ec5feb81.js")),["assets/Index.ec5feb81.js","assets/index.4742542f.js","assets/index.08ca29e4.css","assets/vendor.5affd582.js"]).then((o=>o.default)),SLoader:()=>e((()=>import("./Index.9b8d623c.js")),["assets/Index.9b8d623c.js","assets/Index.accea28b.css","assets/index.4742542f.js","assets/index.08ca29e4.css","assets/vendor.5affd582.js"]).then((o=>o.default))},props:{size:{type:[String,Number],default:40,validator:o=>"number"==typeof+o&&+o>0},icon:{type:String,default:""},iconSize:{type:[String,Number],default:"20"},primaryIconColor:Boolean,secondaryIconColor:Boolean,small:Boolean,large:Boolean,fullWidth:Boolean,disabled:Boolean,success:Boolean,grey:Boolean,error:Boolean,link:Boolean,outlined:Boolean,loading:Boolean},computed:{classes(){return["s-button",{"--link":this.link,"--grey":this.grey,"--small":this.small,"--large":this.large,"--error":this.error,"--success":this.success,"--loading":this.loading,"--disabled":this.disabled,"--outlined":this.outlined,"--full-width":this.fullWidth,"--icon-only":!this.$slots.default,"--has-icon":this.icon&&this.$slots.default}]}}},s={};var l=o(t,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("s-link",o._g(o._b({ref:"btn",class:o.classes,attrs:{link:o.link,disabled:o.disabled}},"s-link",o.$attrs,!1),o.$listeners),[o.icon?t("s-icon",{staticClass:"icon",attrs:{"primary-color":o.primaryIconColor,"secondary-color":o.secondaryIconColor,icon:o.icon,size:o.iconSize}}):o._e(),o.$slots.default?t("span",{staticClass:"text"},[o._t("default")],2):o._e(),t("transition",{attrs:{name:"loading"}},[o.loading?t("s-loader",{staticClass:"loader",attrs:{size:"25"}}):o._e()],1)],1)}),[],!1,n,null,null,null);function n(o){for(let e in s)this[e]=s[e]}var i=function(){return l.exports}();export{i as S};
