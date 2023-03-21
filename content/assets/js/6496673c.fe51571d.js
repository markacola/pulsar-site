"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),o=n(67294),a=n(86010),i=n(72389),s=n(67392),l=n(7094),u=n(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:d,className:f}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,l.U)(),[k,C]=(0,o.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==k&&v.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==k&&(N(t),C(r),null!=d&&y(d,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:x,onClick:P},i,{className:(0,a.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":k===t})}),n??t)}))),t?(0,o.cloneElement)(m.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,i.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},40503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(65488),i=n(85162);const s={id:"functions-develop-security",title:"Enable security on functions",sidebar_label:"Enable security on functions"},l=void 0,u={unversionedId:"functions-develop-security",id:"version-2.11.x/functions-develop-security",title:"Enable security on functions",description:"Prerequisites",source:"@site/versioned_docs/version-2.11.x/functions-develop-security.md",sourceDirName:".",slug:"/functions-develop-security",permalink:"/docs/2.11.x/functions-develop-security",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-security.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-develop-security",title:"Enable security on functions",sidebar_label:"Enable security on functions"},sidebar:"docsSidebar",previous:{title:"Use metrics to monitor functions",permalink:"/docs/2.11.x/functions-develop-metrics"},next:{title:"Configure state storage",permalink:"/docs/2.11.x/functions-develop-state"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure function workers",id:"configure-function-workers",level:2},{value:"Get the secret",id:"get-the-secret",level:2}],d={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"If you want to enable security on functions, you need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-worker"},"enable security settings")," on function workers first."),(0,o.kt)("h2",{id:"configure-function-workers"},"Configure function workers"),(0,o.kt)("p",null,"To use the secret APIs from the context, you need to set the following two parameters for function workers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secretsProviderConfiguratorClassName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secretsProviderConfiguratorConfig"))),(0,o.kt)("p",null,"Pulsar Functions provided two types of ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator")," implementation and both can be used as the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"secretsProviderConfiguratorClassName")," directly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.pulsar.functions.secretsproviderconfigurator.DefaultSecretsProviderConfigurator"),": This is a barebones version of a secrets provider which wires in ",(0,o.kt)("inlineCode",{parentName:"li"},"ClearTextSecretsProvider")," to the function instances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator"),": This is used by default for running in Kubernetes and it uses Kubernetes built-in secrets and binds them as environment variables (via ",(0,o.kt)("inlineCode",{parentName:"li"},"EnvironmentBasedSecretsProvider"),") within the function container to ensure that the secrets are available to the function at runtime.")),(0,o.kt)("p",null,"Function workers use the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.secretsproviderconfigurator.SecretsProviderConfigurator")," interface to choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProvider")," class name and its associated configurations at the time of starting the function instances."),(0,o.kt)("p",null,"Function instances use the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.secretsprovider.SecretsProvider")," interface to fetch the secrets. The implementation that ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProvider")," uses is determined by ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator"),"."),(0,o.kt)("p",null,"You can also implement your own ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator")," if you want to use different ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProvider")," for function instances."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, only Java and Python runtime support ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProvider"),". The Java and Python Runtime have the following two providers:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"ClearTextSecretsProvider (default for ",(0,o.kt)("inlineCode",{parentName:"li"},"DefaultSecretsProviderConfigurator"),")"),(0,o.kt)("li",{parentName:"ul"},"EnvironmentBasedSecretsProvider (default for ",(0,o.kt)("inlineCode",{parentName:"li"},"KubernetesSecretsProviderConfigurator"),")"))),(0,o.kt)("h2",{id:"get-the-secret"},"Get the secret"),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator")," is set, you can get the secret using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-concepts#context"},(0,o.kt)("inlineCode",{parentName:"a"},"Context"))," object as follows."),(0,o.kt)(a.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class GetSecretValueFunction implements Function<String, Void> {\n\n    @Override\n    public Void process(String input, Context context) throws Exception {\n        Logger LOG = context.getLogger();\n        String secretValue = context.getSecret(input);\n\n        if (!secretValue.isEmpty()) {\n            LOG.info("The secret {} has value {}", intput, secretValue);\n        } else {\n            LOG.warn("No secret with key {}", input);\n        }\n\n        return null;\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass GetSecretValueFunction(Function):\n    def process(self, input, context):\n        logger = context.get_logger()\n        secret_value = context.get_secret(input)\n        if secret_provider is None:\n            logger.warn('No secret with key {0} '.format(input))\n        else:\n            logger.info(\"The secret {0} has value {1}\".format(input, secret_value))\n")))))}m.isMDXComponent=!0}}]);