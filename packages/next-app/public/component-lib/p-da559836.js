let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),c=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?h(null,l):l),o=s)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const c=h(e,null);return c.u=t,r.length>0&&(c.$=r),c},h=(e,t)=>({t:0,h:e,i:t,m:null,$:null,u:null}),d={},m=(e,t,n,l)=>{if(n!==l&&(t.toLowerCase(),"class"===t)){const t=e.classList,s=y(n),o=y(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}},p=/\s/,y=e=>e?e.split(p):[],b=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||a,r=t.u||a;for(l in o)l in r||m(s,l,o[l],void 0);for(l in r)m(s,l,o[l],r[l])},w=(t,n,l)=>{let o,r,i=n.$[l],c=0;if(null!==i.i)o=i.m=s.createTextNode(i.i);else if(o=i.m=s.createElement(i.h),b(null,i),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),i.$)for(c=0;c<i.$.length;++c)r=w(t,i,c),r&&o.appendChild(r);return o},S=(e,n,l,s,o,r)=>{let i,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=w(null,l,o),i&&(s[o].m=i,c.insertBefore(i,n)))},g=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},j=(e,t)=>e.h===t.h,v=(e,t)=>{const n=t.m=e.m,l=e.$,s=t.$,o=t.i;null===o?("slot"===t.h||b(e,t),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,i=t.length-1,c=t[0],u=t[i],a=l.length-1,f=l[0],$=l[a];for(;o<=i&&r<=a;)null==c?c=t[++o]:null==u?u=t[--i]:null==f?f=l[++r]:null==$?$=l[--a]:j(c,f)?(v(c,f),c=t[++o],f=l[++r]):j(u,$)?(v(u,$),u=t[--i],$=l[--a]):j(c,$)?(v(c,$),e.insertBefore(c.m,u.m.nextSibling),c=t[++o],$=l[--a]):j(u,f)?(v(u,f),e.insertBefore(u.m,c.m),u=t[--i],f=l[++r]):(s=w(t&&t[r],n,r),f=l[++r],s&&c.m.parentNode.insertBefore(s,c.m));o>i?S(e,null==l[a+1]?null:l[a+1].m,n,l,r,a):r>a&&g(t,o,i)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),S(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.i!==o&&(n.data=o)},M=(e,t)=>{t&&!e.p&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.p=t)))},k=(e,t)=>{if(e.t|=16,!(4&e.t))return M(e,e.S),K((()=>C(e,t)));e.t|=512},C=(e,t)=>{const n=e.g;return N(void 0,(()=>O(e,n,t)))},O=async(e,t,n)=>{const l=e.j,o=l["s-rc"];n&&(e=>{const t=e.v,n=e.j,l=t.t,o=((e,t)=>{let n=u(t),l=_.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=c.get(e=e.head||e);o||c.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);P(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>x(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},P=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.j,o=n.M||h(null,null),r=(e=>e&&e.h===d)(l)?l:$(null,null,l);t=s.tagName,r.h=null,r.t|=4,n.M=r,r.m=o.m=s.shadowRoot||s,e=s["s-sc"],v(o,r)})(n,l)}catch(e){q(e,n.j)}return null},x=e=>{const t=e.j,n=e.S;64&e.t||(e.t|=64,T(t),e.k(t),n||E()),e.p&&(e.p(),e.p=void 0),512&e.t&&J((()=>k(e,!1))),e.t&=-517},E=()=>{T(s.documentElement),J((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"component-lib"}});return e.dispatchEvent(t),t})(l)))},N=(e,t)=>e&&e.then?e.then(t):t(),T=e=>e.classList.add("hydrated"),A=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>R(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=R(e),o=s.O.get(t),r=s.t,i=s.g;n=((e,t)=>null==e||f(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.O.set(t,n),i&&2==(18&r)&&k(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},H=(e,t={})=>{const n=[],r=t.exclude||[],c=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),h=[];let d,m=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),W(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),m?h.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=R(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){M(t,t.S=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=V(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(A(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){q(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!_.has(t)){const l=()=>{};((e,t,n)=>{let l=_.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,_.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.S,r=()=>k(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return R(this).N}};l.T=e[0],r.includes(s)||c.get(s)||(n.push(s),c.define(s,A(a,l,1)))}))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),m=!1,h.length?h.map((e=>e.connectedCallback())):o.jmp((()=>d=setTimeout(E,30)))},L=new WeakMap,R=e=>L.get(e),U=(e,t)=>L.set(t.g=e,t),W=(e,t)=>{const n={t:0,j:e,v:t,O:new Map};return n.N=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],L.set(e,n)},q=(e,t)=>(0,console.error)(e,t),F=new Map,V=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=F.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(F.set(n,e),e[t])),q)},_=new Map,z=[],B=[],D=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?J(I):o.raf(I))},G=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){q(e)}e.length=0},I=()=>{G(z),G(B),(n=z.length>0)&&o.raf(I)},J=e=>r().then(e),K=D(B,!0);export{d as H,H as b,$ as h,r as p,U as r}