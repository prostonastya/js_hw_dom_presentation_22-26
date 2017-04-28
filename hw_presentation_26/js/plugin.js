document.addEventListener('DOMContentLoaded', function () {
  // здесь будет ваш код  
});

// Задача1
var btnMsg = document.querySelector('#btn-msg');

function alertFunc(e){
	e.preventDefault();
	alert(this.innerText)
}

// btnMsg.addEventListener('click', alertFunc);

// Задача2

function changeBgOver(e){
	e.preventDefault();
	this.style.background = 'red';
}

function removeBgOver(e){
	e.preventDefault();
	this.style.background = '';
}

btnMsg.addEventListener('mouseover', changeBgOver);

// Хотела просто удалить класс при уведении мышки, но тогда фон не меняется обрано
// btnMsg.removeEventListener('mouseout', changeBgOver); 

btnMsg.addEventListener('mouseout', removeBgOver);

// Задача3

var tag = document.getElementById('tag');

function showTag(event){
	event.preventDefault();
	tag.innerHTML = 'Tag: ' + event.target.tagName;
	
}
document.documentElement.addEventListener('click', showTag);

// Задача4

var myEvent = new Event('addLi'),
	btnGenerate = document.getElementById('btn-generate'),	
	ul = document.querySelector('ul');
	

	btnGenerate.addEventListener('addLi', addFunc);

	function addFunc(e){	
		
		var child = document.createElement('li'),
			counter = ul.childElementCount;

		child.innerText = 'Item ' + (counter+1);

		ul.appendChild(child);				
	}

	btnGenerate.dispatchEvent(myEvent);
	var event = new Event('click');