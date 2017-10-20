$(function() {
  var form_id = $(".build-wrap div div ul").attr("id");

  $(".form-actions").appendTo($(".stage-wrap")).append('<button type="button" id="frmb-delete-action" class="btn btn-danger" >Delete</button>'); // place form buttons below the drop window
  $("#" + form_id + "-save-action").css({"background": "#38bf3b"}); // change color of Save button background to Green
  $("#" + form_id + "-clear-action").before($("#" + form_id + "-save-action")); // place Save button in front of Clear button
  $("#" + form_id + "-data-action").text("Code").css({"background": "#3e3f3a"});
  $(".btn").css({"border-radius": "6px", "margin-left": "2px", "margin-right": "2px"}); // add styles to buttons
  $( ".frmb-control" ).wrap( "<ul id = 'form_objects'><li id = 'form_elements'></li></ul>" ).before("<span class='form_object_toggle'>Form Elements</span>").css({"display": "block"}).addClass("form_object_inner").find("li[data-type^='autocomplete-'], li[data-type='starRating'], li[data-type='user-details']").hide(); // add parent form object wrapping the form elements, hide some of the elements from the list

  // Add Element Properties tab
  $("#form_objects").append('<li id="elements_properties"><span  class="form_object_toggle">Elements Properties</span><div class="form_object_inner element_properties_inner"></div></li>');
  $(".form_object_toggle").on("click", function() {
    $(".form_object_inner").hide();
    $(this).next(".form_object_inner").show();
  });
});