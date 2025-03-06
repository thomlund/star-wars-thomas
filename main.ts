controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.setBackgroundImage(assets.image`baggrund1`)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`rumskib1`, SpriteKind.Player))
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
info.setLife(3)
