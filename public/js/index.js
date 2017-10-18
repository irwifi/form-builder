$(function() {
  var form_id = $(".build-wrap div div ul").attr("id");

  $("#" + form_id + "-data-action").hide(); // hide code button
  $("#" + form_id + "-clear-action").before($("#" + form_id + "-save-action")); // place save button in front of clear button
  $("#" + form_id + "-clear-action").after('<button type="button" id="frmb-delete-action" class="btn btn-danger" >Delete</button>');
  $("#" + form_id + "-save-action").css({"background": "#38bf3b"}); // change color of save button background to green
  $(".btn").css({"border-radius": "6px", "margin-left": "2px", "margin-right": "2px"}); // add styles to buttons
  $( ".frmb-control" ).wrap( "<ul id = 'form_objects'><li id = 'form_elements'></li></ul>" ).before("<span id='form_element_toggle'>Form Elements</span>").css({"height": "505px"}); // add parent form object wrapping the form elements, place save button in front of clear button
  $("#form_objects").before($(".form-actions")); // place form button in front of form objects
  $(".frmb-control").find("li[data-type^='autocomplete-'], li[data-type='starRating'], li[data-type='user-details']").hide();
  });