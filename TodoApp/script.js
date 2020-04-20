
          const todo = document.querySelector('.text-box');
          const allButton = document.getElementById('all');
          const pendingButton = document.getElementById('pending');
          const completeButton = document.getElementById('completed');
          const lis = document.querySelector('.lis');
          const div = document.querySelector('.todo');
          let allTasks = {};
          let ul;
          let li;
          
          //creating todos
          function createTodos(task){
            let span = document.createElement('span');
            ul.appendChild(span);
            span.classList.add('close')
            li = document.createElement('li');
            span.appendChild(li);
            li.innerText = task;
            let img = document.createElement('img');
            img.src = 'https://www.freeiconspng.com/uploads/black-circle-close-button-png-5.png';
            span.appendChild(img);
          }
          //Adding Items to the list
          function todoHandler(e){
            if(e.key =='Enter' && todo.value !== ""){
              allTasks[todo.value] = {task:todo.value,status:'pending'};
              todo.value = null;
            }
            displayAll();
          }
          //strike out completed task and removing
          function strikeOutAndRemove(e){
            if(e.target.tagName === 'LI'){
              e.target.classList.toggle('checked');
              if(e.target.classList.contains('checked')){
                allTasks[e.target.innerText]['status'] = 'completed';
              }else{
                allTasks[e.target.innerText]['status'] = 'pending';
              }
            // console.table(allTasks);
            }
            if(e.target.tagName === 'IMG'){
              e.target.parentElement.parentElement.removeChild(e.target.parentElement);
              delete allTasks[e.target.parentElement.innerText];
            }
          }
          //Display All tasks in the list
          function displayAll(){
            refresh();
            for (const key in allTasks) {
              if (allTasks.hasOwnProperty(key)){
                createTodos(allTasks[key]['task']);
                if(allTasks[key]['status'] === 'completed'){
                  li.classList.add('checked');
                }else{
                  li.classList.remove('checked');
                }
              }
            }
          }
          //Display Pending Tasks
          function displayPending(){
            refresh();
            for (const key in allTasks) {
              if (allTasks.hasOwnProperty(key)) {
                if(allTasks[key]['status'] === 'pending'){
                  createTodos(allTasks[key]['task']);
                }
              }   
            }
          }
          //Display Completed Tasks
          function displayCompleted(){
            refresh();
            for (const key in allTasks) {
              if (allTasks.hasOwnProperty(key)) {
                if(allTasks[key]['status'] === 'completed'){
                  createTodos(allTasks[key]['task']);
                  if(allTasks[key]['status'] === 'completed'){
                    li.classList.add('checked');
                  }else{
                    li.classList.remove('checked');
                  }
                }
              }
            }
          }
          function refresh(){
           const list = document.querySelector('ul');
           list.parentNode.removeChild(list);
           ul = document.createElement('ul');
           lis.appendChild(ul);
           ul.classList.add('list');
          }
          //Event Listeners
          todo.addEventListener('keydown',todoHandler);
          allButton.addEventListener('click',displayAll);
          pendingButton.addEventListener('click',displayPending);
          completeButton.addEventListener('click',displayCompleted);
          lis.addEventListener('click',strikeOutAndRemove);
      