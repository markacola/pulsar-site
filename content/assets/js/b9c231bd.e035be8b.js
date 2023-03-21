"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(o,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"io-kinesis-sink",title:"Kinesis sink connector",sidebar_label:"Kinesis sink connector",original_id:"io-kinesis-sink"},l=void 0,s={unversionedId:"io-kinesis-sink",id:"version-2.7.1/io-kinesis-sink",title:"Kinesis sink connector",description:"The Kinesis sink connector pulls data from Pulsar and persists data into Amazon Kinesis.",source:"@site/versioned_docs/version-2.7.1/io-kinesis-sink.md",sourceDirName:".",slug:"/io-kinesis-sink",permalink:"/docs/2.7.1/io-kinesis-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.1/io-kinesis-sink.md",tags:[],version:"2.7.1",frontMatter:{id:"io-kinesis-sink",title:"Kinesis sink connector",sidebar_label:"Kinesis sink connector",original_id:"io-kinesis-sink"}},o={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Built-in plugins",id:"built-in-plugins",level:3},{value:"Example",id:"example",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Kinesis sink connector pulls data from Pulsar and persists data into Amazon Kinesis."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the Kinesis sink connector has the following property."),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageFormat")),(0,r.kt)("td",{parentName:"tr",align:null},"MessageFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"ONLY_RAW_PAYLOAD"),(0,r.kt)("td",{parentName:"tr",align:null},"Message format in which Kinesis sink converts Pulsar messages and publishes to Kinesis streams.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ONLY_RAW_PAYLOAD"),": Kinesis sink directly publishes Pulsar message payload as a message into the configured Kinesis stream. ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"FULL_MESSAGE_IN_JSON"),": Kinesis sink creates a JSON payload with Pulsar message payload, properties and encryptionCtx, and publishes JSON payload into the configured Kinesis stream.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"FULL_MESSAGE_IN_FB"),": Kinesis sink creates a flatbuffer serialized payload with Pulsar message payload, properties and encryptionCtx, and publishes flatbuffer payload into the configured Kinesis stream."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retainOrdering")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether Pulsar connectors to retain ordering when moving messages from Pulsar to Kinesis or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The Kinesis end-point URL, which can be found at ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsRegion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS region. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Example"),(0,r.kt)("br",null)," us-west-1, us-west-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsKinesisStreamName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The Kinesis stream name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The fully-qualified class name of implementation of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java"},"AwsCredentialProviderPlugin"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),"It is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If it is empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginParam"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginParam")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON parameter to initialize ",(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialsProviderPlugin"),".")))),(0,r.kt)("h3",{id:"built-in-plugins"},"Built-in plugins"),(0,r.kt)("p",null,"The following are built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"AwsCredentialProviderPlugin")," plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.aws.AwsDefaultProviderChainPlugin")),(0,r.kt)("p",{parentName:"li"},"This plugin takes no configuration, it uses the default AWS provider chain."),(0,r.kt)("p",{parentName:"li"},"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default"},"AWS documentation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.aws.STSAssumeRoleProviderPlugin")),(0,r.kt)("p",{parentName:"li"},"This plugin takes a configuration (via the ",(0,r.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginParam"),") that describes a role to assume when running the KCL."),(0,r.kt)("p",{parentName:"li"},"This configuration takes the form of a small json document like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"roleArn": "arn...", "roleSessionName": "name"}\n\n')))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Before using the Kinesis sink connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "awsEndpoint": "some.endpoint.aws",\n    "awsRegion": "us-east-1",\n    "awsKinesisStreamName": "my-stream",\n    "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n    "messageFormat": "ONLY_RAW_PAYLOAD",\n    "retainOrdering": "true"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    awsEndpoint: "some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsKinesisStreamName: "my-stream"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    messageFormat: "ONLY_RAW_PAYLOAD"\n    retainOrdering: "true"\n\n')))))}d.isMDXComponent=!0}}]);