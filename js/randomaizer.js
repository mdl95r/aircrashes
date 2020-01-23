$(document).ready(function() {
            setInterval(window.onload = function(){
                   var urls = [
						"https://mdl95r.github.io/stolknovenie-samoletov.html",
						"https://mdl95r.github.io/pozhar-v-samolete.html",
						"https://mdl95r.github.io/neispravnost-konstrukcii-v-samolete.html",
						"https://mdl95r.github.io/otkaz-dvigatelej.html",
						"https://mdl95r.github.io/mayday/chudesnoe-spasenie.html",
						"https://mdl95r.github.io/mayday/katastrofy-iz-za-pogody.html",
						"https://mdl95r.github.io/mayday/terrakt-na-samolete.html",
					];
					document.getElementById("random-link").addEventListener("click", function(){
						var url = urls[Math.floor(Math.random()*urls.length)]
						this.href = url;
					});
            });
        });
