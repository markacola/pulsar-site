"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91520],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={id:"helm-deploy",title:"Deploy Pulsar cluster using Helm",sidebar_label:"Deployment",original_id:"helm-deploy"},o=void 0,s={unversionedId:"helm-deploy",id:"version-2.7.3/helm-deploy",title:"Deploy Pulsar cluster using Helm",description:"Before running helm install, you need to decide how to run Pulsar.",source:"@site/versioned_docs/version-2.7.3/helm-deploy.md",sourceDirName:".",slug:"/helm-deploy",permalink:"/docs/2.7.3/helm-deploy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/helm-deploy.md",tags:[],version:"2.7.3",frontMatter:{id:"helm-deploy",title:"Deploy Pulsar cluster using Helm",sidebar_label:"Deployment",original_id:"helm-deploy"},sidebar:"version-2.7.3/docsSidebar",previous:{title:"Install",permalink:"/docs/2.7.3/helm-install"},next:{title:"Upgrade",permalink:"/docs/2.7.3/helm-upgrade"}},i={},p=[{value:"Select configuration options",id:"select-configuration-options",level:2},{value:"Kubernetes namespace",id:"kubernetes-namespace",level:3},{value:"Persistence",id:"persistence",level:3},{value:"Affinity",id:"affinity",level:3},{value:"Components",id:"components",level:3},{value:"Docker images",id:"docker-images",level:3},{value:"TLS",id:"tls",level:3},{value:"Provision TLS certificates using cert-manager",id:"provision-tls-certificates-using-cert-manager",level:4},{value:"Enable TLS",id:"enable-tls",level:4},{value:"Authentication",id:"authentication",level:3},{value:"Authorization",id:"authorization",level:3},{value:"CPU and RAM resource requirements",id:"cpu-and-ram-resource-requirements",level:3},{value:"Install dependent charts",id:"install-dependent-charts",level:2},{value:"Install local storage provisioner",id:"install-local-storage-provisioner",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Prepare Helm release",id:"prepare-helm-release",level:2},{value:"Deploy Pulsar cluster using Helm",id:"deploy-pulsar-cluster-using-helm",level:2},{value:"Monitor deployment",id:"monitor-deployment",level:2},{value:"Access Pulsar cluster",id:"access-pulsar-cluster",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before running ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install"),", you need to decide how to run Pulsar.\nOptions can be specified using Helm's ",(0,r.kt)("inlineCode",{parentName:"p"},"--set option.name=value")," command line option."),(0,r.kt)("h2",{id:"select-configuration-options"},"Select configuration options"),(0,r.kt)("p",null,"In each section, collect the options that are combined to use with the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("h3",{id:"kubernetes-namespace"},"Kubernetes namespace"),(0,r.kt)("p",null,"By default, the Pulsar Helm chart is installed to a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nnamespace: pulsar\n\n")),(0,r.kt)("p",null,"To install the Pulsar Helm chart into a different Kubernetes namespace, you can include this option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set namespace=<different-k8s-namespace>\n\n")),(0,r.kt)("p",null,"By default, the Pulsar Helm chart doesn't create the namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nnamespaceCreate: false\n\n")),(0,r.kt)("p",null,"To use the Pulsar Helm chart to create the Kubernetes namespace automatically, you can include this option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set namespaceCreate=true\n\n")),(0,r.kt)("h3",{id:"persistence"},"Persistence"),(0,r.kt)("p",null,"By default, the Pulsar Helm chart creates Volume Claims with the expectation that a dynamic provisioner creates the underlying Persistent Volumes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nvolumes:\n  persistence: true\n  # configure the components to use local persistent volume\n  # the local provisioner should be installed prior to enable local persistent volume\n  local_storage: false\n\n")),(0,r.kt)("p",null,"To use local persistent volumes as the persistent storage for Helm release, you can install the ",(0,r.kt)("a",{parentName:"p",href:"#install-local-storage-provisioner"},"local storage provisioner")," and include the following option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set volumes.local_storage=true\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before installing the production instance of Pulsar, ensure to plan the storage settings to avoid extra storage migration work. Because after initial installation, you must edit Kubernetes objects manually if you want to change storage settings.")),(0,r.kt)("p",null,"The Pulsar Helm chart is designed for production use. To use the Pulsar Helm chart in a development environment (such as Minikube), you can disable persistence by including this option in your ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set volumes.persistence=false\n\n")),(0,r.kt)("h3",{id:"affinity"},"Affinity"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity")," is enabled to ensure pods of the same component can run on different nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\naffinity:\n  anti_affinity: true\n\n")),(0,r.kt)("p",null,"To use the Pulsar Helm chart in a development environment (such as Minikube), you can disable ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity")," by including this option in your ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set affinity.anti_affinity=false\n\n")),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("p",null,"The Pulsar Helm chart is designed for production usage. It deploys a production-ready Pulsar cluster, including Pulsar core components and monitoring components."),(0,r.kt)("p",null,"You can customize the components to be deployed by turning on/off individual components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n## Components\n##\n## Control what components of Apache Pulsar to deploy for the cluster\ncomponents:\n  # zookeeper\n  zookeeper: true\n  # bookkeeper\n  bookkeeper: true\n  # bookkeeper - autorecovery\n  autorecovery: true\n  # broker\n  broker: true\n  # functions\n  functions: true\n  # proxy\n  proxy: true\n  # toolset\n  toolset: true\n  # pulsar manager\n  pulsar_manager: true\n\n## Monitoring Components\n##\n## Control what components of the monitoring stack to deploy for the cluster\nmonitoring:\n  # monitoring - prometheus\n  prometheus: true\n  # monitoring - grafana\n  grafana: true\n\n")),(0,r.kt)("h3",{id:"docker-images"},"Docker images"),(0,r.kt)("p",null,"The Pulsar Helm chart is designed to enable controlled upgrades. So it can configure independent image versions for components. You can customize the images by setting individual component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n## Images\n##\n## Control what images to use for each component\nimages:\n  zookeeper:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  bookie:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  autorecovery:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  broker:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  proxy:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  functions:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n  prometheus:\n    repository: prom/prometheus\n    tag: v1.6.3\n    pullPolicy: IfNotPresent\n  grafana:\n    repository: streamnative/apache-pulsar-grafana-dashboard-k8s\n    tag: 0.0.4\n    pullPolicy: IfNotPresent\n  pulsar_manager:\n    repository: apachepulsar/pulsar-manager\n    tag: v0.1.0\n    pullPolicy: IfNotPresent\n    hasCommand: false\n\n")),(0,r.kt)("h3",{id:"tls"},"TLS"),(0,r.kt)("p",null,"The Pulsar Helm chart can be configured to enable TLS (Transport Layer Security) to protect all the traffic between components. Before enabling TLS, you have to provision TLS certificates for the required components."),(0,r.kt)("h4",{id:"provision-tls-certificates-using-cert-manager"},"Provision TLS certificates using cert-manager"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," to provision the TLS certificates, you have to install the ",(0,r.kt)("a",{parentName:"p",href:"#install-cert-manager"},"cert-manager")," before installing the Pulsar Helm chart. After successfully installing the cert-manager, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"certs.internal_issuer.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Therefore, the Pulsar Helm chart can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"selfsigning")," TLS certificates for the configured components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncerts:\n  internal_issuer:\n    enabled: false\n    component: internal-cert-issuer\n    type: selfsigning\n\n")),(0,r.kt)("p",null,"You can also customize the generated TLS certificates by configuring the fields as the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ntls:\n  # common settings for generating certs\n  common:\n    # 90d\n    duration: 2160h\n    # 15d\n    renewBefore: 360h\n    organization:\n      - pulsar\n    keySize: 4096\n    keyAlgorithm: rsa\n    keyEncoding: pkcs8\n\n")),(0,r.kt)("h4",{id:"enable-tls"},"Enable TLS"),(0,r.kt)("p",null,"After installing the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager"),", you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to enable TLS encryption for the entire cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ntls:\n  enabled: false\n\n")),(0,r.kt)("p",null,"You can also configure whether to enable TLS encryption for individual component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ntls:\n  # settings for generating certs for proxy\n  proxy:\n    enabled: false\n    cert_name: tls-proxy\n  # settings for generating certs for broker\n  broker:\n    enabled: false\n    cert_name: tls-broker\n  # settings for generating certs for bookies\n  bookie:\n    enabled: false\n    cert_name: tls-bookie\n  # settings for generating certs for zookeeper\n  zookeeper:\n    enabled: false\n    cert_name: tls-zookeeper\n  # settings for generating certs for recovery\n  autorecovery:\n    cert_name: tls-recovery\n  # settings for generating certs for toolset\n  toolset:\n    cert_name: tls-toolset\n\n")),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"By default, authentication is disabled. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.authentication.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to enable authentication.\nCurrently, the Pulsar Helm chart only supports JWT authentication provider. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.authentication.provider")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt")," to use the JWT authentication provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\n# Enable or disable broker authentication and authorization.\nauth:\n  authentication:\n    enabled: false\n    provider: "jwt"\n    jwt:\n      # Enable JWT authentication\n      # If the token is generated by a secret key, set the usingSecretKey as true.\n      # If the token is generated by a private key, set the usingSecretKey as false.\n      usingSecretKey: false\n  superUsers:\n    # broker to broker communication\n    broker: "broker-admin"\n    # proxy to broker communication\n    proxy: "proxy-admin"\n    # pulsar-admin client to broker/proxy communication\n    client: "admin"\n\n')),(0,r.kt)("p",null,"To enable authentication, you can run ",(0,r.kt)("a",{parentName:"p",href:"#prepare-the-helm-release"},"prepare helm release")," to generate token secret keys and tokens for three super users specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.superUsers")," field. The generated token keys and super user tokens are uploaded and stored as Kubernetes secrets prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"<pulsar-release-name>-token-"),". You can use the following command to find those secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nkubectl get secrets -n <k8s-namespace>\n\n")),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"By default, authorization is disabled. Authorization can be enabled only when authentication is enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nauth:\n  authorization:\n    enabled: false\n\n")),(0,r.kt)("p",null,"To enable authorization, you can include this option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set auth.authorization.enabled=true\n\n")),(0,r.kt)("h3",{id:"cpu-and-ram-resource-requirements"},"CPU and RAM resource requirements"),(0,r.kt)("p",null,"By default, the resource requests and the number of replicas for the Pulsar components in the Pulsar Helm chart are adequate for a small production deployment. If you deploy a non-production instance, you can reduce the defaults to fit into a smaller cluster."),(0,r.kt)("p",null,"Once you have all of your configuration options collected, you can install dependent charts before installing the Pulsar Helm chart."),(0,r.kt)("h2",{id:"install-dependent-charts"},"Install dependent charts"),(0,r.kt)("h3",{id:"install-local-storage-provisioner"},"Install local storage provisioner"),(0,r.kt)("p",null,"To use local persistent volumes as the persistent storage, you need to install a storage provisioner for ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2019/04/04/kubernetes-1.14-local-persistent-volumes-ga/"},"local persistent volumes"),"."),(0,r.kt)("p",null,"One of the easiest way to get started is to use the local storage provisioner provided along with the Pulsar Helm chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nhelm repo add streamnative https://charts.streamnative.io\nhelm repo update\nhelm install pulsar-storage-provisioner streamnative/local-storage-provisioner\n\n")),(0,r.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,r.kt)("p",null,"The Pulsar Helm chart uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jetstack/cert-manager"},"cert-manager")," to provision and manage TLS certificates automatically. To enable TLS encryption for brokers or proxies, you need to install the cert-manager in advance."),(0,r.kt)("p",null,"For details about how to install the cert-manager, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm"},"official instructions"),"."),(0,r.kt)("p",null,"Alternatively, we provide a bash script ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/cert-manager/install-cert-manager.sh"},"install-cert-manager.sh")," to install a cert-manager release to the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/cert-manager/install-cert-manager.sh\n\n")),(0,r.kt)("h2",{id:"prepare-helm-release"},"Prepare Helm release"),(0,r.kt)("p",null,"Once you have install all the dependent charts and collected all of your configuration options, you can run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepare_helm_release.sh")," to prepare the Helm release."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/pulsar/prepare_helm_release.sh -n <k8s-namespace> -k <helm-release-name>\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare_helm_release")," creates the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Kubernetes namespace for installing the Pulsar release"),(0,r.kt)("li",{parentName:"ul"},"JWT secret keys and tokens for three super users: ",(0,r.kt)("inlineCode",{parentName:"li"},"broker-admin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy-admin"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),". By default, it generates an asymmetric pubic/private key pair. You can choose to generate a symmetric secret key by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"--symmetric"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy-admin")," role is used for proxies to communicate to brokers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"broker-admin")," role is used for inter-broker communications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"admin")," role is used by the admin tools.")))),(0,r.kt)("h2",{id:"deploy-pulsar-cluster-using-helm"},"Deploy Pulsar cluster using Helm"),(0,r.kt)("p",null,"Once you have finished the following three things, you can install a Helm release."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collect all of your configuration options."),(0,r.kt)("li",{parentName:"ul"},"Install dependent charts."),(0,r.kt)("li",{parentName:"ul"},"Prepare the Helm release.")),(0,r.kt)("p",null,"In this example, we name our Helm release ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add apache https://pulsar.apache.org/charts\nhelm repo update\nhelm install pulsar apache/pulsar \\\n    --timeout 10m \\\n    --set initialize=true \\\n    --set [your configuration options]\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For the first deployment, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set initialize=true")," option to initialize bookie and Pulsar cluster metadata.")),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--version <installation version>")," option if you want to install a specific version of Pulsar Helm chart."),(0,r.kt)("h2",{id:"monitor-deployment"},"Monitor deployment"),(0,r.kt)("p",null,"A list of installed resources are output once the Pulsar cluster is deployed. This may take 5-10 minutes."),(0,r.kt)("p",null,"The status of the deployment can be checked by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm status pulsar")," command, which can also be done while the deployment is taking place if you run the command in another terminal."),(0,r.kt)("h2",{id:"access-pulsar-cluster"},"Access Pulsar cluster"),(0,r.kt)("p",null,"The default values will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP")," for the following resources, which you can use to interact with the cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proxy: You can use the IP address to produce and consume messages to the installed Pulsar cluster."),(0,r.kt)("li",{parentName:"ul"},"Pulsar Manager: You can access the Pulsar Manager UI at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<pulsar-manager-ip>:9527"),"."),(0,r.kt)("li",{parentName:"ul"},"Grafana Dashboard: You can access the Grafana dashboard at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<grafana-dashboard-ip>:3000"),".")),(0,r.kt)("p",null,"To find the IP addresses of those components, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nkubectl get service -n <k8s-namespace>\n\n")))}m.isMDXComponent=!0}}]);