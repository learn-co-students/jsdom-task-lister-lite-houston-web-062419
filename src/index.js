document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const desc = document.querySelector('#new-task-description');
  const ul = document.querySelector('#tasks');

  form.addEventListener('submit', event => {
    event.preventDefault()

    newTask = document.createElement('li')
    newTask.innerText = desc.value
    ul.append(newTask)

    event.target.reset()

    
  });

});
