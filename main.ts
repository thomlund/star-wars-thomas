controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        projectile = sprites.createProjectileFromSprite(assets.image`skud`, value, 50, 0)
    }
})
let projectile: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`rumskib1`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`rumskib2`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`rumskib3`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`rumskib4`, SpriteKind.Player))
scene.setBackgroundImage(assets.image`baggrund1`)
for (let value of mp.allPlayers()) {
    mp.moveWithButtons(value)
}
for (let value of sprites.allOfKind(SpriteKind.Player)) {
    value.setStayInScreen(true)
    info.setLife(3)
}
