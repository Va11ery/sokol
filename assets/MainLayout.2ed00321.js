import{c as k,g as G,Q as J}from"./QBtn.64c7554f.js";import{c as L,h as Z,a as ee}from"./render.d3a6dd63.js";import{i as te,a1 as E,s as D,c as m,h as g,a2 as A,a3 as ne,g as $,w as Q,o as C,m as _,a4 as K,a5 as H,r as w,a6 as U,y as B,q as S,a as oe,l as ie,a7 as le,a8 as re,a9 as ae,aa as P,d as q,j as se,ab as ce}from"./index.7c479400.js";var ue=L({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:n}}=$(),t=te(A,E);if(t===E)return console.error("QPageContainer needs to be child of QLayout"),E;D(ne,!0);const r=m(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:r.value},Z(a.default))}});const de=[null,document,document.body,document.scrollingElement,document.documentElement];function fe(e,a){let n=G(a);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return de.includes(n)?window:n}function ve(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function he(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let T;function O(){if(T!==void 0)return T;const e=document.createElement("p"),a=document.createElement("div");k(e,{width:"100%",height:"200px"}),k(a,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),a.appendChild(e),document.body.appendChild(a);const n=e.offsetWidth;a.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=a.clientWidth),a.remove(),T=n-t,T}const{passive:N}=H,me=["both","horizontal","vertical"];var ge=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>me.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,s;Q(()=>e.scrollTarget,()=>{l(),v()});function u(){t!==null&&t();const h=Math.max(0,ve(r)),b=he(r),d={top:h-n.position.top,left:b-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const z=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:h,left:b},n.directionChanged=n.direction!==z,n.delta=d,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),a("scroll",{...n})}function v(){r=fe(s,e.scrollTarget),r.addEventListener("scroll",i,N),i(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",i,N),r=void 0)}function i(h){if(h===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[b,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{d(b),t=null}}}const{proxy:f}=$();return Q(()=>f.$q.lang.rtl,u),C(()=>{s=f.$el.parentNode,v()}),_(()=>{t!==null&&t(),l()}),Object.assign(f,{trigger:i,getPosition:()=>n}),K}});function pe(){const e=w(!U.value);return e.value===!1&&C(()=>{e.value=!0}),e}const X=typeof ResizeObserver!="undefined",V=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var j=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let n=null,t,r={width:-1,height:-1};function s(l){l===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:l,offsetHeight:i}=t;(l!==r.width||i!==r.height)&&(r={width:l,height:i},a("resize",r))}}const{proxy:v}=$();if(X===!0){let l;const i=f=>{t=v.$el.parentNode,t?(l=new ResizeObserver(s),l.observe(t),u()):f!==!0&&B(()=>{i(!0)})};return C(()=>{i()}),_(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():t&&l.unobserve(t))}),K}else{let f=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,H.passive),i=void 0)},h=function(){f(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,H.passive),u())};const l=pe();let i;return C(()=>{B(()=>{t=v.$el,t&&h()})}),_(f),v.trigger=s,()=>{if(l.value===!0)return g("object",{style:V.style,tabindex:-1,type:"text/html",data:V.url,"aria-hidden":"true",onLoad:h})}}}}),we=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:n}){const{proxy:{$q:t}}=$(),r=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),v=w({position:0,direction:"down",inflectionPoint:0}),l=w(0),i=w(U.value===!0?0:O()),f=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=m(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),b=m(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=m(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(o){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};v.value=c,e.onScroll!==void 0&&n("scroll",c)}}function Y(o){const{height:c,width:p}=o;let y=!1;s.value!==c&&(y=!0,s.value=c,e.onScrollHeight!==void 0&&n("scrollHeight",c),W()),u.value!==p&&(y=!0,u.value=p),y===!0&&e.onResize!==void 0&&n("resize",o)}function I({height:o}){l.value!==o&&(l.value=o,W())}function W(){if(e.container===!0){const o=s.value>l.value?O():0;i.value!==o&&(i.value=o)}}let x=null;const F={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:r,height:s,containerHeight:l,scrollbarWidth:i,totalWidth:m(()=>u.value+i.value),rows:m(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:S({size:0,offset:0,space:!1}),right:S({size:300,offset:0,space:!1}),footer:S({size:0,offset:0,space:!1}),left:S({size:300,offset:0,space:!1}),scroll:v,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,c,p){F[o][c]=p}};if(D(A,F),O()>0){let p=function(){o=null,c.classList.remove("hide-scrollbar")},y=function(){if(o===null){if(c.scrollHeight>t.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(p,300)},R=function(M){o!==null&&M==="remove"&&(clearTimeout(o),p()),window[`${M}EventListener`]("resize",y)},o=null;const c=document.body;Q(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),oe(()=>{R("remove")})}return()=>{const o=ee(a.default,[g(ge,{onScroll:z}),g(j,{onResize:Y})]),c=g("div",{class:f.value,style:h.value,ref:e.container===!0?void 0:r,tabindex:-1},o);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(j,{onResize:I}),g("div",{class:"absolute-full",style:b.value},[g("div",{class:"scroll",style:d.value},[c])])]):c}}});const xe=ie({__name:"MainLayout",setup(e){return(a,n)=>{const t=le("router-view");return re(),ae(we,{view:"lHh Lpr lFf"},{default:P(()=>[q(J,{onClick:n[0]||(n[0]=ce(r=>a.$router.push({name:"about"}),["prevent"]))},{default:P(()=>[se("about")]),_:1}),q(ue,null,{default:P(()=>[q(t)]),_:1})]),_:1})}}});export{xe as default};