// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
// A JavaScript function that adds the new row to the table when the form is submitted.
let id =0;
// This creates a new table row evertime it is clicked to create
document.getElementById('add').addEventListener('click', () =>{
    let name = document.getElementById('fullName').value;
    let power = document.getElementById('power').value;    
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id',`item-${id}`);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = power;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('fullName').value = '';
    document.getElementById('power').value = '';
});
// this function creates a delete button tied to the given row
function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.innerHTML = 'Delete';
    btn.id = id;
    btn.onclick = () =>{
        let elementToDelete = document.getElementById(`item-${id}`);
            elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;

}