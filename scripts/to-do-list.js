let todoList=[{text:'', date:''}];

document.querySelector('.js-add-button').addEventListener('click',()=>{
  addToDo();
});

function addToDo(){
  const inputText=document.querySelector('.js-name-input');
  let text=inputText.value;
  const inputDate=document.querySelector('.js-date-input');
  let date=inputDate.value;
  todoList.push({text, date});
  inputText.value='';
  inputDate.value='';

  renderTodoList();
}

function renderTodoList(){
  let todoHTML='';
  for(let i=0; i<todoList.length; i++){
    const todoObject=todoList[i];
    let text=todoObject.text;
    let date=todoObject.date;
    if(text!='' && date!=''){
    const html=
    `<div class="css-text">${text}</div> 
    <div class="css-date">${date}</div>
    <button class='css-delete-button js-delete-button'>Delete</button>`;
    todoHTML+=html;
    }
    
  }
 
  document.querySelector('.js-todo-list').innerHTML=todoHTML;
  document.querySelectorAll('.js-delete-button').forEach((deletebutton, index)=>{
    deletebutton.addEventListener('click',()=> {
      todoList.splice(index,1);
      renderTodoList();
    });
  });
}