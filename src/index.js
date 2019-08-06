document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#create-task-form")
    let tasks = []

    form.addEventListener("submit", function(event){
        event.preventDefault()
        let task = event.target[0].value
        const ul = document.querySelector("#tasks")
        const color = document.querySelector("#color_id")
        console.log(color.value)

        const li = document.createElement("li")
       	//li.innerText = task
       	let btn_html = `<button id='clear-btn' data-button='delete' data-name='${task}'>x</button>`
       	li.innerHTML = task + btn_html
       	li.style.color = color.value

        ul.append(li)
        event.target.reset()
    })

    const clear_btn = document.querySelector("#clear-btn")
    clear_btn.addEventListener("click", function(e){
    	if (clear_btn.dataset.name === "all") {
    		const ul = document.querySelector("#tasks")
        	while (ul.firstChild) {
    			ul.firstChild.remove();
    		}
    		    		console.log(clear_btn.dataset.name)

    	} else {
    		console.log(clear_btn.dataset.name)

    	}
        
		
    	//console.log(ul)
    })
	
	 const divTag = document.querySelector("#list")

    divTag.addEventListener("click", function(event){
        // debugger

        if(event.target.dataset.button === "delete"){
        	const ul = document.querySelector("#tasks")
        	for (var i = ul.children.length - 1; i >= 0; i--) {
        		if (ul.children[i].innerText.substr(0, ul.children[i].innerText.length - 1) === event.target.dataset.name) {
        			ul.removeChild(ul.children[i])
        			 console.log(ul.children[i])

        		}
        		
        	}
        } 
       
    })
	


});
