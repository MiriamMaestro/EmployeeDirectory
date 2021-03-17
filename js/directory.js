$( document ).ready(function() {
    $.ajax({
        url: "libs/php/getAll.php",
        type: 'POST',
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {

              for(let i = 0; i < result['data'].length ; i++){
              let firstName = result['data'][i]['firstName'] ;
              let lastName =result['data'][i]['lastName'];
              let location =result['data'][i]['location'];
              let department =result['data'][i]['department'];
              let email =result['data'][i]['email'];
              let id=result['data'][i]['id'];

            $("#directory-tbody").append($("<tr><td style='display:none'>"+ id+"</td>"+ "<td>" + firstName + "</td>" + "<td>" + lastName +"<td class='mobile'>"+ location + "</td>" + "<td class='mobile'>" + department+ "</td>" +"<td class='mobile'>"+ email  +"</td> <td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal'><i class='far fa-trash-alt'></i></button>"+
            " <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit'data-bs-toggle='modal' data-bs-target='#UpdateEmployeeModal'><i class='fa fa-edit'></i></button>  <button class='btn btn-sm btn-info rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Info' data-bs-toggle='modal' data-bs-target='#InfoEmployeeModal'>  <i class='fa fa-info'></i></button></td></tr>"));

            }   
          }
      });
});

