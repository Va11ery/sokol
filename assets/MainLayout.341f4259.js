import{c as x,h as C,u as M,a as P,b as V,Q as O}from"./QBtn.d6a5f985.js";import{c,h as k,r as E,a1 as W,a2 as z,g as A,l as h,a3 as i,a4 as m,a5 as q,a6 as u,d as n,a7 as D,F as L,Q as w,j as $,a8 as Q,a9 as U,S as G,aa as b}from"./index.1ab7deca.js";var H=x({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const s=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:s.value},C(a.default))}});const S={dark:{type:Boolean,default:null}};function F(e,a){return c(()=>e.dark===null?a.dark.isActive:e.dark)}var J=x({name:"QItem",props:{...S,...M,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:s}){const{proxy:{$q:l}}=A(),o=F(e,l),{hasLink:r,linkAttrs:d,linkClass:g,linkTag:v,navigateOnClick:j}=P(),f=E(null),p=E(null),B=c(()=>e.clickable===!0||r.value===!0||e.tag==="label"),_=c(()=>e.disable!==!0&&B.value===!0),I=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?g.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(_.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),K=c(()=>{if(e.insetLevel===void 0)return null;const t=l.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function N(t){_.value===!0&&(p.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===f.value?p.value.focus():document.activeElement===p.value&&f.value.focus()),j(t))}function R(t){if(_.value===!0&&W(t,13)===!0){z(t),t.qKeyEvent=!0;const y=new MouseEvent("click",t);y.qKeyEvent=!0,f.value.dispatchEvent(y)}s("keyup",t)}function T(){const t=V(a.default,[]);return _.value===!0&&t.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:p})),t}return()=>{const t={ref:f,class:I.value,style:K.value,role:"listitem",onClick:N,onKeyup:R};return _.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,d.value)):B.value===!0&&(t["aria-disabled"]="true"),k(v.value,t,T())}}}),X=x({name:"QList",props:{...S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const s=A(),l=F(e,s.proxy.$q),o=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:o.value},C(a.default))}}),Y="/sokol/assets/logo.6757dac0.png";const Z=b("div",null,"\u041E\u041E \u0421\u043E\u043A\u043E\u043B",-1),ee=h({__name:"AppBar",setup(e){const a=[{text:"\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",icon:"mdi-clock",link:"about"},{text:"\u0423\u0441\u043B\u0443\u0433\u0438",icon:"mdi-account",link:"service"},{text:"\u041A\u043B\u0438\u0435\u043D\u0442\u044B",icon:"mdi-flag",link:"clients"},{text:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",icon:"mdi-flag",link:"teams"},{text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",icon:"mdi-flag",link:"contacts"}];return(s,l)=>{const o=i("v-img"),r=i("v-avatar"),d=i("v-app-bar-title"),g=i("v-app-bar");return m(),q(g,{elevation:0,color:"#3C435C",class:"text-white"},{append:u(()=>[n(X,{bordered:"",padding:"",class:"flex"},{default:u(()=>[(m(),D(L,null,w(a,v=>n(J,{key:v.link,to:{name:v.link},exact:""},{default:u(()=>[n(H,null,{default:u(()=>[$(Q(v.text),1)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})]),default:u(()=>[n(O,{class:"flex",style:{cursor:"pointer"},onClick:l[0]||(l[0]=U(v=>s.$router.push({name:"home"}),["prevent"]))},{default:u(()=>[n(r,{size:"65px"},{default:u(()=>[n(o,{alt:"Avatar",src:G(Y)},null,8,["src"])]),_:1}),n(d,{class:"app-bar-title d-flex align-center"},{default:u(()=>[Z]),_:1})]),_:1})]),_:1})}}}),te={class:"d-flex"},ae=b("div",null,null,-1),ue=b("div",{class:"text-h6"},"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F C\u043E\u043A\u043E\u043B",-1),ne=h({__name:"TheFooter",setup(e){const a=["\u0423\u0441\u043B\u0443\u0433\u0438","\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"];return(s,l)=>{const o=i("v-btn"),r=i("v-footer");return m(),q(r,{class:"text-center d-flex flex-column justify-space-between"},{default:u(()=>[b("div",te,[(m(),D(L,null,w(a,d=>n(o,{key:d,variant:"text",class:"mx-2",rounded:"xl"},{default:u(()=>[$(Q(d),1)]),_:2},1024)),64))]),ae,ue]),_:1})}}}),oe=h({__name:"MainLayout",setup(e){return(a,s)=>{const l=i("router-view"),o=i("v-main"),r=i("v-app");return m(),q(r,null,{default:u(()=>[n(ee),n(o,{style:{"min-height":"calc(100vh)"}},{default:u(()=>[n(l)]),_:1}),n(ne)]),_:1})}}});export{oe as default};
