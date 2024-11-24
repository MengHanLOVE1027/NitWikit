"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["4851"],{64898:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"process/maintenance/how-to-troubleshoot-problematic-plugins","title":"\u5982\u4F55\u6392\u9664\u6709\u95EE\u9898\u7684\u63D2\u4EF6","description":"\u5F53\u6211\u4EEC\u66F4\u65B0\u4E86\u670D\u52A1\u5668\u4E00\u4E9B\u63D2\u4EF6\u540E\uFF0C\u53EF\u80FD\u4F1A\u53D1\u73B0\u67D0\u4E9B\u63D2\u4EF6\u51FA\u4E86\u4E00\u4E9B\u95EE\u9898\uFF0C\u5E94\u8BE5\u5982\u4F55\u6392\u9664\u5462\uFF1F","source":"@site/docs/process/maintenance/how-to-troubleshoot-problematic-plugins.md","sourceDirName":"process/maintenance","slug":"/process/maintenance/how-to-troubleshoot-problematic-plugins","permalink":"/process/maintenance/how-to-troubleshoot-problematic-plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs/process/maintenance/how-to-troubleshoot-problematic-plugins.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1729683245000,"sidebarPosition":7,"frontMatter":{"title":"\u5982\u4F55\u6392\u9664\u6709\u95EE\u9898\u7684\u63D2\u4EF6","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"\u5982\u4F55\u62B5\u5FA1\u7F51\u7EDC\u653B\u51FB","permalink":"/process/maintenance/how-to-defend-against-cyber-attacks"},"next":{"title":"\u5982\u4F55\u9884\u9632\u5D29\u670D","permalink":"/process/maintenance/how-to-prevent-crash-server"}}'),s=i("52676"),r=i("79938");let l={title:"\u5982\u4F55\u6392\u9664\u6709\u95EE\u9898\u7684\u63D2\u4EF6",sidebar_position:7},o="\u5982\u4F55\u6392\u9664\u6709\u95EE\u9898\u7684\u63D2\u4EF6",c={},d=[{value:"log \u5B9A\u4F4D",id:"log-\u5B9A\u4F4D",level:2},{value:"\u4E8C\u5206\u6CD5",id:"\u4E8C\u5206\u6CD5",level:2},{value:"\u63A7\u5236\u53D8\u91CF\u6CD5",id:"\u63A7\u5236\u53D8\u91CF\u6CD5",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5982\u4F55\u6392\u9664\u6709\u95EE\u9898\u7684\u63D2\u4EF6",children:"\u5982\u4F55\u6392\u9664\u6709\u95EE\u9898\u7684\u63D2\u4EF6"})}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u6211\u4EEC\u66F4\u65B0\u4E86\u670D\u52A1\u5668\u4E00\u4E9B\u63D2\u4EF6\u540E\uFF0C\u53EF\u80FD\u4F1A\u53D1\u73B0\u67D0\u4E9B\u63D2\u4EF6\u51FA\u4E86\u4E00\u4E9B\u95EE\u9898\uFF0C\u5E94\u8BE5\u5982\u4F55\u6392\u9664\u5462\uFF1F"}),"\n",(0,s.jsx)(n.h2,{id:"log-\u5B9A\u4F4D",children:"log \u5B9A\u4F4D"}),"\n",(0,s.jsxs)(n.p,{children:["\u5BF9\u4E8E ERROR \u548C WARN \u7C7B\u578B\u7684 log \u8FDB\u884C\u5206\u6790\uFF0C\u67E5\u770B\u5806\u6808\u62A5\u9519\u4E2D\u662F\u5426\u6709\u67D0\u4E2A\u63D2\u4EF6\u540D\u6216\u8005\u63D2\u4EF6\u7684 ",(0,s.jsx)(n.code,{children:".jar"})," \u6587\u4EF6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5C06\u62A5\u9519\u5148\u7FFB\u8BD1\u4E00\u904D\uFF0C\u786E\u5B9A\u5176\u4E2D\u662F\u5426\u63D0\u793A\u4E86\u9519\u8BEF\u7684\u7C7B\u578B(\u5982\u7F3A\u5C11\u524D\u7F6E\uFF0C\u7F3A\u5C11\u7C7B\uFF0C\u63D2\u4EF6\u9700\u8981\u66F4\u65B0\u7B49)\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540E\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u6309\u7167",(0,s.jsx)(n.a,{href:"https://nitwikit.yizhan.wiki/Java/start/ask-for-help",children:"\u5982\u4F55\u5411\u5927\u4F6C\u6C42\u52A9"}),"\u4E2D\u63D0\u5230\u7684\u65B9\u6CD5\uFF0C\u589E\u52A0\u95EE\u9898\u89E3\u51B3\u7684\u53EF\u80FD\u6027\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E8C\u5206\u6CD5",children:"\u4E8C\u5206\u6CD5"}),"\n",(0,s.jsx)(n.p,{children:"\u4E8C\u5206\u6CD5\u7684\u57FA\u672C\u601D\u60F3\u662F\u901A\u8FC7\u9010\u6B65\u7F29\u5C0F\u95EE\u9898\u53EF\u80FD\u51FA\u73B0\u7684\u8303\u56F4\uFF0C\u76F4\u5230\u627E\u5230\u786E\u5207\u7684\u95EE\u9898\u6240\u5728\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4F53\u64CD\u4F5C\u65B9\u9762\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4FDD\u7559\u6240\u6709\u7684\u524D\u7F6E\u63D2\u4EF6\uFF0C\u5982 Protocolib\u3001Luckperms\u3001Xconomy \u7B49\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5C06\u5176\u4ED6\u63D2\u4EF6\u590D\u5236\u5230\u65B0\u6587\u4EF6\u5939\u4E2D\uFF0C\u5220\u9664 ",(0,s.jsx)(n.code,{children:"/plugins/"})," \u4E2D\u975E\u524D\u7F6E\u63D2\u4EF6\u7684 ",(0,s.jsx)(n.code,{children:".jar"})," \u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u67E5\u770B\u65B0\u6587\u4EF6\u5939\u4E2D\u7684\u63D2\u4EF6\u6570\u91CF\uFF0C\u9009\u62E9\u5176\u4E2D\u7684\u4E00\u534A\u590D\u5236\u5230 ",(0,s.jsx)(n.code,{children:"/plugins/"})," \u6587\u4EF6\u5939\u4E2D\uFF0C\u91CD\u542F\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u6CA1\u6709\u95EE\u9898\uFF0C\u91CD\u590D\u4E0A\u4E00\u6B65\uFF1B\u5982\u679C\u51FA\u73B0\u63D2\u4EF6\u65E0\u6CD5\u52A0\u8F7D\u5148\u67E5\u770B\u662F\u5426\u51FA\u73B0 ",(0,s.jsx)(n.code,{children:"miss dependency"})," \u5373\u7F3A\u5C11\u524D\u7F6E\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u51FA\u73B0\u95EE\u9898\uFF0C\u8BF4\u660E\u51FA\u95EE\u9898\u7684\u63D2\u4EF6\u5C31\u5728\u521A\u624D\u590D\u5236\u7684\u63D2\u4EF6\u4E2D\uFF0C\u5C06\u786E\u8BA4\u6CA1\u95EE\u9898\u7684\u63D2\u4EF6\u4FDD\u7559\u5728\u63D2\u4EF6\u6587\u4EF6\u5939\u4E2D\uFF0C\u7136\u540E\u518D\u4ECE\u521A\u590D\u5236\u7684\u63D2\u4EF6\u4E2D\u9009\u62E9\u4E00\u534A\u63D2\u4EF6\u52A0\u5165\u63D2\u4EF6\u6587\u4EF6\u5939\u4E2D\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u91CD\u590D\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u76F4\u5230\u53D1\u73B0\u67D0\u4E00\u63D2\u4EF6\u52A0\u5165\u524D\u6CA1\u6709\u95EE\u9898\u800C\u52A0\u5165\u540E\u51FA\u73B0\u95EE\u9898\uFF0C\u5373\u53EF\u786E\u5B9A\u4E3A\u8BE5\u63D2\u4EF6\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u5B9E\u9645\u4E0A\uFF0C\u4E0D\u53EA\u662F\u63D2\u4EF6\u95EE\u9898\uFF0C\u4F60\u9047\u5230\u7684\u5176\u4ED6\u5F88\u591A\u95EE\u9898\u90FD\u53EF\u4EE5\u4F7F\u7528\u4E8C\u5206\u6CD5\u8BA9\u4F60\u5728\u4E0D\u77E5\u9053\u539F\u56E0\u7684\u60C5\u51B5\u4E0B\u9501\u5B9A\u95EE\u9898"})}),"\n",(0,s.jsx)(n.h2,{id:"\u63A7\u5236\u53D8\u91CF\u6CD5",children:"\u63A7\u5236\u53D8\u91CF\u6CD5"}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u9700\u8981\u6392\u67E5\u7684\u8303\u56F4\u6BD4\u8F83\u5C0F\u65F6\uFF0C\u76F8\u6BD4\u4E8C\u5206\u6CD5\uFF0C\u63A7\u5236\u53D8\u91CF\u6CD5\u53EF\u80FD\u4F1A\u66F4\u5408\u9002"}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4F53\u64CD\u4F5C\u65B9\u9762\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5220/\u589E \u4E00\u4E2A\u63D2\u4EF6"}),"\n",(0,s.jsx)(n.li,{children:"\u5F00\u542F\u670D\u52A1\u7AEF"}),"\n",(0,s.jsx)(n.li,{children:"\u67E5\u770B\u95EE\u9898\u662F\u5426\u51FA\u73B0"}),"\n",(0,s.jsx)(n.li,{children:"\u91CD\u590D\u4E0A\u8FF0\u6B65\u9AA4"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u540C\u4E8C\u5206\u6CD5\u5E95\u4E0B\u7684\u63D0\u793A\uFF0C\u4E0D\u53EA\u662F\u63D2\u4EF6\u95EE\u9898\u53EF\u4EE5\u7528\u63A7\u5236\u53D8\u91CF\u6CD5"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var t=i(75271);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);