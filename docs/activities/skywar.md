---
title: 岛屿空战
---


# 梦幻之屿空战活动

## 一、活动规则

梦幻之屿空岛战争活动是融合了空岛生存，悠闲而又慢节奏的小游戏活动。游戏过程中你可能需要花费大量的时间发展装备，预期每局游戏时长为30~50分钟。梦幻之屿空岛战争采用一定的随机策略，不能完全保证公平，友谊第一，游戏第二，请不要做出过激反应。

本次活动一共开局三次，每次活动最多32人，最多可供96个玩家参与活动。如果等候大厅中人数超出，则随机选取32个玩家加入游戏。活动举办日期为：2021年10月1日。三局的开始时间分别为：15:30、19:30、21:30。

参与本次活动并在空战中击杀一位玩家，即可获得信标奖励x1，在空战中获得胜利的小队中存活的玩家每人获得鞘翅x1。每个玩家每种奖励最多领取一次。所有参加活动的玩家都将获得活动纪念品x1。此外<b><span style="color:#3eaf7c">本次活动需要全程录像</span></b>，不能提供游戏录像的玩家不提供活动奖励。提供的录像必须完整，每秒至少2帧，码率不得低于512kbps。对于配置不佳的玩家请务必调低录像画质为最低，否则可能会影响游戏帧数。推荐使用Windows自带录像功能，也可使用任意录像软件，请注意计算机安全、仔细鉴别计算机病毒和流氓软件。游戏结束后，获奖玩家将录像上传至Bilibili、百度云盘或OneDrive云盘，并提供分享链接，在审核通过后即可领取奖励。请注意梦幻之屿的所有奖励均含权限绑定，不可转增给其他账号，请使用想要领取奖励的ID参与活动。

本次活动禁止使用任何模组、材质包、光影，禁止手动修改MC文件（包括gamma值）。如果在本次活动中发现作弊行为，将该IP下的所有账号处以永久封禁。届时管理员将使用replay模组对整局比赛录像并公开该录像，玩家可对游戏中的作弊玩家进行举报，追诉期为三个月。

请确保网络通畅，游戏中途退出则游戏失败。如果由于服务器原因导致玩家中场退出，则本局比赛重开，在比赛重开前完成参与奖的玩家可以正常领取奖励。

玩家在游戏中使用指令 `/clubrealm SkyWar` 即可加入小游戏服务器，并开始等待游戏开始。在活动正式开始前，该子服会开放1周时间供玩家练习，并修复一些潜在的BUG。

<b><span style="color:#3eaf7c">请在参与活动前认真阅读此文档，否则后果自负。</span></b>

最后祝各位游戏愉快。

## 二、游戏特殊机制

在空战中，我们对原版进行了一些修改，请留意以下特性。

### 1.隐藏矿物

玩家手动挖掉原石有概率变成矿物，概率如下：

| 矿物类型 | 概率 |
| -------- | ---- |
| 钻石     | 1%   |
| 绿宝石   | 1%   |
| 铁       | 3%   |
| 金       | 2%   |
| 铜       | 1%   |
| 煤炭     | 5%   |
| 青金石   | 2%   |
| 红石     | 2%   |

### 2.取消队友伤害

同队的玩家之间没有伤害，且名字颜色会发生变化。

### 3.关闭地狱和末地

为了防止事情变得更加复杂，取消地狱。

### 4.更强的战马

马只会受到5%的伤害。

### 5.击杀玩家奖励

玩家死亡后会在死亡地点生成一个下界合金锭。

## 三、游戏流程

### 1.服务器启动阶段

设置世界类型为虚空。

设置世界中心为255，255。

设置世界大小为512。

设置死亡掉落。

设置禁用幻翼。

设置随机刻速度为原版10倍。

### 2.准备阶段

在游戏正式开始之前，玩家可以使用`/team x`指令进行组队, 例如`/team 3`，则该玩家会被分配到第三个小岛。如果队伍人数已达4人，则组队失败。游戏队伍数量将根据人数最多的队伍来计算。未选择队伍的玩家将随机、均匀地分配到各个岛屿上。例如共有17个玩家，其中4人选择2队，其他玩家未组队，则本场比赛一共有5支队伍，分别为：4 4 3 3 3。更多分队情况请以实际游戏为主。

至少达到8人时，服务器开始准备下一场游戏地形，随机生成新的游戏场地，中央大岛屿半径为64，各个小岛半径为32。各个小岛分配相同生物群系，中央大岛屿分配不同生物群系。每个岛屿地形，随机生成但不完全一致。在地图生成阶段，玩家仍然可以加入游戏或组队。

地形生成完毕后，玩家队伍将被确定，将游戏中的玩家传送到各个岛屿，清空背包，设置游戏模式为生存模式，恢复生命和饱食度，清空药水，清空经验。从此刻开始，新加入服务器的玩家均被分配为旁观模式。如果在游戏过程中，有玩家死亡也进入旁观状态，并输掉游戏。

准备完毕，游戏正式开始。

### 3.游戏阶段

以下有关游戏阶段的介绍，仅限测试服，正式赛季将完全不同。

#### (1).第一阶段——发育阶段（10分钟）

