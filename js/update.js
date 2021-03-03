let id1;
$(document).on("click", ".btn-edit", function(){
    fila = $(this).closest("tr");
    id1= fila.find('td:eq(0)').text();
    fname= fila.find('td:eq(1)').text();
    lname= fila.find('td:eq(2)').text();
    //location= fila.find('td:eq(3)').text();
    //department= fila.find('td:eq(4)').text();
    mail= fila.find('td:eq(5)').text();
    $('#updateName').val(fname);
    $('#updateLastName').val(lname);
   // $('#updateDepartment').text(department);
    $('#UpdateEmail').val(mail);
});
$('#btn-update').on('click',()=>{
    $.ajax({
        url: "libs/php/update.php",
        type: 'POST',
        data:{
            firstName : $('#updateName').val(),
            lastName: $('#updateLastName').val(),
            email: $('#UpdateEmail').val(),
            department: $('#updateDepartment').val(),
            id: id1
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
            let id1= result['data'][0]['id'];
            var tableRow1 = $("td").filter(function() {
                return $(this).text() == id1;
            }).closest("tr");
            tableRow1.remove();
           
            $("#directory-tbody").append($("<tr><td style='display:none'>"+ id+"</td>"+ "<td>" + firstName + "</td>" + "<td>" + lastName +"<td class='mobile'>"+ location + "</td>" + "<td class='mobile'>" + department+ "</td>" +"<td class='mobile'>"+ email  +"</td> <td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal'><i class='far fa-trash-alt'></i></button>"+
            " <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit'data-bs-toggle='modal' data-bs-target='#UpdateEmployeeModal'><i class='fa fa-edit'></i></button>  <button class='btn btn-sm btn-info rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Info' data-bs-toggle='modal' data-bs-target='#InfoEmployeeModal'>  <i class='fa fa-info'></i></button></td></tr>"));
           
        }
      });
     
});
$(document).on("click", ".btn-info", function(){
    fila = $(this).closest("tr");
    id1= fila.find('td:eq(0)').text();
    fname= fila.find('td:eq(1)').text();
    lname= fila.find('td:eq(2)').text();
    location1= fila.find('td:eq(3)').text();
    department= fila.find('td:eq(4)').text();
    mail= fila.find('td:eq(5)').text();
    $('#infoName').val(fname);
    $('#infoLastName').val(lname);
     $('#infoDepartment').val(department);
    $('#infoEmail').val(mail);
    $('#infoLocation').val(location1);
});