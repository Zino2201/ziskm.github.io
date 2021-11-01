"use strict";(self.webpackChunkziskm=self.webpackChunkziskm||[]).push([[820],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3751:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={},c="Crowd System",l={unversionedId:"getting-started/crowd-system",id:"getting-started/crowd-system",isDocsHomePage:!1,title:"Crowd System",description:"Zino Instanced Skeletal Mesh includes a built-in crowd system allowing to easily make crowds with a low performance cost since generally you don't need to have a per-instance animation for these. It is greatly inspired from Unreal's animation sharing system, but simpler. The system works by creating multiple \"buckets\" per animation state, each bucket has its own animation blueprint ticking. All of this use the Master Pose Component.",source:"@site/docs/getting-started/crowd-system.md",sourceDirName:"getting-started",slug:"/getting-started/crowd-system",permalink:"/ZISKM/getting-started/crowd-system",editUrl:"https://github.com/Zino2201/ZISKM/edit/main/docs/getting-started/crowd-system.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/ZISKM/getting-started/quick-start"},next:{title:"Animation Ticking Rate Optimization",permalink:"/ZISKM/getting-started/uro"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Register a actor",id:"register-a-actor",children:[]},{value:"Switch state",id:"switch-state",children:[]},{value:"Unregister a actor",id:"unregister-a-actor",children:[]}],d={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crowd-system"},"Crowd System"),(0,i.kt)("p",null,"Zino Instanced Skeletal Mesh includes a built-in crowd system allowing to easily make crowds with a low performance cost since generally you don't need to have a per-instance animation for these. It is greatly inspired from Unreal's animation sharing system, but simpler. The system works by creating multiple \"buckets\" per animation state, each bucket has its own animation blueprint ticking. All of this use the Master Pose Component."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"First, you need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Crowd System Setup")," asset, this will tell the system what animation states there are and what animation blueprint to use."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Crowd System Setup",src:n(9457).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Crowd System Setup Asset Editor",src:n(2463).Z})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Skeleton")," defines what skeleton is going to be used, because the crowd system works across different skeletal meshes if they are using the same skeleton."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"States")," is used to declares all animation states that you're going to use, each state has a ",(0,i.kt)("inlineCode",{parentName:"p"},"Gameplay Tag")," field used to associate a unique identifier per state. If you don't know what a Gameplay Tag is, we recommend reading Unreal's official documentation.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Bucket Count")," is used to tell how many buckets the crowd system will create for this state, more buckets mean more diversity in animation but a much higher animation cost. "),(0,i.kt)("h2",{id:"register-a-actor"},"Register a actor"),(0,i.kt)("p",null,"After you have setup your ",(0,i.kt)("inlineCode",{parentName:"p"},"Crowd System Setup")," asset, you can create a manager associated with your system and register actors:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Crowd System Example",src:n(8188).Z})),(0,i.kt)("h2",{id:"switch-state"},"Switch state"),(0,i.kt)("p",null,"To switch state, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Request State Change")," function."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Crowd System Switch",src:n(1170).Z})),(0,i.kt)("h2",{id:"unregister-a-actor"},"Unregister a actor"),(0,i.kt)("p",null,"After you finished with your actor, don't forgot to unregister it.\nThe system will automaticly unregister destroyed actor so it is not necessary to unregister actor before destroying them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Crowd System Unregister",src:n(7463).Z})))}m.isMDXComponent=!0},9457:function(e,t,n){t.Z=n.p+"assets/images/crowd-1-7ea13ea1b4e8fdc04779b8252c3fb761.png"},2463:function(e,t,n){t.Z=n.p+"assets/images/crowd-2-c7514a0870332c1b142c8bab6cd2943c.png"},8188:function(e,t,n){t.Z=n.p+"assets/images/crowd-3-93a638d18b66167940e5c6d145b04c81.png"},1170:function(e,t,n){t.Z=n.p+"assets/images/crowd-4-cdb577a70dfb4f7b379f2ef9a6dcf600.png"},7463:function(e,t,n){t.Z=n.p+"assets/images/crowd-5-d1683c8ced5cea28d1f2a62e645b9c1c.png"}}]);