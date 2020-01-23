$(document).ready(function() {
            setInterval(window.onload = function(){
                   var urls = [
						"D:/aircrashes.info/main/stolknovenie-samoletov.html",
						"D:/aircrashes.info/main/pozhar-v-samolete.html",
						"D:/aircrashes.info/main/neispravnost-konstrukcii-v-samolete.html",
						"D:/aircrashes.info/main/otkaz-dvigatelej.html",
					];
					document.getElementById("random-link").addEventListener("click", function(){
						var url = urls[Math.floor(Math.random()*urls.length)]
						this.href = url;
					});
            });
        });
