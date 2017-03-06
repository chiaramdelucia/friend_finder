// const apiRoute = require('./routing/apiRoutes.js');

$(document).ready(function() {


  $("#submit").on("click", function(event) {
    event.preventDefault();

    var newFriend = {
      name: $("#friendName").val().trim(),
      photo: $("#photoLink").val().trim(),
      scores: [$("#q1").val(),$('#q2').val(),$('#q3').val(),$('#q4').val(),$('#q5').val(),$('#q6').val(),$('#q7').val(),$('#q8').val(),$('#q9').val(),$('#q10').val()]
    };
   
    $.post("/api/friends", newFriend, function (data){
      console.log(data);
      $('#matchFriendName').text(data.name);
      $("#matchPic").attr("src", data.photo);
    }); 

    //modal
    $('.modal').modal();

  }); //.on click submit

}); //document.ready
