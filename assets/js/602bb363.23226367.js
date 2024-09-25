"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[9377],{77525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(86070),i=n(35396),o=n(8863);const s={title:"\u767b\u5f55",slug:"/Plugins/OtherPlugin/Login",sidebar_position:3},c="\u767b\u5f55\u63d2\u4ef6",l={id:"process/plugin/other/Login/Login",title:"\u767b\u5f55",description:"\u4e00\u822c\u53ea\u6709 \u975e\u6b63\u7248 \u670d\u52a1\u5668\u624d\u9700\u8981\u767b\u5f55\u63d2\u4ef6\u3002",source:"@site/docs-java/process/plugin/other/Login/Login.md",sourceDirName:"process/plugin/other/Login",slug:"/Plugins/OtherPlugin/Login",permalink:"/NitWikit/Java/Plugins/OtherPlugin/Login",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/plugin/other/Login/Login.md",tags:[],version:"current",lastUpdatedBy:"MrVirgil",lastUpdatedAt:1727276143e3,sidebarPosition:3,frontMatter:{title:"\u767b\u5f55",slug:"/Plugins/OtherPlugin/Login",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Invero",permalink:"/NitWikit/Java/process/plugin/other/Menu/Invero"},next:{title:"Authme",permalink:"/NitWikit/Java/process/plugin/other/Login/Authme"}},a={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u767b\u5f55\u63d2\u4ef6",children:"\u767b\u5f55\u63d2\u4ef6"})}),"\n",(0,r.jsxs)(t.p,{children:["\u4e00\u822c\u53ea\u6709 ",(0,r.jsx)(t.strong,{children:"\u975e\u6b63\u7248"})," \u670d\u52a1\u5668\u624d\u9700\u8981\u767b\u5f55\u63d2\u4ef6\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u5e38\u89c1\u7684\u767b\u5f55\u63d2\u4ef6\u6709\uff1a"}),"\n","\n",(0,r.jsx)(o.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8863:(e,t,n)=>{n.d(t,{A:()=>j});n(30758);var r=n(13526),i=n(73438),o=n(18918),s=n(13569),c=n(2958),l=n(67715),a=n(94544);const u={cardContainer:"cardContainer_cwZ3",cardTitle:"cardTitle_fUPq",cardDescription:"cardDescription_P3e0"};var d=n(86070);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:o}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},13569:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(30758),i=n(10346);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},35396:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(30758);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);