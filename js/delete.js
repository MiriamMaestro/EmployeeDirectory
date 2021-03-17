/*SELECT ROW FROM DATABASE */
let fila;
let id;
$(document).on("click", ".btn-delete", function(){
    fila = $(this).closest("tr");
    id= fila.find('td:eq(0)').text();

   
})
/*ACCEPT DELETE USER */
$('#acceptDelete').on('click', ()=>{
    $.ajax({
        url: "libs/php/deleteUser.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow = $("td").filter(function() {
                return $(this).text() == id;
            }).closest("tr");
            tableRow.remove();
        }
    })
})
/*DEPARTMENT*/
/*CHECK IF DEPENCY DEPARTMENT */
$(document).on("click", "#deleteDepartment", function(){
    $.ajax({
        url: "libs/php/getDepartmentById.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
              //if($.trim(result)){
            if(result['data'].length === 0){
                 // alert('holalala');
                 $('#deleteDepartmentEnable2').click();
                 
              } else{
                $('#enableDeleteDepartment').click();
              }
        }
    })
});
/*ACCEPT DELETE DEPARTMENT */
/*$('#acceptDelete1').on('click', ()=>{
    $.ajax({
        url: "libs/php/deleteDepartmentByID.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow = $("td").filter(function() {
                return $(this).text() == id;
            }).closest("tr");
            tableRow.remove();
        }
    })
});*/
$('#acceptDelete1').on('click', ()=>{
    $.ajax({
        url: "libs/php/deleteDepartmentByID.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow = $("td").filter(function() {
                return $(this).text() == id;
            }).closest("tr");
            tableRow.remove();
        }
    })
});
$('#acceptDeleteDepartmentDependecy').on('click', ()=>{
    $.ajax({
        url: "libs/php/deleteDepartmentByID.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow = $("td").filter(function() {
                return $(this).text() == id;
            }).closest("tr");
            tableRow.remove();
        }
    })
});

/*LOCATION */
/*CHECK IF DEPENCY LOCATION */
$(document).on("click", "#deleteLocation", function(){
    $.ajax({
        url: "libs/php/getLocationById.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
              //if($.trim(result)){
            if(result['data'].length === 0){
                 // alert('holalala');
                 $('#deleteLocationEnable2').click();
                 
              } else{
                $('#enableDelete').click();
              }
        }
    })
});
/*ACCEPT DELETE LOCATION */
$('#acceptDeleteLocation').on('click', ()=>{
    $.ajax({
        url: "libs/php/deleteLocation.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow = $("td").filter(function() {
                return $(this).text() == id;
            }).closest("tr");
            tableRow.remove();
        }
    })
})
/*
$('#acceptDeleteLocation').on('click', ()=>{
    $.ajax({
        url: "libs/php/deleteLocation.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow = $("td").filter(function() {
                return $(this).text() == id;
            }).closest("tr");
            tableRow.remove();
        }
    })
});*/
$('#acceptDeleteLocationDependecy').on('click', ()=>{
    $.ajax({
        url: "libs/php/deleteLocation.php",
        type: 'POST',
        data:{
            id: id
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            var tableRow = $("td").filter(function() {
                return $(this).text() == id;
            }).closest("tr");
            tableRow.remove();
        }
    })
})

