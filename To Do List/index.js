let task = document.querySelector(`#task`)

let ullength = document.getElementsByTagName("li")

const LIST_DOM = document.querySelector(`#list`)



function newElement() {


    const USER_TASK = task.value


    if (USER_TASK != "" && USER_TASK != 0) {
        $(".success").toast("show");

        let newLi = document.createElement(`li`)

        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        newLi.innerHTML = USER_TASK
        LIST_DOM.append(newLi)
        newLi.append(closeButton)
        task.value = ""






    } else {
        $(".error").toast("show");
        task.value = null

    }
}




list.addEventListener('click', checkedList, false);



function checkedList(event) {
    let list = document.querySelector('ul');



    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');


    }
}





function removeButton() {

    this.parentElement.remove();

}
for (let i = 0; i < ullength.length; i++) {
    let closeButton = document.createElement("span")

    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);

}