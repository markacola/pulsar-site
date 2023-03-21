"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[54275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={id:"txn-what",title:"What are transactions?",sidebar_label:"What are transactions?"},o=void 0,i={unversionedId:"txn-what",id:"version-2.11.x/txn-what",title:"What are transactions?",description:"Transactions strengthen the message delivery semantics of Apache Pulsar and processing guarantees of Pulsar Functions. The Pulsar Transaction API supports atomic writes and acknowledgments across multiple topics.",source:"@site/versioned_docs/version-2.11.x/txn-what.md",sourceDirName:".",slug:"/txn-what",permalink:"/docs/2.11.x/txn-what",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/txn-what.md",tags:[],version:"2.11.x",frontMatter:{id:"txn-what",title:"What are transactions?",sidebar_label:"What are transactions?"},sidebar:"docsSidebar",previous:{title:"Why transactions?",permalink:"/docs/2.11.x/txn-why"},next:{title:"How transactions work?",permalink:"/docs/2.11.x/txn-how"}},l={},c=[{value:"Transaction semantics",id:"transaction-semantics",level:2},{value:"Transactions and stream processing",id:"transactions-and-stream-processing",level:2},{value:"Use case",id:"use-case",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Transactions strengthen the message delivery semantics of Apache Pulsar and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-concepts#processing-guarantees-and-subscription-types"},"processing guarantees of Pulsar Functions"),". The Pulsar Transaction API supports atomic writes and acknowledgments across multiple topics."),(0,r.kt)("p",null,"Transactions allow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A producer to send a batch of messages to multiple topics where all messages in the batch are eventually visible to any consumer, or none is ever visible to consumers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"End-to-end exactly-once semantics (execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"consume-process-produce")," operation exactly once)."))),(0,r.kt)("h2",{id:"transaction-semantics"},"Transaction semantics"),(0,r.kt)("p",null,"Pulsar transactions have the following semantics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All operations within a transaction are committed as a single unit."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Either all messages are committed, or none of them are.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each message is written or processed exactly once, without data loss or duplicates (even in the event of failures).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a transaction is aborted, all the writes and acknowledgments in this transaction rollback.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A group of messages in a transaction can be received from, produced to, and acknowledged by multiple partitions."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consumers are only allowed to read committed (acked) messages. In other words, the broker does not deliver transactional messages which are part of an open transaction or messages which are part of an aborted transaction.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Message writes across multiple partitions are atomic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Message acks across multiple subscriptions are atomic. A message is acked successfully only once by a consumer under the subscription when acknowledging the message with the transaction ID."))))),(0,r.kt)("h2",{id:"transactions-and-stream-processing"},"Transactions and stream processing"),(0,r.kt)("p",null,"Stream processing on Pulsar is a ",(0,r.kt)("inlineCode",{parentName:"p"},"consume-process-produce")," operation on Pulsar topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Consume"),": a source operator that runs a Pulsar consumer reads messages from one or multiple Pulsar topics.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Process"),": a processing operator transforms the messages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Produce"),": a sink operator that runs a Pulsar producer writes the resulting messages to one or multiple Pulsar topics."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(22858).Z,width:"1678",height:"556"})),(0,r.kt)("p",null,"Pulsar transactions support end-to-end exactly-once stream processing, which means messages are not lost from a source operator and messages are not duplicated to a sink operator."),(0,r.kt)("h2",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Prior to Pulsar 2.8.0, there was no easy way to build stream processing applications with Pulsar to achieve exactly-once processing guarantees. With the transaction introduced in Pulsar 2.8.0, the following services support exactly-once semantics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/2021/01/07/pulsar-flink-connector-270.html"},"Pulsar Flink connector")),(0,r.kt)("p",{parentName:"li"},"Prior to Pulsar 2.8.0, if you want to build stream applications using Pulsar and Flink, the Pulsar Flink connector only supported exactly-once source connector and at-least-once sink connector, which means the highest processing guarantee for end-to-end was at-least-once, there was a possibility that the resulting messages from streaming applications produce duplicated messages to the resulting topics in Pulsar."),(0,r.kt)("p",{parentName:"li"},"With the transaction introduced in Pulsar 2.8.0, the Pulsar Flink sink connector can support exactly-once semantics by implementing the designated ",(0,r.kt)("inlineCode",{parentName:"p"},"TwoPhaseCommitSinkFunction")," and hooking up the Flink sink message lifecycle with Pulsar transaction API.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for Pulsar Functions and other connectors will be added in future releases."))))}m.isMDXComponent=!0},22858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/txn-2-9ebd4a2461e88dd74ab6e4440228fc4b.png"}}]);