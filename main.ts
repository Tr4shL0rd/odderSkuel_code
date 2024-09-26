let player_sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 . 3 3 3 . 3 . . . . . 
    . . . 3 . . 3 3 3 . . 3 . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player_sprite)
music.play(music.stringPlayable("- E - - - G F - ", 120), music.PlaybackMode.UntilDone)
