const body1 = document.querySelector(".body1");
const container2 = document.querySelectorAll(".container2");
const ulMenu = document.querySelectorAll(`ul__menu`);
const menuBurger = document.querySelector(".menu__burger");
const menuGradient = document.querySelector(".menuGradient");
const burgerActive = document.querySelector(".burger__active");
const burger = document.querySelector(".burger");
const closeBurger = document.querySelector(".close__burger");
const close = document.querySelector(".close");
const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const dropActive = document.querySelector(".drop__active");
const inputSearch = document.querySelector(".input__search");
const logoSearch = document.querySelector(".logo__search");
const closeButton = document.querySelector(".close__Button");
const findStore = document.querySelector(".Find__Store");
const headerFSJ = document.querySelector(".header__FSJ");
const contactsButton = document.querySelector(".contacts > button");
const smoothNav = document.querySelectorAll('li[class^="#"]');
const buttonContacts = document.querySelectorAll('button[class^="b#"]');
const buttonId = document.querySelectorAll('button[id^="*"]');
const about = document.querySelector(".about");
const scrollBottom = document.querySelector(".scroll__bottom");
const bodyList2 = document.querySelector(".bodyList2");
const sliderList = document.querySelector(".slider__list");
const sliderList2 = document.querySelector(".slider__list2");
const button4 = document.querySelector(".button4");
const button3 = document.querySelector(".button3");
const button2 = document.querySelector(".button2");
const button1 = document.querySelector(".button1");

body1.onclick = () => {
	document.body.classList.remove("bodyActive");
	bodyList2.style.display = "none";
	body1.style.display = "none";
	about.style.display = "none";
}

contactsButton.onclick = () => {
	document.body.classList.add("bodyActive");
	bodyList2.style.display = "flex";
	body1.style.display = "flex";
}

menuBurger.onclick = () => {
	menuGradient.classList.toggle("drop__active");
	burgerActive.classList.toggle("burger");
	closeBurger.classList.toggle("close");
}

window.onscroll = () => {

	if (window.scrollY > 150) {
		scrollBottom.classList.add("active__scroll");
	} else {
		scrollBottom.classList.remove("active__scroll");
		scrollBottom.style.transition = '0.2s';
	}

	scrollBottom.onclick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});

	}
}

