// ==UserScript==
// @name              空洞骑士BINGO助手3.0
// @namespace         https://github.com/magegihk/HKBingoAss.git
// @version           3.0.1
// @icon              https://greasyfork.org/system/screenshots/screenshots/000/014/163/thumb/images.png
// @description       2020-06-02 一键翻译脚本
// @author            MageGi forked from elderFish
// @supportURL        https://github.com/magegihk/HKBingoAss/issues
// @match             *://www.bingosync.com/room/*
// @match             *://bingosync.com/room/*
// @run-at            document-end
// @grant             unsafeWindow
// @grant             GM_setClipboard
// ==/UserScript==

var $ = unsafeWindow.jQuery;
$(document).ready(function () {
  var targetDom = $('#bingo-chat').closest('.panel').children('.panel-heading');
  var trsBtn = '<span id="hkbingoAssBtn" class="btn btn-default btn-xs pull-right collapse-button" data-lang="cn">显示中文</span>';

  var rollTranslate = {
        "Broken Vessel":"表哥",
        "Lost Kin":"梦表哥",
        "Crystal Guardian 1":"椅子哥1",
        "Crystal Guardian 2":"椅子哥2",
        "Collector":"收藏家",
        "Dung Defender":"芬达",
        "Defeat White Defender":"白芬达",
        "Failed Champion":"梦大锤",
        "False Knight + Brooding Mawlek":"大锤+电饭煲",
        "Flukemarm":"虫母",
        "Hive Knight":"蜂骑",
        "Hornet 2":"小姐姐2",
        "Mantis Lords":"三螳螂",
        "Nosk":"诺斯克",
        "Pale Lurker":"小忍者",
        "Any one Radiant Boss":"辐光",
        "Soul Master":"大师",
        "Soul Tyrant":"梦大师",
        "Traitor Lord":"叛徒领主",
        "Troupe Master Grimm":"格林",
        "Nightmare King Grimm":"梦格林",
        "Uumuu":"大水母",
        "Watcher Knights":"滚滚",
        "Vengefly King + Massive Moss Charger":"大蚊子+大草团",
        "Galien":"加利安",
        "Gorb":"戈布",
        "Elder Hu":"胡长老",
        "Marmu":"马尔穆",
        "Markoth":"马科斯",
        "No Eyes":"无眼",
        "Xero":"泽若",
        "Kill 2 Soul Warriors":"2灵魂战士",
        "Kill an Aluba":"1蜻蜓",
        "Kill two different Alubas":"2蜻蜓",
        "Colosseum 1":"竞技场1",
        "Defeat Colosseum Zote":"竞技场左特",
        "Crystal Crawler Journal Entry":"激光爬虫日志",
        "Kill 6 different Stalking Devouts":"6镰刀虫",
        "Kill a Durandoo":"杀长脚贝壳",
        "Kill a Great Hopper":"1大跳蚤",
        "Kill Gorgeous Husk":"金闪闪",
        "Kill a Kingsmould":"1白宫守卫",
        "Kill two different Maggots":"2蛆虫",
        "Slash Millibelle in Pleasure House":"打银行家",
        "Kill 4 Mimics":"4假虫",
        "Kill Myla":"杀米拉",
        "Obtain Herrah":"赫拉",
        "Obtain Lurien":"卢瑞恩",
        "Obtain Monomon":"莫诺蒙",
        "Ride the stag to Distant Village":"坐虫去遥远村庄",
        "Ride the stag to Queen's Garden":"坐虫去王后花园",
        "Ride the stag to Hidden Station":"坐虫去隐藏的鹿角站",
        "Ride the stag to King's Station":"坐虫去国王驿站",
        "Ride the stag to Queen's Station":"坐虫去王后驿站",
        "Have 5 or more Charms":"5+护符",
        "Equip 5 Charms at the same time":"装备5护符",
        "Obtain Carefree Melody":"无忧旋律",
        "Obtain Wayward Compass or Gathering Swarm":"指南针或蜂群",
        "Obtain Dream Wielder or Dreamshield":"舞梦者或梦盾",
        "Obtain two Unbreakable charms":"2坚固",
        "Obtain Flukenest or Fury or the Fallen":"虫巢或亡怒",
        "Obtain Grubsong or Grubberfly's Elegy":"虫歌或挽歌",
        "Obtain Glowing Womb or Weaversong":"子宫或编织者",
        "Obtain Heavy Blow or Steady Body":"沉重或稳定",
        "Obtain Hiveblood or Sharp Shadow":"蜂血或锋利",
        "Obtain two Lifeblood charms":"2蓝血护符",
        "Obtain Longnail or Mark of Pride":"修长或骄傲",
        "Obtain Quick Slash or Nailmaster's Glory":"快劈或荣耀",
        "Obtain Quick Focus or Deep Focus":"快聚或深聚",
        "Obtain Shaman Stone or Spell Twister":"萨满或扭曲",
        "Obtain Sprintmaster or Dashmaster":"飞毛腿或冲刺大师",
        "Obtain Soul Eater or Soul Catcher":"噬魂或捕手",
        "Obtain Shape of Unn or Baldur Shell":"乌恩或巴德尔",
        "Obtain the Love Key":"爱之钥",
        "Obtain Crystal Heart":"超冲",
        "Descending Dark":"黑砸",
        "Obtain Dream Nail":"梦钉",
        "Obtain Dream Gate":"梦门",
        "Obtain Desolate Dive":"白砸",
        "Obtain Mantis Claw":" 爬墙",
        "Obtain 2 Nail Arts":"2剑技",
        "Obtain Shade Cloak":"黑冲",
        "Obtain Abyss Shriek":" 黑吼",
        "Obtain Shade Soul":"黑波",
        "Obtain Isma's Tear":"酸泪",
        "Obtain Vengeful Spirit":"白波",
        "Obtain Monarch Wings":"二段",
        "Obtain Howling Wraiths":"白吼",
        "Obtain 15 grubs":"15虫",
        "Obtain 2 Pale Ore":"2矿石",
        "Use 2 Simple Keys":"用2钥匙",
        "Have 3 different maps not counting Dirtmouth or Hive":"有3地图",
        "Obtain Collector's Map":"收藏家地图",
        "Obtain 1 Arcane Egg":"1神秘蛋",
        "Obtain Godtuner":"调谐器",
        "Obtain 3 King's Idols":"3雕像",
        "Obtain 5 Wanderer's Journals":"5日记",
        "Obtain Lumafly Lantern":"灯",
        "Obtain 1 extra mask":"1血",
        "Have 6 Charm Notches total":"6槽",
        "Obtain 4 Rancid Eggs":"4臭蛋",
        "Obtain 5 Hallownest Seals":"5印章",
        "Obtain 1 extra soul vessel":"1魔",
        "Obtain Tram Pass":" 车票",
        "Obtain World Sense":"完成度",
        "Interact with 3 Cornifer locations":"3绘图师",
        "Get 2 Dreamer's checks":"2守梦处",
        "Complete the Greenpath Root":"苍绿树",
        "Check the Hallownest Crown":"看圣巢冠",
        "Buy the Basin fountain check":"买喷泉",
        "Check Glowing Womb":"看子宫",
        "Check the Hive Mask Shard":"看蜂巢碎片",
        "Check Joni's Blessing":"看乔尼",
        "Complete the Kingdom's Edge Root":"边境树",
        "Check Love Key":"看爱之钥",
        "Check 2 Nailmasters":"看2骨钉大师",
        "Check the journal below Stone Sanctuary":"看庇护所下日记",
        "Check Sheo":"看席奥",
        "Visit all 4 shops (Sly, Iselda, Salubra and Leg Eater)":"去4商店",
        "Check the Stag Nest vessel fragment":"看鹿角虫巢碎片",
        "Check Shade Soul":"看黑波",
        "Check Isma's Tear":"看酸泪",
        "Complete 4 full dream trees":"4树",
        "Check Shape of Unn":"看乌恩",
        "Check the journal above Mantis Village":"看螳螂村日记",
        "Check Void Heart":"看虚空之心",
        "Check/Free all grubs in CoT (5)":"看或救泪城5虫",
        "Check/Free all grubs in Crossroads (5) + Fog Canyon (1)":"看或救十字路5虫+雾谷1虫",
        "Check/Free all grubs in Deepnest (5)":"看或救深巢5虫",
        "Check/Free all grubs in Greenpath (4) and in Fungal (2)":"看或救苍绿4虫+真菌2虫",
        "Check/Free all grubs in Crystal Peaks (7)":"看或救矿山7虫",
        "Check/Free all grubs in Queen's Gardens (3)":"看或救花园3虫",
        "Check/Free all grubs in Waterways (3)":"看或救水道3虫",
        "Break 3 floors using Dive":"白砸3地板",
        "Break the 420 geo rock in Kingdom's Edge":"边境大钱堆",
        "Collect 500 essence":"500精华",
        "Spend 3000 geo":"花3000",
        "Spend 4000 geo":"花4000",
        "Spend 5000 geo":"花5000",
        "Have 1500 geo in the bank":"存1500",
        "Talk to Bardoon":"巴冬对话",
        "Rescue Bretta + Sly":"救布蕾塔+斯莱",
        "Get Brumm's flame":"布鲁姆的火",
        "Talk to Cloth":"阿布对话",
        "Complete either ending of the Cloth questline":"阿布结局",
        "Use City Crest + Ride both CoT large elevators":"用纹章+坐泪城2大电梯",
        "Kill 3 Oomas using a minion charm":"跟班杀3水母",
        "Rescue Zote in Deepnest":"深巢救左特",
        "Read the Dung Defender sign before Isma's Grove":"读芬达牌子",
        "Open the Dirtmouth / Crystal Peaks elevator":"开德-山电梯",
        "Give Flower to Elderbug":"送花村长",
        "Talk to Emilitia (shortcut out of sewers)":"贵妇对话",
        "Talk to the Fluke Hermit":"隐士对话",
        "Enter Godhome":"进神居",
        "Goam and Garpede Journal Entries":"伸缩虫和蜈蚣日志",
        "Open Jiji's Hut":"开吉吉小屋",
        "Push an enemy into a deadly hazard":"推敌人进致死地形",
        "Hit the Oro scarecrow up until the hoppers spawn":"稻草人",
        "Talk to Lemm in his shop with Defender's Crest equipped":"店里臭古董商",
        "Buy out Leg Eater":"买空食腿者",
        "10 Lifeblood masks at the same time":"10蓝血",
        "Enter the Lifeblood Core room without wearing any Lifeblood charms":"打蓝血进核心",
        "Read the lore tablet in Ancient Basin":"读盆地碑",
        "Read 3 lore tablets in Teacher's Archives":"读档案馆3碑",
        "Read the lore tablet in Howling Cliffs":"读呼啸碑",
        "Read three lore tablets in Greenpath":"读苍绿3石碑",
        "Read the lore tablet in Kingdom's Edge (requires Spore Shroom)":"读边缘碑（要孢子）",
        "Read two Pilgrim's Way lore tablets":"读朝圣者2碑",
        "Read both lore tablets in Soul Sanctum":"读圣所2碑",
        "Read both lore tablets in Mantis Village":"读螳螂村2碑",
        "Charged Lumafly Journal Entry":"电萤日志",
        "Talk to Mask Maker":"面具师对话",
        "Talk to Midwife":"助产士对话",
        "Bow to Moss Prophet, dead or alive":"神棍鞠躬",
        "Interact with Mr. Mushroom once (Does not require Spore Shroom)":"蘑菇先生（不要孢子）",
        "Nail 2":"升2钉",
        "Nail 3":"升3钉",
        "Eternal Ordeal: 20 Zotes":"无尽20左特",
        "Talk to Salubra while overcharmed":"过载对话萨鲁巴",					   
        "Complete Path of Pain":"苦痛之路",
        "Buy 6 map pins from Iselda (All but two)":"6图钉",
        "Buy 8 map pins from Iselda (All)":"8图钉",
        "Parry Revek 3 times without dying (Spirit's Glade Guard)":"墓地3拼刀",
        "Buy out Salubra":"买空萨鲁巴",
        "Slash two Shade Gates":"2黑门",
        "Take a bath in 4 different Hot Springs":"4温泉",
        "Splash the NPC in the Colosseum's hot spring":"竞技场温泉NPC溅水",
        "Visit Shrine of Believers":"信仰者神龛",
        "Look through Lurien's telescope":"用望远镜",
        "Void Tendrils Journal Entry":"黑须日志",
        "Swat away Tiso's shield from his corpse":"打飞提索盾",
        "Talk to Tuk":"臭蛋商对话",
        "Visit Distant Village or Hive":"远村或蜂巢",
        "Visit Lake of Unn or Blue Lake":"乌恩湖或蓝湖",
        "Visit Overgrown Mound or Crystallized Mound (Crystallized requires dive)":"植物山丘或结晶山丘",
        "Visit Soul Sanctum or Royal Waterways":"圣所或水道",
        "Visit Tower of Love (Love Key not required)":"爱之塔（不需要爱之匙）",
        "Dream Nail White Lady":"梦钉抽白夫人",
        "Dream Nail Willoh's meal":"梦钉抽长颈鹿食物",
        "Sit down in Hidden Station":"隐藏鹿角站坐下"
  };
    var rollTips = {
        "Broken Vessel":"残破容器",
        "Lost Kin":"失落近亲",
        "Crystal Guardian 1":"水晶守卫",
        "Crystal Guardian 2":"暴怒守卫",
        "Collector":"收藏家",
        "Dung Defender":"粪虫防御者",
        "Defeat White Defender":"白色防御者",
        "Failed Champion":"失败冠军",
        "False Knight + Brooding Mawlek":"假骑士+毛里克",
        "Flukemarm":"吸虫之母",
        "Hive Knight":"蜂巢骑士",
        "Hornet 2":"岗哨大黄蜂",
        "Mantis Lords":"螳螂领主",
        "Nosk":"诺斯克",
        "Pale Lurker":"苍白潜伏者",
        "Any one Radiant Boss":"任意一个辐光",
        "Soul Master":"灵魂大师",
        "Soul Tyrant":"灵魂暴君",
        "Traitor Lord":"叛徒领主",
        "Troupe Master Grimm":"格林团长",
        "Nightmare King Grimm":"梦魇之王格林",
        "Uumuu":"乌姆",
        "Watcher Knights":"守望者骑士",
        "Vengefly King + Massive Moss Charger":"反击蝇之王+大型苔藓冲锋者",
        "Galien":"加利安",
        "Gorb":"戈布",
        "Elder Hu":"胡长老",
        "Marmu":"马尔穆",
        "Markoth":"马科斯",
        "No Eyes":"无眼",
        "Xero":"泽若",
        "Kill 2 Soul Warriors":"杀2个灵魂战士",
        "Kill an Aluba":"杀1只阿鲁巴",
        "Kill two different Alubas":"杀2只不同的阿鲁巴",
        "Colosseum 1":"愚人竞技场1",
        "Defeat Colosseum Zote":"打败竞技场左特",
        "Crystal Crawler Journal Entry":"水晶爬虫的猎人日志",
        "Kill 6 different Stalking Devouts":"杀6只不同的潜行信徒",
        "Kill a Durandoo":"杀1只杜兰多",
        "Kill a Great Hopper":"杀1只大跳虫",
        "Kill Gorgeous Husk":"杀华丽躯壳",
        "Kill a Kingsmould":"杀1个国王傀儡",
        "Kill two different Maggots":"杀2只不同的蛆虫",
        "Slash Millibelle in Pleasure House":"削欢乐之屋的米莉贝利",
        "Kill 4 Mimics":"杀4只幼虫模仿者",
        "Kill Myla":"杀米拉",
        "Obtain Herrah":"获得赫拉",
        "Obtain Lurien":"获得卢瑞恩",
        "Obtain Monomon":"获得莫诺蒙",
        "Ride the stag to Distant Village":"乘坐去遥远村庄的鹿角虫",
        "Ride the stag to Queen's Garden":"乘坐去王后花园的鹿角虫",
        "Ride the stag to Hidden Station":"乘坐去隐藏的鹿角站的鹿角虫",
        "Ride the stag to King's Station":"乘坐去国王驿站的鹿角虫",
        "Ride the stag to Queen's Station":"乘坐去王后驿站的鹿角虫",
        "Have 5 or more Charms":"有5个或更多护符",
        "Equip 5 Charms at the same time":"同时装备5个护符",
        "Obtain Carefree Melody":"获得无忧旋律",
        "Obtain Wayward Compass or Gathering Swarm":"获得任性的指南针或蜂群集结",
        "Obtain Dream Wielder or Dreamshield":"获得舞梦者或梦之盾",
        "Obtain two Unbreakable charms":"获得2个坚固护符",
        "Obtain Flukenest or Fury or the Fallen":"获得吸虫之巢或亡者之怒",
        "Obtain Grubsong or Grubberfly's Elegy":"获得幼虫之歌或蜕变挽歌",
        "Obtain Glowing Womb or Weaversong":"获得发光子宫或编织者之歌",
        "Obtain Heavy Blow or Steady Body":"获得沉重之击或稳定之体",
        "Obtain Hiveblood or Sharp Shadow":"获得蜂巢之血或锋利之影",
        "Obtain two Lifeblood charms":"获得2个生命血护符",
        "Obtain Longnail or Mark of Pride":"获得修长之钉或骄傲印记",
        "Obtain Quick Slash or Nailmaster's Glory":"获得快速劈砍或骨钉大师的荣耀",
        "Obtain Quick Focus or Deep Focus":"获得快速聚集或深度聚集",
        "Obtain Shaman Stone or Spell Twister":"获得萨满之石或法术扭曲者",
        "Obtain Sprintmaster or Dashmaster":"获得飞毛腿或冲刺大师",
        "Obtain Soul Eater or Soul Catcher":"获得噬魂者或灵魂捕手",
        "Obtain Shape of Unn or Baldur Shell":"获得乌恩之形或巴德尔之壳",
        "Obtain the Love Key":"获得爱之钥",
        "Obtain Crystal Heart":"获得水晶之心",
        "Descending Dark":"获得黑暗降临",
        "Obtain Dream Nail":"获得梦之钉",
        "Obtain Dream Gate":"获得梦之门",
        "Obtain Desolate Dive":"获得荒芜俯冲",
        "Obtain Mantis Claw":" 获得螳螂爪",
        "Obtain 2 Nail Arts":"获得2个剑技",
        "Obtain Shade Cloak":"获得暗影冲刺",
        "Obtain Abyss Shriek":" 获得深渊尖叫",
        "Obtain Shade Soul":"获得暗影之魂",
        "Obtain Isma's Tear":"获得伊思玛的眼泪",
        "Obtain Vengeful Spirit":"获得复仇之魂",
        "Obtain Monarch Wings":"获得帝王之翼",
        "Obtain Howling Wraiths":"获得嚎叫幽灵",
        "Obtain 15 grubs":"获得15只幼虫",
        "Obtain 2 Pale Ore":"获得2块苍白矿石",
        "Use 2 Simple Keys":"使用2把简单钥匙",
        "Have 3 different maps not counting Dirtmouth or Hive":"拥有3张不同的地图（不包括德特茅斯或蜂巢）",
        "Obtain Collector's Map":"获得收藏家的地图",
        "Obtain 1 Arcane Egg":"获得1个神秘蛋",
        "Obtain Godtuner":"获得神明调谐器",
        "Obtain 3 King's Idols":"获得3个国王雕像",
        "Obtain 5 Wanderer's Journals":"获得5本漫游者日记",
        "Obtain Lumafly Lantern":"获得光蝇灯笼",
        "Obtain 1 extra mask":"获得1个额外面具",
        "Have 6 Charm Notches total":"总共拥有6个护符槽",
        "Obtain 4 Rancid Eggs":"获得4个腐臭蛋",
        "Obtain 5 Hallownest Seals":"获得5枚圣巢印章",
        "Obtain 1 extra soul vessel":"获得1个额外灵魂容器",
        "Obtain Tram Pass":" 获得电车通行证",
        "Obtain World Sense":"获得世界完成度查看",
        "Interact with 3 Cornifer locations":"在3个柯尼法位置交互",
        "Get 2 Dreamer's checks":"获得两个守梦者处的东西",
        "Complete the Greenpath Root":"完成苍绿之径的低语之根",
        "Check the Hallownest Crown":"查看圣巢之冠",
        "Buy the Basin fountain check":"购买盆地喷泉碎片",
        "Check Glowing Womb":"查看发光子宫",
        "Check the Hive Mask Shard":"查看蜂巢面具碎片",
        "Check Joni's Blessing":"查看乔尼的祝福",
        "Complete the Kingdom's Edge Root":"完成王国边境的低语之根",
        "Check Love Key":"查看爱之钥",
        "Check 2 Nailmasters":"查看2位骨钉大师",
        "Check the journal below Stone Sanctuary":"查看石之庇护所下方的漫游者日记",
        "Check Sheo":"查看席奥",
        "Visit all 4 shops (Sly, Iselda, Salubra and Leg Eater)":"拜访全部4间商店（斯莱、伊塞尔达、萨鲁巴和食腿者）",
        "Check the Stag Nest vessel fragment":"查看鹿角虫巢穴容器碎片",
        "Check Shade Soul":"查看暗影之魂",
        "Check Isma's Tear":"查看伊思玛的眼泪",
        "Complete 4 full dream trees":"完成4棵低语之根",
        "Check Shape of Unn":"查看乌恩之形",
        "Check the journal above Mantis Village":"查看螳螂村上方漫游者日记",
        "Check Void Heart":"查看虚空之心",
        "Check/Free all grubs in CoT (5)":"查看或解救泪水之城的5只幼虫",
        "Check/Free all grubs in Crossroads (5) + Fog Canyon (1)":"查看或解救遗忘十字路的5只幼虫+雾之峡谷的1只幼虫",
        "Check/Free all grubs in Deepnest (5)":"查看或解救深邃巢穴的5只幼虫",
        "Check/Free all grubs in Greenpath (4) and in Fungal (2)":"查看或解救苍绿之径的4只幼虫+真菌荒地的2只幼虫",
        "Check/Free all grubs in Crystal Peaks (7)":"查看或解救水晶山峰的7只幼虫",
        "Check/Free all grubs in Queen's Gardens (3)":"查看或解救王后花园的3只幼虫",
        "Check/Free all grubs in Waterways (3)":"查看或解救皇家下水道的3只幼虫",
        "Break 3 floors using Dive":"使用荒芜俯冲砸碎3块地板",
        "Break the 420 geo rock in Kingdom's Edge":"打碎王国边境的420大钱堆",
        "Collect 500 essence":"收集500精华",
        "Spend 3000 geo":"花掉3000吉欧",
        "Spend 4000 geo":"花掉4000吉欧",
        "Spend 5000 geo":"花掉5000吉欧",
        "Have 1500 geo in the bank":"在银行有1500吉欧存款",
        "Talk to Bardoon":"和巴冬对话",
        "Rescue Bretta + Sly":"解救布蕾塔+斯莱",
        "Get Brumm's flame":"获得布鲁姆的火焰",
        "Talk to Cloth":"和阿布对话",
        "Complete either ending of the Cloth questline":"完成阿布的任意支线结局",
        "Use City Crest + Ride both CoT large elevators":"使用城市纹章+乘坐泪水之城的2个大电梯",
        "Kill 3 Oomas using a minion charm":"用召唤怪护符杀死3只欧玛",
        "Rescue Zote in Deepnest":"在深巢解救左特",
        "Read the Dung Defender sign before Isma's Grove":"阅读伊思玛的树林前粪虫防御者立的牌子",
        "Open the Dirtmouth / Crystal Peaks elevator":"开启德特茅斯到水晶山峰的电梯",
        "Give Flower to Elderbug":"给虫长者送花",
        "Talk to Emilitia (shortcut out of sewers)":"和艾米丽塔对话（下水道的捷径）",
        "Talk to the Fluke Hermit":"和吸虫隐士对话",
        "Enter Godhome":"进入神居",
        "Goam and Garpede Journal Entries":"戈姆和加皮德的猎人日志",
        "Open Jiji's Hut":"打开吉吉的小屋",
        "Push an enemy into a deadly hazard":"把敌人推进致死地形",
        "Hit the Oro scarecrow up until the hoppers spawn":"击打奥罗边上的稻草人直到一群大跳蚤出现",
        "Talk to Lemm in his shop with Defender's Crest equipped":"装备防御者纹章在里姆店里和他对话",
        "Buy out Leg Eater":"买空食腿者商店",
        "10 Lifeblood masks at the same time":"同时拥有10颗生命血",
        "Enter the Lifeblood Core room without wearing any Lifeblood charms":"不装备任何生命血护符进入生命血核心房间",
        "Read the lore tablet in Ancient Basin":"阅读古老盆地的石碑",
        "Read 3 lore tablets in Teacher's Archives":"阅读教师档案馆的3个石碑",
        "Read the lore tablet in Howling Cliffs":"阅读呼啸悬崖的石碑",
        "Read three lore tablets in Greenpath":"阅读苍绿之径的3个石碑",
        "Read the lore tablet in Kingdom's Edge (requires Spore Shroom)":"阅读王国边缘的石碑（需要装备蘑菇孢子）",
        "Read two Pilgrim's Way lore tablets":"阅读朝圣者之路的2个石碑",
        "Read both lore tablets in Soul Sanctum":"阅读灵魂圣所的2个石碑",
        "Read both lore tablets in Mantis Village":"阅读螳螂村的2个石碑",
        "Charged Lumafly Journal Entry":"带电光蝇猎人日志",
        "Talk to Mask Maker":"和面具制作师对话",
        "Talk to Midwife":"和助产士对话",
        "Bow to Moss Prophet, dead or alive":"向苔藓预言家鞠躬，死生不论",
        "Interact with Mr. Mushroom once (Does not require Spore Shroom)":"和蘑菇先生交互一次（不需要蘑菇孢子）",
        "Nail 2":"升级2次骨钉",
        "Nail 3":"升级3次骨钉",
        "Eternal Ordeal: 20 Zotes":"无尽折磨：20左特",
        "Talk to Salubra while overcharmed":"过载时和萨鲁巴对话",								   
        "Complete Path of Pain":"完成苦痛之路",
        "Buy 6 map pins from Iselda (All but two)":"购买伊塞尔达处6根图钉（全部除去2个）",
        "Buy 8 map pins from Iselda (All)":"购买伊塞尔达处8根图钉（全部）",
        "Parry Revek 3 times without dying (Spirit's Glade Guard)":" 和瑞维克拼刀3次不死（灵魂沼泽守卫）",
        "Buy out Salubra":"买空萨鲁巴",
        "Slash two Shade Gates":"穿过2扇暗影之门",
        "Take a bath in 4 different Hot Springs":"在4个不同温泉里泡澡",
        "Splash the NPC in the Colosseum's hot spring":"抽竞技场温泉里的NPC",
        "Visit Shrine of Believers":"拜访信仰者神龛",
        "Look through Lurien's telescope":"通过卢瑞恩的望远镜眺望",								 
        "Void Tendrils Journal Entry":"虚空卷须猎人日志",
        "Swat away Tiso's shield from his corpse":"打飞提索尸体的盾",
        "Talk to Tuk":"和图克对话",
        "Visit Distant Village or Hive":"拜访遥远村庄或蜂巢",
        "Visit Lake of Unn or Blue Lake":"拜访乌恩之湖或蓝湖",
        "Visit Overgrown Mound or Crystallized Mound (Crystallized requires dive)":"拜访长满植物的山丘或结晶山丘",
        "Visit Soul Sanctum or Royal Waterways":"拜访灵魂圣所或皇家水道",
        "Visit Tower of Love (Love Key not required)":"拜访爱之塔（不需要爱之匙）",
        "Dream Nail White Lady":"梦钉抽白色夫人",
        "Dream Nail Willoh's meal":"梦钉抽维洛的食物",
        "Sit down in Hidden Station":"在隐藏鹿角站坐下"
  };
  targetDom.append(trsBtn);

  function initLang() {
    $(".text-container").each(function () {
      var enStr = $(this).html();
      // console.log(enStr)
      $(this).attr('data-lang-en', enStr)
      if (rollTranslate[enStr]) {
        $(this).attr('data-lang-cn', rollTranslate[enStr])
        $(this).attr('title', rollTips[enStr])
      } else {
        $(this).attr('data-lang-cn', enStr)
      }
    });
    $('#hkbingoAssBtn').attr('data-inited', true)
    doTrans($('#hkbingoAssBtn').attr('data-lang'))
  }

  function doTrans(lang) {
    var targetLang = lang;
    var arlang = targetLang == 'cn' ? 'en' : 'cn'
    $('#hkbingoAssBtn').html(targetLang == 'cn' ? '显示英文' : '显示中文')
    $(".text-container").each(function () {
      $(this).html($(this).attr('data-lang-' + targetLang))
    });
    $('#hkbingoAssBtn').attr('data-lang', arlang)
  }
  function resetTrsBtn(){
    $('#hkbingoAssBtn').attr('data-inited', 'false').attr('data-lang', 'cn').html('显示中文')
  }

  $('#hkbingoAssBtn').click(function () {
    if ($(this).attr('data-inited') != 'true') {
      initLang()
    } else {
      doTrans($(this).attr('data-lang'))
    }
  })

  $(document).ajaxComplete(function (event, xhr, settings) {
    if (settings.url.indexOf('room-settings') >= 0) {
      console.log('card rebuild!')
      resetTrsBtn()
    }
  });

})
