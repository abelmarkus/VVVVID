javascript:(function() {
	document.location.reload();
	
	function skipAdv() {
			setInterval(
				function () {
						vvvvid.advPlayer.destroy();
						vvvvid.advPlayer = null
						vvvvid.showActions();
						$(document).trigger("player:showtopinfo");
						$(document).trigger("menu:attachmenuvideoevents");
						vvvvid.router.mainView.onDemandMainView.currentMode.showPlayerView.playerObj.initializePlayer();
				}
				, 500)
	};

	document.onload = skipAdv();   
}
)();
