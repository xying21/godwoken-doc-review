"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4235],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(s,".").concat(c)]||k[c]||m[c]||a;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return k}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(4996),l=["components"],s={id:"godwokenbridge",title:"Godwoken Bridge"},d=void 0,p={unversionedId:"godwokenbridge",id:"version-1.1(WIP)/godwokenbridge",title:"Godwoken Bridge",description:"",source:"@site/versioned_docs/version-1.1(WIP)/godwokenbridge.md",sourceDirName:".",slug:"/godwokenbridge",permalink:"/godwoken-doc-review/godwokenbridge",draft:!1,tags:[],version:"1.1(WIP)",frontMatter:{id:"godwokenbridge",title:"Godwoken Bridge"},sidebar:"sidebar2",previous:{title:"Integration Guide for Ethereum Developers",permalink:"/godwoken-doc-review/integration"},next:{title:"Godwoken V1.1 Release Note",permalink:"/godwoken-doc-review/releaseNote"}},m={},k=[{value:"Deposit CKB from Layer 1 to MetaMask",id:"deposit-ckb-from-layer-1-to-metamask",level:2},{value:"Withdraw Assets from Godwoken V0 to Godwoken V1",id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1",level:2},{value:"Reference",id:"reference",level:2}],c={toc:k};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v1/"},"Godwoken Bridge")," functions as a token bridge between CKB and Godwoken and allows the quick deposit and withdrawal of assets. It is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zhangyouxin/light-godwoken"},"Light Godwoken"),", an SDK dedicated to the development of decentralized applications on Godwoken."),(0,a.kt)("p",null,"In contrast to the previous version, the current version offers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A unified deposit/withdraw page;"),(0,a.kt)("li",{parentName:"ul"},"Quick asset withdrawal from Godwoken v0 to v1.")),(0,a.kt)("p",null,"In order to follow this tutorial, you must have already downloaded a web3 wallet, such as ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", and have enough CKBs or supported sUDT tokens in the wallet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," A deposit requires at least 400 CKBs and a withdrawal requires at least 650 CKBs."),(0,a.kt)("p",null,"For more information about the concepts of CKB, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB"),"."),(0,a.kt)("h2",{id:"deposit-ckb-from-layer-1-to-metamask"},"Deposit CKB from Layer 1 to MetaMask"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a deposit from layer 1 to layer 2 is 400 CKBs."),(0,a.kt)("p",null,"To deposit CKB from layer 1 to MetaMask:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the Godwoken Network manually to the MetaMask wallet. "),(0,a.kt)("p",{parentName:"li"},"Godwoken v1 is currently in active development. For more information on Godwoken public networks, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info"},"Godwoken info"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login to ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v1/"},"Godwoken Bridge")," with user's own MetaMask wallet, and connect to the Godwoken Network. "),(0,a.kt)("img",{src:(0,i.Z)("img/liteGdwknCon1.jpg"),width:"40%"}),(0,a.kt)("img",{src:(0,i.Z)("img/liteGdwknCon2.jpg"),width:"40%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the amount, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Deposit"),"."),(0,a.kt)("img",{src:(0,i.Z)("img/depo2lyr2.png"),width:"40%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Press ",(0,a.kt)("inlineCode",{parentName:"p"},"sign")," to authorize the transaction on the MetaMask popup to complete the transfer. "),(0,a.kt)("img",{src:(0,i.Z)("img/sign1.png"),width:"40%"}),(0,a.kt)("p",{parentName:"li"},"Refresh the page after a few minutes to check the changes in layer 1 and layer 2 account balances. "))),(0,a.kt)("h2",{id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1"},"Withdraw Assets from Godwoken V0 to Godwoken V1"),(0,a.kt)("p",null,"To withdraw assets from Godwoken v0 to Godwoken v1:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v0"},"Godwoken Bridge Withdrawal UI"),", choose the destination that you want to move the assets into, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Request Withdrawal"),". "),(0,a.kt)("img",{src:(0,i.Z)("img/V0-V1.png"),width:"40%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Confirm")," to complete the transaction."),(0,a.kt)("img",{src:(0,i.Z)("img/withdrawConfirm.png"),width:"40%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign the withdrawal."),(0,a.kt)("img",{src:(0,i.Z)("img/withdrawSign.png"),width:"40%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After successfully withdrawing assets from v0 to v1, check the wallet to see the balance."),(0,a.kt)("img",{src:(0,i.Z)("img/withdrawBalance.png"),width:"40%"}))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The withdrawal period is at least 5 days for withdrawing assets from v0 to v1. Therefore, the user must wait at least five days to receive the assets."))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken Docs"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken Demos"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/classicalliu/gw-demos"},"https://github.com/classicalliu/gw-demos"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken testnet config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Polyjuice Provider"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/polyjuice-provider"},"https://github.com/nervosnetwork/polyjuice-provider"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken Web3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"},"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lumos Documentation"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos"))))))}u.isMDXComponent=!0}}]);