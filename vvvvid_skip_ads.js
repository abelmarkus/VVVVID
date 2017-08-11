javascript:(setInterval(
				function () {
                    if (vvvvid.player == null || vvvvid.player == undefined) {
                        vvvvid.router.mainView.onDemandMainView.currentMode.showPlayerView.playerObj.initializePlayer();
                    };
					$("#advPlayer").remove();
					$("#advPlayerClick").remove();
					vvvvid.showActions();
					/*
					$(document).trigger("player:showtopinfo");
					$(document).trigger("menu:attachmenuvideoevents");
					*/
					if(vvvvid.player.getState() != "PAUSED"){
                        vvvvid.player.setPlay();
                    }
                }
			, 500)
);
