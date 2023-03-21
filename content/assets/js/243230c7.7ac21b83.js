"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6974],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"admin-api-non-partitioned-topics",title:"Managing non-partitioned topics",sidebar_label:"Non-Partitioned topics",original_id:"admin-api-non-partitioned-topics"},o=void 0,l={unversionedId:"admin-api-non-partitioned-topics",id:"version-2.6.1/admin-api-non-partitioned-topics",title:"Managing non-partitioned topics",description:"You can use Pulsar's admin API to create and manage non-partitioned topics.",source:"@site/versioned_docs/version-2.6.1/admin-api-non-partitioned-topics.md",sourceDirName:".",slug:"/admin-api-non-partitioned-topics",permalink:"/docs/2.6.1/admin-api-non-partitioned-topics",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/admin-api-non-partitioned-topics.md",tags:[],version:"2.6.1",frontMatter:{id:"admin-api-non-partitioned-topics",title:"Managing non-partitioned topics",sidebar_label:"Non-Partitioned topics",original_id:"admin-api-non-partitioned-topics"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Partitioned topics",permalink:"/docs/2.6.1/admin-api-partitioned-topics"},next:{title:"Functions",permalink:"/docs/2.6.1/admin-api-functions"}},s={},p=[{value:"Non-Partitioned topics resources",id:"non-partitioned-topics-resources",level:2},{value:"Create",id:"create",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Delete",id:"delete",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"List",id:"list",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Stats",id:"stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use Pulsar's ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/admin-api-overview"},"admin API")," to create and manage non-partitioned topics."),(0,r.kt)("p",null,"In all of the instructions and commands below, the topic name structure is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npersistent://tenant/namespace/topic\n\n")),(0,r.kt)("h2",{id:"non-partitioned-topics-resources"},"Non-Partitioned topics resources"),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"Non-partitioned topics in Pulsar must be explicitly created. When creating a new non-partitioned topic you\nneed to provide a name for the topic."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, after 60 seconds of creation, topics are considered inactive and deleted automatically to prevent from generating trash data.\nTo disable this feature, set ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled"),"  to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".\nTo change the frequency of checking inactive topics, set ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsFrequencySeconds")," to your desired value.\nFor more information about these two parameters, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-configuration#broker"},"here"),".")),(0,r.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,r.kt)("p",null,"You can create non-partitioned topics using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#create-3"},(0,r.kt)("inlineCode",{parentName:"a"},"create")),"\ncommand and specifying the topic name as an argument.\nHere's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics create \\\n  persistent://my-tenant/my-namespace/my-topic\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It's only allowed to create non partitioned topic of name contains suffix '-partition-' followed by numeric value like\n'xyz-topic-partition-10', if there's already a partitioned topic with same name, in this case 'xyz-topic', and has\nnumber of partition larger then that numeric value in this case 11(partition index is start from 0). Else creation of such topic will fail.")),(0,r.kt)("h4",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/createNonPartitionedTopic"},"PUT /admin/v2/:schema/:tenant/:namespace/:topic")),(0,r.kt)("h4",{id:"java"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString topicName = "persistent://my-tenant/my-namespace/my-topic";\nadmin.topics().createNonPartitionedTopic(topicName);\n\n')),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,r.kt)("p",null,"Non-partitioned topics can be deleted using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#delete-4"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))," command, specifying the topic by name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics delete \\\n  persistent://my-tenant/my-namespace/my-topic\n\n")),(0,r.kt)("h4",{id:"rest-api-1"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/deleteTopic"},"DELETE /admin/v2/:schema/:tenant/:namespace/:topic")),(0,r.kt)("h4",{id:"java-1"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.topics().delete(persistentTopic);\n\n")),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"It provides a list of topics existing under a given namespace."),(0,r.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics list tenant/namespace\npersistent://tenant/namespace/topic1\npersistent://tenant/namespace/topic2\n\n")),(0,r.kt)("h4",{id:"rest-api-2"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/getList"},"GET /admin/v2/:schema/:tenant/:namespace")),(0,r.kt)("h4",{id:"java-2"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.topics().getList(namespace);\n\n")),(0,r.kt)("h3",{id:"stats"},"Stats"),(0,r.kt)("p",null,"It shows current statistics of a given topic. Here's an example payload:"),(0,r.kt)("p",null,"The following stats are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication publishers\u2019 publish rates in messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as msgRateIn but in bytes per second instead of messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication consumers\u2019 dispatch rates in messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as msgRateOut but in bytes per second instead of messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Average message size, in bytes, from this publisher within the last interval")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of the ledgers\u2019 storage size for this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publishers"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local publishers into the topic. There can be anywhere from zero to thousands.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerId"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer on this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer, generated by the client library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address and source port for the connection of this producer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp this producer was created or last reconnected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local subscriptions to the topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"my-subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of this subscription (client defined)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of messages in backlog for this subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgBacklogNoDelayed"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of messages in backlog without delayed messages for this subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"This subscription type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,r.kt)("td",{parentName:"tr",align:null},"The rate at which messages were discarded instead of dispatched from this subscription due to TTL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumers"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of connected consumers for this subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this consumer, generated by the client library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"availablePermits"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages this consumer has space for in the client library\u2019s listen queue. A value of 0 means the client library\u2019s queue is full and receive() isn\u2019t being called. A nonzero value means this consumer is ready to be dispatched messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replication"),(0,r.kt)("td",{parentName:"tr",align:null},"This section gives the stats for cross-colo replication of this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The outbound replication backlog in messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connected"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the outbound replicator is connected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationDelayInSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"How long the oldest message has been waiting to be sent through the connection, if connected is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"The IP and port of the broker in the remote cluster\u2019s publisher connection to this broker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"The TCP connection being used to publish messages to the remote cluster. If there are no local publishers connected, this connection is automatically closed after a minute.")))),(0,r.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,r.kt)("p",null,"The stats for the topic and its connected producers and consumers can be fetched by using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#stats"},(0,r.kt)("inlineCode",{parentName:"a"},"stats"))," command, specifying the topic by name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics stats \\\n  persistent://test-tenant/namespace/topic \\\n  --get-precise-backlog\n\n")),(0,r.kt)("h4",{id:"rest-api-3"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/getStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/stats")),(0,r.kt)("h4",{id:"java-3"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.topics().getStats(persistentTopic, false /* is precise backlog */);\n\n")))}m.isMDXComponent=!0}}]);