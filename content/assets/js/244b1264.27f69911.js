"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9903],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const l={id:"sql-getting-started",title:"Pulsar SQL Getting Started",sidebar_label:"Getting Started",original_id:"sql-getting-started"},o=void 0,s={unversionedId:"sql-getting-started",id:"version-2.3.1/sql-getting-started",title:"Pulsar SQL Getting Started",description:"It is super easy to get started on querying data in Pulsar.",source:"@site/versioned_docs/version-2.3.1/sql-getting-started.md",sourceDirName:".",slug:"/sql-getting-started",permalink:"/docs/2.3.1/sql-getting-started",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/sql-getting-started.md",tags:[],version:"2.3.1",frontMatter:{id:"sql-getting-started",title:"Pulsar SQL Getting Started",sidebar_label:"Getting Started",original_id:"sql-getting-started"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.3.1/sql-overview"},next:{title:"Configuration and deployment",permalink:"/docs/2.3.1/sql-deployment-configurations"}},i={},u=[{value:"Requirements",id:"requirements",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is super easy to get started on querying data in Pulsar."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pulsar distribution"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you haven't install Pulsar, please reference ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.3.1/io-quickstart#installing-pulsar"},"Installing Pulsar")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pulsar built-in connectors"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you haven't installed the built-in connectors, please reference ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.3.1/io-quickstart#installing-builtin-connectors"},"Installing Builtin Connectors"))))),(0,a.kt)("p",null,"First, start a Pulsar standalone cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar standalone\n\n")),(0,a.kt)("p",null,"Next, start a Pulsar SQL worker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar sql-worker run\n\n")),(0,a.kt)("p",null,"After both the Pulsar standalone cluster and the SQL worker are done initializing, run the SQL CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar sql\n\n")),(0,a.kt)("p",null,"You can now start typing some SQL commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> show catalogs;\n Catalog\n---------\n pulsar\n system\n(2 rows)\n\nQuery 20180829_211752_00004_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n\npresto> show schemas in pulsar;\n        Schema\n-----------------------\n information_schema\n public/default\n public/functions\n sample/standalone/ns1\n(4 rows)\n\nQuery 20180829_211818_00005_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [4 rows, 89B] [21 rows/s, 471B/s]\n\n\npresto> show tables in pulsar."public/default";\n Table\n-------\n(0 rows)\n\nQuery 20180829_211839_00006_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n')),(0,a.kt)("p",null,"Currently, there is no data in Pulsar that we can query.  Lets start the built-in connector ",(0,a.kt)("em",{parentName:"p"},"DataGeneratorSource")," to ingest some mock data for us to query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin source create --name generator --destinationTopicName generator_test --source-type data-generator\n\n")),(0,a.kt)("p",null,'Afterwards, the will be a topic with can query in the namespace "public/default":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> show tables in pulsar."public/default";\n     Table\n----------------\n generator_test\n(1 row)\n\nQuery 20180829_213202_00000_csyeu, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:02 [1 rows, 38B] [0 rows/s, 17B/s]\n\n')),(0,a.kt)("p",null,'We can now query the data within the topic "generator_test":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> select * from pulsar."public/default".generator_test;\n\n  firstname  | middlename  |  lastname   |              email               |   username   | password | telephonenumber | age |                 companyemail                  | nationalidentitycardnumber |\n-------------+-------------+-------------+----------------------------------+--------------+----------+-----------------+-----+-----------------------------------------------+----------------------------+\n Genesis     | Katherine   | Wiley       | genesis.wiley@gmail.com          | genesisw     | y9D2dtU3 | 959-197-1860    |  71 | genesis.wiley@interdemconsulting.eu           | 880-58-9247                |\n Brayden     |             | Stanton     | brayden.stanton@yahoo.com        | braydens     | ZnjmhXik | 220-027-867     |  81 | brayden.stanton@supermemo.eu                  | 604-60-7069                |\n Benjamin    | Julian      | Velasquez   | benjamin.velasquez@yahoo.com     | benjaminv    | 8Bc7m3eb | 298-377-0062    |  21 | benjamin.velasquez@hostesltd.biz              | 213-32-5882                |\n Michael     | Thomas      | Donovan     | donovan@mail.com                 | michaeld     | OqBm9MLs | 078-134-4685    |  55 | michael.donovan@memortech.eu                  | 443-30-3442                |\n Brooklyn    | Avery       | Roach       | brooklynroach@yahoo.com          | broach       | IxtBLafO | 387-786-2998    |  68 | brooklyn.roach@warst.biz                      | 085-88-3973                |\n Skylar      |             | Bradshaw    | skylarbradshaw@yahoo.com         | skylarb      | p6eC6cKy | 210-872-608     |  96 | skylar.bradshaw@flyhigh.eu                    | 453-46-0334                |\n.\n.\n.\n\n')),(0,a.kt)("p",null,"Now, you have some mock data to query and play around with!"),(0,a.kt)("p",null,"If you want to try to ingest some of your own data to play around with, you can write a simple producer to write custom defined data to Pulsar."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class TestProducer {\n\n    public static class Foo {\n        private int field1 = 1;\n        private String field2;\n        private long field3;\n\n        public Foo() {\n        }\n\n        public int getField1() {\n            return field1;\n        }\n\n        public void setField1(int field1) {\n            this.field1 = field1;\n        }\n\n        public String getField2() {\n            return field2;\n        }\n\n        public void setField2(String field2) {\n            this.field2 = field2;\n        }\n\n        public long getField3() {\n            return field3;\n        }\n\n        public void setField3(long field3) {\n            this.field3 = field3;\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n        Producer<Foo> producer = pulsarClient.newProducer(AvroSchema.of(Foo.class)).topic("test_topic").create();\n\n        for (int i = 0; i < 1000; i++) {\n            Foo foo = new Foo();\n            foo.setField1(i);\n            foo.setField2("foo" + i);\n            foo.setField3(System.currentTimeMillis());\n            producer.newMessage().value(foo).send();\n        }\n        producer.close();\n        pulsarClient.close();\n    }\n}\n\n')),(0,a.kt)("p",null,"Afterwards, you should be able query the data you just wrote."))}d.isMDXComponent=!0}}]);