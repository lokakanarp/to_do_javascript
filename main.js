const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const myToDoListDiv = document.getElementById('my_to_do_list_div');
const myDoneListDiv = document.getElementById('my_done_list_div');
const removeButton = document.getElementById("removeButton");

/*A function that creates objects and but them in an array. 
It also compares objects so there is no dupicates in the array.*/
function putObjectInArray(array, task) { 
	if (array.filter(function(e){ return e.todo == task }).length > 0) {
		console.log("stop!");
	}
	else {
	array.push({todo: task, done: false});						
	return array;
	}
}; //End of function

//A function that takes data from an array of objects and returns a string of html.
function makeHTMLOutOfArray(array, string, boolean) {
	if(boolean == false) {
		for(var i = 0; i < array.length; i++){
			if(array[i].done == false) {
		  string += 
			`<div>
				<p>${array[i].todo}</p>
				<button class="done">Done</button>
				<button class="delete">Delete</button>
			</div>`;
			}
		}
	return string;
	}
	else {
		for(var i = 0; i < array.length; i++){
			if(array[i].done == true) {
		  string += 
			  `<div>
					<p>${array[i].todo}</p>
					<button class="deleteDone">Delete</button>
			   </div>`;
			}
		}
	return string;
	}	
}; //End of function

let arrayOfTasks = []; //An empty array
let toDoListHTML = ""; //An empty string


/* The addButton.addEventListener is the "parent" of doneButtons and deleteButtons because they don't exist unless you have clicked the addButton */
addButton.addEventListener('click', function(){
	putObjectInArray(arrayOfTasks, input.value);
	input.value = "";
	myToDoListDiv.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML, false);

	const doneButtons = document.getElementsByClassName("done");
	for(const doneButton of doneButtons){
		doneButton.addEventListener('click', function(){
			/* The findIndex function takes the textcontent of a todo and matches it with the right object i arrayOfTasks. It returns the index of the object in that array. */
			let index = arrayOfTasks.findIndex(x => x.todo == this.previousElementSibling.textContent);
			/* The property "done" is changed to true. Now the task won't be displayed in the todo-list, only in the done-list. */
			arrayOfTasks[index].done = true;
			/*The done-list is updated.*/
			myDoneListDiv.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML, true);
			/* The task and the buttons are removed from the todo-list. */
			this.parentNode.removeChild(this.previousElementSibling);
			this.parentNode.removeChild(this.nextElementSibling);
			this.parentNode.removeChild(this);
			
			const deleteDoneButtons = document.getElementsByClassName("deleteDone");
			for(const deleteDoneButton of deleteDoneButtons){
				deleteDoneButton.addEventListener('click', function(){
					let index = arrayOfTasks.findIndex(x => x.todo == this.parentNode.firstElementChild.textContent);
					arrayOfTasks.splice(index, 1);

					this.parentNode.removeChild(this.previousElementSibling);
					this.parentNode.removeChild(this);
			})
	} //End of for loop
			
			
		}) //End of doneButton.Eventlistener loop
	} //End of for loop doneButtons
	
	const deleteButtons = document.getElementsByClassName("delete");
	for(const deleteButton of deleteButtons){
		deleteButton.addEventListener('click', function(){
			let index = arrayOfTasks.findIndex(x => x.todo == this.parentNode.firstElementChild.textContent);
			arrayOfTasks.splice(index, 1);
			
			this.parentNode.removeChild(this.previousElementSibling);
			this.parentNode.removeChild(this.previousElementSibling);
			this.parentNode.removeChild(this);
		})
	} //End of for loop
	
}); //End of addButton.EventListener



//this.parentElement.firstChild.textContent);

