function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        var currentTaskEl = null;

        function showTaskDescription(taskEl) {
            currentTaskEl = taskEl;
            var name = taskEl.dataset.name || taskEl.querySelector("span").textContent;
            var description = taskEl.dataset.description || "Sem descrição.";
            document.getElementById("taskModalLabel").textContent = name;
            document.getElementById("taskModalDescription").textContent = description;
            var modal = new bootstrap.Modal(document.getElementById("taskModal"));
            modal.show();
        }

        function deleteTask() {
            if (currentTaskEl) {
                currentTaskEl.remove();
                currentTaskEl = null;
            }
            var modal = bootstrap.Modal.getInstance(document.getElementById("taskModal"));
            modal.hide();
        }

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.currentTarget.appendChild(document.getElementById(data));
        }

        function createTask(){
            var x = document.getElementById("inprogress");
            var y = document.getElementById("done");
            var z = document.getElementById("create-new-task-block");
            if (x.style.display === "none") {
                x.style.display = "block";
                y.style.display = "block";
                z.style.display = "none";
            } else {
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "flex";
            }
        }

        function saveTask(){
            // var saveButton = document.getElementById("save-button");
            // var editButton = document.getElementById("edit-button");
            // if (saveButton.style.display === "none") {
            //     saveButton.style.display = "block";
            //     editButton.style.display = "none";
            // } else{
            //     saveButton.style.display = "none";
            //     editButton.style.display = "block";
            // }

            var todo = document.getElementById("todo");
            var taskName = document.getElementById("task-name").value;
            var taskDescription = document.getElementById("task-description").value;
            todo.innerHTML += `
            <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)" onclick="showTaskDescription(this)" data-name="${taskName}" data-description="${taskDescription.replace(/"/g, '&quot;')}">
                <span>${taskName}</span>
            </div>
            `
            createTask();
        }

        function editTask(){
            var saveButton = document.getElementById("save-button");
            var editButton = document.getElementById("edit-button");
            if (saveButton.style.display === "none") {
                saveButton.style.display = "block";
                editButton.style.display = "none";
            } else{
                saveButton.style.display = "none";
                editButton.style.display = "block";
            }
        }
        