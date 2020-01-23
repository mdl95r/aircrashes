$(document).ready(function() {
            setInterval(window.onload = function(){
                   var urls = [
						"https://mdl95r.github.io/main/stolknovenie-samoletov.html",
						"https://mdl95r.github.io/pozhar-v-samolete.html",
						"https://mdl95r.github.io/main/neispravnost-konstrukcii-v-samolete.html",
						"https://mdl95r.github.io/otkaz-dvigatelej.html",
					];
					document.getElementById("random-link").addEventListener("click", function(){
						var url = urls[Math.floor(Math.random()*urls.length)]
						this.href = url;
					});
            });
        });
