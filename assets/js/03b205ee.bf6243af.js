"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1779],{2698:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var s=n(86070),r=n(11100);const l={title:"\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b",sidebar_position:1},c="\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b",t={id:"bds-core/process/LeviLamina/LeviLamina-Plugins",title:"\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b",description:"\u4f5c\u8005\uff1a\u661f\u51ccQAQ",source:"@site/docs-bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins.md",sourceDirName:"bds-core/process/LeviLamina",slug:"/bds-core/process/LeviLamina/LeviLamina-Plugins",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:1727695078e3,sidebarPosition:1,frontMatter:{title:"\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"LeviLamina \u5b89\u88c5\u6559\u7a0b",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/LeviLamina-Install"},next:{title:"Legacy Script Engine(LSE)",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/legacy-script-engine"}},d={},a=[{value:"\u63d2\u4ef6\u7684\u7ed3\u6784",id:"\u63d2\u4ef6\u7684\u7ed3\u6784",level:2},{value:"\u4f7f\u7528 Lip \u5b89\u88c5\u63d2\u4ef6",id:"\u4f7f\u7528-lip-\u5b89\u88c5\u63d2\u4ef6",level:2},{value:"\u901a\u8fc7\u547d\u4ee4\u5b89\u88c5\u63d2\u4ef6",id:"\u901a\u8fc7\u547d\u4ee4\u5b89\u88c5\u63d2\u4ef6",level:3},{value:"\u901a\u8fc7 LipUI \u5b89\u88c5\u63d2\u4ef6",id:"\u901a\u8fc7-lipui-\u5b89\u88c5\u63d2\u4ef6",level:3},{value:"\u624b\u52a8\u5b89\u88c5\u63d2\u4ef6",id:"\u624b\u52a8\u5b89\u88c5\u63d2\u4ef6",level:2},{value:"\u539f\u751f(native)\u63d2\u4ef6",id:"\u539f\u751fnative\u63d2\u4ef6",level:3},{value:"LSE \u63d2\u4ef6",id:"lse-\u63d2\u4ef6",level:3},{value:"quick-js\u3001lua\u3001python \u5355\u6587\u4ef6",id:"quick-jsluapython-\u5355\u6587\u4ef6",level:4},{value:"nodejs\u3001python \u591a\u6587\u4ef6",id:"nodejspython-\u591a\u6587\u4ef6",level:4}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["\u4f5c\u8005\uff1a",(0,s.jsx)(i.a,{href:"https://github.com/XingLingQAQ",children:"\u661f\u51ccQAQ"})]})}),"\n",(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b",children:"\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b"})}),"\n",(0,s.jsx)(i.h2,{id:"\u63d2\u4ef6\u7684\u7ed3\u6784",children:"\u63d2\u4ef6\u7684\u7ed3\u6784"}),"\n",(0,s.jsx)(i.p,{children:"LeviLamina \u7684\u63d2\u4ef6\u662f\u4ee5\u6587\u4ef6\u5939\u7684\u683c\u5f0f\u5b58\u5728\u7684\u3002\u901a\u5e38\u63d2\u4ef6\u6587\u4ef6\u5939\u4e2d\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:"\u63d2\u4ef6\u6587\u4ef6\u5939\r\n\u251c\u2500manifest.json             // \u63d2\u4ef6\u5143\u6570\u636e\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u5fc5\u987b\u5b58\u5728\u5e76\u683c\u5f0f\u6b63\u786e\u624d\u80fd\u88ab LeviLamina \u8bc6\u522b\r\n\u251c\u2500(\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u548c\u6570\u636e\u5e93)... // \u63d2\u4ef6\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\u548c\u6570\u636e\u5e93\u7b49\uff0c\u5927\u591a\u6570\u63d2\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u540d\u53ebconfig.json\uff0c\u5e76\u4ee5\u4e00\u4e2a\u6587\u4ef6\u5939\u6216\u4e00\u4e2a .db \u6216 .json \u540e\u7f00\u6587\u4ef6\u4f5c\u4e3a\u6570\u636e\u5e93\r\n\u251c\u2500(\u63d2\u4ef6\u4ee3\u7801\u6216\u4e8c\u8fdb\u5236\u6587\u4ef6)... // \u63d2\u4ef6\u6e90\u4ee3\u7801\uff0c\u901a\u5e38\u662f .js\u3001.lua\u3001.dll \u540e\u7f00\u7684\u6587\u4ef6\u3002\u4e0d\u8981\u5220\u9664\uff0c\u4fee\u6539\u6216\u91cd\u547d\u540d\u6587\u4ef6\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u63d2\u4ef6\u65e0\u6cd5\u8fd0\u884c\uff01\n"})}),"\n",(0,s.jsxs)(i.p,{children:["\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u624b\u52a8\u4fee\u6539 ",(0,s.jsx)(i.code,{children:"manifest.json"})," \u8fd9\u4e2a\u6587\u4ef6\uff0c\u56e0\u4e3a\u63d2\u4ef6\u4f5c\u8005\u4f1a\u5c06\u5b83\u4e8b\u5148\u914d\u7f6e\u597d\u3002\u5982\u679c\u6709\u7279\u6b8a\u63d2\u4ef6\u9700\u8981\u624b\u52a8\u914d\u7f6e\u8fd9\u4e2a\u6587\u4ef6\uff0c\u8be5\u63d2\u4ef6\u6587\u6863\u5e94\u8be5\u4f1a\u7ed9\u51fa\u76f8\u5e94\u6559\u7a0b\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"\u4f7f\u7528-lip-\u5b89\u88c5\u63d2\u4ef6",children:"\u4f7f\u7528 Lip \u5b89\u88c5\u63d2\u4ef6"}),"\n",(0,s.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 Lip\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(i.a,{href:"/NitWikit/Bedrock/bds-core/process/LeviLamina/LeviLamina-Install#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C-%E5%AE%89%E8%A3%85-lip",children:"\u4e0a\u4e00\u7ae0\u7684\u6559\u7a0b"})," \u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u8981\u4f7f\u7528 Lip \u5b89\u88c5\u63d2\u4ef6\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd\u8be5\u63d2\u4ef6",(0,s.jsx)(i.strong,{children:"\u652f\u6301\u901a\u8fc7 Lip \u5b89\u88c5"})," \u3002\u5982\u679c\u63d2\u4ef6\u6587\u6863\u6ca1\u6709\u5199\u660e\u4efb\u4f55\u4f7f\u7528 Lip \u5b89\u88c5\u7684\u65b9\u6cd5\u6216\u547d\u4ee4\uff0c\u4f60\u5c31\u4e0d\u5e94\u8be5\u4f7f\u7528 Lip \u5b89\u88c5\u8be5\u63d2\u4ef6\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a Lip \u63d2\u4ef6\u7684\u5b89\u88c5\u547d\u4ee4\u4f1a\u50cf\u8fd9\u6837\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"lip install <\u4e00\u4e2aURL>\n"})}),"\n",(0,s.jsx)(i.h3,{id:"\u901a\u8fc7\u547d\u4ee4\u5b89\u88c5\u63d2\u4ef6",children:"\u901a\u8fc7\u547d\u4ee4\u5b89\u88c5\u63d2\u4ef6"}),"\n",(0,s.jsxs)(i.p,{children:["\u5728\u670d\u52a1\u7aef\u6839\u76ee\u5f55(\u5305\u542b ",(0,s.jsx)(i.code,{children:"bedrock_server_mod.exe"})," \u7684\u6587\u4ef6\u5939)\u6253\u5f00 powershell\uff0c\u6267\u884c\u63d2\u4ef6\u4f7f\u7528\u8bf4\u660e\u7ed9\u51fa\u7684 Lip \u5b89\u88c5\u547d\u4ee4\uff0c"]}),"\n",(0,s.jsx)(i.h3,{id:"\u901a\u8fc7-lipui-\u5b89\u88c5\u63d2\u4ef6",children:"\u901a\u8fc7 LipUI \u5b89\u88c5\u63d2\u4ef6"}),"\n",(0,s.jsx)(i.p,{children:"TODO"}),"\n",(0,s.jsxs)(i.p,{children:["\u968f\u540e\u63d2\u4ef6\u5c06\u5728\u670d\u52a1\u5668\u4e0b\u6b21\u542f\u52a8\u65f6\u88ab\u52a0\u8f7d\u3002\u8981\u60f3\u8ba9\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1\u5668\u52a0\u8f7d\u8be5\u63d2\u4ef6\uff0c\u4f60\u5fc5\u987b",(0,s.jsx)(i.strong,{children:"\u91cd\u542f\u670d\u52a1\u5668"})," \u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"\u624b\u52a8\u5b89\u88c5\u63d2\u4ef6",children:"\u624b\u52a8\u5b89\u88c5\u63d2\u4ef6"}),"\n",(0,s.jsx)(i.h3,{id:"\u539f\u751fnative\u63d2\u4ef6",children:"\u539f\u751f(native)\u63d2\u4ef6"}),"\n",(0,s.jsxs)(i.p,{children:["\u89e3\u538b\u5e76\u6574\u7406\u63d2\u4ef6\u6587\u4ef6\u5939\uff0c\u786e\u4fdd\u5176\u7ed3\u6784\u7b26\u5408\u4e0a\u6587\u7ed3\u51fa\u7684\u63d2\u4ef6\u7ed3\u6784\u3002",(0,s.jsx)(i.strong,{children:"\u6709\u65f6\u63d2\u4ef6\u538b\u7f29\u5305\u89e3\u538b\u540e\u91cc\u9762\u4f1a\u5957\u4e00\u5c42\u6587\u4ef6\u5939\uff0c\u8fd9\u70b9\u8981\u683c\u5916\u7559\u610f\u3002"})]}),"\n",(0,s.jsxs)(i.p,{children:["\u5c06\u63d2\u4ef6\u6587\u4ef6\u5939\u653e\u5165\u670d\u52a1\u5668\u7684 ",(0,s.jsx)(i.code,{children:"plugins"})," \u6587\u4ef6\u5939\uff0c\u5b83\u5c06\u5728\u670d\u52a1\u5668\u4e0b\u6b21\u542f\u52a8\u65f6\u88ab\u52a0\u8f7d\u3002\u8981\u60f3\u8ba9\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1\u5668\u52a0\u8f7d\u8be5\u63d2\u4ef6\uff0c\u4f60\u5fc5\u987b",(0,s.jsx)(i.strong,{children:"\u91cd\u542f\u670d\u52a1\u5668"})," \u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"lse-\u63d2\u4ef6",children:"LSE \u63d2\u4ef6"}),"\n",(0,s.jsxs)(i.p,{children:["\u8981\u5b89\u88c5 LSE \u63d2\u4ef6\uff0c\u4f60\u7684\u670d\u52a1\u5668\u5fc5\u987b\u5b89\u88c5\u4e86 ",(0,s.jsx)(i.a,{href:"/NitWikit/Bedrock/bds-core/process/LeviLamina/legacy-script-engine",children:"Legacy Script Engine"})," \u4f5c\u4e3a\u524d\u7f6e\u3002"]}),"\n",(0,s.jsx)(i.h4,{id:"quick-jsluapython-\u5355\u6587\u4ef6",children:"quick-js\u3001lua\u3001python \u5355\u6587\u4ef6"}),"\n",(0,s.jsx)(i.p,{children:"\u6307\u53ea\u6709\u4e00\u4e2a .js/.lua/.py \u4ee3\u7801\u6587\u4ef6\u7684\u63d2\u4ef6\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u9996\u5148\u5c06\u63d2\u4ef6\u6587\u4ef6\u653e\u5165 ",(0,s.jsx)(i.code,{children:"plugins"})," \u6587\u4ef6\u5939\uff0c\u7136\u540e\u542f\u52a8\u6216\u91cd\u542f\u4e00\u6b21\u670d\u52a1\u5668\u3002\u6b64\u65f6\u670d\u52a1\u5668\u5c06\u8b66\u544a ",(0,s.jsx)(i.code,{children:"WARN [legacy-script-engine-quickjs] Legacy plugins have been migrated\uff0c please restart the server to load them!"}),"\u3002",(0,s.jsx)(i.strong,{children:"\u6b64\u65f6\u63d2\u4ef6\u5e76\u672a\u88ab\u52a0\u8f7d\uff0c\u4f60\u9700\u8981\u518d\u6b21\u91cd\u542f\u670d\u52a1\u5668"})," \uff0c\u4e4b\u540e\u63d2\u4ef6\u5c31\u80fd\u52a0\u8f7d\u4e86\u3002"]}),"\n",(0,s.jsx)(i.h4,{id:"nodejspython-\u591a\u6587\u4ef6",children:"nodejs\u3001python \u591a\u6587\u4ef6"}),"\n",(0,s.jsx)(i.p,{children:"\u6307 .llplugin \u540e\u7f00\u540d\u6216\u89e3\u538b\u540e\u4e3a\u4e00\u4e2a\u6587\u4ef6\u5939\u7684 LSE \u63d2\u4ef6\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u5982\u679c\u63d2\u4ef6\u4e3a\u6587\u4ef6\u5939\uff0c\u90a3\u4e48\u68c0\u67e5\u8be5\u6587\u4ef6\u5939\u7ed3\u6784\u3002\u5982\u679c\u5176\u4e2d\u5305\u542b ",(0,s.jsx)(i.code,{children:"manifest.json"}),"\uff0c\u76f4\u63a5\u5c06\u5176\u653e\u5165 ",(0,s.jsx)(i.code,{children:"plugins"})," \u6587\u4ef6\u5939\u5373\u53ef\u3002\u968f\u540e\u5b83\u5c06\u5728\u670d\u52a1\u5668\u4e0b\u6b21\u542f\u52a8\u65f6\u88ab\u52a0\u8f7d\u3002\u8981\u60f3\u8ba9\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1\u5668\u52a0\u8f7d\u8be5\u63d2\u4ef6\uff0c\u4f60\u5fc5\u987b",(0,s.jsx)(i.strong,{children:"\u91cd\u542f\u670d\u52a1\u5668"})," \u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u5982\u679c\u8be5\u63d2\u4ef6\u4e3a\u6587\u4ef6\u5939\u4f46\u4e0d\u5305\u542b ",(0,s.jsx)(i.code,{children:"manifest.json"}),"\uff0c\u4f60\u9700\u8981\u5c06\u5176\u653e\u5165 ",(0,s.jsx)(i.code,{children:"plugins"})," \u6587\u4ef6\u5939\u540e\uff0c\u6309\u4e0a\u6587 quickjs\u3001lua\u3001python \u5355\u6587\u4ef6\u7684\u64cd\u4f5c\u65b9\u6cd5\u8fdb\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u679c\u8be5\u63d2\u4ef6\u4e3a .llplugin \u540e\u7f00\u540d\u7684\u5355\u4e2a\u6587\u4ef6\uff0c\u4f60\u9700\u8981\u5c06\u5176\u540e\u7f00\u540d\u6539\u6210 .zip \u5e76\u89e3\u538b\uff0c\u4e4b\u540e\u6309\u7167\u4e0a\u9762\u4e24\u79cd\u65b9\u6cd5\u8fdb\u884c\u64cd\u4f5c\u3002"})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11100:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>t});var s=n(30758);const r={},l=s.createContext(r);function c(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);