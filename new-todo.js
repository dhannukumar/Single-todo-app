$(".seven").click(function(){
  $("#change").toggle("slow");
});

$( function() {
  $("#datepicker" ).datepicker();
});

$(document).on("click", '#delete', function () {
    $(this).closest(".big").fadeOut(function () {
      $(this).remove();
    });
    return false;
  });

  var file1;
  //this is for change file input
    $('#file22').change( function(event) {
      file1 = URL.createObjectURL(event.target.files[0]);
      console.log(file1);

    });

$('#add').click(function(){
  var title = $('#input-0').val();
  var description = $('#description').val();
  var datepicker = $('#datepicker').val();
  if(title === "" || description === "" || datepicker === ""){
        return false;
  }
  var new_task = "<div class='big'><div class='new-header'>"+ title +"</div><div class='new-description'>"+ description +"</div><div class='new-datepicker'>"+ datepicker +"</div><div id='file'>"+ "<img src='" + file1 + "'/>" +"</div><button id='delete'>Delete task</button></div>";

  $('#one').append(new_task);

  var title = $('#input-0').val("");
  var description = $('#description').val("");
  var datepicker = $('#datepicker').val("");

  $(".big").draggable({
    revert: 'invalid',
    });

    $('#one, #two, #tree').droppable({
        drop: function(event,ui){
          $(ui.draggable).appendTo($(this)).removeAttr('style');

        }
    });

  list = $('#one').html();
    localStorage.setItem('one', list);
    return false;
});
if (localStorage.getItem('one')) {
    $('#one').html(localStorage.getItem('one'));
}

$('#add2').click(function () {
  window.localStorage.clear();
  location.reload();
  return false;
});
