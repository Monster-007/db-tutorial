(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{395:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"elasticsearch-运维"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-运维"}},[t._v("#")]),t._v(" Elasticsearch 运维")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch"),s("OutboundLink")],1),t._v(" 是一个分布式、RESTful 风格的搜索和数据分析引擎，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。")])]),t._v(" "),s("h2",{attrs:{id:"elasticsearch-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-安装"}},[t._v("#")]),t._v(" Elasticsearch 安装")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch 官方下载安装说明"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("（1）下载解压")]),t._v(" "),s("p",[t._v("访问 "),s("a",{attrs:{href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方下载地址"),s("OutboundLink")],1),t._v(" ，选择需要的版本，下载解压到本地。")]),t._v(" "),s("p",[t._v("（2）运行")]),t._v(" "),s("p",[t._v("运行 "),s("code",[t._v("bin/elasticsearch")]),t._v(" (Windows 系统上运行 "),s("code",[t._v("bin\\elasticsearch.bat")]),t._v(" )")]),t._v(" "),s("p",[t._v("（3）访问")]),t._v(" "),s("p",[t._v("执行 "),s("code",[t._v("curl http://localhost:9200/")]),t._v(" 测试服务是否启动")]),t._v(" "),s("h2",{attrs:{id:"elasticsearch-集群规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-集群规划"}},[t._v("#")]),t._v(" Elasticsearch 集群规划")]),t._v(" "),s("p",[t._v("ElasticSearch 集群需要根据业务实际情况去合理规划。")]),t._v(" "),s("p",[t._v("需要考虑的问题点：")]),t._v(" "),s("ul",[s("li",[t._v("集群部署几个节点？")]),t._v(" "),s("li",[t._v("有多少个索引？")]),t._v(" "),s("li",[t._v("每个索引有多大数据量？")]),t._v(" "),s("li",[t._v("每个索引有多少个分片？")])]),t._v(" "),s("p",[t._v("一个参考规划：")]),t._v(" "),s("ul",[s("li",[t._v("3 台机器，每台机器是 6 核 64G 的。")]),t._v(" "),s("li",[t._v("我们 es 集群的日增量数据大概是 2000 万条，每天日增量数据大概是 500MB，每月增量数据大概是 6 亿，15G。目前系统已经运行了几个月，现在 es 集群里数据总量大概是 100G 左右。")]),t._v(" "),s("li",[t._v("目前线上有 5 个索引（这个结合你们自己业务来，看看自己有哪些数据可以放 es 的），每个索引的数据量大概是 20G，所以这个数据量之内，我们每个索引分配的是 8 个 shard，比默认的 5 个 shard 多了 3 个 shard。")])]),t._v(" "),s("h2",{attrs:{id:"elasticsearch-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-配置"}},[t._v("#")]),t._v(" Elasticsearch 配置")]),t._v(" "),s("p",[t._v("ES 的默认配置文件为 "),s("code",[t._v("config/elasticsearch.yml")])]),t._v(" "),s("p",[t._v("基本配置说明如下：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" elasticsearch\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置es的集群名称，默认是elasticsearch，es会自动发现在同一网段下的es，如果在同一网段下有多个集群，就可以用这个属性来区分不同的集群。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Franz Kafka'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#节点名，默认随机指定一个name列表中名字，该列表在es的jar包中config文件夹里name.txt文件中，其中有很多作者添加的有趣名字。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.master")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定该节点是否有资格被选举成为node，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定该节点是否存储索引数据，默认为true。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("index.number_of_shards")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置默认索引分片个数，默认为5片。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("index.number_of_replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置默认索引副本个数，默认为1个副本。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /path/to/conf\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置配置文件的存储路径，默认是es根目录下的config文件夹。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path.data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /path/to/data\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置索引数据的存储路径，默认是es根目录下的data文件夹，可以设置多个存储路径，用逗号隔开，例：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#path.data: /path/to/data1,/path/to/data2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path.work")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /path/to/work\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置临时文件的存储路径，默认是es根目录下的work文件夹。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path.logs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /path/to/logs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置日志文件的存储路径，默认是es根目录下的logs文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path.plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /path/to/plugins\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置插件的存放路径，默认是es根目录下的plugins文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bootstrap.mlockall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置为true来锁住内存。因为当jvm开始swapping时es的效率会降低，所以要保证它不swap，可以把#ES_MIN_MEM和ES_MAX_MEM两个环境变量设置成同一个值，并且保证机器有足够的内存分配给es。同时也要#允许elasticsearch的进程可以锁住内存，linux下可以通过`ulimit -l unlimited`命令。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.bind_host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.0.1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置绑定的ip地址，可以是ipv4或ipv6的，默认为0.0.0.0。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.publish_host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.0.1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置其它节点和该节点交互的ip地址，如果不设置它会自动判断，值必须是个真实的ip地址。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.0.1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这个参数是用来同时设置bind_host和publish_host上面两个参数。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transport.tcp.port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置节点间交互的tcp端口，默认是9300。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transport.tcp.compress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置是否压缩tcp传输时的数据，默认为false，不压缩。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置对外服务的http端口，默认为9200。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.max_content_length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100mb\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置内容的最大容量，默认100mb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#是否使用http协议对外提供服务，默认为true，开启。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway.type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" local\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gateway的类型，默认为local即为本地文件系统，可以设置为本地文件系统，分布式文件系统，hadoop的#HDFS，和amazon的s3服务器，其它文件系统的设置方法下次再详细说。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway.recover_after_nodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置集群中N个节点启动时进行数据恢复，默认为1。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway.recover_after_time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5m\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置初始化数据恢复进程的超时时间，默认是5分钟。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway.expected_nodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置这个集群中节点的数量，默认为2，一旦这N个节点启动，就会立即进行数据恢复。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.routing.allocation.node_initial_primaries_recoveries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#初始化数据恢复时，并发恢复线程的个数，默认为4。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.routing.allocation.node_concurrent_recoveries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加删除节点或负载均衡时并发恢复线程的个数，默认为4。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("indices.recovery.max_size_per_sec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置数据恢复时限制的带宽，如入100mb，默认为0，即无限制。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("indices.recovery.concurrent_streams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置这个参数来限制从其它分片恢复数据时最大同时打开并发流的个数，默认为5。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.zen.minimum_master_nodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置这个参数来保证集群中的节点可以知道其它N个有master资格的节点。默认为1，对于大的集群来说，可以设置大一点的值（2-4）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.zen.ping.timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3s\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置集群中自动发现其它节点时ping连接超时时间，默认为3秒，对于比较差的网络环境可以高点的值来防止自动发现时出错。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.zen.ping.multicast.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置是否打开多播发现节点，默认是true。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.zen.ping.unicast.hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host2:port'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host3[portX-portY]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置集群中master节点的初始列表，可以通过这些节点来自动发现新加入集群的节点。")]),t._v("\n")])])]),s("h2",{attrs:{id:"elasticsearch-faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-faq"}},[t._v("#")]),t._v(" Elasticsearch FAQ")]),t._v(" "),s("h3",{attrs:{id:"elasticsearch-不允许以-root-权限来运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-不允许以-root-权限来运行"}},[t._v("#")]),t._v(" elasticsearch 不允许以 root 权限来运行")]),t._v(" "),s("p",[t._v("**问题：**在 Linux 环境中，elasticsearch 不允许以 root 权限来运行。")]),t._v(" "),s("p",[t._v("如果以 root 身份运行 elasticsearch，会提示这样的错误：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("can not run elasticsearch as root\n")])])]),s("p",[t._v("**解决方法：**使用非 root 权限账号运行 elasticsearch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建用户组")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" elk\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新用户，-g elk 设置其用户组为 elk，-p elk 设置其密码为 elk")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" elk -g elk -p elk\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更改 /opt 文件夹及内部文件的所属用户及组为 elk:elk")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R elk:elk /opt "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设你的 elasticsearch 安装在 opt 目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换账号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" elk\n")])])]),s("h3",{attrs:{id:"vm-max-map-count-不低于-262144"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-max-map-count-不低于-262144"}},[t._v("#")]),t._v(" vm.max_map_count 不低于 262144")]),t._v(" "),s("p",[s("strong",[t._v("问题：")]),s("code",[t._v("vm.max_map_count")]),t._v(" 表示虚拟内存大小，它是一个内核参数。elasticsearch 默认要求 "),s("code",[t._v("vm.max_map_count")]),t._v(" 不低于 262144。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]\n")])])]),s("p",[s("strong",[t._v("解决方法：")])]),t._v(" "),s("p",[t._v("你可以执行以下命令，设置 "),s("code",[t._v("vm.max_map_count")]),t._v(" ，但是重启后又会恢复为原值。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sysctl -w vm.max_map_count=262144\n")])])]),s("p",[t._v("持久性的做法是在 "),s("code",[t._v("/etc/sysctl.conf")]),t._v(" 文件中修改 "),s("code",[t._v("vm.max_map_count")]),t._v(" 参数：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "vm.max_map_count=262144" > /etc/sysctl.conf\nsysctl -p\n')])])]),s("blockquote",[s("p",[s("strong",[t._v("注意")])]),t._v(" "),s("p",[t._v("如果运行环境为 docker 容器，可能会限制执行 sysctl 来修改内核参数。")]),t._v(" "),s("p",[t._v("这种情况下，你只能选择直接修改宿主机上的参数了。")])]),t._v(" "),s("h3",{attrs:{id:"nofile-不低于-65536"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nofile-不低于-65536"}},[t._v("#")]),t._v(" nofile 不低于 65536")]),t._v(" "),s("p",[s("strong",[t._v("问题：")]),t._v(" "),s("code",[t._v("nofile")]),t._v(" 表示进程允许打开的最大文件数。elasticsearch 进程要求可以打开的最大文件数不低于 65536。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("max file descriptors [4096] for elasticsearch process is too low, increase to at least [65536]\n")])])]),s("p",[s("strong",[t._v("解决方法：")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("/etc/security/limits.conf")]),t._v(" 文件中修改 "),s("code",[t._v("nofile")]),t._v(" 参数：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "* soft nofile 65536" > /etc/security/limits.conf\necho "* hard nofile 131072" > /etc/security/limits.conf\n')])])]),s("h3",{attrs:{id:"nproc-不低于-2048"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nproc-不低于-2048"}},[t._v("#")]),t._v(" nproc 不低于 2048")]),t._v(" "),s("p",[s("strong",[t._v("问题：")]),t._v(" "),s("code",[t._v("nproc")]),t._v(" 表示最大线程数。elasticsearch 要求最大线程数不低于 2048。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("max number of threads [1024] for user [user] is too low, increase to at least [2048]\n")])])]),s("p",[s("strong",[t._v("解决方法：")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("/etc/security/limits.conf")]),t._v(" 文件中修改 "),s("code",[t._v("nproc")]),t._v(" 参数：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "* soft nproc 2048" > /etc/security/limits.conf\necho "* hard nproc 4096" > /etc/security/limits.conf\n')])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch 官方下载安装说明"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html#rpm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Elasticsearch with RPM"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://siye1982.github.io/2015/09/17/es-optimize/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch 使用积累"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);