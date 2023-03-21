"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6139],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,s(s({ref:t},p),{},{components:a})):r.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={id:"deploy-bare-metal-multi-cluster",title:"Deploying a multi-cluster on bare metal",sidebar_label:"Bare metal multi-cluster"},s=void 0,l={unversionedId:"deploy-bare-metal-multi-cluster",id:"version-2.4.1/deploy-bare-metal-multi-cluster",title:"Deploying a multi-cluster on bare metal",description:"1. You can use single-cluster Pulsar installation in most use cases, such as experimenting with Pulsar or using Pulsar in a startup or in a single team. If you need to run a multi-cluster Pulsar instance, see the guide.",source:"@site/versioned_docs/version-2.4.1/deploy-bare-metal-multi-cluster.md",sourceDirName:".",slug:"/deploy-bare-metal-multi-cluster",permalink:"/docs/2.4.1/deploy-bare-metal-multi-cluster",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/deploy-bare-metal-multi-cluster.md",tags:[],version:"2.4.1",frontMatter:{id:"deploy-bare-metal-multi-cluster",title:"Deploying a multi-cluster on bare metal",sidebar_label:"Bare metal multi-cluster"},sidebar:"version-2.4.1/docsSidebar",previous:{title:"Bare metal",permalink:"/docs/2.4.1/deploy-bare-metal"},next:{title:"Monitor",permalink:"/docs/2.4.1/deploy-monitoring"}},i={},u=[{value:"System requirement",id:"system-requirement",level:2},{value:"Install Pulsar",id:"install-pulsar",level:2},{value:"Deploy ZooKeeper",id:"deploy-zookeeper",level:2},{value:"Deploy local ZooKeeper",id:"deploy-local-zookeeper",level:3},{value:"Deploy the configuration store",id:"deploy-the-configuration-store",level:3},{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",level:4},{value:"Start the service",id:"start-the-service",level:5},{value:"Cluster metadata initialization",id:"cluster-metadata-initialization",level:2},{value:"Deploy BookKeeper",id:"deploy-bookkeeper",level:2},{value:"Configure bookies",id:"configure-bookies",level:3},{value:"Start bookies",id:"start-bookies",level:3},{value:"Deploy brokers",id:"deploy-brokers",level:2},{value:"Broker configuration",id:"broker-configuration",level:3},{value:"Broker hardware",id:"broker-hardware",level:3},{value:"Start the broker service",id:"start-the-broker-service",level:3},{value:"Service discovery",id:"service-discovery",level:2},{value:"Admin client and verification",id:"admin-client-and-verification",level:2},{value:"Provision new tenants",id:"provision-new-tenants",level:2},{value:"Test producer and consumer",id:"test-producer-and-consumer",level:5}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"You can use single-cluster Pulsar installation in most use cases, such as experimenting with Pulsar or using Pulsar in a startup or in a single team. If you need to run a multi-cluster Pulsar instance, see the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/deploy-bare-metal-multi-cluster"},"guide"),"."),(0,n.kt)("li",{parentName:"ol"},"If you want to use all built-in ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/io-overview"},"Pulsar IO")," connectors, you need to download ",(0,n.kt)("inlineCode",{parentName:"li"},"apache-pulsar-io-connectors"),"package and install ",(0,n.kt)("inlineCode",{parentName:"li"},"apache-pulsar-io-connectors")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"connectors")," directory in the pulsar directory on every broker node or on every function-worker node if you have run a separate cluster of function workers for ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/functions-overview"},"Pulsar Functions"),"."),(0,n.kt)("li",{parentName:"ol"},"If you want to use ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/concepts-tiered-storage"},"Tiered Storage")," feature in your Pulsar deployment, you need to download ",(0,n.kt)("inlineCode",{parentName:"li"},"apache-pulsar-offloaders"),"package and install ",(0,n.kt)("inlineCode",{parentName:"li"},"apache-pulsar-offloaders")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"offloaders")," directory in the Pulsar directory on every broker node. For more details of how to configure this feature, you can refer to the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/cookbooks-tiered-storage"},"Tiered storage cookbook"),"."))),(0,n.kt)("p",null,"A Pulsar instance consists of multiple Pulsar clusters working in unison. You can distribute clusters across data centers or geographical regions and replicate the clusters amongst themselves using ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/administration-geo"},"geo-replication"),".Deploying a  multi-cluster Pulsar instance consists of the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Deploying two separate ZooKeeper quorums: a local quorum for each cluster in the instance and a configuration store quorum for instance-wide tasks"),(0,n.kt)("li",{parentName:"ol"},"Initializing cluster metadata for each cluster"),(0,n.kt)("li",{parentName:"ol"},"Deploying a BookKeeper cluster of bookies in each Pulsar cluster"),(0,n.kt)("li",{parentName:"ol"},"Deploying brokers in each Pulsar cluster")),(0,n.kt)("blockquote",null,(0,n.kt)("h4",{parentName:"blockquote",id:"run-pulsar-locally-or-on-kubernetes"},"Run Pulsar locally or on Kubernetes?"),(0,n.kt)("p",{parentName:"blockquote"},"This guide shows you how to deploy Pulsar in production in a non-Kubernetes environment. If you want to run a standalone Pulsar cluster on a single machine for development purposes, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/getting-started-standalone"},"Setting up a local cluster")," guide. If you want to run Pulsar on ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes"),", see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/deploy-kubernetes"},"Pulsar on Kubernetes")," guide, which includes sections on running Pulsar on Kubernetes, on Google Kubernetes Engine and on Amazon Web Services.")),(0,n.kt)("h2",{id:"system-requirement"},"System requirement"),(0,n.kt)("p",null,"Currently, Pulsar is available for 64-bit ",(0,n.kt)("strong",{parentName:"p"},"macOS"),", ",(0,n.kt)("strong",{parentName:"p"},"Linux"),", and ",(0,n.kt)("strong",{parentName:"p"},"Windows"),". To use Pulsar, you need to install 64-bit JRE/JDK.\nFor the runtime Java version, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation")," according to your target Pulsar version."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Broker is only supported on 64-bit JVM.")),(0,n.kt)("h2",{id:"install-pulsar"},"Install Pulsar"),(0,n.kt)("p",null,"To get started running Pulsar, download a binary tarball release in one of the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"by clicking the link below and downloading the release from an Apache mirror:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.1/apache-pulsar-2.4.1-bin.tar.gz",download:!0},"Pulsar 2.4.1 binary release")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"from the Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"from the Pulsar ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"using ",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget 'https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=pulsar/pulsar-2.4.1/apache-pulsar-2.4.1-bin.tar.gz' -O apache-pulsar-2.4.1-bin.tar.gz\n\n")))),(0,n.kt)("p",null,"Once you download the tarball, untar it and ",(0,n.kt)("inlineCode",{parentName:"p"},"cd")," into the resulting directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-2.4.1-bin.tar.gz\n$ cd apache-pulsar-2.4.1\n\n")),(0,n.kt)("p",null,"The Pulsar binary package initially contains the following directories:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bin")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/2.4.1/reference-cli-tools"},"Command-line tools")," of Pulsar, such as ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.4.1/reference-cli-tools#pulsar"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar"))," and ",(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"conf")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configuration files for Pulsar, including for ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.4.1/reference-configuration#broker"},"broker configuration"),", ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.4.1/reference-configuration#zookeeper"},"ZooKeeper configuration"),", and more")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"examples")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A Java JAR file containing example ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.4.1/functions-overview"},"Pulsar Functions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"lib")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ",(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," files that Pulsar uses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"licenses")),(0,n.kt)("td",{parentName:"tr",align:"left"},"License files, in ",(0,n.kt)("inlineCode",{parentName:"td"},".txt")," form, for various components of the Pulsar codebase")))),(0,n.kt)("p",null,"The following directories are created once you begin running Pulsar:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data storage directory that ZooKeeper and BookKeeper use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"instances")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Artifacts created for ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.4.1/functions-overview"},"Pulsar Functions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"logs")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logs that the installation creates")))),(0,n.kt)("h2",{id:"deploy-zookeeper"},"Deploy ZooKeeper"),(0,n.kt)("p",null,"Each Pulsar instance relies on two separate ZooKeeper quorums."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Local ZooKeeper operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs a dedicated ZooKeeper cluster."),(0,n.kt)("li",{parentName:"ul"},"Configuration Store operates at the instance level and provides configuration management for the entire system (and thus across clusters). An independent cluster of machines or the same machines that local ZooKeeper uses can provide the configuration store quorum.")),(0,n.kt)("p",null,"You can use an independent cluster of machines or the same machines used by local ZooKeeper to provide the configuration store quorum."),(0,n.kt)("h3",{id:"deploy-local-zookeeper"},"Deploy local ZooKeeper"),(0,n.kt)("p",null,"ZooKeeper manages a variety of essential coordination-related and configuration-related tasks for Pulsar."),(0,n.kt)("p",null,"You need to stand up one local ZooKeeper cluster per Pulsar cluster for deploying a Pulsar instance."),(0,n.kt)("p",null,"To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#zookeeper"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file. Add a ",(0,n.kt)("inlineCode",{parentName:"p"},"server.N")," line for each node in the cluster to the configuration, where ",(0,n.kt)("inlineCode",{parentName:"p"},"N")," is the number of the ZooKeeper node. The following is an example for a three-node cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"\nserver.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n\n")),(0,n.kt)("p",null,"On each host, you need to specify the ID of the node in the ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," file of each node, which is in ",(0,n.kt)("inlineCode",{parentName:"p"},"data/zookeeper")," folder of each server by default (you can change the file location via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#zookeeper-dataDir"},(0,n.kt)("inlineCode",{parentName:"a"},"dataDir"))," parameter)."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"See the ",(0,n.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup"},"Multi-server setup guide")," in the ZooKeeper documentation for detailed information on ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," and more.")),(0,n.kt)("p",null,"On a ZooKeeper server at ",(0,n.kt)("inlineCode",{parentName:"p"},"zk1.us-west.example.com"),", for example, you could set the ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," value like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ mkdir -p data/zookeeper\n$ echo 1 > data/zookeeper/myid\n\n")),(0,n.kt)("p",null,"On ",(0,n.kt)("inlineCode",{parentName:"p"},"zk2.us-west.example.com")," the command looks like ",(0,n.kt)("inlineCode",{parentName:"p"},"echo 2 > data/zookeeper/myid")," and so on."),(0,n.kt)("p",null,"Once you add each server to the ",(0,n.kt)("inlineCode",{parentName:"p"},"zookeeper.conf")," configuration and each server has the appropriate ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#pulsar-daemon"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start zookeeper\n\n")),(0,n.kt)("h3",{id:"deploy-the-configuration-store"},"Deploy the configuration store"),(0,n.kt)("p",null,"The ZooKeeper cluster configured and started up in the section above is a local ZooKeeper cluster that you can use to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."),(0,n.kt)("p",null,"If you deploy a single-cluster instance, you do not need a separate cluster for the configuration store. If, however, you deploy a multi-cluster instance, you should stand up a separate ZooKeeper cluster for configuration tasks."),(0,n.kt)("h4",{id:"single-cluster-pulsar-instance"},"Single-cluster Pulsar instance"),(0,n.kt)("p",null,"If your Pulsar instance consists of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but run on different TCP ports."),(0,n.kt)("p",null,"To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers that the local quorum. You need to use the configuration file in ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#configuration-store"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/global_zookeeper.conf"))," using the same method for ",(0,n.kt)("a",{parentName:"p",href:"#local-zookeeper"},"local ZooKeeper"),", but make sure to use a different port (2181 is the default for ZooKeeper). The following is an example that uses port 2184 for a three-node ZooKeeper cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n\n")),(0,n.kt)("p",null,"As before, create the ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," files for each server on ",(0,n.kt)("inlineCode",{parentName:"p"},"data/global-zookeeper/myid"),"."),(0,n.kt)("h4",{id:"multi-cluster-pulsar-instance"},"Multi-cluster Pulsar instance"),(0,n.kt)("p",null,"When you deploy a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."),(0,n.kt)("p",null,"The key here is to make sure the ZK quorum members are spread across at least 3 regions, and other regions run as observers."),(0,n.kt)("p",null,"Again, given the very low expected load on the configuration store servers, you can share the same hosts used for the local ZooKeeper quorum."),(0,n.kt)("p",null,"For example, assume a Pulsar instance with the following clusters ",(0,n.kt)("inlineCode",{parentName:"p"},"us-west"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"us-east"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"us-central"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"eu-central"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ap-south"),". Also assume, each cluster has its own local ZK servers named such as the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nzk[1-3].${CLUSTER}.example.com\n\n")),(0,n.kt)("p",null,"In this scenario if you want to pick the quorum participants from few clusters and let all the others be ZK observers. For example, to form a 7 servers quorum, you can pick 3 servers from ",(0,n.kt)("inlineCode",{parentName:"p"},"us-west"),", 2 from ",(0,n.kt)("inlineCode",{parentName:"p"},"us-central")," and 2 from ",(0,n.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,n.kt)("p",null,"This method guarantees that writes to configuration store is possible even if one of these regions is unreachable."),(0,n.kt)("p",null,"The ZK configuration in all the servers looks like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n\n")),(0,n.kt)("p",null,"Additionally, ZK observers need to have the following parameters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"\npeerType=observer\n\n")),(0,n.kt)("h5",{id:"start-the-service"},"Start the service"),(0,n.kt)("p",null,"Once your configuration store configuration is in place, you can start up the service using ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#pulsar-daemon"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start configuration-store\n\n")),(0,n.kt)("h2",{id:"cluster-metadata-initialization"},"Cluster metadata initialization"),(0,n.kt)("p",null,"Once you set up the cluster-specific ZooKeeper and configuration store quorums for your instance, you need to write some metadata to ZooKeeper for each cluster in your instance. ",(0,n.kt)("strong",{parentName:"p"},"you only need to write these metadata once"),"."),(0,n.kt)("p",null,"You can initialize this metadata using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#pulsar-initialize-cluster-metadata"},(0,n.kt)("inlineCode",{parentName:"a"},"initialize-cluster-metadata"))," command of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#pulsar"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar"))," CLI tool. The following is an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --configuration-metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n\n")),(0,n.kt)("p",null,"As you can see from the example above, you need to specify the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The name of the cluster"),(0,n.kt)("li",{parentName:"ul"},"The local metadata store connection string for the cluster"),(0,n.kt)("li",{parentName:"ul"},"The configuration store connection string for the entire instance"),(0,n.kt)("li",{parentName:"ul"},"The web service URL for the cluster"),(0,n.kt)("li",{parentName:"ul"},"A broker service URL enabling interaction with the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/reference-terminology#broker"},"brokers")," in the cluster")),(0,n.kt)("p",null,"If you use ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/security-tls-transport"},"TLS"),", you also need to specify a TLS web service URL for the cluster as well as a TLS broker service URL for the brokers in the cluster."),(0,n.kt)("p",null,"Make sure to run ",(0,n.kt)("inlineCode",{parentName:"p"},"initialize-cluster-metadata")," for each cluster in your instance."),(0,n.kt)("h2",{id:"deploy-bookkeeper"},"Deploy BookKeeper"),(0,n.kt)("p",null,"BookKeeper provides ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/concepts-architecture-overview#persistent-storage"},"persistent message storage")," for Pulsar."),(0,n.kt)("p",null,"Each Pulsar broker needs its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."),(0,n.kt)("h3",{id:"configure-bookies"},"Configure bookies"),(0,n.kt)("p",null,"You can configure BookKeeper bookies using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#bookkeeper"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/bookkeeper.conf"))," configuration file. The most important aspect of configuring each bookie is ensuring that the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#bookkeeper-zkServers"},(0,n.kt)("inlineCode",{parentName:"a"},"zkServers"))," parameter is set to the connection string for the local ZooKeeper of Pulsar cluster."),(0,n.kt)("h3",{id:"start-bookies"},"Start bookies"),(0,n.kt)("p",null,"You can start a bookie in two ways: in the foreground or as a background daemon."),(0,n.kt)("p",null,"To start a bookie in the background, use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#pulsar-daemon"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-daemon start bookie\n\n")),(0,n.kt)("p",null,"You can verify that the bookie works properly using the ",(0,n.kt)("inlineCode",{parentName:"p"},"bookiesanity")," command for the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#bookkeeper-shell"},"BookKeeper shell"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/bookkeeper shell bookiesanity\n\n")),(0,n.kt)("p",null,"This command creates a new ledger on the local bookie, writes a few entries, reads them back and finally deletes the ledger."),(0,n.kt)("p",null,"After you have started all bookies, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"simpletest")," command for ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#shell"},"BookKeeper shell")," on any bookie node, to verify that all bookies in the cluster are running."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/bookkeeper shell simpletest --ensemble <num-bookies> --writeQuorum <num-bookies> --ackQuorum <num-bookies> --numEntries <num-entries>\n\n")),(0,n.kt)("p",null,"Bookie hosts are responsible for storing message data on disk. In order for bookies to provide optimal performance, having a suitable hardware configuration is essential for the bookies. The following are key dimensions for bookie hardware capacity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Disk I/O capacity read/write"),(0,n.kt)("li",{parentName:"ul"},"Storage capacity")),(0,n.kt)("p",null,"Message entries written to bookies are always synced to disk before returning an acknowledgement to the Pulsar broker. To ensure low write latency, BookKeeper is\ndesigned to use multiple devices:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"journal")," to ensure durability. For sequential writes, having fast ",(0,n.kt)("a",{parentName:"li",href:"https://linux.die.net/man/2/fsync"},"fsync")," operations on bookie hosts is critical. Typically, small and fast ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Solid-state_drive"},"solid-state drives")," (SSDs) should suffice, or ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hard_disk_drive"},"hard disk drives")," (HDDs) with a ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RAID"},"RAID")," controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"ledger storage device")," is where data is stored until all consumers acknowledge the message. Writes happen in the background, so write I/O is not a big concern. Reads happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration involves multiple HDDs with a RAID controller.")),(0,n.kt)("h2",{id:"deploy-brokers"},"Deploy brokers"),(0,n.kt)("p",null,"Once you set up ZooKeeper, initialize cluster metadata, and spin up BookKeeper bookies, you can deploy brokers."),(0,n.kt)("h3",{id:"broker-configuration"},"Broker configuration"),(0,n.kt)("p",null,"You can configure brokers using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#broker"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/broker.conf"))," configuration file."),(0,n.kt)("p",null,"The most important element of broker configuration is ensuring that each broker is aware of its local ZooKeeper quorum as well as the configuration store quorum. Make sure that you set the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#broker"},(0,n.kt)("inlineCode",{parentName:"a"},"metadataStoreUrl"))," parameter to reflect the local quorum and the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#broker"},(0,n.kt)("inlineCode",{parentName:"a"},"configurationMetadataStoreUrl"))," parameter to reflect the configuration store quorum (although you need to specify only those ZooKeeper servers located in the same cluster)."),(0,n.kt)("p",null,"You also need to specify the name of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-terminology#cluster"},"cluster")," to which the broker belongs using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#broker-clusterName"},(0,n.kt)("inlineCode",{parentName:"a"},"clusterName"))," parameter. In addition, you need to match the broker and web service ports provided when you initialize the metadata (especially when you use a different port from default) of the cluster."),(0,n.kt)("p",null,"The following is an example configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Local ZooKeeper servers\nmetadataStoreUrl=zk1.us-west.example.com:2181,zk2.us-west.example.com:2181,zk3.us-west.example.com:2181\n\n# Configuration store quorum connection string.\nconfigurationMetadataStoreUrl=zk1.us-west.example.com:2184,zk2.us-west.example.com:2184,zk3.us-west.example.com:2184\n\nclusterName=us-west\n\n# Broker data port\nbrokerServicePort=6650\n\n# Broker data port for TLS\nbrokerServicePortTls=6651\n\n# Port to use to server HTTP request\nwebServicePort=8080\n\n# Port to use to server HTTPS request\nwebServicePortTls=8443\n\n")),(0,n.kt)("h3",{id:"broker-hardware"},"Broker hardware"),(0,n.kt)("p",null,"Pulsar brokers do not require any special hardware since they do not use the local disk. You had better choose fast CPUs and 10Gbps ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_interface_controller"},"NIC")," so that the software can take full advantage of that."),(0,n.kt)("h3",{id:"start-the-broker-service"},"Start the broker service"),(0,n.kt)("p",null,"You can start a broker in the background by using ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Nohup"},"nohup")," with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#pulsar-daemon"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start broker\n\n")),(0,n.kt)("p",null,"You can also start brokers in the foreground by using ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#broker"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar broker")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar broker\n\n")),(0,n.kt)("h2",{id:"service-discovery"},"Service discovery"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/concepts-clients"},"Clients")," connecting to Pulsar brokers need to communicate with an entire Pulsar instance using a single URL."),(0,n.kt)("p",null,"You can use your own service discovery system. If you use your own system, you only need to satisfy just one requirement: when a client performs an HTTP request to an ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration"},"endpoint")," for a Pulsar cluster, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"http://pulsar.us-west.example.com:8080"),", the client needs to be redirected to some active brokers in the desired cluster, whether via DNS, an HTTP or IP redirect, or some other means."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Service discovery already provided by many scheduling systems"),"\nMany large-scale deployment systems, such as ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/deploy-kubernetes"},"Kubernetes"),", have service discovery systems built in. If you run Pulsar on such a system, you may not need to provide your own service discovery mechanism.")),(0,n.kt)("h2",{id:"admin-client-and-verification"},"Admin client and verification"),(0,n.kt)("p",null,"At this point your Pulsar instance should be ready to use. You can now configure client machines that can serve as ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/admin-api-overview"},"administrative clients")," for each cluster. You can use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#client"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/client.conf"))," configuration file to configure admin clients."),(0,n.kt)("p",null,"The most important thing is that you point the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#client-serviceUrl"},(0,n.kt)("inlineCode",{parentName:"a"},"serviceUrl"))," parameter to the correct service URL for the cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"\nserviceUrl=http://pulsar.us-west.example.com:8080/\n\n")),(0,n.kt)("h2",{id:"provision-new-tenants"},"Provision new tenants"),(0,n.kt)("p",null,"Pulsar is built as a fundamentally multi-tenant system."),(0,n.kt)("p",null,"If a new tenant wants to use the system, you need to create a new one. You can create a new tenant by using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-pulsar-admin#tenants"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create test-tenant \\\n  --allowed-clusters us-west \\\n  --admin-roles test-admin-role\n\n")),(0,n.kt)("p",null,"In this command, users who identify with ",(0,n.kt)("inlineCode",{parentName:"p"},"test-admin-role")," role can administer the configuration for the ",(0,n.kt)("inlineCode",{parentName:"p"},"test-tenant")," tenant. The ",(0,n.kt)("inlineCode",{parentName:"p"},"test-tenant")," tenant can only use the ",(0,n.kt)("inlineCode",{parentName:"p"},"us-west")," cluster. From now on, this tenant can manage its resources."),(0,n.kt)("p",null,"Once you create a tenant, you need to create ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-terminology#namespace"},"namespaces")," for topics within that tenant."),(0,n.kt)("p",null,"The first step is to create a namespace. A namespace is an administrative unit that can contain many topics. A common practice is to create a namespace for each different use case from a single tenant."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create test-tenant/ns1\n\n")),(0,n.kt)("h5",{id:"test-producer-and-consumer"},"Test producer and consumer"),(0,n.kt)("p",null,"Everything is now ready to send and receive messages. The quickest way to test the system is through the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-cli-tools#pulsar-perf"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-perf"))," client tool."),(0,n.kt)("p",null,"You can use a topic in the namespace that you have just created. Topics are automatically created the first time when a producer or a consumer tries to use them."),(0,n.kt)("p",null,"The topic name in this case could be:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://test-tenant/ns1/my-topic\n\n")),(0,n.kt)("p",null,"Start a consumer that creates a subscription on the topic and waits for messages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-perf consume persistent://test-tenant/ns1/my-topic\n\n")),(0,n.kt)("p",null,"Start a producer that publishes messages at a fixed rate and reports stats every 10 seconds:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-perf produce persistent://test-tenant/ns1/my-topic\n\n")),(0,n.kt)("p",null,"To report the topic stats:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics stats persistent://test-tenant/ns1/my-topic\n\n")))}m.isMDXComponent=!0}}]);