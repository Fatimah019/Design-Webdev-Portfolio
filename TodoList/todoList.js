let listContainer=document.getElementById("all-list");
let emptylistContainer=document.getElementById("empty-list-display");
let alllistContainer=document.getElementById("component-4");
let component1=document.getElementById("component-1");
let component2=document.getElementById("component-2");
let component3=document.getElementById("component-3");
let closebook=document.getElementById("close-book").addEventListener("click", closeBook);
let closeexercise=document.getElementById("close-exercise").addEventListener("click", closeExercise);
let closedrink=document.getElementById("close-drink").addEventListener("click", closeDrink);

let gotoRead=document.getElementById("read");
let gotoReadBtn=document.getElementById("goto-read");
gotoReadBtn.addEventListener("click", gotoReadContainer);

let addBookTaskBtn=document.getElementById("add-task-btn-book")
addBookTaskBtn.addEventListener("click", addTask);

let gotoDrink=document.getElementById("drink");
let gotoDrinkBtn=document.getElementById("goto-drink");
gotoDrinkBtn.addEventListener("click", gotoDrinkContainer);

let addDrinkTaskBtn=document.getElementById("add-task-btn-drink");
addDrinkTaskBtn.addEventListener("click", addDrinkTask);

let gotoExercise=document.getElementById("exercise");
let gotoExerciseBtn=document.getElementById("goto-exercise");
gotoExerciseBtn.addEventListener("click", gotoExerciseContainer);

let addExerciseTaskBtn=document.getElementById("add-task-btn-exercise");
addExerciseTaskBtn.addEventListener("click", addExerciseTask);


function gotoReadContainer(){
    if(gotoRead.style.display="block"){
        gotoDrink.style.display="none";
        gotoExercise.style.display="none";
        emptylistContainer.style.display="none";
        alllistContainer.style.display="none";
        component1.style.opacity="0.5";
        component2.style.opacity="0.5";
        component3.style.opacity="0.5";
        gotoRead.style.marginTop="-5px";
    }
}
function gotoExerciseContainer(){
    if(gotoExercise.style.display="block"){
        gotoDrink.style.display="none";
        gotoRead.style.display="none";
        emptylistContainer.style.display="none";
        alllistContainer.style.display="none";
        component1.style.opacity="0.5";
        component2.style.opacity="0.5";
        component3.style.opacity="0.5";
        gotoExercise.style.marginTop="-5px";
    }
}
function gotoDrinkContainer(){
    if(gotoDrink.style.display="block"){
        gotoRead.style.display="none";
        gotoExercise.style.display="none";      
        emptylistContainer.style.display="none";     
        alllistContainer.style.display="none";
        component1.style.opacity="0.5";
        component2.style.opacity="0.5";
        component3.style.opacity="0.5";
        gotoDrink.style.marginTop="-5px";  
    }
}

function closeBook(){
        gotoRead.style.display="none";
        alllistContainer.style.display="block";
        component1.style.opacity="1";
        component2.style.opacity="1";
        component3.style.opacity="1";
        if(alllistContainer.style.display==="block"){
            emptylistContainer.style.display="none";
        }
        
}
function closeExercise(){
    gotoExercise.style.display="none";
        alllistContainer.style.display="block";
        component1.style.opacity="1";
        component2.style.opacity="1";
        component3.style.opacity="1"
        if(alllistContainer.style.display==="block"){
            emptylistContainer.style.display="none";
        }
        else{
            emptylistContainer.style.display="block";
        }
}
function closeDrink(){
    gotoDrink.style.display="none";
        alllistContainer.style.display="block";
        component1.style.opacity="1";
        component2.style.opacity="1";
        component3.style.opacity="1";
        if(alllistContainer.style.display==="block"){
            emptylistContainer.style.display="none";
        }
}

//read appemd tasks
function addTask(e){
    e.preventDefault();
    //create new list
    let newList=document.createElement('DIV');
    
    let lists=document.getElementById("list").appendChild(newList);
    let inputContainer=document.getElementById("input").value;
    let appendInput=document.createTextNode(inputContainer);
    
   
 
    let breakline=document.createElement('br');
    
    //append new list
    newList.appendChild(breakline);
    newList.append(appendInput);
    

    if(inputContainer===""){
        alert("hey, ypu gotta put in a task");
        newList.style.display="none";
    }
    else{
        false;
    }
    //append close button
    let spanClose=document.createElement('SPAN');
    let nodespanClose=document.createTextNode("\u00D7");
        
    spanClose.appendChild(nodespanClose)
    spanClose.setAttribute("class", "closespan");
    lists.appendChild(spanClose);

    spanClose.onclick=function(){
    newList.style.display="none";
    }

    //append check box
    let checkBox=document.createElement('INPUT');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute("class", "checkitem");
    lists.appendChild(checkBox);
    
    //checked tasks to change text color
    if(checkBox.checked=false){
        lists.style.color="green";
    }
    else{
        newList.style.color="black";
    }
    //append color of tasks
    let bookdot=document.createElement('DIV');
    bookdot.setAttribute("class", "bookdot");

if(addBookTaskBtn.onclick=true){
    lists.appendChild(bookdot);
}
else{
    false;
}
lists=[];
     var i=0;
     if(i<inputContainer.length){
         console.log(i++);
     }
//append how long tasks will take
    let howlongp=document.createElement("p");
    let howlongContainer=document.getElementById("howlong").value;
    let howlongappend=document.createTextNode(howlongContainer);
    howlongp.setAttribute("class", "howlong")
    howlongp.appendChild(howlongappend);
    newList.appendChild(howlongp);

    alllistContainer.style.display="block";
    emptylistContainer.style.display="none";
    gotoRead.style.display="none";
    component1.style.opacity="1";
    component2.style.opacity="1";
    component3.style.opacity="1";
    
}

