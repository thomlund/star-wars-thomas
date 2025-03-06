controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`rumskib1`, SpriteKind.Player))
scene.setBackgroundImage(assets.image`baggrund1`)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
info.setLife(3)