smoothNav.forEach(smoothElem => {
	smoothElem.onclick = () => {
		const classElem = smoothElem.getAttribute('class');
		console.log(document.querySelector(classElem));

		document.querySelector(classElem).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
})

buttonContacts.forEach(buttonElements => {
	buttonElements.onclick = () => {
		body1.style.display = "flex";
		bodyList2.style.display = "flex";
		document.body.classList.add("bodyActive");
	}
	
})

buttonId.forEach(buttonIdElem => {

	buttonIdElem.onclick = () => {
		about.style.display = "flex";
		body1.style.display = "flex";
		document.body.classList.add("bodyActive");



		switch (buttonIdElem) {
			case buttonIdElem = document.querySelector('button[id="*id1"]'):
				about.innerHTML = "<h2>ALERATO VENDING 1 кг</h2><p><b>Цена:</b> 360грн</p><p><b>Состав:</b> арабика 10 % робуста 90 %</p><p><b>О данном кофе:</b> Смесь на основе робусты с добавлением небольшого количества  арабики. Классический итальянский кофе темной обжарки,  который лучше всего подойдет для приготовления насыщенного  крепкого эспрессо с устойчивой пенкой и продолжительным  шоколадным послевкусием.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id2"]'):
				about.innerHTML = "<h2>ALERATO CREMA BAR 1кг</h2><p><b>Цена:</b> 360грн</p><p><b>Состав:</b> арабика 20 % робуста 80 %</p><p><b>О данном кофе:</b> Идеальное сочетание натуральной очищенной робусты, смягчённой небольшим количеством бархатистой арабики: классический итальянский вкус, который ценится за свой интенсивный аромат, крепкий вкус и   ароматную пенку.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id3"]'):
				about.innerHTML = "<h2>ALERATO QUALITY 1кг</h2><p><b>Цена:</b> 370грн</p><p><b>Состав:</b> арабика 20 % робуста 80 %</p><p><b>О данном кофе:</b> Идеальное сочетание натуральной очищенной робусты, смягчённой небольшим количеством бархатистой арабики: классический итальянский вкус, который ценится за свой интенсивный аромат, крепкий вкус и   ароматную пенку.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id4"]'):
				about.innerHTML = "<h2>ALERATO AROMA BAR 1кг</h2><p><b>Цена:</b> 410грн</p><p><b>Состав:</b> арабика 50 % робуста 50 %</p><p><b>О данном кофе:</b>Эта смесь разработана  для сетей фаст-фуд, стрит-фуд. Это крепкая, консистентная смесь арабики и робусты в равных пропорциях, разумно сбалансированных между собой.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id5"]'):
				about.innerHTML = "<h2>ALERATO DELICATO 1кг</h2><p><b>Цена:</b> 430грн</p><p><b>Состав:</b> арабика 60 % робуста 40 %</p><p><b>О данном кофе:</b> Смесь нескольких сортов натуральной  робусты и арабики, терпкий и насыщенный вкус – известный своим ярко выраженным ароматом, сладковатым вкусом и ароматной пенкой в чашке. Смесь рекомендована для приготовления в автоматических кофе машинах</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id6"]'):
				about.innerHTML = "<h2>Alerato Exclusivo 1 кг</h2><p><b>Цена:</b> 450грн</p><p><b>Состав:</b> арабика 80 % робуста 20 %</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id7"]'):
				about.innerHTML = "<h2>ALERATO HONDURAS 1кг</h2><p><b>Цена:</b> 530грн</p><p><b>Состав:</b> арабика 100 %</p><p><b>О данном кофе:</b> Кофе в зернах «Гондурас» , 100 арабика, высший сорт.(Среднеобжаренный. Всегда свежая обжарка.) Терпкий и насыщенный вкус – известный своим ярко выраженным ароматом, сладковатым вкусом и ароматной пенкой в чашке. Смесь рекомендована для приготовления в автоматических и профессианальных кофе машинах</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id8"]'):
				about.innerHTML = "<h2>Alerato (Colombia) Supremo 1кг</h2><p><b>Цена:</b> 610грн</p><p><b>Состав:</b> арабика 100% </p><p><b>О данном кофе:</b> Свежая Обжарка</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id9"]'):
				about.innerHTML = "<h2>Alerato (Brazil) Yellow bourbone 1кг</h2><p><b>Цена:</b> 590грн</p><p><b>Состав:</b>  арабика 100%</p><p><b>О данном кофе:</b>Свежая Обжарка</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id10"]'):
				about.innerHTML = "<h2>Alvorada Gastro Kaffee 1 кг</h2><p><b>Цена:</b>400грн</p><p><b>Состав:</b>  арабика 50 % робуста 50 %</p><p><b>О данном кофе:</b>ALVORADA Gastro Kaffe подходит для тех, кто любит крепкий кофе с горечью. Чашка этого кофе вас точно разбудит. Все это благодаря составу 50 арабики и 50 рабусты. Если такой состав для вас слишком крепкий, то обратите внимание на всю линейку ALVORADA которая состоит из Brasil, Il Caffe Italiano, Wiener Kaffee.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id11"]'):
				about.innerHTML = "<h2>ALVORADA WIENER KAFFE 1 KG</h2><p><b>Цена:</b> 400грн</p><p><b>Состав:</b> арабика 80 % робуста 20 %</p><p><b>О данном кофе:</b> Кофе в зернах Alvorada Wiener Cafe (Альворада Виенер Кафе) — достаточно насыщенная кофейная смесь, основу которой составляют зерна арабики. Они наделяют кофе богатым ароматом, едва уловимой кислинкой и мягкостью. Добавление робусты уравновешивает кислинку, раскрывает шоколадные нотки в послевкусии напитка и дарит кофе приятные бодрящие свойства. Смесь обладает идеальным балансом кислинки и горчинки. Она подойдет как для приготовления эспрессо, так и для кофейных напитков с молоком.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id12"]'):
				about.innerHTML = "<h2>Alvorada Brazil 1кг</h2><p><b>Цена:</b> 400грн</p><p><b>Состав:</b> арабика 90 % робуста 10 %</p><p><b>О данном кофе:</b> Alvorada Brazil 1кг 90 Арабика 10 Робуста Бразил Alvorada Brasil — восхитительный австрийский кофе, в состав которого входят лучшие зерна бразильской Арабики и малая часть Робусты. Напиток имеет плотный насыщенный вкус, бодрящий аромат, идеальный баланс кислинки и горчинки и шоколадно-фруктовые оттенки в послевкусии. Alvorada сохранил для Вас вкус Бразилии.Кофейные зерна светлой обжарки</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id13"]'):
				about.innerHTML = "<h2>AMBASSADOR CREMA 1кг</h2><p><b>Цена:</b> 440грн</p><p><b>Состав:</b> арабика 60 % робуста 40 %</p><p><b>О данном кофе:</b> Традиционная итальянская обжарка дает кофе в зернах Ambassador Crema  тонизирующий вкус. В напитке ощущается пикантная горчинка, которая оставляет долгое послевкусие. В составе Арабика и Робуста из Южной Америки и Африки. При приготовлении дает бархатистую пенку крема, которая сохраняет тепло эспрессо.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id14"]'):
				about.innerHTML = "<h2>Caffe Poli Crema Bar 1кг</h2><p><b>Цена:</b> 460грн</p><p><b>Состав:</b> арабика 35 % робуста 65 %</p><p><b>О данном кофе:</b> Кофе Caffe Poli Crema – это уникальный купаж созданных для тех кофеманов, которые любят кофе крепкий и насыщенный во вкусу.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id15"]'):
				about.innerHTML = "<h2>AMBASSADOR STRONG 1кг</h2><p><b>Цена:</b> 430грн</p><p><b>Состав:</b> арабика 20 % робуста 80 %</p><p><b>О данном кофе:</b> Ambassador Strong — композиция зерен темной обжарки с выразительным вкусом и нотками темного шоколада, пряностей, орехов и медовой сладостью. Арабика наполняет кофейный букет ароматом, в то время как робуста делает напиток полнотелым и кремовым. Отлично подходит для приготовления насыщенного эспрессо и прекрасно подходит в сочетании с молоком.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id16"]'):
				about.innerHTML = "<h2>CAFFE POLI BAR 1 KG</h2><p><b>Цена:</b> 490грн</p><p><b>Состав:</b> арабика 50 % робуста 50 %</p><p><b>О данном кофе:</b>Эта смесь разработана специально для тех заведений, где требуется постоянно поддерживать уровень качества, не уделяя много внимания регулировке помола. Это крепкая, консистентная смесь арабики и робусты в равных пропорциях, разумно сбалансированных между собой. Рекомендовано для сетей фаст-фуд, стрит-фуд.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id17"]'):
				about.innerHTML = "<h2>NERO AROMA CLASSIC 1 KG</h2><p><b>Цена:</b> 510грн</p><p><b>Состав:</b> арабика 50 % робуста 50 %</p><p><b>О данном кофе:</b> 50% арабики, 50% робусты. Кофе Nero Aroma Classic — классический итальянский кофе с характером и ярким ароматом, во вкусовой композиции ощущается деликатная горчинка и нотки пряностей. Оставляет после себя долгое послевкусие с оттенками специй от пряно-сладкого до острого. Nero Aroma «Classic» наполнит Вас энергией, придаст телу бодрости и обеспечит прекрасным настроением на весь день.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id18"]'):
				about.innerHTML = "<h2>CAFFE POLI ORO VENDING 1 KG</h2><p><b>Цена: </b>445грн</p><p><b>Состав:</b> арабика 20 % робуста 80 %</p><p><b>О данном кофе:</b> ORO Vending это итальянский классический вкус, который за свой интенсивный аромат очень ценится, ароматной пенкой и крепким вкусом.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id19"]'):
				about.innerHTML = "<h2>SAECO XSMALL</h2><p><b>Цена:</b> 6000грн</p><p><b>Характеристики:</b></p><p>автоматическое приготовление эспрессо, латте, капучино; объем резервуара для воды 1 л; максимальное давление 15 бар; встроенная кофемолка; одновременно приготовление 2 х чашек кофе; система предварительного смачивания; контроль крепости кофе; быстрый пар; контроль за наполнением контейнера отходов, отсутствием воды или кофейных зерен. </p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id20"]'):
				about.innerHTML = "<h2>SAECO ODEA GO</h2><p><b>Цена:</b> <p>7250грн</p><p><b>Характеристики:</b></p> <p>автоматическое приготовление американо, эспрессо;объем резервуара для воды 1.5 л;объем резервуара для зерен 300 гр;максимальное давление 15 бар ;встроенная кофемолка с керамическими жерновами и 5 ступенчатой регулировкой обеспечит максимально точный помол.система предварительного смачивания;ёмкость контейнера для отходов 13 порций;Приготовление капучино с помощью насадки панарело.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id21"]'):
				about.innerHTML = "<h2>SAECO ODEA GO</h2><p><b>Цена:</b>  <p>2600грн<p><b>Характеристики:</b></p> <p>приготовление эспрессо, латте, капучино;объем резервуара для воды 1.7л;максимальное давление 15 бар;встроенная кофемолка;одновременно приготовление 2х чашек кофе;система предварительного смачивания;контроль крепости кофе;быстрый пар.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id22"]'):
				about.innerHTML = "<h2>SAECO INTUITA</h2><p><b>Цена:</b> <p>6000грн<p><b>Характеристики:</b></p><p> — Резервуара для воды 1.5л;— Давление 15бар;— Контейнер для кофе в зернах: 250 г— Программируемые кнопки объема порции;— Регулировка закладки кофе от 6 до 9г;— Использование зернового и молотого кофе;— Кофемолка с регулировкой качества помола;— Автоматическое удаление использованного кофе;— Автоматическая промывка диспенсера кофе;— Таймер перехода в режим энергосбережения;— Система предварительного смачивания.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id23"]'):
				about.innerHTML = "<h2>SAECO SYNTIA</h2><p><b>Цена:</b> <p>6000грн<p><b>Характеристики:</b></p><p> — Резервуара для воды 1.5л;— Объем контейнера для жмыха: 15 порций— Контейнер для кофе в зернах: 300 г— Давление 15бар;— Программируемые кнопки объема порции;— Регулировка закладки кофе от 6 до 9г;— Использование зернового и молотого кофе;— Кофемолка с регулировкой качества помола;— Автоматическое удаление использованного кофе;— Автоматическая промывка диспенсера кофе;— Таймер перехода в режим энергосбережения;— Система предварительного смачивания.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id24"]'):
				about.innerHTML = "<h2>PHILIPS SAECO MINUTO</h2><p><b>Цена:</b> <p>11000грн<p><b>Характеристики:</b></p> <p>автоматическое приготовление эспрессо, латте, капучино;объем резервуара для воды 2.5 л;максимальное давление 15 бар ;встроенная кофемолка;одновременно приготовление 2х чашек кофе;система предварительного смачивания;контроль крепости кофе;быстрый пар;подставка для чашек с подогревом;возможность использования молотого кофе;контроль за наполнением контейнера отходов, отсутствием воды или кофейных зерен.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id25"]'):
				about.innerHTML = "<h2>SAECO LIRIKA</h2><p><b>Цена:</b> <p>11000грн<p><b>Характеристики:</b></p> <p>автоматическое приготовление эспрессо, латте, капучино;объем резервуара для воды 2.5 л;максимальное давление 15 бар ;встроенная кофемолка;одновременно приготовление 2х чашек кофе;система предварительного смачивания;контроль крепости кофе;быстрый пар;подставка для чашек с подогревом;возможность использования молотого кофе;контроль за наполнением контейнера отходов, отсутствием воды или кофейных зерен.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id26"]'):
				about.innerHTML = "<h2>SAECO INTELIA</h2><p><b>Цена:</b> <p>11000грн<p><b>Характеристики:</b></p> <p>автоматическое приготовление эспрессо, латте, капучино;объем резервуара для воды 2.5 л;максимальное давление 15 бар ;встроенная кофемолка;одновременно приготовление 2х чашек кофе;система предварительного смачивания;контроль крепости кофе;быстрый пар;подставка для чашек с подогревом;возможность использования молотого кофе;контроль за наполнением контейнера отходов, отсутствием воды или кофейных зерен.</p>";
				break;
			case buttonIdElem = document.querySelector('button[id="*id27"]'):
				about.innerHTML = "<h2>SAECO INCANTO</h2><p><b>Цена:</b> 12300грн<p><b>Характеристики:</b></p> <p>автоматическое приготовление американо, эспрессо;объем резервуара для воды 2 л;объем резервуара для зерен 300 гр;максимальное давление 15 бар ;встроенная кофемолка;возможность использования молотого кофе;система предварительного смачивания;контроль крепости кофе;ёмкость контейнера для отходов 13 порций;Система SBS;</p>";
				break;
		}
	}
})




let offset = 0;

button1.onclick = () => {
	offset = offset + 100;
	if (offset > 100) {
		offset = 0;
	}
	sliderList.style.left = offset + '%';
	sliderList.style.transition = "1s";

}


button2.onclick = () => {
	offset = offset - 100;
	if (offset < 0) {
		offset = 100;
	}
	sliderList.style.left = -offset + '%';
	sliderList.style.transition = "1s";

}

button3.onclick = () => {
	offset = offset + 100;
	if (offset > 100) {
		offset = 0;
	}
	sliderList2.style.left = offset + '%';
	sliderList2.style.transition = "1s";

}


button4.onclick = () => {
	offset = offset - 100;
	if (offset < 0) {
		offset = 100;
	}
	sliderList2.style.left = -offset + '%';
	sliderList2.style.transition = "1s";

}