"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["5722"],{22994:function(e,n,t){t.d(n,{bK:()=>nr});var r,o,i=t("84458"),u=t("88521"),a=0;let s=function(e){var n=++a;return(0,u.Z)(e)+n};var d=t("1921"),c=t("74590"),h=t("47191"),f=Math.ceil,l=Math.max;let v=function(e,n,t,r){for(var o=-1,i=l(f((n-e)/(t||1)),0),u=Array(i);i--;)u[r?i:++o]=e,e+=t;return u};var g=t("99302"),p=t("69295");let Z=function(e,n,t){return t&&"number"!=typeof t&&(0,g.Z)(e,n,t)&&(n=t=void 0),e=(0,p.Z)(e),void 0===n?(n=e,e=0):n=(0,p.Z)(n),t=void 0===t?e<n?1:-1:(0,p.Z)(t),v(e,n,t,void 0)};var w=t("48657");class b{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return m(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&m(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,t=n._prev;t!==n;)e.push(JSON.stringify(t,y)),t=t._prev;return"["+e.join(", ")+"]"}}function m(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function y(e,n){if("_next"!==e&&"_prev"!==e)return n}var _=d.Z(1);function k(e,n,t,r,o){var u=o?[]:void 0;return i.Z(e.inEdges(r.v),function(r){var i=e.edge(r),a=e.node(r.v);o&&u.push({v:r.v,w:r.w}),a.out-=i,E(n,t,a)}),i.Z(e.outEdges(r.v),function(r){var o=e.edge(r),i=r.w,u=e.node(i);u.in-=o,E(n,t,u)}),e.removeNode(r.v),u}function E(e,n,t){t.out?t.in?e[t.out-t.in+n].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}var x=t("69755"),O=t("63519"),N=t("44822"),P=t("51875"),j=t("64530");var C=(o=function(e,n){var t,r;return null==e?{}:(t=e,r=n,(0,O.Z)(t,r,function(e,n){return(0,N.Z)(t,n)}))},(0,j.Z)((0,P.Z)(o,void 0,c.Z),o+"")),I=t("27272"),L=t("27014");let M=function(e,n){return e>n};var R=t("85627");let T=function(e){return e&&e.length?(0,L.Z)(e,R.Z,M):void 0};var F=t("90437"),D=t("23454"),S=t("26392"),G=t("36616");let V=function(e,n){var t={};return n=(0,G.Z)(n,3),(0,S.Z)(e,function(e,r,o){(0,D.Z)(t,r,n(e,r,o))}),t};var B=t("8321"),q=t("82771"),Y=t("40290"),z=t("80651");let A=function(){return z.Z.Date.now()};function $(e,n,t,r){var o;do o=s(r);while(e.hasNode(o));return t.dummy=n,e.setNode(o,t),o}function W(e){var n=new w.k({multigraph:e.isMultigraph()}).setGraph(e.graph());return i.Z(e.nodes(),function(t){!e.children(t).length&&n.setNode(t,e.node(t))}),i.Z(e.edges(),function(t){n.setEdge(t,e.edge(t))}),n}function J(e,n){var t,r,o=e.x,i=e.y,u=n.x-o,a=n.y-i,s=e.width/2,d=e.height/2;if(!u&&!a)throw Error("Not possible to find intersection inside of the rectangle");return Math.abs(a)*s>Math.abs(u)*d?(a<0&&(d=-d),t=d*u/a,r=d):(u<0&&(s=-s),t=s,r=s*a/u),{x:o+t,y:i+r}}function K(e){var n=h.Z(Z(Q(e)+1),function(){return[]});return i.Z(e.nodes(),function(t){var r=e.node(t),o=r.rank;!B.Z(o)&&(n[o][r.order]=t)}),n}function H(e,n,t,r){var o={width:0,height:0};return arguments.length>=4&&(o.rank=t,o.order=r),$(e,"border",o,n)}function Q(e){return T(h.Z(e.nodes(),function(n){var t=e.node(n).rank;if(!B.Z(t))return t}))}function U(e,n){var t=A();try{return n()}finally{console.log(e+" time: "+(A()-t)+"ms")}}function X(e,n){return n()}function ee(e,n,t,r,o,i){var u=o[n][i-1],a=$(e,"border",{width:0,height:0,rank:i,borderType:n},t);o[n][i]=a,e.setParent(a,r),u&&e.setEdge(u,a,{weight:1})}function en(e){i.Z(e.nodes(),function(n){et(e.node(n))}),i.Z(e.edges(),function(n){et(e.edge(n))})}function et(e){var n=e.width;e.width=e.height,e.height=n}function er(e){e.y=-e.y}function eo(e){var n=e.x;e.x=e.y,e.y=n}var ei=t("80400");let eu=function(e,n){return e&&e.length?(0,L.Z)(e,(0,G.Z)(n,2),ei.Z):void 0};function ea(e){var n={};i.Z(e.sources(),function t(r){var o=e.node(r);if(Object.prototype.hasOwnProperty.call(n,r))return o.rank;n[r]=!0;var i=q.Z(h.Z(e.outEdges(r),function(n){return t(n.w)-e.edge(n).minlen}));return(i===Number.POSITIVE_INFINITY||null==i)&&(i=0),o.rank=i})}function es(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function ed(e){var n,t,r=new w.k({directed:!1}),o=e.nodes()[0],u=e.nodeCount();for(r.setNode(o,{});function(e,n){return i.Z(e.nodes(),function t(r){i.Z(n.nodeEdges(r),function(o){var i=o.v,u=r===i?o.w:i;!e.hasNode(u)&&!es(n,o)&&(e.setNode(u,{}),e.setEdge(r,u,{}),t(u))})}),e.nodeCount()}(r,e)<u;)n=function(e,n){return eu(n.edges(),function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return es(n,t)})}(r,e),t=r.hasNode(n.v)?es(e,n):-es(e,n),function(e,n,t){i.Z(e.nodes(),function(e){n.node(e).rank+=t})}(r,e,t);return r}var ec=t("90083"),eh=t("67998");d.Z(1),d.Z(1);var ef=t("32510"),el=t("50560"),ev=t("67737"),eg=t("88514"),ep=(0,t("8946").Z)("length"),eZ=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),ew="\ud800-\udfff",eb="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",em="\ud83c[\udffb-\udfff]",ey="[^"+ew+"]",e_="(?:\ud83c[\udde6-\uddff]){2}",ek="[\ud800-\udbff][\udc00-\udfff]",eE="(?:"+eb+"|"+em+")?",ex="[\\ufe0e\\ufe0f]?",eO="(?:\\u200d(?:"+[ey,e_,ek].join("|")+")"+ex+eE+")*",eN=RegExp(em+"(?="+em+")|"+("(?:"+[ey+eb+"?",eb,e_,ek,"["+ew+"]"].join("|")+")")+(ex+eE+eO),"g");let eP=function(e){for(var n=eN.lastIndex=0;eN.test(e);)++n;return n},ej=function(e){var n;return(n=e,eZ.test(n))?eP(e):ep(e)},eC=function(e){if(null==e)return 0;if((0,ev.Z)(e))return(0,eg.Z)(e)?ej(e):e.length;var n=(0,el.Z)(e);return"[object Map]"==n||"[object Set]"==n?e.size:(0,ef.Z)(e).length};(function(e){var n={},t={},r=[];if(i.Z(e.sinks(),function o(u){if(Object.prototype.hasOwnProperty.call(t,u))throw new eI;!Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=!0,n[u]=!0,i.Z(e.predecessors(u),o),delete t[u],r.push(u))}),eC(n)!==e.nodeCount())throw new eI;return r}).CycleException=eI;function eI(){}eI.prototype=Error();var eL=t("3073");function eM(e,n,t){!eL.Z(n)&&(n=[n]);var r=(e.isDirected()?e.successors:e.neighbors).bind(e),o=[],u={};return i.Z(n,function(n){if(!e.hasNode(n))throw Error("Graph does not have node: "+n);(function e(n,t,r,o,u,a){!Object.prototype.hasOwnProperty.call(o,t)&&(o[t]=!0,!r&&a.push(t),i.Z(u(t),function(t){e(n,t,r,o,u,a)}),r&&a.push(t))})(e,n,"post"===t,u,r,o)}),o}function eR(e){n=e,t=new w.k().setGraph(n.graph()),i.Z(n.nodes(),function(e){t.setNode(e,n.node(e))}),i.Z(n.edges(),function(e){var r=t.edge(e.v,e.w)||{weight:0,minlen:1},o=n.edge(e);t.setEdge(e.v,e.w,{weight:r.weight+o.weight,minlen:Math.max(r.minlen,o.minlen)})}),ea(e=t);var n,t,r,o,u=ed(e);for(eD(u),eT(u,e);r=eS(u);)o=eG(u,e,r),eV(u,e,r,o)}function eT(e,n){var t=eM(e,e.nodes(),"post");t=t.slice(0,t.length-1),i.Z(t,function(t){(function(e,n,t){var r=e.node(t).parent;e.edge(t,r).cutvalue=eF(e,n,t)})(e,n,t)})}t("58438"),eR.initLowLimValues=eD,eR.initCutValues=eT,eR.calcCutValue=eF,eR.leaveEdge=eS,eR.enterEdge=eG,eR.exchangeEdges=eV;function eF(e,n,t){var r=e.node(t).parent,o=!0,u=n.edge(t,r),a=0;return!u&&(o=!1,u=n.edge(r,t)),a=u.weight,i.Z(n.nodeEdges(t),function(i){var u=i.v===t,s=u?i.w:i.v;if(s!==r){var d=u===o,c=n.edge(i).weight;if(a+=d?c:-c,function(e,n,t){return e.hasEdge(n,t)}(e,t,s)){var h=e.edge(t,s).cutvalue;a+=d?-h:h}}}),a}function eD(e,n){arguments.length<2&&(n=e.nodes()[0]),function e(n,t,r,o,u){var a=r,s=n.node(o);return t[o]=!0,i.Z(n.neighbors(o),function(i){!Object.prototype.hasOwnProperty.call(t,i)&&(r=e(n,t,r,i,o))}),s.low=a,s.lim=r++,u?s.parent=u:delete s.parent,r}(e,{},1,n)}function eS(e){return ec.Z(e.edges(),function(n){return e.edge(n).cutvalue<0})}function eG(e,n,t){var r=t.v,o=t.w;!n.hasEdge(r,o)&&(r=t.w,o=t.v);var i=e.node(r),u=e.node(o),a=i,s=!1;return i.lim>u.lim&&(a=u,s=!0),eu(eh.Z(n.edges(),function(n){return s===eB(e,e.node(n.v),a)&&s!==eB(e,e.node(n.w),a)}),function(e){return es(n,e)})}function eV(e,n,t,r){var o=t.v,u=t.w;e.removeEdge(o,u),e.setEdge(r.v,r.w,{}),eD(e),eT(e,n),function(e,n){var t=ec.Z(e.nodes(),function(e){return!n.node(e).parent}),r=eM(e,t,"pre");r=r.slice(1),i.Z(r,function(t){var r=e.node(t).parent,o=n.edge(t,r),i=!1;!o&&(o=n.edge(r,t),i=!0),n.node(t).rank=n.node(r).rank+(i?o.minlen:-o.minlen)})}(e,n)}function eB(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}var eq=ea;function eY(e){eR(e)}var ez=t("80935"),eA=t("65457"),e$=t("94735"),eW=t("26028");let eJ=function(e,n,t){for(var r=-1,o=e.length,i=n.length,u={};++r<o;){var a=r<i?n[r]:void 0;t(u,e[r],a)}return u};var eK=t("27796"),eH=t("75952"),eQ=t("80954"),eU=t("57050");let eX=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e};var e0=t("94421"),e1=t("56721");let e2=function(e,n){if(e!==n){var t=void 0!==e,r=null===e,o=e==e,i=(0,e1.Z)(e),u=void 0!==n,a=null===n,s=n==n,d=(0,e1.Z)(n);if(!a&&!d&&!i&&e>n||i&&u&&s&&!a&&!d||r&&u&&s||!t&&s||!o)return 1;if(!r&&!i&&!d&&e<n||d&&t&&o&&!r&&!i||a&&t&&o||!u&&o||!s)return -1}return 0},e7=function(e,n,t){for(var r=-1,o=e.criteria,i=n.criteria,u=o.length,a=t.length;++r<u;){var s=e2(o[r],i[r]);if(s){if(r>=a)return s;return s*("desc"==t[r]?-1:1)}}return e.index-n.index},e5=function(e,n,t){n=n.length?(0,eH.Z)(n,function(e){return(0,eL.Z)(e)?function(n){return(0,eQ.Z)(n,1===e.length?e[0]:e)}:e}):[R.Z];var r=-1;return n=(0,eH.Z)(n,(0,e0.Z)(G.Z)),eX((0,eU.Z)(e,function(e,t,o){return{criteria:(0,eH.Z)(n,function(n){return n(e)}),index:++r,value:e}}),function(e,n){return e7(e,n,t)})};var e3=(0,t("11021").Z)(function(e,n){if(null==e)return[];var t=n.length;return t>1&&(0,g.Z)(e,n[0],n[1])?n=[]:t>2&&(0,g.Z)(n[0],n[1],n[2])&&(n=[n[0]]),e5(e,(0,eK.Z)(n,1),[])});function e4(e,n,t){for(var r;n.length&&(r=F.Z(n)).i<=t;)n.pop(),e.push(r.vs),t++;return t}function e9(e,n,t){return h.Z(n,function(n){var r,o,u,a,d;return r=e,o=n,u=t,a=function(e){for(var n;e.hasNode(n=s("_root")););return n}(r),d=new w.k({compound:!0}).setGraph({root:a}).setDefaultNodeLabel(function(e){return r.node(e)}),i.Z(r.nodes(),function(e){var n=r.node(e),t=r.parent(e);(n.rank===o||n.minRank<=o&&o<=n.maxRank)&&(d.setNode(e),d.setParent(e,t||a),i.Z(r[u](e),function(n){var t=n.v===e?n.w:n.v,o=d.edge(t,e),i=B.Z(o)?0:o.weight;d.setEdge(t,e,{weight:r.edge(n).weight+i})}),Object.prototype.hasOwnProperty.call(n,"minRank")&&d.setNode(e,{borderLeft:n.borderLeft[o],borderRight:n.borderRight[o]}))}),d})}function e6(e,n){i.Z(n,function(n){i.Z(n,function(n,t){e.node(n).order=t})})}var e8=t("49373"),ne=t("89357"),nn=t("27042");function nt(e,n,t){if(n>t){var r=n;n=t,t=r}var o=e[n];!o&&(e[n]=o={}),o[t]=!0}function nr(e,n){var t=n&&n.debugTiming?U:X;t("layout",()=>{var n=t("  buildLayoutGraph",()=>(function(e){var n=new w.k({multigraph:!0,compound:!0}),t=nl(e.graph());return n.setGraph(x.Z({},ni,nf(t,no),C(t,nu))),i.Z(e.nodes(),function(t){var r=nl(e.node(t));n.setNode(t,I.Z(nf(r,na),ns)),n.setParent(t,e.parent(t))}),i.Z(e.edges(),function(t){var r=nl(e.edge(t));n.setEdge(t,x.Z({},nc,nf(r,nd),C(r,nh)))}),n})(e));t("  runLayout",()=>(function(e,n){n("    makeSpaceForEdgeLabels",()=>(function(e){var n=e.graph();n.ranksep/=2,i.Z(e.edges(),function(t){var r=e.edge(t);r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===n.rankdir||"BT"===n.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset)})})(e)),n("    removeSelfEdges",()=>(function(e){i.Z(e.edges(),function(n){if(n.v===n.w){var t=e.node(n.v);!t.selfEdges&&(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})})(e)),n("    acyclic",()=>{var n,t;return t="greedy"===(n=e).graph().acyclicer?function(e,n){if(1>=e.nodeCount())return[];var t=function(e,n){var t=new w.k,r=0,o=0;i.Z(e.nodes(),function(e){t.setNode(e,{v:e,in:0,out:0})}),i.Z(e.edges(),function(e){var i=t.edge(e.v,e.w)||0,u=n(e);t.setEdge(e.v,e.w,i+u),o=Math.max(o,t.node(e.v).out+=u),r=Math.max(r,t.node(e.w).in+=u)});var u=Z(o+r+3).map(function(){return new b}),a=r+1;return i.Z(t.nodes(),function(e){E(u,a,t.node(e))}),{graph:t,buckets:u,zeroIdx:a}}(e,n||_),r=function(e,n,t){for(var r,o=[],i=n[n.length-1],u=n[0];e.nodeCount();){for(;r=u.dequeue();)k(e,n,t,r);for(;r=i.dequeue();)k(e,n,t,r);if(e.nodeCount()){for(var a=n.length-2;a>0;--a)if(r=n[a].dequeue()){o=o.concat(k(e,n,t,r,!0));break}}}return o}(t.graph,t.buckets,t.zeroIdx);return c.Z(h.Z(r,function(n){return e.outEdges(n.v,n.w)}))}(n,function(e){return function(n){return e.edge(n).weight}}(n)):function(e){var n=[],t={},r={};return i.Z(e.nodes(),function o(u){if(!Object.prototype.hasOwnProperty.call(r,u))r[u]=!0,t[u]=!0,i.Z(e.outEdges(u),function(e){Object.prototype.hasOwnProperty.call(t,e.w)?n.push(e):o(e.w)}),delete t[u]}),n}(n),void i.Z(t,function(e){var t=n.edge(e);n.removeEdge(e),t.forwardName=e.name,t.reversed=!0,n.setEdge(e.w,e.v,t,s("rev"))})}),n("    nestingGraph.run",()=>{var n,t,r,o,u,a;return t=$(n=e,"root",{},"_root"),r=function(e){var n={};return i.Z(e.children(),function(t){!function t(r,o){var u=e.children(r);u&&u.length&&i.Z(u,function(e){t(e,o+1)}),n[r]=o}(t,1)}),n}(n),u=2*(o=T(ez.Z(r))-1)+1,n.graph().nestingRoot=t,i.Z(n.edges(),function(e){n.edge(e).minlen*=u}),a=function(e){return eA.Z(e.edges(),function(n,t){return n+e.edge(t).weight},0)}(n)+1,void(i.Z(n.children(),function(e){(function e(n,t,r,o,u,a,s){var d=n.children(s);if(!d.length){s!==t&&n.setEdge(t,s,{weight:0,minlen:r});return}var c=H(n,"_bt"),h=H(n,"_bb"),f=n.node(s);n.setParent(c,s),f.borderTop=c,n.setParent(h,s),f.borderBottom=h,i.Z(d,function(i){e(n,t,r,o,u,a,i);var d=n.node(i),f=d.borderTop?d.borderTop:i,l=d.borderBottom?d.borderBottom:i,v=d.borderTop?o:2*o,g=f!==l?1:u-a[s]+1;n.setEdge(c,f,{weight:v,minlen:g,nestingEdge:!0}),n.setEdge(l,h,{weight:v,minlen:g,nestingEdge:!0})}),!n.parent(s)&&n.setEdge(t,c,{weight:0,minlen:u+a[s]})})(n,t,u,a,o,r,e)}),n.graph().nodeRankFactor=u)}),n("    rank",()=>(function(e){switch(e.graph().ranker){case"network-simplex":default:(function(e){eR(e)})(e);break;case"tight-tree":(function(e){ea(e),ed(e)})(e);break;case"longest-path":eq(e)}})(W(e))),n("    injectEdgeLabelProxies",()=>(function(e){i.Z(e.edges(),function(n){var t=e.edge(n);if(t.width&&t.height){var r=e.node(n.v),o={rank:(e.node(n.w).rank-r.rank)/2+r.rank,e:n};$(e,"edge-proxy",o,"_ep")}})})(e)),n("    removeEmptyRanks",()=>{var n,t,r,o,u;return n=e,t=q.Z(h.Z(n.nodes(),function(e){return n.node(e).rank})),r=[],i.Z(n.nodes(),function(e){var o=n.node(e).rank-t;!r[o]&&(r[o]=[]),r[o].push(e)}),o=0,u=n.graph().nodeRankFactor,void i.Z(r,function(e,t){B.Z(e)&&t%u!=0?--o:o&&i.Z(e,function(e){n.node(e).rank+=o})})}),n("    nestingGraph.cleanup",()=>{var n,t;return t=(n=e).graph(),void(n.removeNode(t.nestingRoot),delete t.nestingRoot,i.Z(n.edges(),function(e){n.edge(e).nestingEdge&&n.removeEdge(e)}))}),n("    normalizeRanks",()=>{var n,t;return n=e,t=q.Z(h.Z(n.nodes(),function(e){return n.node(e).rank})),void i.Z(n.nodes(),function(e){var r=n.node(e);Y.Z(r,"rank")&&(r.rank-=t)})}),n("    assignRankMinMax",()=>(function(e){var n=0;i.Z(e.nodes(),function(t){var r=e.node(t);r.borderTop&&(r.minRank=e.node(r.borderTop).rank,r.maxRank=e.node(r.borderBottom).rank,n=T(n,r.maxRank))}),e.graph().maxRank=n})(e)),n("    removeEdgeLabelProxies",()=>(function(e){i.Z(e.nodes(),function(n){var t=e.node(n);"edge-proxy"===t.dummy&&(e.edge(t.e).labelRank=t.rank,e.removeNode(n))})})(e)),n("    normalize.run",()=>{var n;(n=e).graph().dummyChains=[],i.Z(n.edges(),function(e){(function(e,n){var t,r,o=n.v,i=e.node(o).rank,u=n.w,a=e.node(u).rank,s=n.name,d=e.edge(n),c=d.labelRank;if(a!==i+1){e.removeEdge(n);var h=void 0;for(r=0,++i;i<a;++r,++i)d.points=[],t=$(e,"edge",h={width:0,height:0,edgeLabel:d,edgeObj:n,rank:i},"_d"),i===c&&(h.width=d.width,h.height=d.height,h.dummy="edge-label",h.labelpos=d.labelpos),e.setEdge(o,t,{weight:d.weight},s),0===r&&e.graph().dummyChains.push(t),o=t;e.setEdge(o,u,{weight:d.weight},s)}})(n,e)})}),n("    parentDummyChains",()=>{var n,t;return t=function(e){var n={},t=0;return i.Z(e.children(),function r(o){var u=t;i.Z(e.children(o),r),n[o]={low:u,lim:t++}}),n}(n=e),void i.Z(n.graph().dummyChains,function(e){for(var r=n.node(e),o=r.edgeObj,i=function(e,n,t,r){var o,i,u=[],a=[],s=Math.min(n[t].low,n[r].low),d=Math.max(n[t].lim,n[r].lim);o=t;do o=e.parent(o),u.push(o);while(o&&(n[o].low>s||d>n[o].lim));for(i=o,o=r;(o=e.parent(o))!==i;)a.push(o);return{path:u.concat(a.reverse()),lca:i}}(n,t,o.v,o.w),u=i.path,a=i.lca,s=0,d=u[0],c=!0;e!==o.w;){if(r=n.node(e),c){for(;(d=u[s])!==a&&n.node(d).maxRank<r.rank;)s++;d===a&&(c=!1)}if(!c){for(;s<u.length-1&&n.node(d=u[s+1]).minRank<=r.rank;)s++;d=u[s]}n.setParent(e,d),e=n.successors(e)[0]}})}),n("    addBorderSegments",()=>{var n;return n=e,void i.Z(n.children(),function e(t){var r=n.children(t),o=n.node(t);if(r.length&&i.Z(r,e),Object.prototype.hasOwnProperty.call(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var u=o.minRank,a=o.maxRank+1;u<a;++u)ee(n,"borderLeft","_bl",t,o,u),ee(n,"borderRight","_br",t,o,u)}})}),n("    order",()=>(function(e){var n=Q(e),t=e9(e,Z(1,n+1),"inEdges"),r=e9(e,Z(n-1,-1,-1),"outEdges");var o=(u=e,a={},s=eh.Z(u.nodes(),function(e){return!u.children(e).length}),d=T(h.Z(s,function(e){return u.node(e).rank})),f=h.Z(Z(d+1),function(){return[]}),l=e3(s,function(e){return u.node(e).rank}),i.Z(l,function e(n){!Y.Z(a,n)&&(a[n]=!0,f[u.node(n).rank].push(n),i.Z(u.successors(n),e))}),f);e6(e,o);for(var u,a,s,d,f,l,v,g=Number.POSITIVE_INFINITY,p=0,b=0;b<4;++p,++b){(function(e,n){var t=new w.k;i.Z(e,function(e){var r,o,u,a,s,d=e.graph().root,f=function e(n,t,r,o){var u,a,s,d,f,l,v,g,p,Z,w,b,m,y,_,k,E,x,O=n.children(t),N=n.node(t),P=N?N.borderLeft:void 0,j=N?N.borderRight:void 0,I={};P&&(O=eh.Z(O,function(e){return e!==P&&e!==j}));var L=(u=n,a=O,h.Z(a,function(e){var n=u.inEdges(e);if(!n.length)return{v:e};var t=eA.Z(n,function(e,n){var t=u.edge(n),r=u.node(n.v);return{sum:e.sum+t.weight*r.order,weight:e.weight+t.weight}},{sum:0,weight:0});return{v:e,barycenter:t.sum/t.weight,weight:t.weight}}));i.Z(L,function(t){if(n.children(t.v).length){var i=e(n,t.v,r,o);I[t.v]=i,Object.prototype.hasOwnProperty.call(i,"barycenter")&&function(e,n){B.Z(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}(t,i)}});var M=(s=L,d=r,f={},i.Z(s,function(e,n){var t=f[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};!B.Z(e.barycenter)&&(t.barycenter=e.barycenter,t.weight=e.weight)}),i.Z(d.edges(),function(e){var n=f[e.v],t=f[e.w];!B.Z(n)&&!B.Z(t)&&(t.indegree++,n.out.push(f[e.w]))}),function(e){for(var n=[];e.length;){var t=e.pop();n.push(t),i.Z(t.in.reverse(),function(e){return function(n){if(!n.merged)(B.Z(n.barycenter)||B.Z(e.barycenter)||n.barycenter>=e.barycenter)&&function(e,n){var t=0,r=0;e.weight&&(t+=e.barycenter*e.weight,r+=e.weight),n.weight&&(t+=n.barycenter*n.weight,r+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=t/r,e.weight=r,e.i=Math.min(n.i,e.i),n.merged=!0}(e,n)}}(t)),i.Z(t.out,function(n){return function(t){t.in.push(n),0==--t.indegree&&e.push(t)}}(t))}return h.Z(eh.Z(n,function(e){return!e.merged}),function(e){return C(e,["vs","i","barycenter","weight"])})}(eh.Z(f,function(e){return!e.indegree})));(function(e,n){i.Z(e,function(e){e.vs=c.Z(e.vs.map(function(e){return n[e]?n[e].vs:e}))})})(M,I);var R=(l=M,v=o,b=(w=(g=l,p=function(e){return Object.prototype.hasOwnProperty.call(e,"barycenter")},Z={lhs:[],rhs:[]},i.Z(g,function(e){p(e)?Z.lhs.push(e):Z.rhs.push(e)}),Z)).lhs,m=e3(w.rhs,function(e){return-e.i}),y=[],_=0,k=0,E=0,b.sort(function(e){return function(n,t){return n.barycenter<t.barycenter?-1:n.barycenter>t.barycenter?1:e?t.i-n.i:n.i-t.i}}(!!v)),E=e4(y,m,E),i.Z(b,function(e){E+=e.vs.length,y.push(e.vs),_+=e.barycenter*e.weight,k+=e.weight,E=e4(y,m,E)}),x={vs:c.Z(y)},k&&(x.barycenter=_/k,x.weight=k),x);if(P&&(R.vs=c.Z([P,R.vs,j]),n.predecessors(P).length)){var T=n.node(n.predecessors(P)[0]),F=n.node(n.predecessors(j)[0]);!Object.prototype.hasOwnProperty.call(R,"barycenter")&&(R.barycenter=0,R.weight=0),R.barycenter=(R.barycenter*R.weight+T.order+F.order)/(R.weight+2),R.weight+=2}return R}(e,d,t,n);i.Z(f.vs,function(n,t){e.node(n).order=t}),r=e,o=t,u=f.vs,s={},i.Z(u,function(e){for(var n,t,i=r.parent(e);i;){if((n=r.parent(i))?(t=s[n],s[n]=i):(t=a,a=i),t&&t!==i){o.setEdge(t,i);return}i=n}})})})(p%2?t:r,p%4>=2),o=K(e);var m,y=function(e,n){for(var t=0,r=1;r<n.length;++r)t+=function(e,n,t){for(var r=eJ(t||[],h.Z(t,function(e,n){return n})||[],eW.Z),o=c.Z(h.Z(n,function(n){return e3(h.Z(e.outEdges(n),function(n){return{pos:r[n.w],weight:e.edge(n).weight}}),"pos")})),u=1;u<t.length;)u<<=1;var a=2*u-1;u-=1;var s=h.Z(Array(a),function(){return 0}),d=0;return i.Z(o.forEach(function(e){var n=e.pos+u;s[n]+=e.weight;for(var t=0;n>0;)n%2&&(t+=s[n+1]),n=n-1>>1,s[n]+=e.weight;d+=e.weight*t})),d}(e,n[r-1],n[r]);return t}(e,o);if(y<g){;b=0,m=o,v=(0,e$.Z)(m,5),g=y}}e6(e,v)})(e)),n("    insertSelfEdges",()=>(function(e){var n=K(e);i.Z(n,function(n){var t=0;i.Z(n,function(n,r){var o=e.node(n);o.order=r+t,i.Z(o.selfEdges,function(n){$(e,"selfedge",{width:n.label.width,height:n.label.height,rank:o.rank,order:r+ ++t,e:n.e,label:n.label},"_se")}),delete o.selfEdges})})})(e)),n("    adjustCoordinateSystem",()=>{var n,t;("lr"===(t=(n=e).graph().rankdir.toLowerCase())||"rl"===t)&&en(n)}),n("    position",()=>{var n,t,r,o,u,a,s,d,c,f,l,v,g,p,b,m,y,_,k,E,O;(function(e){var n=K(e),t=e.graph().ranksep,r=0;i.Z(n,function(n){var o=T(h.Z(n,function(n){return e.node(n).height}));i.Z(n,function(n){e.node(n).y=r+o/2}),r+=o+t})})(n=W(n=e)),E=(o=K(t=n),d=x.Z((u=t,a=o,s={},eA.Z(a,function(e,n){var t=0,r=0,o=e.length,a=F.Z(n);return i.Z(n,function(e,d){var c=function(e,n){if(e.node(n).dummy)return ec.Z(e.predecessors(n),function(n){return e.node(n).dummy})}(u,e),h=c?u.node(c).order:o;(c||e===a)&&(i.Z(n.slice(r,d+1),function(e){i.Z(u.predecessors(e),function(n){var r=u.node(n),o=r.order;(o<t||h<o)&&!(r.dummy&&u.node(e).dummy)&&nt(s,n,e)})}),r=d+1,t=h)}),n}),s),function(e,n){var t={};function r(n,r,o,u,a){var s;i.Z(Z(r,o),function(r){s=n[r],e.node(s).dummy&&i.Z(e.predecessors(s),function(n){var r=e.node(n);r.dummy&&(r.order<u||r.order>a)&&nt(t,n,s)})})}return eA.Z(n,function(n,t){var o,u=-1,a=0;return i.Z(t,function(i,s){if("border"===e.node(i).dummy){var d=e.predecessors(i);d.length&&(o=e.node(d[0]).order,r(t,a,s,u,o),a=s,u=o)}r(t,a,t.length,o,n.length)}),t}),t}(t,o)),c={},i.Z(["u","d"],function(e){r="u"===e?o:ez.Z(o).reverse(),i.Z(["l","r"],function(n){"r"===n&&(r=h.Z(r,function(e){return ez.Z(e).reverse()}));var o,u,a,s,f,l,v,g=("u"===e?t.predecessors:t.successors).bind(t);var p=(o=0,u=r,a=d,s=g,f={},l={},v={},i.Z(u,function(e){i.Z(e,function(e,n){f[e]=e,l[e]=e,v[e]=n})}),i.Z(u,function(e){var n=-1;i.Z(e,function(e){var t=s(e);if(t.length){for(var r=((t=e3(t,function(e){return v[e]})).length-1)/2,o=Math.floor(r),i=Math.ceil(r);o<=i;++o){var u=t[o];l[e]===e&&n<v[u]&&!function(e,n,t){if(n>t){var r=n;n=t,t=r}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],t)}(a,e,u)&&(l[u]=e,l[e]=f[e]=f[u],n=v[u])}}})}),{root:f,align:l}),Z=function(e,n,t,r,o){var u={},a=function(e,n,t,r){var o=new w.k,u=e.graph(),a=function(e,n,t){return function(r,o,i){var u,a,s=r.node(o),d=r.node(i);if(u=0+s.width/2,Object.prototype.hasOwnProperty.call(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":a=-s.width/2;break;case"r":a=s.width/2}if(a&&(u+=t?a:-a),a=0,u+=(s.dummy?n:e)/2,u+=(d.dummy?n:e)/2,u+=d.width/2,Object.prototype.hasOwnProperty.call(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":a=d.width/2;break;case"r":a=-d.width/2}return a&&(u+=t?a:-a),a=0,u}}(u.nodesep,u.edgesep,r);return i.Z(n,function(n){var r;i.Z(n,function(n){var i=t[n];if(o.setNode(i),r){var u=t[r],s=o.edge(u,i);o.setEdge(u,i,Math.max(a(e,n,r),s||0))}r=n})}),o}(e,n,t,o),s=o?"borderLeft":"borderRight";function d(e,n){for(var t=a.nodes(),r=t.pop(),o={};r;)o[r]?e(r):(o[r]=!0,t.push(r),t=t.concat(n(r))),r=t.pop()}return d(function(e){u[e]=a.inEdges(e).reduce(function(e,n){return Math.max(e,u[n.v]+a.edge(n))},0)},a.predecessors.bind(a)),d(function(n){var t=a.outEdges(n).reduce(function(e,n){return Math.min(e,u[n.w]-a.edge(n))},Number.POSITIVE_INFINITY),r=e.node(n);t!==Number.POSITIVE_INFINITY&&r.borderType!==s&&(u[n]=Math.max(u[n],t))},a.successors.bind(a)),i.Z(r,function(e){u[e]=u[t[e]]}),u}(t,r,p.root,p.align,"r"===n);"r"===n&&(Z=V(Z,function(e){return-e})),c[e+n]=Z})}),v=(f=t,l=c,eu(ez.Z(l),function(e){var n,t,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;return n=e,t=function(e,n){var t=function(e,n){return e.node(n).width}(f,n)/2;r=Math.max(e+t,r),o=Math.min(e-t,o)},null==n||(0,ne.Z)(n,(0,e8.Z)(t),nn.Z),r-o})),g=c,p=v,b=ez.Z(p),m=q.Z(b),y=T(b),i.Z(["u","d"],function(e){i.Z(["l","r"],function(n){var t,r=e+n,o=g[r];if(o!==p){var i=ez.Z(o);(t="l"===n?m-q.Z(i):y-T(i))&&(g[r]=V(o,function(e){return e+t}))}})}),_=c,k=t.graph().align,V(_.ul,function(e,n){if(k)return _[k.toLowerCase()][n];var t=e3(h.Z(_,n));return(t[1]+t[2])/2})),O=function(e,t){n.node(t).x=e},E&&(0,S.Z)(E,(0,e8.Z)(O))}),n("    positionSelfEdges",()=>(function(e){i.Z(e.nodes(),function(n){var t=e.node(n);if("selfedge"===t.dummy){var r=e.node(t.e.v),o=r.x+r.width/2,i=r.y,u=t.x-o,a=r.height/2;e.setEdge(t.e,t.label),e.removeNode(n),t.label.points=[{x:o+2*u/3,y:i-a},{x:o+5*u/6,y:i-a},{x:o+u,y:i},{x:o+5*u/6,y:i+a},{x:o+2*u/3,y:i+a}],t.label.x=t.x,t.label.y=t.y}})})(e)),n("    removeBorderNodes",()=>(function(e){i.Z(e.nodes(),function(n){if(e.children(n).length){var t=e.node(n),r=e.node(t.borderTop),o=e.node(t.borderBottom),i=e.node(F.Z(t.borderLeft)),u=e.node(F.Z(t.borderRight));t.width=Math.abs(u.x-i.x),t.height=Math.abs(o.y-r.y),t.x=i.x+t.width/2,t.y=r.y+t.height/2}}),i.Z(e.nodes(),function(n){"border"===e.node(n).dummy&&e.removeNode(n)})})(e)),n("    normalize.undo",()=>{var n;return n=e,void i.Z(n.graph().dummyChains,function(e){var t,r=n.node(e),o=r.edgeLabel;for(n.setEdge(r.edgeObj,o);r.dummy;)t=n.successors(e)[0],n.removeNode(e),o.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(o.x=r.x,o.y=r.y,o.width=r.width,o.height=r.height),e=t,r=n.node(e)})}),n("    fixupEdgeLabelCoords",()=>(function(e){i.Z(e.edges(),function(n){var t=e.edge(n);if(Object.prototype.hasOwnProperty.call(t,"x"))switch(("l"===t.labelpos||"r"===t.labelpos)&&(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset}})})(e)),n("    undoCoordinateSystem",()=>{var n,t;("bt"===(t=(n=e).graph().rankdir.toLowerCase())||"rl"===t)&&function(e){i.Z(e.nodes(),function(n){er(e.node(n))}),i.Z(e.edges(),function(n){var t=e.edge(n);i.Z(t.points,er),Object.prototype.hasOwnProperty.call(t,"y")&&er(t)})}(n),("lr"===t||"rl"===t)&&(function(e){i.Z(e.nodes(),function(n){eo(e.node(n))}),i.Z(e.edges(),function(n){var t=e.edge(n);i.Z(t.points,eo),Object.prototype.hasOwnProperty.call(t,"x")&&eo(t)})}(n),en(n))}),n("    translateGraph",()=>(function(e){var n=Number.POSITIVE_INFINITY,t=0,r=Number.POSITIVE_INFINITY,o=0,u=e.graph(),a=u.marginx||0,s=u.marginy||0;function d(e){var i=e.x,u=e.y,a=e.width,s=e.height;n=Math.min(n,i-a/2),t=Math.max(t,i+a/2),r=Math.min(r,u-s/2),o=Math.max(o,u+s/2)}i.Z(e.nodes(),function(n){d(e.node(n))}),i.Z(e.edges(),function(n){var t=e.edge(n);Object.prototype.hasOwnProperty.call(t,"x")&&d(t)}),n-=a,r-=s,i.Z(e.nodes(),function(t){var o=e.node(t);o.x-=n,o.y-=r}),i.Z(e.edges(),function(t){var o=e.edge(t);i.Z(o.points,function(e){e.x-=n,e.y-=r}),Object.prototype.hasOwnProperty.call(o,"x")&&(o.x-=n),Object.prototype.hasOwnProperty.call(o,"y")&&(o.y-=r)}),u.width=t-n+a,u.height=o-r+s})(e)),n("    assignNodeIntersects",()=>(function(e){i.Z(e.edges(),function(n){var t,r,o=e.edge(n),i=e.node(n.v),u=e.node(n.w);o.points?(t=o.points[0],r=o.points[o.points.length-1]):(o.points=[],t=u,r=i),o.points.unshift(J(i,t)),o.points.push(J(u,r))})})(e)),n("    reversePoints",()=>(function(e){i.Z(e.edges(),function(n){var t=e.edge(n);t.reversed&&t.points.reverse()})})(e)),n("    acyclic.undo",()=>{var n;return n=e,void i.Z(n.edges(),function(e){var t=n.edge(e);if(t.reversed){n.removeEdge(e);var r=t.forwardName;delete t.reversed,delete t.forwardName,n.setEdge(e.w,e.v,t,r)}})})})(n,t)),t("  updateInputGraph",()=>(function(e,n){i.Z(e.nodes(),function(t){var r=e.node(t),o=n.node(t);r&&(r.x=o.x,r.y=o.y,n.children(t).length&&(r.width=o.width,r.height=o.height))}),i.Z(e.edges(),function(t){var r=e.edge(t),o=n.edge(t);r.points=o.points,Object.prototype.hasOwnProperty.call(o,"x")&&(r.x=o.x,r.y=o.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height})(e,n))})}var no=["nodesep","edgesep","ranksep","marginx","marginy"],ni={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},nu=["acyclicer","ranker","rankdir","align"],na=["width","height"],ns={width:0,height:0},nd=["minlen","weight","width","height","labeloffset"],nc={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},nh=["labelpos"];function nf(e,n){return V(C(e,n),Number)}function nl(e){var n={};return i.Z(e,function(e,t){n[t.toLowerCase()]=e}),n}},58438:function(e,n,t){t.d(n,{k:()=>Z});var r=t("1921"),o=t("84015"),i=t("71257"),u=t("67998"),a=t("46471"),s=t("84458"),d=t("8321"),c=t("27796"),h=t("11021"),f=t("18020"),l=t("91631"),v=(0,h.Z)(function(e){return(0,f.Z)((0,c.Z)(e,1,l.Z,!0))}),g=t("80935"),p=t("65457");class Z{constructor(e={}){this._isDirected=!Object.prototype.hasOwnProperty.call(e,"directed")||e.directed,this._isMultigraph=!!Object.prototype.hasOwnProperty.call(e,"multigraph")&&e.multigraph,this._isCompound=!!Object.prototype.hasOwnProperty.call(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=r.Z(void 0),this._defaultEdgeLabelFn=r.Z(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return!o.Z(e)&&(e=r.Z(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return i.Z(this._nodes)}sources(){var e=this;return u.Z(this.nodes(),function(n){return a.Z(e._in[n])})}sinks(){var e=this;return u.Z(this.nodes(),function(n){return a.Z(e._out[n])})}setNodes(e,n){var t=arguments,r=this;return s.Z(e,function(e){t.length>1?r.setNode(e,n):r.setNode(e)}),this}setNode(e,n){return Object.prototype.hasOwnProperty.call(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]="\0",this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return Object.prototype.hasOwnProperty.call(this._nodes,e)}removeNode(e){if(Object.prototype.hasOwnProperty.call(this._nodes,e)){var n=e=>this.removeEdge(this._edgeObjs[e]);delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],s.Z(this.children(e),e=>{this.setParent(e)}),delete this._children[e]),s.Z(i.Z(this._in[e]),n),delete this._in[e],delete this._preds[e],s.Z(i.Z(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,n){if(!this._isCompound)throw Error("Cannot set parent in a non-compound graph");if(d.Z(n))n="\0";else{n+="";for(var t=n;!d.Z(t);t=this.parent(t))if(t===e)throw Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var n=this._parent[e];if("\0"!==n)return n}}children(e){if(d.Z(e)&&(e="\0"),this._isCompound){var n=this._children[e];if(n)return i.Z(n)}else if("\0"===e)return this.nodes();else if(this.hasNode(e))return[]}predecessors(e){var n=this._preds[e];if(n)return i.Z(n)}successors(e){var n=this._sucs[e];if(n)return i.Z(n)}neighbors(e){var n=this.predecessors(e);if(n)return v(n,this.successors(e))}isLeaf(e){var n;return 0===(n=this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var t=this;s.Z(this._nodes,function(t,r){e(r)&&n.setNode(r,t)}),s.Z(this._edgeObjs,function(e){n.hasNode(e.v)&&n.hasNode(e.w)&&n.setEdge(e,t.edge(e))});var r={};return this._isCompound&&s.Z(n.nodes(),function(e){n.setParent(e,function e(o){var i=t.parent(o);return void 0===i||n.hasNode(i)?(r[o]=i,i):i in r?r[i]:e(i)}(e))}),n}setDefaultEdgeLabel(e){return!o.Z(e)&&(e=r.Z(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return g.Z(this._edgeObjs)}setPath(e,n){var t=this,r=arguments;return p.Z(e,function(e,o){return r.length>1?t.setEdge(e,o,n):t.setEdge(e,o),o}),this}setEdge(){var e,n,t,r,o=!1,i=arguments[0];"object"==typeof i&&null!==i&&"v"in i?(e=i.v,n=i.w,t=i.name,2==arguments.length&&(r=arguments[1],o=!0)):(e=i,n=arguments[1],t=arguments[3],arguments.length>2&&(r=arguments[2],o=!0)),e=""+e,n=""+n,!d.Z(t)&&(t=""+t);var u=m(this._isDirected,e,n,t);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,u))return o&&(this._edgeLabels[u]=r),this;if(!d.Z(t)&&!this._isMultigraph)throw Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[u]=o?r:this._defaultEdgeLabelFn(e,n,t);var a=function(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var u=o;o=i,i=u}var a={v:o,w:i};return r&&(a.name=r),a}(this._isDirected,e,n,t);return e=a.v,n=a.w,Object.freeze(a),this._edgeObjs[u]=a,w(this._preds[n],e),w(this._sucs[e],n),this._in[n][u]=a,this._out[e][u]=a,this._edgeCount++,this}edge(e,n,t){var r=1==arguments.length?y(this._isDirected,arguments[0]):m(this._isDirected,e,n,t);return this._edgeLabels[r]}hasEdge(e,n,t){var r=1==arguments.length?y(this._isDirected,arguments[0]):m(this._isDirected,e,n,t);return Object.prototype.hasOwnProperty.call(this._edgeLabels,r)}removeEdge(e,n,t){var r=1==arguments.length?y(this._isDirected,arguments[0]):m(this._isDirected,e,n,t),o=this._edgeObjs[r];return o&&(e=o.v,n=o.w,delete this._edgeLabels[r],delete this._edgeObjs[r],b(this._preds[n],e),b(this._sucs[e],n),delete this._in[n][r],delete this._out[e][r],this._edgeCount--),this}inEdges(e,n){var t=this._in[e];if(t){var r=g.Z(t);return n?u.Z(r,function(e){return e.v===n}):r}}outEdges(e,n){var t=this._out[e];if(t){var r=g.Z(t);return n?u.Z(r,function(e){return e.w===n}):r}}nodeEdges(e,n){var t=this.inEdges(e,n);if(t)return t.concat(this.outEdges(e,n))}}function w(e,n){e[n]?e[n]++:e[n]=1}function b(e,n){!--e[n]&&delete e[n]}function m(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var u=o;o=i,i=u}return o+"\x01"+i+"\x01"+(d.Z(r)?"\0":r)}Z.prototype._nodeCount=0,Z.prototype._edgeCount=0;function y(e,n){return m(e,n.v,n.w,n.name)}},48657:function(e,n,t){t.d(n,{k:function(){return r.k}});var r=t(58438)},27014:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(56721);let o=function(e,n,t){for(var o=-1,i=e.length;++o<i;){var u=e[o],a=n(u);if(null!=a&&(void 0===s?a==a&&!(0,r.Z)(a):t(a,s)))var s=a,d=u}return d}},80400:function(e,n,t){t.d(n,{Z:function(){return r}});let r=function(e,n){return e<n}},57050:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(61411),o=t(67737);let i=function(e,n){var t=-1,i=(0,o.Z)(e)?Array(e.length):[];return(0,r.Z)(e,function(e,r,o){i[++t]=n(e,r,o)}),i}},63519:function(e,n,t){t.d(n,{Z:()=>c});var r=t("80954"),o=t("26028"),i=t("17966"),u=t("1400"),a=t("26129"),s=t("32452");let d=function(e,n,t,r){if(!(0,a.Z)(e))return e;n=(0,i.Z)(n,e);for(var d=-1,c=n.length,h=c-1,f=e;null!=f&&++d<c;){var l=(0,s.Z)(n[d]),v=t;if("__proto__"===l||"constructor"===l||"prototype"===l)break;if(d!=h){var g=f[l];void 0===(v=r?r(g,l,f):void 0)&&(v=(0,a.Z)(g)?g:(0,u.Z)(n[d+1])?[]:{})}(0,o.Z)(f,l,v),f=f[l]}return e},c=function(e,n,t){for(var o=-1,u=n.length,a={};++o<u;){var s=n[o],c=(0,r.Z)(e,s);t(c,s)&&d(a,(0,i.Z)(s,e),c)}return a}},27272:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(11021),o=t(94596),i=t(99302),u=t(27042),a=Object.prototype,s=a.hasOwnProperty;let d=(0,r.Z)(function(e,n){e=Object(e);var t=-1,r=n.length,d=r>2?n[2]:void 0;for(d&&(0,i.Z)(n[0],n[1],d)&&(r=1);++t<r;){for(var c=n[t],h=(0,u.Z)(c),f=-1,l=h.length;++f<l;){var v=h[f],g=e[v];(void 0===g||(0,o.Z)(g,a[v])&&!s.call(e,v))&&(e[v]=c[v])}}return e})},90083:function(e,n,t){t.d(n,{Z:()=>c});var r,o=t("36616"),i=t("67737"),u=t("71257"),a=t("88343"),s=t("47527"),d=Math.max;let c=(r=function(e,n,t){var r=null==e?0:e.length;if(!r)return -1;var i=null==t?0:(0,s.Z)(t);return i<0&&(i=d(r+i,0)),(0,a.Z)(e,(0,o.Z)(n,3),i)},function(e,n,t){var a=Object(e);if(!(0,i.Z)(e)){var s=(0,o.Z)(n,3);e=(0,u.Z)(e),n=function(e){return s(a[e],e,a)}}var d=r(e,n,t);return d>-1?a[s?e[d]:d]:void 0})},74590:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(27796);let o=function(e){return(null==e?0:e.length)?(0,r.Z)(e,1):[]}},40290:function(e,n,t){t.d(n,{Z:()=>u});var r=Object.prototype.hasOwnProperty;let o=function(e,n){return null!=e&&r.call(e,n)};var i=t("61105");let u=function(e,n){return null!=e&&(0,i.Z)(e,n,o)}},88514:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(21452),o=t(3073),i=t(32398);let u=function(e){return"string"==typeof e||!(0,o.Z)(e)&&(0,i.Z)(e)&&"[object String]"==(0,r.Z)(e)}},90437:function(e,n,t){t.d(n,{Z:function(){return r}});let r=function(e){var n=null==e?0:e.length;return n?e[n-1]:void 0}},47191:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(75952),o=t(36616),i=t(57050),u=t(3073);let a=function(e,n){return((0,u.Z)(e)?r.Z:i.Z)(e,(0,o.Z)(n,3))}},82771:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(27014),o=t(80400),i=t(85627);let u=function(e){return e&&e.length?(0,r.Z)(e,i.Z,o.Z):void 0}},69295:function(e,n,t){t.d(n,{Z:()=>g});var r=/\s/;let o=function(e){for(var n=e.length;n--&&r.test(e.charAt(n)););return n};var i=/^\s+/,u=t("26129"),a=t("56721"),s=0/0,d=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,h=/^0o[0-7]+$/i,f=parseInt;let l=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return s;if((0,u.Z)(e)){var n,t="function"==typeof e.valueOf?e.valueOf():e;e=(0,u.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=(n=e)?n.slice(0,o(n)+1).replace(i,""):n;var r=c.test(e);return r||h.test(e)?f(e.slice(2),r?2:8):d.test(e)?s:+e};var v=1/0;let g=function(e){return e?(e=l(e))===v||e===-v?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}},47527:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(69295);let o=function(e){var n=(0,r.Z)(e),t=n%1;return n==n?t?n-t:n:0}}}]);