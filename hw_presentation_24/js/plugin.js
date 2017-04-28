
// Презентация 24
// 	// Задача 1

var ulList = document.querySelector('ul');

for (var i = 5; i <7; i++) {
	var li = document.createElement('li');
	li.classList.add('new-item');
	li.textContent = 'item' + ' ' +i;

	ulList.appendChild(li);
}

// 	// Задача 2


for (var i = 1; i <4; i++) {
var strong = document.createElement('strong');
document.querySelectorAll('a')[i].appendChild(strong);
}

// 	// Задача 3
var body = document.body;
var img = document.createElement('img');
img.src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRG-CoRID0JZyVpfNRFi1J3HlFTEDN4sJxg4aT_ouYCovZx5SuB";
img.alt = 'this is a picture';
var firstDiv = document.querySelector('div');
body.insertBefore(img, firstDiv);

// 	// Задача 4
mark = document.querySelector('mark');
mark.textContent = mark.textContent +' green';
mark.classList.add('green');

// 	// Задача 5 ????

function Compare(a,b){
	// ulChild[1].children[0].innerText - эл-т для сравнения
	// a = a.children[0].innerText;
	// b = b.children[0].innerText;
	if (a.children[0].innerText < b.children[0].innerText) return -1;
	if (a.children[0].innerText > b.children[0].innerText) return 1;	
}
var ul = document.getElementsByTagName('ul')[0],
	ulChild = ul.getElementsByTagName('li');
	
	
	ulChild = Array.prototype.slice.call(ulChild);

var newList = ulChild.sort(Compare);



// 	// Задача 6

function NodesConstructor(node){
	this.node = node;
}

NodesConstructor.prototype.append = function(html){
	
	node.insertAdjacentHTML('beforeend', html)
}


NodesConstructor.prototype.prepend = function(html){
	
	node.insertAdjacentHTML('afterbegin', html)
}

NodesConstructor.prototype.before = function(html){
	
	node.insertAdjacentHTML('beforebegin', html)
}

NodesConstructor.prototype.after = function(html){
	
	node.insertAdjacentHTML('afterend', html)
}

NodesConstructor.prototype.html = function(value){
	if (value == undefined){
		return this.node.innerHTML
	} else {
		this.node.innerHTML = value
	}
}

NodesConstructor.prototype.getElement = function(){
	
	return this.node;
}


var node = document.querySelector('div'),
	node1 = new NodesConstructor(node);


// метод append(html) добавляет в конец содержимого узла html;
// node1.append('<span>Добавит спан вконец</span>')


// метод prepend(html) добавляет в начало содержимого;
// node1.prepend('<span>Добавит спан в начало</span>')

// метод before(html) вставляет html перед узлом;
// node1.before('<span>Добавит спан перед узлом</span>');

// метод after(html) вставляет html после узла;
// node1.after('<span>Добавит спан после узла</span>');

// метод html([value]) должен вернуть html-содержимое узла (innerHTML), 
// если ни один аргумент не передан, и заменить содержимое на value, 
// если функция вызвана с аргументом;
// node1.html('This is the new text');
// node1.html();

// метод getElement содержит переданный узел (метод должен вернуть узел DOM, 
// переданный при инициализации конструктора).
// node1.getElement()

