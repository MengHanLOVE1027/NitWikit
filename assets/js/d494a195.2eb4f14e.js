"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6664],{63676:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>_,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(86070),d=i(35396);const r={title:"\u914d\u7f6e",slug:"/database/configure",sidebar_position:3},s=void 0,o={id:"advance/database/configure",title:"\u914d\u7f6e",description:"\u6570\u636e\u5e93\u914d\u7f6e",source:"@site/docs/advance/database/configure.md",sourceDirName:"advance/database",slug:"/database/configure",permalink:"/NitWikit/database/configure",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/database/configure.md",tags:[],version:"current",lastUpdatedBy:"MrVirgil",lastUpdatedAt:1727276143e3,sidebarPosition:3,frontMatter:{title:"\u914d\u7f6e",slug:"/database/configure",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528",permalink:"/NitWikit/database/manage"},next:{title:"\u5907\u4efd",permalink:"/NitWikit/database/backup"}},a={},c=[{value:"\u6570\u636e\u5e93\u914d\u7f6e",id:"\u6570\u636e\u5e93\u914d\u7f6e",level:2},{value:"MySQL",id:"mysql",level:3},{value:"MariaDB",id:"mariadb",level:3}];function l(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u6570\u636e\u5e93\u914d\u7f6e",children:"\u6570\u636e\u5e93\u914d\u7f6e"}),"\n",(0,t.jsx)(e.h3,{id:"mysql",children:"MySQL"}),"\n",(0,t.jsxs)(e.p,{children:["MySQL \u7684\u914d\u7f6e\u6587\u4ef6\u5728 Windows \u4e2d,\u662f ",(0,t.jsx)(e.code,{children:"my.ini"})," ,\u9ed8\u8ba4\u5728 ",(0,t.jsx)(e.code,{children:"C:\\Program Files\\MySQL\\MySQL Server X.X"})," \u6587\u4ef6\u5939\u4e2d"]}),"\n",(0,t.jsxs)(e.p,{children:["\u800c Linux \u4e2d,\u662f ",(0,t.jsx)(e.code,{children:"my.cnf"})," ,\u9ed8\u8ba4\u8def\u5f84\u4e3a ",(0,t.jsx)(e.code,{children:"/etc/my.cnf"})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",children:"[client]  \n\nport=3306\n \n[mysql]  \n\ndefault-character-set=utf8  \n \n[mysqld]\n\nport = 3306\n\n#\u8bbe\u7f6e MySQL \u7684\u7aef\u53e3\n\nsocket = /tmp/mysql.sock\n\n#\u8bbe\u7f6emysql\u7684\u5b89\u88c5\u76ee\u5f55,\u522b\u52a8\n\nbasedir=F:\\\\Hzq Soft\\\\MySql Server 51GA\n\n#\u8bbe\u7f6emysql\u6570\u636e\u5e93\u7684\u6570\u636e\u7684\u5b58\u653e\u76ee\u5f55,\u5982\u679c\u4f60\u89c9\u5f97\u539f\u6765\u5b58\u653e\u6570\u636e\u5e93\u7684\u5730\u65b9\u4e0d\u591f\u7528\u4e86\u53ef\u4ee5\u8fc1\u5230\u5176\u4ed6\u5730\u65b9\u53bb\n\n#\u4f46\u662f\u8981\u6ce8\u610f\u628a\u539f\u6765\u7684\u5b58\u653e\u76ee\u5f55\u91cc\u9762\u7684\u4e1c\u897f\u8fc1\u79fb\u5230\u90a3\u4e2a\u5730\u65b9\u53bb\n\ndatadir=F:\\\\Hzq Soft\\\\MySql Server 51GA\\\\data\n\n#innodb_log_arch_dir \u9ed8\u8ba4datadir\n\n#innodb_log_group_home_dir  \u9ed8\u8ba4datadir\n\n#\u8bbe\u7f6emysql\u670d\u52a1\u5668\u7684\u5b57\u7b26\u96c6,\u9ed8\u8ba4\u7f16\u7801\n\ndefault-character-set=utf8\n \n#\u8fde\u63a5\u6570\u7684\u64cd\u4f5c\u7cfb\u7edf\u76d1\u542c\u961f\u5217\u6570\u91cf,\u5982\u679c\u7ecf\u5e38\u51fa\u73b0\u201c\u62d2\u7edd\u8fde\u63a5\u201d\u9519\u8bef\u53ef\u9002\u5f53\u589e\u52a0\u6b64\u503c\n\nback_log = 50\n\n#\u4e0d\u4f7f\u7528\u63a5\u542cTCP / IP\u7aef\u53e3\u65b9\u6cd5,mysqld\u901a\u8fc7\u547d\u540d\u7ba1\u9053\u8fde\u63a5\n\n#skip-networking\n\n#\u6700\u5927\u8fde\u63a5\u6570\u91cf\n\n#\u6709\u65f6\u5019\u63d2\u4ef6\u4f1a\u56e0\u4e3a\u8fd9\u4e2a\u503c\u592a\u5c0f\u800c\u62a5\u9519,\u5efa\u8bae\u8bbe\u7f6e\u5927\u4e00\u70b9,\u6bd4\u5982 65536 ,\u751a\u81f3\u6709\u65f6\u5019\u8fd9\u90fd\u4e0d\u591f\n\nmax_connections = 90\n\n#\u6253\u5f00\u8868\u7684\u7ebf\u7a0b\u6570\u91cf\u9650\u5b9a,\u6700\u59274096,\u9664\u975e\u7528mysqld_safe\u6253\u5f00\u9650\u5236\n\ntable_open_cache = 2048\n\n#MySql \u670d\u52a1\u63a5\u6536\u9488\u5bf9\u6bcf\u4e2a\u8fdb\u7a0b\u6700\u5927\u67e5\u8be2\u5305\u5927\u5c0f\n\nmax_allowed_packet = 16M\n\n#\u4f5c\u7528\u4e8eSQL\u67e5\u8be2\u5355\u7b14\u5904\u7406\u4f7f\u7528\u7684\u5185\u5b58\u7f13\u5b58,\u5982\u679c\u4e00\u7b14\u64cd\u4f5c\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u8d85\u8fc7\u4e86\u9650\u5b9a\u5927\u5c0f,\u5c06\u4f1a\u5728\u78c1\u76d8\u4e0a\u5f00\u8f9f\u7a7a\u95f4\u5904\u7406,\u4e00\u822c\u8bbe\u4e3a 1-2M\u5373\u53ef,\u9ed8\u8ba41M\n\nbinlog_cache_size = 2M\n\n#\u5355\u4e2a\u5185\u5b58\u8868\u7684\u6700\u5927\u503c\u9650\u5b9a\n\nmax_heap_table_size = 64M\n\n#\u4e3a\u6bcf\u4e2a\u7ebf\u7a0b\u5206\u914d\u7684\u6392\u5e8f\u7f13\u51b2\u5927\u5c0f\n\nsort_buffer_size = 8M\n\n#join \u8fde\u8868\u64cd\u4f5c\u7684\u7f13\u51b2\u5927\u5c0f,\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u6765\u8bbe\u7f6e,\u9ed8\u8ba48M\n\njoin_buffer_size = 32M\n\n#\u64cd\u4f5c\u591a\u5c11\u4e2a\u79bb\u5f00\u8fde\u63a5\u7684\u7ebf\u7a0b\u7684\u7f13\u5b58\n\nthread_cache_size = 8\n\n#\u5e76\u53d1\u7ebf\u7a0b\u6570\u91cf,\u9ed8\u8ba4\u4e3a8,\u53ef\u9002\u5f53\u589e\u52a0\u52302\u500d\u4ee5\u5185\u3002\u5982\u679c\u6709\u591a\u4e2aCPU\u53ef\u4ee5\u4e58 \u4e0aCPU\u7684\u6570\u91cf\u3002\u53cc\u6838CPU\u53ef\u4ee5\u4e58 \u4e0a\u5f53\u524d\u6700\u6838\u6570\u518d\u4e58 \u4e0a70%-85%\n\nthread_concurrency = 16\n\n#\u4e13\u7528\u4e8e\u5177\u4f53SQL\u7684\u7f13\u5b58,\u5982\u679c\u63d0\u4ea4\u7684\u67e5\u8be2\u4e0e\u51e0\u6b21\u4e2d\u7684\u67d0\u67e5\u8be2\u76f8\u540c,\u5e76\u4e14\u5728query\u7f13\u5b58\u4e2d\u5b58\u5728,\u5219\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u4e2d\u7684\u7ed3\u679c\u3002\n\nquery_cache_size = 64M\n\n#\u5bf9\u5e94\u4e0a\u4e00\u6761\u8bbe\u7f6e,\u5f53\u67e5\u8be2\u7684\u7ed3\u679c\u8d85\u8fc7\u4e0b\u9762\u8bbe\u7f6e\u7684\u5927\u5c0f\u65f6,\u5c06\u4e0d\u4f1a\u8da3\u5165\u5230\u4e0a\u9762\u8bbe\u7f6e\u7684\u7f13\u5b58\u533a\u4e2d,\u907f\u514d\u4e86\u4e00\u4e2a\u5927\u7684\u7ed3\u679c\u5360\u636e\u5927\u91cf\u7f13\u5b58\u3002\n\nquery_cache_limit = 2M\n\n#\u8bbe\u7f6e\u52a0\u5168\u6587\u68c0\u7d22\u4e2d\u7684\u6700\u5c0f\u5355\u8bcd\u957f\u5ea6\u3002\n\n#ft_min_word_len = 4\n\n#CREATE TABLE \u8bed\u53e5\u7684\u9ed8\u8ba4\u8868\u7c7b\u578b,\u5982\u679c\u4e0d\u81ea\u5df1\u6307\u5b9a\u7c7b\u578b,\u5219\u4f7f\u7528\u4e0b\u884c\u7684\u7c7b\u578b\n\ndefault-storage-engine = InnoDB\n\n#\u7ebf\u7a0b\u5806\u6808\u5927\u5c0f,mysql\u8bf4\u5b83\u81ea\u5df1\u7528\u7684\u5806\u6808\u5927\u5c0f\u4e0d\u8d85\u8fc764K\u3002\u8fd9\u4e2a\u503c\u53ef\u9002\u5f53\u8bbe\u9ad8\u4e00\u70b9(\u5728RCA\u7684\u9879\u76ee\u4e2d\u90fd\u662f\u5171\u7528\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\u7684),\u9ed8\u8ba4192K\n\nthread_stack = 800K\n\n#\u8bbe\u7f6e\u4e8b\u52a1\u5904\u7406\u7684\u7ea7\u522b,\u9ed8\u8ba4 REPEATABLE-READ,\u4e00\u822c\u7528\u5b83\u5c31\u5373\u53ef,\u4ee5\u4e0b\u4e8c\u884c\u6309\u987a\u5e8f\u5bf9\u5e94,\n\n#\u53ef\u8bfb\u5199\u672a\u63d0\u4ea4\u7684\u6570\u636e,\u521b\u5efa\u672a\u63d0\u4ea4\u7684\u6570\u636e\u526f\u672c\u8bfb\u5199,\u672a\u63d0\u4ea4\u4e4b\u524d\u53ef\u8bfb\u4e0d\u53ef\u5199,\u53ea\u5141\u8bb8\u4e32\u884c\u5e8f\u5217\u62db\u884c\u4e8b\u52a1\u3002\n\n# READ-UNCOMMITTED, READ-COMMITTED, REPEATABLE-READ, SERIALIZABLE\n\ntransaction_isolation = REPEATABLE-READ\n\n#\u5355\u4e00\u5185\u5b58\u4e34\u65f6\u8868\u5728\u5185\u5b58\u4e2d\u7684\u5927\u5c0f,\u8d85\u8fc7\u6b64\u503c\u81ea\u52a8\u8f6c\u6362\u5230\u78c1\u76d8\u64cd\u4f5c\n\ntmp_table_size = 64M\n\n#\u542f\u52a8\u4e8c\u8fdb\u5236\u65e5\u5fd7\u529f\u80fd,\u53ef\u901a\u8fc7\u5b83\u5b9e\u73b0\u65f6\u95f4\u70b9\u6062\u590d\u6700\u65b0\u7684\u5907\u4efd\n\n#log-bin=mysql-bin\n\n#\u4e8c\u8fdb\u5236\u65e5\u5fd7\u683c\u5f0f,\u5bf9\u5c31\u4e0a\u4e00\u6761,-\u5efa\u8bae\u6df7\u5408\u683c\u5f0f\n\n#binlog_format=mixed\n\n#\u5bf9\u5e94\u4e0a\u4e00\u6761,\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u8d85\u8fc7\u4e86\u4e0b\u6761\u8bbe\u5b9a\u7684\u65f6\u95f4\u5219\u6267\u884c\u4e0a\u4e00\u6761\u3002\n\nlong_query_time = 2\n\n#\u81ea\u5b9a\u4e49\u4e3b\u673aID\u8bc6\u522b\u7b26,\u7528\u4e8e\u4e3b\u4ece\u6216\u591a\u670d\u52a1\u5668\u4e4b\u95f4\u8bc6\u522b,\u4e3a \u4e00\u4e2a int \u7c7b\u578b\n\nserver-id = 1\n\n#\u4e00\u822c\u7528\u6765\u7f13\u5b58MyISAM\u8868\u7684\u4e3b\u952e,\u4e5f\u7528\u4e8e\u4e34\u65f6\u7684\u78c1\u76d8\u8868\u7f13\u5b58\u4e3b\u952e,\u4e0a\u9762\u591a\u6b21\u51fa\u73b0\u4e34\u65f6\u78c1\u76d8\u8868,\u6240\u4ee5\u5c31\u7b97\u4e0d\u7528MyISAM\u4e5f\u6700\u597d\u4e3a\u5176\u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u5c0f\u7684\u503c,\u9ed8\u8ba432M\n\nkey_buffer_size = 56M\n\n#\u5168\u8868\u626b\u63cfMyISAM\u8868\u65f6\u7684\u7f13\u5b58,\u6bcf\u4e2a\u7ebf\u7a0b\u62e5\u6709\u4e0b\u884c\u7684\u5927\u5c0f\u3002\n\nread_buffer_size = 2M\n\n#\u6392\u5e8f\u64cd\u4f5c\u65f6\u4e0e\u78c1\u76d8\u4e4b\u95f4\u7684\u7f13\u5b58,\u5206\u5230\u6bcf\u4e2a\u7ebf\u7a0b,\u9ed8\u8ba416M\n\nread_rnd_buffer_size = 16M\n\n#MyISAM\u4f7f\u7528\u7279\u6b8a\u6811\u5f62\u8fdb\u884c\u6279\u91cf\u63d2\u5165\u65f6\u7684\u7f13\u5b58,\u5982insert ... values(..)(..)(..)\n\nbulk_insert_buffer_size = 64M\n\n#MyISAM\u7d22\u5f15\u6587\u4ef6\u7684\u6700\u5927\u9650\u5b9a,\n\nmyisam_max_sort_file_size = 12G\n\n#\u5982\u679c\u4e00\u4e2amyisam\u8868\u6709\u4e00\u4e2a\u4ee5\u4e0a\u7684\u7d22\u5f15, MyISAM\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u4ee5\u4e0a\u7ebf\u7a0b\u6765\u6392\u5e8f\u5e76\u884c\u5b83\u4eec\u3002\u8f83\u8017\u786c\u4ef6\u8d44\u6e90,\u5982\u679c\u4f60\u7684\u73af\u5883\u4e0d\u9519,\u53ef\u4ee5\u589e\u52a0\u6b64\u503c\u3002\n\nmyisam_repair_threads = 2\n\n#\u81ea\u52a8\u68c0\u67e5\u548c\u4fee\u590d\u65e0\u6cd5\u6b63\u786e\u5173\u95edMyISAM\u8868\u3002\n\nmyisam_recover\n\n# *** INNODB Specific options ***\n\n#\u5f00\u542f\u4e0b\u6761\u5c06\u4f1a\u7981\u7528 INNODB\n\n#skip-innodb\n\n#\u4e00\u822c\u4e0d\u7528\u8bbe\u7f6e\u6216\u8005\u8bf4\u8bbe\u4e86\u4e5f\u6ca1\u591a\u5927\u7528,InnoDB\u4f1a\u81ea\u5df1\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u4ea4\u4e92\u7ba1\u7406\u5176\u9644\u52a0\u5185\u5b58\u6c60\u6240\u4f7f\u7528InnoDB\u7684\u5b58\u50a8\u6570\u636e\u7684\u5927\u5c0f\n\ninnodb_additional_mem_pool_size = 16M\n\n#innodb\u6574\u4f53\u7f13\u51b2\u6c60\u5927\u5c0f,\u4e0d\u5b9c\u8fc7\u5927,\u8bbe\u4e3a\u672c\u5730\u5185\u5b58\u7684 50%-75% \u6bd4\u8f83\u5408\u9002,\u5728\u672c\u673a\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u8bbe\u5f97\u8f83\u5c0f\u4e00\u70b9\u5982 64M,256M\n\ninnodb_buffer_pool_size = 256M\n\n#InnoDB\u7684\u6570\u636e\u5b58\u50a8\u5728\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u636e\u6587\u4ef6\u7ec4\u6210\u7684\u8868\u7a7a\u95f4\n\ninnodb_data_file_path = ibdata1:10M:autoextend\n\n#\u7528\u4e8e\u5f02\u6b65IO\u64cd\u4f5c\u7684\u7ebf\u7a0b\u6570\u91cf,\u9ed8\u8ba4\u4e3a 4 ,\u53ef\u9002\u5f53\u63d0\u9ad8\n\ninnodb_file_io_threads = 8\n\n#\u7ebf\u7a0b\u6570\u5185\u5141\u8bb8\u7684InnoDB\u5185\u6838,\u4e0d\u5b9c\u592a\u9ad8\n\ninnodb_thread_concurrency = 14\n\n#InnoDB\u7684\u4e8b\u52a1\u65e5\u5fd7\u5feb\u5b58\u884c\u4e3a,\u9ed8\u8ba4\u4e3a 1,\u4e3a0\u53ef\u51cf\u8f7b\u78c1\u76d8I/0\u64cd\u4f5c,\u8fd8\u6709\u4ee5\u4e3a2\n\ninnodb_flush_log_at_trx_commit = 1\n\n#InnoDB\u7684\u7528\u4e8e\u7684\u7f13\u51b2\u65e5\u5fd7\u6570\u636e\u7684\u5927\u5c0f\n\ninnodb_log_buffer_size = 16M\n\n#\u65e5\u5fd7\u6587\u4ef6,\u53ef\u8bbe\u7f6e\u4e3a25%-90%\u7684\u603b\u4f53\u7f13\u5b58\u5927\u5c0f,\u9ed8\u8ba4 256M. \u4fee\u6539\u6b64\u9879\u8981\u5148\u5220\u9664datadir\\ib_logfileXXX\n\ninnodb_log_file_size = 256M\n\n#\u65e5\u5fd7\u7ec4\u6570\u91cf,\u9ed8\u8ba4\u4e3a3\n\ninnodb_log_files_in_group = 3\n\n#InnoDB\u7684\u65e5\u5fd7\u6587\u4ef6\u4f4d\u7f6e\u3002\u9ed8\u8ba4\u662fMySQL\u7684datadir\n\n#innodb_log_group_home_dir\n\n#InnoDB\u6700\u5927\u5141\u8bb8\u7684\u810f\u9875\u7f13\u51b2\u6c60\u7684\u767e\u5206\u6bd4,\u9ed8\u8ba490\n\ninnodb_max_dirty_pages_pct = 90\n\n#\u4e8b\u52a1\u6b7b\u9501\u8d85\u65f6\u8bbe\u5b9a\n\ninnodb_lock_wait_timeout = 120\n\n"})})]}),"\n",(0,t.jsxs)(e.admonition,{type:"warning",children:[(0,t.jsx)(e.p,{children:"\u7edd\u5bf9\u4e0d\u8981\u76f4\u63a5\u628a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u8fdb\u4f60\u7684\u914d\u7f6e\u6587\u4ef6\u5f53\u4e2d"}),(0,t.jsx)(e.p,{children:"\u5426\u5219\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u65e0\u6cd5\u542f\u52a8"}),(0,t.jsx)(e.p,{children:"\u6b63\u786e\u7684\u505a\u6cd5\u662f\u770b\u5b8c\u6ce8\u91ca\u4e4b\u540e\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981,\u81ea\u884c\u53bb\u4fee\u6539\u914d\u7f6e\u6587\u4ef6,\u7136\u540e\u91cd\u542f\u6216\u91cd\u8f7d MySQL \u670d\u52a1"})]}),"\n",(0,t.jsx)(e.p,{children:"\u6b64\u5916,\u8fd8\u6709\u4e00\u4e9b\u5341\u5206\u91cd\u8981\u7684\u914d\u7f6e\u9879,\u5efa\u8bae\u4fee\u6539,\u6ca1\u6709\u7684\u914d\u7f6e\u9879\u53ef\u4ee5\u81ea\u884c\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0"}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u914d\u7f6e\u540d\u79f0"}),(0,t.jsx)(e.th,{children:"\u4f5c\u7528"}),(0,t.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(e.th,{children:"\u63a8\u8350\u503c"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"wait_timeout"})}),(0,t.jsx)(e.td,{children:"\u6b64\u9879\u8bbe\u7f6e MySQL \u5728\u5173\u95ed\u4e00\u4e2a\u975e\u4ea4\u4e92\u7684\u8fde\u63a5\u4e4b\u524d\u6240\u8981\u7b49\u5f85\u7684\u79d2\u6570,\u4e5f\u5c31\u662f\u4e00\u9879\u8fde\u63a5\u5982\u679c\u7a7a\u95f2\u65f6\u95f4\u8d85\u8fc7\u8bbe\u7f6e\u7684\u503c,\u8fde\u63a5\u5c31\u4f1a\u88ab\u81ea\u52a8\u5173\u95ed,\u8fd9\u65f6\u5019\u4f60\u7684\u63d2\u4ef6\u5c31\u4f1a\u75af\u72c2\u62a5\u9519\u70e6\u6b7b\u4f60,\u5efa\u8bae\u8c03\u5927\u4e00\u70b9\u3002\u4f46\u662f\u592a\u5927\u4e5f\u4e0d\u884c,\u5426\u5219\u4f1a\u4e25\u91cd\u62d6\u7d2f\u6027\u80fd"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"wait_timeout=28800"})}),(0,t.jsx)(e.td,{children:"86400"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"interactive_timeout"})}),(0,t.jsxs)(e.td,{children:["\u6b64\u9879\u8bbe\u7f6e MySQL \u5173\u95ed\u4e00\u4e2a\u4ea4\u4e92\u7684\u8fde\u63a5\u4e4b\u524d\u6240\u8981\u7b49\u5f85\u7684\u79d2\u6570,\u9700\u8981\u6ce8\u610f\u7684\u662f, ",(0,t.jsx)(e.code,{children:"wait_timeout"})," \u548c ",(0,t.jsx)(e.code,{children:"interactive_timeout"})," \u9700\u8981\u540c\u65f6\u8bbe\u7f6e,\u5426\u5219\u4e0d\u4f1a\u751f\u6548"]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"interactive_timeout=28800"})}),(0,t.jsx)(e.td,{children:"86400"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"max_allowed_packet"})}),(0,t.jsxs)(e.td,{children:["\u6709\u65f6\u5019\u4f60\u7684\u63d2\u4ef6\u4f1a\u544a\u8bc9\u4f60 ",(0,t.jsx)(e.code,{children:"Package for query is too large"})," \u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u4f60\u5c31\u9700\u8981\u8c03\u5927\u8fd9\u4e2a\u503c\u4e86,\u8fd9\u4e00\u9879\u89c4\u5b9a\u4e86 MySQL \u4f20\u8f93\u8fc7\u7a0b\u4e2d\u6700\u5927\u5141\u8bb8\u7684\u5305\u7684\u5927\u5c0f"]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"max_allowed_packet=1M"})}),(0,t.jsx)(e.td,{children:"\u770b\u60c5\u51b5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"max_connections"})}),(0,t.jsxs)(e.td,{children:["\u8fd9\u4e00\u9879\u8bbe\u7f6e MySQL \u7684\u6700\u5927\u8fde\u63a5\u6570,\u5982\u679c\u8fde\u63a5\u6570\u5230\u8fbe\u8fd9\u4e2a\u6570\u503c,\u5c31\u65e0\u6cd5\u521b\u5efa\u65b0\u7684\u8fde\u63a5,\u8fd9\u4e2a\u65f6\u5019\u4f60\u7684\u63d2\u4ef6\u901a\u5e38\u4f1a\u62a5\u9519,\u544a\u8bc9\u4f60 ",(0,t.jsx)(e.code,{children:"max_connections"})," \u6ee1\u4e86"]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"max_connections=90"})}),(0,t.jsx)(e.td,{children:"32768"})]})]})]})}),"\n",(0,t.jsx)(e.h3,{id:"mariadb",children:"MariaDB"}),"\n",(0,t.jsx)(e.p,{children:"TODO"})]})}function _(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},35396:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var t=i(30758);const d={},r=t.createContext(d);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);