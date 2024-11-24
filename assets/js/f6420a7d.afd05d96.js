"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["3642"],{69060:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"advance/database/database","title":"\u6570\u636E\u5E93\u76F8\u5173","description":"\u6570\u636E\u5E93\u76F8\u5173","source":"@site/docs/advance/database/database.md","sourceDirName":"advance/database","slug":"/database","permalink":"/database","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/database/database.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727731002000,"sidebarPosition":3,"frontMatter":{"title":"\u6570\u636E\u5E93\u76F8\u5173","slug":"/database","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u81EA\u52A8\u5907\u4EFD\u5B58\u6863","permalink":"/advance/Linux/backup"},"next":{"title":"\u5B89\u88C5","permalink":"/database/install"}}'),a=i("52676"),s=i("79938");let r={title:"\u6570\u636E\u5E93\u76F8\u5173",slug:"/database",sidebar_position:3},d=void 0,l={},o=[{value:"\u6570\u636E\u5E93\u76F8\u5173",id:"\u6570\u636E\u5E93\u76F8\u5173",level:2},{value:"MySQL / MariaDB",id:"mysql--mariadb",level:3},{value:"Redis",id:"redis",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u6570\u636E\u5E93\u76F8\u5173",children:"\u6570\u636E\u5E93\u76F8\u5173"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"\u6570\u636E\u5E93\u597D\u5904\u90FD\u6709\u5565? \u8C01\u8BF4\u5BF9\u4E86\u5C31\u7ED9\u4ED6!"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u6570\u636E\u5E93\u7684\u5907\u4EFD\u7EF4\u62A4\u7B49\u6240\u5360\u7528\u7684\u65F6\u95F4\u8FDC\u6BD4\u5C06\u6574\u4E2A\u670D\u52A1\u5668\u505C\u6B62\u540E\u6253\u5305\u538B\u7F29\u5907\u4EFD\u5FEB\u5F97\u591A;"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u540C\u6837\u7684\u6570\u636E\u91CF\uFF0C MySQL \u6BD4 yml/txt/sqlite \u7B49\u5360\u7528\u4E5F\u5C0F\u5F97\u591A.\u7279\u522B\u662F\u5BF9\u4E8E\u6570\u636E\u91CF\u5927\u7684\u63D2\u4EF6(30Gb \u7684 dynmap \u6587\u4EF6\u4F7F\u7528 MySQL \u540E\u6574\u4E2A\u6570\u636E\u5E93\u5C06\u538B\u7F29\u5230 15Gb);"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u8BFB\u53D6\u901F\u5EA6\u5FEB\uFF0C\u67D0\u4E9B\u63D2\u4EF6\u4F7F\u7528 yml \u50A8\u5B58\u6570\u636E\u65F6\u542F\u52A8\u4E00\u4E2A\u63D2\u4EF6\u751A\u81F3\u9700\u8981 10s+\uFF0C\u6362\u7528 mysql \u540E\u670D\u52A1\u5668\u542F\u52A8\u901F\u5EA6\u5FEB;"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Redis/MySQL \u7B49\u6570\u636E\u5E93\u914D\u5408\u53EF\u8F7B\u677E\u5B8C\u6210\u73A9\u5BB6\u6570\u636E\u540C\u6B65\u7B49;"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5728\u6570\u636E\u91CF\u8F83\u5927\u65F6\u5019\u76F8\u8F83 sqlite \u6709\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u67E5\u8BE2\u65F6\u9700\u8981\u7684\u65F6\u95F4\u77ED\uFF0C\u7279\u522B\u662F\u67D0\u4E9B\u7ECF\u6D4E\u63D2\u4EF6\u4ED8\u6B3E\u65F6\u907F\u514D\u5361\u987F."}),"\n"]}),"\n"]})]}),"\n",(0,a.jsx)(n.h3,{id:"mysql--mariadb",children:"MySQL / MariaDB"}),"\n",(0,a.jsx)(n.p,{children:"MariaDB \u662F\u8457\u540D\u7684 MySQL \u5206\u53C9\uFF0C\u53EA\u662F\u670D\u52A1\u5668\u8150\u7AF9\u7684\u8BDD\uFF0C\u4F60\u53EA\u9700\u8981\u77E5\u9053\u8FD9\u4E24\u4E2A\u4E1C\u897F\u5DEE\u4E0D\u591A\u5C31\u597D\u4E86"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"\u5F53 MariaDB Server \u7684\u524D\u8EAB MySQL \u4E8E 2009 \u5E74\u88AB Oracle \u6536\u8D2D\u65F6\uFF0CMySQL \u521B\u59CB\u4EBA Michael \u201CMonty\u201D Widenius \u51FA\u4E8E\u5BF9 Oracle \u7BA1\u7406\u6743\u7684\u62C5\u5FE7\u800C\u5206\u53C9\u4E86\u8BE5\u9879\u76EE\uFF0C\u5E76\u5C06\u65B0\u9879\u76EE\u547D\u540D\u4E3A MariaDB\u3002"}),(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u6765\u81EA ",(0,a.jsx)(n.a,{href:"https://mariadb.org/zh/",children:"https://mariadb.org/zh/"})]}),"\n"]})]}),"\n",(0,a.jsx)(n.h3,{id:"redis",children:"Redis"}),"\n",(0,a.jsx)(n.p,{children:"Redis \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5185\u5B58\u6570\u636E\u5E93\uFF0C\u9075\u5B88 BSD \u534F\u8BAE\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684\u5B58\u50A8\u7CFB\u7EDF\uFF0C\u5E38\u7528\u4E8E\u7F13\u5B58\u3001\u6D88\u606F\u961F\u5217\u3001\u4F1A\u8BDD\u5B58\u50A8\u7B49\u5E94\u7528\u573A\u666F\u3002\u5728\u6E38\u620F\u4E2D\uFF0CRedis \u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u73A9\u5BB6\u7684\u6570\u636E\uFF0C\u5982\u73A9\u5BB6\u7684\u72B6\u6001\u3001\u88C5\u5907\u3001\u6280\u80FD\u7B49\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6E38\u620F\u7684\u6027\u80FD\u548C\u54CD\u5E94\u901F\u5EA6\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return r}});var t=i(75271);let a={},s=t.createContext(a);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);