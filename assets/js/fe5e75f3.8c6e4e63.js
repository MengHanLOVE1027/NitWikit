"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["5007"],{8053:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>c});var n=JSON.parse('{"id":"pnx-core/pnx-core","title":"PNX \u6838\u5FC3","description":"","source":"@site/docs-bedrock/pnx-core/pnx-core.md","sourceDirName":"pnx-core","slug":"/pnx-core","permalink":"/Bedrock/pnx-core","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/pnx-core/pnx-core.md","tags":[],"version":"current","lastUpdatedBy":"\u662F\u5C0F\u80D6\u544026","lastUpdatedAt":1722228188000,"sidebarPosition":5,"frontMatter":{"title":"PNX \u6838\u5FC3","slug":"/pnx-core","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"TODO","permalink":"/Bedrock/nukkit-core/preparation/todo"},"next":{"title":"\u51C6\u5907\u5DE5\u4F5C","permalink":"/Bedrock/pnx-core/preparation/"}}'),o=r("52676"),i=r("79938"),l=r("22308");let c={title:"PNX \u6838\u5FC3",slug:"/pnx-core",sidebar_position:5},s="PNX \u6838\u5FC3",a={},u=[];function d(e){let t={h1:"h1",header:"header",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"pnx-\u6838\u5FC3",children:"PNX \u6838\u5FC3"})}),"\n","\n",(0,o.jsx)(l.Z,{})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},22308:function(e,t,r){r.d(t,{Z:()=>j});var n=r("52676");r("75271");var o=r("54461"),i=r("57997"),l=r("71894"),c=r("39989"),s=r("55150"),a=r("25813"),u=r("40116");let d={cardContainer:"cardContainer_urtn",cardTitle:"cardTitle_dqpG",cardDescription:"cardDescription_nJRH"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(l.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:i,description:l}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),l&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function m(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let l=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:l.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}},39989:function(e,t,r){r.d(t,{c:function(){return s}});var n=r(75271),o=r(74863);let i=["zero","one","two","few","many","other"];function l(e){return i.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},79938:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return l}});var n=r(75271);let o={},i=n.createContext(o);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);