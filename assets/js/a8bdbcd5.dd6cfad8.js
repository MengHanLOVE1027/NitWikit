"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["9655"],{80290:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"process/maintenance/optimize/jvm/zing","title":"Azul Zing","description":"\u901A\u7528\u5185\u5BB9\u7684\u53C2\u6570\u53EF\u4EE5\u4F7F\u7528(\u6BD4\u5982\u5927\u9875)\uFF0C\u4F46\u4E0D\u8981\u81EA\u884C\u6307\u5B9AGC\uFF0C\u6216\u5176\u4ED6\u4F18\u5316\u53C2\u6570","source":"@site/docs-java/process/maintenance/optimize/jvm/zing.md","sourceDirName":"process/maintenance/optimize/jvm","slug":"/optimize/jvm/zing","permalink":"/Java/optimize/jvm/zing","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/zing.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727754229000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Azul Zing","slug":"/optimize/jvm/zing"},"sidebar":"tutorialSidebar","previous":{"title":"GraalVM EE","permalink":"/Java/optimize/jvm/graalvm"},"next":{"title":"OpenJ9","permalink":"/Java/optimize/jvm/openj9"}}'),l=i("52676"),s=i("79938");let o={sidebar_position:6,title:"Azul Zing",slug:"/optimize/jvm/zing"},r="Azul Zing",a={},c=[{value:"\u4E00\u6B65\u5230\u4F4D",id:"\u4E00\u6B65\u5230\u4F4D",level:2},{value:"ReadyNow",id:"readynow",level:2},{value:"\u5783\u573E\u56DE\u6536\u5668",id:"\u5783\u573E\u56DE\u6536\u5668",level:2},{value:"\u7D27\u51D1\u5B57\u7B26\u4E32",id:"\u7D27\u51D1\u5B57\u7B26\u4E32",level:2},{value:"\u66F4\u9AD8\u7EA7\u522B\u7684 Falcon \u4F18\u5316",id:"\u66F4\u9AD8\u7EA7\u522B\u7684-falcon-\u4F18\u5316",level:2},{value:"Zing System Tool",id:"zing-system-tool",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"azul-zing",children:"Azul Zing"})}),"\n",(0,l.jsx)(n.p,{children:"\u901A\u7528\u5185\u5BB9\u7684\u53C2\u6570\u53EF\u4EE5\u4F7F\u7528(\u6BD4\u5982\u5927\u9875)\uFF0C\u4F46\u4E0D\u8981\u81EA\u884C\u6307\u5B9AGC\uFF0C\u6216\u5176\u4ED6\u4F18\u5316\u53C2\u6570"}),"\n",(0,l.jsx)(n.h2,{id:"\u4E00\u6B65\u5230\u4F4D",children:"\u4E00\u6B65\u5230\u4F4D"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"-XX:ProfileLogIn=readynow -XX:ProfileLogOut=readynow -XX:+FalconUseCompileStashing -XX:+CompactStrings\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u52C7\u8005\u52A0\u4E0A",(0,l.jsx)(n.code,{children:"-XX:FalconOptimizationLevel=3"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5B89\u88C5\u4E86 ZST \u52A0\u4E0A",(0,l.jsx)(n.code,{children:"-XX:+UseZST"})]}),"\n",(0,l.jsx)(n.h2,{id:"readynow",children:"ReadyNow"}),"\n",(0,l.jsx)(n.p,{children:"\u4F60\u5927\u6982\u5DF2\u7ECF\u6CE8\u610F\u5230\u4E86\uFF0CZing\u7684\u9884\u70ED\u671F\u5F88\u957F\uFF0CReadyNow\u5C31\u662F\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684"}),"\n",(0,l.jsxs)(n.p,{children:["\u82E5\u8981\u542F\u7528 ReadyNow\uFF0C\u8BF7\u6DFB\u52A0\u4EE5\u4E0B\u547D\u4EE4\u884C\u9009\u9879\uFF0C\u5176\u4E2D\u4E24\u8005",(0,l.jsx)(n.code,{children:"<file>"}),"\u901A\u5E38\u76F8\u540C\uFF1A"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"-XX:ProfileLogIn=<file>"})," \u6307\u793A Azul Platform Prime \u4F7F\u7528\u73B0\u6709\u914D\u7F6E\u6587\u4EF6\u65E5\u5FD7\u4E2D\u7684\u4FE1\u606F\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"-XX:ProfileLogOut=<file>"})," \u8BB0\u5F55\u4E4B\u524D\u7684\u7F16\u8BD1\u548C\u8FD0\u884C\u4E2D\u7684\u53BB\u4F18\u5316\u51B3\u7B56\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u7136\u540E\uFF0C\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u5C06\u81EA\u52A8\u751F\u6210\u6216\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u65E5\u5FD7\u3002\u6B64\u914D\u7F6E\u6587\u4EF6\u65E5\u5FD7\u5C06\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u540E\u7EED\u8FD0\u884C\u65F6\u4F7F\u7528\uFF0C\u4ECE\u800C\u6539\u8FDB\u9884\u70ED\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5B98\u65B9\u63A8\u8350\u6240\u6709\u91CD\u8981\u51FD\u6570\u6267\u884C",(0,l.jsx)(n.strong,{children:"5\u4E07\u904D"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u6DFB\u52A0",(0,l.jsx)(n.code,{children:"-XX:+FalconUseCompileStashing"}),"\u4EE5\u4F7F\u7528\u7F16\u8BD1\u5B58\u50A8"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5783\u573E\u56DE\u6536\u5668",children:"\u5783\u573E\u56DE\u6536\u5668"}),"\n",(0,l.jsx)(n.p,{children:"C4 \u662F Zing \u4E2D\u552F\u4E00\u7684\u5783\u573E\u6536\u96C6\u5668\uFF0C\u53D6\u4EE3\u4E86 OpenJDK \u4E2D\u53EF\u7528\u7684\u5176\u4ED6\u5783\u573E\u6536\u96C6\u5668\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u7D27\u51D1\u5B57\u7B26\u4E32",children:"\u7D27\u51D1\u5B57\u7B26\u4E32"}),"\n",(0,l.jsxs)(n.p,{children:["\u6DFB\u52A0\u9009\u9879",(0,l.jsx)(n.code,{children:"-XX:+CompactStrings"}),"\u53EF\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u63D0\u9AD8\u5B57\u7B26\u4E32\u5BC6\u96C6\u578B\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\uFF0C\u5E76\u51CF\u5C11\u82B1\u8D39\u5728\u5783\u573E\u56DE\u6536\u4E0A\u7684\u65F6\u95F4"]}),"\n",(0,l.jsx)(n.h2,{id:"\u66F4\u9AD8\u7EA7\u522B\u7684-falcon-\u4F18\u5316",children:"\u66F4\u9AD8\u7EA7\u522B\u7684 Falcon \u4F18\u5316"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528\u9009\u9879",(0,l.jsx)(n.code,{children:"-XX:FalconOptimizationLevel=3"}),"\u53EF\u4EE5\u83B7\u5F97\u66F4\u9AD8\u7EA7\u522B\u7684\u4F18\u5316\uFF0C\u4F46\u4F1A\u51FA\u73B0\u66F4\u591A\u517C\u5BB9\u6027\u95EE\u9898"]}),"\n",(0,l.jsx)(n.h2,{id:"zing-system-tool",children:"Zing System Tool"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD9\u73A9\u610F\u53EF\u4EE5\u8BA9\u4F60\u7684\u7CFB\u7EDF\u66F4\u52A0\u9002\u5E94Zing\uFF0C\u53EF\u4EE5\u81EA\u52A8\u4F18\u5316\u7CFB\u7EDF\u914D\u7F6E"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://docs.azul.com/prime/zst/installation",children:"\u5B98\u65B9\u5B89\u88C5\u6559\u7A0B"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528",(0,l.jsx)(n.code,{children:"-XX:+UseZST"})," \u5F00\u542F"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var t=i(75271);let l={},s=t.createContext(l);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);