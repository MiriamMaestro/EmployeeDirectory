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
  $.ajax({
    url: "libs/php/getAllDepartments.php",
    type: 'POST',
       error: function (err) {

          alert("Error: " + err.responseText.toString())

      },
      success: function (result) {
        $("#list-employee li").remove();
        for(let i = 0; i < result['data'].length ; i++){
         /* var tag = document.createElement('LI');
          tag.id= result['data'][i]["id"] ;
          //tag.text = result['data'][i]["name"] ;
          var textnode = document.createTextNode(result['data'][i]["name"]);
          var element = document.getElementById('list-employee');
          element.appendChild(textnode);*/
          let text = result['data'][i]["name"] 
          var node = document.createElement("LI");  
          node.setAttribute("id", "D"+i);               // Create a <li> node
          var textnode = document.createTextNode(text+": ");         // Create a text node
          node.appendChild(textnode);                              // Append the text to <li>
          document.getElementById("list-employee").appendChild(node); 
          
        }   
      }
    }) 
}) 
$('#employeeModal-btn').on('click', ()=>{
  $.ajax({
    url: "libs/php/add.php",
    type: 'POST',
       error: function (err) {

          alert("Error: " + err.responseText.toString())

      },
      success: function (result) {
        
        for(let i = 0; i < result['data'].length ; i++){
          
        $( "#D"+i ).append( result['data'][i]['COUNT(firstName)']);
      /*  $( "#D2" ).append( result['data'][1]['COUNT(firstName)']);
        $( "#D3" ).append( result['data'][2]['COUNT(firstName)']);
        $( "#D4" ).append( result['data'][3]['COUNT(firstName)']);
        $( "#D5" ).append( result['data'][4]['COUNT(firstName)']);
        $( "#D6" ).append( result['data'][5]['COUNT(firstName)']);
        $( "#D7" ).append( result['data'][6]['COUNT(firstName)']);
        $( "#D8" ).append( result['data'][7]['COUNT(firstName)']);
        $( "#D9" ).append( result['data'][8]['COUNT(firstName)']);
        $( "#D10" ).append( result['data'][9]['COUNT(firstName)']);
        $( "#D11" ).append( result['data'][10]['COUNT(firstName)']);        
        $( "#D12" ).append( result['data'][11]['COUNT(firstName)']);*/
        }
        }   
      })
  });

  $('#employeeModal-btn').on('click', ()=>{
    $.ajax({
      url: "libs/php/getAllLocation.php",
      type: 'POST',
         error: function (err) {
  
            alert("Error: " + err.responseText.toString())
  
        },
        success: function (result) {
          $("#location-list li").remove();
          for(let i = 0; i < result['data'].length ; i++){
           /* var tag = document.createElement('LI');
            tag.id= result['data'][i]["id"] ;
            //tag.text = result['data'][i]["name"] ;
            var textnode = document.createTextNode(result['data'][i]["name"]);
            var element = document.getElementById('list-employee');
            element.appendChild(textnode);*/
            let text = result['data'][i]["name"] 
            var node = document.createElement("LI");  
            node.setAttribute("id", "L"+i);               // Create a <li> node
            var textnode = document.createTextNode(text+": ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("location-list").appendChild(node); 
            
          }   
        }
      }) 
  }) 
$('#employeeModal-btn').on('click', ()=>{
  $.ajax({
    url: "libs/php/addLocation.php",
    type: 'POST',
       error: function (err) {

          alert("Error: " + err.responseText.toString())

      },
      success: function (result) {
        for(let i = 0; i < result['data'].length ; i++){
        $( "#L"+i ).append( result['data'][i]['Count(firstName)']);
        /*$( "#L2" ).append( result['data'][1]['Count(firstName)']);
        $( "#L3" ).append( result['data'][2]['Count(firstName)']);
        $( "#L4" ).append( result['data'][3]['Count(firstName)']);
        $( "#L5" ).append( result['data'][4]['Count(firstName)']);*/
        }
        }   
      })
  });

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
            $("#department-tbody").append($("<tr><td style='display:none'>"+ id+"</td><td>"+ departmentName+"</td><td>"+locationName+"</td><td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal1'><i class='far fa-trash-alt'></i></button> </td></tr>"));
          }
        }
        })
  })