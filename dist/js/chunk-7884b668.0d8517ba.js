(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7884b668"],{"20f6":function(t,i,e){},"2a32":function(t,i,e){t.exports=e.p+"img/agulhas.bc6c194a.png"},"2ce3":function(t,i,e){t.exports=e.p+"img/pecas.0c614c56.png"},"36a7":function(t,i,e){},"3a80":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-card",[a("v-img",{attrs:{src:e("98b0"),"aspect-ratio":"0.8"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v("Linhas")]),a("div",[t._v(" "+t._s(t.card_text)+" ")])])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{text:"",color:"orange"},on:{click:function(i){return t.goToCompra()}}},[t._v("Produtos")])],1)],1)],1),a("v-flex",{attrs:{xs3:""}},[a("v-card",[a("v-img",{attrs:{src:e("2a32"),"aspect-ratio":"0.8"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v("Agulhas")]),a("div",[t._v(" "+t._s(t.card_text)+" ")])])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{text:"",color:"orange"},on:{click:function(i){return t.goToCompra()}}},[t._v("Produtos")])],1)],1)],1),a("v-flex",{attrs:{xs3:""}},[a("v-card",[a("v-img",{attrs:{src:e("2ce3"),"aspect-ratio":"0.8"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v("Diversos")]),a("div",[t._v(" "+t._s(t.card_text)+" ")])])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{text:"",color:"orange"},on:{click:function(i){return t.goToCompra()}}},[t._v("Produtos")])],1)],1)],1)],1)],1)},s=[],r={data:function(){return{card_text:"Categoria"}},methods:{goToDescribe:function(){this.$router.push({name:"About"})},goToCompra:function(){this.$router.push({name:"Compra"})}}},n=r,c=(e("4f86"),e("2877")),o=e("6544"),d=e.n(o),l=e("8336"),h=e("b0af"),u=e("99d9"),g=(e("4de4"),e("d3b7"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b"),e("2b0e"));function m(t){return g["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(i,e){var a=e.props,s=e.data,r=e.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var n=s.attrs;if(n){s.attrs={};var c=Object.keys(n).filter((function(t){if("slot"===t)return!1;var i=n[t];return t.startsWith("data-")?(s.attrs[t]=i,!1):i||"string"===typeof i}));c.length&&(s.staticClass+=" ".concat(c.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),i(a.tag,s,r)}})}var p=e("d9f7"),v=m("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,i){var e,a=i.props,s=i.data,r=i.children,n=s.attrs;return n&&(s.attrs={},e=Object.keys(n).filter((function(t){if("slot"===t)return!1;var i=n[t];return t.startsWith("data-")?(s.attrs[t]=i,!1):i||"string"===typeof i}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,Object(p["a"])(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(e||[])}),r)}}),f=m("flex"),S=e("adda"),b=m("layout"),_=Object(c["a"])(n,a,s,!1,null,null,null);i["default"]=_.exports;d()(_,{VBtn:l["a"],VCard:h["a"],VCardActions:u["a"],VCardTitle:u["b"],VContainer:v,VFlex:f,VImg:S["a"],VLayout:b})},"4b85":function(t,i,e){},"4f86":function(t,i,e){"use strict";e("7150")},7150:function(t,i,e){},"8a79":function(t,i,e){"use strict";var a=e("23e7"),s=e("e330"),r=e("06cf").f,n=e("50c4"),c=e("577e"),o=e("5a34"),d=e("1d80"),l=e("ab13"),h=e("c430"),u=s("".endsWith),g=s("".slice),m=Math.min,p=l("endsWith"),v=!h&&!p&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!v&&!p},{endsWith:function(t){var i=c(d(this));o(t);var e=arguments.length>1?arguments[1]:void 0,a=i.length,s=void 0===e?a:m(n(e),a),r=c(t);return u?u(i,r,s):g(i,s-r.length,s)===r}})},"8efc":function(t,i,e){},"98b0":function(t,i,e){t.exports=e.p+"img/ft500pt.9b675106.png"},adda:function(t,i,e){"use strict";var a=e("53ca"),s=(e("a9e3"),e("a15b"),e("8a79"),e("2ca0"),e("8efc"),e("90a2")),r=(e("36a7"),e("24b2")),n=e("58df"),c=Object(n["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=c,d=e("7560"),l=e("d9f7"),h=e("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;i["a"]=Object(n["a"])(o,d["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(a["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!u||e||this.eager){if(this.normalisedSrc.lazySrc){var a=new Image;a.src=this.normalisedSrc.lazySrc,this.pollForSize(a,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var s=t.naturalHeight,r=t.naturalWidth;s||r?(i.naturalWidth=r,i.calculatedAspectRatio=r/s):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(a,e)};a()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=o.options.render.call(this,t),e=Object(l["a"])(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})}}]);
//# sourceMappingURL=chunk-7884b668.0d8517ba.js.map