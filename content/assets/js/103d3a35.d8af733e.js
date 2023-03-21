"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"functions-runtime-kubernetes",title:"Configure Kubernetes runtime",sidebar_label:"Configure Kubernetes runtime"},o=void 0,s={unversionedId:"functions-runtime-kubernetes",id:"functions-runtime-kubernetes",title:"Configure Kubernetes runtime",description:"The Kubernetes runtime works when a function worker generates and applies Kubernetes manifests. The manifests generated by a function worker include:",source:"@site/docs/functions-runtime-kubernetes.md",sourceDirName:".",slug:"/functions-runtime-kubernetes",permalink:"/docs/next/functions-runtime-kubernetes",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-runtime-kubernetes.md",tags:[],version:"current",frontMatter:{id:"functions-runtime-kubernetes",title:"Configure Kubernetes runtime",sidebar_label:"Configure Kubernetes runtime"},sidebar:"docsSidebar",previous:{title:"Configure process runtime",permalink:"/docs/next/functions-runtime-process"},next:{title:"Customize Java runtime options",permalink:"/docs/next/functions-runtime-java-options"}},u={},l=[{value:"Configure basic settings",id:"configure-basic-settings",level:3},{value:"Integrate Kubernetes secrets",id:"integrate-kubernetes-secrets",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:3},{value:"Customize Kubernetes runtime",id:"customize-kubernetes-runtime",level:3},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",level:3}],c={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Kubernetes runtime works when a function worker generates and applies Kubernetes manifests. The manifests generated by a function worker include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"StatefulSet"),"\nBy default, the ",(0,r.kt)("inlineCode",{parentName:"li"},"StatefulSet")," manifest has a single pod with a number of replicas. The number is determined by the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/functions-deploy-cluster-parallelism"},"parallelism")," of the function. The pod downloads the function payload (via the function worker REST API) on pod boot. The pod's container image is configurable if the function runtime is configured."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"Service")," (used to communicate with the pod)"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"Secret")," for authenticating credentials (when applicable).\nThe Kubernetes runtime supports secrets. You can create a Kubernetes secret and expose it as an environment variable in the pod.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For the rules of translating Pulsar object names into Kubernetes resource labels, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-overview#how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"instructions"),".")),(0,r.kt)("h3",{id:"configure-basic-settings"},"Configure basic settings"),(0,r.kt)("p",null,"To quickly configure a Kubernetes runtime, you can use the default settings of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/runtime/src/main/java/org/apache/pulsar/functions/runtime/kubernetes/KubernetesRuntimeFactoryConfig.java"},(0,r.kt)("inlineCode",{parentName:"a"},"KubernetesRuntimeFactoryConfig"))," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file."),(0,r.kt)("p",null,"If you have [set up a Pulsar cluster on Kubernetes using ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/helm-install"},"Helm chart"),", which means function workers have also been set up on Kubernetes, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceAccount")," associated with the pod where the function worker is running. Otherwise, you can configure function workers to communicate with a Kubernetes cluster by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"functionRuntimeFactoryConfigs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"k8Uri"),"."),(0,r.kt)("h3",{id:"integrate-kubernetes-secrets"},"Integrate Kubernetes secrets"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret")," in Kubernetes is an object that holds some confidential data such as a password, a token, or a key. When you create a secret in the Kubernetes namespace where your functions are deployed, functions can safely reference and distribute it. To enable this feature, set ",(0,r.kt)("inlineCode",{parentName:"p"},"secretsProviderConfiguratorClassName")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/functions-worker.yml")," file."),(0,r.kt)("p",null,"For example, you ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/functions-deploy"},"deploy a function")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-func")," Kubernetes namespace, and you have a secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"database-creds")," with a field name ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", which you want to mount in the pod as an environment variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD"),". The following configurations enable functions to reference the secret and mount the value as an environment variable in the pod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tenant: "mytenant"\nnamespace: "mynamespace"\nname: "myfunction"\ninputs: [ "persistent://mytenant/mynamespace/myfuncinput" ]\nclassName: "com.company.pulsar.myfunction"\n\nsecrets:\n  # the secret will be mounted from the `password` field in the `database-creds` secret as an env var called `DATABASE_PASSWORD`\n  DATABASE_PASSWORD:\n    path: "database-creds"\n    key: "password"\n')),(0,r.kt)("h3",{id:"enable-token-authentication"},"Enable token authentication"),(0,r.kt)("p",null,"When you use token authentication, TLS encryption, or custom authentications to secure the communication with your Pulsar cluster, Pulsar passes your certificate authority (CA) to the client, so the client can authenticate the cluster with your signed certificate."),(0,r.kt)("p",null,"To enable the authentication for your Pulsar cluster, you need to specify a mechanism for the pod running your function to authenticate the broker, by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider")," interface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For token authentication, Pulsar includes an implementation of the above interface to distribute the CA. The function worker captures the token that deploys (or updates) the function, saves it as a secret, and mounts it into the pod."),(0,r.kt)("p",{parentName:"li"},"The configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/function-worker.yml")," file is as follows. ",(0,r.kt)("inlineCode",{parentName:"p"},"functionAuthProviderClassName")," is used to specify the path to this implementation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"functionAuthProviderClassName: org.apache.pulsar.functions.auth.KubernetesSecretsTokenAuthProvider\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For TLS or custom authentication, you can either implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider")," interface or use an alternative mechanism."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the token you use to deploy the function has an expiration date, you may need to deploy the function again after it expires.")),(0,r.kt)("h3",{id:"customize-kubernetes-runtime"},"Customize Kubernetes runtime"),(0,r.kt)("p",null,"Customizing Kubernetes runtime allows you to customize Kubernetes resources created by the runtime, including how to generate manifests, how to pass authenticated data to pods, and how to integrate secrets."),(0,r.kt)("p",null,"To customize Kubernetes runtime, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerClassName")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/functions-worker.yml")," file and use the fully qualified class name."),(0,r.kt)("p",null,"The function API provides a flag named ",(0,r.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions"),", which is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.KubernetesManifestCustomizer")," interface. To initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"KubernetesManifestCustomizer"),", you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/functions-worker.yml")," file."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," is the same across all functions. If you provide both ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions"),", you need to decide how to manage these two configurations in your implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KubernetesManifestCustomizer")," interface.")),(0,r.kt)("p",null,"Pulsar includes a built-in implementation initialized with ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig"),". It enables you to pass a JSON document as ",(0,r.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions")," with certain properties to augment. To use this built-in implementation, set ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerClassName")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.BasicKubernetesManifestCustomizer"),"."),(0,r.kt)("p",null,"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions")," are provided and have conflicts, ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicKubernetesManifestCustomizer")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions")," to override ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig"),"."),(0,r.kt)("p",null,"Below is an example of configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jobName": "jobname", // the k8s pod name to run this function instance\n  "jobNamespace": "namespace", // the k8s namespace to run this function in\n  "extractLabels": {           // extra labels to attach to the statefulSet, service, and pods\n    "extraLabel": "value"\n  },\n  "extraAnnotations": {        // extra annotations to attach to the statefulSet, service, and pods\n    "extraAnnotation": "value"\n  },\n  "nodeSelectorLabels": {      // node selector labels to add on to the pod spec\n    "customLabel": "value"\n  },\n  "tolerations": [             // tolerations to add to the pod spec\n    {\n      "key": "custom-key",\n      "value": "value",\n      "effect": "NoSchedule"\n    }\n  ],\n  "resourceRequirements": {  // values for cpu and memory should be defined as described here: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container\n    "requests": {\n      "cpu": 1,\n      "memory": "4G"\n    },\n    "limits": {\n      "cpu": 2,\n      "memory": "8G"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"How to define Pulsar resource names when running Pulsar in Kubernetes"),(0,r.kt)("p",null,"If you run Pulsar Functions or connectors on Kubernetes, you need to follow the Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."),(0,r.kt)("p",null,"Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"RFC 1123"),". Pulsar supports more legal characters than the Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Truncate to 63 characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace the following characters with dashes (-):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Non-alphanumeric characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Underscores (_)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dots (.)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace beginning and ending non-alphanumeric characters with 0"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/functions-runtime-kubernetes#customize-kubernetes-runtime"},"customize Kubernetes runtime"),"."),(0,r.kt)("li",{parentName:"ul"},"For how to configure Kubernetes runtime, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/functions-runtime-kubernetes"},"instructions"),"."))))}m.isMDXComponent=!0}}]);