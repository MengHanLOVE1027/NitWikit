"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["9978"],{79681:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"super-basic/super-basic","title":"\u8D85\u7EA7\u57FA\u7840\u77E5\u8BC6","description":"\u8003\u8651\u5230\u7B28\u86CB\u6559\u7A0B\u4E3B\u8981\u9762\u5411\u65B0\u624B\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4E86\u89E3\u4F60\u4E86\u89E3\u4EC0\u4E48\u4E0D\u4E86\u89E3\u4EC0\u4E48\u3002","source":"@site/docs-bedrock/super-basic/super-basic.md","sourceDirName":"super-basic","slug":"/super-basic","permalink":"/Bedrock/super-basic","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/super-basic/super-basic.md","tags":[],"version":"current","lastUpdatedBy":"\u9A7F\u7AD9","lastUpdatedAt":1727693356000,"sidebarPosition":2,"frontMatter":{"title":"\u8D85\u7EA7\u57FA\u7840\u77E5\u8BC6","slug":"/super-basic","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u7B28\u86CB\u5F00\u670D\u6559\u7A0B","permalink":"/Bedrock/intro"},"next":{"title":"\u670D\u52A1\u5668\u6838\u5FC3\u9009\u62E9","permalink":"/Bedrock/super-basic/server-core-choose"}}'),i=r("52676"),s=r("79938"),o=r("22308");let l={title:"\u8D85\u7EA7\u57FA\u7840\u77E5\u8BC6",slug:"/super-basic",sidebar_position:2},c="\u8D85\u7EA7\u57FA\u7840\u77E5\u8BC6",a={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u8D85\u7EA7\u57FA\u7840\u77E5\u8BC6",children:"\u8D85\u7EA7\u57FA\u7840\u77E5\u8BC6"})}),"\n",(0,i.jsx)(t.p,{children:"\u8003\u8651\u5230\u7B28\u86CB\u6559\u7A0B\u4E3B\u8981\u9762\u5411\u65B0\u624B\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4E86\u89E3\u4F60\u4E86\u89E3\u4EC0\u4E48\u4E0D\u4E86\u89E3\u4EC0\u4E48\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u672C\u6587\u6863\u6682\u65F6\u5C31\u5F00\u670D\u6700\u91CD\u8981\u7684\u57FA\u7840\u6982\u5FF5\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u5982\u679C\u6709\u4F60\u81EA\u8BA4\u4E3A\u975E\u5E38\u4E86\u89E3\u6216\u8005\u4E0D\u91CD\u8981\u7684\u90E8\u5206\uFF0C"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u8DF3\u8FC7\u4ED6\u5427"}),"\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5728\u540E\u9762\u518D\u6B21\u63D0\u5230\u8FD9\u4E9B\u6982\u5FF5\u7684\u65F6\u5019\u4F1A\u91CD\u65B0\u8DF3\u8F6C\u5230\u5BF9\u5E94\u94FE\u63A5\u3002"]}),"\n","\n",(0,i.jsx)(o.Z,{})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},22308:function(e,t,r){r.d(t,{Z:()=>b});var n=r("52676");r("75271");var i=r("54461"),s=r("57997"),o=r("71894"),l=r("39989"),c=r("55150"),a=r("25813"),u=r("40116");let d={cardContainer:"cardContainer_urtn",cardTitle:"cardTitle_dqpG",cardDescription:"cardDescription_nJRH"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:s,description:o}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),o&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e,r=(0,s.LM)(t),i=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function m(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,s.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(m,{item:t});case"category":return(0,n.jsx)(h,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,s.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let o=(0,s.MN)(t);return(0,n.jsx)("section",{className:(0,i.Z)("row",r),children:o.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}},39989:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(75271),i=r(74863);let s=["zero","one","two","few","many","other"];function o(e){return s.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let i=r.select(t);return n[Math.min(r.pluralForms.indexOf(i),n.length-1)]})(r,t,e)}}},79938:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return o}});var n=r(75271);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);