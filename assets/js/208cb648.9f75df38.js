"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1612],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(n),h=r,w=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(w,s(s({ref:t},d),{},{components:n})):a.createElement(w,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"withdrawgodwoken",title:"Withdrawing Assets from Godwoken"},c="Withdrawing Assets from Godwoken",i={unversionedId:"withdrawgodwoken",id:"version-0.10/withdrawgodwoken",title:"Withdrawing Assets from Godwoken",description:"This is a guide for withdrawing assets from Godwoken which contains two steps. In this guide, a browser with MetaMask Wallet pre-installed is required.",source:"@site/versioned_docs/version-0.10/godwokenwithdraw.md",sourceDirName:".",slug:"/withdrawgodwoken",permalink:"/godwoken-doc-review/0.10/withdrawgodwoken",draft:!1,tags:[],version:"0.10",frontMatter:{id:"withdrawgodwoken",title:"Withdrawing Assets from Godwoken"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Process of Assets Withdrawal",id:"process-of-assets-withdrawal",level:2},{value:"Step 1. Submit a Withdrawal Request to Godwoken",id:"step-1-submit-a-withdrawal-request-to-godwoken",level:3},{value:"Step 2. Unlock Withdrawal Cells",id:"step-2-unlock-withdrawal-cells",level:3},{value:"Cell Dependencies",id:"cell-dependencies",level:4},{value:"Reference",id:"reference",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"withdrawing-assets-from-godwoken"},"Withdrawing Assets from Godwoken"),(0,o.kt)("p",null,"This is a guide for withdrawing assets from Godwoken which contains two steps. In this guide, a browser with MetaMask Wallet pre-installed is required. "),(0,o.kt)("p",null,"For more information about the concepts of Godwoken and CKB, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.godwoken.io"},"Godwoken"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The following prerequisites apply for withdrawing assets from Godwoken."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- MetaMask\n- NodeJS >= v14\n")),(0,o.kt)("h2",{id:"process-of-assets-withdrawal"},"Process of Assets Withdrawal"),(0,o.kt)("h3",{id:"step-1-submit-a-withdrawal-request-to-godwoken"},"Step 1. Submit a Withdrawal Request to Godwoken"),(0,o.kt)("p",null,"First, call the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"gw_submit_withdrawal_request")," RPC method to burn the assets on layer 2 network. Godwoken then simultaneously creates equal assets on layer 1 network for the receiver, which can be unlocked in 5 days."),(0,o.kt)("p",null,"Note: some information, such as the sender's layer 2 address and the receiver's layer 1 address, are required as parameters when submitting such a request. "),(0,o.kt)("p",null,"For further details see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/classicalliu/gw-demos/blob/d2780e4c20824796f21a8277ea357dcce34c8e9f/src/withdrawal.ts?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L26-L126"},"example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},' {\n   raw: {\n     nonce: "0x2e", // from [get_nonce](https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_get_nonce)\n     capacity: "0x9502f9000", // amount of ckb to withdraw in shannon unit\n     amount: "0x0", // amount of sUDT to withdraw, default to 0x0 if you don\'t need to withdraw sUDT\n     sudt_script_hash: "0x0000000000000000000000000000000000000000000000000000000000000000", // l1 SUDT script hash, default to all zero if you don\'t need to withdraw sUDT\n     account_script_hash: "0x1ddfd18bee966192f8e35e8fbaaae93b88c476960754077d039cf1e56c633c22", // withdrawer layer 2 ckb account lock hash, layer 2 address -> layer 2 lock script -> lock hash\n     sell_amount: "0x0", // TODO unimplemented, selling price of the withdrawal cell in CKB\n     sell_capacity: "0x0", // TODO unimplemented, selling price of the withdrawal cell in SUDT\n     owner_lock_hash: "0xfda77156f5ec403242a03875b2b29e14ba1c910b14a62fbe0baa3e367ae1f0a6", // owner ckb account lock hash, layer 1 address -> lock script -> lock hash\n     payment_lock_hash: "0x0000000000000000000000000000000000000000000000000000000000000000", // TODO unimplemented, layer1 lock to receive the payment, must exists on the chain\n     fee: {\n       sudt_id: "0x1",\n       amount: "0x0",\n     },\n   },\n   signature: "0x8109666e73e8e2ce0bc95d95e08a3a77844c9c5e8049882d863c765843f14af57107bf22c00bce8ea1e45cdbc85415d4f497061913bcbfa97258b2b27897a53a01",\n }\n')),(0,o.kt)("p",null," In the sample above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner_lock_hash")," is from the owner of layer 1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account_script_hash")," is from the ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," of layer 2")),(0,o.kt)("p",null,"To calculate the hashes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},' import { utils, helpers } from "@ckb-lumos/lumos";\n\n // layer 1 receiver lock\n const ownerLock = helpers.parseAddress(owner /* a CKB address like ckt1... */);\n const owner_lock_hash = utils.computeScriptHash(ownerLock);\n\n // layer 2 account\n const l2AccountScript: Script = {\n   code_hash: ethAccountTypeHash,\n   hash_type: "type",\n   args: rollupTypeHash + l2Address.slice(2),\n };\n const account_script_hash = utils.computeScriptHash(l2AccountScript);\n')),(0,o.kt)("p",null," Once the RPC request has been successfully submitted, the hash value returned can be used to query the withdrawal status by calling the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_get_withdrawal"},"gw_get_withdrawal"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2,\n  "jsonrpc": "2.0",\n  "method": "gw_get_withdrawal",\n  //REPLACE PARAMS BELOW WITH YOUR WITHDRAWAL HASH\n  "params": ["0xb57c6da2f803413b5781f8c6508320a0ada61a2992bb59ab38f16da2d02099c1"]\n}\n')),(0,o.kt)("p",null," The value returned should look like\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 2,\n  "result": {\n    "withdrawal": {\n      "raw": {\n        "nonce": "0x2e",\n        "capacity": "0x9502f9000",\n        "amount": "0x0",\n        "sell_amount": "0x0",\n        "sell_capacity": "0x0",\n        "sudt_script_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n        "account_script_hash": "0x1ddfd18bee966192f8e35e8fbaaae93b88c476960754077d039cf1e56c633c22",\n        "owner_lock_hash": "0xfda77156f5ec403242a03875b2b29e14ba1c910b14a62fbe0baa3e367ae1f0a6",\n        "payment_lock_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n        "fee": {\n          "sudt_id": "0x1",\n          "amount": "0x0"\n        }\n      },\n      "signature": "0x8109666e73e8e2ce0bc95d95e08a3a77844c9c5e8049882d863c765843f14af57107bf22c00bce8ea1e45cdbc85415d4f497061913bcbfa97258b2b27897a53a01"\n    },\n    "status": "committed"\n  }\n}\n')),(0,o.kt)("p",null,"A cell with assets will then be created on layer 1, so as to list all the withdrawal cells that requested by the account on layer 2.\nHere it is named ",(0,o.kt)("inlineCode",{parentName:"p"},"AliceL2"),", and for querying one can use ",(0,o.kt)("inlineCode",{parentName:"p"},"@ckb-lumos/ckb-indexer"),", as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},' const getWithdrawalCellSearchParams = function (AliceL2: string) {\n   const layer2Lock: Script = {\n     code_hash: SCRIPTS.eth_account_lock.script_type_hash,\n     hash_type: "type",\n     args: ROLLUP_CONFIG.rollup_type_hash + AliceL2.slice(2).toLowerCase(),\n   };\n   const accountScriptHash = utils.computeScriptHash(layer2Lock);\n\n   return {\n     script: {\n       code_hash: SCRIPTS.withdrawal_lock.script_type_hash,\n       hash_type: "type" as HashType,\n       args: `${ROLLUP_CONFIG.rollup_type_hash}${accountScriptHash.slice(2)}`,\n     },\n     script_type: "lock",\n   };\n };\n const searchParams = getWithdrawalCellSearchParams(AliceL2);\n const collector = ckbIndexer.collector({ lock: searchParams.script });\n')),(0,o.kt)("h3",{id:"step-2-unlock-withdrawal-cells"},"Step 2. Unlock Withdrawal Cells"),(0,o.kt)("p",null," To unlock assets previously created, it will take a while ( approximately 5 days) to unlock the assets owing to security concerns. The ",(0,o.kt)("strong",{parentName:"p"},"Fast Withdrawal")," will be available soon. Once the pending period is expired, the receiver can make a transaction on layer 1 to unlock the asset cell. This transaction will use the withdrawal cell as input and take another CKB cell to cover the transaction fee. Within the withdrawal cell used as output, the lock of the asset cell will be replaced with the lock of the receiver."),(0,o.kt)("p",null,"Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  version: "0x0",\n  cell_deps: [\n    {\n      // withdraw cell dep\n      out_point: {\n        tx_hash: "0xb4b07dcd1571ac18683b515ada40e13b99bd0622197b6817047adc9f407f4828",\n        index: "0x0",\n      },\n      dep_type: "code",\n    },\n    {\n      // rollup cell dep\n      out_point: {\n        tx_hash: "0x6ab0949b8ce8e7b268d12848c2668a049c3c0ac0d5e803311dd2512c96ce3072",\n        index: "0x0",\n      },\n      dep_type: "code",\n    },\n    {\n      // omni lock cell dep\n      out_point: {\n        tx_hash: "0x9154df4f7336402114d04495175b37390ce86a4906d2d4001cf02c3e6d97f39c",\n        index: "0x0",\n      },\n      dep_type: "code",\n    },\n    {\n      // secp256k1 cell dep\n      out_point: {\n        tx_hash: "0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37",\n        index: "0x0",\n      },\n      dep_type: "dep_group",\n    },\n  ],\n  header_deps: [],\n  inputs: [\n    {\n      // withdrawal cell\n      since: "0x0",\n      previous_output: {\n        index: "0x27",\n        tx_hash: "0xfd6b226ca0cf63860b6958b75c498d44d780b273b9a5dd5563925dfb99c7b2d8",\n      },\n    },\n    {\n      // owner cell\n      since: "0x0",\n      previous_output: {\n        index: "0x0",\n        tx_hash: "0xe68156b56efe7da6143a4f4c6b1fd6e57cad34d5677a3eb2ebe0ab4a5a8b8c07",\n      },\n    },\n  ],\n  outputs: [\n    {\n      // with changing the lock of withdrawal cell to owner lock, the assets is unlocked by owner\n      capacity: "0xba43b7400",\n      lock: {\n        code_hash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",\n        hash_type: "type",\n        args: "0x01a08bcc398854db4eaffd9c28b881c65f91e3a28b00",\n      },\n      type: null,\n    },\n    {\n      // owner cell exchange after paying tx fee\n      capacity: "0x95623ea60",\n      lock: {\n        code_hash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",\n        hash_type: "type",\n        args: "0x01a08bcc398854db4eaffd9c28b881c65f91e3a28b00",\n      },\n    },\n  ],\n  outputs_data: ["0x", "0x"],\n  witnesses: ["0x1c000000100000001c0000001c000000080000000000000004000000", "..."],\n}\n')),(0,o.kt)("h4",{id:"cell-dependencies"},"Cell Dependencies"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#Celll"},"CKB Cell")," contains ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#Script"},"Scripts"),", execution of ",(0,o.kt)("inlineCode",{parentName:"p"},"Scripts")," depends on deployed codes. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#celldep"},"Cell dependencies")," is used to provide the codes."),(0,o.kt)("p",null,"In this transaction, cell Deps contain ",(0,o.kt)("inlineCode",{parentName:"p"},"rollup cellDep"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lock cellDep")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw cellDep"),". If there are any sudt withdrawals, be sure to add ",(0,o.kt)("inlineCode",{parentName:"p"},"sudt cellDep"),", as well as the other deps required by the receiver lock. ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw cellDep")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sudt cellDep")," can be obtained from some static config files, and ",(0,o.kt)("inlineCode",{parentName:"p"},"lock cellDep")," relies on the type of lock to be used. The ",(0,o.kt)("inlineCode",{parentName:"p"},"omnilock")," is used in the example, hence the ",(0,o.kt)("inlineCode",{parentName:"p"},"omnilock cellDep")," is added. For the",(0,o.kt)("inlineCode",{parentName:"p"},"rollup cellDep"),", it needs to be obtained from the mem pool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},' async function getRollupCellDep(): Promise<CellDep> {\n   const result = await this.godwokenClient.getLastSubmittedInfo();\n   const txHash = result.transaction_hash;\n   const tx = await this.getPendingTransaction(txHash);\n\n   if (tx == null) {\n     throw new Error("Last submitted tx not found!");\n   }\n\n   let rollupIndex = tx.transaction.outputs.findIndex((o: any) => {\n     return o.type && utils.computeScriptHash(o.type) === ROLLUP_CONFIG.rollup_type_hash;\n   });\n   return {\n     out_point: {\n       tx_hash: txHash,\n       index: `0x${rollupIndex.toString(16)}`,\n     },\n     dep_type: "code",\n   };\n }\n')),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Link"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Docs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Demos"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/classicalliu/gw-demos"},"https://github.com/classicalliu/gw-demos"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken testnet config"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Polyjuice Provider"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/polyjuice-provider"},"https://github.com/nervosnetwork/polyjuice-provider"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Web3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"},"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lumos Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos"))))))}h.isMDXComponent=!0}}]);