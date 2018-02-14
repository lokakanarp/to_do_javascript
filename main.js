const input = document.getElementById('input');
const addButton = document.getElementById('addButton');

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


addButton.addEventListener('click', function(){
	putObjectInArray(arrayOfTasks, input.value);
	console.log(arrayOfTasks);
});






//const toDoItems = document.createElement('li'); Fundera över Adjacent HTML