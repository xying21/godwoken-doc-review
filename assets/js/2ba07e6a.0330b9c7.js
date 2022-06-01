"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[516],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(4996),l=(n(9960),["components"]),s={id:"integration",title:"Integration Guide for Ethererm Developers"},p=void 0,c={unversionedId:"integration",id:"version-0.10.4/integration",title:"Integration Guide for Ethererm Developers",description:"",source:"@site/versioned_docs/version-0.10.4/integration.md",sourceDirName:".",slug:"/integration",permalink:"/godwoken-doc/0.10.4/integration",draft:!1,tags:[],version:"0.10.4",frontMatter:{id:"integration",title:"Integration Guide for Ethererm Developers"},sidebar:"sidebar2",previous:{title:"Withdrawal Demo",permalink:"/godwoken-doc/0.10.4/withdraw_lightGodwoken"},next:{title:"FAQ",permalink:"/godwoken-doc/0.10.4/faq"}},m={},d=[{value:"Why Develop on Godwoken?",id:"why-develop-on-godwoken",level:2},{value:"Known Caveats",id:"known-caveats",level:2},{value:"Account Initialization",id:"account-initialization",level:2},{value:"Assets Management",id:"assets-management",level:2},{value:"DApp Development",id:"dapp-development",level:2},{value:"References",id:"references",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ethereum developers can simply use Godwoken as an EVM-compatible layer 2 chain, just like Arbitrum and Optimism."),(0,r.kt)("p",null,"This documentation can be used as an integration guide for wallets and exchanges, or as a reference for developing dApps on Godwoken. It describes how to interact with Godwoken using existing Ethereum development tools, known caveats of version 1 and corresponding workarounds."),(0,r.kt)("p",null,"The knowledge of Ethereum is a prerequisite for using this guide."),(0,r.kt)("h2",{id:"why-develop-on-godwoken"},"Why Develop on Godwoken?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security")," - Nervos Network is a Proof-of-Work (PoW) layer 1 chain and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains. For more information, see the references section."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Low cost")," - A typical Godwoken transaction currently costs less than $0.0001."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ecosystem"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"With Force Bridge, assets from 3 chains (Nervos, Ethereum and BSC) are already available on Godwoken. The support for more chains (Cardano, BTC) is on the way."),(0,r.kt)("li",{parentName:"ul"},"The TVL of Godwoken is now nearly ",(0,r.kt)("a",{parentName:"li",href:"https://defillama.com/chains"},"100 million"),". A number of DeFi dApps (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://www.yokaiswap.com/"},"YokaiSwap"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.daruma.money/"},"DARUMA"),") and wallets (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://www.safepal.io/download"},"SafePal"),") have already been integrated. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6"},(0,r.kt)("strong",{parentName:"a"},"Interoperability 2.0"))," - This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, it is possible to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain.")),(0,r.kt)("h2",{id:"known-caveats"},"Known Caveats"),(0,r.kt)("p",null,"Godwoken V1 is still under development and targets 100% EVM compatibility."),(0,r.kt)("p",null,"To develop on Godwoken V1, the following caveats must be noted:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The existing web3.js libraries are not used to interact with Godwoken because the web3 RPC is not fully compatible with EVM. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/polyjuice-provider"},"compatible providers")," are provided to minimize the workload of porting existing work with web3.js, ethers.js, Truffle and Hardhat. Simply replace the provider with polyjuice-provider when initiating the wallet provider."),(0,r.kt)("li",{parentName:"ul"},"Ethereum wallets are used as transaction signers instead of a full-featured wallet that support checking balances, tracking transactions, transferring assets etc. The Ethereum wallets such as MetaMask support signing and sending transactions on Godwoken."),(0,r.kt)("li",{parentName:"ul"},"For more details on the incompatibilities when deploying Ethereum contracts, see the links below:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"comparisonEVM"},"Comparison with EVM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples"},"Godwoken Compatibility Examples"))))),(0,r.kt)("h2",{id:"account-initialization"},"Account Initialization"),(0,r.kt)("p",null,"It is necessary to initialize an account in order to send transactions on Godwoken."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit YokaiSwap (",(0,r.kt)("a",{parentName:"p",href:"https://testnet.yokaiswap.com/"},"Testnet")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.yokaiswap.com/"},"Mainnet"),"). ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the wallet and obtain the ",(0,r.kt)("strong",{parentName:"p"},"L1 YOKAI DEPOSIT ADDRESS"),"."),(0,r.kt)("img",{src:(0,i.Z)("img/integration/yokai-wallet.png"),width:"60%"}),(0,r.kt)("img",{src:(0,i.Z)("img/integration/deposit-address.png"),width:"50%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send a minimum of ",(0,r.kt)("strong",{parentName:"p"},"400")," CKBs from a CKB wallet to this address."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Use ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"Nervos Faucet")," to fund the CKB wallet in Testnet."),(0,r.kt)("p",{parentName:"li"},"Once the deposit is completed, the CKB balance will be visible on the Yokai Exchange page, which means the account has been initialized."),(0,r.kt)("img",{src:(0,i.Z)("img/integration/ckb-balance.png"),width:"60%"}))),(0,r.kt)("h2",{id:"assets-management"},"Assets Management"),(0,r.kt)("p",null,"There are two different types of tokens on Godwoken, the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gwscan.com/tokens/bridge"},"bridged token")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gwscan.com/tokens/native"},"layer 2 native token"),"."),(0,r.kt)("p",null,"The bridged token is a token bridged from other chains, and mapped as an ERC20 token on Godwoken."),(0,r.kt)("p",null,"The current source chains can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nervos Network"),(0,r.kt)("li",{parentName:"ul"},"Ethereum"),(0,r.kt)("li",{parentName:"ul"},"Binance Smart Chain")),(0,r.kt)("p",null,"It is possible to manipulate the bridged token with ERC20 ABI and given address."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-info/blob/master/mainnet/ERC20TokenList.json"},"Bridged Token list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice/tree/main/solidity/erc20"},"ERC20 contract and ABI used in Godwoken"))),(0,r.kt)("p",null,"CKB is also a bridged token on Godwoken. CKB acts as a native token for Godwoken in the same way that ETH does for Ethereum, but can also operate with the ERC20 proxy contract."),(0,r.kt)("p",null,"A few facts to keep in mind when manipulating the CKB:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do not transfer CKB with ",(0,r.kt)("inlineCode",{parentName:"li"},"sendTransaction")," to arbitrary address carrying the value. Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer")," method in the CKB ERC20 proxy contract to transfer CKB."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"getBalance")," method of the Ethereum RPC to get the balance of CKB. Note that the decimal return value for CKB is 8, not 18 as in ETH. The balance of CKB can also be obtained using the ",(0,r.kt)("inlineCode",{parentName:"li"},"balanceOf")," method in the CKB ERC20 proxy contract."),(0,r.kt)("li",{parentName:"ol"},"The CKB ERC20 proxy contract address is ",(0,r.kt)("inlineCode",{parentName:"li"},"0x6BFD7c449B3FFDaCCcac80Cf3cA6bb89e9bF309C")," for Testnet, and ",(0,r.kt)("inlineCode",{parentName:"li"},"0x9D9599c41383D7009C2093319d576AA6F89A4449")," for Mainnet."),(0,r.kt)("li",{parentName:"ol"},"It is ",(0,r.kt)("strong",{parentName:"li"},"impossible")," to use MetaMask or other wallets to show or send CKB.")),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/assets.ts"},"demo")," for more details."),(0,r.kt)("h2",{id:"dapp-development"},"DApp Development"),(0,r.kt)("p",null,"An existing contract written in Solidity or Vyper can be ported to Godwoken, otherwise write a new contract."),(0,r.kt)("p",null,"There is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/contract.ts"},"demo")," showing a simple way to deploy a contract to and interact with Godwoken.\nThere is no difference in compiling, so using Truffle or Hardhat to write, compile and test the contract is still possible."),(0,r.kt)("p",null,"More compatibility information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"comparisonEVM"},"Comparison with EVM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples"},"Godwoken Compatibility Examples"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rollup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/"},"What is Rollup solution?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.paradigm.xyz/rollups"},"(Almost) Everything you need to know about Optimistic Rollup | Low trust and Low Cost is important"))))))}h.isMDXComponent=!0}}]);