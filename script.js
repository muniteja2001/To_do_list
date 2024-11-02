const text = document.getElementById('text');
        const plus = document.getElementById('plus');
        const border = document.getElementsByClassName('container')[0];

        plus.addEventListener('click', function () {
            // Trim the input value to remove extra spaces
            let trimmedText = text.value.trim();

            // If input is empty, do nothing
            if (trimmedText === "") {
                return;
            }

            // Create a new task container div
            let div = document.createElement('div');
            div.className = 'task-container';

            // Create a h1 element for the task text
            let taskText = document.createElement('h1');
            taskText.className = 'task-text';
            let txtNode = document.createTextNode(trimmedText);
            taskText.appendChild(txtNode);
            div.appendChild(taskText);

            // Create a button container for the task action buttons
            let buttonContainer = document.createElement('div');
            buttonContainer.className = 'task-buttons';

            // 'ok' button (mark as completed, toggle strikethrough)
            let ok = document.createElement('button');
            let image1 = document.createElement('img');
            image1.setAttribute('src', './check-mark.png');
            image1.setAttribute('alt', 'tick mark icon');
            ok.appendChild(image1);
            buttonContainer.appendChild(ok);
            ok.addEventListener('click', function () {
                // Toggle strikethrough on and off
                if (taskText.style.textDecoration === 'line-through') {
                    taskText.style.textDecoration = 'none';
                } else {
                    taskText.style.textDecoration = 'line-through';
                }
            });

            // 'edit' button (edit the task)
            let edit = document.createElement('button');
            let image2 = document.createElement('img');
            image2.setAttribute('src', './pen.png');
            image2.setAttribute('alt', 'edit icon');
            edit.appendChild(image2);
            buttonContainer.appendChild(edit);
            edit.addEventListener('click', function () {
                let newText = prompt("Edit your note:", taskText.textContent);
                if (newText !== null && newText.trim() !== "") {
                    taskText.textContent = newText.trim(); // Update the text with the edited content
                }
            });

            // 'delete' button (remove the task)
            let del = document.createElement('button');
            let image3 = document.createElement('img');
            image3.setAttribute('src', './delete.png');
            image3.setAttribute('alt', 'delete icon');
            del.appendChild(image3);
            buttonContainer.appendChild(del);
            del.addEventListener('click', function () {
                div.remove(); // Remove the entire task div
            });

            // Append the button container to the task div
            div.appendChild(buttonContainer);

            // Append the new task to the container
            border.appendChild(div);

            // Clear the input field after adding the task
            text.value = "";
        });