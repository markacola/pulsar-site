"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[46082],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview"},s=void 0,i={unversionedId:"sql-overview",id:"version-2.11.x/sql-overview",title:"Pulsar SQL Overview",description:"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the Schema Registry, you can store structured data in Pulsar and query the data by using Trino (formerly Presto SQL).",source:"@site/versioned_docs/version-2.11.x/sql-overview.md",sourceDirName:".",slug:"/sql-overview",permalink:"/docs/2.11.x/sql-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/sql-overview.md",tags:[],version:"2.11.x",frontMatter:{id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Develop",permalink:"/docs/2.11.x/io-develop"},next:{title:"Query data",permalink:"/docs/2.11.x/sql-getting-started"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/schema-get-started"},"Schema Registry"),", you can store structured data in Pulsar and query the data by using ",(0,a.kt)("a",{parentName:"p",href:"https://trino.io/"},"Trino (formerly Presto SQL)"),"."),(0,a.kt)("p",null,"As the core of Pulsar SQL, the Pulsar Trino plugin enables Trino workers within a Trino cluster to query data from Pulsar."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:t(35478).Z,width:"1847",height:"854"})),(0,a.kt)("p",null,"The query performance is efficient and highly scalable, because Pulsar adopts ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/concepts-architecture-overview#apache-bookkeeper"},"two-level-segment-based architecture"),"."),(0,a.kt)("p",null,"Topics in Pulsar are stored as segments in ",(0,a.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"Apache BookKeeper"),". Each topic segment is replicated to some BookKeeper nodes, which enables concurrent reads and high read throughput. In the Pulsar Trino connector, data is read directly from BookKeeper, so Trino workers can read concurrently from a horizontally scalable number of BookKeeper nodes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:t(50623).Z,width:"1847",height:"854"})),(0,a.kt)("h1",{id:"caveat"},"Caveat"),(0,a.kt)("p",null,"If you're upgrading Pulsar SQL from 2.11 or early, you should copy config files from ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/presto")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"trino/conf"),". If you're downgrading Pulsar SQL to 2.11 or early from newer versions, do verse visa."))}d.isMDXComponent=!0},50623:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},35478:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"}}]);