$('#employeeModal-btn').on('click', ()=>{
  var promise = $.ajax({
    url: "libs/php/getAllDepartments.php",
    type: 'POST',
       error: function (err) {

          alert("Error: " + err.responseText.toString())

      },
      success: function (result) {
        $("#list-employee li").remove();
        for(let i = 0; i < result['data'].length ; i++){
          let text = result['data'][i]["name"];
          let id = result['data'][i]['id']; 
          var node = document.createElement("LI");  
          node.setAttribute("id", id);               // Create a <li> node
          var textnode = document.createTextNode(text+": ");         // Create a text node
          node.appendChild(textnode);                              // Append the text to <li>
          document.getElementById("list-employee").appendChild(node); 
          
        }   
      }
    });
  promise.then(function(){
    
    $.ajax({
      url: "libs/php/add.php",
      type: 'POST',
         error: function (err) {
  
            alert("Error: " + err.responseText.toString())
  
        },
        success: function (result) {
          
          for(let i = 0; i < result['data'].length ; i++){
            let departmentID = result['data'][i]['departmentID'];
          $( "#"+departmentID).append( result['data'][i]['COUNT(firstName)']);
        
          }
          }   
        });
  })
})
$('#employeeModal-btn').on('click', ()=>{
  var promise =$.ajax({
    url: "libs/php/getAllLocation.php",
    type: 'POST',
       error: function (err) {

          alert("Error: " + err.responseText.toString())

      },
      success: function (result) {
        $("#location-list li").remove();
        for(let i = 0; i < result['data'].length ; i++){
        
          let text = result['data'][i]["name"];
          let textSpace = result['data'][i]["name"];
          //textSpace = textSpace.replace(/^\s|\s$/g, " ");
          var newStr = textSpace.replace(/\s+/g, '');
          var node = document.createElement("LI");  
          node.setAttribute("id", newStr);               // Create a <li> node
          var textnode = document.createTextNode(text+": ");         // Create a text node
          node.appendChild(textnode);                              // Append the text to <li>
          document.getElementById("location-list").appendChild(node); 
          
        }   
      }
    });
    promise.then(function(){
      $.ajax({
        url: "libs/php/addLocation.php",
        type: 'POST',
           error: function (err) {
    
              alert("Error: " + err.responseText.toString())
    
          },
          success: function (result) {
            for(let i = 0; i < result['data'].length ; i++){
            let nameId= result['data'][i]['location'];
            var nameStr = nameId.replace(/\s+/g, '');
            
            //nameId = nameId.replace(/^\s|\s$/g, " ");
            $( "#"+ nameStr ).append( result['data'][i]['Count(firstName)']);
            
            }
            }   
          })
    }) 
}) 
/*
$('#employeeModal-btn').on('click', ()=>{
  var promise = $.ajax({
    url: "libs/php/getAllDepartments.php",
    type: 'POST',
       error: function (err) {

          alert("Error: " + err.responseText.toString())

      },
      success: function (result) {
        $("#list-employee li").remove();
        for(let i = 0; i < result['data'].length ; i++){
          let text = result['data'][i]["name"] 
          var node = document.createElement("LI");  
          node.setAttribute("id", "D"+i);               // Create a <li> node
          var textnode = document.createTextNode(text+": ");         // Create a text node
          node.appendChild(textnode);                              // Append the text to <li>
          document.getElementById("list-employee").appendChild(node); 
          
        }   
      }
    });
  promise.then(function(){
    
    $.ajax({
      url: "libs/php/add.php",
      type: 'POST',
         error: function (err) {
  
            alert("Error: " + err.responseText.toString())
  
        },
        success: function (result) {
          
          for(let i = 0; i < result['data'].length ; i++){
            
          $( "#D"+i ).append( result['data'][i]['COUNT(firstName)']);
        
          }
          }   
        });
  })
}) 
$('#employeeModal-btn').on('click', ()=>{
  var promise =$.ajax({
    url: "libs/php/getAllLocation.php",
    type: 'POST',
       error: function (err) {

          alert("Error: " + err.responseText.toString())

      },
      success: function (result) {
        $("#location-list li").remove();
        for(let i = 0; i < result['data'].length ; i++){
        
          let text = result['data'][i]["name"] 
          var node = document.createElement("LI");  
          node.setAttribute("id", "L"+i);               // Create a <li> node
          var textnode = document.createTextNode(text+": ");         // Create a text node
          node.appendChild(textnode);                              // Append the text to <li>
          document.getElementById("location-list").appendChild(node); 
          
        }   
      }
    });
    promise.then(function(){
      $.ajax({
        url: "libs/php/addLocation.php",
        type: 'POST',
           error: function (err) {
    
              alert("Error: " + err.responseText.toString())
    
          },
          success: function (result) {
            for(let i = 0; i < result['data'].length ; i++){
            $( "#L"+i ).append( result['data'][i]['Count(firstName)']);
            
            }
            }   
          })
    }) 
}) 
*/
  $('#profile-tab').on('click', ()=>{
    $.ajax({
      url: "libs/php/getAllDepartments.php",
      type: 'POST',
         error: function (err) {
  
            alert("Error: " + err.responseText.toString())
  
        },
        success: function (result) {
          $("#department-tbody tr").remove();
          for(let i = 0; i < result['data'].length ; i++){
            let departmentName = result['data'][i]['name'];
            let locationName = result['data'][i]['loca'];
            let id=result['data'][i]['id'];
           // $("#department-tbody").append($("<tr><td style='display:none'>" + id + "</td><td>" + departmentName + "</td><td>" + locationName +"</td><td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal1'><i class='far fa-trash-alt'></i></button> <button class='btn btn-success btn-sm btn-edit btn-department rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit' data-bs-toggle='modal' data-bs-target='#UpdateDepartmentModal' id='btn-editDepartment'><i class='fa fa-edit'></i></button> </td></tr>"));
            $("#department-tbody").append($("<tr><td style='display:none'>" + id + "</td><td>" + departmentName + "</td><td>" + locationName +"</td><td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' id='deleteDepartment'><i class='far fa-trash-alt'></i></button> <button class='btn btn-success btn-sm btn-edit btn-department rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit' data-bs-toggle='modal' data-bs-target='#UpdateDepartmentModal' id='btn-editDepartment'><i class='fa fa-edit'></i></button> </td></tr>"));

          }
        }
        })
  });
  $('#location-tab').on('click', ()=>{
    $.ajax({
      url: "libs/php/getAllLocation.php",
      type: 'POST',
         error: function (err) {
  
            alert("Error: " + err.responseText.toString())
  
        },
        success: function (result) {
          $("#location-tbody tr").remove();
          for(let i = 0; i < result['data'].length ; i++){
            //let departmentName = result['data'][i]['name'];
            let locationName = result['data'][i]['name'];
            let id=result['data'][i]['id'];
            $("#location-tbody").append($("<tr><td style='display:none'>" + id + "</td><td>" + locationName +"</td><td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' id='deleteLocation'><i class='far fa-trash-alt'></i></button> <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit' data-bs-toggle='modal' data-bs-target='#UpdateLocationModal' id='btnEditLocation'><i class='fa fa-edit'></i></button> </td></tr>"));
          }
        }
        })
  })