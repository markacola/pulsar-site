"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"functions-deploy-arguments",title:"Default arguments of CLI",sidebar_label:"Default arguments of CLI"},o=void 0,l={unversionedId:"functions-deploy-arguments",id:"functions-deploy-arguments",title:"Default arguments of CLI",description:"You can use function-related commands in the pulsar-admin CLI to deploy functions. Pulsar provides a variety of commands, such as:",source:"@site/docs/functions-deploy-arguments.md",sourceDirName:".",slug:"/functions-deploy-arguments",permalink:"/docs/next/functions-deploy-arguments",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-deploy-arguments.md",tags:[],version:"current",frontMatter:{id:"functions-deploy-arguments",title:"Default arguments of CLI",sidebar_label:"Default arguments of CLI"},sidebar:"docsSidebar",previous:{title:"How to deploy",permalink:"/docs/next/functions-deploy"},next:{title:"Deploy a function in localrun mode",permalink:"/docs/next/functions-deploy-localrun"}},p={},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use function-related commands in the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.0/pulsar-admin/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI to deploy functions. Pulsar provides a variety of commands, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," command for deploying functions in ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/functions-deploy-cluster"},"cluster mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trigger")," command for ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/functions-deploy-trigger"},"triggering")," functions")),(0,r.kt)("p",null,"The following table lists the parameters required in CLI and their default values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function name"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A ",(0,r.kt)("br",null),"You can specify any value for the function name (except org, library, or similar class names).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A ",(0,r.kt)("br",null),"The value is derived from the name of the input topics. For example, if the input topic form is ",(0,r.kt)("inlineCode",{parentName:"td"},"persistent://marketing/{namespace}/{topicName}"),", the tenant name is ",(0,r.kt)("inlineCode",{parentName:"td"},"marketing"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A ",(0,r.kt)("br",null),"The value is derived from the input topic name. If the input topic form is ",(0,r.kt)("inlineCode",{parentName:"td"},"persistent://marketing/asia/{topicName}"),", the namespace is ",(0,r.kt)("inlineCode",{parentName:"td"},"asia"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output topic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{input topic}-{function name}-output"),". For example, if an input topic name of a function is ",(0,r.kt)("inlineCode",{parentName:"td"},"incoming")," and the function name is ",(0,r.kt)("inlineCode",{parentName:"td"},"exclamation"),", the output topic name is ",(0,r.kt)("inlineCode",{parentName:"td"},"incoming-exclamation-output"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/functions-concepts#processing-guarantees-and-subscription-types"},"Processing guarantees")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ATLEAST_ONCE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar service URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pulsar://localhost:6650"))))),(0,r.kt)("p",null,"Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," command for example. The following function has default values for the function name (",(0,r.kt)("inlineCode",{parentName:"p"},"MyFunction"),"), tenant (",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"), namespace (",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"), subscription type (",(0,r.kt)("inlineCode",{parentName:"p"},"SHARED"),"), processing guarantees (",(0,r.kt)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),"), and Pulsar service URL (",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --jar my-pulsar-functions.jar \\\n  --classname org.example.MyFunction \\\n  --inputs my-function-input-topic1,my-function-input-topic2\n")))}m.isMDXComponent=!0}}]);