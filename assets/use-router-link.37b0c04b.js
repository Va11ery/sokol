import{a9 as O,P as V,h as q,J as E,c as i,g as K}from"./index.c510ca58.js";const H=e=>O(V(e)),T=e=>O(e);function U(e,t){return e!==void 0&&e()||t}function _(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function J(e,t){return e!==void 0?t.concat(e()):t}function F(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function G(e,t,n,r,u,v){t.key=r+u;const s=q(e,t,n);return u===!0?E(s,v()):s}function Q(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function C(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{C(e,n)}):e.add(t)}function W(e){const t=new Set;return e.forEach(n=>{C(t,n)}),Array.from(t)}function M(e){return e.appContext.config.globalProperties.$router!==void 0}function X(e){return e.isUnmounted===!0||e.isDeactivated===!0}function S(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function $(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function N(e,t){for(const n in t){const r=t[n],u=e[n];if(typeof r=="string"){if(r!==u)return!1}else if(Array.isArray(u)===!1||u.length!==r.length||r.some((v,s)=>v!==u[s]))return!1}return!0}function R(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function w(e,t){return Array.isArray(e)===!0?R(e,t):Array.isArray(t)===!0?R(t,e):e===t}function B(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(w(e[n],t[n])===!1)return!1;return!0}const Y={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Z({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=K(),{props:r,proxy:u,emit:v}=n,s=M(n),g=i(()=>r.disable!==!0&&r.href!==void 0),L=t===!0?i(()=>s===!0&&r.disable!==!0&&g.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):i(()=>s===!0&&g.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),h=i(()=>L.value===!0?A(r.to):null),l=i(()=>h.value!==null),y=i(()=>g.value===!0||l.value===!0),b=i(()=>r.type==="a"||y.value===!0?"a":r.tag||e||"div"),j=i(()=>g.value===!0?{href:r.href,target:r.target}:l.value===!0?{href:h.value.href,target:r.target}:{}),m=i(()=>{if(l.value===!1)return-1;const{matched:a}=h.value,{length:o}=a,c=a[o-1];if(c===void 0)return-1;const f=u.$route.matched;if(f.length===0)return-1;const d=f.findIndex($.bind(null,c));if(d>-1)return d;const P=S(a[o-2]);return o>1&&S(c)===P&&f[f.length-1].path!==P?f.findIndex($.bind(null,a[o-2])):d}),p=i(()=>l.value===!0&&m.value!==-1&&N(u.$route.params,h.value.params)),k=i(()=>p.value===!0&&m.value===u.$route.matched.length-1&&B(u.$route.params,h.value.params)),D=i(()=>l.value===!0?k.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":p.value===!0?` ${r.activeClass}`:"":"");function A(a){try{return u.$router.resolve(a)}catch{}return null}function x(a,{returnRouterError:o,to:c=r.to,replace:f=r.replace}={}){if(r.disable===!0)return a.preventDefault(),Promise.resolve(!1);if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||a.button!==void 0&&a.button!==0||r.target==="_blank")return Promise.resolve(!1);a.preventDefault();const d=u.$router[f===!0?"replace":"push"](c);return o===!0?d:d.then(()=>{}).catch(()=>{})}function I(a){if(l.value===!0){const o=c=>x(a,c);v("click",a,o),a.defaultPrevented!==!0&&o()}else v("click",a)}return{hasRouterLink:l,hasHrefLink:g,hasLink:y,linkTag:b,resolvedLink:h,linkIsActive:p,linkIsExactActive:k,linkClass:D,linkAttrs:j,getLink:A,navigateToRouterLink:x,navigateOnClick:I}}export{J as a,F as b,H as c,X as d,Z as e,_ as f,Q as g,U as h,T as i,W as j,G as k,Y as u,M as v};