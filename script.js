const notes=document.querySelector('#addNotes');
const button=document.querySelector('button');
const refresh=document.querySelector('#refresh');
const color=document.getElementById("color");
const colorTxt=document.getElementById("colorTxt");
const noteDisplay=document.getElementById("getNote");
const message1 = document.querySelector('#message');

button.addEventListener('click', function() {
    if (notes.value === "") {
        alert("Please write something in the notes before submitting!"); 
    }
    // else alert("Your note is successfully added!!");
});

button.addEventListener("click",function(){
    let mBox=document.createElement('div');
    let addedNotes=document.createElement('p');
    let crossBtn=document.createElement('button');

    addedNotes.innerText=notes.value;
    crossBtn.innerText="X";
    mBox.appendChild(addedNotes);
    mBox.appendChild(crossBtn);

    noteDisplay.append(mBox);
    mBox.style.backgroundColor=color.value;
    addedNotes.style.color=colorTxt.value;
    notes.value="";

    message.style.display='none';

    crossBtn.addEventListener("click",function(){
        mBox.style.display='none';
    })

});

refresh.addEventListener('click', function() {
    noteDisplay.innerHTML = ""; 
    message1.style.display = 'block'; 
    message1.innerText = 'You have not added a note yet.'; 
});


