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