import{Q as b}from"./QBtn.e0f390f3.js";import{l as p,a1 as e,a2 as s,a3 as m,a4 as t,d as u,a5 as v,F as f,Q as x,j as h,a6 as k,a7 as y,S as D,a8 as i}from"./index.cd9bd597.js";var w="/sokol/assets/logo.6757dac0.png";const F=i("div",null,"\u041E\u041E \u0421\u043E\u043A\u043E\u043B",-1),$=p({__name:"AppBar",setup(d){const l=[{text:"\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",icon:"mdi-clock",link:"about"},{text:"\u0423\u0441\u043B\u0443\u0433\u0438",icon:"mdi-account",link:"service"},{text:"\u041A\u043B\u0438\u0435\u043D\u0442\u044B",icon:"mdi-flag",link:"clients"},{text:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",icon:"mdi-flag",link:"teams"},{text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",icon:"mdi-flag",link:"contacts"}];return(r,n)=>{const a=e("v-img"),o=e("v-avatar"),_=e("v-app-bar-title"),B=e("v-list-item-title"),g=e("v-list-item"),E=e("v-list"),A=e("v-app-bar");return s(),m(A,{elevation:0,color:"#3C435C",class:"text-white"},{append:t(()=>[u(E,{density:"compact","bg-color":"#3C435C",class:"d-flex text-white"},{default:t(()=>[(s(),v(f,null,x(l,(c,C)=>u(g,{class:"ms-1",key:C,value:c,link:"",rounded:"",to:{name:c.link}},{default:t(()=>[u(B,null,{default:t(()=>[h(k(c.text),1)]),_:2},1024)]),_:2},1032,["value","to"])),64))]),_:1})]),default:t(()=>[u(b,{class:"flex",style:{cursor:"pointer"},onClick:n[0]||(n[0]=y(c=>r.$router.push({name:"home"}),["prevent"]))},{default:t(()=>[u(o,{size:"65px"},{default:t(()=>[u(a,{alt:"Avatar",src:D(w)},null,8,["src"])]),_:1}),u(_,{class:"app-bar-title d-flex align-center"},{default:t(()=>[F]),_:1})]),_:1})]),_:1})}}}),N={class:"d-flex"},Q=i("div",null,null,-1),V=i("div",{class:"text-h6"},"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F C\u043E\u043A\u043E\u043B",-1),j=p({__name:"TheFooter",setup(d){const l=["\u0423\u0441\u043B\u0443\u0433\u0438","\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"];return(r,n)=>{const a=e("v-btn"),o=e("v-footer");return s(),m(o,{class:"text-center d-flex flex-column justify-space-between"},{default:t(()=>[i("div",N,[(s(),v(f,null,x(l,_=>u(a,{key:_,variant:"text",class:"mx-2",rounded:"xl"},{default:t(()=>[h(k(_),1)]),_:2},1024)),64))]),Q,V]),_:1})}}}),S=p({__name:"MainLayout",setup(d){return(l,r)=>{const n=e("router-view"),a=e("v-main"),o=e("v-app");return s(),m(o,null,{default:t(()=>[u($),u(a,{style:{"min-height":"calc(100vh)"}},{default:t(()=>[u(n)]),_:1}),u(j)]),_:1})}}});export{S as default};
