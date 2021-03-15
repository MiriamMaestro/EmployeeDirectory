$('#btn-add').on('click',()=>{
    $.ajax({
        url: "libs/php/insertUser.php",
        type: 'POST',
        data:{
            firstName : $('#name').val(),
            lastName: $('#lname').val(),
            email: $('#email').val(),
            department: $('#department').val()
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            let firstName = result['data'][0]['firstName'] ;
            let lastName =result['data'][0]['lastName'];
            let location =result['data'][0]['location'];
            let department =result['data'][0]['department'];
            let email =result['data'][0]['email'];
            let id= result['data'][0]['id'];
            $("#directory-tbody").append($("<tr><td style='display:none'>"+ id+"</td>"+ "<td>" + firstName + "</td>" + "<td>" + lastName +"<td class='mobile'>"+ location + "</td>" + "<td class='mobile'>" + department+ "</td>" +"<td class='mobile'>"+ email  +"</td> <td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal'><i class='far fa-trash-alt'></i></button>"+
            " <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit'data-bs-toggle='modal' data-bs-target='#UpdateEmployeeModal'><i class='fa fa-edit'></i></button>  <button class='btn btn-sm btn-info rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Info' data-bs-toggle='modal' data-bs-target='#InfoEmployeeModal'>  <i class='fa fa-info'></i></button></td></tr>"));
           
        }
      });
     
});
$('#btn-addDepartment').on('click',()=>{
    $.ajax({
        url: "libs/php/insertDepartment.php",
        type: 'POST',
        data:{
            department : $('#nameDepartment').val(),
            location: $('#locationDepartment').val()
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {

         
        }
      });
     
});

$('#AddEmployee').on('click', ()=>{
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: 'POST',
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            for(let i = 0; i < result['data'].length ; i++){
                let department = result['data'][i]['name'];
                var tag = document.createElement('option');
                tag.value= result['data'][i]["id"] ;
                tag.text = result['data'][i]["name"] ;
                var element = document.getElementById('department');
                element.appendChild(tag);
            }
        }
      });
     
})

$('#AddDepartment').on('click', ()=>{
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: 'POST',
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            $("#datalistOptions option").remove();
          
            for(let i = 0; i < result['data'].length ; i++){
                var tag = document.createElement('option');
                tag.value= result['data'][i]['name'];
                var element = document.getElementById('datalistOptions');
                element.appendChild(tag);
                
            }
        }
      });
})
$('#AddDepartment').on('click', ()=>{
    $.ajax({
        url: "libs/php/getAllLocation.php",
        type: 'POST',
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            
            $("#locationOptions option").remove();
            for(let i = 0; i < result['data'].length ; i++){
                var tagl = document.createElement('option');
                tagl.value = result['data'][i]['name'];
                var elementl = document.getElementById('locationOptions');
                elementl.appendChild(tagl);
            }
        }
      });
})