每个小岛屿分配4个箱子，物品将随机分散到这4个箱子中，**每个岛屿分配的物品完全一致**，但对于每局游戏都是不同的。

一定包含以下物品

* 各种树苗x16（农业）
* 鸡、羊、猪、牛刷怪蛋各2只（牧业）
* 草方块x64（农牧业）
* 岩浆桶和水桶x1（刷石机）
* 钓鱼竿x2（钓鱼佬）
* 望远镜x2（偷窥远处，意义不大）
* 皮革x32

可能包含以下物品，概率独立计算:

* 潜影盒x4（2%）

* 各种种子共32个（15%）
    * 西瓜、南瓜、小麦种子、萝卜、土豆、甜菜根种子、浆果
* 末影珍珠x16（50%）
* 红石套件（20%）
    * 红石块、活塞、粘性活塞、漏斗、粘液块、蜂蜜块、矿车、TNT、探测铁轨、珊瑚、红石火把、投掷器、侦测器、红石灯、中继器、比较器。各64个。
* 村民刷怪蛋x4和绿宝石x64（30%）
* 凋灵骷髅头x1+灵魂沙x4（2%）
* 不死图腾x4（10%）
* 各种乱七八糟的附魔书5~10本（50%）
* 猪灵刷怪蛋（25%）
* 鞘翅x4+烟花x64（1%）
* 附魔台+书架8~16个（15%）
* 末影箱x1（10%）
* 马刷怪蛋x4+马鞍x4（30%）
* 兔子脚、蜘蛛眼、恶魂泪、岩浆膏、海龟壳(分别计算，每种5%)

#### (2).第二阶段——随机事件阶段（10分钟）

随机事件阶段每分钟有25%概率发生随机事件。可能的随机事件如下：

##### TNT流星雨

在512x512个的游戏区域，均匀天降1024个TNT，每个区块一个TNT。在TNT降临的前15秒会进行倒计时。

##### 概率提升

本场比赛挖矿掉落矿物的概率提升5倍。

##### 装备附魔

全体玩家的装备(不包含手中物品)有概率附魔以下属性：

1.保护0~4 分别为20%

2.摔落保护0~3分别为25%

3.火焰保护0~4分别为20%

4.弹射物保护0~4分别为20%

5.耐久0~9分别为10%

##### 凋灵诞生

中心岛屿将会生成1只凋灵。

##### 末地降临

本场比赛场地生物群系切换到末地中的某一个群系。

##### 地狱降临

本场比赛场地生物群系切换到地狱中的某一个群系。

##### 获得升级

所有玩家经验等级变成999。

##### 黑夜降临

本场比赛时间变成黑夜。

##### 雷霆万钧

本场比赛天气变为雷雨天气。每位玩家有25%概率立刻被雷击中。

##### 饥荒

给予所有玩家饥饿I 60秒

##### 蛮兵出征

主岛随机生成3只蛮兵

##### 僵尸围城

每个子岛随机生成5只僵尸

##### 骷髅派对

每个子岛随机生成5只骷髅

##### 袭击

玩家获得灾厄buff

##### 治愈

所有玩家回满血满饱食度

##### 天降正义

每个区块掉落1个铁砧

##### 超级加倍

玩家背包内可叠加物品的数量变成最大

##### 丰收之角

所有玩家获得蛋糕/面包/烤土豆/萝卜/土豆/曲奇若干各1个

##### 灼热地狱

玩家脚下生成3x3岩浆块

##### 猫的礼物

每个岛生成3只幻翼

##### creeper?

每个子岛随机生成5只苦力怕

##### 超能力者

所有玩家获得永久速度2加跳跃2

##### 鸡你太美

所有玩家周围生成若干只鸡

##### 光翼展开

所有玩家装备绑定诅咒的鞘翅

##### 完美冻结

所有玩家被4x4x4的冰块包裹

##### 越共探头

所有玩家获得发光

##### 笑出强大

所有玩家获得力量2

#### (3).第三阶段——物资争夺阶段（15分钟）

每过3分钟，每个小岛屿生成1个装备箱子，中心岛屿生成8个箱子。

每个小岛屿的箱子中必定包含以下物品：

* TNTx4
* 末影珍珠x3
* 钻石x4
* 附魔台x1+书架x4
* 酿造台+烈焰棒+地狱疣
* 附魔瓶x16
* 铁锭x16
* 抗火药水x1
* 青金石x32

中心岛屿箱子概率包含以下物品（分别计算）：

* 末影珍珠x4(100%)
* 附魔台x1(100%)
* 书架x1(50%)
* 附魔瓶x128(100%)
* 钻石x4(100%)
* 下届合金锭(10%)
* 铁锭x16(20%)
* 浆果x1(100%)
* 箭x4(20%)
* 不死图腾(10%)
* 马凯(10%)
* 三叉戟(10%)
* 烟花x64(20%)
* 红蘑菇+灰蘑菇x10(20%)
* 防火药水

#### (4).第四阶段——游戏决赛阶段（不限时）

地图每秒缩小0.4格，直至游戏结束。在结界外的玩家会直接死亡。

#### (5).游戏结束

决出最后胜利的队伍后，游戏结束。