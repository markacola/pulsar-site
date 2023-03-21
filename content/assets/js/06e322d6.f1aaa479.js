"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),r=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:d,className:m}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,s.U)(),[y,x]=(0,o.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=d){const e=b[d];null!=e&&e!==y&&h.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==y&&(P(t),x(a),null!=d&&k(d,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:T,onClick:w},i,{className:(0,r.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},40593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={id:"functions-develop-api",title:"Use APIs",sidebar_label:"Use APIs"},s=void 0,u={unversionedId:"functions-develop-api",id:"version-2.11.x/functions-develop-api",title:"Use APIs",description:"The following table outlines the APIs that you can use to develop Pulsar Functions in Java, Python, and Go.",source:"@site/versioned_docs/version-2.11.x/functions-develop-api.md",sourceDirName:".",slug:"/functions-develop-api",permalink:"/docs/2.11.x/functions-develop-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-api.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-develop-api",title:"Use APIs",sidebar_label:"Use APIs"},sidebar:"docsSidebar",previous:{title:"How to develop",permalink:"/docs/2.11.x/functions-develop"},next:{title:"Pass user-defined configurations",permalink:"/docs/2.11.x/functions-develop-user-defined-configs"}},p={},c=[{value:"Use language-native interface for Java/Python",id:"use-language-native-interface-for-javapython",level:2},{value:"Use SDK for Java/Python/Go",id:"use-sdk-for-javapythongo",level:2},{value:"Use extended SDK for Java",id:"use-extended-sdk-for-java",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following table outlines the APIs that you can use to develop Pulsar Functions in Java, Python, and Go."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Interface"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Use case"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#use-language-native-interface-for-javapython"},"Language-native interface for Java/Python")),(0,o.kt)("td",{parentName:"tr",align:null},"No Pulsar-specific libraries or special dependencies required (only core libraries)."),(0,o.kt)("td",{parentName:"tr",align:null},"Functions that do not require access to the ",(0,o.kt)("a",{parentName:"td",href:"/docs/2.11.x/functions-concepts#context"},"context"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#use-sdk-for-javapythongo"},"Pulsar Functions SDK for Java/Python/Go")),(0,o.kt)("td",{parentName:"tr",align:null},"Pulsar-specific libraries that provide a range of functionality not available in the language-native interfaces,  such as state management or user configuration."),(0,o.kt)("td",{parentName:"tr",align:null},"Functions that require access to the ",(0,o.kt)("a",{parentName:"td",href:"/docs/2.11.x/functions-concepts#context"},"context"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#use-extended-sdk-for-java"},"Extended Pulsar Functions SDK for Java")),(0,o.kt)("td",{parentName:"tr",align:null},"An extension to Pulsar-specific libraries, providing the initialization and close interfaces in Java."),(0,o.kt)("td",{parentName:"tr",align:null},"Functions that require initializing and releasing external resources.")))),(0,o.kt)("h2",{id:"use-language-native-interface-for-javapython"},"Use language-native interface for Java/Python"),(0,o.kt)("p",null,"The language-native interface provides a simple and clean approach to writing Java/Python functions, by adding an exclamation point to all incoming strings and publishing the output string to a topic. It has no external dependencies."),(0,o.kt)("p",null,"The following examples are language-native functions."),(0,o.kt)(r.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,'To use a piece of Java code as a "language-native" function, you need to implement the ',(0,o.kt)("inlineCode",{parentName:"p"},"java.util.Function")," interface. You can include any sort of complex logic inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," method to provide more processing capabilities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.function.Function;\n\npublic class JavaNativeExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String input) {\n        return String.format("%s!", input);\n    }\n}\n')),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/JavaNativeExclamationFunction.java"},"code example"),".")),(0,o.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,'To use a piece of Python code as a "language-native" function, you must have a method named ',(0,o.kt)("inlineCode",{parentName:"p"},"process")," as follows. It appends an exclamation point to any string value it receives."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def process(input):\n    return "{}!".format(input)\n')),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/python-examples/native_exclamation_function.py"},"code example"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Write Pulsar Functions in Python 3. To make sure your functions can run, you need to have Python 3 installed for functions workers and set Python 3 as the default interpreter.")))),(0,o.kt)("h2",{id:"use-sdk-for-javapythongo"},"Use SDK for Java/Python/Go"),(0,o.kt)("p",null,"The implementation of Pulsar Functions SDK specifies a functional interface that includes the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-concepts#context"},"context")," object as a parameter."),(0,o.kt)("p",null,"The following examples use Pulsar Functions SDK for different languages."),(0,o.kt)(r.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,"When developing a function using the Java SDK, you need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.api.Function")," interface. It specifies only one method that you need to implement called ",(0,o.kt)("inlineCode",{parentName:"p"},"process"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String process(String input, Context context) {\n        return String.format("%s!", input);\n    }\n}\n')),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/ExclamationFunction.java"},"code example"),"."),(0,o.kt)("p",null,"The return type of the function can be wrapped in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," generic which gives you more control over the output messages, such as topics, schemas, properties, and so on.\nUse the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context::newOutputRecordBuilder")," method to build this ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.HashMap;\nimport java.util.Map;\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.apache.pulsar.functions.api.Record;\n\npublic class RecordFunction implements Function<String, Record<String>> {\n\n    @Override\n    public Record<String> process(String input, Context context) throws Exception {\n        String output = String.format("%s!", input);\n        Map<String, String> properties = new HashMap<>(context.getCurrentRecord().getProperties());\n        context.getCurrentRecord().getTopicName().ifPresent(topic -> properties.put("input_topic", topic));\n\n        return context.newOutputRecordBuilder(Schema.STRING)\n                .value(output)\n                .properties(properties)\n                .build();\n    }\n}\n')),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/RecordFunction.java"},"code example"),".")),(0,o.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,"To develop a function using the Python SDK, you need to add the pulsar client dependency to your Python installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass ExclamationFunction(Function):\n  def __init__(self):\n    pass\n\n  def process(self, input, context):\n    return input + '!'\n")),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/python-examples/exclamation_function.py"},"code example"),".")),(0,o.kt)(i.Z,{value:"Go",mdxType:"TabItem"},(0,o.kt)("p",null,"To develop a function using the Go SDK, you need to add the pulsar client dependency to your Go installation and provide the name of the function to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pf.Start()")," method inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," method. This registers the function with the Pulsar Functions framework and ensures that the specified function can be invoked when a new message arrives."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleRequest(ctx context.Context, in []byte) error{\n    fmt.Println(string(in) + "!")\n    return nil\n}\n\nfunc main() {\n    pf.Start(HandleRequest)\n}\n')),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/77cf09eafa4f1626a53a1fe2e65dd25f377c1127/pulsar-function-go/examples/inputFunc/inputFunc.go#L20-L36"},"code example"),"."))),(0,o.kt)("h2",{id:"use-extended-sdk-for-java"},"Use extended SDK for Java"),(0,o.kt)("p",null,"This extended Pulsar Functions SDK provides two additional interfaces to initialize and release external resources."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By using the ",(0,o.kt)("inlineCode",{parentName:"li"},"initialize")," interface, you can initialize external resources which only need one-time initialization when the function instance starts."),(0,o.kt)("li",{parentName:"ul"},"By using the ",(0,o.kt)("inlineCode",{parentName:"li"},"close")," interface, you can close the referenced external resources when the function instance closes.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The extended Pulsar Functions SDK for Java is only available in Pulsar 2.10.0 or later versions. Before using it, you need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-worker"},"set up function workers")," in Pulsar 2.10.0 or later versions.")),(0,o.kt)("p",null,"The following example uses the extended interface of Pulsar Functions SDK for Java to initialize RedisClient when the function instance starts and release it when the function instance closes."),(0,o.kt)(r.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport io.lettuce.core.RedisClient;\n\npublic class InitializableFunction implements Function<String, String> {\n    private RedisClient redisClient;\n\n    private void initRedisClient(Map<String, Object> connectInfo) {\n        redisClient = RedisClient.create(connectInfo.get("redisURI"));\n    }\n\n    @Override\n    public void initialize(Context context) {\n        Map<String, Object> connectInfo = context.getUserConfigMap();\n        redisClient = initRedisClient(connectInfo);\n    }\n\n    @Override\n    public String process(String input, Context context) {\n        String value = client.get(key);\n        return String.format("%s-%s", input, value);\n    }\n\n    @Override\n    public void close() {\n        redisClient.close();\n    }\n}\n')))))}f.isMDXComponent=!0}}]);