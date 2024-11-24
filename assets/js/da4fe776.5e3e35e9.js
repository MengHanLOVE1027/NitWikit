"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["1686"],{75156:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"process/maintenance/how-to-prevent-crash-server","title":"\u5982\u4F55\u9884\u9632\u5D29\u670D","description":"\u4F1A\u6709\u90E8\u5206\u4E0D\u6000\u597D\u610F\u7684\u4EBA\u53BB\u6D4B\u8BD5\u670D\u52A1\u5668\u7684\u5D29\u6E83\u6F0F\u6D1E\u3002","source":"@site/docs/process/maintenance/how-to-prevent-crash-server.md","sourceDirName":"process/maintenance","slug":"/process/maintenance/how-to-prevent-crash-server","permalink":"/process/maintenance/how-to-prevent-crash-server","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs/process/maintenance/how-to-prevent-crash-server.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727754229000,"frontMatter":{"title":"\u5982\u4F55\u9884\u9632\u5D29\u670D"},"sidebar":"tutorialSidebar","previous":{"title":"\u5982\u4F55\u6392\u9664\u6709\u95EE\u9898\u7684\u63D2\u4EF6","permalink":"/process/maintenance/how-to-troubleshoot-problematic-plugins"},"next":{"title":"\u8FDB\u9636\u6559\u7A0B","permalink":"/advance"}}'),i=t("52676"),l=t("79938");let s={title:"\u5982\u4F55\u9884\u9632\u5D29\u670D"},o="\u5982\u4F55\u9884\u9632\u5D29\u670D\u95EE\u9898",c={},a=[{value:"\u5206\u7C7B",id:"\u5206\u7C7B",level:2},{value:"\u63D2\u4EF6\u7C7B",id:"\u63D2\u4EF6\u7C7B",level:3},{value:"\u63A8\u8350\u6DFB\u52A0\u9ED1\u540D\u5355\u7684\u6307\u4EE4",id:"\u63A8\u8350\u6DFB\u52A0\u9ED1\u540D\u5355\u7684\u6307\u4EE4",level:4},{value:"\u8FD0\u884C\u73AF\u5883\u7C7B",id:"\u8FD0\u884C\u73AF\u5883\u7C7B",level:3},{value:"\u53D1\u5305\u7C7B/\u7269\u54C1\u7C7B(\u4E5F\u79F0\u539F\u7248\u6F0F\u6D1E)",id:"\u53D1\u5305\u7C7B\u7269\u54C1\u7C7B\u4E5F\u79F0\u539F\u7248\u6F0F\u6D1E",level:3}];function d(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u5982\u4F55\u9884\u9632\u5D29\u670D\u95EE\u9898",children:"\u5982\u4F55\u9884\u9632\u5D29\u670D\u95EE\u9898"})}),"\n",(0,i.jsx)(n.p,{children:"\u4F1A\u6709\u90E8\u5206\u4E0D\u6000\u597D\u610F\u7684\u4EBA\u53BB\u6D4B\u8BD5\u670D\u52A1\u5668\u7684\u5D29\u6E83\u6F0F\u6D1E\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u522B\u62C5\u5FC3\uFF0C\u957F\u671F\u4FDD\u6301\u7EF4\u62A4\u7684\u63D2\u4EF6\u4E00\u822C\u4E0D\u4F1A\u6709\u5D29\u6E83\u7684\u6F0F\u6D1E\uFF0C\u4F46\u662F\u6211\u4EEC\u4E5F\u8981\u6709\u9884\u9632\u7684\u51C6\u5907\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5206\u7C7B",children:"\u5206\u7C7B"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u9762\u5C06\u5217\u51FA\u51E0\u79CD\u5E38\u89C1\u7684 Minecraft \u670D\u52A1\u5668\u5BB9\u6613\u906D\u53D7\u7684\u5D29\u6E83\u7C7B\u578B\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u63D2\u4EF6\u7C7B",children:"\u63D2\u4EF6\u7C7B"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u670D\u52A1\u5668\u4E0A\u5B89\u88C5\u4E86\u8001\u7248\u672C/\u672A\u53D1\u73B0\u6F0F\u6D1E\u7684\u63D2\u4EF6\u53EF\u80FD\u5BFC\u81F4\u63D2\u4EF6\u56E0bug\u81EA\u884C\u5D29\u6E83\uFF0C\u751A\u81F3\u751A\u81F3\u6709\u6F0F\u6D1E\u88AB\u653B\u51FB\u8005\u5229\u7528\u3002\u8FD9\u7C7B\u901A\u5E38\u9700\u8981\u670D\u4E3B\u505A\u597D\u76F8\u5E94\u7684\u63AA\u65BD\u9884\u9632\u3002\u9996\u5148\u5728\u9009\u7528\u63D2\u4EF6\u65F6\u5C31\u5E94\u6CE8\u610F\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u521D\u6B21\u5B89\u88C5\u65F6\u5C31\u5C3D\u53EF\u80FD\u89E3\u51B3 WARN \u548C ERROR\uFF0C\u5B9E\u5728\u4E0D\u884C\u5C31\u7ACB\u523B\u6362\u63D2\u4EF6"}),"\n",(0,i.jsx)(n.li,{children:"\u5C11\u7528\uFF0C\u6700\u597D\u4E0D\u7528\u505C\u66F4\u63D2\u4EF6"}),"\n",(0,i.jsx)(n.li,{children:"\u5C11\u7528\uFF0C\u6700\u597D\u4E0D\u7528\u9ED1\u63D2\u4EF6"}),"\n",(0,i.jsx)(n.li,{children:"\u5C3D\u53EF\u80FD\u4F7F\u7528\u7528\u6237\u6570\u591A\u7684\u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5C31\u7B97\u4F60\u5DF2\u7ECF\u4FDD\u8BC1\u9009\u7528\u4E86\u53EF\u4F9D\u8D56\u7684\u63D2\u4EF6\uFF0C\u4ECD\u7136\u8981\u5BF9\u8FD9\u7C7B\u95EE\u9898\u8FDB\u884C\u9884\u9632\u3002\u5177\u4F53\u9884\u9632\u65B9\u9762\u6709\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5BF9\u73A9\u5BB6\u4F7F\u7528\u7684\u6307\u4EE4\u8FDB\u884C\u9650\u5236\uFF0C\u6700\u597D\u662F\u901A\u8FC7\u767D\u540D\u5355\uFF0C\u4EC5\u5F00\u653E\u73A9\u5BB6\u4F1A\u7528\u5230\u7684\u6307\u4EE4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5C06\u670D\u52A1\u5668\u7684\u63D2\u4EF6\u505A\u597D\u9690\u85CF\u548C\u4F2A\u88C5\uFF0C\u5C3D\u53EF\u80FD\u9632\u6B62\u653B\u51FB\u8005\u83B7\u5F97\u670D\u52A1\u5668\u6240\u4F7F\u7528\u7684\u63D2\u4EF6\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u63A8\u8350\u6DFB\u52A0\u9ED1\u540D\u5355\u7684\u6307\u4EE4",children:"\u63A8\u8350\u6DFB\u52A0\u9ED1\u540D\u5355\u7684\u6307\u4EE4"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"\u9ED1\u540D\u5355\u6307\u4EE4"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'      # WorldEdit exploit\n      - "//calc"\n      - "//calculate"\n      - "//eval"\n      - "//evaluate"\n      - "//solve"\n      - "//asc"\n      - "//ascend"\n      - "//desc"\n      - "//descend"\n      # HolographicDisplays exploit\n      - "/hd readtext"\n      - "/holo readtext"\n      - "/hologram readtext"\n      - "/holograms readtext"\n      - "/holographicdisplays readtext"\n      # PermissionsEx exploit\n      - "/pex promote"\n      - "/pex demote"\n      - "/promote"\n      - "/demote"\n      - "/execute"\n      # Multiverse exploit\n      - "/mv ^"\n      - "/mv help <"\n      - "/mvhelp <"\n      - "/$"\n      # FAWE exploit\n      - "//to"\n      - "/to"\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u8FD0\u884C\u73AF\u5883\u7C7B",children:"\u8FD0\u884C\u73AF\u5883\u7C7B"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u7C7B\u6F0F\u6D1E\u57FA\u672C\u4E0A\u5F88\u96BE\u907F\u514D\uFF0C\u5982log4j\uFF0C\u5728\u672A\u53D1\u73B0\u4E4B\u524D\u8C01\u4E5F\u4E0D\u77E5\u9053\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u670D\u4E3B\u8FD8\u662F\u5C3D\u53EF\u80FD\u7684\u591A\u5173\u6CE8\u7F51\u7EDC\u4FE1\u606F\uFF0C\u4FDD\u8BC1\u81EA\u5DF1\u80FD\u5C3D\u5FEB\u4E86\u89E3\u5230\u4E00\u4E9B\u6F0F\u6D1E\u7684\u4EA7\u751F\uFF0C\u9632\u6B62\u88AB\u653B\u51FB\u8005\u94BB\u7A7A\u5B50\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u53D1\u5305\u7C7B\u7269\u54C1\u7C7B\u4E5F\u79F0\u539F\u7248\u6F0F\u6D1E",children:"\u53D1\u5305\u7C7B/\u7269\u54C1\u7C7B(\u4E5F\u79F0\u539F\u7248\u6F0F\u6D1E)"}),"\n",(0,i.jsx)(n.p,{children:"\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E9B\u65E0\u6CD5\u5904\u7406/\u5904\u7406\u7F13\u6162\u7684\u5305\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u7ECF\u5178\u7684Book\u5D29\u670D/\u544A\u793A\u724C\u5D29\u670D(\u9AD8\u7248\u672C\u5DF2\u4FEE\u590D)"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u7C7B\u5982\u679C\u4F60\u662F\u4F4E\u7248\u672C\u670D\u52A1\u5668\uFF0C\u5C31\u9700\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u63D2\u4EF6\u8FDB\u884C\u9632\u5FA1\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(75271);let i={},l=r.createContext(i);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);