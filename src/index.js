document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#create-task-form")
    
    form.addEventListener("submit", function(event){
        event.preventDefault()
        let task = event.target[0].value
        const div = document.querySelector("#list")

        const li = document.createElement("li")
       	li.innerText = task

        div.append(li)
        event.target.reset()
    })

});
