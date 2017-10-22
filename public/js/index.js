$(function() {
  var form_id = $(".build-wrap div div ul").attr("id");

  $(".stage-wrap").removeClass("pull-left").addClass("pull-right");
  $(".form-actions").appendTo($(".stage-wrap")).append('<button type="button" id="frmb-delete-action" class="btn btn-danger" >Delete</button>'); // place form buttons below the drop window
  $("#" + form_id + "-save-action").css({"background": "#38bf3b"}); // change color of Save button background to Green
  $("#" + form_id + "-clear-action").before($("#" + form_id + "-save-action")); // place Save button in front of Clear button
  $("#" + form_id + "-data-action").text("Code").css({"background": "#3e3f3a"});
  $(".btn").css({"border-radius": "6px", "margin-left": "2px", "margin-right": "2px"}); // add styles to buttons
  $( ".frmb-control" ).wrap( "<ul id = 'form_objects'><li id = 'form_elements'></li></ul>" ).before("<span class='form_object_toggle active'>Form Elements</span>").css({"display": "block"}).addClass("form_object_inner").find("li[data-type^='autocomplete-'], li[data-type='paragraph']").hide(); // add parent form object wrapping the form elements, hide some of the elements from the list

  var element_list = [["Title", "title"], ["Currency Field", "currency_field"], ["Phone", "phone"], ["Countries", "countries"], ["ReCaptcha", "reCaptcha"], ["Spacer", "spacer"], ["calculator", "Calculator"], ["Activation Code", "activation_code"], ["Address", "address"], ["Toggle Field", "toggle_field"], ["Slider Field", "slider_field"], ["Website URL", "website_url"], ["Time", "time"], ["Skype", "skype"], ["Password Field", "password_field"], ["Image", "image"], ["HTML", "html"], ["Divider", "divider"], ["Mailchimp", "mailchimp"], ["Signature", "signature"], ["Email Address", "email_address"], ["Zipcode & City", "zipcode_city"], ["Color Picker", "color_picker"]];
  for(var element_type in element_list)
  {
    $( ".frmb-control" ).append('<li class="icon input-control new ui-sortable-handle" data-type="' + element_list[element_type][1] + '"><span>' + element_list[element_type][0] + '</span></li>');
  }

  $(".input-control .new").on("click", function() {
    $(".frmb").append();
  });
  $(".input-control .new").removeClass("new");

  // Add Element Properties tab
  $("#form_objects").append('<li id="elements_properties"><span  class="form_object_toggle">Elements Properties</span><div class="form_object_inner element_properties_inner"></div></li>');
  $(".form_object_toggle").on("click", function() {
    $(".form_object_toggle.active").removeClass("active");
    $(this).addClass("active");
    $(".form_object_inner").hide();
    $(this).next(".form_object_inner").show();
  });
});