import{N as ae,y as ve,h as v,O as re,D as me,c,g as Q,v as I,P as ge,Q as he,R as ie,S as be,r as U,m as ye,U as ke,x as P,q as pe,V as xe}from"./index.ba6c96e9.js";const F=e=>ae(ve(e)),qe=e=>ae(e);function Ee(e,t){return e!==void 0&&e()||t}function et(e,t){if(e!==void 0){const a=e();if(a!=null)return a.slice()}return t}function z(e,t){return e!==void 0?t.concat(e()):t}function tt(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function nt(e,t,a,n,l,d){t.key=n+l;const s=v(e,t,a);return l===!0?re(s,d()):s}function Se(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function at(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=me(e);if(t)return t.$el||t}const V={xs:18,sm:24,md:32,lg:38,xl:46},ue={size:String};function le(e,t=V){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const $e={size:{type:[Number,String],default:"1em"},color:String};function we(e){return{cSize:c(()=>e.size in V?`${V[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Re=F({name:"QSpinner",props:{...$e,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=we(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const H="0 0 24 24",W=e=>e,D=e=>`ionicons ${e}`,se={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},ce={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ce=new RegExp("^("+Object.keys(se).join("|")+")"),Le=new RegExp("^("+Object.keys(oe).join("|")+")"),X=new RegExp("^("+Object.keys(ce).join("|")+")"),Be=/^[Mm]\s?[-+]?\.?\d/,_e=/^img:/,Pe=/^svguse:/,Te=/^ion-/,Ae=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=F({name:"QIcon",props:{...ue,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=Q(),n=le(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=c(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const o=a.iconMapFn(r);if(o!==void 0)if(o.icon!==void 0){if(r=o.icon,r==="none"||!r)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Be.test(r)===!0){const[o,y=H]=r.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(u=>{const[k,h,p]=u.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(_e.test(r)===!0)return{img:!0,src:r.substring(4)};if(Pe.test(r)===!0){const[o,y=H]=r.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const b=r.match(Ce);if(b!==null)s=se[b[1]](r);else if(Ae.test(r)===!0)s=r;else if(Te.test(r)===!0)s=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){s="notranslate material-symbols";const o=r.match(X);o!==null&&(r=r.substring(6),s+=ce[o[1]]),q=r}else{s="notranslate material-icons";const o=r.match(Le);o!==null&&(r=r.substring(2),s+=oe[o[1]]),q=r}return{cls:s,content:q}});return()=>{const s={class:l.value,style:n.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,s,Ee(t.default)):d.value.img===!0?v("span",s,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v("span",s,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v("span",s,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(s.class+=" "+d.value.cls),v(e.tag,s,z(t.default,[d.value.content])))}}});function Oe(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function G(e,t,a,n){a.modifiers.stop===!0&&ie(e);const l=a.modifiers.color;let d=a.modifiers.center;d=d===!0||n===!0;const s=document.createElement("span"),r=document.createElement("span"),q=be(e),{left:b,top:o,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),h=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-b-h}px`,x=`${(u-k)/2}px`,_=d?x:`${q.top-o-h}px`;r.className="q-ripple__inner",Se(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${l?" text-"+l:""}`,s.setAttribute("dir","ltr"),s.appendChild(r),t.appendChild(s);const L=()=>{s.remove(),clearTimeout(B)};a.abort.push(L);let B=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,B=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,B=setTimeout(()=>{s.remove(),a.abort.splice(a.abort.indexOf(L),1)},275)},250)},50)}function J(e,{modifiers:t,value:a,arg:n}){const l=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var Me=qe({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&G(l,e,n,l.qKeyEvent===!0)},keystart:Oe(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&I(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&G(l,e,n,!0)},300)};J(n,t),e.__qripple=n,ge(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&J(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),he(t,"main"),delete e._qripple)}});const de={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(de),ze={align:{type:String,validator:e=>je.includes(e)}};function Ne(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${de[t]}`})}function fe(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{fe(e,a)}):e.add(t)}function rt(e){const t=new Set;return e.forEach(a=>{fe(t,a)}),Array.from(t)}function Ke(e){return e.appContext.config.globalProperties.$router!==void 0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function De(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((d,s)=>d!==l[s]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Ie(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ve(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Ie(e[a],t[a])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Fe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=Q(),{props:n,proxy:l,emit:d}=a,s=Ke(a),r=c(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?c(()=>s===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>s===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=c(()=>q.value===!0?_(n.to):null),o=c(()=>b.value!==null),y=c(()=>r.value===!0||o.value===!0),u=c(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=c(()=>r.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:b.value.href,target:n.target}:{}),h=c(()=>{if(o.value===!1)return-1;const{matched:m}=b.value,{length:E}=m,$=m[E-1];if($===void 0)return-1;const R=l.$route.matched;if(R.length===0)return-1;const C=R.findIndex(ee.bind(null,$));if(C>-1)return C;const N=Z(m[E-2]);return E>1&&Z($)===N&&R[R.length-1].path!==N?R.findIndex(ee.bind(null,m[E-2])):C}),p=c(()=>o.value===!0&&h.value!==-1&&De(l.$route.params,b.value.params)),f=c(()=>p.value===!0&&h.value===l.$route.matched.length-1&&Ve(l.$route.params,b.value.params)),x=c(()=>o.value===!0?f.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(m){try{return l.$router.resolve(m)}catch{}return null}function L(m,{returnRouterError:E,to:$=n.to,replace:R=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const C=l.$router[R===!0?"replace":"push"]($);return E===!0?C:C.then(()=>{}).catch(()=>{})}function B(m){if(o.value===!0){const E=$=>L(m,$);d("click",m,E),m.defaultPrevented!==!0&&E()}else d("click",m)}return{hasRouterLink:o,hasHrefLink:r,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:L,navigateOnClick:B}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ue={xs:8,sm:10,md:14,lg:20,xl:24},He=["button","submit","reset"],We=/[^\s]\/[^\s]/,Xe=["flat","outline","push","unelevated"],Ye=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ge={...ue,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Xe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ze.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Je(e){const t=le(e,Ue),a=Ne(e),{hasRouterLink:n,hasLink:l,linkTag:d,linkAttrs:s,navigateOnClick:r}=Fe({fallbackTag:"button"}),q=c(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),b=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>o.value===!0?e.tabindex||0:-1),u=c(()=>Ye(e,"standard")),k=c(()=>{const f={tabindex:y.value};return l.value===!0?Object.assign(f,s.value):He.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),n.value!==!0&&We.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),h=c(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=c(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:d,navigateOnClick:r,isActionable:o}}const{passiveCapture:S}=pe;let T=null,A=null,O=null;var it=F({name:"QBtn",props:{...Ge,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=Q(),{classes:l,style:d,innerClasses:s,attributes:r,hasLink:q,linkTag:b,navigateOnClick:o,isActionable:y}=Je(e),u=U(null),k=U(null);let h=null,p,f=null;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),L=c(()=>({center:e.round})),B=c(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),m=c(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const i={onClick:$,onKeydown:R,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";i[`onTouchstart${g}`]=C}return i}return{onClick:P}}),E=c(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:d.value,...r.value,...m.value}));function $(i){if(u.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&u.value.contains(g)===!1&&g.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,S),u.value!==null&&u.value.removeEventListener("blur",K,S)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,S),u.value.addEventListener("blur",K,S)}}o(i)}}function R(i){u.value!==null&&(a("keydown",i),I(i,[13,32])===!0&&A!==u.value&&(A!==null&&M(),i.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,S)),P(i)))}function C(i){u.value!==null&&(a("touchstart",i),i.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&M(),T=u.value,h=i.target,h.addEventListener("touchcancel",w,S),h.addEventListener("touchend",w,S)),p=!0,f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,p=!1},200)))}function N(i){u.value!==null&&(i.qSkipRipple=p===!0,a("mousedown",i),i.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,S)))}function w(i){if(u.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===u.value)){if(i!==void 0&&i.type==="keyup"){if(A===u.value&&I(i,[13,32])===!0){const g=new MouseEvent("click",i);g.qKeyEvent=!0,i.defaultPrevented===!0&&xe(g),i.cancelBubble===!0&&ie(g),u.value.dispatchEvent(g),P(i),i.qKeyEvent=!0}a("keyup",i)}M()}}function M(i){const g=k.value;i!==!0&&(T===u.value||O===u.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===u.value&&(h!==null&&(h.removeEventListener("touchcancel",w,S),h.removeEventListener("touchend",w,S)),T=h=null),O===u.value&&(document.removeEventListener("mouseup",w,S),O=null),A===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,S),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(i){P(i),i.qSkipRipple=!0}return ye(()=>{M(!0)}),Object.assign(n,{click:$}),()=>{let i=[];e.icon!==void 0&&i.push(v(Y,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=z(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(Y,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},i)),e.loading!==null&&g.push(v(ke,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Re)])]:null)),re(v(b.value,E.value,g),[[Me,_.value,void 0,L.value]])}}});export{Y as Q,Se as a,z as b,F as c,le as d,tt as e,Qe as f,at as g,Ee as h,Fe as i,et as j,it as k,Re as l,ze as m,Ne as n,qe as o,rt as p,nt as q,ue as u,Ke as v};
