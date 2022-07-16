(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{353:function(s,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"postgresql-应用指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-应用指南"}},[s._v("#")]),s._v(" PostgreSQL 应用指南")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostgreSQL"),t("OutboundLink")],1),s._v(" 是一个关系型数据库（RDBM）。")]),s._v(" "),t("p",[s._v("关键词：Database, RDBM, psql")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20180920181010182614.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("blockquote",[t("p",[s._v("本文仅以运行在 Centos 环境下举例。")])]),s._v(" "),t("p",[s._v("进入"),t("a",{attrs:{href:"https://www.postgresql.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方下载页面"),t("OutboundLink")],1),s._v("，根据操作系统选择合适版本。")]),s._v(" "),t("p",[s._v("官方下载页面要求用户选择相应版本，然后动态的给出安装提示，如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20180920181010174348.png",alt:"img"}})]),s._v(" "),t("p",[s._v("前 3 步要求用户选择，后 4 步是根据选择动态提示的安装步骤")]),s._v(" "),t("p",[s._v("（1）选择 PostgreSQL 版本")]),s._v(" "),t("p",[s._v("（2）选择平台")]),s._v(" "),t("p",[s._v("（3）选择架构")]),s._v(" "),t("p",[s._v("（4）安装 PostgreSQL 的 rpm 仓库（为了识别下载源）")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://download.postgresql.org/pub/repos/yum/10/redhat/rhel-7-x86_64/pgdg-centos10-10-2.noarch.rpm\n")])])]),t("p",[s._v("（5）安装客户端")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql10\n")])])]),t("p",[s._v("（6）安装服务端（可选的）")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql10-server\n")])])]),t("p",[s._v("（7）设置开机启动（可选的）")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("/usr/pgsql-10/bin/postgresql-10-setup initdb\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" postgresql-10\nsystemctl start postgresql-10\n")])])]),t("h2",{attrs:{id:"添加新用户和新数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加新用户和新数据库"}},[s._v("#")]),s._v(" 添加新用户和新数据库")]),s._v(" "),t("p",[s._v("初次安装后，默认生成一个名为 postgres 的数据库和一个名为 postgres 的数据库用户。这里需要注意的是，同时还生成了一个名为 postgres 的 Linux 系统用户。")]),s._v(" "),t("p",[s._v("首先，新建一个 Linux 新用户，可以取你想要的名字，这里为 dbuser。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo adduser dbuser\n")])])]),t("p",[s._v("使用 psql 命令登录 PostgreSQL 控制台：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo -u postgres psql\n")])])]),t("p",[s._v('这时相当于系统用户 postgres 以同名数据库用户的身份，登录数据库，这是不用输入密码的。如果一切正常，系统提示符会变为"postgres=#"，表示这时已经进入了数据库控制台。以下的命令都在控制台内完成。')]),s._v(" "),t("p",[s._v("（1）使用 "),t("code",[s._v("\\password")]),s._v(" 命令，为 postgres 用户设置一个密码。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("postgres=# \\password postgres\n")])])]),t("p",[s._v("（2）创建数据库用户 dbuser（刚才创建的是 Linux 系统用户），并设置密码。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" dbuser "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" PASSWORD "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("（3）创建用户数据库，这里为 exampledb，并指定所有者为 dbuser。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" exampledb OWNER dbuser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("（4）将 exampledb 数据库的所有权限都赋予 dbuser，否则 dbuser 只能登录控制台，没有任何数据库操作权限。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" exampledb "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" dbuser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("（5）使用\\q 命令退出控制台（也可以直接按 ctrl+D）。")]),s._v(" "),t("h2",{attrs:{id:"登录数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录数据库"}},[s._v("#")]),s._v(" 登录数据库")]),s._v(" "),t("p",[s._v("添加新用户和新数据库以后，就要以新用户的名义登录数据库，这时使用的是 psql 命令。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("psql -U dbuser -d exampledb -h 127.0.0.1 -p 5432\n")])])]),t("p",[s._v("上面命令的参数含义如下：-U 指定用户，-d 指定数据库，-h 指定服务器，-p 指定端口。")]),s._v(" "),t("p",[s._v("输入上面命令以后，系统会提示输入 dbuser 用户的密码。输入正确，就可以登录控制台了。")]),s._v(" "),t("p",[s._v("psql 命令存在简写形式。如果当前 Linux 系统用户，同时也是 PostgreSQL 用户，则可以省略用户名（-U 参数的部分）。举例来说，我的 Linux 系统用户名为 ruanyf，且 PostgreSQL 数据库存在同名用户，则我以 ruanyf 身份登录 Linux 系统后，可以直接使用下面的命令登录数据库，且不需要密码。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("psql exampledb\n")])])]),t("p",[s._v("此时，如果 PostgreSQL 内部还存在与当前系统用户同名的数据库，则连数据库名都可以省略。比如，假定存在一个叫做 ruanyf 的数据库，则直接键入 psql 就可以登录该数据库。")]),s._v(" "),t("p",[s._v("psql")]),s._v(" "),t("p",[s._v("另外，如果要恢复外部数据，可以使用下面的命令。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("psql exampledb < exampledb.sql\n")])])]),t("h2",{attrs:{id:"控制台命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制台命令"}},[s._v("#")]),s._v(" 控制台命令")]),s._v(" "),t("p",[s._v("除了前面已经用到的 \\password 命令（设置密码）和 \\q 命令（退出）以外，控制台还提供一系列其他命令。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\\password           设置密码\n\\q                  退出\n\\h                  查看SQL命令的解释，比如\\h select\n\\?                  查看psql命令列表\n\\l                  列出所有数据库\n\\c [database_name]  连接其他数据库\n\\d                  列出当前数据库的所有表格\n\\d [table_name]     列出某一张表格的结构\n\\x                  对数据做展开操作\n\\du                 列出所有用户\n")])])]),t("h2",{attrs:{id:"数据库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作"}},[s._v("#")]),s._v(" 数据库操作")]),s._v(" "),t("p",[s._v("基本的数据库操作，就是使用一般的 SQL 语言。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" user_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" signup_date "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" user_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" signup_date"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2013-12-22'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" user_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" user_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" user_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加栏位")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" user_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" email "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新结构")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" user_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" signup_date "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更名栏位")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" user_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" signup_date "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" signup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除栏位")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" user_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表格更名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" user_tbl "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" backup_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除表格")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" backup_tbl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"备份和恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份和恢复"}},[s._v("#")]),s._v(" 备份和恢复")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pg_dump --format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t -d db_name -U user_name -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -O -W  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dump.sql\npsql -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -U user_name db_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" dump.sql\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("https://www.postgresql.org/download/")]),s._v(" "),t("li",[s._v("http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html")])]),s._v(" "),t("h2",{attrs:{id:"传送门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传送门"}},[s._v("#")]),s._v(" 🚪 传送门")]),s._v(" "),t("p",[s._v("| "),t("a",{attrs:{href:"https://dunwu.github.io/blog/",target:"_blank",rel:"noopener noreferrer"}},[s._v("钝悟的博客"),t("OutboundLink")],1),s._v(" | "),t("a",{attrs:{href:"https://github.com/dunwu/db-tutorial",target:"_blank",rel:"noopener noreferrer"}},[s._v("db-tutorial 首页"),t("OutboundLink")],1),s._v(" |")])])}),[],!1,null,null,null);t.default=r.exports}}]);