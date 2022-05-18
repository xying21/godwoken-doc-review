"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5378],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(4996),l=["components"],c={slug:"/",id:"overview",title:"Overview",sidebar_label:"Overview"},s=void 0,u={unversionedId:"overview",id:"version-1.1(WIP)/overview",title:"Overview",description:"",source:"@site/versioned_docs/version-1.1(WIP)/overview.md",sourceDirName:".",slug:"/",permalink:"/godwoken-doc-review/",draft:!1,tags:[],version:"1.1(WIP)",frontMatter:{slug:"/",id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"sidebar2",next:{title:"Decentralization Roadmap",permalink:"/godwoken-doc-review/decentralizationRoadmap"}},p={},d=[{value:"Godwoken Public Networks",id:"godwoken-public-networks",level:2},{value:"Reference",id:"reference",level:2}],k={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken"},"Godwoken")," comprises two key components: the Godwoken optimistic rollup framework and the Polyjuice EVM-compatible framework. Polyjuice serves as the backend for the Godwoken rollup framework, providing an Ethereum-compatible layer atop Nervos CKB. Polyjuice leverages the account model and the scalability provided by Godwoken, and integrates ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/evmone"},"evmone")," as the EVM engine to run Ethereum smart contracts. For more information about Polyjuice, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"godwoken-polyjuice"),"."),(0,a.kt)("p",null,"Both Godwoken and Polyjuice together forge a scalable EVM-compatible solution for Nervos, generally known as ",(0,a.kt)("strong",{parentName:"p"},"Godwoken"),"."),(0,a.kt)("p",null,"Godwoken is a suitable choice for those who wish to utilize Ethereum's advantages, including its platform, tooling, and documentation, without the downsides, such as network congestion, high gas fees, oversaturation, and scalability issues. By using Godwoken, Ethereum developers can easily port their existing DApps to Nervos and enjoy instant transactions and low fees in an Ethereum-like environment. For more information on poring Ethereum DApps to Nervos, see ",(0,a.kt)("a",{parentName:"p",href:"integration"},"Integration Guide for Ethereum Developers"),"."),(0,a.kt)("img",{src:(0,i.Z)("img/arch.png"),width:"40%"}),(0,a.kt)("p",null,"Figure 1. Architecture of Godwoken"),(0,a.kt)("h2",{id:"godwoken-public-networks"},"Godwoken Public Networks"),(0,a.kt)("p",null,"Godwoken is currently in active development. For more information on Godwoken public networks, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/tree/info"},"Godwoken info"),"."),(0,a.kt)("p",null,"With Godwoken-Kicker, you can deploy a local Godwoken v1 network in two modes, quick mode or manual-build mode. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"godwokenkicker"},"Godwoken-Kicker"),"."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nervos","\xa0","Layer","\xa0","2 EVM","\xa0","Training"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nervos.gitbook.io/layer-2-evm/"},"https://nervos.gitbook.io/layer-2-evm/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nervos","\xa0","Document","\xa0","Website"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.nervos.org/"},"https://docs.nervos.org/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken","\xa0","Basics"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://talk.nervos.org/t/introducing-godwoken-a-missing-piece-of-the-cell-model/4464?_360safeparam=13594453"},"Introducing Godwoken - A missing piece of the cell model")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://medium.com/nervosnetwork/towards-ckb-style-lego-pieces-polyjuice-on-godwoken-cbc935d77abf"},"Towards CKB style Lego pieces: Polyjuice on Godwoken"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Source","\xa0","Code"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken"},"https://github.com/nervosnetwork/godwoken"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken-Kicker"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/RetricSu/godwoken-kicker"},"Godwoken-Kicker: one line command to start godwoken-polyjuice chain"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ethereum","\xa0","RPC","\xa0"," (web3","\xa0","RPC)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://geth.ethereum.org/docs/rpc/server"},"Ethereum RPC (web3 RPC)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gitcoin","\xa0","Hackathon"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://github.com/Kuzirashi/gw-gitcoin-instruction"},"Godwoken Gitcoin Instruction")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://gitcoin.co/hackathon/nervos/onboard"},"NERVOS - BROADEN THE SPECTRUM"))))))))}m.isMDXComponent=!0}}]);