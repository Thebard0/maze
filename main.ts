namespace SpriteKind {
    export const LEVEL2 = SpriteKind.create()
    export const level3 = SpriteKind.create()
    export const Level4 = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Bossplayer = SpriteKind.create()
    export const Cutsence = SpriteKind.create()
}
function Boss_fight () {
    if (Deadmodeon == 0) {
        tiles.setCurrentTilemap(tilemap`level43`)
        Final_boss = sprites.create(img`
            ........cccccccccccc............
            ........cccccccccccc............
            ......cc667777777766cc..........
            ......cc667777777766cc..........
            ....cc7777777777777777cc........
            ....cc7777777777777777cc........
            ..cc66777777777777777766cc......
            ..cc66777777777777777766cc......
            ..cc77cc66666666cc777777cc......
            ..cc77cc66666666cc777777cc......
            ..ff77669966669966777777ff......
            ..ff77669966669966777777ff......
            ..ff77777777777777777777ff......
            ..ff77777777777777777777ff......
            ....ff7777777766cc777766ffcc....
            ....ff7777777766cc777766ffcc....
            ......ffcccccccc777766ff7777cc..
            ......ffcccccccc777766ff7777cc..
            ....cc772277777766ccff77777777cc
            ....cc772277777766ccff77777777cc
            ..cc7777227777ccffcc66777766cccc
            ..cc7777227777ccffcc66777766cccc
            cc111111117766ffcccc666666cc....
            cc111111117766ffcccc666666cc....
            ff11111111116666cc66666666ff....
            ff11111111116666cc66666666ff....
            ff6611111111116666666666ccff....
            ff6611111111116666666666ccff....
            ..ff66111111111111666666ff......
            ..ff66111111111111666666ff......
            ....ccccccccccccccccccff........
            ....ccccccccccccccccccff........
            `, SpriteKind.Boss)
        Final_boss.follow(GOBLIN, 30)
        GOBLIN.setKind(SpriteKind.Bossplayer)
        info.startCountdown(60)
        game.showLongText("The end of the castle is in sight !", DialogLayout.Bottom)
        game.showLongText("But something blocks your way", DialogLayout.Bottom)
        game.showLongText("Stay alive as long as you can, its power will weaken.", DialogLayout.Bottom)
        tiles.placeOnRandomTile(GOBLIN, sprites.dungeon.floorLight2)
        tiles.placeOnRandomTile(Final_boss, sprites.dungeon.doorOpenNorth)
    } else {
        tiles.setCurrentTilemap(tilemap`level27`)
        Final_boss = sprites.create(img`
            ........cccccccccccc............
            ........cccccccccccc............
            ......cc667777777766cc..........
            ......cc667777777766cc..........
            ....cc7777777777777777cc........
            ....cc7777777777777777cc........
            ..cc66777777777777777766cc......
            ..cc66777777777777777766cc......
            ..cc77cc66666666cc777777cc......
            ..cc77cc66666666cc777777cc......
            ..ff77669966669966777777ff......
            ..ff77669966669966777777ff......
            ..ff77777777777777777777ff......
            ..ff77777777777777777777ff......
            ....ff7777777766cc777766ffcc....
            ....ff7777777766cc777766ffcc....
            ......ffcccccccc777766ff7777cc..
            ......ffcccccccc777766ff7777cc..
            ....cc772277777766ccff77777777cc
            ....cc772277777766ccff77777777cc
            ..cc7777227777ccffcc66777766cccc
            ..cc7777227777ccffcc66777766cccc
            cc111111117766ffcccc666666cc....
            cc111111117766ffcccc666666cc....
            ff11111111116666cc66666666ff....
            ff11111111116666cc66666666ff....
            ff6611111111116666666666ccff....
            ff6611111111116666666666ccff....
            ..ff66111111111111666666ff......
            ..ff66111111111111666666ff......
            ....ccccccccccccccccccff........
            ....ccccccccccccccccccff........
            `, SpriteKind.Boss)
        Final_boss.follow(GOBLIN, 30)
        GOBLIN.setKind(SpriteKind.Bossplayer)
        info.startCountdown(60)
        game.showLongText("The end of the castle is in sight !", DialogLayout.Bottom)
        game.showLongText("But something blocks your way", DialogLayout.Bottom)
        game.showLongText("Stay alive as long as you can, its power will weaken.", DialogLayout.Bottom)
        tiles.placeOnRandomTile(Final_boss, sprites.dungeon.doorOpenNorth)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    if (Deadmodeon == 0) {
        tiles.setCurrentTilemap(tilemap`level39`)
        GOBLIN.setKind(SpriteKind.LEVEL2)
        game.showLongText("Level Two", DialogLayout.Bottom)
        info.startCountdown(10)
    } else {
        tiles.setCurrentTilemap(tilemap`level2`)
        GOBLIN.setKind(SpriteKind.LEVEL2)
        game.showLongText("Level Two", DialogLayout.Bottom)
        info.startCountdown(7.5)
    }
})
scene.onOverlapTile(SpriteKind.Level4, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    Boss_fight()
})
scene.onOverlapTile(SpriteKind.LEVEL2, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    maze()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GOBLIN.kind() == SpriteKind.Cutsence) {
        GOBLIN.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Render.jump(GOBLIN)
    }
})
sprites.onOverlap(SpriteKind.LEVEL2, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Level4, assets.tile`transparency16`, function (sprite, location) {
    tileUtil.coverAllTiles(sprites.dungeon.floorLight2, assets.tile`transparency16`)
})
controller.combos.attachCombo("B,b,b", function () {
    GOBLIN.setFlag(SpriteFlag.GhostThroughSprites, true)
    GOBLIN.setFlag(SpriteFlag.GhostThroughWalls, true)
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Bossplayer, function (sprite, otherSprite) {
    game.over(false, effects.hearts)
})
info.onCountdownEnd(function () {
    Endcutsence()
})
sprites.onOverlap(SpriteKind.Level4, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Bossplayer, sprites.dungeon.floorLight2, function (sprite, location) {
    info.startCountdown(10)
})
function Maze2 () {
    if (Deadmodeon == 0) {
        GOBLIN.setKind(SpriteKind.Level4)
        tiles.setCurrentTilemap(tilemap`level37`)
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature2 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature3 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5.follow(GOBLIN, 40)
        creature2.follow(GOBLIN, 40)
        creature3.follow(GOBLIN, 40)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature2, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature3, sprites.dungeon.doorClosedNorth)
        game.showLongText("Level 4", DialogLayout.Bottom)
        info.startCountdown(60)
        tiles.placeOnRandomTile(GOBLIN, sprites.dungeon.floorLight2)
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        GOBLIN.setKind(SpriteKind.Level4)
        tiles.setCurrentTilemap(tilemap`level24`)
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature2 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature3 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5.follow(GOBLIN, 45)
        creature2.follow(GOBLIN, 45)
        creature3.follow(GOBLIN, 45)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature2, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature3, sprites.dungeon.doorClosedNorth)
        game.showLongText("Level 4, dead mode", DialogLayout.Bottom)
        info.startCountdown(40)
        tiles.placeOnRandomTile(GOBLIN, sprites.dungeon.floorLight2)
    }
}
scene.onOverlapTile(SpriteKind.level3, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    Maze2()
})
sprites.onOverlap(SpriteKind.level3, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.hearts)
})
function Endcutsence () {
    if (GOBLIN.kind() == SpriteKind.Bossplayer) {
        if (Deadmodeon == 1) {
            game.over(true, effects.hearts)
        } else {
            GOBLIN.setKind(SpriteKind.Cutsence)
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                9999999999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
                999999999999999999999999999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
                999999999999999999999999666999999999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
                99999999999999999999999996699999999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                99999999999999999999999996699699999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
                9999999999999999966999996699999999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
                9999999999999999969999999999999999999dbcccccbb999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
                699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb9999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
                999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb9999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
                696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb6696999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
                69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9dbcbb6699999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
                6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6dbbcc6699999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
                9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
                9999999999999999999699999999999999bcccccccccccccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
                999999996699999699999669999999999999cccccccccccc666666bccbcccccccccbb66966666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
                999999999969999669966699999999999999ccbbbbbbcccc666666cccbbbbbbcccccc66966999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
                999999999999669996966996699999999999bbcbbccbbbbb6666666bbbcbbbccbbbb66666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
                999996699696669996999999969999999999bbcbbbbbbbbb66666666bccccccccbb666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
                666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc6666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
                666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc6666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
                6666666666666666666669699969999999999cccccccccc966666666dcbbbccbbc6666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
                66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
                666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
                666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
                b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
                b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
                bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
                444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
                44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
                444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
                4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
                4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
                4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
                4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
                4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
                4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
                4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
                4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
                44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
                44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
                44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
                44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
                6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
                4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
                4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
                4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
                4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
                444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
                fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
                effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
                beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
                dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
                ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
                efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
                ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
                ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
                ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
                fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
                ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
                fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
                fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
                ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
                fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
                ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
                bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
                bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
                bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
                bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
                bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
                bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
                bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
                ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
                ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
                cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
                cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
                bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
                bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
                bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
                bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
                bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
                bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
                cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
                bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
                bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
                ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
                cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
                cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
                ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
                bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
                bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
                cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
                bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
                ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
                bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
                dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
                d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
                ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
                4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
                dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
                `)
            timer.after(500, function () {
                scene.setBackgroundImage(img`
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
                    9999999999999999999999996669999999999999999999999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
                    9999999999999999999999999669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                    9999999999999999999999999669969999999999999999999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
                    9999999999999999966999996699999999999999999999999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
                    9999999999999999969999999999999999999999999999999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999999669699969999966
                    6999699999999999999999999999996666999999999999969999999999999999999999999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
                    999999999999999999999999999999666696d9999999999b9999999999999999999999999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
                    696999999999999999969999999699999996dccccccc999b99969dcccb9ddcc9ddc999999999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
                    69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9d99999999999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
                    6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6999999999999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
                    9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccb9999666666669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
                    999999999999999999969999999999999999999cccccccccbb6666bcbbcccb99966666666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
                    999999996699999699999669999999999999999ccccccccc666666bccbccc9996666666666666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
                    999999999969999669966699999999999999999bbbbbcccc666666cccbbb66666666666666699996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
                    999999999999669996966999999999999999999bbccbbbbb6666666bbbcb6666666666666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
                    99999669969666999699999999999999999999cbbbbbbbbb66666666bccc6666666666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
                    6669966666666999669999999999999999999bbbcccbbbbb66666666dcc66666666666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
                    666666666666999666999999999999999999bccccccccccb66666666dcc66666666666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
                    6666666666666666669999999999999999999cccccccccc966666666dcb66666666666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
                    66666666666666666999999999999999999696bcccccccb6f6666666ccbb666666666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
                    666666666666666669999999999999999999bb9ccbbbbbfbbddddb666bb66666666666666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
                    66666666666666666999999999999999999b64bccbbbbccdddbbbbbbbcb66666666666666666666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
                    b6666666b6b6b6666999999999999999999b64bbbbbbbccbbcbbcbbcccb66666666666666666666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
                    b6666666b6b6bb66b999999999999999999b444bbcbccbcbbbbbcbbbccbb666666666666bb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
                    bb6b66bb64bb64bb66d9999999bb9999999b444bccbbbccbbcccbbbbccbb66666c44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
                    444466bb44464446b6b9999999bc9999999c444bbbbbbcccccccccbbbcbbbb666c444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
                    44b6b4b4b4b6b4444b49999999ccc99999cc44bcbbbbbcccc4b4cccbbbbcb666cc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
                    444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbb66666444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
                    4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc44444444cbcbbb666664444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
                    4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc44444444bbccbbcb666ff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
                    4444466b44444466644444cccccccccccddddbbccbbbbcc44444444bbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
                    4444446644444444464464cccccccccccddbbbbccbbbbcc444444fdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
                    4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44444fdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
                    4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd44444444bccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
                    4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbcc4444c444cccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
                    4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcb44444444ccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
                    44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcb44444bbcbbcccccccddddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
                    44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcb44444ccccbccbbbbcddddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
                    44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbb444bbcbbbbbbcbddddddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
                    44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbb444bbbcccbbccbddddddddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
                    6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccdddddddddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
                    4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbddddddfddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
                    4444ddddb4ddddddfddfd4c444bbcc444bbbbbbbbbbbcccbbbbbbcccccccbcddddddddddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
                    4444deedebd4434efffdd44444b444444bbbcccccbccccccbbbbbbbcccccbbdddcdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
                    4444befeebe4d4beff44444444b444444bbccbbbbcccbcbccbbbbbbcccccbddddcddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
                    444eeeefeeeed4e4ff444444444444444444bbbbccbcbcbcccbccbbcccccbdddddd4dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
                    fffeeffffeeeeeffffeffe44444444444444ccbcccbcbcbccccccbbcccccbddddddddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
                    effeffedeeffffffffffff44444444444444bbbcccbcbcbcbccbcbbbcccddddddddddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
                    beffffedffffffffffffff444444444444444bccbcbcbcbcbccbbbcbbbbddddddddddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
                    dfffffffffffffffffffffccb444444444444bccbcbcbcbcbccbbbccccbddddddddddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
                    ffffffffffffffffffffffccb444444444444bccbcbcbcbcbccbbbbbccbbddddddddddfdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
                    efffffffffffffffffffffccbcbb444444bbbcccbcbcbcbcbcccbbbbbbbbddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
                    ffffffffffffffffffffffccbccb444444bcbcccbcbcbcbcbcccbbbbbcccdddbbdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
                    ffffffffffffffffffffffccccbb444bbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
                    ffffffffffffffffffffffccccbb444cbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
                    fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
                    ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
                    fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
                    fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
                    ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
                    fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
                    ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
                    bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
                    bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
                    bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
                    bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
                    bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
                    bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
                    bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
                    ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
                    ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
                    cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
                    cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
                    bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
                    bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
                    bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
                    bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
                    bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
                    bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
                    cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
                    bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
                    bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
                    ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
                    cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
                    cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
                    ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
                    bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
                    bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
                    cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
                    bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
                    ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
                    bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
                    dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
                    d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
                    ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
                    4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
                    dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
                    `)
                game.showLongText("You have killed the tyrant of the land", DialogLayout.Bottom)
                timer.after(500, function () {
                    scene.setBackgroundImage(img`
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
                        9999999999999999999999996669999999999999999999999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
                        9999999999999999999999999669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                        9999999999999999999999999669969999999999999999999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
                        9999999999999999966999996699999999999999999999999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
                        9999999999999999969999999999999999999999999999999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999999669699969999966
                        6999699999999999999999999999996666999999999999969999999999999999999999999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
                        999999999999999999999999999999666696d9999999999b9999999999999999999999999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
                        696999999999999999969999999699999996dccccccc999b99969dcccb9ddcc9ddc999999999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
                        69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9d99999999999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
                        6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6999999999999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
                        9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccb9999666666669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
                        999999999999999999969999999999999999999cccccccccbb6666bcbbcccb99966666666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
                        999999996699999699999669999999999999999ccccccccc666666bccbccc9996666666666666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
                        999999999969999669966699999999999999999fffffcccc666666cccbbb66666666666666699996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
                        999999999999669996966999999999999999999ffccfffff6666666bbbcb6666666666666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
                        99999669969666999699999999999999999999cfffffffff66666666bccc6666666666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
                        6669966666666999669999999999999999999fffcccfffff66666666dcc66666666666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
                        666666666666999666999999999999999999bccccccccccf66666666dcc66666666666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
                        6666666666666666669999999999999999999cccccccccc966666666dcf66666666666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
                        66666666666666666999999999999999999696bcccccccb6f6666666ccff666666666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
                        666666666666666669999999999999999999bb9ccffffffbbddddf666ff66666666666666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
                        66666666666666666999999999999999999b64fccffffccdddfffffffcf66666666666666666666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
                        b6666666b6b6b6666999999999999999999b64fffffffccffcffcffcccf66666666666666666666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
                        b6666666b6b6bb66b999999999999999999b444ffcfccbcfffffcfffccff666666666666bb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
                        bb6b66bb64bb64bb66d9999999bb9999999b444fccfffccffcccffffccff66666c44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
                        444466bb44464446b6b9999999bc9999999c444ffffffcccccccccfffcffff666c444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
                        44b6b4b4b4b6b4444b49999999ccc99999cc44bcfffffcccc4b4cccffffcf666cc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
                        444444b4444444444464cbbbbbbcbbbbbbcb444ccffffccc44f44ecffcfff66666444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
                        4444446444444444446bccbccbbccbbbccc4ff4ccfccfcc44444444cfcfff666664444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
                        4444b66b4444446664644ccbbbbbbbbccc4ff46ccffffcc44444444ffccffcf666ff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
                        4444466b44444466644444cccccccccccddddbbccffffcc44444444ffccffcffccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
                        4444446644444444464464cccccccccccddbbbbccffffcc444444fdffccfffffcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
                        4444444444444f44444466ddffffffffcffccccccfffffcd44444fdffccfffffcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
                        4444464444444f444d4444dfffccffffcfcccccccccffccd44444444fccccccfccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
                        4444464444444ff44ff4b4dccfccffcccfcc44ccffffffcc4444c444cccbcfffccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
                        4444446444444ffddfd344dfcfffffcfffcc4cccffccffcf44444444ccbbbcfcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
                        44444444444444f3bf44ffdfffffcffffffccfffcfccffcf44444bbcbbcccccccddddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
                        44444444ddd444ff4f33ffcfffffccffccfccfffcfffffcf44444ccccbccbbbbcddddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
                        44444444dddddddfdf44f4ffccffffffccffffffffffffffff444ffcbbbbbbcbddddddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
                        44444444ddddddd4ff4ff4fffffffcccffffffffccffcccfff444fffcccbbccbddddddddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
                        6444444ddd3dd44dff6ff4fffcffcccccffcccffccffccfffcccfffcccccbccdddddddddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
                        4344ddddddddd4ddff4fddcffcffccbccfffcffffffffffffcccfccccbccbbbddddddfddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
                        4444ddddb4ddddddfddfd4c444ffcc444ffffffffffffffffffffcccccccbcddddddddddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
                        4444deedebd4434efffdd44444f444444fffcccccffffffffffffffcccccbbdddcdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
                        4444befeebe4d4beff44444444f444444ffccbbbbfffbfbffffffffcccccbddddcddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
                        444eeeefeeeed4e4ff444444444444444444bbbbffbfbfbffffffffcccccbdddddd4dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
                        fffeeffffeeeeeffffeffe44444444444444ccbfffbfbfbffffffffcccccbddddddddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
                        effeffedeeffffffffffff44444444444444bbbfffbfbfbfbfffffffcccddddddddddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
                        beffffedffffffffffffff444444444444444bffbfbfbfbfbfffffcffffddddddddddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
                        dfffffffffffffffffffffccb444444444444bffbfbfbfbfbfffffccccfddddddddddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
                        ffffffffffffffffffffffccb444444444444bffbfbfbfbfbfffffffccffddddddddddfdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
                        efffffffffffffffffffffccbcff444444bbbfffbfbfbfbfbfffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
                        ffffffffffffffffffffffccbccf444444bfbfffbfbfbfbfbffffffffcccdddffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
                        ffffffffffffffffffffffccccff444bbbffffffbfbfbfbfbffffccfffccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
                        ffffffffffffffffffffffccccff444cbbffffffbfbfbfbfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
                        fffffffffffffffffffffcccccfffffcccffffffbfbfbfbfbfffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfccccbbbbccccbcccc
                        ffffffffffffffffffffffccccffccffccffffffbfbfbfbfbfffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcccbbbbbcccbbccc
                        fffffffffffffffffffffbccffccffffffffffffbfbfbfbfbfffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccfffffccccbbccbbbcc
                        fffffffffffffffffffffbcfffcfffffffffffffbfbfbfbfbfffbffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffcccccffffffccbbccbbccc
                        fffffffffffffffffffffffffffccfcfffccffffbfbfbfbfbfffffffffcccfffffffffbbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdffcccccffffffcccccbbbccc
                        fffffffffcfffffffffffffffffccfccfcccffffbfbfbfbfbffffffffcccffffffffffffbbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffcdcfffcccffffffffcccbbbbbcc
                        ddcccfffffffffffffffffbfffffcfffffffffffbfbfbfbfbfffffffffffffffffffffffbbfffffffffffbbcfcffffffffffffffffffffffffffffffffffffffffffcdfffffcccffffffccbccccbbbbc
                        bdddfcbfffffffffffffffbbbfffffffffffffffbfbfbfbfbffffffffffffffffffffffffbfbbfffffffbbbffbfcffffffffffffffffffffffffffffffffffffffffcdfffcccccffffffcfcccccbbbbc
                        bbbddbbcffffffffffffffbbffffffffffffffffbfbfbfbfbfffffcffffffffffffffffffffffffffffffffffbbbbfffffffffffffffffffffffffffffffffffffffcfffcfccccfffffccfccccccbbbc
                        bbbbdbbbbfffffffbffbffffffffffffffbfffffbfbfbfbfbfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfccccffffccffcccbbccccc
                        bbbbffffffffffbbbffffffffffffffffffffbbbbbbbbbbbbfffffcffffffffffffbfffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffccffffcffcccccfffccfccccbbbccbc
                        bbbbbbbbffffffbbfffffbfffffffffffffbbfffffffffffbfffffffffffffffffffffffbfbffffffffffffffffffffffffffffffccccccffffffffffffffffcfccccfffffffcccffccffccbbbbbbccc
                        bbbffffffffffffffffbbbbbfffffffffffbbffffffffffffffffffffffffffffffffffffbfffffffffffffbffffffffffffffcfffffffcccccffffffffcfcccfccccccfcccccccfccffffcbbbbbcccb
                        bbffffffffffffffffbbffbbbfffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffdfffcfcccffcffffffccccccffcccccfffffffccbbbbcccbb
                        ccfddddffffffffffffbfffffffbffbfbfffffffffffffffbfffffffffbbfffffffffbffffffffffffffffffffbbbfffffffffcccccccfdffffcccccccfffffffffcccffffffffffffffccbbbbbbbbbb
                        ddffffccffffffffffffffffffffffffbfffffffffffffffbfffffffffbfffffffffffffffffffffffffffffffffffffffffffffcccccfffcccccccfccccffffffcccccffffffffffffffcccbbbbbbbb
                        cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbffffffffffffffffffffcccccccccffffffffccffffffccccccccccffffffffffcccccbbbbb
                        cfffccccccccccccffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffbbfffbfffffffffffffffffffffcccccffffffffffffffffffffffcccccccccccfffffffcccccccbbbb
                        ffffccccccccfffffffffffffffffffffffffffffbbbfffffbfffffffffffffbbffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffcccccfffffccccccccbbcc
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbffffffffffffbbfffffffffffffffffffffffffffffffccccfffccfffffffffffffffffffffffffffffffcfffffcccbcc
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbbfffbfffffffffffbccccccfcccccccccccffffffffffffffffffffffffffffffcccffccccccfc
                        fffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffbffffbbbbbcccccccbbccccccffffffffffffffffbfffffffffffffffffccffcccffffc
                        fffcdddddfffffffffffffffffbbbbbffffbbfbffffffffffffbfffffffffffffffffffffbfbbbbbbbfffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffdcffffffffffffffffffffbbffffffffffffffffffffffffffffffbbbbbbfffbfffffffffffffbfffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        cddfccccffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffff
                        cdcccfcccffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        dcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        dffffffffffffffffffffffffffffffffffffbbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffffffff
                        fffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccc
                        fffffffccfffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccfffccccccccccccccc
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffccfffffffffffff
                        ffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccfffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffffffffffffffffffffcccccccfffffffffffffffffffffffffffffffffffffffffffff
                        fffcccccffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc
                        ccccccccccccffffffffffffffffdddfffffffffffffffffffccccccccfffffffcfffffffffcccffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
                        cccccccccccccccccccccfdddddccccccccccfffffffffccccccccbbbcccccccccffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccbccc
                        cccccccccbbbbbcccccccccccccccccccccfffffffcccccccffcccccccccccffffffcccccccccccccccffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffccfccccc
                        ccccccccccccbbccccccccccccfffffffffffffccccccfffffccccccfffffffffcfccccccfffffffffffffffffffffffffffffffffcccccccccccccffffffffffffffffffffffffffffffffffffccccc
                        bcccccccccccccccccccccccfffffffffffccccccffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffcccccccbbbcccccccfffffcccfffffffffffffffffffffffcccccccccc
                        bccccccccccccccccffffffffffffffffeccccbbdffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffcccccccccccccccccccccccccccffffffcccccccffcccccccccccccbbbbb
                        cccccccccccffffffffffffffffffffffeeccbbd4fddffdfff3f444ddd444fff344bbddbbcf44fff44ff3444f444444f4fe44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
                        bddddcffffffff444f4fff44ff4f4ff4444dd44d44ddf4d3fddddddddd444ddddd44ddddddf33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
                        ddbbdd44f44f444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
                        bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
                        dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
                        d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
                        ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
                        4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
                        dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
                        `)
                    game.showLongText("The castle rotted away.. ", DialogLayout.Bottom)
                    scene.setBackgroundImage(img`
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        .............................................ccccccc6666667777777777777777777777777776666666ccccccc.............................................................
                        .............................................ccccccc6666667777777777777777777777777776666666ccccccc.............................................................
                        .............................................ccccccc6666667777777777777777777777777776666666ccccccc.............................................................
                        .............................................ccccccc6666667777777777777777777777777776666666ccccccc.............................................................
                        .............................................ccccccc6666667777777777777777777777777776666666ccccccc.............................................................
                        .............................................ccccccc6666667777777777777777777777777776666666ccccccc.............................................................
                        .............................................ccccccc6666667777777777777777777777777776666666ccccccc.............................................................
                        ......................................ccccccc777777777777777777777777777777777777777777777777777777ccccccc......................................................
                        ......................................ccccccc777777777777777777777777777777777777777777777777777777ccccccc......................................................
                        ......................................ccccccc777777777777777777777777777777777777777777777777777777ccccccc......................................................
                        ......................................ccccccc777777777777777777777777777777777777777777777777777777ccccccc......................................................
                        ......................................ccccccc777777777777777777777777777777777777777777777777777777ccccccc......................................................
                        ......................................ccccccc777777777777777777777777777777777777777777777777777777ccccccc......................................................
                        ......................................ccccccc777777777777777777777777777777777777777777777777777777ccccccc......................................................
                        ...............................ccccccc66666667777777777777777777777777777777777777777777777777777776666666cccccc................................................
                        ...............................ccccccc66666667777777777777777777777777777777777777777777777777777776666666cccccc................................................
                        ...............................ccccccc66666667777777777777777777777777777777777777777777777777777776666666cccccc................................................
                        ...............................ccccccc66666667777777777777777777777777777777777777777777777777777776666666cccccc................................................
                        ...............................ccccccc66666667777777777777777777777777777777777777777777777777777776666666cccccc................................................
                        ...............................ccccccc66666667777777777777777777777777777777777777777777777777777776666666cccccc................................................
                        ...............................ccccccc66666667777777777777777777777777777777777777777777777777777776666666cccccc................................................
                        ...............................ccccccc7777777ccccccc666666666666666666666666666cccccc777777777777777777777cccccc................................................
                        ...............................ccccccc7777777ccccccc666666666666666666666666666cccccc777777777777777777777cccccc................................................
                        ...............................ccccccc7777777ccccccc666666666666666666666666666cccccc777777777777777777777cccccc................................................
                        ...............................ccccccc7777777ccccccc666666666666666666666666666cccccc777777777777777777777cccccc................................................
                        ...............................ccccccc7777777ccccccc666666666666666666666666666cccccc777777777777777777777cccccc................................................
                        ...............................ccccccc7777777ccccccc666666666666666666666666666cccccc777777777777777777777cccccc................................................
                        ...............................ccccccc7777777ccccccc666666666666666666666666666cccccc777777777777777777777cccccc................................................
                        ...............................fffffff77777776666666ffffff66666666666666fffffff666666777777777777777777777ffffff................................................
                        ...............................fffffff77777776666666ffffff66666666666666fffffff666666777777777777777777777ffffff................................................
                        ...............................fffffff77777776666666ffffff66666666666666fffffff666666777777777777777777777ffffff................................................
                        ...............................fffffff77777776666666ffffff66666666666666fffffff666666777777777777777777777ffffff................................................
                        ...............................fffffff77777776666666ffffff66666666666666fffffff666666777777777777777777777ffffff................................................
                        ...............................fffffff77777776666666ffffff66666666666666fffffff666666777777777777777777777ffffff................................................
                        ...............................fffffff77777776666666ffffff66666666666666fffffff666666777777777777777777777ffffff................................................
                        ...............................fffffff77777777777777777777777777777777777777777777777777777777777777777777ffffff................................................
                        ...............................fffffff77777777777777777777777777777777777777777777777777777777777777777777ffffff................................................
                        ...............................fffffff77777777777777777777777777777777777777777777777777777777777777777777ffffff................................................
                        ...............................fffffff77777777777777777777777777777777777777777777777777777777777777777777ffffff................................................
                        ...............................fffffff77777777777777777777777777777777777777777777777777777777777777777777ffffff................................................
                        ...............................fffffff77777777777777777777777777777777777777777777777777777777777777777777ffffff................................................
                        ...............................fffffff77777777777777777777777777777777777777777777777777777777777777777777ffffff................................................
                        ......................................fffffff7777777777777777777777777776666666cccccc777777777777776666666ffffffccccccc.........................................
                        ......................................fffffff7777777777777777777777777776666666cccccc777777777777776666666ffffffccccccc.........................................
                        ......................................fffffff7777777777777777777777777776666666cccccc777777777777776666666ffffffccccccc.........................................
                        ......................................fffffff7777777777777777777777777776666666cccccc777777777777776666666ffffffccccccc.........................................
                        ......................................fffffff7777777777777777777777777776666666cccccc777777777777776666666ffffffccccccc.........................................
                        ......................................fffffff7777777777777777777777777776666666cccccc777777777777776666666ffffffccccccc.........................................
                        .............................................fffffffccccccccccccccccccccccccccc77777777777776666666fffffff7777777777777ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc77777777777776666666fffffff7777777777777ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc77777777777776666666fffffff7777777777777ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc77777777777776666666fffffff7777777777777ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc77777777777776666666fffffff7777777777777ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc77777777777776666666fffffff7777777777777ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc77777777777776666666fffffff7777777777777ccccccc..................................
                        ......................................ccccccc7777777222222777777777777777777777666666cccccccfffffff777777777777777777777777777ccccccc...........................
                        ......................................ccccccc7777777222222777777777777777777777666666cccccccfffffff777777777777777777777777777ccccccc...........................
                        ......................................ccccccc7777777222222777777777777777777777666666cccccccfffffff777777777777777777777777777ccccccc...........................
                        ......................................ccccccc7777777222222777777777777777777777666666cccccccfffffff777777777777777777777777777ccccccc...........................
                        ......................................ccccccc7777777222222777777777777777777777666666cccccccfffffff777777777777777777777777777ccccccc...........................
                        ......................................ccccccc7777777222222777777777777777777777666666cccccccfffffff777777777777777777777777777ccccccc...........................
                        ......................................ccccccc7777777222222777777777777777777777666666cccccccfffffff777777777777777777777777777ccccccc...........................
                        ...............................ccccccc7777777777777722222277777777777777cccccccffffffccccccc666666677777777777776666666cccccccccccccc...........................
                        ...............................ccccccc7777777777777722222277777777777777cccccccffffffccccccc666666677777777777776666666cccccccccccccc...........................
                        ...............................ccccccc7777777777777722222277777777777777cccccccffffffccccccc666666677777777777776666666cccccccccccccc...........................
                        ...............................ccccccc7777777777777722222277777777777777cccccccffffffccccccc666666677777777777776666666cccccccccccccc...........................
                        ...............................ccccccc7777777777777722222277777777777777cccccccffffffccccccc666666677777777777776666666cccccccccccccc...........................
                        ...............................ccccccc7777777777777722222277777777777777cccccccffffffccccccc666666677777777777776666666cccccccccccccc...........................
                        ...............................ccccccc7777777777777722222277777777777777cccccccffffffccccccc666666677777777777776666666cccccccccccccc...........................
                        ........................ccccccc11111111111111111111111111177777776666666fffffffccccccccccccc66666666666666666666ccccccc.........................................
                        ........................ccccccc11111111111111111111111111177777776666666fffffffccccccccccccc66666666666666666666ccccccc.........................................
                        ........................ccccccc11111111111111111111111111177777776666666fffffffccccccccccccc66666666666666666666ccccccc.........................................
                        ........................ccccccc11111111111111111111111111177777776666666fffffffccccccccccccc66666666666666666666ccccccc.........................................
                        ........................ccccccc11111111111111111111111111177777776666666fffffffccccccccccccc66666666666666666666ccccccc.........................................
                        ........................ccccccc11111111111111111111111111177777776666666fffffffccccccccccccc66666666666666666666ccccccc.........................................
                        ........................ccccccc11111111111111111111111111177777776666666fffffffccccccccccccc66666666666666666666ccccccc.........................................
                        ........................fffffff111111111111111111111111111111111166666666666666cccccc666666666666666666666666666fffffff.........................................
                        ........................fffffff111111111111111111111111111111111166666666666666cccccc666666666666666666666666666fffffff.........................................
                        ........................fffffff111111111111111111111111111111111166666666666666cccccc666666666666666666666666666fffffff.........................................
                        ........................fffffff111111111111111111111111111111111166666666666666cccccc666666666666666666666666666fffffff.........................................
                        ........................fffffff111111111111111111111111111111111166666666666666cccccc666666666666666666666666666fffffff.........................................
                        ........................fffffff111111111111111111111111111111111166666666666666cccccc666666666666666666666666666fffffff.........................................
                        ........................fffffff111111111111111111111111111111111166666666666666cccccc666666666666666666666666666fffffff.........................................
                        ........................fffffff666666611111111111111111111111111111111116666666666666666666666666666666666ccccccfffffff.........................................
                        ........................fffffff666666611111111111111111111111111111111116666666666666666666666666666666666ccccccfffffff.........................................
                        ........................fffffff666666611111111111111111111111111111111116666666666666666666666666666666666ccccccfffffff.........................................
                        ........................fffffff666666611111111111111111111111111111111116666666666666666666666666666666666ccccccfffffff.........................................
                        ........................fffffff666666611111111111111111111111111111111116666666666666666666666666666666666ccccccfffffff.........................................
                        ........................fffffff666666611111111111111111111111111111111116666666666666666666666666666666666ccccccfffffff.........................................
                        ........................fffffff666666611111111111111111111111111111111116666666666666666666666666666666666ccccccfffffff.........................................
                        ...............................fffffff66666661111111111111111111111111111111111111111666666666666666666666ffffff................................................
                        ...............................fffffff66666661111111111111111111111111111111111111111666666666666666666666ffffff................................................
                        ...............................fffffff66666661111111111111111111111111111111111111111666666666666666666666ffffff................................................
                        ...............................fffffff66666661111111111111111111111111111111111111111666666666666666666666ffffff................................................
                        ...............................fffffff66666661111111111111111111111111111111111111111666666666666666666666ffffff................................................
                        ...............................fffffff66666661111111111111111111111111111111111111111666666666666666666666ffffff................................................
                        ...............................fffffff66666661111111111111111111111111111111111111111666666666666666666666ffffff................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        `)
                    game.showLongText("The Snakes died", DialogLayout.Bottom)
                    scene.setBackgroundImage(img`
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        ....................................................cccccccccccccccccccccccccccccccccccccccc....................................................................
                        .............................................ccccccc8888881111111111111111111111111118888888ccccccc.............................................................
                        .............................................ccccccc8888881111111111111111111111111118888888ccccccc.............................................................
                        .............................................ccccccc8888881111111111111111111111111118888888ccccccc.............................................................
                        .............................................ccccccc8888881111111111111111111111111118888888ccccccc.............................................................
                        .............................................ccccccc8888881111111111111111111111111118888888ccccccc.............................................................
                        .............................................ccccccc8888881111111111111111111111111118888888ccccccc.............................................................
                        .............................................ccccccc8888881111111111111111111111111118888888ccccccc.............................................................
                        ......................................ccccccc111111111111111111111111111111111111111111111111111111ccccccc......................................................
                        ......................................ccccccc111111111111111111111111111111111111111111111111111111ccccccc......................................................
                        ......................................ccccccc111111111111111111111111111111111111111111111111111111ccccccc......................................................
                        ......................................ccccccc111111111111111111111111111111111111111111111111111111ccccccc......................................................
                        ......................................ccccccc111111111111111111111111111111111111111111111111111111ccccccc......................................................
                        ......................................ccccccc111111111111111111111111111111111111111111111111111111ccccccc......................................................
                        ......................................ccccccc111111111111111111111111111111111111111111111111111111ccccccc......................................................
                        ...............................ccccccc88888881111111111111111111111111111111111111111111111111111118888888cccccc................................................
                        ...............................ccccccc88888881111111111111111111111111111111111111111111111111111118888888cccccc................................................
                        ...............................ccccccc88888881111111111111111111111111111111111111111111111111111118888888cccccc................................................
                        ...............................ccccccc88888881111111111111111111111111111111111111111111111111111118888888cccccc................................................
                        ...............................ccccccc88888881111111111111111111111111111111111111111111111111111118888888cccccc................................................
                        ...............................ccccccc88888881111111111111111111111111111111111111111111111111111118888888cccccc................................................
                        ...............................ccccccc88888881111111111111111111111111111111111111111111111111111118888888cccccc................................................
                        ...............................ccccccc1111111ccccccc888888888888888888888888888cccccc111111111111111111111cccccc................................................
                        ...............................ccccccc1111111ccccccc888888888888888888888888888cccccc111111111111111111111cccccc................................................
                        ...............................ccccccc1111111ccccccc888888888888888888888888888cccccc111111111111111111111cccccc................................................
                        ...............................ccccccc1111111ccccccc888888888888888888888888888cccccc111111111111111111111cccccc................................................
                        ...............................ccccccc1111111ccccccc888888888888888888888888888cccccc111111111111111111111cccccc................................................
                        ...............................ccccccc1111111ccccccc888888888888888888888888888cccccc111111111111111111111cccccc................................................
                        ...............................ccccccc1111111ccccccc888888888888888888888888888cccccc111111111111111111111cccccc................................................
                        ...............................fffffff11111118888888ffffff88888888888888fffffff888888111111111111111111111ffffff................................................
                        ...............................fffffff11111118888888ffffff88888888888888fffffff888888111111111111111111111ffffff................................................
                        ...............................fffffff11111118888888ffffff88888888888888fffffff888888111111111111111111111ffffff................................................
                        ...............................fffffff11111118888888ffffff88888888888888fffffff888888111111111111111111111ffffff................................................
                        ...............................fffffff11111118888888ffffff88888888888888fffffff888888111111111111111111111ffffff................................................
                        ...............................fffffff11111118888888ffffff88888888888888fffffff888888111111111111111111111ffffff................................................
                        ...............................fffffff11111118888888ffffff88888888888888fffffff888888111111111111111111111ffffff................................................
                        ...............................fffffff11111111111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff11111111111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff11111111111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff11111111111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff11111111111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff11111111111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff11111111111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ......................................fffffff1111111111111111111111111118888888cccccc111111111111118888888ffffffccccccc.........................................
                        ......................................fffffff1111111111111111111111111118888888cccccc111111111111118888888ffffffccccccc.........................................
                        ......................................fffffff1111111111111111111111111118888888cccccc111111111111118888888ffffffccccccc.........................................
                        ......................................fffffff1111111111111111111111111118888888cccccc111111111111118888888ffffffccccccc.........................................
                        ......................................fffffff1111111111111111111111111118888888cccccc111111111111118888888ffffffccccccc.........................................
                        ......................................fffffff1111111111111111111111111118888888cccccc111111111111118888888ffffffccccccc.........................................
                        .............................................fffffffccccccccccccccccccccccccccc11111111111118888888fffffff1111111111111ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc11111111111118888888fffffff1111111111111ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc11111111111118888888fffffff1111111111111ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc11111111111118888888fffffff1111111111111ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc11111111111118888888fffffff1111111111111ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc11111111111118888888fffffff1111111111111ccccccc..................................
                        .............................................fffffffccccccccccccccccccccccccccc11111111111118888888fffffff1111111111111ccccccc..................................
                        ......................................ccccccc1111111222222111111111111111111111888888cccccccfffffff111111111111111111111111111ccccccc...........................
                        ......................................ccccccc1111111222222111111111111111111111888888cccccccfffffff111111111111111111111111111ccccccc...........................
                        ......................................ccccccc1111111222222111111111111111111111888888cccccccfffffff111111111111111111111111111ccccccc...........................
                        ......................................ccccccc1111111222222111111111111111111111888888cccccccfffffff111111111111111111111111111ccccccc...........................
                        ......................................ccccccc1111111222222111111111111111111111888888cccccccfffffff111111111111111111111111111ccccccc...........................
                        ......................................ccccccc1111111222222111111111111111111111888888cccccccfffffff111111111111111111111111111ccccccc...........................
                        ......................................ccccccc1111111222222111111111111111111111888888cccccccfffffff111111111111111111111111111ccccccc...........................
                        ...............................ccccccc1111111111111122222211111111111111cccccccffffffccccccc111111111111111111118888888cccccccccccccc...........................
                        ...............................ccccccc1111111111111122222211111111111111cccccccffffffccccccc111111111111111111118888888cccccccccccccc...........................
                        ...............................ccccccc1111111111111122222211111111111111cccccccffffffccccccc111111111111111111118888888cccccccccccccc...........................
                        ...............................ccccccc1111111111111122222211111111111111cccccccffffffccccccc111111111111111111118888888cccccccccccccc...........................
                        ...............................ccccccc1111111111111122222211111111111111cccccccffffffccccccc111111111111111111118888888cccccccccccccc...........................
                        ...............................ccccccc1111111111111122222211111111111111cccccccffffffccccccc111111111111111111118888888cccccccccccccc...........................
                        ...............................ccccccc1111111111111122222211111111111111cccccccffffffccccccc111111111111111111118888888cccccccccccccc...........................
                        ........................ccccccc11111111111111111111111111111111111111111fffffffccccccccccccc11111111111111111111ccccccc.........................................
                        ........................ccccccc11111111111111111111111111111111111111111fffffffccccccccccccc11111111111111111111ccccccc.........................................
                        ........................ccccccc11111111111111111111111111111111111111111fffffffccccccccccccc11111111111111111111ccccccc.........................................
                        ........................ccccccc11111111111111111111111111111111111111111fffffffccccccccccccc11111111111111111111ccccccc.........................................
                        ........................ccccccc11111111111111111111111111111111111111111fffffffccccccccccccc11111111111111111111ccccccc.........................................
                        ........................ccccccc11111111111111111111111111111111111111111fffffffccccccccccccc11111111111111111111ccccccc.........................................
                        ........................ccccccc11111111111111111111111111111111111111111fffffffccccccccccccc11111111111111111111ccccccc.........................................
                        ........................fffffff111111111111111111111111111111111111111111111111cccccc111111111111111111111111111fffffff.........................................
                        ........................fffffff111111111111111111111111111111111111111111111111cccccc111111111111111111111111111fffffff.........................................
                        ........................fffffff111111111111111111111111111111111111111111111111cccccc111111111111111111111111111fffffff.........................................
                        ........................fffffff111111111111111111111111111111111111111111111111cccccc111111111111111111111111111fffffff.........................................
                        ........................fffffff111111111111111111111111111111111111111111111111cccccc111111111111111111111111111fffffff.........................................
                        ........................fffffff111111111111111111111111111111111111111111111111cccccc111111111111111111111111111fffffff.........................................
                        ........................fffffff111111111111111111111111111111111111111111111111cccccc111111111111111111111111111fffffff.........................................
                        ........................fffffff888888811111111111111111111111111111111111111111111111111111111111111111111ccccccfffffff.........................................
                        ........................fffffff888888811111111111111111111111111111111111111111111111111111111111111111111ccccccfffffff.........................................
                        ........................fffffff888888811111111111111111111111111111111111111111111111111111111111111111111ccccccfffffff.........................................
                        ........................fffffff888888811111111111111111111111111111111111111111111111111111111111111111111ccccccfffffff.........................................
                        ........................fffffff888888811111111111111111111111111111111111111111111111111111111111111111111ccccccfffffff.........................................
                        ........................fffffff888888811111111111111111111111111111111111111111111111111111111111111111111ccccccfffffff.........................................
                        ........................fffffff888888811111111111111111111111111111111111111111111111111111111111111111111ccccccfffffff.........................................
                        ...............................fffffff88888881111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff88888881111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff88888881111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff88888881111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff88888881111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff88888881111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ...............................fffffff88888881111111111111111111111111111111111111111111111111111111111111ffffff................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ......................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff......................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        `)
                    game.showLongText("And re-took over the castle !", DialogLayout.Bottom)
                    game.showLongText("You Win", DialogLayout.Center)
                    game.showLongText("Play Dead Mode", DialogLayout.Bottom)
                    Deadmodeon = 1
                    sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
                    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                    start()
                })
            })
        }
    } else {
        game.over(false, effects.confetti)
    }
}
function start () {
    if (Deadmodeon == 0) {
        scene.setBackgroundImage(img`
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333322222233323333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332333333333333323333333333333333333333333322333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332333333333333333333333332222223
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332333323333333333333333333333332223
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332333
            3333333333333333333333333333333333333333dd3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333dcb333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333233333
            333333333333333333333333333333333333333ddcb333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333223333
            333333333333333333333333333333333333333dbcbb33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333323333333333332333233332
            333333333333333333333333222333333333333dcccc33333333333233333333333333333333333333333333323333333333333333333333333333333333333333333333333333333333333333332333
            33333333333333333333333332233333333333dbccccb3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333233333
            33333333333333333333333332233233333333dbbccbb3333333233333333333333333333333333333333333333333333333333333333333333333323333333333333333323333333333333323333322
            3333333333333333322333332233333333333ddcbcccbb333332333333333333333332333333333333333333333333333333333333333333333333333333233333333333333333333333233333333323
            3333333333333333323333333333333333333dbcccccbb333333333333333333333333333233323333333333333333333333333333333333333333333333333333333333333333333223233323333322
            233323333333333333333333333333222233cdccbcbcccc233333ddddd3323333dbbb3333333233333333333323333333333333333333333333333333333333333333333333232333333323333333332
            333333333333333333333333333333222232dcbbbcbbbccb33333dbbdb33dd333ddbb3333333333333333333333332333333333333333333333333333323223333333333333333233333323333333333
            232333333333333333323333333233333332dccccccccccb33323dcccb3ddcc3ddccb2232333333233333333323333333332333333333333333333333222223333333333333333322223232333233333
            23333233333333333333333333333333223dccccbbbbccccb2322dbcbb3dccc3dbcbb2233333333333333333333333333333333333333333322223322233223333333233333232323332223222223332
            2333333333333333333323323333333322bdbbbbbbbbbbbbbb322dbccb3dbbb6dbbcc2233333333322333333333333333333332333333223322233223332323333333333332222333332233322222222
            3333333333333333333333333333333333dbbcccccccccbbbb222dcccbbdccbbccccc2223223223322333322223333333233332333333333322332323332323332333332222222223222222222222222
            3333333333333333333233333333333333bcccccccccccccbb2222bcbbcccbbccbcbb2222223333222222332323332223333233333333333333333332333233323322233333333222222222222222222
            333333332233333233333223333333333333cccccccccccc222222bccbcccccccccbb22322222332222223223323322323332333333333333333333333332333223ff2333332332222222222222222ff
            333333333323333223322233333333333333ccbbbbbbcccc222222cccbbbbbbcccccc22322333332332223333333333333322332323333333322223333332232333f323322222222222222222222ffff
            333333333333223332322332233333333333bbcbbccbbbbb2222222bbbcbbbccbbbb22222222332223322222333223333322233222333333322322333233223322ff32222223222222222222222fffff
            333332233232223332333333323333333333bbcbbbbbbbbb22222222bccccccccbb222222222222322322322222223222322232233222333223223222332222222f2222222222222222222222fffffff
            222332222222233322333333333233333333bbbbcccbbbbb22222222dccccccccc2222222222222222222222222222222222222222222222223222222222222222f222222222222222222222ffffffff
            222222222222333222232233333322333333bccccccccccb22222222dccbbbbbcc2222222222222222222222222222222222232222222222222222222222222222f22222222222222222222fffffffff
            2222222222222222222223233323333333333cccccccccc322222222dcbbbccbbc2222222222222222222222222222222222222222222222222222222222222222f222222ff22222222222ffffffffff
            22222222222222222222b3233333323333b232bcccccccb2f2222222ccbbbbcccc222222222222ff2222222222222222222222222222222222222222222222ff22ff22222ff222222222ffffffffffff
            222222222222222222dddbbb3dddd233ddb3bb3ccbbbbbfbbddddb222bbccbbbbcbb22222222222f22222222222222222222222222222222222222222222222ff22f222222f22222222fffffffffffff
            222222222222222222dbbbbfdbbdbbbbbbbb24bccbbbbccdddbbbbbbbcbbbbbbbcc22bbbbbb2222f23222222222222222222222222222222222222222222222fff2ff22222f2f2222fffffffffffffff
            b2222222b2b2b22222dbbbbfbbbbbbb2bbbb24bbbbbbbccbbcbbcbbcccbbbccbbccbb2b44422222f22222222222222222222222222222f2222222222222222222f22ff2222fff22fffffffffffffffff
            b2222222b2b2bb22b2dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb22bbb444b2222222222222222222222222222222ff2222222222222222222f22f2222ff22ffffffffffffffffff
            bb2b22bb24bb24bb22dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44424444bb4b2f22bf2222222222222222222222222ff2222222222222222222ffff2222f22fffffffffffffffffff
            444422bb44424442b2bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb2f2222222222222222222222222f222f22222222222222222fff222bffffffffffffffffffffff
            44b2b4b4b4b2b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444442244444fbb2f2bbb222222222222222222222f22ff22222222222222222fff2bbfffffffffffffffffffffff
            444444b4444444444424cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444424f44ffbbbbbb222222222ffff222222f22f2222b222222222222bbff242fffffffffffffffffffffff
            4444442444444444442bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444442f44ff42bbbb22222222bfbbfff2222f2f2222222222222222b224ff44ffffffffffffffffffffffff
            4444b22b4444442224244ccbbbbbbbbccc4ff42ccbbbbcc444444bdbbccbbcbbccff44424444444f44f44422bb4b22b22b2fb4bff2bbbff22222222222222222b444ff4fffffffffffffffffffffffff
            4444422b44444422244444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff424424244f44f4b4bbbbbbb222b4ff444fff44ff22bb2222222ff22b2bb4bfffffffffffffffffffffffffffff
            4444442244444444424424cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4224444244fff4444b4b2222222bff242b4ff4ff2b44bb222222f222b44b24fffffffffffffffffffffffffffff
            4444444444444f44444422ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb2b22224ff44444fffffddbbb444b2b2fb2bbdbdb3ffffffffffffffffffffffffffffc
            4444424444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb2bd4d322444444ddffff423d4bd4dd2dff2222dfb4ffffffffffffffffffffffffffffcc
            4444424444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd442ddffff444d44bdddddff4223dfddffffffffffffffffffffffffffffcc
            4444442444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff42d444d4ddddffd3dddfdfffffffffffffffffffffffffffffcc
            44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd22ddfdffffffffffffffffffffffffffffccc
            44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
            44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd2bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
            44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
            2444444ddd3dd44dff2ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
            4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
            4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
            4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
            4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
            444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
            fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
            effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
            beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
            dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
            ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
            efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
            ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
            ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
            ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
            fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
            ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
            fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
            fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
            ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
            fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
            ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
            bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
            bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
            bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
            bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
            bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
            bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
            bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
            ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
            ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
            cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
            cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
            bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
            bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
            bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
            bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
            bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
            bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
            cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
            bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
            bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
            ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
            cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
            cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
            ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
            bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
            bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
            bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
            ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
            bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
            dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
            d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
            ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
            4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
            dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
            `)
        tiles.setCurrentTilemap(tilemap`level35`)
        game.setDialogCursor(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `)
        GOBLIN = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        GOBLIN = Render.getRenderSpriteVariable()
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5.follow(GOBLIN, 35)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorOpenNorth)
        game.showLongText("This is maze", DialogLayout.Bottom)
        game.showLongText("Move using forward or back key", DialogLayout.Bottom)
        game.showLongText("Use Right or Left Key to look around", DialogLayout.Bottom)
        game.showLongText("Avoid the Snakes", DialogLayout.Bottom)
        game.showLongText("Get to The Glowing Doors", DialogLayout.Bottom)
        game.showLongText("And Survive!!", DialogLayout.Bottom)
        info.startCountdown(10)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        GOBLIN.setKind(SpriteKind.Player)
    } else {
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
            9999999999999999999999996669999999999999999999999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
            9999999999999999999999999669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
            9999999999999999999999999669969999999999999999999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
            9999999999999999966999996699999999999999999999999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
            9999999999999999969999999999999999999999999999999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999999669699969999966
            6999699999999999999999999999996666999999999999969999999999999999999999999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
            999999999999999999999999999999666696d9999999999b9999999999999999999999999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
            696999999999999999969999999699999996dccccccc999b99969dcccb9ddcc9ddc999999999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
            69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9d99999999999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
            6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6999999999999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
            9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccb9999666666669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
            999999999999999999969999999999999999999cccccccccbb6666bcbbcccb99966666666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
            999999996699999699999669999999999999999ccccccccc666666bccbccc9996666666666666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
            999999999969999669966699999999999999999fffffcccc666666cccbbb66666666666666699996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
            999999999999669996966999999999999999999ffccfffff6666666bbbcb6666666666666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
            99999669969666999699999999999999999999cfffffffff66666666bccc6666666666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
            6669966666666999669999999999999999999fffcccfffff66666666dcc66666666666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
            666666666666999666999999999999999999bccccccccccf66666666dcc66666666666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
            6666666666666666669999999999999999999cccccccccc966666666dcf66666666666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
            66666666666666666999999999999999999696bcccccccb6f6666666ccff666666666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
            666666666666666669999999999999999999bb9ccffffffbbddddf666ff66666666666666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
            66666666666666666999999999999999999b64fccffffccdddfffffffcf66666666666666666666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
            b6666666b6b6b6666999999999999999999b64fffffffccffcffcffcccf66666666666666666666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
            b6666666b6b6bb66b999999999999999999b444ffcfccbcfffffcfffccff666666666666bb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
            bb6b66bb64bb64bb66d9999999bb9999999b444fccfffccffcccffffccff66666c44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
            444466bb44464446b6b9999999bc9999999c444ffffffcccccccccfffcffff666c444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
            44b6b4b4b4b6b4444b49999999ccc99999cc44bcfffffcccc4b4cccffffcf666cc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
            444444b4444444444464cbbbbbbcbbbbbbcb444ccffffccc44f44ecffcfff66666444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
            4444446444444444446bccbccbbccbbbccc4ff4ccfccfcc44444444cfcfff666664444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
            4444b66b4444446664644ccbbbbbbbbccc4ff46ccffffcc44444444ffccffcf666ff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
            4444466b44444466644444cccccccccccddddbbccffffcc44444444ffccffcffccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
            4444446644444444464464cccccccccccddbbbbccffffcc444444fdffccfffffcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
            4444444444444f44444466ddffffffffcffccccccfffffcd44444fdffccfffffcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
            4444464444444f444d4444dfffccffffcfcccccccccffccd44444444fccccccfccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
            4444464444444ff44ff4b4dccfccffcccfcc44ccffffffcc4444c444cccbcfffccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
            4444446444444ffddfd344dfcfffffcfffcc4cccffccffcf44444444ccbbbcfcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
            44444444444444f3bf44ffdfffffcffffffccfffcfccffcf44444bbcbbcccccccddddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
            44444444ddd444ff4f33ffcfffffccffccfccfffcfffffcf44444ccccbccbbbbcddddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
            44444444dddddddfdf44f4ffccffffffccffffffffffffffff444ffcbbbbbbcbddddddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
            44444444ddddddd4ff4ff4fffffffcccffffffffccffcccfff444fffcccbbccbddddddddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
            6444444ddd3dd44dff6ff4fffcffcccccffcccffccffccfffcccfffcccccbccdddddddddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
            4344ddddddddd4ddff4fddcffcffccbccfffcffffffffffffcccfccccbccbbbddddddfddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
            4444ddddb4ddddddfddfd4c444ffcc444ffffffffffffffffffffcccccccbcddddddddddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
            4444deedebd4434efffdd44444f444444fffcccccffffffffffffffcccccbbdddcdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
            4444befeebe4d4beff44444444f444444ffccbbbbfffbfbffffffffcccccbddddcddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
            444eeeefeeeed4e4ff444444444444444444bbbbffbfbfbffffffffcccccbdddddd4dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
            fffeeffffeeeeeffffeffe44444444444444ccbfffbfbfbffffffffcccccbddddddddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
            effeffedeeffffffffffff44444444444444bbbfffbfbfbfbfffffffcccddddddddddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
            beffffedffffffffffffff444444444444444bffbfbfbfbfbfffffcffffddddddddddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
            dfffffffffffffffffffffccb444444444444bffbfbfbfbfbfffffccccfddddddddddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
            ffffffffffffffffffffffccb444444444444bffbfbfbfbfbfffffffccffddddddddddfdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
            efffffffffffffffffffffccbcff444444bbbfffbfbfbfbfbfffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
            ffffffffffffffffffffffccbccf444444bfbfffbfbfbfbfbffffffffcccdddffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
            ffffffffffffffffffffffccccff444bbbffffffbfbfbfbfbffffccfffccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
            ffffffffffffffffffffffccccff444cbbffffffbfbfbfbfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
            fffffffffffffffffffffcccccfffffcccffffffbfbfbfbfbfffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfccccbbbbccccbcccc
            ffffffffffffffffffffffccccffccffccffffffbfbfbfbfbfffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcccbbbbbcccbbccc
            fffffffffffffffffffffbccffccffffffffffffbfbfbfbfbfffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccfffffccccbbccbbbcc
            fffffffffffffffffffffbcfffcfffffffffffffbfbfbfbfbfffbffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffcccccffffffccbbccbbccc
            fffffffffffffffffffffffffffccfcfffccffffbfbfbfbfbfffffffffcccfffffffffbbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdffcccccffffffcccccbbbccc
            fffffffffcfffffffffffffffffccfccfcccffffbfbfbfbfbffffffffcccffffffffffffbbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffcdcfffcccffffffffcccbbbbbcc
            ddcccfffffffffffffffffbfffffcfffffffffffbfbfbfbfbfffffffffffffffffffffffbbfffffffffffbbcfcffffffffffffffffffffffffffffffffffffffffffcdfffffcccffffffccbccccbbbbc
            bdddfcbfffffffffffffffbbbfffffffffffffffbfbfbfbfbffffffffffffffffffffffffbfbbfffffffbbbffbfcffffffffffffffffffffffffffffffffffffffffcdfffcccccffffffcfcccccbbbbc
            bbbddbbcffffffffffffffbbffffffffffffffffbfbfbfbfbfffffcffffffffffffffffffffffffffffffffffbbbbfffffffffffffffffffffffffffffffffffffffcfffcfccccfffffccfccccccbbbc
            bbbbdbbbbfffffffbffbffffffffffffffbfffffbfbfbfbfbfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfccccffffccffcccbbccccc
            bbbbffffffffffbbbffffffffffffffffffffbbbbbbbbbbbbfffffcffffffffffffbfffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffccffffcffcccccfffccfccccbbbccbc
            bbbbbbbbffffffbbfffffbfffffffffffffbbfffffffffffbfffffffffffffffffffffffbfbffffffffffffffffffffffffffffffccccccffffffffffffffffcfccccfffffffcccffccffccbbbbbbccc
            bbbffffffffffffffffbbbbbfffffffffffbbffffffffffffffffffffffffffffffffffffbfffffffffffffbffffffffffffffcfffffffcccccffffffffcfcccfccccccfcccccccfccffffcbbbbbcccb
            bbffffffffffffffffbbffbbbfffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffdfffcfcccffcffffffccccccffcccccfffffffccbbbbcccbb
            ccfddddffffffffffffbfffffffbffbfbfffffffffffffffbfffffffffbbfffffffffbffffffffffffffffffffbbbfffffffffcccccccfdffffcccccccfffffffffcccffffffffffffffccbbbbbbbbbb
            ddffffccffffffffffffffffffffffffbfffffffffffffffbfffffffffbfffffffffffffffffffffffffffffffffffffffffffffcccccfffcccccccfccccffffffcccccffffffffffffffcccbbbbbbbb
            cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbffffffffffffffffffffcccccccccffffffffccffffffccccccccccffffffffffcccccbbbbb
            cfffccccccccccccffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffbbfffbfffffffffffffffffffffcccccffffffffffffffffffffffcccccccccccfffffffcccccccbbbb
            ffffccccccccfffffffffffffffffffffffffffffbbbfffffbfffffffffffffbbffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffcccccfffffccccccccbbcc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbffffffffffffbbfffffffffffffffffffffffffffffffccccfffccfffffffffffffffffffffffffffffffcfffffcccbcc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbbfffbfffffffffffbccccccfcccccccccccffffffffffffffffffffffffffffffcccffccccccfc
            fffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffbffffbbbbbcccccccbbccccccffffffffffffffffbfffffffffffffffffccffcccffffc
            fffcdddddfffffffffffffffffbbbbbffffbbfbffffffffffffbfffffffffffffffffffffbfbbbbbbbfffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffff
            fffdcffffffffffffffffffffbbffffffffffffffffffffffffffffffbbbbbbfffbfffffffffffffbfffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cddfccccffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffff
            cdcccfcccffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            dcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            dffffffffffffffffffffffffffffffffffffbbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffffffff
            fffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccc
            fffffffccfffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccfffccccccccccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffccfffffffffffff
            ffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccfffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffffffffffffffffffffcccccccfffffffffffffffffffffffffffffffffffffffffffff
            fffcccccffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc
            ccccccccccccffffffffffffffffdddfffffffffffffffffffccccccccfffffffcfffffffffcccffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
            cccccccccccccccccccccfdddddccccccccccfffffffffccccccccbbbcccccccccffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccbccc
            cccccccccbbbbbcccccccccccccccccccccfffffffcccccccffcccccccccccffffffcccccccccccccccffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffccfccccc
            ccccccccccccbbccccccccccccfffffffffffffccccccfffffccccccfffffffffcfccccccfffffffffffffffffffffffffffffffffcccccccccccccffffffffffffffffffffffffffffffffffffccccc
            bcccccccccccccccccccccccfffffffffffccccccffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffcccccccbbbcccccccfffffcccfffffffffffffffffffffffcccccccccc
            bccccccccccccccccffffffffffffffffeccccbbdffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffcccccccccccccccccccccccccccffffffcccccccffcccccccccccccbbbbb
            cccccccccccffffffffffffffffffffffeeccbbd4fddffdfff3f444ddd444fff344bbddbbcf44fff44ff3444f444444f4fe44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
            bddddcffffffff444f4fff44ff4f4ff4444dd44d44ddf4d3fddddddddd444ddddd44ddddddf33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
            ddbbdd44f44f444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
            bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
            dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
            d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
            ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
            4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
            dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
            `)
        tiles.setCurrentTilemap(tilemap`level1`)
        game.setDialogCursor(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `)
        GOBLIN = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Cutsence)
        GOBLIN = Render.getRenderSpriteVariable()
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5.follow(GOBLIN, 40)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorOpenNorth)
        game.showLongText("This is dead mode", DialogLayout.Bottom)
        game.showLongText("Move using forward or back key", DialogLayout.Bottom)
        game.showLongText("Use Right or Left Key to look around", DialogLayout.Bottom)
        game.showLongText("Avoid the Snakes", DialogLayout.Bottom)
        game.showLongText("Get to The Glowing Doors", DialogLayout.Bottom)
        game.showLongText("And Survive!!", DialogLayout.Bottom)
        info.startCountdown(5)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        GOBLIN.setKind(SpriteKind.Player)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bossplayer, function (sprite, otherSprite) {
    game.over(false, effects.hearts)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.hearts)
})
function maze () {
    if (Deadmodeon == 0) {
        tiles.setCurrentTilemap(tilemap`level33`)
        tiles.placeOnRandomTile(GOBLIN, sprites.dungeon.doorOpenNorth)
        GOBLIN.setKind(SpriteKind.level3)
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature2 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature3 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature4 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5.follow(GOBLIN, 40)
        creature2.follow(GOBLIN, 45)
        creature3.follow(GOBLIN, 40)
        creature4.follow(GOBLIN, 40)
        creature5.follow(GOBLIN, 40)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature2, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature3, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature4, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorClosedNorth)
        game.showLongText("Level 3", DialogLayout.Bottom)
        info.startCountdown(60)
    } else {
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(GOBLIN, sprites.dungeon.doorOpenNorth)
        GOBLIN.setKind(SpriteKind.level3)
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature2 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature3 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature4 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5 = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 8 1 1 8 c c 
            c 1 1 1 1 1 8 f c c 8 8 8 c . . 
            f 1 1 1 1 1 8 8 c 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 c f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        creature5.follow(GOBLIN, 45)
        creature2.follow(GOBLIN, 50)
        creature3.follow(GOBLIN, 45)
        creature4.follow(GOBLIN, 45)
        creature5.follow(GOBLIN, 45)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature2, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature3, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature4, sprites.dungeon.doorClosedNorth)
        tiles.placeOnRandomTile(creature5, sprites.dungeon.doorClosedNorth)
        game.showLongText("Level 3, dead mode", DialogLayout.Bottom)
        info.startCountdown(45)
    }
}
let projectile: Sprite = null
let creature4: Sprite = null
let creature3: Sprite = null
let creature2: Sprite = null
let creature5: Sprite = null
let GOBLIN: Sprite = null
let Final_boss: Sprite = null
let Deadmodeon = 0
Deadmodeon = 0
start()
game.onUpdate(function () {
    if (GOBLIN.tileKindAt(TileDirection.Center, sprites.dungeon.greenOuterNorth0)) {
        info.stopCountdown()
    }
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
game.onUpdateInterval(500, function () {
    if (GOBLIN.kind() == SpriteKind.Bossplayer) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . c c c c c c . . . . . . 
            . . . c 8 1 1 1 1 8 c . . . . . 
            . . c 1 1 1 1 1 1 1 1 c . . . . 
            . c 8 1 1 1 1 1 1 1 1 8 c . . . 
            . c 1 c 8 8 8 8 c 1 1 1 c . . . 
            . f 1 8 f 8 8 f 8 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 8 c 1 1 8 f c . . 
            . . . f c c c c 1 1 8 f 1 1 c . 
            . . c 1 2 1 1 1 8 c f 1 1 1 1 c 
            . c 1 1 2 1 1 c f c 1 1 1 8 c c 
            c 1 1 1 1 1 1 f c c 1 1 1 c . . 
            f 1 1 1 1 1 1 1 c 1 1 1 1 f . . 
            f 8 1 1 1 1 1 1 1 1 1 1 c f . . 
            . f 8 1 1 1 1 1 1 1 1 1 f . . . 
            . . c c c c c c c c c f . . . . 
            `, Final_boss, 50, 50)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
