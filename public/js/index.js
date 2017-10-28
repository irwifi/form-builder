$(function() {
  var form_id = $(".build-wrap div div ul").attr("id");

  // Layout Adjustments
  layout_adjustment(form_id);

  // Add additional elements to the from control tab
  load_additional_elements();

  // Add Element Properties tab
  load_element_properties_tab();
});

// Layout Adjustments
let layout_adjustment = (form_id) => {
  $(".stage-wrap").removeClass("pull-left").addClass("pull-right");
  $(".form-actions").appendTo($(".stage-wrap")).append('<button type="button" id="frmb-delete-action" class="btn btn-danger" >Delete</button>'); // place form buttons below the drop window
  $("#" + form_id + "-save-action").css({"background": "#38bf3b"}); // change color of Save button background to Green
  $("#" + form_id + "-clear-action").before($("#" + form_id + "-save-action")); // place Save button in front of Clear button
  $("#" + form_id + "-data-action").text("Code").css({"background": "#3e3f3a"});
  $(".btn").css({"border-radius": "6px", "margin-left": "2px", "margin-right": "2px"}); // add styles to buttons
  $( ".frmb-control" ).wrap( "<ul id = 'form_objects'><li id = 'form_elements'></li></ul>" ).before("<span class='form_object_toggle active'>Form Elements</span>").css({"display": "block"}).addClass("form_object_inner").find("li[data-type^='autocomplete-'], li[data-type='paragraph']").hide(); // add parent form object wrapping the form elements, hide some of the elements from the list
};

// Add additional elements to the from control tab
let load_additional_elements = () => {
  var element_list = [["Spacer", "spacer"], ["Divider", "divider"], ["Title", "title"], ["Phone", "phone"], ["Currency Field", "currency_field"], ["Website URL", "website_url"], ["Time", "time"], ["Skype", "skype"], ["Password Field", "password_field"], ["Address", "address"], ["Zipcode & City", "zipcode_city"], ["Countries", "countries"]];
  // , ["calculator", "calculator"], ["Color Picker", "color_picker"], ["Email Address", "email_address"], ["Mailchimp", "mailchimp"], ["Signature", "signature"], ["HTML", "html"], ["Slider Field", "slider_field"], ["ReCaptcha", "reCaptcha"], ["Activation Code", "activation_code"], ["Toggle Field", "toggle_field"], ["Image", "image"]
  for(var element_type in element_list)  {
    $( ".frmb-control" ).append('<li class="icon input-control new ui-sortable-handle" data-type="' + element_list[element_type][1] + '"><span>' + element_list[element_type][0] + '</span></li>');
  }

  // $(".frmb-control").sortable({
  //   update: function(event, ui) {
  //     ui.sortable("cancel")
  //   }
  // });

  $(".input-control.new").on("click", function() {
    var element_html = get_element_html($(this).attr("data-type"));
    $(".frmb").append(element_html);

    $(".form-field.new").on("click", select_form_element);

    $(".form-field.new .field-actions .del-button").on("click", function() {
      $(this).closest(".form-field").remove();
    });

    $(".form-field.new .toggle-form").on("click", function() {
      $(this).parent().siblings(".frm-holder").toggle();
      $(this).parent().siblings(".prev-holder").toggle();
      $(this).parent().siblings(".field-label").toggleClass("hidden");
    });

    $(".form-field.new .close-field").on("click", function() {
      $(this).parent().toggle();
      $(this).parent().siblings(".prev-holder").toggle();
      $(this).parent().siblings(".field-label").toggleClass("hidden");
    });

    $(".form-field.new").removeClass("new");
  });
  $(".input-control.new").removeClass("new");
};

 // Add Element Properties tab
let load_element_properties_tab = () => {
  $("#form_objects").append('<li id="elements_properties"><span  class="form_object_toggle">Elements Properties</span><div class="form_object_inner element_properties_inner"></div></li>');
  $(".form_object_toggle").on("click", function() {
    $(".form_object_toggle.active").removeClass("active");
    $(this).addClass("active");
    $(".form_object_inner").hide();
    $(this).next(".form_object_inner").show();
  });
};

