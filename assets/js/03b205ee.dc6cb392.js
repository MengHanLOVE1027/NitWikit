"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["4158"],{53286:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>p,assets:()=>a,toc:()=>t,frontMatter:()=>c});var s=JSON.parse('{"id":"bds-core/process/LeviLamina/LeviLamina-Plugins","title":"\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B","description":"\u63D2\u4EF6\u7684\u7ED3\u6784","source":"@site/docs-bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins.md","sourceDirName":"bds-core/process/LeviLamina","slug":"/bds-core/process/LeviLamina/LeviLamina-Plugins","permalink":"/Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1732439466000,"sidebarPosition":1,"frontMatter":{"title":"\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"LeviLamina \u5B89\u88C5\u6559\u7A0B","permalink":"/Bedrock/bds-core/process/LeviLamina/LeviLamina-Install"},"next":{"title":"Legacy Script Engine(LSE)","permalink":"/Bedrock/bds-core/process/LeviLamina/legacy-script-engine"}}'),r=i("52676"),l=i("79938");let c={title:"\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B",sidebar_position:1},d="\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B",a={},t=[{value:"\u63D2\u4EF6\u7684\u7ED3\u6784",id:"\u63D2\u4EF6\u7684\u7ED3\u6784",level:2},{value:"\u4F7F\u7528 Lip \u5B89\u88C5\u63D2\u4EF6",id:"\u4F7F\u7528-lip-\u5B89\u88C5\u63D2\u4EF6",level:2},{value:"\u901A\u8FC7\u547D\u4EE4\u5B89\u88C5\u63D2\u4EF6",id:"\u901A\u8FC7\u547D\u4EE4\u5B89\u88C5\u63D2\u4EF6",level:3},{value:"\u901A\u8FC7 LipUI \u5B89\u88C5\u63D2\u4EF6",id:"\u901A\u8FC7-lipui-\u5B89\u88C5\u63D2\u4EF6",level:3},{value:"\u624B\u52A8\u5B89\u88C5\u63D2\u4EF6",id:"\u624B\u52A8\u5B89\u88C5\u63D2\u4EF6",level:2},{value:"\u539F\u751F(native)\u63D2\u4EF6",id:"\u539F\u751Fnative\u63D2\u4EF6",level:3},{value:"LSE \u63D2\u4EF6",id:"lse-\u63D2\u4EF6",level:3},{value:"quick-js\u3001lua\u3001python \u5355\u6587\u4EF6",id:"quick-jsluapython-\u5355\u6587\u4EF6",level:4},{value:"nodejs\u3001python \u591A\u6587\u4EF6",id:"nodejspython-\u591A\u6587\u4EF6",level:4}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B",children:"\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B"})}),"\n",(0,r.jsx)(n.h2,{id:"\u63D2\u4EF6\u7684\u7ED3\u6784",children:"\u63D2\u4EF6\u7684\u7ED3\u6784"}),"\n",(0,r.jsx)(n.p,{children:"LeviLamina \u7684\u63D2\u4EF6\u662F\u4EE5\u6587\u4EF6\u5939\u7684\u683C\u5F0F\u5B58\u5728\u7684\u3002\u901A\u5E38\u63D2\u4EF6\u6587\u4EF6\u5939\u4E2D\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"\u63D2\u4EF6\u6587\u4EF6\u5939\r\n\u251C\u2500manifest.json             // \u63D2\u4EF6\u5143\u6570\u636E\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u5FC5\u987B\u5B58\u5728\u5E76\u683C\u5F0F\u6B63\u786E\u624D\u80FD\u88AB LeviLamina \u8BC6\u522B\r\n\u251C\u2500(\u63D2\u4EF6\u914D\u7F6E\u6587\u4EF6\u548C\u6570\u636E\u5E93)... // \u63D2\u4EF6\u751F\u6210\u7684\u914D\u7F6E\u6587\u4EF6\u548C\u6570\u636E\u5E93\u7B49\uFF0C\u5927\u591A\u6570\u63D2\u4EF6\u7684\u914D\u7F6E\u6587\u4EF6\u540D\u53EBconfig.json\uFF0C\u5E76\u4EE5\u4E00\u4E2A\u6587\u4EF6\u5939\u6216\u4E00\u4E2A .db \u6216 .json \u540E\u7F00\u6587\u4EF6\u4F5C\u4E3A\u6570\u636E\u5E93\r\n\u251C\u2500(\u63D2\u4EF6\u4EE3\u7801\u6216\u4E8C\u8FDB\u5236\u6587\u4EF6)... // \u63D2\u4EF6\u6E90\u4EE3\u7801\uFF0C\u901A\u5E38\u662F .js\u3001.lua\u3001.dll \u540E\u7F00\u7684\u6587\u4EF6\u3002\u4E0D\u8981\u5220\u9664\uFF0C\u4FEE\u6539\u6216\u91CD\u547D\u540D\u6587\u4EF6\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u63D2\u4EF6\u65E0\u6CD5\u8FD0\u884C\uFF01\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4F60\u4E0D\u9700\u8981\u624B\u52A8\u4FEE\u6539 ",(0,r.jsx)(n.code,{children:"manifest.json"})," \u8FD9\u4E2A\u6587\u4EF6\uFF0C\u56E0\u4E3A\u63D2\u4EF6\u4F5C\u8005\u4F1A\u5C06\u5B83\u4E8B\u5148\u914D\u7F6E\u597D\u3002\u5982\u679C\u6709\u7279\u6B8A\u63D2\u4EF6\u9700\u8981\u624B\u52A8\u914D\u7F6E\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u8BE5\u63D2\u4EF6\u6587\u6863\u5E94\u8BE5\u4F1A\u7ED9\u51FA\u76F8\u5E94\u6559\u7A0B\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528-lip-\u5B89\u88C5\u63D2\u4EF6",children:"\u4F7F\u7528 Lip \u5B89\u88C5\u63D2\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u8FD8\u6CA1\u6709\u5B89\u88C5 Lip\uFF0C\u53EF\u4EE5\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"/Bedrock/bds-core/process/LeviLamina/LeviLamina-Install#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C-%E5%AE%89%E8%A3%85-lip",children:"\u4E0A\u4E00\u7AE0\u7684\u6559\u7A0B"})," \u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u4F7F\u7528 Lip \u5B89\u88C5\u63D2\u4EF6\uFF0C\u4F60\u5FC5\u987B\u786E\u4FDD\u8BE5\u63D2\u4EF6",(0,r.jsx)(n.strong,{children:"\u652F\u6301\u901A\u8FC7 Lip \u5B89\u88C5"})," \u3002\u5982\u679C\u63D2\u4EF6\u6587\u6863\u6CA1\u6709\u5199\u660E\u4EFB\u4F55\u4F7F\u7528 Lip \u5B89\u88C5\u7684\u65B9\u6CD5\u6216\u547D\u4EE4\uFF0C\u4F60\u5C31\u4E0D\u5E94\u8BE5\u4F7F\u7528 Lip \u5B89\u88C5\u8BE5\u63D2\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A Lip \u63D2\u4EF6\u7684\u5B89\u88C5\u547D\u4EE4\u4F1A\u50CF\u8FD9\u6837\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"lip install <\u4E00\u4E2AURL>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u901A\u8FC7\u547D\u4EE4\u5B89\u88C5\u63D2\u4EF6",children:"\u901A\u8FC7\u547D\u4EE4\u5B89\u88C5\u63D2\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u670D\u52A1\u7AEF\u6839\u76EE\u5F55(\u5305\u542B ",(0,r.jsx)(n.code,{children:"bedrock_server_mod.exe"})," \u7684\u6587\u4EF6\u5939)\u6253\u5F00 powershell\uFF0C\u6267\u884C\u63D2\u4EF6\u4F7F\u7528\u8BF4\u660E\u7ED9\u51FA\u7684 Lip \u5B89\u88C5\u547D\u4EE4\uFF0C"]}),"\n",(0,r.jsx)(n.h3,{id:"\u901A\u8FC7-lipui-\u5B89\u88C5\u63D2\u4EF6",children:"\u901A\u8FC7 LipUI \u5B89\u88C5\u63D2\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"TODO"}),"\n",(0,r.jsxs)(n.p,{children:["\u968F\u540E\u63D2\u4EF6\u5C06\u5728\u670D\u52A1\u5668\u4E0B\u6B21\u542F\u52A8\u65F6\u88AB\u52A0\u8F7D\u3002\u8981\u60F3\u8BA9\u6B63\u5728\u8FD0\u884C\u7684\u670D\u52A1\u5668\u52A0\u8F7D\u8BE5\u63D2\u4EF6\uFF0C\u4F60\u5FC5\u987B",(0,r.jsx)(n.strong,{children:"\u91CD\u542F\u670D\u52A1\u5668"})," \u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u624B\u52A8\u5B89\u88C5\u63D2\u4EF6",children:"\u624B\u52A8\u5B89\u88C5\u63D2\u4EF6"}),"\n",(0,r.jsx)(n.h3,{id:"\u539F\u751Fnative\u63D2\u4EF6",children:"\u539F\u751F(native)\u63D2\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:["\u89E3\u538B\u5E76\u6574\u7406\u63D2\u4EF6\u6587\u4EF6\u5939\uFF0C\u786E\u4FDD\u5176\u7ED3\u6784\u7B26\u5408\u4E0A\u6587\u7ED3\u51FA\u7684\u63D2\u4EF6\u7ED3\u6784\u3002",(0,r.jsx)(n.strong,{children:"\u6709\u65F6\u63D2\u4EF6\u538B\u7F29\u5305\u89E3\u538B\u540E\u91CC\u9762\u4F1A\u5957\u4E00\u5C42\u6587\u4EF6\u5939\uFF0C\u8FD9\u70B9\u8981\u683C\u5916\u7559\u610F\u3002"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5C06\u63D2\u4EF6\u6587\u4EF6\u5939\u653E\u5165\u670D\u52A1\u5668\u7684 ",(0,r.jsx)(n.code,{children:"plugins"})," \u6587\u4EF6\u5939\uFF0C\u5B83\u5C06\u5728\u670D\u52A1\u5668\u4E0B\u6B21\u542F\u52A8\u65F6\u88AB\u52A0\u8F7D\u3002\u8981\u60F3\u8BA9\u6B63\u5728\u8FD0\u884C\u7684\u670D\u52A1\u5668\u52A0\u8F7D\u8BE5\u63D2\u4EF6\uFF0C\u4F60\u5FC5\u987B",(0,r.jsx)(n.strong,{children:"\u91CD\u542F\u670D\u52A1\u5668"})," \u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"lse-\u63D2\u4EF6",children:"LSE \u63D2\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u5B89\u88C5 LSE \u63D2\u4EF6\uFF0C\u4F60\u7684\u670D\u52A1\u5668\u5FC5\u987B\u5B89\u88C5\u4E86 ",(0,r.jsx)(n.a,{href:"/Bedrock/bds-core/process/LeviLamina/legacy-script-engine",children:"Legacy Script Engine"})," \u4F5C\u4E3A\u524D\u7F6E\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"quick-jsluapython-\u5355\u6587\u4EF6",children:"quick-js\u3001lua\u3001python \u5355\u6587\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u53EA\u6709\u4E00\u4E2A .js/.lua/.py \u4EE3\u7801\u6587\u4EF6\u7684\u63D2\u4EF6\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u5C06\u63D2\u4EF6\u6587\u4EF6\u653E\u5165 ",(0,r.jsx)(n.code,{children:"plugins"})," \u6587\u4EF6\u5939\uFF0C\u7136\u540E\u542F\u52A8\u6216\u91CD\u542F\u4E00\u6B21\u670D\u52A1\u5668\u3002\r\n\u6B64\u65F6\u670D\u52A1\u5668\u5C06\u8B66\u544A ",(0,r.jsx)(n.code,{children:"WARN [legacy-script-engine-quickjs] Legacy plugins have been migrated\uFF0C please restart the server to load them!"}),"\u3002\r\n",(0,r.jsx)(n.strong,{children:"\u6B64\u65F6\u63D2\u4EF6\u5E76\u672A\u88AB\u52A0\u8F7D\uFF0C\u4F60\u9700\u8981\u518D\u6B21\u91CD\u542F\u670D\u52A1\u5668"})," \uFF0C\u4E4B\u540E\u63D2\u4EF6\u5C31\u80FD\u52A0\u8F7D\u4E86\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"nodejspython-\u591A\u6587\u4EF6",children:"nodejs\u3001python \u591A\u6587\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u6307 .llplugin \u540E\u7F00\u540D\u6216\u89E3\u538B\u540E\u4E3A\u4E00\u4E2A\u6587\u4EF6\u5939\u7684 LSE \u63D2\u4EF6\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u63D2\u4EF6\u4E3A\u6587\u4EF6\u5939\uFF0C\u90A3\u4E48\u68C0\u67E5\u8BE5\u6587\u4EF6\u5939\u7ED3\u6784\u3002\u5982\u679C\u5176\u4E2D\u5305\u542B ",(0,r.jsx)(n.code,{children:"manifest.json"}),"\uFF0C\u76F4\u63A5\u5C06\u5176\u653E\u5165 ",(0,r.jsx)(n.code,{children:"plugins"})," \u6587\u4EF6\u5939\u5373\u53EF\u3002\u968F\u540E\u5B83\u5C06\u5728\u670D\u52A1\u5668\u4E0B\u6B21\u542F\u52A8\u65F6\u88AB\u52A0\u8F7D\u3002\u8981\u60F3\u8BA9\u6B63\u5728\u8FD0\u884C\u7684\u670D\u52A1\u5668\u52A0\u8F7D\u8BE5\u63D2\u4EF6\uFF0C\u4F60\u5FC5\u987B",(0,r.jsx)(n.strong,{children:"\u91CD\u542F\u670D\u52A1\u5668"})," \u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u8BE5\u63D2\u4EF6\u4E3A\u6587\u4EF6\u5939\u4F46\u4E0D\u5305\u542B ",(0,r.jsx)(n.code,{children:"manifest.json"}),"\uFF0C\u4F60\u9700\u8981\u5C06\u5176\u653E\u5165 ",(0,r.jsx)(n.code,{children:"plugins"})," \u6587\u4EF6\u5939\u540E\uFF0C\u6309\u4E0A\u6587 quickjs\u3001lua\u3001python \u5355\u6587\u4EF6\u7684\u64CD\u4F5C\u65B9\u6CD5\u8FDB\u884C\u64CD\u4F5C\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u8BE5\u63D2\u4EF6\u4E3A .llplugin \u540E\u7F00\u540D\u7684\u5355\u4E2A\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5C06\u5176\u540E\u7F00\u540D\u6539\u6210 .zip \u5E76\u89E3\u538B\uFF0C\u4E4B\u540E\u6309\u7167\u4E0A\u9762\u4E24\u79CD\u65B9\u6CD5\u8FDB\u884C\u64CD\u4F5C\u3002"})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return c}});var s=i(75271);let r={},l=s.createContext(r);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);