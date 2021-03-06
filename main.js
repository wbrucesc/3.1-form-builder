// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },

  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

// var container = document.querySelector('.fields');
// var firstNameInput = document.createElement('input');
// var lastNameInput = document.createElement('input');
// var emailInput = document.createElement('input');
// var urlInput = document.createElement('input');
// var langInput = document.createElement('input');
// var textBox = document.createElement('textarea');



for (var i = 0; i < formData.length; i++) {
  var container = document.querySelector('.fields');
  var input = document.createElement('input');
  var icon = formData[i].icon;
  var label = formData[i].label;
  var type = formData[i].type;
  var id = formData[i].id;
  var options = formData[i].options;

  if (type === 'textarea') {
    var input = document.createElement('textarea');
    input.className = "textArea";
    container.appendChild(input);
  }



  //dropdown menu
  else if (type === 'select') {
    var input = document.createElement('select');

    var option = document.createElement('option');
    input.appendChild(option);
    option.textContent = label;
    option.value = '';

    for (var j = 0; j < options.length; j++) {
      var option = document.createElement('option');
      input.appendChild(option);
      option.textContent = options[j].label;
      option.value = options[j].value;
    }
  }
  var glyph = document.createElement('i');  //trying to create icon
    glyph.className = "fa" + icon;
    glyph.setAttribute = "aria-hidden = true";
  input.appendChild(glyph);

  container.appendChild(input);
  input.placeholder = label;
  // input.icon = icon;
  input.type = type;
  input.options = options;
}


// var fontAwesome = document.createElement('i');
// fontAwesome.className = "fa " + faImage;
// container.appendChild(fontAwesome);




// // first Name
// container.appendChild(firstNameInput);
// var firstNameLabel = formData[0].label;
// firstNameInput.placeholder= firstNameLabel;
//
// // last name
// container.appendChild(lastNameInput);
// var lastNameLabel = formData[1].label;
// lastNameInput.placeholder = lastNameLabel;
//
// // email address
// container.appendChild(emailInput);
// var emailLabel = formData[2].label;
// emailInput.placeholder = emailLabel;
//
// // current website
// container.appendChild(urlInput);
// var currentLabel = formData[3].label;
// urlInput.placeholder = currentLabel;
//
// // Select Language
// container.appendChild(langInput);
// var langSelect = formData[4].label;
// langInput.placeholder = langSelect;
//
//
// // Text area
// container.appendChild(textBox);
// var textLabel = formData[5].label;
// textBox.placeholder = textLabel;
