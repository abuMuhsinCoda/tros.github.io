const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const middle_name = document.getElementById('middle-name');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const proposed_class = document.getElementById('proposed-class');
const boarding = document.querySelector('#boarding');
const day = document.querySelector('#day');
const submit = document.getElementById('submit');
const display = document.getElementById('display');

console.log(boarding.name);

submit.onclick = function(){
    
    if (boarding.checked){
        display.textContent = `A new ${gender.value} pupil of age ${age.value} has been 
        registered whose names are ${first_name.value} ${middle_name.value} 
        ${last_name.value} and he is proposed to resume as a ${proposed_class.value} 
        ${boarding.id} pupil`;
    } 
    else if (day.checked) {
        display.textContent = `A new ${gender.value} pupil of age ${age.value} has been 
        registered whose names are ${first_name.value} ${middle_name.value} 
        ${last_name.value} and he is proposed to resume as a ${proposed_class.value} 
        ${day.id} pupil`;
    }
    else{
        display.textContent = "No Schooling System has been checked";
    }
 
    return false;
}