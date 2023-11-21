document.querySelector('#push').addEventListener('click', function() {
    if(document.querySelector('#newtask input').value.length == 0){
          alert("Please Enter a Task")
      }
  
      else{
        
        addTaskHandler();
        document.querySelector('#newtask input').value = "";
      }
  })
  
  function addTaskHandler() {
    document.querySelector('#tasks-list').innerHTML += `
              <div class="task">
                  <div>               
                  <div class="custom-checkbox"></div>
                  <span class="taskname">    
                      ${document.querySelector('#newtask input').value}
                  </span>
                  </div>
                  <button class="delete">
                      <i class="far fa-trash-alt"></i>
                  </button>
               </div>  
          `;
    
          document.querySelectorAll(".delete")
            .forEach(task => task.addEventListener('click', function() {
                  this.parentNode.remove();
              }));
    
          document.querySelectorAll(".custom-checkbox")
            .forEach(task => task.addEventListener('click', function() {
                this.parentNode.classList.toggle("task-completed");
              }));
      
  }