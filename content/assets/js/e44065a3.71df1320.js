"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"functions-worker-temp-file-path",title:"Configure temporary file path",sidebar_label:"Configure temporary file path"},i=void 0,l={unversionedId:"functions-worker-temp-file-path",id:"version-2.11.x/functions-worker-temp-file-path",title:"Configure temporary file path",description:"Function workers use java.io.tmpdir in the JVM as the default temporary file path, which is also used as the default extraction file path for each NAR package. NAR packages require a local file path to extract and load to the Java class loader.",source:"@site/versioned_docs/version-2.11.x/functions-worker-temp-file-path.md",sourceDirName:".",slug:"/functions-worker-temp-file-path",permalink:"/docs/2.11.x/functions-worker-temp-file-path",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-worker-temp-file-path.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-worker-temp-file-path",title:"Configure temporary file path",sidebar_label:"Configure temporary file path"},sidebar:"docsSidebar",previous:{title:"Run function workers separately",permalink:"/docs/2.11.x/functions-worker-run-separately"},next:{title:"Enable stateful functions",permalink:"/docs/2.11.x/functions-worker-stateful"}},c={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Function workers use ",(0,a.kt)("inlineCode",{parentName:"p"},"java.io.tmpdir")," in the JVM as the default temporary file path, which is also used as the default extraction file path for each NAR package. NAR packages require a local file path to extract and load to the Java class loader."),(0,a.kt)("p",null,"If you want to change the default extraction file path for NAR packages to another directory, you can add the following parameter with the desired directory in the ",(0,a.kt)("inlineCode",{parentName:"p"},"functions_worker.yml")," file. The configuration varies depending on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-concepts#function-runtime"},"function runtime")," you are using."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Function runtime"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Configuration for temporary file path"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/2.11.x/functions-runtime-thread"},"Thread runtime"),(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"/docs/2.11.x/functions-runtime-process"},"Process runtime")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"narExtractionDirectory"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/2.11.x/functions-runtime-kubernetes"},"Kubernetes runtime")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"functionRuntimeFactoryConfigs.narExtractionDirectory"))))))}f.isMDXComponent=!0}}]);