//drink append tasls
function addDrinkTask(e){
    e.preventDefault();
    //create new list
    let newList=document.createElement('DIV');
    let lists=document.getElementById("list").appendChild(newList);
    let inputContainer=document.getElementById("input2").value;
    let appendInput=document.createTextNode(inputContainer);
    let breakline=document.createElement('br');

    
    //append new list
    newList.appendChild(breakline);
    newList.appendChild(appendInput);
    

    if(inputContainer===""){
        alert("hey, ypu gotta put in a task");
        newList.style.display="none";
    }
    else{
        false;
    }
    //append close button
    let spanClose=document.createElement('SPAN');
    let nodespanClose=document.createTextNode("\u00D7");
        
    spanClose.appendChild(nodespanClose)
    spanClose.setAttribute("class", "closespan");
    lists.appendChild(spanClose);

    spanClose.onclick=function(){
    newList.style.display="none";
    }

    //append check box
    let checkBox=document.createElement('INPUT');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute("class", "checkitem");
    lists.appendChild(checkBox);
    
    //checked tasks to change text color
    if(checkBox.checked=true){
       
    }
    else{
        newList.style.color="black";
    }
    //append color of tasks

    let drinkdot=document.createElement('DIV');
    drinkdot.setAttribute("class", "drinkdot");

  
if(addDrinkTaskBtn.onclick=true){
    lists.appendChild(drinkdot);
}
else{
    false;
}

 //append how long tasks will take
    let howlongp=document.createElement("p");
    let howlongContainer=document.getElementById("howlong-2").value;
    let howlongappend=document.createTextNode(howlongContainer);
    howlongp.setAttribute("class", "howlong")
    howlongp.appendChild(howlongappend);
    newList.appendChild(howlongp);

    alllistContainer.style.display="block";
    emptylistContainer.style.display="none";
    gotoDrink.style.display="none";
    component1.style.opacity="1";
    component2.style.opacity="1";
    component3.style.opacity="1";
   
}   

//drink append tasls
function addExerciseTask(e){
    e.preventDefault();
    //create new list
    let newList=document.createElement('DIV');
    let lists=document.getElementById("list").appendChild(newList);
    let inputContainer=document.getElementById("input3").value;
    let appendInput=document.createTextNode(inputContainer);
    let breakline=document.createElement('br');

    
    //append new list
    newList.appendChild(breakline);
    newList.appendChild(appendInput);
    

    if(inputContainer===""){
        alert("hey, ypu gotta put in a task");
        newList.style.display="none";
    }
    else{
        false;
    }
    //append close button
    let spanClose=document.createElement('SPAN');
    let nodespanClose=document.createTextNode("\u00D7");
        
    spanClose.appendChild(nodespanClose)
    spanClose.setAttribute("class", "closespan");
    lists.appendChild(spanClose);

    spanClose.onclick=function(){
    newList.style.display="none";
    }

    //append check box
    let checkBox=document.createElement('INPUT');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute("class", "checkitem");
    lists.appendChild(checkBox);
    
    //checked tasks to change text color
    if(checkBox.checked===true){
        
    }
    
    //append color of tasks

    let exercisedot=document.createElement('DIV');
    exercisedot.setAttribute("class", "exercisedot");

  
if(addExerciseTaskBtn.onclick=true){
    lists.appendChild(exercisedot);
}
else{
    false;
}
 //append how long tasks will take
    let howlongp=document.createElement("p");
    let howlongContainer=document.getElementById("howlong-3").value;
    let howlongappend=document.createTextNode(howlongContainer);
    howlongp.setAttribute("class", "howlong")
    howlongp.appendChild(howlongappend);
    newList.appendChild(howlongp);
   

    alllistContainer.style.display="block";
    emptylistContainer.style.display="none";
    gotoExercise.style.display="none";
    component1.style.opacity="1";
    component2.style.opacity="1";
    component3.style.opacity="1";
}