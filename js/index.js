const cards = [
	{ title: 'Катастрофы из-за погоды', link: 'mayday/katastrofy-iz-za-pogody.html', img: 'img/обледеневший самолет.jpg', img_desc: 'Катастрофы из-за  погоды. Расследование авиакатастроф смотреть онлайн', description: 'Катастрофы случившиеся из-за неблагоприятных погодных явлений: туман, обледенения, грозы, сильный дождь. Вы узнаете, как специалисты выяснили самые, казалось бы загадочные природные явления.'}
	{ title: 'Катастрофы из-за погоды', link: 'mayday/katastrofy-iz-za-pogody.html', img: 'img/обледеневший самолет.jpg', img_desc: 'Катастрофы из-за  погоды. Расследование авиакатастроф смотреть онлайн', description: 'Катастрофы случившиеся из-за неблагоприятных погодных явлений: туман, обледенения, грозы, сильный дождь. Вы узнаете, как специалисты выяснили самые, казалось бы загадочные природные явления.'}
	// { title: 'Чудесное спасение', link: '../mayday/chudesnoe-spasenie.html', img: '../img/miracle-escape.jpg', img_desc: 'Чудесное спасение. Расследование авиакатастроф смотреть онлайн', description: 'Истории основанные на реальных событиях. Рассказываем, как людям удалось выжить, несмотря на неменуемую катастрофу.'}
	// { title: 'Терракт или захват самолета', link: '../mayday/terrakt-na-samolete.html', img: '../img/1509449173113419667.jpg', img_desc: 'Захват самолета. Расследование авиакатастроф смотреть онлайн', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi cum eos labore, quisquam inventore a iste itaque quibusdam Eligendi cum eos labore, quisquam inventore a iste itaque quibusdam'}
]

function CreateCategory(category) {
	return `
		<li class="category_item">
			<article class="wrapper-news">
				<div class="category-preview">
					<a href="${category.link}">
						<img src="${category.img}" alt="${category.img_desc}">
					</a>
				</div>

				<div class="wrapper-news__elements">
					<h3>
						<a href="${category.link}">${category.title}</a>
					</h3>

					<p>${category.description}</p>

					<a class="read-more" href="${category.link}">Перейти в раздел</a>
				</div>
			</article>
		</li>
	`
}

const tempplates = cards.map(category => CreateCategory(category))
const html = tempplates.join(' ')
document.querySelector('.category-items').innerHTML = html
