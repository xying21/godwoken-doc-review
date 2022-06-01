"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[9862],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=r,b=p["".concat(i,".").concat(k)]||p[k]||u[k]||c;return t?o.createElement(b,a(a({ref:n},d),{},{components:t})):o.createElement(b,a({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},394:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=t(7462),r=t(3366),c=(t(7294),t(3905)),a=(t(4996),["components"]),s={id:"keyConcepts",title:"Accounts"},i=void 0,l={unversionedId:"keyConcepts",id:"keyConcepts",title:"Accounts",description:"",source:"@site/docs/keyConcepts.md",sourceDirName:".",slug:"/keyConcepts",permalink:"/godwoken-doc/next/keyConcepts",draft:!1,tags:[],version:"current",frontMatter:{id:"keyConcepts",title:"Accounts"},sidebar:"sidebar2",previous:{title:"Godwoken-kicker Command Line",permalink:"/godwoken-doc/next/commandUsage"},next:{title:"Godwoken Release notes",permalink:"/godwoken-doc/next/releaseNote"}},d={},u=[{value:"Accounts",id:"accounts",level:2},{value:"CKB Miner",id:"ckb-miner",level:2},{value:"CKB Faucet",id:"ckb-faucet",level:2},{value:"Deployer of Rollup Genesis Cell",id:"deployer-of-rollup-genesis-cell",level:2},{value:"Deployer of Rollup Scripts",id:"deployer-of-rollup-scripts",level:2},{value:"Godwoken Block Producer",id:"godwoken-block-producer",level:2}],p={toc:u};function k(e){var n=e.components,t=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"accounts"},"Accounts"),(0,c.kt)("p",null,"All the accounts used in Godwoken-Kicker have the privkeys located in the ",(0,c.kt)("inlineCode",{parentName:"p"},". /accounts/")," directory, CKB genesis blocks pre-issued large amounts of CKBs for these accounts. The following describes the usage and occurrence of the accounts used in Godwoken-Kicker, for more details refer to ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/layer1/ckb/specs/dev.toml"},"ckb chain spec"),". "),(0,c.kt)("p",null,"Following commands can provide more information about each account:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd godwoken-kicker\n$ ls -1 accounts\nckb-miner-and-faucet.key\ngodwoken-block-producer.key\nREADME.md\nrollup-genesis-cell-deployer.key\nrollup-scripts-deployer.key\n\n$ ckb-cli util key-info --privkey-path accounts/godwoken-block-producer.key\nPut this config in < ckb.toml >:\n\n[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nhash_type = "type"\nargs = "0x1d4b2a15f55ba1aa035f64ad6080e0943cc5ec0b"\nmessage = "0x"\n\naddress:\n  mainnet: ckb1qyqp6je2zh64hgd2qd0kfttqsrsfg0x9as9szl4xjv\n  testnet: ckt1qyqp6je2zh64hgd2qd0kfttqsrsfg0x9as9sl6te7s\nlock_arg: 0x1d4b2a15f55ba1aa035f64ad6080e0943cc5ec0b\nlock_hash: 0x24842c3d28d9df39325ad05284efc3492972eec61606b51ded82369b3de72f04\nold-testnet-address: ckt1q9gry5zgr49j5904tws65q6lvjkkpq8qjs7vtmqt3eg4j8\npubkey: 02261c3634191150993cb256adeb0ddf29a2b317b99885323564e28886933c9099\n')),(0,c.kt)("p",null,"Note that using one key for everything is do-able, but will cause confusion and make debugging more difficult."),(0,c.kt)("h2",{id:"ckb-miner"},"CKB Miner"),(0,c.kt)("p",null,"This key identifies the CKB miner and can be used to unlock the block cellbase. The corresponding public key is configured in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/layer1/ckb/ckb.toml#L143-L147"},(0,c.kt)("inlineCode",{parentName:"a"},"block_assembler"))," inside ",(0,c.kt)("inlineCode",{parentName:"p"},"[ckb.toml](https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/layer1/ckb/ckb.toml)")," of the CKB base directory."),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Click to check details"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd godwoken-kicker/docker/layer1/ckb/\n$ cat ckb.toml\n# Config generated by `ckb init --chain dev`\n\ndata_dir = "data"\n\n[chain]\n# Choose the kind of chains to run, possible values:\n# - { file = "specs/dev.toml" }\n# - { bundled = "specs/testnet.toml" }\n# - { bundled = "specs/mainnet.toml" }\nspec = { file = "specs/dev.toml" }\n\n[logger]\nfilter = "info"\ncolor = true\nlog_to_file = true\nlog_to_stdout = true\n\n[sentry]\n# set to blank to disable sentry error collection\ndsn = ""\n# if you are willing to help us to improve,\n# please leave a way to contact you when we have troubles to reproduce the errors.\n# org_contact = ""\n\n# # **Experimental** Monitor memory changes.\n# [memory_tracker]\n# # Seconds between checking the process, 0 is disable, default is 0.\n# interval = 600\n\n[db]\n# The capacity of RocksDB cache, which caches uncompressed data blocks, indexes and filters, default is 128MB.\n# Rocksdb will automatically create and use an 8MB internal cache if you set this value to 0.\n# To turning off cache, you need to set this value to 0 and set `no_block_cache = true` in the options_file,\n# however, we strongly discourage this setting, it may lead to severe performance degradation.\ncache_size = 134217728\n\n# Provide an options file to tune RocksDB for your workload and your system configuration.\n# More details can be found in [the official tuning guide](https://github.com/facebook/rocksdb/wiki/RocksDB-Tuning-Guide).\noptions_file = "default.db-options"\n\n[network]\nlisten_addresses = ["/ip4/0.0.0.0/tcp/8115"]\n### Specify the public and routable network addresses\n# public_addresses = []\n\n# Node connects to nodes listed here to discovery other peers when there\'s no local stored peers.\n# When chain.spec is changed, this usually should also be changed to the bootnodes in the new chain.\nbootnodes = []\n\n### Whitelist-only mode\n# whitelist_only = false\n### Whitelist peers connecting from the given IP addresses\n# whitelist_peers = []\n### Enable `SO_REUSEPORT` feature to reuse port on Linux, not supported on other OS yet\n# reuse_port_on_linux = true\n\nmax_peers = 125\nmax_outbound_peers = 8\n# 2 minutes\nping_interval_secs = 120\n# 20 minutes\nping_timeout_secs = 1200\nconnect_outbound_interval_secs = 15\n# If set to true, try to register upnp\nupnp = false\n# If set to true, network service will add discovered local address to peer store, it\'s helpful for private net development\ndiscovery_local_address = true\n# If set to true, random cleanup when there are too many inbound nodes\n# Ensure that itself can continue to serve as a bootnode node\nbootnode_mode = false\n\n[rpc]\n# By default RPC only binds to localhost, thus it only allows accessing from the same machine.\n#\n# Allowing arbitrary machines to access the JSON-RPC port is dangerous and strongly discouraged.\n# Please strictly limit the access to only trusted machines.\nlisten_address = "0.0.0.0:8114"\n\n# Default is 10MiB = 10 * 1024 * 1024\nmax_request_body_size = 10485760\n\n# List of API modules: ["Net", "Pool", "Miner", "Chain", "Stats", "Subscription", "Experiment", "Debug"]\nmodules = ["Net", "Pool", "Miner", "Chain", "Stats", "Subscription", "Experiment", "Debug"]\n\nreject_ill_transactions = true\n\n# By default deprecated rpc methods are disabled.\nenable_deprecated_rpc = false\n\n[tx_pool]\nmax_mem_size = 20_000_000 # 20mb\nmax_cycles = 200_000_000_000\nmin_fee_rate = 1_000 # shannons/KB\nmax_tx_verify_cycles = 70_000_000\nmax_ancestors_count = 25\n\n[store]\nheader_cache_size          = 4096\ncell_data_cache_size       = 128\nblock_proposals_cache_size = 30\nblock_tx_hashes_cache_size = 30\nblock_uncles_cache_size    = 30\n\n# [notifier]\n# # Execute command when the new tip block changes, first arg is block hash.\n# new_block_notify_script = "your_new_block_notify_script.sh"\n# # Execute command when node received an network alert, first arg is alert message string.\n# network_alert_notify_script = "your_network_alert_notify_script.sh"\n\n# Set the lock script to protect mined CKB.\n#\n# CKB uses CS architecture for miner. Miner process (ckb miner) gets block\n# template from the Node process (ckb run) via RPC. Thus the lock script is\n# configured in ckb.toml instead of ckb-miner.toml, and the config takes effect\n# after restarting Node process.\n#\n# The `code_hash` identifies different cryptography algorithm. Read the manual\n# of the lock script provider about how to generate this config.\n#\n# CKB provides an secp256k1 implementation, it requires a hash on the\n# compressed public key. The hash algorithm is blake2b, with personal\n# "ckb-default-hash". The first 160 bits (20 bytes) are used as the only arg.\n#\n# You can use any tool you trust to generate a Bitcoin private key and public\n# key pair, which can be used in CKB as well. CKB CLI provides the function for\n# you to convert the public key into block assembler configuration parameters.\n#\n# Here is an example using ckb-cli to generate an account, this command will\n# print the block assembler args(lock_arg) to screen:\n#\n#     ckb-cli account new\n#\n# If you already have a raw secp256k1 private key, you can get the lock_arg by:\n#\n#     ckb-cli util key-info --privkey-path <privkey-path>\n#\n# The command `ckb init` also accepts options to generate the block assembler\n# directly. See `ckb init --help` for details.\n#\n#     ckb init <lock_arg>\n#\n# secp256k1_blake160_sighash_all example:\n[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nargs = "0xa1db2eef3f29f3ef6f86c8d2a0772c705c449f4a"\nhash_type = "type"\nmessage = "0x"\n'))),(0,c.kt)("h2",{id:"ckb-faucet"},"CKB Faucet"),(0,c.kt)("p",null,"CKB faucet uses the same key as CKB miner. When executing ",(0,c.kt)("inlineCode",{parentName:"p"},"./kicker deposit"),", CKB Faucet transfers a certain amount of CKBs to a given address and deposits into layer2 (Godwoken)."),(0,c.kt)("h2",{id:"deployer-of-rollup-genesis-cell"},(0,c.kt)("a",{parentName:"h2",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/accounts/godwoken-block-producer.key"},"Deployer of Rollup Genesis Cell")),(0,c.kt)("p",null,"This key is used when the deployer of rollup genesis cell on layer 1 deploys the rollup genesis cell. When setting up the rollup genesis cell on layer 1, ",(0,c.kt)("inlineCode",{parentName:"p"},"gw-tools deploy-genesis")," uses ",(0,c.kt)("inlineCode",{parentName:"p"},"[Omnilock](https://blog.cryptape.com/omnilock-a-universal-lock-that-powers-interoperability-1)")," to ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/c18807b5cfaa961c230e15e3a381570c324db6f8/crates/tools/src/deploy_genesis.rs#L428-L448"},"record the public key"),"."),(0,c.kt)("h2",{id:"deployer-of-rollup-scripts"},(0,c.kt)("a",{parentName:"h2",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/accounts/rollup-scripts-deployer.key"},"Deployer of Rollup Scripts")),(0,c.kt)("p",null,"This account is used by the gw-tools deploy-scripts to deploy rollup-related scripts to layer1, but will be removed later. "),(0,c.kt)("h2",{id:"godwoken-block-producer"},(0,c.kt)("a",{parentName:"h2",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/accounts/godwoken-block-producer.key"},"Godwoken Block Producer")),(0,c.kt)("p",null,"This key is used to identify the Godwoken block producer."),(0,c.kt)("details",null," ",(0,c.kt)("summary",null,"Click to check details"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"[block_producer.wallet_config]\nprivkey_path = '/godwoken-block-producer.key'\n\n[block_producer.wallet_config.lock]\ncode_hash = '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'\nhash_type = 'type'\nargs = '0x952809177232d0dba355ba5b6f4eaca39cc57746'\n"))))}k.isMDXComponent=!0}}]);