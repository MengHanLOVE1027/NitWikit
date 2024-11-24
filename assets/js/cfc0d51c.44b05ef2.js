"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["2044"],{74775:function(t,e,n){n.r(e),n.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>s});var i=JSON.parse('{"id":"contribution/writing-specification/writing-specification","title":"\u683C\u5F0F\u8981\u6C42","description":"\u63D0\u4EA4 PR \u65F6\u5019\u8BF7\u52A1\u5FC5\u6EE1\u8DB3\u4EE5\u4E0B\u8981\u6C42","source":"@site/docs/contribution/writing-specification/writing-specification.md","sourceDirName":"contribution/writing-specification","slug":"/contribution/writing","permalink":"/contribution/writing","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs/contribution/writing-specification/writing-specification.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727731002000,"sidebarPosition":0,"frontMatter":{"sidebar_position":0,"slug":"/contribution/writing"},"sidebar":"tutorialSidebar","previous":{"title":"\u6587\u6863\u8D21\u732E","permalink":"/contribution"},"next":{"title":"\u6807\u9898","permalink":"/contribution/writing-specification/title"}}'),r=n("52676"),o=n("79938"),c=n("22308");let s={sidebar_position:0,slug:"/contribution/writing"},l="\u683C\u5F0F\u8981\u6C42",a={},u=[];function d(t){let e={admonition:"admonition",h1:"h1",header:"header",p:"p",strong:"strong",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u683C\u5F0F\u8981\u6C42",children:"\u683C\u5F0F\u8981\u6C42"})}),"\n",(0,r.jsx)(e.p,{children:"\u63D0\u4EA4 PR \u65F6\u5019\u8BF7\u52A1\u5FC5\u6EE1\u8DB3\u4EE5\u4E0B\u8981\u6C42"}),"\n",(0,r.jsx)(e.admonition,{title:"\u63D0\u793A~",type:"tip",children:(0,r.jsxs)(e.p,{children:["\u82E5\u683C\u5F0F\u4E0D\u89C4\u8303\u4F46\u4E0D\u4F1A\u6216\u4E0D\u60F3\u6392\u7248\u65F6\u8BF7\u5728 PR \u65F6\u63D0\u51FA",(0,r.jsx)(e.strong,{children:"\u6587\u6863\u9700\u6392\u7248"}),")"]})}),"\n","\n",(0,r.jsx)(c.Z,{})]})}function p(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},22308:function(t,e,n){n.d(e,{Z:()=>b});var i=n("52676");n("75271");var r=n("54461"),o=n("57997"),c=n("71894"),s=n("39989"),l=n("55150"),a=n("25813"),u=n("40116");let d={cardContainer:"cardContainer_urtn",cardTitle:"cardTitle_dqpG",cardDescription:"cardDescription_nJRH"};function p(t){let{href:e,children:n}=t;return(0,i.jsx)(c.Z,{href:e,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function f(t){let{href:e,icon:n,title:o,description:c}=t;return(0,i.jsxs)(p,{href:e,children:[(0,i.jsxs)(u.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),c&&(0,i.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function m(t){let{item:e}=t,n=(0,o.LM)(e),r=function(){let{selectMessage:t}=(0,s.c)();return e=>t(e,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,i.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:e.label,description:e.description??r(e.items.length)}):null}function h(t){let{item:e}=t,n=(0,l.Z)(e.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,o.xz)(e.docId??void 0);return(0,i.jsx)(f,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,i.jsx)(h,{item:e});case"category":return(0,i.jsx)(m,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t,n=(0,o.jA)();return(0,i.jsx)(b,{items:n.items,className:e})}function b(t){let{items:e,className:n}=t;if(!e)return(0,i.jsx)(x,{...t});let c=(0,o.MN)(e);return(0,i.jsx)("section",{className:(0,r.Z)("row",n),children:c.map((t,e)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(g,{item:t})},e))})}},39989:function(t,e,n){n.d(e,{c:function(){return l}});var i=n(75271),r=n(74863);let o=["zero","one","two","few","many","other"];function c(t){return o.filter(e=>t.includes(e))}let s={locale:"en",pluralForms:c(["one","other"]),select:t=>1===t?"one":"other"};function l(){let t=function(){let{i18n:{currentLocale:t}}=(0,r.Z)();return(0,i.useMemo)(()=>{try{return function(t){let e=new Intl.PluralRules(t);return{locale:t,pluralForms:c(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".
Docusaurus will fallback to the default (English) implementation.
Error: ${e.message}
`),s}},[t])}();return{selectMessage:(e,n)=>(function(t,e,n){let i=t.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${t}`);let r=n.select(e);return i[Math.min(n.pluralForms.indexOf(r),i.length-1)]})(n,e,t)}}},79938:function(t,e,n){n.d(e,{Z:function(){return s},a:function(){return c}});var i=n(75271);let r={},o=i.createContext(r);function c(t){let e=i.useContext(o);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);