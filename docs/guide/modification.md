---
title: 魔改内容
---
# 魔改内容

::: tip
这里将介绍服务器所有的修改内容, 你可以与原版进行比对.
:::


## 1.Bukkit Spigot Paper

服务器使用了Paper服务端, 它是Spigot的分支. 而Spigot来源于Bukkit. 所以梦幻之屿将继承以上服务端所有的修改内容.

Spigot与Bukkit对服务端修改较少, 可以忽略, 但Paper影响较大.

你可以在这里找到所有Paper对服务端的修改: https://github.com/PaperMC/Paper/tree/master/Spigot-Server-Patches

## 2.新合成表

服务器为不可获得的方块与物品添加了扩展合成表, 这些合成表经过深思熟虑, 不会影响游戏平衡.

如需查看, 请在游戏中输入 

```
/menu recipe
```

## 3.铁块电梯

将铁块上下放置, 然后站在铁块上按跳跃或下蹲键可传送到另一个铁块上, 没有高度限制.

## 4.皮肤系统

梦幻之屿优先加载 [梦幻之屿皮肤站](https://skin.isletopia.net) 中的皮肤, 
若未设置皮肤, 则加载正版皮肤.

## 5.楼梯座椅

半砖或者楼梯, 右键即可坐下. 坐下后可缓慢恢复生命值. 此功能通常用于合影.

## 6.流浪商人

流浪商人的生成概率是原版的4倍, 每个区的流浪商人独立计算互不影响. 

流浪商人将额外携带以下材料, 价格均为3, 最多交易5次.
* 可可豆
* 紫颂花
* 地狱疣
* 诡异菌
* 绯红菌
* 甜酱果
* 竹子

## 7.死亡不回饱食度

死亡后不会恢复饱食度, 请自行寻找食物.

## 8.爆炸保护

- 苦力怕不会破坏方块.

::: warning 注意
**其他爆炸** 没有任何保护.
:::

## 9.岩浆保护

* 使用空桶右键黑曜石可获得岩浆桶.

* 水无法浇筑岩浆.

* 岩浆无法使用方块填充.

## 10.删除地狱末地

服务器没有地狱和末地, 如有需求, 请自行更换相关生物群系.

## 11.删除恶心生物

凋零, 幻翼, 蝙蝠已被删除.

## 12.传送牌子

在告示牌第一行写下: `[玩家名]` 即可创建传送牌子, 右键可传送到其岛屿.

## 13.传送铁轨

在铁轨上按下 <kbd>L shift</kbd>, 即可传送到铁轨的另一侧.

## 14.袭击小队

流浪商人将有50%的概率被替换成一支灾厄小队.

## 15.守卫者

深海群系中, 鱿鱼将会被替换成守卫者.