// Get additional element html
let get_element_html = (element_type) => {
  let field_label, field_preview, field_group;

  switch(element_type) {
    case "spacer":
      field_label = "Spacer";
      field_preview = '<div class="spacer-preview" style="height:30px;"></div>';
      field_group = '\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "divider":
      field_label = "Divider";
      field_preview = '<div class="divider-preview" style="height:30px; border-top: 2px solid black;"></div>';
      field_group = '\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "title":
      field_label = "Title";
      field_preview = '<div class="title-preview">Titles</div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Title</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "phone":
      field_label = "Phone";
      field_preview = '\
      <div class="phone-preview">\
          <span style="display: inline-block;">\
            <div><label class="fb-phone-label">Country Code</label></div>\
            <div>+<span style="display: inline-block;"><input type="phone" class="form-control" value="" style="width: 80px;"></span></div>\
          </span>\
          <span style="display: inline-block;">\
            <div><label class="fb-phone-label">Number</label></div>\
            <div><input type="phone" class="form-control" value="" style="width: 140px;"></div>\
          </span>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Phone</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "currency_field":
      field_label = "Currency";
      field_preview = '\
      <div class="currency-preview">\
          <span style="display: inline-block;">\
            <div><label class="fb-currency-label">Currency</label></div>\
            <div><select type="currency-field" class="form-control" style="width: 80px;">\
              <option value="1">USD</option>\
              <option value="2">EUR</option>\
              <option value="3">GBP</option>\
            </select></div>\
          </span>\
          <span style="display: inline-block;">\
            <div><label class="fb-currency-label">Amount</label></div>\
            <div><input type="currency-field" class="form-control" value="" style="width: 140px;"></div>\
          </span>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Currency</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "website_url":
      field_label = "Website URL";
      field_preview = '<a href="http://url_link">Sample Text</a>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>URL Text</label>\
          <div class="input-wrap">\
              <div name="url_text" placeholder="URL Text" class="fld-text form-control" contenteditable="true">URL Text</div>\
          </div>\
      </div>\
      <div class="form-group label-wrap" style="display: block">\
          <label>URL Link</label>\
          <div class="input-wrap">\
              <div name="url_text" placeholder="URL Text" class="fld-text form-control" contenteditable="true">http://URL_Link</div>\
          </div>\
      </div>\      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "time":
      field_label = "Time";
      field_preview = '\
      <div class="currency-preview">\
          <span style="display: inline-block;">\
            <div><label class="fb-hour-label">Hour</label></div>\
            <div><select type="hour-field" class="form-control" style="width: 80px;">';
      for(var i = 1; i < 13; i++) {
        field_preview = field_preview + '<option value="' + i + '">' + i + '</option>';
      }
      field_preview = field_preview + '</select></div>\
          </span>\
          <span style="display: inline-block;">\
            <div><label class="fb-minute-label">Minute</label></div>\
            <div><select type="minute-field" class="form-control" style="width: 80px;">';
      for(var i = 1; i < 60; i++) {
        field_preview = field_preview + '<option value="' + i + '">' + i + '</option>';
      }
      field_preview = field_preview + '</select></div>\
          </span>\
          <span style="display: inline-block;">\
            <div><label class="fb-second-label">Second</label></div>\
            <div><select type="second-field" class="form-control" style="width: 80px;">';
      for(var i = 1; i < 60; i++) {
        field_preview = field_preview + '<option value="' + i + '">' + i + '</option>';
      }
      field_preview = field_preview + '</select></div>\
          </span>\
          <span style="display: inline-block;">\
            <div><label class="fb-md-label">AM/PM</label></div>\
            <div><select type="md-field" class="form-control" style="width: 80px;">\
              <option value="1">AM</option>\
              <option value="2">PM</option>\
            </select></div>\
          </span>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>12/24 hours</label>\
          <div class="input-wrap">\
                <select><option value="1">12</option><option value="2">24</option></select>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "skype":
      field_label = "Skype";
      field_preview = '\
      <div class="skype-preview">\
            <div><label class="fb-skype-label">Skype</label></div>\
            <div><input type="skype" class="form-control" value="" style="width: 200px;"></div>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Skype Id</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "password_field":
      field_label = "Password";
      field_preview = '\
      <div class="password-preview">\
            <div><label class="fb-password-label">Password</label></div>\
            <div><input type="password" class="form-control" value="" style="width: 200px;"></div>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Password</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "address":
      field_label = "Address";
      field_preview = '\
      <div class="address-preview">\
            <div><label class="fb-address-label">Address</label></div>\
            <div><input type="address" class="form-control" value="" style="width: 600px;"></div>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Address</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "zipcode_city":
      field_label = "Zipcode & City";
      field_preview = '\
      <div class="zipcode_city-preview">\
          <span style="display: block;">\
            <div><label>Zipcode</label></div>\
            <div><input type="text" class="form-control" value="" style="width: 100px;"></div>\
          </span>\
          <span style="display: block;">\
            <div><label>City</label></div>\
            <div><input type="text" class="form-control" value="" style="width: 320px;"></div>\
          </span>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Zipcode & City</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
    case "countries":
      let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
      field_label = "Country";
      field_preview = '\
      <div class="country-preview">\
            <div><label class="fb-country-label">Country</label></div>\
            <div><select style="width: 240px;">';
      for(name in country_list) {
        field_preview = field_preview + '<option value="">' + country_list[name] + '</option>';
      }
      field_preview = field_preview + '</select></div>\
      </div>';
      field_group = '\
      <div class="form-group label-wrap" style="display: block">\
          <label>Label</label>\
          <div class="input-wrap">\
              <div name="label" placeholder="Label" class="fld-label form-control" contenteditable="true">Country</div>\
          </div>\
      </div>\
      <div class="form-group className-wrap" style="display: block">\
          <label>Class</label>\
          <div class="input-wrap">\
              <input name="className" placeholder="space separated classes" class="fld-className form-control" value="" type="text">\
          </div>\
      </div>';
      break;
  }

  let html = '\
  <li class="'+element_type+'-field form-field new" type="'+element_type+'">\
    <div class="field-actions"><a type="remove" class="del-button btn icon-cancel delete-confirm" title="Remove Element"></a><a type="edit" class="toggle-form btn icon-pencil" title="Edit"></a><a type="copy" class="copy-button btn icon-copy" title="Copy"></a></div>\
    <label class="field-label hidden">'+field_label+'</label><span class="required-asterisk" style=""> *</span><span class="tooltip-element" tooltip="undefined" style="display:none">?</span>\
    <div class="prev-holder">\
      <div class="form-group field-preview">'+field_preview+'</div>\
    </div>\
    <div class="frm-holder">\
      <div class="form-elements">'+field_group+'</div>\
      <a class="close-field">Close</a>\
    </div>\
  </li>';
  return html;
};