
document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  // ваш код поместить тут


  // Презентация 22
	// Задача 1
  function isParent(parent,child){
  	var parentTag = parent.localName;
  	if (child.closest(parentTag) == parent){
  		console.log(true)
  	} else{
  		console.log(false)
  	}
  }

  	isParent(document.body.children[0],document.querySelector('mark'));
	isParent(document.querySelector('ul'),document.querySelector('mark'));

	// Задача2

	for (var i = 0; i < document.links.length; i++) {
		if(document.links[i].parentElement.parentElement !== document.querySelector('ul')){
		console.log(document.links[i])
		}
	}

	// Задача3
	console.log(document.querySelector('ul').previousElementSibling);
	console.log(document.querySelector('ul').nextElementSibling);

	// Задача4
	
	var res = document.querySelector('ul').childElementCount;

	console.log(`Number of li = ${res}`)	



	// Презентация 23

	// Задача1
	document.querySelector('ul').classList.add('list');


	// Задача2
	document.links[document.links.length-1].id = 'link';

	// Задача3

	var i = 0;
	while(i<document.querySelectorAll('li').length){
		document.querySelectorAll('li')[i].classList.add('item');
		i+=2;
	}

	// Задача4

	var i = 0;
	while(i<document.querySelectorAll('a').length){
		document.querySelectorAll('a')[i].classList.add('custom-link');
		i++
	}
	
});
	// Задача с ООП

	function SuperConstructor(node){
		this.node = node
	}

	SuperConstructor.prototype.getInfo = function(){
		console.log(`tag = ${this.node.localName}, number of children = ${this.node.childElementCount}, parrent = ${this.node.parentElement}`)
	}

	SuperConstructor.prototype.attr = function(name, value){
		if (value == undefined){
			return this.node.getAttribute(name)
		} else{
			return this.node.setAttribute(name,value)
		}
	}

	SuperConstructor.prototype.text = function(value){
		if (value == undefined){
			return this.node.innerHTML
		} else {
			this.node.innerHTML = value
		}
	}

	var node = document.querySelector('a'),
		node1 = new SuperConstructor(node);

// node1.attr('href');
// node1.attr('href', 'contacts');
// node1.text();
// node1.text('new text!!!!!!!!!');

