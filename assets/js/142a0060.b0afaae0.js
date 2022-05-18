"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1219],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(4996),["components"]),l={id:"deployContractHardhat",title:"Deploy a Simple Contract with Hardhat"},p=void 0,c={unversionedId:"deployContractHardhat",id:"version-1.1(WIP)/deployContractHardhat",title:"Deploy a Simple Contract with Hardhat",description:"",source:"@site/versioned_docs/version-1.1(WIP)/deployContractHardhat.md",sourceDirName:".",slug:"/deployContractHardhat",permalink:"/godwoken-doc-review/deployContractHardhat",draft:!1,tags:[],version:"1.1(WIP)",frontMatter:{id:"deployContractHardhat",title:"Deploy a Simple Contract with Hardhat"}},d={},s=[{value:"Environment",id:"environment",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide you will take a very basic smart contract written in Ethereum's Solidity, compile it to EVM bytecode, and deploy it to Godwoken on Layer 2."),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04 LTS")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Godwoken network is available for connection."),(0,o.kt)("li",{parentName:"ul"},"npm is installed.")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the source of Hardhat.  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone --depth=1 https://github.com/NomicFoundation/hardhat\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare a simple hardhat project."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv hardhat/packages/hardhat-core/sample-projects/basic .\n$ cd basic/\n$ ls\ncontracts  hardhat.config.js  LICENSE.md  README.md  scripts  test\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install requirements."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init --yes\n$ npm install --save-dev hardhat @nomiclabs/hardhat-waffle chai\n$ npx hardhat --version\n2.9.3\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the configuration of a Godwoken network to ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),". "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note"),": The Godwoken network can be a local network or public network. "),(0,o.kt)("p",{parentName:"li"},"The following example includes the configuration of a local Godwoken network in the ",(0,o.kt)("inlineCode",{parentName:"p"},"networks")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n\n  networks: {\n    gw_devnet_v1: {\n      url: `http://127.0.0.1:8024`,\n      accounts: [`0x9d5bc55413c14cf4ce360a6051eacdc0e580100a0d3f7f2f48f63623f6b05361`],\n    }\n  },\n\n  ...\n}\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8024"),"\xa0is the Web3 URL of the local Godwoken network, which can be checked by the command line ",(0,o.kt)("inlineCode",{parentName:"p"},"./kicker info"),"  while deploying the local Godwoken network. For more information about deploying a local Godwoken network, see ",(0,o.kt)("a",{parentName:"p",href:"deployLocalNetwork"},"Deploy a Local Network with Godwoken-Kicker"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"0x9d5bc55413c14cf4ce360a6051eacdc0e580100a0d3f7f2f48f63623f6b05361"),"\xa0is the private key used for demonstration in the example. Replace the key with your own key when deploying a simple contract with Hardhat.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run hardhat on the local Godwoken network."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat accounts --network gw_devnet_v1\n0xCD1d13450cFA630728D0390C99957C6948BF7d19\n\n$ npx hardhat compile\nCompiled 2 Solidity files successfully\n\n$ npx hardhat test --network gw_devnet_v1\nGreeter\n    \u2714 Should return the new greeting once it's changed (4376ms)\n\n\n  1 passing (4s)\n\n$ npx hardhat run --network gw_devnet_v1 scripts/sample-script.js\nGreeter deployed to: 0x61acD6135A5F1d7046132EB43D59e0FC1264214d\n")))))}m.isMDXComponent=!0}}]);