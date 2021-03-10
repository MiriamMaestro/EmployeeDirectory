
let fila;
let id;
$(document).on("click", ".btn-delete", function(){
    fila = $(this).closest("tr");
    id= fila.find('td:eq(0)').text();

   
})
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
})