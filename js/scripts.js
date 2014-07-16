$(document).ready(function () {
  var addressCounter=0;
  $("#add-address").click(function() {
    addressCounter++;
    alert(addressCounter);  // Question: How can I insert custom div id or class? similar to address book app from monday 7/14/14
    $("#new-addresses").append('<div class="new-address addressCounter1">' +
                  '<div class="form-group">' +
                    '<label for="new-street">Address</label>' +
                    '<input type="text" class="form-control new-street" placeholder="Street Address">' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<input type="text" class="form-control new-city" placeholder="City">' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<input type="text" class="form-control new-state" placeholder="State">' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<input type="text" class="form-control new-zip" placeholder="Zipcode">' +
                  '</div>' +
                '</div>');
  });

  $("form#new-contact").submit(function(event) {
    var inputFirstName = $("input#new-firstname").val();
    var inputLastName = $("input#new-lastname").val();
    var inputPhone = $("input#new-phone").val();
    var inputEmail = $("input#new-email").val();
    var newContact = {firstName: inputFirstName, lastName: inputLastName, phone: inputPhone, email: inputEmail, addresses: [] };

    $(".new-address").each(function() {
      var inputStreet = $(this).find("input.new-street").val();
      var inputCity = $(this).find("input.new-city").val();
      var inputState = $(this).find("input.new-state").val();
      var inputZip = $(this).find("input.new-zip").val();
      var newAddress = { street: inputStreet, city: inputCity, state: inputState, zip: inputZip };
      newContact.addresses.push(newAddress);
    });

    $(".addressCounter1").remove(); // removes the additional "add address" fields

    $("#second-column").show();

    $("ul#contacts").append("<li><span class='newContact'>" + newContact.firstName
                              + " " + newContact.lastName + "</span></li>");
    $("#new-contact").find("input").val("");

    $(".newContact").last().click(function (){
      $("#third-column").show();

      $('#third-column h2').text(newContact.firstName + " " + newContact.lastName);
      $('#first-name').text(newContact.firstName);
      $('#last-name').text(newContact.lastName);
      $('#phone').text(newContact.phone);
      $('#email').text(newContact.email);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
        });
     });
    event.preventDefault();
  });

});
