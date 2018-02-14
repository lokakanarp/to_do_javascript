const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const myToDoListUl = document.getElementById('my_to_do_list_ul');

const arrayOfTasks = [];

/*bookButton.addEventListener('click', function(){
	books.push({titel: "katten och Ekorren", author: "Loka", isRead: true, url: "http://packetpushers.net/wp-content/uploads/2015/04/accessories-dictionary.png"});
	console.log(books);
	});*/

function putObjectInArray(array, task) {        
	array.push({todo: task, done: false});						
	return array;
};
//En funktion som skapar objekt och lägger i array:en och returnerar array:en.

let toDoListHTML = ""; //En tom string till att börja med.

function makeHTMLOutOfArray(array, string) {
	for(var i = 0; i < array.length; i++){
	  string += `<li>${array[i].todo}</li>`;
	};
	return string;
};
//En funktion som lägger ihop info från en Array till en chunk med HTML.

addButton.addEventListener('click', function(){
	putObjectInArray(arrayOfTasks, input.value);
	//console.log(arrayOfTasks);
	myToDoListUl.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML);
	
	//myToDoListUl.innerHTML = toDoListHTML;
});









//const toDoItems = document.createElement('li'); Fundera över Adjacent HTML