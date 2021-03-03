$('.filterBy').on('change',()=>{
    $.ajax({
        url: "libs/php/getAllByDepartment.php",
        type: 'POST',
        data:{
            id : $("#filter input[type='radio']:checked").val()
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            $('#directory-tbody tr').remove();

            for(let i = 0; i < result['data'].length ; i++){
                let firstName = result['data'][i]['firstName'] ;
                let lastName =result['data'][i]['lastName'];
                let location =result['data'][i]['location'];
                let department =result['data'][i]['department'];
                let email =result['data'][i]['email'];
                let id=result['data'][i]['id'];
                $("#directory-tbody").append($("<tr><td style='display:none'>"+ id+"</td>"+ "<td>" + firstName + "</td>" + "<td>" + lastName +"<td class='mobile locationB'>"+ location + "</td>" + "<td class='mobile departmentB'>" + department+ "</td>" +"<td class='mobile'>"+ email  +"</td> <td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal'><i class='far fa-trash-alt'></i></button>"+
                " <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit'data-bs-toggle='modal' data-bs-target='#UpdateEmployeeModal'><i class='fa fa-edit'></i></button>  <button class='btn btn-sm btn-info rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Info' data-bs-toggle='modal' data-bs-target='#InfoEmployeeModal'>  <i class='fa fa-info'></i></button></td></tr>"));
                
        }
        let id1= $("#filter input[type='radio']:checked").val();
        if(id1=="d.name"){
            $("#department-header").removeClass();
            $("#location-header").addClass('mobile');
            $(".departmentB").removeClass();
        } else {

            $(".locationB").removeClass();
            $("#location-header").removeClass();
            $("#department-header").addClass('mobile');
        }
      }
    });
});
$('#locationSearch').on('change',()=>{
    var locationId = $("#locationSearch").val();
    $.ajax({
        url: "libs/php/getUserLocation.php",
        type: 'POST',
        data:{
            id :locationId
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            $('#directory-tbody tr').remove();
            $("#department-header").addClass("mobile");
            
            for(let i = 0; i < result['data'].length ; i++){
                let firstName = result['data'][i]['firstName'] ;
                let lastName =result['data'][i]['lastName'];
                let location =result['data'][i]['location'];
                let department =result['data'][i]['department'];
                let email =result['data'][i]['email'];
                let id=result['data'][i]['id'];
                $("#directory-tbody").append($("<tr><td style='display:none'>"+ id+"</td>"+ "<td>" + firstName + "</td>" + "<td>" + lastName +"<td>"+ location + "</td>" + "<td class='mobile'>" + department+ "</td>" +"<td class='mobile'>"+ email  +"</td> <td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal'><i class='far fa-trash-alt'></i></button>"+
                " <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit'data-bs-toggle='modal' data-bs-target='#UpdateEmployeeModal'><i class='fa fa-edit'></i></button>  <button class='btn btn-sm btn-info rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Info' data-bs-toggle='modal' data-bs-target='#InfoEmployeeModal'>  <i class='fa fa-info'></i></button></td></tr>"));
               
        }
        $("#location-header").removeClass();;
      }
    });
});
$('#departmentSearch').on('change',()=>{
    var departmentId = $("#departmentSearch").val();
    $.ajax({
        url: "libs/php/getUserDepartment.php",
        type: 'POST',
        data:{
            id :departmentId
        },
           error: function (err) {
  
              alert("Error: " + err.responseText.toString())
  
          },
          success: function (result) {
            $('#directory-tbody tr').remove();
            $( "#location-header" ).addClass("mobile");
            for(let i = 0; i < result['data'].length ; i++){
                let firstName = result['data'][i]['firstName'] ;
                let lastName =result['data'][i]['lastName'];
                let location =result['data'][i]['location'];
                let department =result['data'][i]['department'];
                let email =result['data'][i]['email'];
                let id=result['data'][i]['id'];
                $("#directory-tbody").append($("<tr><td style='display:none'>"+ id+"</td>"+ "<td>" + firstName + "</td>" + "<td>" + lastName +"<td class='mobile'>"+ location + "</td>" + "<td>" + department+ "</td>" +"<td class='mobile'>"+ email  +"</td> <td><button class='btn btn-danger btn-sm rounded-0 btn-delete' type='button' data-toggle='tooltip' data-placement='top' data-bs-toggle='modal' data-bs-target='#deleteModal'><i class='far fa-trash-alt'></i></button>"+
                " <button class='btn btn-success btn-sm btn-edit rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Edit'data-bs-toggle='modal' data-bs-target='#UpdateEmployeeModal'><i class='fa fa-edit'></i></button>  <button class='btn btn-sm btn-info rounded-0' type='button' data-toggle='tooltip' data-placement='top' title='Info' data-bs-toggle='modal' data-bs-target='#InfoEmployeeModal'>  <i class='fa fa-info'></i></button></td></tr>"));
                $("#department-header").removeClass(); 
        }

      }
    });
});