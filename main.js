const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const myToDoListUl = document.getElementById('my_to_do_list_ul');
const removeButton = document.getElementById("removeButton");

let arrayOfTasks = [];


//En funktion som skapar objekt och lägger i array:en och returnerar array:en.
function putObjectInArray(array, task) {        
	array.push({todo: task, done: false});						
	return array;
};


let toDoListHTML = ""; //En tom string till att börja med.

//En funktion som lägger ihop info från en Array till en chunk med HTML.
function makeHTMLOutOfArray(array, string) {
	for(var i = 0; i < array.length; i++){
		if(array[i].done == false) {
	  string += `<li>${array[i].todo}</li>`;
		}
	};
	return string;
};


/*addButton.addEventListener('click', function(){
	putObjectInArray(arrayOfTasks, input.value);
	myToDoListUl.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML);
	
});*/

/*const listItems = document.querySelectorAll('li');

for(const item of listItems){
    item.addEventListener('click', function(){
        this.parentElement.removeChild(this);
    })
}
*/

addButton.addEventListener('click', function(){
	putObjectInArray(arrayOfTasks, input.value);
	myToDoListUl.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML);
	console.log(arrayOfTasks);
	const listItems = document.querySelectorAll('li');
	
	
/*function findObjectByValue(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].todo == value) {
            return array[i];
        }
    }
    return null;
}*/
	


for(const item of listItems){
    item.addEventListener('click', function(){
        //this.parentElement.removeChild(this);
		//console.log(this.textContent)
		//console.log(arrayOfTasks.indexOf(this.textContent));
		//let x =findObjectByValue(arrayOfTasks, this.textContent);
		//console.log(x);
		let index = arrayOfTasks.findIndex(x => x.todo == this.textContent);
		console.log(index);
		arrayOfTasks[index].done = true;
		console.log(arrayOfTasks);
    })
	
}
});





//const toDoItems = document.createElement('li'); Fundera över Adjacent HTML