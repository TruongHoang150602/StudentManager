class Student {
    constructor(mssv, name, gender, dob, phone, work_id){
        this.mssv = mssv;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.phone = phone;
        this.work_id = work_id;
    }
}

var databases = []

let a = new Student(20205134,"Hoàng Vân Trường","nam","2002-06-15", "0392582089", 20131)
let b = new Student(20205133,"Ahihi","nam","2002-06-15", "0392582089", 20131)
let c = new Student(20202000,"Ahuhu","nam","2002-06-15", "0392582089", 20131)
databases.push(a)
databases.push(b)
databases.push(c)

function showData(databases){
    var tableBody = document.querySelector("table #tableBody");
    var content = "";
    for (var i = 0; i < databases.length; i++) {
        content += "<tr>";
        content += "<td>" + databases[i].mssv + "</td>";
        content += "<td>" + databases[i].name + "</td>";
        content += "<td>" + databases[i].gender + "</td>";
        content += "<td>" + databases[i].dob + "</td>";
        content += "<td>" + databases[i].phone + "</td>";
        content += "<td>" + databases[i].work_id + "</td>";
        content +=     `<td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever=` + i +`>
                                <i class="bi bi-pen" ></i></button>
                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever=` + i +`><i class="bi bi-trash" ></i></button></td>`
        content += "</tr>";
    }   
    tableBody.innerHTML = content;
}

showData(databases);




const editModal = document.getElementById('editModal')
editModal.addEventListener('show.bs.modal', event => {

    const button = event.relatedTarget
    let index = button.getAttribute('data-bs-whatever')
    console.log(index)

    const mssvInput = editModal.querySelector('.modal-body #mssv')
    const nameInput = editModal.querySelector('.modal-body #name')
    const genderInput = editModal.querySelectorAll('.modal-body .gender')
    const dobInput = editModal.querySelector('.modal-body #dob')
    const phoneInput = editModal.querySelector('.modal-body #phone')
    const workInput = editModal.querySelector('.modal-body #work')
    if(index!=null){
        mssvInput.value = databases[index].mssv     
        nameInput.value = databases[index].name
        if(databases[index].gender == "nam")
            genderInput[0].checked = true
        else
            genderInput[0].checked = true
        dobInput.value = databases[index].dob
        phoneInput.value = databases[index].phone
        workInput.value = databases[index].work_id
    }
    
    const updateButton = document.getElementById("update");
    updateButton.addEventListener("click", function(event) {
        event.preventDefault();
        let gender
        if(genderInput[0].checked)
            gender = "nam"
        else
            gender = "nữ"

        let tmp = new Student(mssvInput.value, nameInput.value, gender, dobInput.value, phoneInput.value, workInput.value)
        if(index == null){
            databases.push(tmp)
        }
        else{
            databases[index] = tmp;
        } 
        console.log(databases)
        showData(databases)
    });
})

const deleteModal = document.getElementById("deleteModal")
deleteModal.addEventListener('show.bs.modal', event =>{
    const button = event.relatedTarget
    const index = button.getAttribute('data-bs-whatever')
    console.log(index)

    const confirmDeleteBtn = document.getElementById("confirm-dlt-btn")
    console.log(confirmDeleteBtn)

    confirmDeleteBtn.addEventListener("click", function(event) {
        databases.slice(index)
        databases.splice(index,1)
        showData(databases)
    });
})



