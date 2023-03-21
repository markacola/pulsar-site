"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"functions-worker-troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},i=void 0,l={unversionedId:"functions-worker-troubleshooting",id:"functions-worker-troubleshooting",title:"Troubleshooting",description:"Error message: Namespace missing local cluster name in clusters list",source:"@site/docs/functions-worker-troubleshooting.md",sourceDirName:".",slug:"/functions-worker-troubleshooting",permalink:"/docs/next/functions-worker-troubleshooting",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-worker-troubleshooting.md",tags:[],version:"current",frontMatter:{id:"functions-worker-troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docsSidebar",previous:{title:"Configure function workers for geo-replicated clusters",permalink:"/docs/next/functions-worker-for-geo-replication"},next:{title:"Configure function runtime",permalink:"/docs/next/functions-runtime"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Error message: Namespace missing local cluster name in clusters list")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\nFailed to get partitioned topic metadata: org.apache.pulsar.client.api.PulsarClientException$BrokerMetadataException: Namespace missing local cluster name in clusters list: local_cluster=xyz ns=public/functions clusters=[standalone]\n\n")),(0,o.kt)("p",null,"The error message displays when any of the following cases occurs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a broker is started with ",(0,o.kt)("inlineCode",{parentName:"li"},"functionsWorkerEnabled=true"),", but ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsarFunctionsCluster")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/functions_worker.yml")," file is not set to the correct cluster."),(0,o.kt)("li",{parentName:"ul"},"setting up a geo-replicated Pulsar cluster with ",(0,o.kt)("inlineCode",{parentName:"li"},"functionsWorkerEnabled=true"),", while brokers in one cluster run well, brokers in the other cluster do not work well.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Workaround")),(0,o.kt)("p",null,"If any of these cases happen, follow the instructions below to fix the problem."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable function workers by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled=false"),", and restart brokers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the current cluster list of the ",(0,o.kt)("inlineCode",{parentName:"p"},"public/functions")," namespace."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces get-clusters public/functions\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if the cluster is in the cluster list. If not, add it and update the list."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-clusters --clusters <existing-clusters>,<new-cluster> public/functions\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After setting the cluster successfully, enable function workers by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled=true"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the correct cluster name for the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsarFunctionsCluster")," parameter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart brokers."))))}m.isMDXComponent=!0}}]);