document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log(event.target.children[1].value)
    let comment = event.target.children[1].value

    const div = document.querySelector("#list")

    const p = document.createElement("p")
    p.innerText = comment

    div.append(p)

    // event.target.reset()
  })
  
});
