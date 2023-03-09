import{c as V,g as Z,Q as G}from"./QBtn.28c48acf.js";import{c as C,h as J,a as ee}from"./render.5c4d20ce.js";import{i as te,U as E,s as D,c as g,h as m,V as U,W as ne,g as $,w as O,o as L,m as Q,X,Y as H,r as w,Z as Y,y as k,q as S,a as oe,_ as ie,$ as le,a0 as re,a1 as ae,a2 as P,d as _,j as se,a3 as ce}from"./index.b1839742.js";var ue=C({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:n}}=$(),t=te(U,E);if(t===E)return console.error("QPageContainer needs to be child of QLayout"),E;D(ne,!0);const a=g(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>m("div",{class:"q-page-container",style:a.value},J(r.default))}});const de=[null,document,document.body,document.scrollingElement,document.documentElement];function fe(e,r){let n=Z(r);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return de.includes(n)?window:n}function ve(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function he(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let T;function q(){if(T!==void 0)return T;const e=document.createElement("p"),r=document.createElement("div");V(e,{width:"100%",height:"200px"}),V(r,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),r.appendChild(e),document.body.appendChild(r);const n=e.offsetWidth;r.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=r.clientWidth),r.remove(),T=n-t,T}const{passive:B}=H,ge=["both","horizontal","vertical"];var me=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ge.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,a,s;O(()=>e.scrollTarget,()=>{l(),v()});function u(){t!==null&&t();const h=Math.max(0,ve(a)),b=he(a),d={top:h-n.position.top,left:b-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const z=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:h,left:b},n.directionChanged=n.direction!==z,n.delta=d,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),r("scroll",{...n})}function v(){a=fe(s,e.scrollTarget),a.addEventListener("scroll",i,B),i(!0)}function l(){a!==void 0&&(a.removeEventListener("scroll",i,B),a=void 0)}function i(h){if(h===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[b,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{d(b),t=null}}}const{proxy:f}=$();return O(()=>f.$q.lang.rtl,u),L(()=>{s=f.$el.parentNode,v()}),Q(()=>{t!==null&&t(),l()}),Object.assign(f,{trigger:i,getPosition:()=>n}),X}});function pe(){const e=w(!Y.value);return e.value===!1&&L(()=>{e.value=!0}),e}const A=typeof ResizeObserver!="undefined",N=A===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var j=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let n=null,t,a={width:-1,height:-1};function s(l){l===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:l,offsetHeight:i}=t;(l!==a.width||i!==a.height)&&(a={width:l,height:i},r("resize",a))}}const{proxy:v}=$();if(A===!0){let l;const i=f=>{t=v.$el.parentNode,t?(l=new ResizeObserver(s),l.observe(t),u()):f!==!0&&k(()=>{i(!0)})};return L(()=>{i()}),Q(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():t&&l.unobserve(t))}),X}else{let f=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,H.passive),i=void 0)},h=function(){f(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,H.passive),u())};const l=pe();let i;return L(()=>{k(()=>{t=v.$el,t&&h()})}),Q(f),v.trigger=s,()=>{if(l.value===!0)return m("object",{style:N.style,tabindex:-1,type:"text/html",data:N.url,"aria-hidden":"true",onLoad:h})}}}}),we=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:n}){const{proxy:{$q:t}}=$(),a=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),v=w({position:0,direction:"down",inflectionPoint:0}),l=w(0),i=w(Y.value===!0?0:q()),f=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=g(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),b=g(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=g(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(o){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};v.value=c,e.onScroll!==void 0&&n("scroll",c)}}function K(o){const{height:c,width:p}=o;let y=!1;s.value!==c&&(y=!0,s.value=c,e.onScrollHeight!==void 0&&n("scrollHeight",c),W()),u.value!==p&&(y=!0,u.value=p),y===!0&&e.onResize!==void 0&&n("resize",o)}function I({height:o}){l.value!==o&&(l.value=o,W())}function W(){if(e.container===!0){const o=s.value>l.value?q():0;i.value!==o&&(i.value=o)}}let x=null;const F={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:a,height:s,containerHeight:l,scrollbarWidth:i,totalWidth:g(()=>u.value+i.value),rows:g(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:S({size:0,offset:0,space:!1}),right:S({size:300,offset:0,space:!1}),footer:S({size:0,offset:0,space:!1}),left:S({size:300,offset:0,space:!1}),scroll:v,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,c,p){F[o][c]=p}};if(D(U,F),q()>0){let p=function(){o=null,c.classList.remove("hide-scrollbar")},y=function(){if(o===null){if(c.scrollHeight>t.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(p,300)},R=function(M){o!==null&&M==="remove"&&(clearTimeout(o),p()),window[`${M}EventListener`]("resize",y)},o=null;const c=document.body;O(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),oe(()=>{R("remove")})}return()=>{const o=ee(r.default,[m(me,{onScroll:z}),m(j,{onResize:K})]),c=m("div",{class:f.value,style:h.value,ref:e.container===!0?void 0:a,tabindex:-1},o);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:a},[m(j,{onResize:I}),m("div",{class:"absolute-full",style:b.value},[m("div",{class:"scroll",style:d.value},[c])])]):c}}});const be={};function ye(e,r){const n=le("router-view");return re(),ae(we,{view:"lHh Lpr lFf"},{default:P(()=>[_(G,{onClick:r[0]||(r[0]=ce(t=>e.$router.push({name:"about"}),["prevent"]))},{default:P(()=>[se("about")]),_:1}),_(ue,null,{default:P(()=>[_(n)]),_:1})]),_:1})}var Te=ie(be,[["render",ye]]);export{Te as default};
