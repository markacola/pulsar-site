"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13118],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(a),k=l,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||r;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8742:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={id:"naming",title:"Pull Request Naming Convention Guide",sidebar_label:"Naming Convention Guide"},o=void 0,i={unversionedId:"documentation/naming",id:"documentation/naming",title:"Pull Request Naming Convention Guide",description:"This guide explains why you need good PR titles and how you do that with various self\u200b-explanatory examples.",source:"@site/contribute/documentation/naming.md",sourceDirName:"documentation",slug:"/documentation/naming",permalink:"/contribute/documentation/naming",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/documentation/naming.md",tags:[],version:"current",lastUpdatedBy:"Pulsar Site Updater",lastUpdatedAt:1668470520,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{id:"naming",title:"Pull Request Naming Convention Guide",sidebar_label:"Naming Convention Guide"},sidebar:"sidebar",previous:{title:"Label Guide",permalink:"/contribute/documentation/label"},next:{title:"Content Preview Guide",permalink:"/contribute/documentation/preview"}},p={},u=[{value:"Why do PR titles matter?",id:"why-do-pr-titles-matter",level:2},{value:"How to write good PR titles?",id:"how-to-write-good-pr-titles",level:2},{value:"\ud83d\udca1Quick examples",id:"quick-examples",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>scope</code>",id:"scope",level:3},{value:"Pulsar",id:"pulsar",level:4},{value:"Client",id:"client",level:4},{value:"<code>Summary</code>",id:"summary",level:3},{value:"Full examples",id:"full-examples",level:3}],s={toc:u};function m(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide explains why you need good PR titles and how you do that with various self\u200b-explanatory examples."),(0,l.kt)("h2",{id:"why-do-pr-titles-matter"},"Why do PR titles matter?"),(0,l.kt)("p",null,"Engineers and writers submit or review PRs almost every day."),(0,l.kt)("p",null,"A PR title is a summary of your changes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vague, boring, and unclear PR titles decrease team efficiency and productivity."),(0,l.kt)("li",{parentName:"ul"},"PR titles should be engaging, easy to understand, and readable.")),(0,l.kt)("p",null,"Good titles often bring many benefits, including but not limited to the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Speed up the review process.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You can tell from the title what changes the PR introduces."))),(0,l.kt)("li",{parentName:"ul"},"Facilitate understanding of PR changes.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PR titles are shown on Pulsar release notes as items. Concise PR titles make your changes easier to understand."),(0,l.kt)("li",{parentName:"ul"},"Especially when you read commit logs in command-line tools, clear commit messages show PR changes quickly."))),(0,l.kt)("li",{parentName:"ul"},"Increase search efficiency.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You can skim through hundreds of commits and locate desired information quickly."))),(0,l.kt)("li",{parentName:"ul"},"Remind you to think about your PR.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you can not write a PR title in a simple way (for example, ",(0,l.kt)("a",{parentName:"li",href:"#type"},"[type]")," ",(0,l.kt)("a",{parentName:"li",href:"#scope"},"[scope]")," ",(0,l.kt)("a",{parentName:"li",href:"#summary"},"[summary]"),"), or you need to use several types / scopes, consider whether your PR contains ",(0,l.kt)("strong",{parentName:"li"},"too many")," changes across various scopes. If so, consider splitting this big PR into several small PRs. In this way, you might get your PRs reviewed faster.")))),(0,l.kt)("h2",{id:"how-to-write-good-pr-titles"},"How to write good PR titles?"),(0,l.kt)("p",null,"A PR title should be structured as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt_text",src:a(92434).Z,width:"1166",height:"660"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,l.kt)("strong",{parentName:"p"},"Rule")),(0,l.kt)("p",{parentName:"blockquote"},"A good title = clear format (",(0,l.kt)("a",{parentName:"p",href:"#type"},"type")," and ",(0,l.kt)("a",{parentName:"p",href:"#scope"},"scope"),") + self-explanatory ",(0,l.kt)("a",{parentName:"p",href:"#summary"},"summary"))),(0,l.kt)("h3",{id:"quick-examples"},"\ud83d\udca1Quick examples"),(0,l.kt)("p",null,"Here are some examples of unclear and good PR titles for your quick reference. Good PR titles are concise and self-explanatory since they tell you the changes in a clear and direct way."),(0,l.kt)("p",null,"For more examples with correct formats, see ",(0,l.kt)("a",{parentName:"p",href:"#full-examples"},"Full examples"),"."),(0,l.kt)("p",null,"\ud83d\ude4c ",(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Vague \u274c"),(0,l.kt)("th",{parentName:"tr",align:null},"Clear \u2705"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Producer getting producer busy is removing existing producer from list"),(0,l.kt)("td",{parentName:"tr",align:null},"[fix][broker]"," \u200b\u200bActive producers with the same name are no longer removed from the topic map")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forbid to read other topic's data in managedLedger layer"),(0,l.kt)("td",{parentName:"tr",align:null},"[improve][broker]"," Consumers are not allowed to read data on topics to which they are not subscribed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fix kinesis sink backoff class not found"),(0,l.kt)("td",{parentName:"tr",align:null},"[improve][connector]"," xx connectors can now use the Kinesis Backoff class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"K8s Function Name Length Check Allows Invalid StatefulSet"),(0,l.kt)("td",{parentName:"tr",align:null},"[improve][function]"," Function name length cannot exceed 52 characters when using Kubernetes runtime")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,l.kt)("strong",{parentName:"p"},"Steps")),(0,l.kt)("p",{parentName:"blockquote"},"How to write a good PR title?"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Select a ",(0,l.kt)("a",{parentName:"li",href:"#type"},"type"),"."),(0,l.kt)("li",{parentName:"ol"},"Select a  ",(0,l.kt)("a",{parentName:"li",href:"#scope"},"scope"),"."),(0,l.kt)("li",{parentName:"ol"},"Write a ",(0,l.kt)("a",{parentName:"li",href:"#summary"},"summary"),"."))),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),' is "what actions do you take".'),(0,l.kt)("p",null,"It must be one of the following."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Pulsar PR label"),(0,l.kt)("th",{parentName:"tr",align:null},"What actions do you take?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cleanup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Fcleanup"},"type/cleanup")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove unused code or doc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"improve"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Fimprovement"},"type/improvement")),(0,l.kt)("td",{parentName:"tr",align:null},"Submit enhancements that are neither new features nor bug fixes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feat"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Ffeature"},"type/feature")),(0,l.kt)("td",{parentName:"tr",align:null},"Submit new features.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fix"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Ffix"},"type/fix")),(0,l.kt)("td",{parentName:"tr",align:null},"Submit bug fixes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refactor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Frefactor"},"type/refactor")),(0,l.kt)("td",{parentName:"tr",align:null},"Restructure existing code while preserving its external behavior.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"revert"),(0,l.kt)("td",{parentName:"tr",align:null},"To be created"),(0,l.kt)("td",{parentName:"tr",align:null},"Revert changes")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Choose correct labels for your PR so that your PR will automatically go to the correct chapter in release notes. If you do not specify a type label, the PR might go to the wrong place or not be included in the release notes at all.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For more information about release note automation for Pulsar and clients, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1Ul2qIChDe8QDlDwJBICq1VviYZhdk1djKJJC5wXAGsI/edit"},"PIP 112: Generate Release Notes Automatically"),".")))),(0,l.kt)("h3",{id:"scope"},(0,l.kt)("inlineCode",{parentName:"h3"},"scope")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scope"),' is "where do you make changes".'),(0,l.kt)("p",null,"Pulsar and clients have separate release notes, so they have different scopes."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("p",{parentName:"blockquote"},"If your PR affects several scopes, do not choose several scope labels at the same time since different scopes go to different chapters in release notes. Instead, choose the most affected label (scope), or else your PR goes to several chapters in release notes, which causes redundancies. Choose only one label as much as possible.")),(0,l.kt)("h4",{id:"pulsar"},"Pulsar"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scope")," and PR labels must be one of the following."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Pulsar PR label"),(0,l.kt)("th",{parentName:"tr",align:null},"Where do you make changes?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/admin ",(0,l.kt)("br",null),"- scope/topic-policy"),(0,l.kt)("td",{parentName:"tr",align:null},"- pulsar-admin ",(0,l.kt)("br",null)," - REST API ",(0,l.kt)("br",null)," - Java admin API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/broker"),(0,l.kt)("td",{parentName:"tr",align:null},"It\u2019s difficult to maintain an exhaustive list since many changes belong to brokers. ",(0,l.kt)("br",null),(0,l.kt)("br",null)," Here just lists some frequently updated areas, it includes but not limited to:",(0,l.kt)("br",null),"  - key_shared ",(0,l.kt)("br",null)," - replication ",(0,l.kt)("br",null)," - metadata ",(0,l.kt)("br",null)," - compaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cli"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar CLI tools. ",(0,l.kt)("br",null)," It includes: ",(0,l.kt)("br",null)," - pulsar ",(0,l.kt)("br",null)," - pulsar-client ",(0,l.kt)("br",null)," - pulsar-daemon ",(0,l.kt)("br",null)," - pulsar-perf ",(0,l.kt)("br",null)," - bookkeeper",(0,l.kt)("br",null)," - broker-tool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"io",(0,l.kt)("br",null),"(connector)"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/connector ",(0,l.kt)("br",null)," - scope/connect ",(0,l.kt)("br",null)," - scope/kafka"),(0,l.kt)("td",{parentName:"tr",align:null},"Connector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fn",(0,l.kt)("br",null),"(function)"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/function"),(0,l.kt)("td",{parentName:"tr",align:null},"Function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta",(0,l.kt)("br",null),"(metadata)"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/zookeepeer"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitor"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/metrics - scope/stats"),(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/proxy"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/schema ",(0,l.kt)("br",null)," - scope/schemaregistry"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sec",(0,l.kt)("br",null),"(security)"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/security ",(0,l.kt)("br",null)," - scope/authentication ",(0,l.kt)("br",null)," - scope/authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Security")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/sql"),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar SQL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/bookkeeper storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Managed ledge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offload",(0,l.kt)("br",null),"(tiered storage)"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/tieredstorage"),(0,l.kt)("td",{parentName:"tr",align:null},"Tiered storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"txn"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/transaction",(0,l.kt)("br",null)," - scope/transaction-coordinator"),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"test"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/test"),(0,l.kt)("td",{parentName:"tr",align:null},"Code tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ci"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/ci"),(0,l.kt)("td",{parentName:"tr",align:null},"CI workflow changes or debugging")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"build"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/build"),(0,l.kt)("td",{parentName:"tr",align:null},"- Dependency (Maven) ",(0,l.kt)("br",null)," - Docker ",(0,l.kt)("br",null)," - Build or release script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"misc"),(0,l.kt)("td",{parentName:"tr",align:null},"- scope/misc"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes that do not belong to any scopes above.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doc"),(0,l.kt)("td",{parentName:"tr",align:null},"- doc"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"site",(0,l.kt)("br",null),"(website)"),(0,l.kt)("td",{parentName:"tr",align:null},"- website"),(0,l.kt)("td",{parentName:"tr",align:null},"Website")))),(0,l.kt)("h4",{id:"client"},"Client"),(0,l.kt)("p",null,"The following changes are shown on the client release notes."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scope")," and PR label must be one of the following."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Pulsar PR label"),(0,l.kt)("th",{parentName:"tr",align:null},"Where do you make changes?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client",(0,l.kt)("br",null),"(Java client)"),(0,l.kt)("td",{parentName:"tr",align:null},"scope/client-java"),(0,l.kt)("td",{parentName:"tr",align:null},"Java client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ws",(0,l.kt)("br",null),"(WebSocket)"),(0,l.kt)("td",{parentName:"tr",align:null},"scope/client-websocket"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/docs/next/client-libraries-websocket/"},"WebSocket API"))))),(0,l.kt)("h3",{id:"summary"},(0,l.kt)("inlineCode",{parentName:"h3"},"Summary")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Summary")," is a single line that best sums up the changes made in the commit."),(0,l.kt)("p",null,"Follow the best practice below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep the summary concise and descriptive."),(0,l.kt)("li",{parentName:"ul"},"Use the second person and present tense."),(0,l.kt)("li",{parentName:"ul"},"Write ",(0,l.kt)("a",{parentName:"li",href:"https://www.grammarly.com/blog/sentence-fragment/#:~:text=What's%20a%20sentence%20fragment%3F,%2C%20a%20verb%2C%20or%20both."},"complete sentences")," rather than fragments."),(0,l.kt)("li",{parentName:"ul"},"Capitalize the first letter."),(0,l.kt)("li",{parentName:"ul"},"No period at the end. \u274c"),(0,l.kt)("li",{parentName:"ul"},"Do not include back quotes (``)."),(0,l.kt)("li",{parentName:"ul"},"Limit the length to 50 characters."),(0,l.kt)("li",{parentName:"ul"},"If you cherry pick changes to branches, name your PR title the same as the original PR title and label your PR with cherry-pick related labels."),(0,l.kt)("li",{parentName:"ul"},"Do not use ",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword"},"GitHub keywords")," followed by a #","<","issue-number>. This information should be provided in PR descriptions or commit messages rather than in PR titles. \u274c")),(0,l.kt)("h3",{id:"full-examples"},"Full examples"),(0,l.kt)("p",null,"As explained in the ",(0,l.kt)("a",{parentName:"p",href:"#how-to-write-good-pr-titles"},"How to write good PR titles")," chapter:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,l.kt)("strong",{parentName:"p"},"Rule")),(0,l.kt)("p",{parentName:"blockquote"},"A good title = clear format (",(0,l.kt)("a",{parentName:"p",href:"#type"},"type")," and ",(0,l.kt)("a",{parentName:"p",href:"#scope"},"scope"),") + self-explanatory ",(0,l.kt)("a",{parentName:"p",href:"#summary"},"summary"))),(0,l.kt)("p",null,"Here are some format examples. For self-explanatory summary examples, see ",(0,l.kt)("a",{parentName:"p",href:"#quick-examples"},"Quick examples"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Changes"),(0,l.kt)("th",{parentName:"tr",align:null},"Unclear format \u274c"),(0,l.kt)("th",{parentName:"tr",align:null},"Clear format \u2705"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit breaking changes"),(0,l.kt)("td",{parentName:"tr",align:null},"[Breaking change]"," xxx"),(0,l.kt)("td",{parentName:"tr",align:null},"[feat][broker]","! Support xx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit PIP changes"),(0,l.kt)("td",{parentName:"tr",align:null},"[PIP-198]"," Support xx"),(0,l.kt)("td",{parentName:"tr",align:null},"[feat][broker]"," PIP-198: Support xx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cherry pick changes"),(0,l.kt)("td",{parentName:"tr",align:null},"[Branch-2.9]"," Fix xxx issue."),(0,l.kt)("td",{parentName:"tr",align:null},"[fix][broker]","[branch-2.9]"," Fix xxx issue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Revert changes"),(0,l.kt)("td",{parentName:"tr",align:null},"Revert xxx"),(0,l.kt)("td",{parentName:"tr",align:null},"[revert][broker]"," Revert changes about xxx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add features"),(0,l.kt)("td",{parentName:"tr",align:null},"- Adding xx feature ",(0,l.kt)("br",null)," - Support delete schema forcefully"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[feat][java client]"," Add xx feature ",(0,l.kt)("br",null)," - ","[feat][schema]"," Support xx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fix bugs"),(0,l.kt)("td",{parentName:"tr",align:null},"[Issue 14633][pulsar-broker]"," Fixed xxx"),(0,l.kt)("td",{parentName:"tr",align:null},"[fix][broker]"," Fix xxx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit improvements"),(0,l.kt)("td",{parentName:"tr",align:null},"- Enhances xx ",(0,l.kt)("br",null)," - Bump netty version to 4.1.75"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[improve][sql]"," Improve xx performance ",(0,l.kt)("br",null)," - ","[improve][build]"," Bump Netty version to 4.1.75")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update tests"),(0,l.kt)("td",{parentName:"tr",align:null},"reduce xx test flakiness"),(0,l.kt)("td",{parentName:"tr",align:null},"[improve][test]"," Reduce xxx flaky tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update docs"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[Doc]"," add explanations for xxx ",(0,l.kt)("br",null)," - 2.8.3 Release Notes ",(0,l.kt)("br",null)," - Fix typos in xx"),(0,l.kt)("td",{parentName:"tr",align:null},"- ","[feat][doc]"," Add explanations for xxx ",(0,l.kt)("br",null)," - ","[feat][doc]"," Add 2.8.3 release note ",(0,l.kt)("br",null)," - ","[fix][doc]"," Fix typos in xx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update website"),(0,l.kt)("td",{parentName:"tr",align:null},"[Website]"," adjust xxx"),(0,l.kt)("td",{parentName:"tr",align:null},"[improve][site]"," Adjust xxx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update instructions/guidelines"),(0,l.kt)("td",{parentName:"tr",align:null},"Update xxx guideline"),(0,l.kt)("td",{parentName:"tr",align:null},"[improve][doc]"," Update xx guidelines")))))}m.isMDXComponent=!0},92434:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/naming-1-f097356caaf15d1d2a44af6515de8251.png"}}]);