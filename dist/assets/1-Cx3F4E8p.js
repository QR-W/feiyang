import{i as p}from"./modules/unplugin-icons-BOPolX5Q.js";import{d as _,y as m,o as c,b as f,e as r,f as v,h,c as g,k as y,$ as b,l as k,q as x,s as w,A as n}from"./modules/vue-DqM6j7Au.js";import{u as d,p as $,f as B}from"./slidev/context-BkEoK3_d.js";import{b as u,A as i}from"./index-YHcfZvDa.js";import"./modules/shiki-BjLwEkPr.js";function l(e){return e.startsWith("/")?"/"+e.slice(1):e}function C(e,s=!1){const o=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const P={class:"my-auto w-full"},S=_({__name:"cover",props:{background:{default:""}},setup(e){d();const s=e,o=m(()=>C(s.background,!0));return(t,a)=>(c(),f("div",{class:"slidev-layout cover",style:h(o.value)},[r("div",P,[v(t.$slots,"default")])],4))}}),V=u(S,[["__file","/Users/wangqianru/slidev/node_modules/slidev-theme-dracula/layouts/cover.vue"]]),z=r("h1",null,"Vue快速入门",-1),A=r("p",null,"研发部第三次例会",-1),N={class:"pt-12"},q={__name:"1",setup(e){return $(i),d(),(s,o)=>{const t=p;return c(),g(V,x(w(n(B)(n(i),0))),{default:y(()=>[z,A,r("div",N,[r("span",{onClick:o[0]||(o[0]=(...a)=>s.next&&s.next(...a)),class:"px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10"},[b(" Press Space for next page "),k(t,{class:"inline"})])])]),_:1},16)}}},E=u(q,[["__file","/@slidev/slides/1.md"]]);export{E as default};
