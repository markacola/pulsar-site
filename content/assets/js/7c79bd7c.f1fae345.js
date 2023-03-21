"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26169],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return t?o.createElement(f,r(r({ref:n},c),{},{components:t})):o.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const l={id:"functions-develop-log",title:"Produce function logs",sidebar_label:"Produce function logs"},r=void 0,i={unversionedId:"functions-develop-log",id:"version-2.11.x/functions-develop-log",title:"Produce function logs",description:"Produce logs for Java functions",source:"@site/versioned_docs/version-2.11.x/functions-develop-log.md",sourceDirName:".",slug:"/functions-develop-log",permalink:"/docs/2.11.x/functions-develop-log",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-log.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-develop-log",title:"Produce function logs",sidebar_label:"Produce function logs"},sidebar:"docsSidebar",previous:{title:"Pass user-defined configurations",permalink:"/docs/2.11.x/functions-develop-user-defined-configs"},next:{title:"Use metrics to monitor functions",permalink:"/docs/2.11.x/functions-develop-metrics"}},s={},p=[{value:"Produce logs for Java functions",id:"produce-logs-for-java-functions",level:2},{value:"Customize log levels for Java functions",id:"customize-log-levels-for-java-functions",level:3},{value:"Produce logs for Python functions",id:"produce-logs-for-python-functions",level:2},{value:"Produce logs for Go functions",id:"produce-logs-for-go-functions",level:2}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"produce-logs-for-java-functions"},"Produce logs for Java functions"),(0,a.kt)("p",null,"Pulsar Functions that use the Java SDK have access to an ",(0,a.kt)("a",{parentName:"p",href:"https://www.slf4j.org/api/org/apache/log4j/Logger.html"},"SLF4j ",(0,a.kt)("inlineCode",{parentName:"a"},"Logger"))," object. The logger object can be used to produce logs at a specified log level."),(0,a.kt)("p",null,"For example, the following function logs either a ",(0,a.kt)("inlineCode",{parentName:"p"},"WARNING"),"- or ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log based on whether the incoming string contains the word ",(0,a.kt)("inlineCode",{parentName:"p"},"danger"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n')),(0,a.kt)("p",null,"To enable your function to produce logs, you need to specify a log topic when creating or running the function. The following is an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --jar my-functions.jar \\\n  --classname my.package.LoggingFunction \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n")),(0,a.kt)("p",null,"You can access all the logs produced by ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggingFunction")," via the ",(0,a.kt)("inlineCode",{parentName:"p"},"persistent://public/default/logging-function-logs")," topic."),(0,a.kt)("h3",{id:"customize-log-levels-for-java-functions"},"Customize log levels for Java functions"),(0,a.kt)("p",null,"By default, the log level for Java functions is ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),". If you want to customize the log level of your Java functions, for example, change it to ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),", you can update the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/functions_log4j2.xml"},(0,a.kt)("inlineCode",{parentName:"a"},"functions_log4j2.xml"))," file."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"functions_log4j2.xml")," file is under your Pulsar configuration directory, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/pulsar/")," on bare-metal, or ",(0,a.kt)("inlineCode",{parentName:"p"},"/pulsar/conf")," on Kubernetes.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"property"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"     <Property>\n         <name>pulsar.log.level</name>\n         <value>debug</value>\n     </Property>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Apply the log level to places where they are referenced. In the following example, ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," applies to all function logs."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"     <Root>\n         <level>${sys:pulsar.log.level}</level>\n         <AppenderRef>\n             <ref>${sys:pulsar.log.appender}</ref>\n             <level>${sys:pulsar.log.level}</level>\n         </AppenderRef>\n     </Root>\n")),(0,a.kt)("p",{parentName:"li"},"To be more selective, you can apply different log levels to different classes or modules. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"     <Logger>\n         <name>com.example.module</name>\n         <level>info</level>\n         <additivity>false</additivity>\n         <AppenderRef>\n             <ref>${sys:pulsar.log.appender}</ref>\n         </AppenderRef>\n     </Logger>\n")),(0,a.kt)("p",{parentName:"li"},"To apply a more verbose log level to a class in the module, you can reference the following example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"     <Logger>\n         <name>com.example.module.className</name>\n         <level>debug</level>\n         <additivity>false</additivity>\n         <AppenderRef>\n             <ref>Console</ref>\n         </AppenderRef>\n     </Logger>\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"additivity")," indicates whether log messages will be duplicated if multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"<Logger>")," entries overlap. Disabling additivity (",(0,a.kt)("inlineCode",{parentName:"li"},"false"),") prevents duplication of log messages when one or more ",(0,a.kt)("inlineCode",{parentName:"li"},"<Logger>")," entries contain classes or modules that overlap."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppenderRef")," allows you to output the log to a target specified in the definition of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Appender")," section. For example:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"   <Console>\n     <name>Console</name>\n     <target>SYSTEM_OUT</target>\n     <PatternLayout>\n       <Pattern>%d{ISO8601_OFFSET_DATE_TIME_HHMM} [%t] %-5level %logger{36} - %msg%n</Pattern>\n     </PatternLayout>\n   </Console>\n")))),(0,a.kt)("h2",{id:"produce-logs-for-python-functions"},"Produce logs for Python functions"),(0,a.kt)("p",null,"Pulsar Functions that use the Python SDK have access to a logger object. The logger object can be used to produce logs at a specified log level."),(0,a.kt)("p",null,"For example, the following function logs either a ",(0,a.kt)("inlineCode",{parentName:"p"},"WARNING"),"- or ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log based on whether the incoming string contains the word ",(0,a.kt)("inlineCode",{parentName:"p"},"danger"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Function\n\nclass LoggingFunction(Function):\n    def process(self, input, context):\n        logger = context.get_logger()\n        msg_id = context.get_message_id()\n        if \'danger\' in input:\n            logger.warn("A warning was received in message {0}".format(context.get_message_id()))\n        else:\n            logger.info("Message {0} received\\nContent: {1}".format(msg_id, input))\n')),(0,a.kt)("p",null,"To enable your function to produce logs, you need to specify a log topic when creating or running the function. The following is an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --py logging_function.py \\\n  --classname logging_function.LoggingFunction \\\n  --log-topic logging-function-logs \\\n  # Other function configs\n")),(0,a.kt)("p",null,"All logs produced by ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggingFunction")," can be accessed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-function-logs")," topic. Additionally, you can specify the function log levels through ",(0,a.kt)("inlineCode",{parentName:"p"},"context.get_logger().setLevel(level)"),". For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.html#logging.Logger.setLevel"},"Log facility for Python")," ."),(0,a.kt)("h2",{id:"produce-logs-for-go-functions"},"Produce logs for Go functions"),(0,a.kt)("p",null,"When you use ",(0,a.kt)("inlineCode",{parentName:"p"},"logTopic")," related functionalities in Go functions, you can import ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/apache/pulsar/pulsar-function-go/logutil")," rather than using the ",(0,a.kt)("inlineCode",{parentName:"p"},"getLogger()")," context object."),(0,a.kt)("p",null,"The following function shows different log levels based on the function input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n\n    log "github.com/apache/pulsar/pulsar-function-go/logutil"\n)\n\nfunc loggerFunc(ctx context.Context, input []byte) {\n    if len(input) <= 100 {\n        log.Infof("This input has a length of: %d", len(input))\n    } else {\n        log.Warnf("This input is getting too long! It has {%d} characters", len(input))\n    }\n}\n\nfunc main() {\n    pf.Start(loggerFunc)\n}\n')))}g.isMDXComponent=!0}}]);