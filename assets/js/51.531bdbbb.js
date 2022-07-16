(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{378:function(e,t,r){"use strict";r.r(t);var s=r(3),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"redis-教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-教程"}},[e._v("#")]),e._v(" Redis 教程")]),e._v(" "),t("blockquote",[t("p",[e._v("Redis 最典型的应用场景是作为分布式缓存。")]),e._v(" "),t("p",[e._v("学习 Redis，有必要深入理解缓存的原理，以及 Redis 作为一种缓存方案，在系统应用中的定位。")]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://dunwu.github.io/design/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("缓存基本原理"),t("OutboundLink")],1),e._v("，有助于理解缓存的特性、原理，使用缓存常见的问题及解决方案。")])]),e._v(" "),t("h2",{attrs:{id:"📖-内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-内容"}},[e._v("#")]),e._v(" 📖 内容")]),e._v(" "),t("h3",{attrs:{id:"redis-面试总结-💯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-面试总结-💯"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/01.Redis面试总结.html"}},[e._v("Redis 面试总结 💯")])],1),e._v(" "),t("h3",{attrs:{id:"redis-应用指南-⚡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-应用指南-⚡"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/02.Redis应用指南.html"}},[e._v("Redis 应用指南 ⚡")])],1),e._v(" "),t("blockquote",[t("p",[e._v("关键词："),t("code",[e._v("内存淘汰")]),e._v("、"),t("code",[e._v("事件")]),e._v("、"),t("code",[e._v("事务")]),e._v("、"),t("code",[e._v("管道")]),e._v("、"),t("code",[e._v("发布与订阅")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200713105627.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"redis-数据类型和应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据类型和应用"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/03.Redis数据类型和应用.html"}},[e._v("Redis 数据类型和应用")])],1),e._v(" "),t("blockquote",[t("p",[e._v("关键词："),t("code",[e._v("STRING")]),e._v("、"),t("code",[e._v("HASH")]),e._v("、"),t("code",[e._v("LIST")]),e._v("、"),t("code",[e._v("SET")]),e._v("、"),t("code",[e._v("ZSET")]),e._v("、"),t("code",[e._v("BitMap")]),e._v("、"),t("code",[e._v("HyperLogLog")]),e._v("、"),t("code",[e._v("Geo")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200226113813.png",alt:"Redis 数据类型"}})]),e._v(" "),t("h3",{attrs:{id:"redis-持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/04.Redis持久化.html"}},[e._v("Redis 持久化")])],1),e._v(" "),t("blockquote",[t("p",[e._v("关键词："),t("code",[e._v("RDB")]),e._v("、"),t("code",[e._v("AOF")]),e._v("、"),t("code",[e._v("SAVE")]),e._v("、"),t("code",[e._v("BGSAVE")]),e._v("、"),t("code",[e._v("appendfsync")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200224214047.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"redis-复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-复制"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/05.Redis复制.html"}},[e._v("Redis 复制")])],1),e._v(" "),t("blockquote",[t("p",[e._v("关键词："),t("code",[e._v("SLAVEOF")]),e._v("、"),t("code",[e._v("SYNC")]),e._v("、"),t("code",[e._v("PSYNC")]),e._v("、"),t("code",[e._v("REPLCONF ACK")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200712182603.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"redis-哨兵"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-哨兵"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/06.Redis哨兵.html"}},[e._v("Redis 哨兵")])],1),e._v(" "),t("blockquote",[t("p",[e._v("Redis 哨兵（Sentinel）是 Redis 的高可用性（Hight Availability）解决方案。")]),e._v(" "),t("p",[e._v("Redis 哨兵是 Raft 算法 的具体实现。")]),e._v(" "),t("p",[e._v("关键词："),t("code",[e._v("Sentinel")]),e._v("、"),t("code",[e._v("PING")]),e._v("、"),t("code",[e._v("INFO")]),e._v("、"),t("code",[e._v("Raft")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200713072747.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"redis-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-集群"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/07.Redis集群.html"}},[e._v("Redis 集群")])],1),e._v(" "),t("blockquote",[t("p",[e._v("关键词："),t("code",[e._v("CLUSTER MEET")]),e._v("、"),t("code",[e._v("Hash slot")]),e._v("、"),t("code",[e._v("MOVED")]),e._v("、"),t("code",[e._v("ASK")]),e._v("、"),t("code",[e._v("SLAVEOF no one")]),e._v("、"),t("code",[e._v("redis-trib")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200713100613.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"redis-实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-实战"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/08.Redis实战.html"}},[e._v("Redis 实战")])],1),e._v(" "),t("blockquote",[t("p",[e._v("关键词："),t("code",[e._v("缓存")]),e._v("、"),t("code",[e._v("分布式锁")]),e._v("、"),t("code",[e._v("布隆过滤器")])])]),e._v(" "),t("h3",{attrs:{id:"redis-运维-🔨"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-运维-🔨"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/12.数据库/05.KV数据库/01.Redis/20.Redis运维.html"}},[e._v("Redis 运维 🔨")])],1),e._v(" "),t("blockquote",[t("p",[e._v("关键词："),t("code",[e._v("安装")]),e._v("、"),t("code",[e._v("命令")]),e._v("、"),t("code",[e._v("集群")]),e._v("、"),t("code",[e._v("客户端")])])]),e._v(" "),t("h2",{attrs:{id:"📚-资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📚-资料"}},[e._v("#")]),e._v(" 📚 资料")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("官网")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 官网"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis github"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 官方文档中文版"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("书籍")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Redis 实战》"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Redis 设计与实现》"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("教程")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 命令参考"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("文章")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.slideshare.net/dvirsky/introduction-to-redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to Redis"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5db66ed9e51d452a2f15d833",target:"_blank",rel:"noopener noreferrer"}},[e._v("《我们一起进大厂》系列- Redis 基础"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("源码")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/josiahcarlson/redis-in-action",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Redis 实战》配套 Python 源码"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("资源汇总")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/JamzyWang/awesome-redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-redis"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("Redis Client")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.spring.io/spring-data/redis/docs/1.8.13.RELEASE/reference/html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("spring-data-redis 官方文档"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/redisson/redisson/wiki/%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[e._v("redisson 官方文档(中文,略有滞后)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/redisson/redisson/wiki/Table-of-Content",target:"_blank",rel:"noopener noreferrer"}},[e._v("redisson 官方文档(英文)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/82f0d5abb002",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRUG | Redisson PRO vs. Jedis: Which Is Faster? 翻译"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/everlasting_188/article/details/51073505",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis 分布锁 Redisson 性能测试"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"🚪-传送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚪-传送"}},[e._v("#")]),e._v(" 🚪 传送")]),e._v(" "),t("p",[e._v("◾ 💧 "),t("a",{attrs:{href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("钝悟的 IT 知识图谱"),t("OutboundLink")],1),e._v(" ◾ 🎯 "),t("a",{attrs:{href:"https://dunwu.github.io/blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("钝悟的博客"),t("OutboundLink")],1),e._v(" ◾")])])}),[],!1,null,null,null);t.default=i.exports}}]);