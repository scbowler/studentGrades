var nameList, classList, gradeList, btnList, studentArray;

function init(){
    nameList = document.getElementById("name-list");
    classList = document.getElementById("class-list");
    gradeList = document.getElementById("grade-list");
    btnList = document.getElementById("btn-list");
    studentArray = [];
}

function inputInfo(){
    var name = document.createElement('div');
    var studentClass = document.createElement('div');
    var grades = document.createElement('div');
    var btn = document.createElement('div');
    
    var inputName = document.getElementById('name-input');
    var inputClass = document.getElementById('class-input');
    var inputGrades =document.getElementById('grade-input');
    
    name.innerHTML = inputName.value;
    studentClass.innerHTML = inputClass.value;
    grades.innerHTML = inputGrades.value;
    btn.innerHTML = "<button class='delete' onclick='deleteEntry(this)'>Delete</button>";
    
    var student = {name: name, class: studentClass, grade: grades, button: btn};
    
    studentArray.push(student);
    
    nameList.appendChild(name);
    classList.appendChild(studentClass);
    gradeList.appendChild(grades);
    btnList.appendChild(btn);
    
    resetInput(inputName, inputClass, inputGrades);
    
    calcAvg();
}

function resetInput(inName, inClass, inGrades){
    inName.value = '';
    inClass.value = '';
    inGrades.value ='';
    
    inName.focus();
    return;
}

function calcAvg(){
    var arrLength = studentArray.length;
    var total = 0;
    var highest = [studentArray[0]];
    var lowest = [studentArray[0]];
    
    clearTwoClasses('high', 'low');
    
    if(arrLength < 1){
        document.querySelector('#answer').innerHTML = "0.00";
        return;
    }
    
    for(var i=0; i<arrLength; i++){
        total += parseFloat(studentArray[i].grade.innerHTML);
        
        if(studentArray[i].grade.innerHTML >= highest[0].grade.innerHTML){
            if(studentArray[i].grade.innerHTML == highest[0].grade.innerHTML){
                highest.push(studentArray[i]);
            }else{
                highest = [studentArray[i]];
            }
        }
        if(studentArray[i].grade.innerHTML <= lowest[0].grade.innerHTML){
            if(studentArray[i].grade.innerHTML == lowest[0].grade.innerHTML){
                lowest.push(studentArray[i]);
            }else{
                lowest = [studentArray[i]];
            }
        }
    }
    
    if(studentArray.length > 1 && !(studentArray.length < highest.length || studentArray.length < lowest.length)){
        highLowHighlight(highest, lowest);
    }
    
    document.querySelector('#answer').innerHTML = (total/arrLength).toFixed(2);
}

function deleteEntry(ele){
    var eleIndex = 0;
    var parent = ele.parentElement;
    var arrLength = studentArray.length;
    
    for(var i=0; i<arrLength; i++){
        if(studentArray[i].button == parent){
            eleIndex = i;
        }
    }
    
    nameList.removeChild(studentArray[eleIndex].name);
    classList.removeChild(studentArray[eleIndex].class);
    gradeList.removeChild(studentArray[eleIndex].grade);
    btnList.removeChild(studentArray[eleIndex].button);
    
    studentArray.splice(eleIndex, 1);
    calcAvg();
}

function clearTwoClasses(cls1, cls2){
    
    var class1 = document.querySelectorAll("." + cls1);
    var class2 = document.querySelectorAll("." + cls2);
    var cls1Len = class1.length;
    var cls2Len = class2.length;
    var loop;
    
    if(class1.length > class2.length){
        loop = class1.length;
    }else{
        loop = class2.length;
    }
    
    for (var i=0; i<loop; i++){
        
        if(cls1Len > 0){
            class1[i].classList.remove(cls1);
            class1[i].classList.remove(cls1);
            cls1Len--;
        }
        if(cls2Len > 0){
            class2[i].classList.remove(cls2);
            class2[i].classList.remove(cls2);
            cls2Len--;
        }
    }
}

function highLowHighlight(high, low){
    
    var hLoop = high.length;
    var lLoop = low.length;
    
    for(var i=0; i<hLoop; i++){    
        high[i].button.classList.add('high');
        high[i].class.classList.add('high');
        high[i].grade.classList.add('high');
        high[i].name.classList.add('high');
    }
    
    for(var i=0; i<lLoop; i++){
        low[i].button.classList.add('low');
        low[i].class.classList.add('low');
        low[i].grade.classList.add('low');
        low[i].name.classList.add('low');
    }
}