"use strict";(self["webpackChunkdevextreme_vue_template"]=self["webpackChunkdevextreme_vue_template"]||[]).push([[887],{3628:function(t,e,o){var i=o(3559),n=o(9171),s=(0,n.LM)({props:{elementAttr:Object,height:[Function,Number,String],hint:String,indicatorSrc:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onOptionChanged:Function,rtlEnabled:Boolean,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:elementAttr":null,"update:height":null,"update:hint":null,"update:indicatorSrc":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:rtlEnabled":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=i.Z,this.$_hasAsyncTemplate=!0}});e.Z=s},4312:function(t,e,o){o.d(e,{Z:function(){return z}});var i=o(7678),n=o(2454),s=o(4099),a=o(450),l=o(8274),r=o(9299),d=o(1389),u=o(2376),c=o(268),p=o(1866),h=o(652),m=o(3298),f=o(3970),g=c.Z.add,v="dx-toast",w=v+"-",b=w+"wrapper",y=w+"content",x=w+"message",_=w+"icon",C="dxToast",k=["info","warning","error","success"],T=[],S=8e3,D={top:{my:"top",at:"top",of:null,offset:"0 0"},bottom:{my:"bottom",at:"bottom",of:null,offset:"0 -20"},center:{my:"center",at:"center",of:null,offset:"0 0"},right:{my:"center right",at:"center right",of:null,offset:"0 0"},left:{my:"center left",at:"center left",of:null,offset:"0 0"}},Z={h:0,v:0},W=20;g((function(){u.Z.subscribeGlobal(d.Z.getDocument(),p.Z.down,(function(t){for(var e=T.length-1;e>=0;e--)if(!T[e]._proxiedDocumentDownHandler(t))return}))}));var O=m.Z.inherit({_getDefaultOptions:function(){return(0,s.l)(this.callBase(),{message:"",type:"info",displayTime:2e3,position:"bottom center",animation:{show:{type:"fade",duration:400,from:0,to:1},hide:{type:"fade",duration:400,from:1,to:0}},shading:!1,height:"auto",hideTopOverlayHandler:null,preventScrollEvents:!1,closeOnSwipe:!0,closeOnClick:!1})},_defaultOptionsRules:function(){var t={displayTime:(0,f.yj)()?4e3:2e3,hideOnOutsideClick:!0,animation:{show:{type:"fade",duration:200,from:0,to:1},hide:{type:"fade",duration:200,from:1,to:0}}};return this.callBase().concat([{device:t=>"phone"===t.deviceType,options:(0,r.Z)({width:"calc(100vw - ".concat(2*W,"px)")},t)},{device:t=>"tablet"===t.deviceType,options:(0,r.Z)({width:"auto",maxWidth:"80vw"},t)},{device:t=>(0,f.yj)()&&"desktop"===t.deviceType,options:{minWidth:344,maxWidth:568,displayTime:4e3}}])},_init:function(){this.callBase(),this._posStringToObject()},_renderContentImpl:function(){this._message=(0,i.Z)("<div>").addClass(x).text(this.option("message")).appendTo(this.$content()),this.setAria("role","alert",this._message),k.includes(this.option("type").toLowerCase())&&this.$content().prepend((0,i.Z)("<div>").addClass(_)),this.callBase()},_render:function(){this.callBase(),this.$element().addClass(v),this.$wrapper().addClass(b),this.$content().addClass(w+String(this.option("type")).toLowerCase()),this.$content().addClass(y),this._toggleCloseEvents("Swipe"),this._toggleCloseEvents("Click")},_toggleCloseEvents:function(t){var e="dx"+t.toLowerCase();u.Z.off(this.$content(),e),this.option("closeOn"+t)&&u.Z.on(this.$content(),e,this.hide.bind(this))},_posStringToObject:function(){if((0,a.HD)(this.option("position"))){var t=this.option("position").split(" ")[0],e=this.option("position").split(" ")[1];switch(this.option("position",(0,s.l)({boundaryOffset:Z},D[t])),e){case"center":case"left":case"right":this.option("position").at+=" "+e,this.option("position").my+=" "+e}}},_show:function(){return this.callBase.apply(this,arguments).always(function(){clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout(this.hide.bind(this),this.option("displayTime"))}.bind(this))},_overlayStack:function(){return T},_zIndexInitValue:function(){return this.callBase()+S},_dispose:function(){clearTimeout(this._hideTimeout),this.callBase()},_optionChanged:function(t){switch(t.name){case"type":this.$content().removeClass(w+t.previousValue),this.$content().addClass(w+String(t.value).toLowerCase());break;case"message":this._message&&this._message.text(t.value);break;case"closeOnSwipe":this._toggleCloseEvents("Swipe");break;case"closeOnClick":this._toggleCloseEvents("Click");break;case"displayTime":break;default:this.callBase(t)}}});(0,h.Z)(C,O);var H=O,B=H,P=(0,l.Jj)(),$=null,M={};function j(t,e,o){var l=(0,a.PO)(t)?t:{message:t},r=(0,a.PO)(e)?e:void 0,d=(0,a.PO)(e)?void 0:e,{onHidden:u}=l;if(null!==r&&void 0!==r&&r.position){var{position:c}=r,p=r.direction||E(c),h=(0,a.HD)(c)?c:"".concat(c.top,"-").concat(c.left,"-").concat(c.bottom,"-").concat(c.right),{onShowing:m}=l,f=q(h);F(f,p),(0,s.l)(l,{container:f,onShowing:function(t){L(f,p,c),null===m||void 0===m||m(t)}})}(0,s.l)(l,{type:d,displayTime:o,onHidden:function(t){(0,i.Z)(t.element).remove(),null===u||void 0===u||u(t)}}),$=(0,i.Z)("<div>").appendTo((0,n.S3)()),new B($,l).show()}var E=t=>(0,a.HD)(t)&&t.includes("top")?"down-push":"up-push",I=t=>{var e=(0,i.Z)("<div>").appendTo((0,n.S3)());return M[t]=e,e},q=t=>{var e=M[t];return e||I(t)},F=(t,e)=>{var o="dx-toast-stack dx-toast-stack-".concat(e,"-direction");t.removeAttr("class").addClass(o)},L=(t,e,o)=>{var{offsetWidth:i,offsetHeight:n}=t.children().first().get(0),s={toastWidth:i,toastHeight:n,windowHeight:P.innerHeight,windowWidth:P.innerWidth},l=(0,a.HD)(o)?A(o,s):o,r=R(e,l,s);t.css(r)},A=(t,e)=>{var{toastWidth:o,toastHeight:i,windowHeight:n,windowWidth:s}=e;switch(t){case"top left":return{top:10,left:10};case"top right":return{top:10,right:10};case"bottom left":return{bottom:10,left:10};case"bottom right":return{bottom:10,right:10};case"top center":return{top:10,left:Math.round(s/2-o/2)};case"left center":return{top:Math.round(n/2-i/2),left:10};case"right center":return{top:Math.round(n/2-i/2),right:10};case"center":return{top:Math.round(n/2-i/2),left:Math.round(s/2-o/2)};case"bottom center":default:return{bottom:10,left:Math.round(s/2-o/2)}}},R=(t,e,o)=>{var i,n,s,a,l,r,d,u,c,p,h,m,{toastWidth:f,toastHeight:g,windowHeight:v,windowWidth:w}=o;switch(t.replace(/-push|-stack/g,"")){case"up":return{bottom:null!==(i=e.bottom)&&void 0!==i?i:v-g-e.top,top:"",left:null!==(n=e.left)&&void 0!==n?n:"",right:null!==(s=e.right)&&void 0!==s?s:""};case"down":return{top:null!==(a=e.top)&&void 0!==a?a:v-g-e.bottom,bottom:"",left:null!==(l=e.left)&&void 0!==l?l:"",right:null!==(r=e.right)&&void 0!==r?r:""};case"left":return{right:null!==(d=e.right)&&void 0!==d?d:w-f-e.left,left:"",top:null!==(u=e.top)&&void 0!==u?u:"",bottom:null!==(c=e.bottom)&&void 0!==c?c:""};case"right":return{left:null!==(p=e.left)&&void 0!==p?p:w-f-e.right,right:"",top:null!==(h=e.top)&&void 0!==h?h:"",bottom:null!==(m=e.bottom)&&void 0!==m?m:""}}},z=j},1024:function(t,e,o){o.r(e),o.d(e,{default:function(){return v}});var i=o(6252),n=o(9963);const s={class:"dx-button-text"},a={key:1};function l(t,e,o,l,r,d){const u=(0,i.up)("dx-required-rule"),c=(0,i.up)("dx-label"),p=(0,i.up)("dx-item"),h=(0,i.up)("dx-custom-rule"),m=(0,i.up)("dx-button-options"),f=(0,i.up)("dx-button-item"),g=(0,i.up)("dx-loadIndicator"),v=(0,i.up)("dx-form");return(0,i.wg)(),(0,i.iD)("form",{onSubmit:e[0]||(e[0]=(0,n.iM)(((...t)=>l.onSubmit&&l.onSubmit(...t)),["prevent"]))},[(0,i.Wm)(v,{"form-data":l.formData,disabled:l.loading},{changePassword:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("span",s,[l.loading?((0,i.wg)(),(0,i.j4)(g,{key:0,width:"24px",height:"24px",visible:!0})):(0,i.kq)("",!0),l.loading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",a,"Continue"))])])])),default:(0,i.w5)((()=>[(0,i.Wm)(p,{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{message:"Password is required"}),(0,i.Wm)(c,{visible:!1})])),_:1}),(0,i.Wm)(p,{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{message:"Password is required"}),(0,i.Wm)(h,{message:"Passwords do not match","validation-callback":l.confirmPassword},null,8,["validation-callback"]),(0,i.Wm)(c,{visible:!1})])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{width:"100%",type:"default",template:"changePassword","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"])],32)}o(560);var r=o(479),d=o(3628),u=o(4312),c=o(2201),p=o(2262),h=o(7758),m={components:{DxForm:r.ZP,DxItem:r.wy,DxLabel:r.kN,DxButtonItem:r.sY,DxButtonOptions:r.lU,DxRequiredRule:r.VD,DxCustomRule:r.gu,DxLoadIndicator:d.Z},setup(){const t=(0,c.tv)(),e=(0,c.yj)(),o=(0,p.iH)(""),i=(0,p.iH)(!1),n=(0,p.qj)({password:""});async function s(){const{password:e}=n;i.value=!0;const s=await h.Z.changePassword(e,o.value);i.value=!1,s.isOk?t.push("/login-form"):(0,u.Z)(s.message,"error",2e3)}function a(t){return t.value===n.password}return o.value=e.params.recoveryCode,{loading:i,formData:n,onSubmit:s,confirmPassword:a}}},f=o(3744);const g=(0,f.Z)(m,[["render",l]]);var v=g}}]);
//# sourceMappingURL=login0.86dffc37.js.map