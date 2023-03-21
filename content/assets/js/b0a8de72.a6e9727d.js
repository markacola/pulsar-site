"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8336],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=p(n),s=a,g=k["".concat(o,".").concat(s)]||k[s]||m[s]||r;return n?l.createElement(g,i(i({ref:e},d),{},{components:n})):l.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[k]="string"==typeof t?t:a,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},35233:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const r={id:"io-influxdb-sink",title:"InfluxDB sink connector",sidebar_label:"InfluxDB sink connector",original_id:"io-influxdb-sink"},i=void 0,u={unversionedId:"io-influxdb-sink",id:"version-2.5.1/io-influxdb-sink",title:"InfluxDB sink connector",description:"The InfluxDB sink connector pulls messages from Pulsar topics",source:"@site/versioned_docs/version-2.5.1/io-influxdb-sink.md",sourceDirName:".",slug:"/io-influxdb-sink",permalink:"/docs/2.5.1/io-influxdb-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/io-influxdb-sink.md",tags:[],version:"2.5.1",frontMatter:{id:"io-influxdb-sink",title:"InfluxDB sink connector",sidebar_label:"InfluxDB sink connector",original_id:"io-influxdb-sink"}},o={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"InfluxDBv2",id:"influxdbv2",level:4},{value:"InfluxDBv1",id:"influxdbv1",level:4},{value:"Example",id:"example",level:3},{value:"InfluxDBv2",id:"influxdbv2-1",level:4},{value:"InfluxDBv1",id:"influxdbv1-1",level:4}],d={toc:p},k="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The InfluxDB sink connector pulls messages from Pulsar topics\nand persists the messages to InfluxDB."),(0,a.kt)("p",null,"The InfluxDB sink provides different configurations for InfluxDBv1 and v2 respectively."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The configuration of the InfluxDB sink connector has the following properties."),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("h4",{id:"influxdbv2"},"InfluxDBv2"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"influxdbUrl")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the InfluxDB instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The authentication token used to authenticate to InfluxDB.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"organization")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The InfluxDB organization to write to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bucket")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The InfluxDB bucket to write to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"precision")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"ns"),(0,a.kt)("td",{parentName:"tr",align:null},"The timestamp precision for writing data to InfluxDB. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Below are the available options:",(0,a.kt)("li",null,"ns",(0,a.kt)("br",null)),(0,a.kt)("li",null,"us",(0,a.kt)("br",null)),(0,a.kt)("li",null,"ms",(0,a.kt)("br",null)),(0,a.kt)("li",null,"s"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"NONE"),(0,a.kt)("td",{parentName:"tr",align:null},"The log level for InfluxDB request and response. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Below are the available options:",(0,a.kt)("li",null,"NONE",(0,a.kt)("br",null)),(0,a.kt)("li",null,"BASIC",(0,a.kt)("br",null)),(0,a.kt)("li",null,"HEADERS",(0,a.kt)("br",null)),(0,a.kt)("li",null,"FULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"gzipEnable")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to enable gzip or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"1000L"),(0,a.kt)("td",{parentName:"tr",align:null},"The InfluxDB operation time in milliseconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"The batch size of writing to InfluxDB.")))),(0,a.kt)("h4",{id:"influxdbv1"},"InfluxDBv1"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"influxdbUrl")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the InfluxDB instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"username")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The username used to authenticate to InfluxDB.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The password used to authenticate to InfluxDB.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"database")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The InfluxDB to which write messages.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"consistencyLevel")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"ONE"),(0,a.kt)("td",{parentName:"tr",align:null},"The consistency level for writing data to InfluxDB. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Below are the available options:",(0,a.kt)("li",null,"ALL",(0,a.kt)("br",null)),(0,a.kt)("li",null," ANY",(0,a.kt)("br",null)),(0,a.kt)("li",null,"ONE",(0,a.kt)("br",null)),(0,a.kt)("li",null,"QUORUM "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"NONE"),(0,a.kt)("td",{parentName:"tr",align:null},"The log level for InfluxDB request and response. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Below are the available options:",(0,a.kt)("li",null,"NONE",(0,a.kt)("br",null)),(0,a.kt)("li",null,"BASIC",(0,a.kt)("br",null)),(0,a.kt)("li",null,"HEADERS",(0,a.kt)("br",null)),(0,a.kt)("li",null,"FULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"retentionPolicy")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"autogen"),(0,a.kt)("td",{parentName:"tr",align:null},"The retention policy for InfluxDB.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"gzipEnable")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to enable gzip or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"1000L"),(0,a.kt)("td",{parentName:"tr",align:null},"The InfluxDB operation time in milliseconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"The batch size of writing to InfluxDB.")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Before using the InfluxDB sink connector, you need to create a configuration file through one of the following methods."),(0,a.kt)("h4",{id:"influxdbv2-1"},"InfluxDBv2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSON"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "influxdbUrl": "http://localhost:9999",\n    "organization": "example-org",\n    "bucket": "example-bucket",\n    "token": "xxxx",\n    "precision": "ns",\n    "logLevel": "NONE",\n    "gzipEnable": false,\n    "batchTimeMs": 1000,\n    "batchSize": 100\n}\n\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"YAML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    influxdbUrl: "http://localhost:9999"\n    organization: "example-org"\n    bucket: "example-bucket"\n    token: "xxxx"\n    precision: "ns"\n    logLevel: "NONE"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n\n')))),(0,a.kt)("h4",{id:"influxdbv1-1"},"InfluxDBv1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSON"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "influxdbUrl": "http://localhost:8086",\n    "database": "test_db",\n    "consistencyLevel": "ONE",\n    "logLevel": "NONE",\n    "retentionPolicy": "autogen",\n    "gzipEnable": false,\n    "batchTimeMs": 1000,\n    "batchSize": 100\n}\n\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"YAML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    influxdbUrl: "http://localhost:8086"\n    database: "test_db"\n    consistencyLevel: "ONE"\n    logLevel: "NONE"\n    retentionPolicy: "autogen"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n\n')))))}m.isMDXComponent=!0}}]);