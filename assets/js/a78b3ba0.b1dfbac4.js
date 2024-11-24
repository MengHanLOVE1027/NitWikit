"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6873"],{90424:function(i,e,n){n.r(e),n.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>o,assets:()=>t,toc:()=>h,frontMatter:()=>s});var l=JSON.parse('{"id":"process/plugin/other/Via/Via","title":"\u8DE8\u7248\u672C","description":"\u8DE8\u7248\u672C\u5C31\u662F\u53EF\u4EE5\u8BA9\u4E0D\u540C\u4E8E\u670D\u52A1\u5668\u7248\u672C\u7684\u5BA2\u6237\u7AEF\u7248\u672C\u8FDB\u5165\u670D\u52A1\u5668\uFF0C\u6BD4\u5982\u670D\u52A1\u5668\u7248\u672C\u4E3A 1.20.1\uFF0C\u5B89\u88C5\u8DE8\u7248\u672C\u4E4B\u540E\u53EF\u4EE5\u8BA9 1.19.4 \u8FDB\u5165\u670D\u52A1\u5668","source":"@site/docs-java/process/plugin/other/Via/Via.md","sourceDirName":"process/plugin/other/Via","slug":"/Plugins/OtherPlugin/Via","permalink":"/Java/Plugins/OtherPlugin/Via","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/plugin/other/Via/Via.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1728013653000,"sidebarPosition":4,"frontMatter":{"slug":"/Plugins/OtherPlugin/Via","title":"\u8DE8\u7248\u672C","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"LibreLogin","permalink":"/Java/process/plugin/other/Login/LibreLogin"},"next":{"title":"ViaVersion","permalink":"/Java/process/plugin/other/Via/ViaVersion"}}'),a=n("52676"),r=n("79938");let s={slug:"/Plugins/OtherPlugin/Via",title:"\u8DE8\u7248\u672C",sidebar_position:4},d="\u4EC0\u4E48\u662F\u8DE8\u7248\u672C",t={},h=[{value:"\u652F\u6301\u7684\u8303\u56F4",id:"\u652F\u6301\u7684\u8303\u56F4",level:2},{value:"\u652F\u6301\u7684\u670D\u52A1\u5668",id:"\u652F\u6301\u7684\u670D\u52A1\u5668",level:2},{value:"\u63D2\u4EF6\u7248",id:"\u63D2\u4EF6\u7248",level:3},{value:"\u72EC\u7ACB\u7248(ViaProxy)",id:"\u72EC\u7ACB\u7248viaproxy",level:3},{value:"\u652F\u6301\u7684\u5BA2\u6237\u7AEF\u7248\u672C",id:"\u652F\u6301\u7684\u5BA2\u6237\u7AEF\u7248\u672C",level:2},{value:"\u7B28\u86CB\u811A\u672C",id:"\u7B28\u86CB\u811A\u672C",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u5982\u4F55\u9009\u62E9 Via \u5957\u4EF6",id:"\u5982\u4F55\u9009\u62E9-via-\u5957\u4EF6",level:3},{value:"\u7528\u9AD8\u7248\u672C\u8FDB\u5165\u4F4E\u7248\u672C\u670D\u52A1\u5668\uFF0C\u53EF\u7528\u9AD8\u7248\u672C\u7684\u7269\u54C1\u5417\uFF1F",id:"\u7528\u9AD8\u7248\u672C\u8FDB\u5165\u4F4E\u7248\u672C\u670D\u52A1\u5668\u53EF\u7528\u9AD8\u7248\u672C\u7684\u7269\u54C1\u5417",level:3},{value:"\u4F4E\u7248\u672C\u663E\u793A\u4E0D\u4E86\u9AD8\u7248\u672C\u7684\u6750\u8D28\u600E\u4E48\u529E\uFF1F",id:"\u4F4E\u7248\u672C\u663E\u793A\u4E0D\u4E86\u9AD8\u7248\u672C\u7684\u6750\u8D28\u600E\u4E48\u529E",level:3},{value:"\u5982\u679C\u6211\u62E5\u6709\u4EE3\u7406\u7AEF\uFF0C\u6211\u5E94\u8BE5\u5C06 Via \u5B89\u88C5\u5230\u54EA\u91CC\uFF1F",id:"\u5982\u679C\u6211\u62E5\u6709\u4EE3\u7406\u7AEF\u6211\u5E94\u8BE5\u5C06-via-\u5B89\u88C5\u5230\u54EA\u91CC",level:3},{value:"Via \u7684\u7248\u672C\u9009\u62E9",id:"via-\u7684\u7248\u672C\u9009\u62E9",level:3},{value:"\u4E3A\u4EC0\u4E48\u6211\u5728\u670D\u52A1\u5668\u5B89\u88C5 Via \u540E\uFF0C\u4ECD\u7136\u663E\u793A\u7248\u672C\u4E0D\u652F\u6301\uFF1F",id:"\u4E3A\u4EC0\u4E48\u6211\u5728\u670D\u52A1\u5668\u5B89\u88C5-via-\u540E\u4ECD\u7136\u663E\u793A\u7248\u672C\u4E0D\u652F\u6301",level:3},{value:"\u6211\u65E0\u6CD5\u4F7F\u7528\u65B0\u7248\u672C\u7684\u65B9\u5757\u3001\u529F\u80FD",id:"\u6211\u65E0\u6CD5\u4F7F\u7528\u65B0\u7248\u672C\u7684\u65B9\u5757\u529F\u80FD",level:3},{value:"\u6211\u7684\u73A9\u5BB6\u56E0\u4E3A\u53D1\u9001\u592A\u591A\u6570\u636E\u5305\u800C\u88AB\u8E22\uFF1F",id:"\u6211\u7684\u73A9\u5BB6\u56E0\u4E3A\u53D1\u9001\u592A\u591A\u6570\u636E\u5305\u800C\u88AB\u8E22",level:3}];function c(i){let e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...i.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"\u4EC0\u4E48\u662F\u8DE8\u7248\u672C",children:"\u4EC0\u4E48\u662F\u8DE8\u7248\u672C"})}),"\n",(0,a.jsx)(e.p,{children:"\u8DE8\u7248\u672C\u5C31\u662F\u53EF\u4EE5\u8BA9\u4E0D\u540C\u4E8E\u670D\u52A1\u5668\u7248\u672C\u7684\u5BA2\u6237\u7AEF\u7248\u672C\u8FDB\u5165\u670D\u52A1\u5668\uFF0C\u6BD4\u5982\u670D\u52A1\u5668\u7248\u672C\u4E3A 1.20.1\uFF0C\u5B89\u88C5\u8DE8\u7248\u672C\u4E4B\u540E\u53EF\u4EE5\u8BA9 1.19.4 \u8FDB\u5165\u670D\u52A1\u5668"}),"\n",(0,a.jsx)(e.admonition,{type:"danger",children:(0,a.jsx)(e.p,{children:"\u8DE8\u7248\u672C\u4E0D\u9002\u5408\u6A21\u7EC4\u670D\uFF0C\u4EE3\u7406\u7AEF\uFF0CLeaves\uFF01\uFF01\u4F1A\u51FA\u5F88\u591A\u95EE\u9898\uFF01\uFF01"})}),"\n",(0,a.jsx)(e.admonition,{type:"danger",children:(0,a.jsx)(e.p,{children:"\u8DE8\u7248\u672C\u4E0D\u5B9C\u592A\u5927\uFF0C\u9664\u975E\u4F60\u6709\u80FD\u529B\u4F7F\u4F4E\u7248\u672C\u73A9\u5BB6\u83B7\u5F97\u66F4\u597D\u7684\u6E38\u620F\u4F53\u9A8C(\u6700\u7B80\u5355\u7684\u4F8B\u5B50:1.17 \u4EE5\u4E0B\u7684\u73A9\u5BB6\u4E00\u8FDB\u5165 1.17+\u670D\u52A1\u5668\u7684 y \u5C0F\u4E8E 0\uFF0C\u5C31\u4F1A\u75AF\u72C2\u56DE\u5F39\uFF0C\u4E25\u91CD\u5F71\u54CD\u6E38\u620F\u4F53\u9A8C)"})}),"\n",(0,a.jsx)(e.h2,{id:"\u652F\u6301\u7684\u8303\u56F4",children:"\u652F\u6301\u7684\u8303\u56F4"}),"\n",(0,a.jsx)(e.p,{children:"\u63D2\u4EF6\u7248\u672C\u7684 via \u652F\u6301\u4EE5\u4E0B\u7248\u672C\u8FDB\u5165\u670D\u52A1\u5668"}),"\n",(0,a.jsx)(e.p,{children:"ViaVersion+ViaBackwards:1.9-\u6700\u65B0"}),"\n",(0,a.jsx)(e.p,{children:"ViaRewind:1.7-1.8(\u8FDB\u5165\u9AD8\u7248\u672C\u670D\u52A1\u5668)"}),"\n",(0,a.jsx)(e.p,{children:"\u5916\u7F6E\u7248\u672C(ViaProxy)(\u672C\u7BC7\u6587\u6863\u4E0D\u4F1A\u8BB2\u5230)\u652F\u6301\u4EE5\u4E0B\u7248\u672C\u8FDB\u5165\u670D\u52A1\u5668"}),"\n",(0,a.jsx)(e.h2,{id:"\u652F\u6301\u7684\u670D\u52A1\u5668",children:"\u652F\u6301\u7684\u670D\u52A1\u5668"}),"\n",(0,a.jsx)(e.h3,{id:"\u63D2\u4EF6\u7248",children:"\u63D2\u4EF6\u7248"}),"\n",(0,a.jsx)(e.p,{children:"ViaVersion+ViaBackwards+ViaRewind"}),"\n",(0,a.jsxs)(e.p,{children:["\u8FD9\u4E09\u4E2A\u652F\u6301\u7684\u670D\u52A1\u5668\u662F1.17\uFF5E1.21(Via*\u63D2\u4EF6\u5254\u9664\u4E86Java8\u652F\u6301\uFF0C\u9700\u8981\u5728",(0,a.jsx)(e.a,{href:"https://ci.viaversion.com",children:"Via\u5B98\u65B9\u6784\u5EFA\u7AD9"}),"\u83B7\u53D6\u652F\u6301Java8\u76841.8\uFF5E1.21\u63D2\u4EF6)"]}),"\n",(0,a.jsx)(e.h3,{id:"\u72EC\u7ACB\u7248viaproxy",children:"\u72EC\u7ACB\u7248(ViaProxy)"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Release (1.0.0 - 1.20.5)"}),"\n",(0,a.jsx)(e.li,{children:"Beta (b1.0 - b1.8.1)"}),"\n",(0,a.jsx)(e.li,{children:"Alpha (a1.0.15 - a1.2.6)"}),"\n",(0,a.jsxs)(e.li,{children:["Classic (c0.0.15 - c0.30 \u5305\u542B ",(0,a.jsx)(e.a,{href:"https://wiki.vg/Classic_Protocol_Extension",children:"CPE"}),")"]}),"\n",(0,a.jsx)(e.li,{children:"\u611A\u4EBA\u8282\u5FEB\u7167 (3D Shareware\uFF0C 20w14infinite)"}),"\n",(0,a.jsx)(e.li,{children:"\u6218\u6597\u6D4B\u8BD5\u5FEB\u7167 (Combat Test 8c)"}),"\n",(0,a.jsxs)(e.li,{children:["\u57FA\u5CA9\u7248\u670D\u52A1\u5668 1.20.70 (",(0,a.jsx)(e.a,{href:"https://github.com/RaphiMC/ViaBedrock#features",children:"\u67D0\u4E9B\u529F\u80FD\u7F3A\u5931"}),")"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u652F\u6301\u7684\u5BA2\u6237\u7AEF\u7248\u672C",children:"\u652F\u6301\u7684\u5BA2\u6237\u7AEF\u7248\u672C"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Release (1.7.2 - 1.21)"}),"\n",(0,a.jsxs)(e.li,{children:["\u57FA\u5CA9\u7248 (\u9700\u8981",(0,a.jsx)(e.a,{href:"https://geysermc.org/download",children:"Geyser \u63D2\u4EF6"}),")"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u4F60\u6CA1\u770B\u9519\uFF0CViaProxy \u53EF\u4EE5\u8BA9 1.20.4 \u5BA2\u6237\u7AEF\u8FDB\u5165 Classic \u7248\u672C\u7684\u670D\u52A1\u5668(\u540E\u8005\u5927\u6982\u53D1\u5E03\u4E8E\u5341\u5E74\u524D)\uFF0C"}),"\n",(0,a.jsx)(e.p,{children:"\u4E5F\u53EF\u4EE5\u8BA9\u4E00\u4E2A JAVA \u7248\u73A9\u5BB6\u8FDB\u5165\u57FA\u5CA9\u7248\u670D\u52A1\u5668\uFF0C\u6216\u8005\u57FA\u5CA9\u7248\u73A9\u5BB6\u8FDB\u5165 JAVA \u7248\u670D\u52A1\u5668\uFF01"}),"\n",(0,a.jsx)(e.h2,{id:"\u7B28\u86CB\u811A\u672C",children:"\u7B28\u86CB\u811A\u672C"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://dl.yizhan.wiki/windows-latest/via-setup.exe",children:"\u4E0B\u8F7D"}),"\uFF0C\u4E3A\u4F60\u81EA\u52A8\u914D\u7F6E Via"]}),"\n",(0,a.jsx)(e.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(e.h3,{id:"\u5982\u4F55\u9009\u62E9-via-\u5957\u4EF6",children:"\u5982\u4F55\u9009\u62E9 Via \u5957\u4EF6"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://jo0001.github.io/ViaSetup/?lang=en",children:"Via \u5957\u4EF6\u9009\u62E9"})}),"\n",(0,a.jsx)(e.h3,{id:"\u7528\u9AD8\u7248\u672C\u8FDB\u5165\u4F4E\u7248\u672C\u670D\u52A1\u5668\u53EF\u7528\u9AD8\u7248\u672C\u7684\u7269\u54C1\u5417",children:"\u7528\u9AD8\u7248\u672C\u8FDB\u5165\u4F4E\u7248\u672C\u670D\u52A1\u5668\uFF0C\u53EF\u7528\u9AD8\u7248\u672C\u7684\u7269\u54C1\u5417\uFF1F"}),"\n",(0,a.jsx)(e.p,{children:"\u4F1A\u7528\u6750\u8D28\u5DEE\u4E0D\u591A\u7684\u4F4E\u7248\u672C\u7269\u54C1\u66FF\u6362\u663E\u793A\uFF0C\u4F46\u4EAB\u53D7\u4E0D\u5230\u5927\u90E8\u5206\u9AD8\u7248\u672C\u7269\u54C1\u529F\u80FD"}),"\n",(0,a.jsx)(e.h3,{id:"\u4F4E\u7248\u672C\u663E\u793A\u4E0D\u4E86\u9AD8\u7248\u672C\u7684\u6750\u8D28\u600E\u4E48\u529E",children:"\u4F4E\u7248\u672C\u663E\u793A\u4E0D\u4E86\u9AD8\u7248\u672C\u7684\u6750\u8D28\u600E\u4E48\u529E\uFF1F"}),"\n",(0,a.jsx)(e.p,{children:"\u539F\u7248\u63D2\u4EF6\u4E0D\u652F\u6301\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u624B\u6BB5\u7ED5\u8FC7\u540E\u9762\u4F1A\u8BB2(\u4EC5\u652F\u6301 1.16+)"}),"\n",(0,a.jsx)(e.h3,{id:"\u5982\u679C\u6211\u62E5\u6709\u4EE3\u7406\u7AEF\u6211\u5E94\u8BE5\u5C06-via-\u5B89\u88C5\u5230\u54EA\u91CC",children:"\u5982\u679C\u6211\u62E5\u6709\u4EE3\u7406\u7AEF\uFF0C\u6211\u5E94\u8BE5\u5C06 Via \u5B89\u88C5\u5230\u54EA\u91CC\uFF1F"}),"\n",(0,a.jsx)(e.p,{children:"Bungeecord\u3001Velocity \u548C\u5404\u79CD Minecraft \u670D\u52A1\u7AEF\u5747\u53EF\u4EE5\u5B89\u88C5 Via\u3002\u4F46\u5982\u679C\u4F60\u6709\u53CD\u4F5C\u5F0A\u3001\u53CD\u5047\u4EBA\u7B49\uFF0C"}),"\n",(0,a.jsx)(e.p,{children:"\u5BF9\u6570\u636E\u5305\u8FDB\u884C\u5927\u91CF\u64CD\u4F5C\u7684\u63D2\u4EF6\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u83B7\u53D6\u7684\u73A9\u5BB6\u7248\u672C\u4E3A\u4EE3\u7406\u7AEF\u7684\u7248\u672C\uFF0C\u5E76\u975E\u73A9\u5BB6\u5BA2\u6237\u7AEF\u7248\u672C\uFF0C"}),"\n",(0,a.jsx)(e.p,{children:"\u5BB9\u6613\u5F15\u8D77\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u8BF7\u8C28\u614E\u5C06 Via \u5957\u4EF6\u5B89\u88C5\u5728\u4EE3\u7406\u7AEF\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"via-\u7684\u7248\u672C\u9009\u62E9",children:"Via \u7684\u7248\u672C\u9009\u62E9"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679C\u9009\u62E9\u540C\u65F6\u5B89\u88C5 viaversion \u548C viabackward \uFF0C\u4ED6\u4EEC\u7684\u7248\u672C\u5C3D\u91CF\u9009\u62E9\u76F8\u540C\u7684\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u4E3A\u4EC0\u4E48\u6211\u5728\u670D\u52A1\u5668\u5B89\u88C5-via-\u540E\u4ECD\u7136\u663E\u793A\u7248\u672C\u4E0D\u652F\u6301",children:"\u4E3A\u4EC0\u4E48\u6211\u5728\u670D\u52A1\u5668\u5B89\u88C5 Via \u540E\uFF0C\u4ECD\u7136\u663E\u793A\u7248\u672C\u4E0D\u652F\u6301\uFF1F"}),"\n",(0,a.jsx)(e.p,{children:"\u4E0B\u8F7D\u66F4\u65B0\u7248\u672C\u7684\u4EE3\u7406\u7AEF\u540E\uFF0C\u9700\u8981\u66F4\u65B0 Via \u5957\u4EF6\u5230\u6700\u65B0\u7248\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5373\u4F7F\u4E0D\u4F7F\u7528\u4EE3\u7406\u7AEF\uFF0C\u6211\u4EEC\u4ECD\u7136\u5EFA\u8BAE\u4F60\u81F3\u5C11\u6BCF\u4E2A\u6708\u66F4\u65B0\u4E00\u6B21 Via"}),"\n",(0,a.jsx)(e.h3,{id:"\u6211\u65E0\u6CD5\u4F7F\u7528\u65B0\u7248\u672C\u7684\u65B9\u5757\u529F\u80FD",children:"\u6211\u65E0\u6CD5\u4F7F\u7528\u65B0\u7248\u672C\u7684\u65B9\u5757\u3001\u529F\u80FD"}),"\n",(0,a.jsx)(e.p,{children:"Via \u7684\u76EE\u7684\u662F\u5141\u8BB8\u517C\u5BB9\uFF0C\u4F46\u4E0D\u6253\u7B97\u6DFB\u52A0\u65B0\u7684\u9879\u76EE\u3001\u65B9\u5757\u548C\u529F\u80FD\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6211\u7684\u73A9\u5BB6\u56E0\u4E3A\u53D1\u9001\u592A\u591A\u6570\u636E\u5305\u800C\u88AB\u8E22",children:"\u6211\u7684\u73A9\u5BB6\u56E0\u4E3A\u53D1\u9001\u592A\u591A\u6570\u636E\u5305\u800C\u88AB\u8E22\uFF1F"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679C\u4F60\u6CA1\u6709\u4F7F\u7528 paper fork \u53EF\u4EE5\u5728\u914D\u7F6E\u4E2D\u589E\u52A0 max-pps\uFF0C\u5982\u679C\u4F7F\u7528paper fork\uFF0C"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528 paper fork\uFF0C\u8BF7\u76F4\u63A5\u5C06\u5176\u8C03\u6574\u4E3A -1\uFF0C\u5E76\u8C03\u6574 paper \u7684 pps \u9650\u5236\u3002"}),"\n",(0,a.jsx)(e.p,{children:"(\u5C1D\u8BD5\u589E\u52A0\u5230\u73A9\u5BB6\u6CA1\u6709\u95EE\u9898\uFF0C\u4E0D\u8981\u5168\u90E8\u7981\u7528\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u670D\u52A1\u5668\u88AB\u73A9\u5BB6\u6076\u610F\u4F7F\u7528\u6570\u636E\u5305\u5361\u987F)"})]})}function o(i={}){let{wrapper:e}={...(0,r.a)(),...i.components};return e?(0,a.jsx)(e,{...i,children:(0,a.jsx)(c,{...i})}):c(i)}},79938:function(i,e,n){n.d(e,{Z:function(){return d},a:function(){return s}});var l=n(75271);let a={},r=l.createContext(a);function s(i){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof i?i(e):{...e,...i}},[e,i])}function d(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:s(i.components),l.createElement(r.Provider,{value:e},i.children)}}}]);