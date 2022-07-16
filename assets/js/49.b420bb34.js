(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{376:function(e,t,r){"use strict";r.r(t);var s=r(3),_=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"redis-实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-实战"}},[e._v("#")]),e._v(" Redis 实战")]),e._v(" "),t("h2",{attrs:{id:"一、应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、应用场景"}},[e._v("#")]),e._v(" 一、应用场景")]),e._v(" "),t("p",[e._v("Redis 可以应用于很多场景，这里列举几个经典的应用场景。")]),e._v(" "),t("h3",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[e._v("#")]),e._v(" 缓存")]),e._v(" "),t("p",[e._v("缓存是 Redis 最常见的应用场景。")]),e._v(" "),t("p",[e._v("Redis 有多种数据类型，以及丰富的操作命令，并且有着高性能、高可用的特性，非常适合用于分布式缓存。")]),e._v(" "),t("blockquote",[t("p",[e._v("缓存应用的基本原理，请参考 "),t("a",{attrs:{href:"https://dunwu.github.io/design/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("缓存基本原理")]),t("OutboundLink")],1),e._v(" 第四 ~ 第六节内容。")])]),e._v(" "),t("h3",{attrs:{id:"bitmap-和-bloomfilter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-和-bloomfilter"}},[e._v("#")]),e._v(" BitMap 和 BloomFilter")]),e._v(" "),t("p",[e._v("Redis 除了 5 种基本数据类型外，还支持 BitMap 和 BloomFilter（即布隆过滤器，可以通过 Redis Module 支持）。")]),e._v(" "),t("p",[e._v("BitMap 和 BloomFilter 都可以用于解决缓存穿透问题。要点在于：过滤一些不可能存在的数据。")]),e._v(" "),t("blockquote",[t("p",[e._v("什么是缓存穿透，可以参考："),t("a",{attrs:{href:"https://dunwu.github.io/design/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("缓存基本原理")]),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("小数据量可以用 BitMap，大数据量可以用布隆过滤器。")]),e._v(" "),t("h3",{attrs:{id:"分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),t("p",[e._v("使用 Redis 作为分布式锁，基本要点如下：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("互斥性")]),e._v(" - 使用 "),t("code",[e._v("setnx")]),e._v(" 抢占锁。")]),e._v(" "),t("li",[t("strong",[e._v("避免永远不释放锁")]),e._v(" - 使用 "),t("code",[e._v("expire")]),e._v(" 加一个过期时间，避免一直不释放锁，导致阻塞。")]),e._v(" "),t("li",[t("strong",[e._v("原子性")]),e._v(" - setnx 和 expire 必须合并为一个原子指令，避免 setnx 后，机器崩溃，没来得及设置 expire，从而导致锁永不释放。")])]),e._v(" "),t("blockquote",[t("p",[e._v("更多分布式锁的实现方式及细节，请参考："),t("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/theory/distributed-lock.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("分布式锁基本原理"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"二、技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、技巧"}},[e._v("#")]),e._v(" 二、技巧")]),e._v(" "),t("p",[e._v("根据 Redis 的特性，在实际应用中，存在一些应用小技巧。")]),e._v(" "),t("h3",{attrs:{id:"keys-和-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys-和-scan"}},[e._v("#")]),e._v(" keys 和 scan")]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("keys")]),e._v(" 指令可以扫出指定模式的 key 列表。")]),e._v(" "),t("p",[e._v("如果这个 redis 正在给线上的业务提供服务，那使用 "),t("code",[e._v("keys")]),e._v(" 指令会有什么问题？")]),e._v(" "),t("p",[e._v("首先，Redis 是单线程的。"),t("code",[e._v("keys")]),e._v(" 指令会导致线程阻塞一段时间，线上服务会停顿，直到指令执行完毕，服务才能恢复。")]),e._v(" "),t("p",[e._v("这个时候可以使用 "),t("code",[e._v("scan")]),e._v(" 指令，"),t("code",[e._v("scan")]),e._v(" 指令可以无阻塞的提取出指定模式的 key 列表，但是会有一定的重复概率，在客户端做一次去重就可以了，但是整体所花费的时间会比直接用 "),t("code",[e._v("keys")]),e._v(" 指令长。")]),e._v(" "),t("p",[e._v("不过，增量式迭代命令也不是没有缺点的： 举个例子， 使用 "),t("code",[e._v("SMEMBERS")]),e._v(" 命令可以返回集合键当前包含的所有元素， 但是对于 "),t("code",[e._v("SCAN")]),e._v(" 这类增量式迭代命令来说， 因为在对键进行增量式迭代的过程中， 键可能会被修改， 所以增量式迭代命令只能对被返回的元素提供有限的保证 。")]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("官网")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 官网"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis github"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 官方文档中文版"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("书籍")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Redis 实战》"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Redis 设计与实现》"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("教程")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 命令参考"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("文章")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5db66ed9e51d452a2f15d833",target:"_blank",rel:"noopener noreferrer"}},[e._v("《我们一起进大厂》系列- Redis 基础"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);