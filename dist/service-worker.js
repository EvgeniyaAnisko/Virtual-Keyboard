if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>s(e,t),d={module:{uri:t},exports:o,require:f};i[t]=Promise.all(n.map((e=>d[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"5b31fdad6ab41c9d0ab8bfbec2db8091"},{url:"main.css",revision:"ea222919b4618016b1f4088471740937"},{url:"main.js",revision:"76e31f1f1203522f9eb5687f90215e78"}],{})}));
