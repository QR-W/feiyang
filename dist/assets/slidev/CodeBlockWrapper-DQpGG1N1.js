import{w as B,x as E}from"../modules/unplugin-icons-BOPolX5Q.js";import{d as N,t as q,au as I,C as v,a3 as V,y as C,av as $,o as i,b,f as M,A as d,c as k,g as z,i as D,h as K}from"../modules/vue-DqM6j7Au.js";import{c as x,J as R,K as U,L as W,b as J}from"../index-YHcfZvDa.js";import{u as j}from"./context-BkEoK3_d.js";const F=["title"],G=N({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:x.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=j(),o=q(),p=R();I(()=>{a.unregister(p)}),v(()=>{var t;(t=o.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),V(()=>{var h;if(!a||!((h=e.ranges)!=null&&h.length))return;const{start:t,end:s,delta:l}=a.resolve(e.at,e.ranges.length-1);a.register(p,{max:s,delta:l});const r=C(()=>Math.max(0,a.current-t+1)),c=C(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());v(()=>{if(!o.value)return;let u=e.ranges[r.value]??c.value;const m=u==="hide";o.value.classList.toggle(U,m),m&&(u=e.ranges[r.value+1]??c.value);const f=o.value.querySelector(".shiki"),y=Array.from(f.querySelectorAll("code > .line")),L=y.length;if(W(u,L,e.startLine,n=>[y[n]]),e.maxHeight){const n=Array.from(f.querySelectorAll(".line.highlighted"));n.reduce((_,A)=>A.offsetHeight+_,0)>o.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:g,copy:w}=$();function H(){var s,l;const t=(l=(s=o.value)==null?void 0:s.querySelector(".slidev-code"))==null?void 0:l.textContent;t&&w(t)}return(t,s)=>{const l=B,r=E;return i(),b("div",{ref_key:"el",ref:o,class:D(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:K({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),d(x).codeCopy?(i(),b("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:d(g)?"Copied":"Copy",onClick:s[0]||(s[0]=c=>H())},[d(g)?(i(),k(l,{key:0,class:"p-2 w-8 h-8"})):(i(),k(r,{key:1,class:"p-2 w-8 h-8"}))],8,F)):z("v-if",!0)],6)}}}),Y=J(G,[["__file","/Users/wangqianru/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{Y as _};
