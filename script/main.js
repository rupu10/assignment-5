

function time() {
    let currentDate = new Date();
    let timeString = currentDate.toLocaleTimeString();
    return timeString;
}

let currentDate = new Date();
let day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
let date = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
let dayAndDate = `${day}, ${date}`;
document.getElementById('dayDateDisplay').innerText = dayAndDate;







document.getElementById("card-1-btn").addEventListener("click", function(event){
    alert("board updated successfully");
    const task = document.getElementById("task").innerText;
    const convertedTask = parseInt(task);
    const decrement = convertedTask - 1;
    document.getElementById("task").innerText = decrement;

    const rupu = document.getElementById("rupu").innerText;
    const convertedNumber = parseInt(rupu);
    const increment = convertedNumber + 1;
    document.getElementById("rupu").innerText = increment;

    event.target.style.backgroundColor = "gray";
    event.target.style.cursor = 'not-allowed';
    event.target.style.color = "black";
    event.target.disabled = true;

    const heading = document.getElementById("card-1-heading").innerText;
    const container = document.getElementById("history-container");

    const div = document.createElement("div");
    div.classList.add("history-div");
    div.innerText = `you have completed the ${heading} task at ${time()}`;
    container.appendChild(div);

    if(decrement === 0){
        alert("you have completed all task")
    }

})


document.getElementById("card-2-btn").addEventListener("click", function(event){
    alert("board updated successfully");
    const task = document.getElementById("task").innerText;
    const convertedTask = parseInt(task);
    const decrement = convertedTask - 1;
    document.getElementById("task").innerText = decrement;

    const rupu = document.getElementById("rupu").innerText;
    const convertedNumber = parseInt(rupu);
    const increment = convertedNumber + 1;
    document.getElementById("rupu").innerText = increment;

    event.target.style.backgroundColor = "gray";
    event.target.style.cursor = 'not-allowed';
    event.target.style.color = "black";
    event.target.disabled = true;  

    const heading = document.getElementById("card-2-heading").innerText;
    const container = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("history-div");
    div.innerText = `you have completed the ${heading} task ${time()}`;
    container.appendChild(div);

    if(decrement === 0){
        alert("you have completed all task")
    }

})

document.getElementById("card-3-btn").addEventListener("click", function(event){
    alert("board updated successfully");
    const task = document.getElementById("task").innerText;
    const convertedTask = parseInt(task);
    const decrement = convertedTask - 1;
    document.getElementById("task").innerText = decrement;

    const rupu = document.getElementById("rupu").innerText;
    const convertedNumber = parseInt(rupu);
    const increment = convertedNumber + 1;
    document.getElementById("rupu").innerText = increment;

    event.target.style.backgroundColor = "gray";
    event.target.style.cursor = 'not-allowed';
    event.target.style.color = "black";
    event.target.disabled = true; 

    const heading = document.getElementById("card-3-heading").innerText;
    const container = document.getElementById("history-container");

    const div = document.createElement("div");
    div.classList.add("history-div");
    div.innerText = `you have completed the ${heading} task ${time()}`;
    container.appendChild(div);

    if(decrement === 0){
        alert("you have completed all task")
    }

})

document.getElementById("card-4-btn").addEventListener("click", function(event){
    alert("board updated successfully");
    const task = document.getElementById("task").innerText;
    const convertedTask = parseInt(task);
    const decrement = convertedTask - 1;
    document.getElementById("task").innerText = decrement;

    const rupu = document.getElementById("rupu").innerText;
    const convertedNumber = parseInt(rupu);
    const increment = convertedNumber + 1;
    document.getElementById("rupu").innerText = increment;

    event.target.style.backgroundColor = "gray";
    event.target.style.cursor = 'not-allowed';
    event.target.style.color = "black";
    event.target.disabled = true; 

    const heading = document.getElementById("card-4-heading").innerText;
    const container = document.getElementById("history-container");

    const div = document.createElement("div");
    div.classList.add("history-div");
    div.innerText = `you have completed the ${heading} task ${time()}`;
    container.appendChild(div);

    if(decrement === 0){
        alert("you have completed all task")
    }

})


document.getElementById("card-5-btn").addEventListener("click", function(event){
    alert("board updated successfully");
    const task = document.getElementById("task").innerText;
    const convertedTask = parseInt(task);
    const decrement = convertedTask - 1;
    document.getElementById("task").innerText = decrement;

    const rupu = document.getElementById("rupu").innerText;
    const convertedNumber = parseInt(rupu);
    const increment = convertedNumber + 1;
    document.getElementById("rupu").innerText = increment;

    event.target.style.backgroundColor = "gray";
    event.target.style.cursor = 'not-allowed';
    event.target.style.color = "black";
    event.target.disabled = true;  

    const heading = document.getElementById("card-5-heading").innerText;
    const container = document.getElementById("history-container");

    const div = document.createElement("div");
    div.classList.add("history-div");
    div.innerText = `you have completed the ${heading} task ${time()}`;
    container.appendChild(div);

    if(decrement === 0){
        alert("you have completed all task")
    }

})

document.getElementById("card-6-btn").addEventListener("click", function(event){
    alert("board updated successfully");
    const task = document.getElementById("task").innerText;
    const convertedTask = parseInt(task);
    const decrement = convertedTask - 1;
    document.getElementById("task").innerText = decrement;

    const rupu = document.getElementById("rupu").innerText;
    const convertedNumber = parseInt(rupu);
    const increment = convertedNumber + 1;
    document.getElementById("rupu").innerText = increment;

    event.target.style.backgroundColor = "gray";
    event.target.style.cursor = 'not-allowed';
    event.target.style.color = "black";
    event.target.disabled = true;  

    const heading = document.getElementById("card-6-heading").innerText;
    const container = document.getElementById("history-container");

    const div = document.createElement("div");
    div.classList.add("history-div");
    div.innerText = `you have completed the ${heading} task ${time()}`;
    container.appendChild(div);

    if(decrement === 0){
        alert("you have completed all task")
    }

})

const task = document.getElementById("task").innerText;
const convertedTask = parseInt(task);

if(convertedTask === 0){
    alert("congrats! you have completed all task successfully")
}

document.getElementById("clear-btn").addEventListener("click", function (){
    document.getElementById("history-container").innerText = " ";
})


// random collor
let changeBtn = document.getElementById("theme-button");

changeBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = generateRandomColor();
});

function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}





