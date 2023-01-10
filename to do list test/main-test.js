
function addtask(){

    if(document.getElementById('newtask').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.getElementById('tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.getElementById('newtask').value}
                </span>
                <button class="delete">
                </button>
                <button class="change">
                </button>
            </div>`;
            document.getElementById("newtask").value = '';
            }   
}