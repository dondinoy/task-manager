let taskarray = [];


function add_task(){
  if (localStorage.getItem("task")!=""){
    let count = 0;
    str= localStorage.getItem("task");
    for (let i=0; i<str.length;i++) {
      if (str.charAt(i)==",")
      count+=1;
    }
    
    for (let i=0; i<count;i++) {
    const form= document.querySelector("#new_Task_Form");
    const input=document.querySelector("#new_Task_Input");
    const list_el=document.querySelector("#tasks");
    const task_el= document.createElement("div");

      task_el.classList.add("task");      

      const task_content_el= document.createElement("div");
      task_content_el.classList.add("content");

      let str_old = localStorage.getItem("task")
      let str_new = str_old.split(',');
      // alert(str_new[i]);

      task_content_el.innnerText=str_new[i];
      task_el.appendChild(task_content_el);

      const task_input_el= document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type="text";
      task_input_el.value= str_new[i];
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);
      
      const date_add = document.createElement("div");
      const date_add_input=document.createElement("input");
      date_add_input.type="date";

      task_el.appendChild(date_add);
      date_add.appendChild(date_add_input);

      date_add_input.addEventListener('change', () => {        
          if(Date.parse(date_add_input.value)<Date.now())
          {
            
            task_el.classList.add("task-new");
            task_el.style.backgroundColor="purple";
          }else{
            task_el.classList.add("task");
            task_el.style.backgroundColor="var(--dark)";
          }
          

      });
      
      const task_action_el=document.createElement("div");
      task_action_el.classList.add("actions");
      
      const task_edit_el=document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML="edit"; 
      task_edit_el.style="color:fuchsia"

      
      const task_delete_el=document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML="delete";
      task_delete_el.style="color:red"
      
      const task_complete_el=document.createElement("button");
      task_complete_el.classList.add("complete");
      task_complete_el.innerHTML="complete";
      task_complete_el.style="color:green"

      task_action_el.appendChild(task_edit_el);
      task_action_el.appendChild(task_delete_el);
      task_action_el.appendChild(task_complete_el);
      
      task_el.appendChild(task_action_el);
      list_el.appendChild(task_el);
      
      input.value="";

      task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText.toLocaleLowerCase()==
        "edit"){
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
          task_edit_el.innerText= "save";
          task_edit_el.style="color:red"
        }else{
          task_input_el.setAttribute("readonly","readonly");
          task_edit_el.innerText= "edit";
          task_edit_el.style="color:fuchsia"
        }
      });
        task_delete_el.addEventListener('click', () => {
          list_el.removeChild(task_el);
          let str = localStorage.getItem("task");
          let str_new1 = str.replace(str_new[i].concat(","),"")
          localStorage.setItem("task",str_new1);
          
      });
      task_complete_el.addEventListener('click', () => {
          list_el.removeChild(task_el);
          let str = localStorage.getItem("task");
          let str_new1 = str.replace(str_new[i].concat(","),"")
          localStorage.setItem("task",str_new1);
          

      });
    }
  }
}

  window.addEventListener('load', () => {
    const form= document.querySelector("#new_Task_Form");
    const input=document.querySelector("#new_Task_Input");
    const list_el=document.querySelector("#tasks");
    form.addEventListener('submit',(e) => {
    e.preventDefault();
      
      const task = input.value;
        if (!task){
          alert("Please Fill The Form");
          return;
        }
      let str = localStorage.getItem('task');
      str+=task+",";
      localStorage.setItem('task', str);
      
      const task_el= document.createElement("div");
      task_el.classList.add("task");      

      const task_content_el= document.createElement("div");
      task_content_el.classList.add("content");

      task_content_el.innnerText=task;
      task_el.appendChild(task_content_el);

      const task_input_el= document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type="text";
      task_input_el.value= task;
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);

      const date_add = document.createElement("div");
      const date_add_input=document.createElement("input");
      date_add_input.type="date";

      task_el.appendChild(date_add);
      date_add.appendChild(date_add_input);

      date_add_input.addEventListener('change', () => {        
          if(Date.parse(date_add_input.value)<Date.now())
          {
            
            task_el.classList.add("task-new");
            task_el.style.backgroundColor="purple";
          }else{
            task_el.classList.add("task");
            task_el.style.backgroundColor="var(--dark)";
          }
          

      });

      const task_action_el=document.createElement("div");
      task_action_el.classList.add("actions");
      
      const task_edit_el=document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML="edit";
      task_edit_el.style="color:fuchsia"

      
      const task_delete_el=document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML="delete";
      task_delete_el.style="color:red"
      
      const task_complete_el=document.createElement("button");
      task_complete_el.classList.add("complete");
      task_complete_el.innerHTML="complete";
      task_complete_el.style="color:green"

     
      task_action_el.appendChild(task_edit_el);
      task_action_el.appendChild(task_delete_el);
      task_action_el.appendChild(task_complete_el);
      
      task_el.appendChild(task_action_el);
      list_el.appendChild(task_el);
      console.log(task)
      input.value="";

      task_edit_el.addEventListener('click', () => {
        
        if (task_edit_el.innerText.toLocaleLowerCase()==
        "edit"){
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
          task_edit_el.innerText= "save";
          task_edit_el.style="color:red"

           let str = localStorage.getItem('task');
            str+=task+",";
            localStorage.setItem('task', str);

        }else{
          task_input_el.setAttribute("readonly","readonly");
          task_edit_el.innerText= "edit";
          task_edit_el.style="color:fuchsia"
        }
        
      });
        task_delete_el.addEventListener('click', () => {
          list_el.removeChild(task_el);
          let str = localStorage.getItem("task");
          let str_new = str.replace(task.concat(","),"")
          localStorage.setItem("task",str_new);
          
      });
      task_complete_el.addEventListener('click', () => {
          list_el.removeChild(task_el);
          let str = localStorage.getItem("task");
          let str_new = str.replace(task.concat(","),"")
          localStorage.setItem("task",str_new);
          

      });
    })
  })
