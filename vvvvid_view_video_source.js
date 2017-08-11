javascript: ((function () {
	var head = document.getElementsByTagName("body")[0];
	var js = document.createElement("script");
	js.type = "text/javascript";
	js.text = 'link=vvvvid.player.config._playlist[0][0].src; link=link.split("/z/").join("/i/").split("manifest.f4m").join("master.m3u8");window.prompt("copiatelo :D :D :D", link);';
	head.appendChild(js);
})(window));
