
const url = 'https://jsonplaceholder.typicode.com';

//
const btn_RequestTodo = document.requestTODOs("btn_RequestTodo");
const btn_FiltrarNom = document.getName("btn_FiltrarNom");
const btn_Sort = document.getElementSorted("btn_sort");
const btn_FiltrarId =document.getIdN("btn_FilrarId")

btn_RequestTodo.onclick = () => originalFetch();
btn_FiltrarNom.onclick = () => getName();
btn_Sort.onclick = () => getElementSorted();
btn_FiltrarId.onclick = () => getIdN();

/*
const button1 = document.getElementById("button1");
button1.addEventListener("click", titulos, true)
button1.onclick = () => titulos();
*/

//---------------------------------------------------

// Promise
// HTTP Request to TODO API
fetch('https://jsonplaceholder.typicode.com/todos')
// HTTP Response to JSON
.then( (response) => { 
  return response.json();
})
// JSON process
.then( (json) => { 
  console.log(json)
  // Filter by completed
  const completedTasks = json.filter( todo => todo.completed == true);
  console.log(completedTasks)
})


// Async await
// Async function
async function requestTODOs() {
  // HTTP Request to TODO API
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  // HTTP Response to JSON
  const json = await response.json();
  return json;
}

requestTODOs().then( (json) => {
  // JSON process
  console.log(json)
  // Filter by completed
  const completedTasks = json.filter( todo => todo.completed == true);
  console.log(completedTasks)
})

//------------------------------------------------------------
//Obtenir nom de cada usuari

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
  return response.json();
})
.then( (json) => { 
  console.log(json)
  // Filtrar per name
  const completedTasks = json.filter( todo => todo.completed == true);
  console.log(completedTasks)
})

//promise
async function getName() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    json.forEach(function(users) {
        console.log(users.name);
    return json;
  });
} 
getName();
//----------------------------------------------------------------
// Ordenar per id al revés

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
  return response.json();
})
.then( (json) => { 
  console.log(json)
  // Filtrar per name
  const completedTasks = json.filter( todo => todo.completed == true);
  console.log(completedTasks)
})

//promise
async function getElementSorted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    const sort = data.sort((a, b) => (a.id > b.id ? -1 : 1));
    console.log(sort);
} 
getElementSorted();
//------------------------------------------------------------------
//Filtrar per id més gran que N=2

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
  return response.json();
})
.then( (json) => { 
  console.log(json)
  // Filtrar per name
  const completedTasks = json.filter( todo => todo.completed == true);
  console.log(completedTasks)
})

//promise
async function getIdN() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    const IdN = json.filter ( i => i.id>2)
} 
getIdN();
//------------------------------------------------------------------
