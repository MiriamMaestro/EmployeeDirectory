let id1;
//UPDATE EMPLOYEES

//SET VALUES INTO THE MODAL TABLE
$(document).on("click", ".btn-edit", function(){
    fila = $(this).closest("tr");
    id1= fila.find('td:eq(0)').text();
    fname= fila.find('td:eq(1)').text();
    lname= fila.find('td:eq(2)').text();
    department= fila.find('td:eq(4)').text();
    mail= fila.find('td:eq(5)').text();
    $('#updateName').val(fname);
    $('#updateLastName').val(lname);
    $('#UpdateEmail').val(mail);
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: 'POST',
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            $('#updateDepartment option').remove();
            for(let i = 0; i < result['data'].length ; i++){
                let department = result['data'][i]['name'];
                var tag = document.createElement('option');
                tag.value= result['data'][i]["id"] ;
                tag.text = result['data'][i]["name"] ;
                var element = document.getElementById('updateDepartment');
                element.appendChild(tag);
            }
            $('#updateDepartment option:contains("'+department+'")').attr('selected', true);
        }
      });
});
// UPDATE DATES EMPLOYEES
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
//INFORMATIO SET VALUES EMPLOYEES
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
let idD;
let locationD;
let departmentD;
/*DEPARTMENT UPDATES */

//CREATE DROPDOWN DEPARTMENT

$(document).on("click", ".btn-department", function(){
    filaDrop = $(this).closest("tr");
    idD= filaDrop.find('td:eq(0)').text();
    departmentD= filaDrop.find('td:eq(1)').text();
    locationD= filaDrop.find('td:eq(2)').text();
     
 
     $.ajax({
         url: "libs/php/getAllDepartments.php",
         type: 'POST',
            error: function (err) {
   
               alert("Error: " + err.responseText.toString())
   
           },
           success: function (result) {
             $('#updateDepartmentDropOptionsData option').remove();
             departmentDrop= filaDrop.find('td:eq(1)').text();
             for(let i = 0; i < result['data'].length ; i++){
                 var tagl = document.createElement('option');
                 tagl.value = result['data'][i]['name'];
                 var elementl = document.getElementById('updateDepartmentDropOptionsData');
                 elementl.appendChild(tagl);
             }
             $('#updateDepartmentDrop').val(departmentDrop);
            
         }
       });
 });
 $(document).on("click", ".btn-department", function(){
    $.ajax({
        url: "libs/php/getAllLocation.php",
        type: 'POST',
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            
            $("#updateLocationDepartment option").remove();
            for(let i = 0; i < result['data'].length ; i++){
                var tagl = document.createElement('option');
                tagl.value= result['data'][i]["id"] ;
                tagl.text = result['data'][i]["name"] ;
                var elementl = document.getElementById('updateLocationDepartment');
                elementl.appendChild(tagl);
            }
            $('#updateLocationDepartment option:contains("'+locationD+'")').attr('selected', true);
        }
      });
});

 /*
$(document).on("click", ".btn-department", function(){
    filaD = $(this).closest("tr");
    idD= filaD.find('td:eq(0)').text();
    departmentD= filaD.find('td:eq(1)').text();
    locationD= filaD.find('td:eq(2)').text();
    $('#updateDepartmentD').val(departmentD);
    $('#updateLocationD').val(locationD);
});*/
$('#btn-updateDepartment').on('click', ()=>{

    $.ajax({
        url: "libs/php/updateLocation.php",
        type: 'POST',
        data:{
            location : $('#updateLocationDepartment').val(),
            department: $('#updateDepartmentDrop').val(),
            id: idD,
            locationD: locationD,
            departmentD: departmentD
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow1 = $("td").filter(function() {
                return $(this).text() == idD;
            }).closest("tr");
            tableRow1.remove();
            let id = result['data'][0]['id'];
            let departmentName= result['data'][0]['name'];
            let locationName = result['data'][0]['loca'];
            $("#department-tbody").append($("<tr><td style='display:none'>" + id + "</td><td>" + departmentName + "</td><td>" + locationName +"</td><td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal1'><i class='far fa-trash-alt'></i></button> <button class='btn btn-success btn-sm btn-edit btn-department rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit' data-bs-toggle='modal' data-bs-target='#UpdateDepartmentModal' id='btn-editDepartment'><i class='fa fa-edit'></i></button> </td></tr>"));

        }
      });
});

let idDrop;
let filaDrop;
//Create dropdown location
$(document).on("click", "#btnEditLocation", function(){
   filaDrop = $(this).closest("tr");
   idDrop= filaDrop.find('td:eq(0)').text();
    

    $.ajax({
        url: "libs/php/getAllLocation.php",
        type: 'POST',
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            $('#locationOptionsData option').remove();
            locationDrop= filaDrop.find('td:eq(1)').text();
            for(let i = 0; i < result['data'].length ; i++){
                var tagl = document.createElement('option');
                tagl.value = result['data'][i]['name'];
                var elementl = document.getElementById('locationOptionsData');
                elementl.appendChild(tagl);
            }
            $('#locationDepartmentUpdate').val(locationDrop);
        

           // $("#locationDepartment option[value='" + locationDrop + "']").attr('selected', true)
        }
      });
});

//UPDATE LOCATION
$('#btn-updateLocation').on('click', ()=>{
    $.ajax({
        url: "libs/php/updateLocation.php",
        type: 'POST',
        data:{
            name : $("#locationDepartmentUpdate").val(),
            id: idDrop
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            
            filaDrop.remove();
            let locationName = result['data'][0]['name'];
            let id=result['data'][0]['id'];
            $("#location-tbody").append($("<tr><td style='display:none'>" + id + "</td><td>" + locationName +"</td><td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' id='deleteLocation'><i class='far fa-trash-alt'></i></button> <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit' data-bs-toggle='modal' data-bs-target='#UpdateLocationModal' id='btnEditLocation'><i class='fa fa-edit'></i></button> </td></tr>"));
          }
      });
})