"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6300"],{71292:function(e,d,n){n.r(d),n.d(d,{metadata:()=>s,contentTitle:()=>l,default:()=>p,assets:()=>t,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"process/plugin/more/plugin-signature-file","title":"\u7279\u5F81\u6587\u4EF6","description":"\u7528\u89E3\u538B\u7F29\u8F6F\u4EF6\u6253\u5F00\u63D2\u4EF6\u7684jar\u6587\u4EF6\u5C31\u53EF\u4EE5\u770B\u5230 plugin.yml\uFF1A","source":"@site/docs-java/process/plugin/more/plugin-signature-file.md","sourceDirName":"process/plugin/more","slug":"/process/plugin/more/plugin-signature-file","permalink":"/Java/process/plugin/more/plugin-signature-file","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/plugin/more/plugin-signature-file.md","tags":[],"version":"current","lastUpdatedBy":"\u201Cpostyizhan\u201D","lastUpdatedAt":1730488911000,"sidebarPosition":3,"frontMatter":{"title":"\u7279\u5F81\u6587\u4EF6","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u6C49\u5316\u63D2\u4EF6","permalink":"/Java/process/plugin/more/plugin-config"},"next":{"title":"\u63D2\u4EF6\u7F29\u5199","permalink":"/Java/process/plugin/more/plugin-abbreviation"}}'),i=n("52676"),r=n("79938");let c={title:"\u7279\u5F81\u6587\u4EF6",sidebar_position:3},l="plugin.yml",t={},o=[{value:"\u5E38\u89C1\u7684\u952E",id:"\u5E38\u89C1\u7684\u952E",level:2},{value:"<code>name</code>",id:"name",level:2},{value:"<code>version</code>",id:"version",level:2},{value:"<code>main</code>",id:"main",level:2},{value:"<code>description</code>",id:"description",level:2},{value:"<code>authors</code>",id:"authors",level:2},{value:"<code>contributors</code>",id:"contributors",level:2},{value:"<code>website</code>",id:"website",level:2},{value:"<code>api-version</code>",id:"api-version",level:2},{value:"<code>load</code>",id:"load",level:2},{value:"<code>prefix</code>",id:"prefix",level:2},{value:"<code>libraries</code>",id:"libraries",level:2},{value:"<code>permissions</code>",id:"permissions",level:2},{value:"<code>default-permission</code>",id:"default-permission",level:2},{value:"<code>commands</code>",id:"commands",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"<code>depend</code>",id:"depend",level:3},{value:"<code>softdepend</code>",id:"softdepend",level:3},{value:"<code>loadbefore</code>",id:"loadbefore",level:3},{value:"<code>probides</code>",id:"probides",level:3},{value:"<code>folia-supported</code>",id:"folia-supported",level:2}];function a(e){let d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.header,{children:(0,i.jsx)(d.h1,{id:"pluginyml",children:"plugin.yml"})}),"\n",(0,i.jsxs)(d.p,{children:["\u7528\u89E3\u538B\u7F29\u8F6F\u4EF6\u6253\u5F00\u63D2\u4EF6\u7684jar\u6587\u4EF6\u5C31\u53EF\u4EE5\u770B\u5230 ",(0,i.jsx)(d.code,{children:"plugin.yml"}),"\uFF1A"]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(45059).Z+"",width:"499",height:"246"})}),"\n",(0,i.jsx)(d.p,{children:"\u7528\u6587\u672C\u7F16\u8F91\u5668\u53EF\u4EE5\u6253\u5F00\u5B83\uFF1A"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(68763).Z+"",width:"890",height:"789"})}),"\n",(0,i.jsxs)(d.p,{children:["\u5176\u5B9E\u53EA\u6709 ",(0,i.jsx)(d.code,{children:"name"})," \u548C ",(0,i.jsx)(d.code,{children:"main"})," \u662F\u5FC5\u586B\u7684\uFF0C\u5176\u4ED6\u53EF\u5199\u53EF\u4E0D\u5199\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:["\u6BD4\u5982\u4E00\u4E2A\u63D2\u4EF6\u6709\u63D0\u4F9B\u547D\u4EE4\uFF0C\u4F46\u5B83\u4E0D\u5728 ",(0,i.jsx)(d.code,{children:"plugin.yml"})," \u4E2D\u5199 ",(0,i.jsx)(d.code,{children:"commands"})," \u4E5F\u662F\u5F88\u5E38\u89C1\u7684\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u5E38\u89C1\u7684\u952E",children:"\u5E38\u89C1\u7684\u952E"}),"\n",(0,i.jsx)(d.admonition,{type:"tip",children:(0,i.jsx)(d.p,{children:"\u5176\u5B9E\u8FD9\u91CC\u9762\u5199\u4EC0\u4E48\u90FD\u53EF\u4EE5\uFF0C\u4F46\u591A\u6570\u5C31\u90A3\u4E48\u51E0\u6837..."})}),"\n",(0,i.jsx)(d.p,{children:"\u4E0B\u9762\u662F\u5E38\u89C1\u7684\u4E00\u4E9B\u952E\u503C\uFF1A"}),"\n",(0,i.jsx)(d.h2,{id:"name",children:(0,i.jsx)(d.code,{children:"name"})}),"\n",(0,i.jsxs)(d.p,{children:["\u63D2\u4EF6\u7684\u540D\u5B57\uFF0C\u4E5F\u662F\u4F1A\u5728\u63D2\u4EF6\u5217\u8868(",(0,i.jsx)(d.code,{children:"/pl"}),")\u548C\u65E5\u5FD7\u4E2D\u8F93\u51FA\u7684\u4FE1\u606F\u4E2D\u663E\u793A\u7684\u63D2\u4EF6\u540D\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"version",children:(0,i.jsx)(d.code,{children:"version"})}),"\n",(0,i.jsxs)(d.p,{children:["\u63D2\u4EF6\u7248\u672C\uFF0C\u663E\u793A\u5728 ",(0,i.jsx)(d.code,{children:"/version \u63D2\u4EF6\u540D"})," \u4E2D\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"main",children:(0,i.jsx)(d.code,{children:"main"})}),"\n",(0,i.jsx)(d.p,{children:"\u63D2\u4EF6\u4E3B\u7C7B\uFF0C\u52A0\u8F7D\u63D2\u4EF6\u65F6\u8FD0\u884C\u7684\u7C7B\u7684\u540D\u79F0\uFF0C\u7C7B\u4F3C\u6B63\u5E38\u7A0B\u5E8F\u4E2D\u7684 main \u51FD\u6570\uFF0C\u670D\u4E3B\u4E0D\u7528\u7BA1\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"description",children:(0,i.jsx)(d.code,{children:"description"})}),"\n",(0,i.jsxs)(d.p,{children:["\u7B80\u77ED\u63CF\u8FF0\u63D2\u4EF6\u7684\u4F5C\u7528\uFF0C\u4F1A\u5728 ",(0,i.jsx)(d.code,{children:"/pl"})," \u547D\u4EE4\u4E2D\u9F20\u6807\u60AC\u6D6E\u5728\u63D2\u4EF6\u540D\u79F0\u4E0A\u65F6\u663E\u793A\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"authors",children:(0,i.jsx)(d.code,{children:"authors"})}),"\n",(0,i.jsxs)(d.p,{children:["\u63D2\u4EF6\u4F5C\u8005\uFF0C\u663E\u793A\u5728 ",(0,i.jsx)(d.code,{children:"/version \u63D2\u4EF6\u540D"})," \u4E2D\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"contributors",children:(0,i.jsx)(d.code,{children:"contributors"})}),"\n",(0,i.jsx)(d.p,{children:"\u8D21\u732E\u8005\uFF0C\u6307\u975E\u4F5C\u8005\u4F46\u4E3A\u63D2\u4EF6\u8D21\u732E\u4E86\u4EE3\u7801\u7684\u4EBA\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"website",children:(0,i.jsx)(d.code,{children:"website"})}),"\n",(0,i.jsxs)(d.p,{children:["\u63D2\u4EF6\u76F8\u5173\u7684\u7F51\u7AD9\uFF0C\u663E\u793A\u5728 ",(0,i.jsx)(d.code,{children:"/version \u63D2\u4EF6\u540D"})," \u4E2D\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"api-version",children:(0,i.jsx)(d.code,{children:"api-version"})}),"\n",(0,i.jsx)(d.p,{children:"\u63D2\u4EF6\u7F16\u8BD1\u65F6\u4F7F\u7528\u7684 API \u7248\u672C\uFF0C\u5F71\u54CD\u7740 BukkitAPI \u5BF9\u63D2\u4EF6\u63D0\u4F9B\u7684\u517C\u5BB9\u6027\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"load",children:(0,i.jsx)(d.code,{children:"load"})}),"\n",(0,i.jsxs)(d.p,{children:["\u8FD9\u544A\u8BC9\u670D\u52A1\u5668\u4F55\u65F6\u52A0\u8F7D\u63D2\u4EF6\u3002\u5B83\u53EF\u4EE5\u662F ",(0,i.jsx)(d.code,{children:"STARTUP"})," \u6216 ",(0,i.jsx)(d.code,{children:"POSTWORLD"})," \u3002 \u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u9ED8\u8BA4\u4E3A ",(0,i.jsx)(d.code,{children:"POSTWORLD"}),"\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"prefix",children:(0,i.jsx)(d.code,{children:"prefix"})}),"\n",(0,i.jsx)(d.p,{children:"\u5728\u670D\u52A1\u5668\u65E5\u5FD7\u4E2D\u663E\u793A\u7684\u524D\u7F00\uFF0C\u6709\u522B\u4E8E\u63D2\u4EF6\u540D\u79F0\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"libraries",children:(0,i.jsx)(d.code,{children:"libraries"})}),"\n",(0,i.jsx)(d.p,{children:"\u63D2\u4EF6\u7684\u4F9D\u8D56\u5E93\u8868\uFF0C\u4E0D\u8FC7\u8FD9\u5E76\u4E0D\u662F\u524D\u7F6E\u63D2\u4EF6\u7684\u610F\u601D\uFF0C\u800C\u662F\u63D2\u4EF6\u5F00\u53D1\u65F6\u7528\u5230\u7684\u4F9D\u8D56\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"permissions",children:(0,i.jsx)(d.code,{children:"permissions"})}),"\n",(0,i.jsx)(d.p,{children:"\u63D2\u4EF6\u6743\u9650\u76F8\u5173\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"default-permission",children:(0,i.jsx)(d.code,{children:"default-permission"})}),"\n",(0,i.jsx)(d.p,{children:"\u9ED8\u8BA4\u6743\u9650\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"commands",children:(0,i.jsx)(d.code,{children:"commands"})}),"\n",(0,i.jsx)(d.p,{children:"\u63D2\u4EF6\u63D0\u4F9B\u7684\u547D\u4EE4\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.a,{href:"https://docs.papermc.io/paper/dev/plugin-yml#dependencies",children:"\u4F9D\u8D56\u5173\u7CFB"}),"\u3002"]}),"\n",(0,i.jsx)(d.h3,{id:"depend",children:(0,i.jsx)(d.code,{children:"depend"})}),"\n",(0,i.jsx)(d.p,{children:"\u786C\u4F9D\u8D56\uFF0C\u5FC5\u987B\u5B89\u88C5\u3002"}),"\n",(0,i.jsx)(d.h3,{id:"softdepend",children:(0,i.jsx)(d.code,{children:"softdepend"})}),"\n",(0,i.jsx)(d.p,{children:"\u8F6F\u4F9D\u8D56\uFF0C\u5373\u4E0D\u5FC5\u987B\u88C5\u7684\u4F9D\u8D56\u3002"}),"\n",(0,i.jsx)(d.h3,{id:"loadbefore",children:(0,i.jsx)(d.code,{children:"loadbefore"})}),"\n",(0,i.jsx)(d.p,{children:"\u5728\u6B64\u5217\u8868\u4E2D\u7684\u63D2\u4EF6\u52A0\u8F7D\u524D\u52A0\u8F7D\u672C\u63D2\u4EF6\u3002"}),"\n",(0,i.jsx)(d.h3,{id:"probides",children:(0,i.jsx)(d.code,{children:"probides"})}),"\n",(0,i.jsx)(d.p,{children:"\u544A\u8BC9\u670D\u52A1\u5668\u672C\u63D2\u4EF6\u4F1A\u63D0\u4F9B\u54EA\u4E9B\u5E93\u6216\u529F\u80FD\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"folia-supported",children:(0,i.jsx)(d.code,{children:"folia-supported"})}),"\n",(0,i.jsxs)(d.p,{children:["\u5F53\u6B64\u9879\u4E3A ",(0,i.jsx)(d.code,{children:"true"})," \u65F6\uFF0CFolia \u7AEF\u624D\u4F1A\u5C1D\u8BD5\u52A0\u8F7D\u6B64\u63D2\u4EF6\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:["\u5982\u679C\u63D2\u4EF6\u7684 ",(0,i.jsx)(d.code,{children:"plugin.yml"})," \u91CC\u6CA1\u6709\u6B64\u9879\uFF0C\u4F60\u53EF\u4EE5\u8BD5\u7740\u624B\u52A8\u6DFB\u52A0\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-yaml",children:"folia-supported: true\n"})}),"\n",(0,i.jsxs)(d.admonition,{type:"danger",children:[(0,i.jsx)(d.p,{children:"Folia \u7AEF\u5BF9 Bukkit API \u7684\u4FEE\u6539\u662F\u7834\u574F\u6027\u7684\uFF0C\u4F60\u624B\u52A8\u6DFB\u52A0\u800C\u4E0D\u662F\u63D2\u4EF6\u5F00\u53D1\u8005\u53BB\u517C\u5BB9\uFF0C\u901A\u5E38\u52A0\u8F7D\u4E86\u4E5F\u662F\u4E0D\u53EF\u7528\u7684\u3002"}),(0,i.jsx)(d.p,{children:"\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u8981\u5F00\u542F\u6B64\u9879 Folia \u7AEF\u624D\u4F1A\u52A0\u8F7D\u8BE5\u63D2\u4EF6\u3002"})]}),"\n",(0,i.jsx)(d.h1,{id:"\u53C2\u8003",children:"\u53C2\u8003"}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.a,{href:"https://docs.papermc.io/paper/dev/plugin-yml",children:"https://docs.papermc.io/paper/dev/plugin-yml"})}),"\n"]})]})}function p(e={}){let{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},68763:function(e,d,n){n.d(d,{Z:function(){return s}});let s=n.p+"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},45059:function(e,d,n){n.d(d,{Z:function(){return s}});let s="data:image/png;base64,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"},79938:function(e,d,n){n.d(d,{Z:function(){return l},a:function(){return c}});var s=n(75271);let i={},r=s.createContext(i);function c(e){let d=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);