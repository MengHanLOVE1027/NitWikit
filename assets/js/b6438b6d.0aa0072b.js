"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[2368],{11343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(86070),s=r(11100),o=r(6767);const i={title:"BDS \u6838\u5fc3",slug:"/bds-core",sidebar_position:3},c="BDS \u6838\u5fc3",l={id:"bds-core/bds-core",title:"BDS \u6838\u5fc3",description:"",source:"@site/docs-bedrock/bds-core/bds-core.md",sourceDirName:"bds-core",slug:"/bds-core",permalink:"/NitWikit/Bedrock/bds-core",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/bds-core.md",tags:[],version:"current",lastUpdatedBy:"\u662f\u5c0f\u80d6\u544026",lastUpdatedAt:1722228188e3,sidebarPosition:3,frontMatter:{title:"BDS \u6838\u5fc3",slug:"/bds-core",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u5668\u7248\u672c\u9009\u62e9",permalink:"/NitWikit/Bedrock/super-basic/version"},next:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/NitWikit/Bedrock/bds-core/preparation/"}},a={},d=[];function u(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"bds-\u6838\u5fc3",children:"BDS \u6838\u5fc3"})}),"\n","\n",(0,n.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},6767:(e,t,r)=>{r.d(t,{A:()=>x});r(30758);var n=r(13526),s=r(40236),o=r(66484),i=r(70013),c=r(8508),l=r(25857),a=r(19808);const d={cardContainer:"cardContainer_sUhM",cardTitle:"cardTitle_pe4y",cardDescription:"cardDescription_aYht"};var u=r(86070);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),o&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(g,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(b,{item:e})},t)))})}},70013:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(30758),s=r(54924);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}},11100:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(30758);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);