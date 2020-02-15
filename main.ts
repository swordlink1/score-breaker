namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
`
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tipselected = Math.randomRange(1, 2)
    if (tipselected == 1) {
        game.showLongText("Tip: The more you move, the more faster your score goes.", DialogLayout.Center)
    } else if (tipselected == 2) {
        game.showLongText("Tip: Don't unpause the game!", DialogLayout.Center)
        game.over(false)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    S_Player.setImage(sprites.castle.heroWalkSideLeft1)
    multiplier += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    S_Player.setImage(sprites.castle.heroWalkFront1)
    multiplier += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    S_Player.setImage(sprites.castle.heroWalkSideRight1)
    multiplier += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    S_Player.setImage(sprites.castle.heroWalkBack1)
    multiplier += 1
})
let tipselected = 0
let S_Player: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`100010000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`,
            img`
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
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundCenter,sprites.castle.tilePath5,myTiles.tile2],
            TileScale.Sixteen
        ))
S_Player = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(S_Player)
let multiplier = 1
game.onUpdate(function () {
    info.changeScoreBy(multiplier)
})
forever(function () {
    music.playMelody("C5 B A - F - G - ", 200)
})
