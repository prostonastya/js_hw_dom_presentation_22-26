// Задачи слайд 5

// Задача 1, 2
var mark = document.querySelector('mark');
	
	console.log(getComputedStyle(mark).backgroundColor);
	mark.style.background = 'blue';
	console.log(mark.style.background);


// Задача 3
var ul = document.querySelector('ul'),
	li1 = ul.children[0];

console.log(getComputedStyle(li1.firstChild).color);

// Задача 4

var par = document.querySelector('p');
console.log(getComputedStyle(par).fontSize);
console.log(getComputedStyle(par).fontFamily);

// Задача 5

var ul = document.querySelector('ul');

for (var i = 0; i < ul.children.length; i++) {
	ul.children[i].children[0].style.color = 'red'
}

// Задача 6
var link = document.querySelector('span').nextElementSibling;
link.style.display = 'none';

// -------------------------------------------------------

// Задачи в концe презентации

// Задача 1
 	var ul = document.querySelector('ul');
  
	var HeightWithPaddings = ul.clientHeight;
	var HeightWithoutPaddings = parseInt(getComputedStyle(ul).height);

// Задача 2, 3

	var mark = document.querySelector('mark');

	var coord = mark.getBoundingClientRect();


var res = `mark top = ${coord.top}px, mark left = ${Math.round(coord.left)}px `;
console.log(res);
var res2 = `mark bottom = ${coord.bottom}px, mark right = ${Math.round(coord.right)}px `;
console.log(res2);

// Задача 4

var ul = document.querySelector('ul');
var li1 = ul.children[0],
	li2 = ul.children[1];

var li1Right = li1.getBoundingClientRect().right,
	li2Left = li2.getBoundingClientRect().left;

	console.log(`расстояние между 1й и 2й ли = ${li2Left - li1Right}px`);


// Задача - продолжение модуля

function NodesConstructor(node){
	this.node = node;
}

// NodesConstructor.prototype.append = function(html){
	
// 	node.insertAdjacentHTML('beforeend', html)
// }

// NodesConstructor.prototype.prepend = function(html){
	
// 	node.insertAdjacentHTML('afterbegin', html)
// }

// NodesConstructor.prototype.before = function(html){
	
// 	node.insertAdjacentHTML('beforebegin', html)
// }

// NodesConstructor.prototype.after = function(html){
	
// 	node.insertAdjacentHTML('afterend', html)
// }

// NodesConstructor.prototype.html = function(value){
// 	if (value == undefined){
// 		return this.node.innerHTML
// 	} else {
// 		this.node.innerHTML = value
// 	}
// }
// NodesConstructor.prototype.getElement = function(){	
// 	return this.node;
// }

NodesConstructor.prototype.innerHeight = function(){
	
	return parseInt(getComputedStyle(this.node).height);
}

NodesConstructor.prototype.height = function(){
	
	return this.node.offsetHeight;
}

NodesConstructor.prototype.outerHeight = function(){
	
	return this.node.clientHeight;
}

NodesConstructor.prototype.innerWidth = function(){
	
	return parseInt(getComputedStyle(this.node).width);
}

NodesConstructor.prototype.width = function(){
	
	return this.node.offsetWidth;
}

NodesConstructor.prototype.outerWidth = function(){
	
	return this.node.clientWidth;
}

// Должен вернуть значение стила property, не  получается
NodesConstructor.prototype.style = function(property){
	
	return this.node.style.property;
	// return parseInt(getComputedStyle(this.node).property);
}

NodesConstructor.prototype.getPosition = function(){
	
	return this.node.getBoundingClientRect();
}

NodesConstructor.prototype.backToTop = function(){
	
	return window.scrollTo(0,0);
}

var node = document.querySelector('div'),
	node1 = new NodesConstructor(node);

node1.innerHeight();
node1.height();
node1.outerHeight();
node1.innerWidth();
node1.width();
node1.outerWidth();
node1.style('color');// не получается

node1.getPosition();
node1.backToTop();

