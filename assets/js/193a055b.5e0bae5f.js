"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6438"],{9409:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>h,default:()=>x,assets:()=>d,toc:()=>o,frontMatter:()=>c});var r=JSON.parse('{"id":"advance/Linux/Connect-to-server","title":"\u8FDE\u63A5\u670D\u52A1\u5668","description":"Linux \u7CFB\u7EDF\u4E0A\u6709\u4E00\u4E2A\u5DE5\u5177\u88AB\u4E1A\u754C\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u5B83\u5C31\u662F ssh\u3002\u5B83\u867D\u7136\u4E0D\u80FD\u8FDC\u7A0B\u63A7\u5236\u684C\u9762\uFF0C\u4F46\u662F\u53EF\u4EE5\u8FDC\u7A0B\u767B\u5F55\u670D\u52A1\u5668\u7684\u547D\u4EE4\u884C\uFF0C\u5E76\u8BA9\u670D\u52A1\u5668\u6267\u884C\u4E00\u4E9B\u547D\u4EE4\u3002\u7531\u4E8E ssh \u975E\u5E38\u5E38\u7528\uFF0C\u73B0\u5728\u5F88\u591ALinux\u53D1\u884C\u7248\u90FD\u5DF2\u7ECF\u9ED8\u8BA4\u96C6\u6210\u4E86\u8FD9\u4E2A\u547D\u4EE4\u3002","source":"@site/docs/advance/Linux/Connect-to-server.md","sourceDirName":"advance/Linux","slug":"/advance/Linux/Connect-to-server","permalink":"/advance/Linux/Connect-to-server","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/Connect-to-server.md","tags":[],"version":"current","lastUpdatedBy":"tuanzisama","lastUpdatedAt":1730979318000,"sidebarPosition":2,"frontMatter":{"title":"\u8FDE\u63A5\u670D\u52A1\u5668","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Linux \u5F00\u670D","permalink":"/Sundry/Advance/Linux"},"next":{"title":"\u5982\u4F55\u4FDD\u6301\u670D\u52A1\u5668\u5728 Linux \u670D\u52A1\u5668\u4E2D\u540E\u53F0\u8FD0\u884C","permalink":"/advance/Linux/keep-running"}}'),t=s("52676"),i=s("79938"),l=s("65883"),a=s("71263");let c={title:"\u8FDE\u63A5\u670D\u52A1\u5668",sidebar_position:2},h="\u8FDE\u63A5\u670D\u52A1\u5668",d={},o=[{value:"\u5F00\u542Fssh\u670D\u52A1",id:"\u5F00\u542Fssh\u670D\u52A1",level:2},{value:"\u8FDE\u63A5ssh\u670D\u52A1",id:"\u8FDE\u63A5ssh\u670D\u52A1",level:2},{value:"Linux\u7684ssh\u547D\u4EE4",id:"linux\u7684ssh\u547D\u4EE4",level:3},{value:"\u4F7F\u7528\u5DE5\u5177\u8FDE\u63A5",id:"\u4F7F\u7528\u5DE5\u5177\u8FDE\u63A5",level:3}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u8FDE\u63A5\u670D\u52A1\u5668",children:"\u8FDE\u63A5\u670D\u52A1\u5668"})}),"\n",(0,t.jsxs)(n.p,{children:["Linux \u7CFB\u7EDF\u4E0A\u6709\u4E00\u4E2A\u5DE5\u5177\u88AB\u4E1A\u754C\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u5B83\u5C31\u662F ",(0,t.jsx)(n.code,{children:"ssh"}),"\u3002\u5B83\u867D\u7136\u4E0D\u80FD\u8FDC\u7A0B\u63A7\u5236\u684C\u9762\uFF0C\u4F46\u662F\u53EF\u4EE5\u8FDC\u7A0B\u767B\u5F55\u670D\u52A1\u5668\u7684\u547D\u4EE4\u884C\uFF0C\u5E76\u8BA9\u670D\u52A1\u5668\u6267\u884C\u4E00\u4E9B\u547D\u4EE4\u3002\u7531\u4E8E ",(0,t.jsx)(n.code,{children:"ssh"})," \u975E\u5E38\u5E38\u7528\uFF0C\u73B0\u5728\u5F88\u591ALinux\u53D1\u884C\u7248\u90FD\u5DF2\u7ECF\u9ED8\u8BA4\u96C6\u6210\u4E86\u8FD9\u4E2A\u547D\u4EE4\u3002\n\u76EE\u524D\u4F7F\u7528\u6700\u5E7F\u7684\u63D0\u4F9B ssh \u547D\u4EE4\u7684\u8F6F\u4EF6\u662F ",(0,t.jsx)(n.strong,{children:"OpenSSH"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5F00\u542Fssh\u670D\u52A1",children:"\u5F00\u542Fssh\u670D\u52A1"}),"\n",(0,t.jsxs)(n.p,{children:["\u4E3A\u4E86\u8BA9\u5BA2\u6237\u80FD\u987A\u5229\u8FDE\u63A5\u670D\u52A1\u5668\uFF0C\u4E91\u670D\u52A1\u5668\u7684sshd\u670D\u52A1\u4E00\u822C\u9ED8\u8BA4\u5F00\u542F\u3002\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u5BB6\u91CC\u4E91\uFF0C\u6216\u8005\u4E91\u670D\u52A1\u5668\u7684sshd\u670D\u52A1\u786E\u5B9E\u6CA1\u6709\u5F00\u542F(\u6BD4\u5982\u4F60\u662F\u53EA\u80FD\u901A\u8FC7\u670D\u52A1\u5546\u63D0\u4F9B\u7684VNC\u6216\u8005\u7B2C\u4E09\u65B9\u8FDC\u63A7\u8F6F\u4EF6\u8FDE\u63A5\u7684\u670D\u52A1\u5668\uFF0C\u65E0\u6CD5\u4F7F\u7528ssh)\uFF0C\u90A3\u4E48\u4F60\u53EF\u80FD\u9700\u8981\u5148\u5F00\u542Fsshd\u670D\u52A1\u624D\u80FD\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u3002\n\u5728\u4E3B\u6D41\u7684\u4F7F\u7528 Systemd \u7684Linux\u53D1\u884C\u7248\u4E2D\uFF0C\u6267\u884C",(0,t.jsx)(n.code,{children:"systemctl start sshd"}),"\u547D\u4EE4\u5373\u53EF\u5F00\u542F sshd \u670D\u52A1\uFF0C\u5982\u679C\u8FD9\u4E9B\u547D\u4EE4\u90FD\u62A5\u9519\uFF0C\u8BC1\u660E sshd \u670D\u52A1\u5B58\u5728\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u628A\u62A5\u9519\u590D\u5236\u7C98\u8D34\u5230\u641C\u7D22\u5F15\u64CE\u4E0A\u67E5\u8BE2\u600E\u4E48\u4FEE\u590D\u8FD9\u4E2A\u95EE\u9898\u3002\n\u5F00\u542F sshd \u670D\u52A1\u540E\uFF0C\u4F60\u5C31\u53EF\u4EE5\u8FDE\u63A5\u5230\u8FD9\u53F0\u670D\u52A1\u5668\u4E86\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6210\u529F\u5F00\u542Fssh\u670D\u52A1\u540E\uFF0C\u5982\u679C\u8981\u4ECE\u516C\u7F51\u8FDE\u63A5\uFF0C\u4F60\u8FD8\u9700\u8981\u628Assh\u670D\u52A1\u7684\u7AEF\u53E3",(0,t.jsx)(n.code,{children:"22"}),"\u5F00\u653E\u5230\u516C\u7F51\u3002\u5F00\u653E\u7684\u65B9\u6CD5\u4E0E\u5F00\u653E Windows \u7684\u8FDC\u7A0B\u684C\u9762\u7AEF\u53E3\u7684\u65B9\u5F0F\u5B8C\u5168\u76F8\u540C\uFF0C\u4F46\u662F\u534F\u8BAE\u53EA\u9700\u8981 TCP \u5373\u53EF\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"::: warn"}),"\n",(0,t.jsx)(n.p,{children:"\u4E3A\u4E86\u5B89\u5168\u8BF7\u4E0D\u8981\u5728\u670D\u52A1\u5668\u4E0A\u5141\u8BB8 root \u7528\u6237\u767B\u5F55 ssh\uFF01\u5982\u679C ssh \u88AB\u66B4\u529B\u7834\u89E3\u7684\u8BDD\u4F1A\u4EA7\u751F\u975E\u5E38\u4E25\u91CD\u7684\u540E\u679C\uFF01"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u597D\u53EF\u4EE5\u7981\u7528\u5BC6\u7801\u767B\u5F55\uFF0C\u4EC5\u5141\u8BB8\u5BC6\u94A5\u767B\u5F55"}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4E8E\u914D\u7F6E\u4F60\u670D\u52A1\u5668\u7684 ssh \u4F7F\u5176\u66F4\u5B89\u5168\uFF0C\u53EF\u4EE5\u67E5\u770B",(0,t.jsx)(n.a,{href:"https://wiki.archlinuxcn.org/wiki/OpenSSH#%E4%BF%9D%E6%8A%A4",children:"Arch Linux Wiki \u7684\u8FD9\u7BC7\u6587\u7AE0"})]}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsxs)(n.p,{children:["\u914D\u7F6E\u76F4\u63A5\u5728\u516C\u7F51\u4F7F\u752822\u7AEF\u53E3\u8FDE\u63A5\u670D\u52A1\u5668ssh",(0,t.jsx)(n.strong,{children:"\u4F1A\u5BFC\u81F4\u4E25\u91CD\u7684\u5B89\u5168\u6027\u95EE\u9898"}),"\uFF0C\u8BE6\u89C1",(0,t.jsx)(n.a,{href:"/process/maintenance/how-to-defend-against-cyber-attacks",children:"\u5982\u4F55\u62B5\u5FA1\u7F51\u7EDC\u653B\u51FB"}),"\u3002"]}),(0,t.jsxs)(n.p,{children:["\u53E6\u5916\u9664\u975E\u6709\u660E\u786E\u9700\u6C42\uFF0C\u4E0D\u8981\u968F\u610F\u914D\u7F6E UDP \u534F\u8BAE\u7AEF\u53E3\u6620\u5C04\uFF0C\u5305\u62EC\u4E0A\u6587\u4E2D\u63D0\u5230\u7684",(0,t.jsx)(n.strong,{children:"\u4E0D\u9700\u8981UDP\u534F\u8BAE"}),"\u7684 ssh\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u4F60\u7684\u670D\u52A1\u5668\u88AB DDoS\uFF01\u8BE6\u89C1",(0,t.jsx)(n.a,{href:"/process/maintenance/how-to-defend-against-cyber-attacks",children:"\u5982\u4F55\u62B5\u5FA1\u7F51\u7EDC\u653B\u51FB"}),"\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FDE\u63A5ssh\u670D\u52A1",children:"\u8FDE\u63A5ssh\u670D\u52A1"}),"\n",(0,t.jsx)(n.h3,{id:"linux\u7684ssh\u547D\u4EE4",children:"Linux\u7684ssh\u547D\u4EE4"}),"\n",(0,t.jsx)(n.p,{children:"\u5C31\u50CF Windows \u4E0D\u7528\u5B89\u88C5\u4EFB\u4F55\u8F6F\u4EF6\u5C31\u80FD\u8FDE\u63A5 Windows \u7684\u8FDC\u7A0B\u684C\u9762\u4E00\u6837\uFF0C Linux \u4E5F\u5185\u7F6E\u4E86\u8FDE\u63A5 ssh \u7684\u65B9\u5F0F\uFF0C\u76F4\u63A5\u6267\u884C ssh \u547D\u4EE4\u5373\u53EF\u8FDE\u63A5\u3002\u5B83\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ssh <username>@<address> [-p port]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u4F55\u8981\u6307\u5B9A\u7AEF\u53E3\uFF0C\u4F60\u9700\u8981\u6307\u5B9A\u7AEF\u53E3\u53C2\u6570\u3002\u5728\u4E00\u4E9B\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u8FD9\u4E2A\u53C2\u6570\u662F",(0,t.jsx)(n.code,{children:"-p"}),"\uFF0C\u4F8B\u5982",(0,t.jsx)(n.code,{children:"ssh root@yizhan.wiki -p 48291"}),"\uFF0C\u6709\u4E00\u4E9B\u5DE5\u5177\u4E0A\u5219\u662F\u76F4\u63A5\u5728\u540E\u9762\u8F93\u5165\u7AEF\u53E3\u3002\n\u4F8B\u5982 Xshell \u662F",(0,t.jsx)(n.code,{children:"ssh root@yizhan.wiki 48291"}),"\u3002\n\u4F60\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u5DE5\u5177\u7684\u4F7F\u7528\u65B9\u5F0F\u6765\u786E\u5B9Assh\u7684\u547D\u4EE4\u683C\u5F0F\u3002\u6BD4\u5982\uFF0C\u4F60\u53EF\u4EE5\u4EC5\u6267\u884C ",(0,t.jsx)(n.code,{children:"ssh"})," \u547D\u4EE4(\u7B49\u4EF7\u4E8E ",(0,t.jsx)(n.code,{children:"ssh --help"}),")\uFF0C\u7136\u540E\u8BA9 ssh \u5DE5\u5177\u63D0\u793A\u4F60\u5982\u4F55\u4F7F\u7528\u5F53\u524D\u5DE5\u5177\u7684\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u5982\u679C\u9700\u8981\u66F4\u8BE6\u7EC6\u7684\u8BF4\u660E\u53EF\u4EE5\u8F93\u5165\u547D\u4EE4 ",(0,t.jsx)(n.code,{children:"man ssh"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8F93\u5165\u5B8C\u8FD9\u884C\u547D\u4EE4\u540E\uFF0C\u670D\u52A1\u5668\u901A\u5E38\u4F1A\u8981\u6C42\u4F60\u8F93\u5165\u8BE5\u7528\u6237\u7684\u5BC6\u7801\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u4E0D\u60F3\u624B\u52A8\u8F93\u5BC6\u7801\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,t.jsx)(n.strong,{children:"\u5BC6\u94A5\u767B\u5F55"}),"\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u66F4\u5B89\u5168\u4E14\u901A\u5E38\u66F4\u96BE\u4EE5\u88AB\u7834\u89E3\uFF0C\u5176\u6B65\u9AA4\u4E3A\uFF1A"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"ssh-keygen"})," \u547D\u4EE4\u751F\u6210\u4F60\u7684 ssh \u5BC6\u94A5\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528\u5982 ",(0,t.jsx)(n.code,{children:"cat .ssh/id_xxxx.pub"})," \u547D\u4EE4\u6765\u83B7\u53D6\u4F60\u751F\u6210\u7684 ssh \u516C\u94A5(\u6B64\u547D\u4EE4\u4E2D",(0,t.jsx)(n.code,{children:"xxxx"}),"\u7684\u503C\u901A\u5E38\u53D6\u51B3\u4E8E\u4F60\u751F\u6210\u5BC6\u94A5\u5BF9\u65F6\u9009\u62E9\u7684\u7B97\u6CD5)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728\u670D\u52A1\u5668\u5BF9\u5E94\u7528\u6237\u7684\u5BB6\u76EE\u5F55\u4E0B\u521B\u5EFA ",(0,t.jsx)(n.code,{children:"./ssh/authorized_keys"}),"\uFF0C\u7F16\u8F91\u5B83\uFF0C\u5C06\u4F60\u7684\u516C\u94A5\u7C98\u8D34\u8FDB\u53BB\uFF0C\u6BCF\u4E2A\u516C\u94A5\u72EC\u5360\u4E00\u884C"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8FDE\u63A5\u65F6\u4E0D\u518D\u9700\u8981\u5BC6\u7801\u800C\u662F\u76F4\u63A5\u5F39\u51FA shell"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4F7F\u7528\u5DE5\u5177\u8FDE\u63A5",children:"\u4F7F\u7528\u5DE5\u5177\u8FDE\u63A5"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ED6\u64CD\u4F5C\u7CFB\u7EDF\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5DE5\u5177\u8FDE\u63A5\u81F3\u670D\u52A1\u5668\uFF0C\u5728\u8FD9\u91CC\u4E3E\u51FA\u51E0\u4E2A\u5DE5\u5177\uFF1A"}),"\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(a.Z,{value:"Powershell",label:"Powershell",default:!0,children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(70459).Z+"",width:"963",height:"752"})}),(0,t.jsx)(n.p,{children:"Windows \u7CFB\u7EDF\u81EA\u5E26\u7684 Powershell"}),(0,t.jsxs)(n.p,{children:["\u6309\u4E0B ",(0,t.jsx)(n.code,{children:"Win + R"})," \u8F93\u5165 ",(0,t.jsx)(n.code,{children:"powershell"})," \u5373\u53EF(\u5982\u679C\u5B89\u88C5\u4E86\u65B0\u7248\u7684 Powershell \u90A3\u4E48\u4F60\u5E94\u8BE5\u8F93\u5165",(0,t.jsx)(n.code,{children:"pwsh"}),")"]}),(0,t.jsxs)(n.p,{children:["\u968F\u540E\u5728\u5176\u4E2D\u8F93\u5165 ",(0,t.jsx)(n.code,{children:"ssh -p <port> <username>@<hostname>"})," \u5373\u53EF\u8FDE\u63A5 Linux \u670D\u52A1\u5668\u3002"]}),(0,t.jsx)(n.p,{children:"\u6B64\u65F6\u4F1A\u5F39\u51FA\u662F\u5426\u4FDD\u5B58\u670D\u52A1\u5668\u5BC6\u94A5\uFF0C\u9009\u62E9\u63A5\u53D7\u5E76\u4FDD\u5B58\uFF0C\u4E4B\u540E\u5C31\u4E0D\u4F1A\u518D\u5F39\u51FA\u3002"}),(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"port \u8F93\u5165\u670D\u52A1\u5668\u7684 ssh \u7AEF\u53E3"}),(0,t.jsx)(n.p,{children:"username \u4E3A\u767B\u5F55\u670D\u52A1\u5668\u7684\u7528\u6237\u540D"}),(0,t.jsx)(n.p,{children:"hostname \u4E3A\u670D\u52A1\u5668\u7684\u57DF\u540D\u6216\u8005 IP"})]})]}),(0,t.jsxs)(a.Z,{value:"windterm",label:"WindTerm",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"WindTerm",src:s(17756).Z+"",width:"2560",height:"1520"})}),(0,t.jsx)(n.p,{children:"\u4E00\u4E2A\u5F00\u6E90\u7684 SSH/Telnet/Serial/Shell/Sftp \u5BA2\u6237\u7AEF\u5DE5\u5177"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/kingToolbox/WindTerm",children:"https://github.com/kingToolbox/WindTerm"})})]}),(0,t.jsxs)(a.Z,{value:"finelshell",label:"FinelShell",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"finalshell\u7EC8\u7AEF",src:s(55668).Z+"",width:"1758",height:"847"})}),(0,t.jsx)(n.p,{children:"FinalShell\u662F\u4E00\u4F53\u5316\u7684\u7684\u670D\u52A1\u5668\uFF0C\u7F51\u7EDC\u7BA1\u7406\u8F6F\u4EF6\uFF0C\u4E0D\u4EC5\u662Fssh\u5BA2\u6237\u7AEF\uFF0C\u8FD8\u662F\u529F\u80FD\u5F3A\u5927\u7684\u5F00\u53D1\uFF0C\u8FD0\u7EF4\u5DE5\u5177\uFF0C\u5145\u5206\u6EE1\u8DB3\u5F00\u53D1\uFF0C\u8FD0\u7EF4\u9700\u6C42."})]}),(0,t.jsxs)(a.Z,{value:"xshell",label:"Xshell",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://www.xshell.com/wp-content/uploads/2020/10/p-xshell7-top-zh.png",alt:"xshell\u7EC8\u7AEF"})}),(0,t.jsx)(n.p,{children:"\u4ED6\u79F0\u81EA\u5DF1\u662F \u4E1A\u754C\u6700\u5F3A\u5927\u7684SSH\u5BA2\u6237\u673A"})]}),(0,t.jsxs)(a.Z,{value:"termux",label:"\u5B89\u5353\u624B\u673A(termux)",children:[(0,t.jsxs)(n.p,{children:["\u4F60\u9700\u8981\u5B89\u88C5 termux \u8FD9\u4E2A\u8F6F\u4EF6\u3002\u4F60\u53EF\u4EE5\u53BB Google Play \u4E0B\u8F7D\uFF0C\u4E5F\u53EF\u4EE5\u53BB",(0,t.jsx)(n.a,{href:"https://github.com/termux/termux-app",children:"\u5B83\u7684\u5F00\u6E90\u5730\u5740"}),"\u4E0B\u8F7D\u3002"]}),(0,t.jsx)(n.p,{children:"\u5B89\u88C5\u597D\u4E4B\u540E\uFF0C\u6253\u5F00\u8F6F\u4EF6\u5C31\u662F\u547D\u4EE4\u884C\uFF0C\u968F\u540E\u76F4\u63A5\u4F7F\u7528 ssh \u547D\u4EE4\u5373\u53EF\u8FDE\u63A5\u3002"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"termux\u7EC8\u7AEF",src:s(54861).Z+"",width:"1812",height:"2176"})})]}),(0,t.jsxs)(a.Z,{value:"zsh",label:"macOS(zsh)",children:[(0,t.jsx)(n.p,{children:"macOS \u5185\u7F6E ssh \u547D\u4EE4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u7EC8\u7AEF\u6765\u6267\u884C\u5B83\u3002\u8981\u6253\u5F00macos\u4E0A\u7684\u7EC8\u7AEF\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\uFF1A"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(\u5982\u679C\u7EC8\u7AEFapp\u6CA1\u6709\u88AB\u79FB\u52A8\u8FC7)\u6253\u5F00\u542F\u52A8\u53F0\uFF0C\u6253\u5F00\u7B2C\u4E00\u9875\u7684\u5176\u4ED6\u6587\u4EF6\u5939\uFF0C\u70B9\u51FB\u7EC8\u7AEF\u3002\u6216\u8005\u4F60\u4E5F\u53EF\u4EE5\u5728\u5E94\u7528\u6587\u4EF6\u5939(\u5165\u53E3\u9ED8\u8BA4\u56FA\u5B9A\u5728\u8BBF\u8FBE\u4FA7\u8FB9\u680F\u4E0A)\u91CC\u627E\u5230\u5B83\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6309\u4E0Bcommand+\u7A7A\u683C\u6216\u952E\u76D8\u4E0A\u7684\u641C\u7D22\u952E\u5524\u8D77 spotlight \uFF0C\u8F93\u5165\u201C\u7EC8\u7AEF\u201D\uFF0C\u7136\u540E\u5B83\u5C31\u4F1A\u663E\u793A\u5728\u4E0B\u9762\u3002"}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"macos\u7EC8\u7AEF",src:s(63493).Z+"",width:"1394",height:"966"})}),(0,t.jsx)(n.p,{children:"\u6253\u5F00\u7EC8\u7AEF\u540E\uFF0C\u4F7F\u7528\u4E0A\u6587\u4E2D\u63D0\u5230\u7684ssh\u547D\u4EE4\u5373\u53EF\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u3002"})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u9664\u4E86ssh\u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u79CD\u8FDC\u7A0B\u684C\u9762\u53EB VNC\u3002VNC \u662F\u4E00\u79CD\u8FDC\u7A0B\u684C\u9762\u534F\u8BAE\uFF0C\u5728 Linux \u4E0A\u7684\u4F7F\u7528\u5C24\u5176\u5E7F\u6CDB\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4F5C\u5305\u62EC Windows \u5728\u5185\u7684\u5176\u4ED6\u7CFB\u7EDF\u3002\u7531\u4E8E VNC \u6CA1\u6709\u4E1A\u754C\u91C7\u7528\u6781\u5176\u5E7F\u6CDB\u7684\u5177\u4F53\u8F6F\u4EF6\uFF0C\u8FD9\u91CC\u4E0D\u4ECB\u7ECD\u5E7F\u6CDB\u4F7F\u7528\u7684\u8F6F\u4EF6\uFF0C\u5177\u4F53\u8981\u4F7F\u7528\u53EF\u4EE5\u4E0A\u7F51\u641C\u7D22\u76F8\u5173\u7684\u8F6F\u4EF6\u548C\u6559\u7A0B\u3002"})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},70459:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},55668:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},17756:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},63493:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},54861:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},71263:function(e,n,s){s.d(n,{Z:()=>l});var r=s("52676");s("75271");var t=s("54461");let i="tabItem_qMRs";function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i,l),hidden:s,children:n})}},65883:function(e,n,s){s.d(n,{Z:()=>g});var r=s("52676"),t=s("75271"),i=s("54461"),l=s("15916"),a=s("3225"),c=s("35779"),h=s("15891"),d=s("90472"),o=s("2569");function u(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var p=s("12129");let j="tabList_HycG",m="tabItem_Ym8r";function f(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:c}=e,h=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),o=e=>{let n=e.currentTarget,s=c[h.indexOf(n)].value;s!==t&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{let s=h.indexOf(e.currentTarget)+1;n=h[s]??h[0];break}case"ArrowLeft":{let s=h.indexOf(e.currentTarget)-1;n=h[s]??h[h.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:c.map(e=>{let{value:n,label:s,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>h.push(e),onKeyDown:u,onClick:o,...l,className:(0,i.Z)("tabs__item",m,l?.className,{"tabs__item--active":t===n}),children:s??n},n)})})}function b(e){let{lazy:n,children:s,selectedValue:l}=e,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===l);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:r}=e,i=function(e){let{values:n,children:s}=e;return(0,t.useMemo)(()=>{let e=n??u(s).map(e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[l,p]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=s.find(e=>e.default)??s[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[j,m]=function(e){let{queryString:n=!1,groupId:s}=e,r=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),l=(0,h._X)(i);return[l,(0,t.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:s,groupId:r}),[f,b]=function(e){var n;let{groupId:s}=e;let r=(n=s)?`docusaurus.tab.${n}`:null,[i,l]=(0,o.Nk)(r);return[i,(0,t.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),v=(()=>{let e=j??f;return x({value:e,tabValues:i})?e:null})();return(0,c.Z)(()=>{v&&p(v)},[v]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!x({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),m(e),b(e)},[m,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",j),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function g(e){let n=(0,p.Z)();return(0,r.jsx)(v,{...e,children:u(e.children)},String(n))}},79938:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var r=s(75271);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);