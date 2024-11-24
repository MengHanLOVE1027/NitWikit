"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["7441"],{14879:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>c});var n=JSON.parse('{"id":"nukkit-core/nukkit-core","title":"Nukkit \u6838\u5FC3","description":"","source":"@site/docs-bedrock/nukkit-core/nukkit-core.md","sourceDirName":"nukkit-core","slug":"/nukkit-core","permalink":"/Bedrock/nukkit-core","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/nukkit-core/nukkit-core.md","tags":[],"version":"current","lastUpdatedBy":"\u662F\u5C0F\u80D6\u544026","lastUpdatedAt":1722228188000,"sidebarPosition":4,"frontMatter":{"title":"Nukkit \u6838\u5FC3","slug":"/nukkit-core","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B","permalink":"/Bedrock/bds-core/process/LiteLoaderBDS/plugins"},"next":{"title":"\u51C6\u5907\u5DE5\u4F5C","permalink":"/Bedrock/nukkit-core/preparation/"}}'),i=r("52676"),o=r("79938"),l=r("22308");let c={title:"Nukkit \u6838\u5FC3",slug:"/nukkit-core",sidebar_position:4},s="Nukkit \u6838\u5FC3",a={},u=[];function d(e){let t={h1:"h1",header:"header",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"nukkit-\u6838\u5FC3",children:"Nukkit \u6838\u5FC3"})}),"\n","\n",(0,i.jsx)(l.Z,{})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},22308:function(e,t,r){r.d(t,{Z:()=>x});var n=r("52676");r("75271");var i=r("54461"),o=r("57997"),l=r("71894"),c=r("39989"),s=r("55150"),a=r("25813"),u=r("40116");let d={cardContainer:"cardContainer_urtn",cardTitle:"cardTitle_dqpG",cardDescription:"cardDescription_nJRH"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(l.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:l}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),l&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function m(e){let{item:t}=e,r=(0,o.LM)(t),i=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function k(e){let{item:t}=e,r=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,o.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(k,{item:t});case"category":return(0,n.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,o.jA)();return(0,n.jsx)(x,{items:r.items,className:t})}function x(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let l=(0,o.MN)(t);return(0,n.jsx)("section",{className:(0,i.Z)("row",r),children:l.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},39989:function(e,t,r){r.d(t,{c:function(){return s}});var n=r(75271),i=r(74863);let o=["zero","one","two","few","many","other"];function l(e){return o.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let i=r.select(t);return n[Math.min(r.pluralForms.indexOf(i),n.length-1)]})(r,t,e)}}},79938:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return l}});var n=r(75271);let i={},o=n.createContext(i);function l(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);