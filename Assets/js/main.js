var nameList, classList, gradeList;

function init(){
    nameList = document.getElementById("name-list");
    classList = document.getElementById("class-list");
    gradeList = document.getElementById("grade-list");
}

function inputInfo(){
    var name = document.createElement('div');
    var studentClass = document.createElement('div');
    var grades = document.createElement('div');
    
    var inputName = document.getElementById('name-input');
    var inputClass = document.getElementById('class-input');
    var inputGrades =document.getElementById('grade-input');
    
    name.innerHTML = inputName.value;
    studentClass.innerHTML = inputClass.value;
    grades.innerHTML = inputGrades.value;
    
    nameList.appendChild(name);
    classList.appendChild(studentClass);
    gradeList.appendChild(grades);
    resetInput(inputName, inputClass, inputGrades);
}

function resetInput(inName, inClass, inGrades){
    inName.value = '';
    inClass.value = '';
    inGrades.value ='';
    
    inName.focus();
    return;
}