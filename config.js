const u0 = 'https://cdn.cbd.int/cansin-music-jaychou@1.0.0';
const u0a = u0 + '/audio/';
const u0c = u0 + '/cover/';
const u0l = u0 + '/lrc/';
const u3 = 'https://music.163.com/song/media/outer/url?id=';
const u4 = 'https://registry.npmmirror.com/cansin-blogdata/latest/files/lrc/';
var localMusic = [
    {
        title: '知我',
        author: '国风堂/哦漏',
        url: u3 + '1394167216.mp3',
        pic: 'https://p2.music.126.net/_etyUh1ofScyTMFArsJXWg==/109951164415301539.jpg?param=250y250',
        lrc: u4 + '知我.lrc'
    }, {
        title: '我们的时光',
        author: '赵雷',
        url: u3 + '29567193.mp3',
        pic: 'https://p1.music.126.net/pwcUlwh9MFZ_V3hGBOPaCQ==/109951169213425474.jpg?param=250y250',
        lrc: u4 + '我们的时光.lrc'
    }, {
        title: '我记得',
        author: '赵雷',
        url: u3 + '1974443814.mp3',
        pic: 'https://p2.music.126.net/9bVOooAY6U6EJLzpv1Fikw==/109951169682871673.jpg?param=250y250',
        lrc: u4 + '我记得.lrc'
    }, {
        title: '无言',
        author: '王贰浪',
        url: u3 + '1399642612.mp3',
        pic: 'https://p2.music.126.net/tenwV2eLdBpHlK2ulIw8kw==/109951169297723419.jpg?param=250y250',
        lrc: u4 + '无言.lrc'
    }, {
        title: '人间蜉蝣',
        author: '未知音素 / 徐深',
        url: u3 + '1808040375.mp3',
        pic: 'https://p1.music.126.net/QWn2SVLVezVb5huFA15mYQ==/109951165589250087.jpg?param=250y250',
        lrc: u4 + '人间蜉蝣.lrc'
    }, {
        title: '倾尽天下',
        author: '河图',
        url: u3 + '27571867.mp3',
        pic: 'https://p2.music.126.net/nlocSgc4D7T-h6S3f6IybQ==/6003333487842277.jpg?param=250y250',
        lrc: u4 + '倾尽天下.lrc'
    }, {
        title: '恋恋故人难',
        author: '黄诗扶 / 王敬轩（妖扬）',
        url: u3 + '1376873330.mp3',
        pic: 'https://p1.music.126.net/XE1XFkkDYrEW_eXFFlsSYQ==/109951164202821890.jpg?param=250y250',
        lrc: u4 + '恋恋故人难.lrc'
    }, {
        title: '小问题',
        author: 'AGA',
        url: u3 + '572874064.mp3',
        pic: 'https://p1.music.126.net/Iw6hSNm8CKHVr0RtJMZGBA==/109951169358458530.jpg?param=250y250',
        lrc: u4 + '小问题.lrc'
    }, {
        title: '星河万里',
        author: '欣蒂',
        url: u3 + '2105350589.mp3',
        pic: 'https://p2.music.126.net/T1e0GNjm5ffQNPsse128rw==/109951169134863805.jpg?param=250y250',
        lrc: u4 + '星河万里.lrc'
    }, {
        title: '致你',
        author: 'yihuik苡慧',
        url: u3 + '1867217766.mp3',
        pic: 'https://p1.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg?param=250y250',
        lrc: u4 + '致你.lrc'
    }, {
        title: '把回忆拼好给你',
        author: '王贰浪',
        url: u3 + '1403318151.mp3',
        pic: 'https://p1.music.126.net/CBx2K_jEN3SNWwYztagPPw==/109951164485969446.jpg?param=250y250',
        lrc: u4 + '把回忆拼好给你.lrc'
    }, {
        title: '一格格',
        author: '傲七爷（江偌绮）',
        url: u3 + '1836117930.mp3',
        pic: 'https://p2.music.126.net/XdCRvzAPF0cnz35Aut9xOw==/109951165887949956.jpg?param=250y250',
        lrc: u4 + '一格格.lrc'
    }, {
        title: '在你的身边',
        author: '盛哲',
        url: u3 + '475479888.mp3',
        pic: 'https://p1.music.126.net/AYNBdRxJ8EdZo4xFjp7b4Q==/109951163191178425.jpg?param=250y250',
        lrc: u4 + '在你的身边.lrc'
    }, {
        title: '琴师',
        author: '音频怪物',
        url: u3 + '184467.mp3',
        pic: 'https://p1.music.126.net/0ju8ET1ApZSXfWacc4w49w==/109951169484091680.jpg?param=250y250',
        lrc: u4 + '琴师.lrc'
    }, {
        title: '牵丝戏',
        author: '银临 / Aki阿杰',
        url: u3 + '30352891.mp3',
        pic: 'https://p1.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg?param=250y250',
        lrc: u4 + '牵丝戏.lrc'
    }, {
        title: '像我这样的人',
        author: '毛不易',
        url: u3 + '569213220.mp3',
        pic: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=250y250',
        lrc: u4 + '像我这样的人.lrc'
    }, {
        title: '消愁',
        author: '毛不易',
        url: u3 + '569200213.mp3',
        pic: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=250y250',
        lrc: u4 + '消愁.lrc'
    }, {
        title: '借',
        author: '毛不易',
        url: u3 + '569214250.mp3',
        pic: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=250y250',
        lrc: u4 + '借.lrc'
    }, {
        title: '无问',
        author: '毛不易',
        url: u3 + '525278524.mp3',
        pic: 'https://p1.music.126.net/SJLDel776uY6MEKEU5GbjA==/109951163099854364.jpg?param=250y250',
        lrc: u4 + '无问.lrc'
    }, {
        title: '人间城',
        author: '王贰浪',
        url: u3 + '1377574592.mp3',
        pic: 'https://p2.music.126.net/tenwV2eLdBpHlK2ulIw8kw==/109951169297723419.jpg?param=250y250',
        lrc: u4 + '人间城.lrc'
    }, {
        title: 'Blueming',
        author: 'IU',
        url: u3 + '2000414741.mp3',
        pic: 'https://p2.music.126.net/iqE9OMfJxol3GjzJsYVhgQ==/109951168079294798.jpg?param=250y250',
        lrc: u4 + 'Blueming.lrc'
    }, {
        title: '虞兮叹',
        author: '闻人听書_',
        url: u3 + '1479526505.mp3',
        pic: 'https://p2.music.126.net/6gdwWjPXUkyTx4CuuSxkIg==/109951165319864977.jpg?param=250y250',
        lrc: u4 + '虞兮叹.lrc'
    }, {
        title: '那年年少',
        author: '宋瑀哲',
        url: u3 + '1495131163.mp3',
        pic: 'https://p2.music.126.net/VuoQgDoLXx4CJsSXHL0rTA==/109951165466450525.jpg?param=250y250',
        lrc: u4 + '那年年少.lrc'
    }, {
        title: '出山',
        author: '花粥 / 王胜娚',
        url: u3 + '1313354324.mp3',
        pic: 'https://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=250y250',
        lrc: u4 + '出山.lrc'
    }, {
        title: '盗将行',
        author: '花粥 / 马雨阳',
        url: u3 + '574566207.mp3',
        pic: 'https://p2.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg?param=250y250',
        lrc: u4 + '盗将行.lrc'
    }, {
        title: '归去来兮',
        author: '花粥',
        url: u3 + '1357999894.mp3',
        pic: 'https://p2.music.126.net/H6dt7IgvXNWhRM_w7XbcqQ==/109951163990575387.jpg?param=250y250',
        lrc: u4 + '归去来兮.lrc'
    }, {
        title: '鸳鸯债',
        author: 'Uri / 喵☆酱',
        url: u3 + '1911377814.mp3',
        pic: 'https://p2.music.126.net/ZrWgJqLD75XvALUIT7E9TQ==/109951166924195228.jpg?param=250y250',
        lrc: u4 + '鸳鸯债.lrc'
    }, {
        title: '压轴戏',
        author: '唐伯虎Annie',
        url: u3 + '1351449194.mp3',
        pic: 'https://p1.music.126.net/dbze2040oQyduqP7gIaFaw==/109951163934341532.jpg?param=250y250',
        lrc: u4 + '压轴戏.lrc'
    }, {
        title: '且笑红尘',
        author: '银临',
        url: u3 + '1401909249.mp3',
        pic: 'https://p2.music.126.net/DIxe_BCzpl3P87UTIjX_EA==/109951167999152679.jpg?param=250y250',
        lrc: u4 + '且笑红尘.lrc'
    }, {
        title: '踏山河',
        author: '七叔-叶泽浩',
        url: u3 + '1804320463.mp3',
        pic: 'https://p1.music.126.net/p9-X3aOKRjn94NMxsD7hig==/109951165621355537.jpg?param=250y250',
        lrc: u4 + '踏山河.lrc'
    }, {
        title: '岁月神偷',
        author: '金玟岐',
        url: u3 + '28285910.mp3',
        pic: 'https://p1.music.126.net/gWNsPDBbQCQXVNvMdnAH8A==/18815942487303143.jpg?param=250y250',
        lrc: u4 + '岁月神偷.lrc'
    }, {
        title: '同渡',
        author: '金玟岐',
        url: u3 + '1815902689.mp3',
        pic: 'https://p2.music.126.net/DGjs7r7w6rBISvyOssfDWQ==/109951165684433867.jpg?param=250y250',
        lrc: u4 + '同渡.lrc'
    }, {
        title: '山有木兮-橙光《人鱼传说之长生烛》主题曲',
        author: '橙光音乐 / 伦桑',
        url: u3 + '513364704.mp3',
        pic: 'https://p1.music.126.net/4BzskNEazflw1W8sl36HLA==/109951163044448514.jpg?param=250y250',
        lrc: u4 + '山有木兮.lrc'
    }, {
        title: '千千万万',
        author: '深海鱼子酱',
        url: u3 + '1811459887.mp3',
        pic: 'https://p1.music.126.net/xdegZlt9xmez_MxuH_PzXA==/109951165623999837.jpg?param=250y250',
        lrc: u4 + '千千万万.lrc'
    }, {
        title: '南山南',
        author: '马頔',
        url: u3 + '29436904.mp3',
        pic: 'https://p1.music.126.net/WkzQgHTnH1Yf4BXQVgktOg==/6648746813825382.jpg?param=250y250',
        lrc: u4 + '南山南.lrc'
    }, {
        title: '悬溺',
        author: '葛东琪',
        url: u3 + '1397345903.mp3',
        pic: 'https://p2.music.126.net/CDhYcShQKH2VAMENuCxWWQ==/109951164166513349.jpg?param=250y250',
        lrc: u4 + '悬溺.lrc'
    }, {
        title: '囍（Chinese Wedding）',
        author: '葛东琪',
        url: u3 + '1303289043.mp3',
        pic: 'https://p2.music.126.net/H3Q3SeMVtuHvHY2uyaQdOw==/109951163472855051.jpg?param=250y250',
        lrc: u4 + '囍.lrc'
    }, {
        title: '这，就是爱',
        author: '张杰',
        url: u3 + '191060.mp3',
        pic: 'https://p2.music.126.net/-IjIggUaU6QOg04LtWhjDA==/109951163940905361.jpg?param=250y250',
        lrc: u4 + '这就是爱.lrc'
    }, {
        title: '像鱼',
        author: '王贰浪',
        url: u3 + '1331819951.mp3',
        pic: 'https://p2.music.126.net/Y6WGcxPJG_GOa_slaWEnFA==/109951169297651430.jpg?param=250y250',
        lrc: u4 + '像鱼.lrc'
    }, {
        title: '生而为人',
        author: '尚士达',
        url: u3 + '1335350269.mp3',
        pic: 'https://p2.music.126.net/JPfFPBFuTqXvqK_a3ik4eA==/109951169541087748.jpg?param=250y250',
        lrc: u4 + '生而为人.lrc'
    }, {
        title: '来日方长',
        author: '薛之谦 / 黄龄',
        url: u3 + '429450375.mp3',
        pic: 'https://p1.music.126.net/hllgYrXUqJL5lBumtPDYag==/3431575800454101.jpg?param=250y250',
        lrc: u4 + '来日方长.lrc'
    }, {
        title: '南方姑娘',
        author: '赵雷',
        url: u3 + '202373.mp3',
        pic: 'https://p1.music.126.net/btBocL7KKvl0sRZY62_BIA==/109951169213244790.jpg?param=250y250',
        lrc: u4 + '南方姑娘.lrc'
    }, {
        title: '浪子回头',
        author: '王玉萌',
        url: u3 + '1323304621.mp3',
        pic: 'https://p2.music.126.net/4dI_0zFb4e0BSv9nbpoLjQ==/109951168049434656.jpg?param=250y250',
        lrc: u4 + '浪子回头.lrc'
    }, {
        title: '北城以北南城以南',
        author: '花7',
        url: u3 + '552281985.mp3',
        pic: 'https://p1.music.126.net/5fl_iCpNG6CJnO_oQUYxow==/109951163244207701.jpg?param=250y250',
        lrc: u4 + '北城以北南城以南.lrc'
    }, {
        title: '杀死那个石家庄人',
        author: '万能青年旅店',
        url: u3 + '386844.mp3',
        pic: 'https://p1.music.126.net/W1kczDCB4-r-uNAznD1ljg==/108851651165850.jpg?param=250y250',
        lrc: u4 + '杀死那个石家庄人.lrc'
    }, {
        title: '只要平凡',
        author: '张杰 / 张碧晨',
        url: u3 + '574919767.mp3',
        pic: 'https://p1.music.126.net/CjGoliP3xOB0gcCUaeTTBg==/109951163375727336.jpg?param=250y250',
        lrc: u4 + '只要平凡.lrc'
    }, {
        title: '董小姐',
        author: '宋冬野',
        url: u3 + '27646198.mp3',
        pic: 'https://p1.music.126.net/GcRunGm02vZBicYmIN6GXw==/109951163200249252.jpg?param=250y250',
        lrc: u4 + '董小姐.lrc'
    }, {
        title: '爸爸妈妈',
        author: '李荣浩',
        url: u3 + '407450223.mp3',
        pic: 'https://p1.music.126.net/e-Uc6W3Kug-HFHJ5nvCUPg==/109951166562828988.jpg?param=250y250',
        lrc: u4 + '爸爸妈妈.lrc'
    }, {
        title: '作曲家',
        author: '李荣浩',
        url: u3 + '29764562.mp3',
        pic: 'https://p1.music.126.net/_9UcTe1Ewh97qRWBqS6oXA==/109951166562838294.jpg?param=250y250',
        lrc: u4 + '作曲家.lrc'
    }, {
        title: '喜剧之王',
        author: '李荣浩',
        url: u3 + '29710981.mp3',
        pic: 'https://p1.music.126.net/C-jIzrvUhr7JE4iYERM-zg==/3249056860423905.jpg?param=250y250',
        lrc: u4 + '喜剧之王.lrc'
    }, {
        title: '与妆',
        author: '李常超 (Lao乾妈)',
        url: u3 + '1406857097.mp3',
        pic: 'https://p2.music.126.net/Cb8n1P-nCcoOurrdrATXkg==/109951164519821459.jpg?param=250y250',
        lrc: u4 + '与妆.lrc'
    }, {
        title: '生死江湖',
        author: '李常超 (Lao乾妈)',
        url: u3 + '492103545.mp3',
        pic: 'https://p1.music.126.net/OYJlnrxlY4Ah6uaBKMA0Xw==/109951162980116083.jpg?param=250y250',
        lrc: u4 + '生死江湖.lrc'
    }, {
        title: '国王与乞丐',
        author: '华晨宇 / 杨宗纬',
        url: u3 + '32835565.mp3',
        pic: 'https://p2.music.126.net/UsSAd3Bdf77DjhCuTSEvUw==/109951163077613693.jpg?param=250y250',
        lrc: u4 + '国王与乞丐.lrc'
    }, {
        title: '贫道',
        author: '刘心',
        url: u3 + '1889956929.mp3',
        pic: 'https://p2.music.126.net/vCtY0DD0Z9PEmiCvn0Dxig==/109951166557423224.jpg?param=250y250',
        lrc: u4 + '贫道.lrc'
    }, {
        title: "Mojito",
        author: "周杰伦",
        url: u0a + "ZJL001.mp3",
        pic: u0c + "dWr5l.webp",
        lrc: u0l + "ZJL001.lrc"
    }, {
        title: "不能说的秘密",
        author: "周杰伦",
        url: u0a + "ZJL005.mp3",
        pic: u0c + "dW4Bi.webp",
        lrc: u0l + "ZJL005.lrc"
    }, {
        title: "彩虹",
        author: "周杰伦",
        url: u0a + "ZJL006.mp3",
        pic: u0c + "dW1k6.md.webp",
        lrc: u0l + "ZJL006.lrc"
    }, {
        title: "稻香",
        author: "周杰伦",
        url: u0a + "ZJL007.mp3",
        pic: u0c + "dWNfb.webp",
        lrc: u0l + "ZJL007.lrc"
    }, {
        title: "东风破",
        author: "周杰伦",
        url: u0a + "ZJL008.mp3",
        pic: u0c + "dWPpC.webp",
        lrc: u0l + "ZJL008.lrc"
    }, {
        title: "告白气球",
        author: "周杰伦",
        url: u0a + "ZJL010.mp3",
        pic: u0c + "dWhDD.webp",
        lrc: u0l + "ZJL010.lrc"
    }, {
        title: "花海",
        author: "周杰伦",
        url: u0a + "ZJL012.mp3",
        pic: u0c + "dWNfb.webp",
        lrc: u0l + "ZJL012.lrc"
    }, {
        title: "黄金甲",
        author: "周杰伦",
        url: u0a + "ZJL013.mp3",
        pic: u0c + "dWFnI.webp",
        lrc: u0l + "ZJL013.lrc"
    }, {
        title: "霍元甲",
        author: "周杰伦",
        url: u0a + "ZJL014.mp3",
        pic: u0c + "dWJxN.webp",
        lrc: u0l + "ZJL014.lrc"
    }, {
        title: "菊花台",
        author: "周杰伦",
        url: u0a + "ZJL016.mp3",
        pic: u0c + "dWm8S.webp",
        lrc: u0l + "ZJL016.lrc"
    }, {
        title: "兰亭序",
        author: "周杰伦",
        url: u0a + "ZJL017.mp3",
        pic: u0c + "dWNfb.webp",
        lrc: u0l + "ZJL017.lrc"
    }, {
        title: "迷迭香",
        author: "周杰伦",
        url: u0a + "ZJL019.mp3",
        pic: u0c + "dWxw1.webp",
        lrc: u0l + "ZJL019.lrc"
    }, {
        title: "七里香",
        author: "周杰伦",
        url: u0a + "ZJL024.mp3",
        pic: u0c + "dWi8F.webp",
        lrc: u0l + "ZJL024.lrc"
    }, {
        title: "青花瓷",
        author: "周杰伦",
        url: u0a + "ZJL025.mp3",
        pic: u0c + "dW1k6.webp",
        lrc: u0l + "ZJL025.lrc"
    }, {
        title: "晴天",
        author: "周杰伦",
        url: u0a + "ZJL026.mp3",
        pic: u0c + "dWPpC.webp",
        lrc: u0l + "ZJL026.lrc"
    }, {
        title: "三年二班",
        author: "周杰伦",
        url: u0a + "ZJL027.mp3",
        pic: u0c + "dWPpC.webp",
        lrc: u0l + "ZJL027.lrc"
    }, {
        title: "珊瑚海",
        author: "周杰伦 / Lara梁心颐",
        url: u0a + "ZJL028.mp3",
        pic: u0c + "dWK0B.webp",
        lrc: u0l + "ZJL028.lrc"
    }, {
        title: "算什么男人",
        author: "周杰伦",
        url: u0a + "ZJL030.mp3",
        pic: u0c + "dWZws.webp",
        lrc: u0l + "ZJL030.lrc"
    }, {
        title: "听妈妈的话",
        author: "周杰伦",
        url: u0a + "ZJL033.mp3",
        pic: u0c + "dWm8S.webp",
        lrc: u0l + "ZJL033.lrc"
    }, {
        title: "烟花易冷",
        author: "周杰伦",
        url: u0a + "ZJL034.mp3",
        pic: u0c + "dWRfL.webp",
        lrc: u0l + "ZJL034.lrc"
    }, {
        title: "夜的第七章",
        author: "周杰伦 / 潘儿",
        url: u0a + "ZJL035.mp3",
        pic: u0c + "dWm8S.webp",
        lrc: u0l + "ZJL035.lrc"
    }, {
        title: "夜曲",
        author: "周杰伦",
        url: u0a + "ZJL036.mp3",
        pic: u0c + "dWK0B.webp",
        lrc: u0l + "ZJL036.lrc"
    }, {
        title: "一路向北",
        author: "周杰伦",
        url: u0a + "ZJL038.mp3",
        pic: u0c + "dWK0B.webp",
        lrc: u0l + "ZJL038.lrc"
    }, {
        title: "最伟大的作品",
        author: "周杰伦",
        url: u0a + "ZJL039.mp3",
        pic: u0c + "dWAKg.webp",
        lrc: u0l + "ZJL039.lrc"
    }
];