"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5378],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(4996),l=["components"],s={slug:"/",id:"overview",title:"Overview",sidebar_label:"Overview"},c=void 0,u={unversionedId:"overview",id:"version-1.1(WIP)/overview",title:"Overview",description:"",source:"@site/versioned_docs/version-1.1(WIP)/overview.md",sourceDirName:".",slug:"/",permalink:"/godwoken-doc-review/",draft:!1,tags:[],version:"1.1(WIP)",frontMatter:{slug:"/",id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"sidebar2",next:{title:"Godwoken Transaction",permalink:"/godwoken-doc-review/gwtxLife"}},d={},p=[{value:"Godwoken Public Networks",id:"godwoken-public-networks",level:2},{value:"Decentralization Roadmap",id:"decentralization-roadmap",level:2},{value:"Reference",id:"reference",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken"},"Godwoken")," comprises two key components: the Godwoken optimistic rollup framework and the Polyjuice EVM-compatible framework. Polyjuice serves as the backend for the Godwoken rollup framework, providing an Ethereum-compatible layer atop Nervos CKB. Polyjuice leverages the account model and the scalability provided by Godwoken, and integrates ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/evmone"},"evmone")," as the EVM engine to run Ethereum smart contracts. For more information about Polyjuice, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"godwoken-polyjuice"),"."),(0,a.kt)("p",null,"Both Godwoken and Polyjuice together forge a scalable EVM-compatible solution for Nervos, generally known as ",(0,a.kt)("strong",{parentName:"p"},"Godwoken"),"."),(0,a.kt)("p",null,"Godwoken is a suitable choice for those who wish to utilize Ethereum's advantages, including its platform, tooling, and documentation, without the downsides, such as network congestion, high gas fees, oversaturation, and scalability issues. By using Godwoken, Ethereum developers can easily port their existing DApps to Nervos and enjoy instant transactions and low fees in an Ethereum-like environment. For more information on porting Ethereum DApps to Nervos, see ",(0,a.kt)("a",{parentName:"p",href:"integration"},"Integration Guide for Ethereum Developers"),"."),(0,a.kt)("img",{src:(0,i.Z)("img/arch.png"),width:"40%"}),(0,a.kt)("p",null,"Figure 1. Architecture of Godwoken"),(0,a.kt)("h2",{id:"godwoken-public-networks"},"Godwoken Public Networks"),(0,a.kt)("p",null,"Godwoken is currently in active development. For more information on Godwoken public networks, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/tree/info"},"Godwoken info"),"."),(0,a.kt)("p",null,"With Godwoken-Kicker, you can deploy a local Godwoken v1 network in two modes, quick mode or manual-build mode. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"godwokenkicker"},"Godwoken-Kicker"),"."),(0,a.kt)("h2",{id:"decentralization-roadmap"},"Decentralization Roadmap"),(0,a.kt)("p",null,"Godwoken has a solid roadmap to incrementally evolve the Godwoken network from semi-decentralization to full decentralization."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stage 1 (initial launch)"),": The entire network comes with a sequencer to sort transactions. Developers can run their own Godwoken nodes in read-only mode and watch the on-chain rollup transactions to calculate and verify the rollup global state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stage 2"),": Introduce the permissionless challenger node, so everyone can run their Godwoken node in challenger mode. If the sequencer commits an invalid state, a challenge will be automatically processed by a random Godwoken node, depending on which node sends the challenge first. If the challenge has succeeded, the sequencer will lose the collateral asset on the layer 1 and the rollup's state will be reverted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stage 3"),": Introduce the permissionless full nodes. Multiple sequencer mechanisms will be investigated and explored.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nervos","\xa0","Layer","\xa0","2 EVM","\xa0","Training"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nervos.gitbook.io/layer-2-evm/"},"https://nervos.gitbook.io/layer-2-evm/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nervos","\xa0","Document","\xa0","Website"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.nervos.org/"},"https://docs.nervos.org/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken","\xa0","Basics"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://talk.nervos.org/t/introducing-godwoken-a-missing-piece-of-the-cell-model/4464?_360safeparam=13594453"},"Introducing Godwoken - A missing piece of the cell model")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://medium.com/nervosnetwork/towards-ckb-style-lego-pieces-polyjuice-on-godwoken-cbc935d77abf"},"Towards CKB style Lego pieces: Polyjuice on Godwoken"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Source","\xa0","Code"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken"},"https://github.com/nervosnetwork/godwoken"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken-Kicker"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/RetricSu/godwoken-kicker"},"Godwoken-Kicker: one line command to start godwoken-polyjuice chain"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ethereum","\xa0","RPC","\xa0"," (web3","\xa0","RPC)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://geth.ethereum.org/docs/rpc/server"},"Ethereum RPC (web3 RPC)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gitcoin","\xa0","Hackathon"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://github.com/Kuzirashi/gw-gitcoin-instruction"},"Godwoken Gitcoin Instruction")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://gitcoin.co/hackathon/nervos/onboard"},"NERVOS - BROADEN THE SPECTRUM"))))))))}k.isMDXComponent=!0}}]);