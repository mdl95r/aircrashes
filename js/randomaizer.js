$(document).ready(function() {
            setInterval(window.onload = function(){
                   var urls = [
						"local:///main/stolknovenie-samoletov.html",
						"local:///main/pozhar-v-samolete.html",
						"local:///main/neispravnost-konstrukcii-v-samolete.html",
						"local:///main/otkaz-dvigatelej.html",
					];
					document.getElementById("random-link").addEventListener("click", function(){
						var url = urls[Math.floor(Math.random()*urls.length)]
						this.href = url;
					});
            });
        });
