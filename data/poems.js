const poems = [
{"title":"静夜思","dynasty":"唐","author":"李白","content":"床前明月光，疑是地上霜。举头望明月，低头思故乡。"},
{"title":"望庐山瀑布","dynasty":"唐","author":"李白","content":"日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。"},
{"title":"江南","dynasty":"汉","author":"乐府","content":"江南可采莲，莲叶何田田。鱼戏莲叶间。鱼戏莲叶东，鱼戏莲叶西，鱼戏莲叶南，鱼戏莲叶北。"},
{"title":"咏鹅","dynasty":"唐","author":"骆宾王","content":"鹅，鹅，鹅，曲项向天歌。白毛浮绿水，红掌拨清波。"},
{"title":"登鹳雀楼","dynasty":"唐","author":"王之涣","content":"白日依山尽，黄河入海流。欲穷千里目，更上一层楼。"},
{"title":"春晓","dynasty":"唐","author":"孟浩然","content":"春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。"},
{"title":"宿建德江","dynasty":"唐","author":"孟浩然","content":"移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。"},
{"title":"古朗月行","dynasty":"唐","author":"李白","content":"小时不识月，呼作白玉盘。又疑瑶台镜，飞在青云端。"},
{"title":"绝句","dynasty":"唐","author":"杜甫","content":"迟日江山丽，春风花草香。泥融飞燕子，沙暖睡鸳鸯。"},
{"title":"江雪","dynasty":"唐","author":"柳宗元","content":"千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。"},
{"title":"塞下曲","dynasty":"唐","author":"卢纶","content":"月黑雁飞高，单于夜遁逃。欲将轻骑逐，大雪满弓刀。"},
{"title":"池上","dynasty":"唐","author":"白居易","content":"小娃撑小艇，偷采白莲回。不解藏踪迹，浮萍一道开。"},
{"title":"悯农","dynasty":"唐","author":"李绅","content":"锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"},
{"title":"鹿柴","dynasty":"唐","author":"王维","content":"空山不见人，但闻人语响。返景入深林，复照青苔上。"},
{"title":"江上渔者","dynasty":"宋","author":"范仲淹","content":"江上往来人，但爱鲈鱼美。君看一叶舟，出没风波里。"},
{"title":"夏日绝句","dynasty":"宋","author":"李清照","content":"生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。"},
{"title":"示儿","dynasty":"宋","author":"陆游","content":"死去元知万事空，但悲不见九州同。王师北定中原日，家祭勿忘告乃翁。"},
{"title":"四时田园杂兴","dynasty":"宋","author":"范成大","content":"梅子金黄杏子肥，麦花雪白菜花稀。日长篱落无人过，唯有蜻蜓蛱蝶飞。"},
{"title":"小池","dynasty":"宋","author":"杨万里","content":"泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。"},
{"title":"题临安邸","dynasty":"宋","author":"林升","content":"山外青山楼外楼，西湖歌舞几时休。暖风熏得游人醉，直把杭州作汴州。"},
{"title":"游园不值","dynasty":"宋","author":"叶绍翁","content":"应怜屐齿印苍苔，小扣柴扉久不开。春色满园关不住，一枝红杏出墙来。"},
{"title":"乡村四月","dynasty":"宋","author":"翁卷","content":"绿遍山原白满川，子规声里雨如烟。乡村四月闲人少，才了蚕桑又插田。"},
{"title":"墨梅","dynasty":"元","author":"王冕","content":"我家洗砚池头树，朵朵花开淡墨痕。不要人夸颜色好，只留清气满乾坤。"},
{"title":"石灰吟","dynasty":"明","author":"于谦","content":"千锤万凿出深山，烈火焚烧若等闲。粉身碎骨浑不怕，要留清白在人间。"},
{"title":"竹石","dynasty":"清","author":"郑烨","content":"咬定青山不放松，立根原在破岩中。千磨万击还坚韧，任尔东西南北风。"},
{"title":"所见","dynasty":"清","author":"袁枚","content":"牧童骑黄牛，歌声振林樾。意欲捕鸣蝉，忽然闭口立。"},
{"title":"村居","dynasty":"清","author":"高鼎","content":"草长莺飞二月天，拂堤杨柳醉春烟。儿童散学归来早，忙趁东风放纸鸢。"},
{"title":"己亥杂诗","dynasty":"清","author":"龚自珍","content":"九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才。"},
{"title":"三衢道中","dynasty":"宋","author":"曾几","content":"梅子黄时日日晴，小溪泛尽却山行。绿阴不减来时路，添得黄鹂四五声。"},
{"title":"观书有感","dynasty":"宋","author":"朱熹","content":"半亩方塘一鉴开，天光云影共徘徊。问渠哪得清如许，为有源头活水来。"},
{"title":"登乐游原","dynasty":"宋","author":"李商隐","content":"向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。"},
{"title":"风雪宿芙蓉山主人","dynasty":"唐","author":"刘长卿","content":"日暮苍山远，天寒白屋贫。柴门闻犬吠，风雪夜归人。"},
{"title":"剑客","dynasty":"唐","author":"贾岛","content":"十年磨一剑，霜刃未曾试，今日把示君，谁有不平事。"},
{"title":"题诗后","dynasty":"唐","author":"贾岛","content":"两句三年得，一吟双泪流。知音如不赏，归卧故山秋。"},
{"title":"马诗","dynasty":"唐","author":"李贺","content":"大漠沙如雪，燕山月似钩。何当金络脑，快走踏清秋。"},
{"title":"雪","dynasty":"唐","author":"罗隐","content":"尽道丰年瑞，丰年事若何。长安有贫者，为瑞不宜多。"},
{"title":"大林寺桃花","dynasty":"唐","author":"白居易","content":"人间四月芳菲尽，山寺桃花始盛开。长恨春归无觅处，不知转入此中来。"},
{"title":"蝉","dynasty":"唐","author":"虞世南","content":"垂緌饮清露，流响出疏桐。居高声自远，非是藉秋风"},
{"title":"易水送别","dynasty":"唐","author":"骆宾王","content":"此地别燕丹，壮士发冲冠。昔时人已没，今日水犹寒。"},
{"title":"竹里馆","dynasty":"唐","author":"王维","content":"独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。"},
{"title":"杂诗","dynasty":"唐","author":"王维","content":"君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？"},
{"title":"夜宿山寺","dynasty":"唐","author":"李白","content":"危楼高百尺，手可摘星辰。不敢高声语，恐惊天上人。"},
{"title":"赠汪伦","dynasty":"唐","author":"李白","content":"李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。"},
{"title":"黄鹤楼送孟浩然之广陵","dynasty":"唐","author":"李白","content":"故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。"},
{"title":"早发白帝城","dynasty":"唐","author":"李白","content":"朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。"},
{"title":"别董大","dynasty":"唐","author":"高适","content":"千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君。"},
{"title":"望天门山","dynasty":"唐","author":"李白","content":"天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。"},
{"title":"出塞","dynasty":"唐","author":"王昌龄","content":"秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。"},
{"title":"芙蓉楼送辛渐","dynasty":"唐","author":"王昌龄","content":"寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。"},
{"title":"九月九日忆山东兄弟","dynasty":"唐","author":"王维","content":"独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。"},
{"title":"绝句","dynasty":"唐","author":"杜甫","content":"两个黄鹂鸣翠鸟，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。"},
{"title":"江畔独步寻花","dynasty":"唐","author":"杜甫","content":"黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。"},
{"title":"枫桥夜泊","dynasty":"唐","author":"张继","content":"月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。"},
{"title":"渔歌子","dynasty":"唐","author":"张志和","content":"西塞山前白鹭飞，桃花流水鳜鱼肥。青箬笠，绿蓑衣，斜风细雨不须归。"},
{"title":"望洞庭","dynasty":"唐","author":"刘禹锡","content":"湖光秋月两相和，潭面无风镜未磨。遥望洞庭山水翠。白银盘里一青螺。"},
{"title":"浪淘沙","dynasty":"唐","author":"刘禹锡","content":"九曲黄河万里沙，浪淘风簸自天涯。如今直上银河去，同到牵牛织女家。"},
{"title":"悯农","dynasty":"唐","author":"李绅","content":"春种一粒粟，秋收万颗子。四海无闲田，农夫犹饿死。"},
{"title":"风","dynasty":"唐","author":"李峤","content":"解落三秋叶，能开二月花。过江千尺浪，入竹万竿斜。"},
{"title":"回想偶书","dynasty":"唐","author":"贺知章","content":"少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来。"},
{"title":"咏柳","dynasty":"唐","author":"贺知章","content":"碧玉妆成一树高，万条垂下绿丝绦。不知细叶谁裁出，二月春风似剪刀。"},
{"title":"凉州词","dynasty":"唐","author":"王之涣","content":"黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不过玉门关"},
{"title":"凉州词","dynasty":"唐","author":"王维","content":"葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回。"},
{"title":"送元二使安西","dynasty":"唐","author":"王维","content":"渭城朝雨浥轻尘，客舍青青柳色新。劝君更进一杯酒，西出阳关无故人。"},
{"title":"春夜喜雨","dynasty":"唐","author":"杜甫","content":"好雨知时节，当春乃发生。随风潜入夜，润物细无声。"},
{"title":"游子吟","dynasty":"唐","author":"游子吟","content":"慈母手中线，游子身上衣。临行密密缝。意恐迟迟归。谁言寸草心，报得三春晖。"},
{"title":"忆江南","dynasty":"唐","author":"白居易","content":"江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南？"},
{"title":"小儿垂钓","dynasty":"唐","author":"胡令能","content":"蓬头稚子学垂纶，侧坐莓苔草映身。路人借问遥招手，怕得鱼惊不应人    "},
{"title":"清明","dynasty":"唐","author":"杜牧","content":"清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。"},
{"title":"江南春","dynasty":"唐","author":"杜牧","content":"千里莺啼绿映红，水村山郭酒旗风。南朝四百八十寺，多少楼台烟雨中。"},
{"title":"山行","dynasty":"唐","author":"杜牧","content":"远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。"},
{"title":"蜂","dynasty":"唐","author":"罗隐","content":"不论平地与山尖，无限风光尽被占。采得百花成蜜后，为谁辛苦为谁甜。"},
{"title":"元日","dynasty":"宋","author":"王安石","content":"爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。"},
{"title":"书湖阴先生壁","dynasty":"宋","author":"王安石","content":"茅檐长扫净无苔，花木成畦手自栽。一水护田将绿绕，两山排闼送青来。"},
{"title":"泊船瓜洲","dynasty":"宋","author":"王安石","content":"京口瓜洲一水间，钟山只隔数重山。春风又绿江南岸，明月何时照我还。"},
{"title":"从军行","dynasty":"唐","author":"王昌龄","content":"琵琶起舞换新声，总是关山旧别情。缭乱边愁听不尽，高高秋月照长城。"},
{"title":"秋夜将晓出篱门迎凉有感","dynasty":"宋","author":"陆游","content":"三万里河东入海，五千仞岳上摩天。遗民泪尽胡尘里，南望王师又一年。"},
{"title":"雨晴","dynasty":"唐","author":"王驾","content":"雨前初见花间蕊，雨后兼无叶里花。蛱蝶飞来过墙去，却疑春色在邻家。"},
{"title":"暮江吟","dynasty":"唐","author":"白居易","content":"一道残阳铺水中，半江瑟瑟半江红。可怜九月初三夜，露似真珠月似弓."},
{"title":"秋夕","dynasty":"唐","author":"杜牧","content":"银烛秋光冷画屏，轻罗小扇扑流萤。天阶夜色凉如水，坐看牵牛织女星。"},
{"title":"题西林壁","dynasty":"宋","author":"苏轼","content":"横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。"},
{"title":"惠崇《春江晚景》","dynasty":"宋","author":"苏轼","content":"竹外桃花三两枝，春江水暖鸭先知。蒌蒿满地芦芽短，正是河豚欲上时。"},
{"title":"饮湖上初晴后雨","dynasty":"宋","author":"苏轼","content":"水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。"},
{"title":"六月二十七日望湖楼醉书","dynasty":"宋","author":"苏轼","content":"黑云翻墨未遮山，白雨跳珠乱入船。卷地风来忽吹散，望湖楼下水如天。"},
{"title":"春日","dynasty":"宋","author":"朱熹","content":"胜日寻芳泗水滨，无边光景一时新。等闲识得东风面，万紫千红总是春。"},
{"title":"金缕衣","dynasty":"唐","author":"无名氏","content":"劝君莫惜金缕衣，劝君须惜少年时。有花堪折直须折，莫待无花空折枝。"},
{"title":"渡汉江","dynasty":"唐","author":"宋之问","content":"岭外音书断，经冬复历春。近乡情更怯，不敢问来人。"},
{"title":"照镜见白发","dynasty":"唐","author":"张九龄","content":"宿昔青云志，蹉跎白发年。谁知明镜里，形影自相怜。"},
{"title":"田园乐","dynasty":"唐","author":"王维","content":"桃红复含宿雨，柳绿更带朝烟。花落家童未扫，莺啼山客犹眠。"},
{"title":"鸟鸣涧","dynasty":"唐","author":"王维","content":"人闲桂花落，夜静春山空。月出惊山鸟，时鸣春涧中。"},
{"title":"秋词","dynasty":"唐","author":"刘禹锡","content":"自古逢秋悲寂寥，我言秋日胜春朝。晴空一鹤排云上，便引诗情到碧霄。"},
{"title":"菊花","dynasty":"唐","author":"元稹","content":"秋丛绕舍似陶家，遍绕篱边日渐斜。不是花中偏爱菊，此花开尽更无花。"},
{"title":"归雁","dynasty":"唐","author":"钱起","content":"潇湘何时等闲回，水碧沙明亮岸苔。二十五弦弹夜月，不胜情缘却飞来。"},
{"title":"赋得古原草送别","dynasty":"唐","author":"白居易","content":"离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。"},
{"title":"登幽州台歌","dynasty":"唐","author":"陈子昂","content":"前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。"},
{"title":"赤壁","dynasty":"唐","author":"杜牧","content":"折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。"},
{"title":"泊秦淮","dynasty":"唐","author":"杜牧","content":"烟笼寒水月笼沙，夜泊秦淮近酒家。商女不知亡国恨，隔江犹唱后庭花。"},
{"title":"过华清宫","dynasty":"唐","author":"杜牧","content":"长安回望绣成堆，山顶千门次第开。一骑红尘妃子笑，无人知是荔枝来。"},
{"title":"提乌江亭","dynasty":"唐","author":"杜牧","content":"胜败兵家事不期，包羞忍耻是男儿。江东子弟多才俊，卷土重来未可知。"},
{"title":"夜雨寄北","dynasty":"唐","author":"李商隐","content":"君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。"},
{"title":"题都城南庄","dynasty":"唐","author":"崔护","content":"去年今日此门中，人面桃花相映红。人面不知何处去，桃花依旧笑春风。"}
]
