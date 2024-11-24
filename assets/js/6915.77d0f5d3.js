"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6915"],{16052:function(e,r,o){o.d(r,{Z:()=>f});var t=o("52676");o("75271");var n=o("54461"),l=o("72513"),s=o("57997"),a=o("30222"),i=o("71894"),d=o("25813"),c=o("7621");function u(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,t.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let p="breadcrumbHomeIcon_jHpg";function b(){let e=(0,c.ZP)("/");return(0,t.jsx)("li",{className:"breadcrumbs__item",children:(0,t.jsx)(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,t.jsx)(u,{className:p})})})}let m="breadcrumbsContainer_hy83";function h(e){let{children:r,href:o,isLast:n}=e,l="breadcrumbs__link";return n?(0,t.jsx)("span",{className:l,itemProp:"name",children:r}):o?(0,t.jsx)(i.Z,{className:l,href:o,itemProp:"item",children:(0,t.jsx)("span",{itemProp:"name",children:r})}):(0,t.jsx)("span",{className:l,children:r})}function g(e){let{children:r,active:o,index:l,addMicrodata:s}=e;return(0,t.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":o}),children:[r,(0,t.jsx)("meta",{itemProp:"position",content:String(l+1)})]})}function f(){let e=(0,s.s1)(),r=(0,a.Ns)();return e?(0,t.jsx)("nav",{className:(0,n.Z)(l.k.docs.docBreadcrumbs,m),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,t.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[r&&(0,t.jsx)(b,{}),e.map((r,o)=>{let n=o===e.length-1,l="category"===r.type&&r.linkUnlisted?void 0:r.href;return(0,t.jsx)(g,{active:n,index:o,addMicrodata:!!l,children:(0,t.jsx)(h,{href:l,isLast:n,children:r.label})},o)})]})}):null}},89207:function(e,r,o){o.d(r,{Z:function(){return s}});var t=o(52676);o(75271);var n=o(25813),l=o(31212);function s(e){let{previous:r,next:o}=e;return(0,t.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[r&&(0,t.jsx)(l.Z,{...r,subLabel:(0,t.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),o&&(0,t.jsx)(l.Z,{...o,subLabel:(0,t.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},77288:function(e,r,o){o.d(r,{Z:function(){return i}});var t=o(52676);o(75271);var n=o(54461),l=o(25813),s=o(72513),a=o(36490);function i(e){let{className:r}=e,o=(0,a.E)();return o.badge?(0,t.jsx)("span",{className:(0,n.Z)(r,s.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,t.jsx)(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:o.label},children:"Version: {versionLabel}"})}):null}},26619:function(e,r,o){o.d(r,{Z:function(){return g}});var t=o(52676);o(75271);var n=o(54461),l=o(74863),s=o(71894),a=o(25813),i=o(23974),d=o(72513),c=o(2970),u=o(36490);let p={unreleased:function(e){let{siteTitle:r,versionMetadata:o}=e;return(0,t.jsx)(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:r,versionLabel:(0,t.jsx)("b",{children:o.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:r,versionMetadata:o}=e;return(0,t.jsx)(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:r,versionLabel:(0,t.jsx)("b",{children:o.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function b(e){let r=p[e.versionMetadata.banner];return(0,t.jsx)(r,{...e})}function m(e){let{versionLabel:r,to:o,onClick:n}=e;return(0,t.jsx)(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:r,latestVersionLink:(0,t.jsx)("b",{children:(0,t.jsx)(s.Z,{to:o,onClick:n,children:(0,t.jsx)(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function h(e){let r,{className:o,versionMetadata:s}=e,{siteConfig:{title:a}}=(0,l.Z)(),{pluginId:u}=(0,i.gA)({failfast:!0}),{savePreferredVersionName:p}=(0,c.J)(u),{latestDocSuggestion:h,latestVersionSuggestion:g}=(0,i.Jo)(u);let f=h??(r=g).docs.find(e=>e.id===r.mainDocId);return(0,t.jsxs)("div",{className:(0,n.Z)(o,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,t.jsx)("div",{children:(0,t.jsx)(b,{siteTitle:a,versionMetadata:s})}),(0,t.jsx)("div",{className:"margin-top--md",children:(0,t.jsx)(m,{versionLabel:g.label,to:f.path,onClick:()=>p(g.name)})})]})}function g(e){let{className:r}=e,o=(0,u.E)();return o.banner?(0,t.jsx)(h,{className:r,versionMetadata:o}):null}},84102:function(e,r,o){o.d(r,{m6:function(){return U}});let t=e=>{let r=a(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let o=e[0],t=r.nextPart.get(o),l=t?n(e.slice(1),t):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},a=e=>{let{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),o).forEach(([e,o])=>{i(o,t,e,r)}),t},i=(e,r,o,t)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=o;return}if("function"==typeof e){if(c(e)){i(e(t),r,o,t);return}r.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(([e,n])=>{i(n,d(r,e),o,t)})})},d=(e,r)=>{let o=e;return r.split("-").forEach(e=>{!o.nextPart.has(e)&&o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,o])=>[e,o.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,o])=>[r+e,o])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map,n=(n,l)=>{o.set(n,l),++r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},b=e=>{let{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],l=r.length,s=e=>{let o;let s=[],a=0,i=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(t||e.slice(d,d+l)===r)){s.push(e.slice(i,d)),i=d+l;continue}if("/"===c){o=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===s.length?e:e.substring(i),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:s,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:o&&o>i?o-i:void 0}};return o?e=>o({className:e,parseClassName:s}):s},m=e=>{if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r},h=e=>({cache:p(e.cacheSize),parseClassName:b(e),...t(e)}),g=/\s+/,f=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),a="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:i,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=o(r),p=!!u,b=t(p?c.substring(0,u):c);if(!b){if(!p||!(b=t(c))){a=r+(a.length>0?" "+a:a);continue}p=!1}let h=m(i).join(":"),g=d?h+"!":h,f=g+b;if(l.includes(f))continue;l.push(f);let v=n(b,p);for(let e=0;e<v.length;++e){let r=v[e];l.push(g+r)}a=r+(a.length>0?" "+a:a)}return a};function v(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=x(e))&&(t&&(t+=" "),t+=r);return t}let x=e=>{let r;if("string"==typeof e)return e;let o="";for(let t=0;t<e.length;t++)e[t]&&(r=x(e[t]))&&(o&&(o+=" "),o+=r);return o},y=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,j=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,L=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,N=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Z=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,T=e=>I(e)||j.has(e)||k.test(e),P=e=>H(e,"length",q),I=e=>!!e&&!Number.isNaN(Number(e)),S=e=>H(e,"number",I),_=e=>!!e&&Number.isInteger(Number(e)),M=e=>e.endsWith("%")&&I(e.slice(0,-1)),G=e=>w.test(e),A=e=>z.test(e),E=new Set(["length","size","percentage"]),V=e=>H(e,E,D),B=e=>H(e,"position",D),R=new Set(["image","url"]),$=e=>H(e,R,F),W=e=>H(e,"",J),O=()=>!0,H=(e,r,o)=>{let t=w.exec(e);if(t)return t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]);return!1},q=e=>L.test(e)&&!N.test(e),D=()=>!1,J=e=>Z.test(e),F=e=>C.test(e),U=function(e,...r){let o,t,n;let l=function(a){return t=(o=h(r.reduce((e,r)=>r(e),e()))).cache.get,n=o.cache.set,l=s,s(a)};function s(e){let r=t(e);if(r)return r;let l=f(e,o);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=y("colors"),r=y("spacing"),o=y("blur"),t=y("brightness"),n=y("borderColor"),l=y("borderRadius"),s=y("borderSpacing"),a=y("borderWidth"),i=y("contrast"),d=y("grayscale"),c=y("hueRotate"),u=y("invert"),p=y("gap"),b=y("gradientColorStops"),m=y("gradientColorStopPositions"),h=y("inset"),g=y("margin"),f=y("opacity"),v=y("padding"),x=y("saturate"),w=y("scale"),k=y("sepia"),j=y("skew"),z=y("space"),L=y("translate"),N=()=>["auto","contain","none"],Z=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",G,r],E=()=>[G,r],R=()=>["",T,P],H=()=>["auto",I,G],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],D=()=>["solid","dashed","dotted","double","none"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",G],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[I,G];return{cacheSize:500,separator:":",theme:{colors:[O],spacing:[T,P],blur:["none","",A,G],brightness:Q(),borderColor:[e],borderRadius:["none","","full",A,G],borderSpacing:E(),borderWidth:R(),contrast:Q(),grayscale:U(),hueRotate:Q(),invert:U(),gap:E(),gradientColorStops:[e],gradientColorStopPositions:[M,P],inset:C(),margin:C(),opacity:Q(),padding:E(),saturate:Q(),scale:Q(),sepia:U(),skew:Q(),space:E(),translate:E()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),G]}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",_,G]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",_,G]}],"grid-cols":[{"grid-cols":[O]}],"col-start-end":[{col:["auto",{span:["full",_,G]},G]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[O]}],"row-start-end":[{row:["auto",{span:[_,G]},G]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,r]}],"min-w":[{"min-w":[G,r,"min","max","fit"]}],"max-w":[{"max-w":[G,r,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[G,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,r,"auto","min","max","fit"]}],"font-size":[{text:["base",A,P]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",S]}],"font-family":[{font:[O]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",I,S]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",T,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...D(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",T,P]}],"underline-offset":[{"underline-offset":["auto",T,G]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),B]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",V]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...D(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:D()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...D()]}],"outline-offset":[{"outline-offset":[T,G]}],"outline-w":[{outline:[T,P]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[T,P]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,W]}],"shadow-color":[{shadow:[O]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...J(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",A,G]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[_,G]}],"translate-x":[{"translate-x":[L]}],"translate-y":[{"translate-y":[L]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[T,P,S]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);