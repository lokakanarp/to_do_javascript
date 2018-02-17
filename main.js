const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const myToDoListUl = document.getElementById('my_to_do_list_ul');
const myDoneListUl = document.getElementById('my_done_list_ul');
const removeButton = document.getElementById("removeButton");

let arrayOfTasks = [];


//En funktion som skapar objekt och lägger i array:en och returnerar array:en.
function putObjectInArray(array, task) { 
	if (array.filter(function(e){ return e.todo == task }).length > 0) {
		console.log("stop!");
	}
	else {
	array.push({todo: task, done: false});						
	return array;
	}
};

let toDoListHTML = ""; //En tom string till att börja med.

//En funktion som lägger ihop info från en Array till en chunk med HTML.

function makeHTMLOutOfArray(array, string, boolean) {
	if(boolean == false) {
		for(var i = 0; i < array.length; i++){
			if(array[i].done == false) {
		  string += `<div><p>${array[i].todo}</p><button class="remove">Done</button></div>`;
			}
		}
	return string;
	}
	else {
		for(var i = 0; i < array.length; i++){
			if(array[i].done == true) {
		  string += `<div><p>${array[i].todo}</p></div>`;
			}
		}
	return string;
	}	
};



addButton.addEventListener('click', function(){
	putObjectInArray(arrayOfTasks, input.value);
	myToDoListUl.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML, false);

	
	const buttons = document.getElementsByClassName("remove");
	
	for(const button of buttons){
		button.addEventListener('click', function(){
		
			console.log(arrayOfTasks);
			let index = arrayOfTasks.findIndex(x => x.todo == this.previousElementSibling.textContent);
			
			arrayOfTasks[index].done = true;
console.log(this.parentNode);
			this.parentNode.removeChild(this.previousElementSibling);
			this.parentNode.removeChild(this);
		
			
			myDoneListUl.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML, true);
			console.log(myDoneListUl);
		
		})
	}
	
});


//När done uppdateras till true försvinner den från listan.

//const toDoItems = document.createElement('li');