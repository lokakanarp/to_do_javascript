const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const myToDoListDiv = document.getElementById('my_to_do_list_div');
const myDoneListDiv = document.getElementById('my_done_list_div');
const deleteAllButton = document.getElementById("deleteAllButton");
const deleteAllDoneButton = document.getElementById("deleteAllDoneButton");
const errorMessage = document.getElementById("errorMessage");

/*A function that creates objects and but them in an array. 
It also compares objects so there is no dupicates in the array.*/
function putObjectInArray(array, task) { 
	if (array.filter(function(e){ return e.todo == task }).length > 0) {
		errorMessage.innerHTML = `<p>You have already entered this task.<br>Please try again.</p>`;
	}
	else if (task.length < 1){
		errorMessage.innerHTML = `<p>Don't forget to write something.</p>`;
	}
	else {
	array.push({todo: task, done: false});	
		errorMessage.innerHTML = "";
		
	return array;
	}
}; //End of function

//A function that takes data from an array of objects and returns a string of html.
function makeHTMLOutOfArray(array, string, boolean) {
	if(boolean == false) {
		for(let i = 0; i < array.length; i++){
			if(array[i].done == false) {
		  string += 
			`<div>
				<p>${array[i].todo}</p>
				<button class="done"><span class="glyphicon glyphicon-ok"></span> DONE</button>
				<button class="delete"><span class="glyphicon glyphicon-remove"></span> DELETE</button>
			</div>`;
			}
		}
	return string;
	}
	else {
		for(let i = 0; i < array.length; i++){
			if(array[i].done == true) {
		  string += 
			  `<div>
				  <p class="p_done">${array[i].todo}</p>
				  <button class="deleteDone"><span class="glyphicon glyphicon-remove"></span> DELETE</button>
			   </div>`;
			}
		}
	return string;
	}	
}; //End of function

/*A function that deletes some objects in an array depending on the boolean property.*/
function deletePartOfArray(array, boolean) {
	if(boolean == false) {
		for(let i = 0; i < array.length; i++){
			if(array[i].done == false) {
		 		array.splice([i], 1);
			}
		}
	return array;
	}
	else {
		for(var i = 0; i < array.length; i++){
			if(array[i].done == true) {
		  		array.splice([i], 1);	
			}
		}
	return array;
	}	
}; //End of function


let arrayOfTasks = []; //An empty array that will be filled with objects.
let toDoListHTML = ""; //An empty string that will be filled with HTML.


addButton.addEventListener('click', function(){
	putObjectInArray(arrayOfTasks, input.value);
	input.value = "";
	myToDoListDiv.innerHTML = makeHTMLOutOfArray(arrayOfTasks, toDoListHTML, false);

	const doneButtons = document.getElementsByClassName("done");
	for(const doneButton of doneButtons){
		doneButton.addEventListener('click', function(){
			/* The findIndex function takes the text content of a task and matches it with the right object i arrayOfTasks. It returns the index of the object in that array. */
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
					/*The object of a certain index in the array is deleted with splice function.*/
					arrayOfTasks.splice(index, 1);
					/*The task and the buttons are removed from the list on the webpage. */
					this.parentNode.removeChild(this.previousElementSibling);
					this.parentNode.removeChild(this);
				})
			} //End of for loop	
		}) //End of doneButton.Eventlistener loop
	} //End of for loop doneButtons
	
	deleteAllDoneButton.addEventListener('click', function(){
		myDoneListDiv.innerHTML = "";
		deletePartOfArray(arrayOfTasks, true);
		
	});
	
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
	
	deleteAllButton.addEventListener('click', function(){
		myToDoListDiv.innerHTML = "";
		deletePartOfArray(arrayOfTasks, false);
	});
	
}); //End of addButton.EventListener




