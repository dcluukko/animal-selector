$(document).ready(function() {
  // $("select.answer").click(function() {
  //   console.log(this);
  // });

  $("select.form-control").change(function() {
    console.log(this.value);

    var selection = parseInt($(this).val());

    console.log(selection);

    if (selection === 1 ) {
      $(".turtle").show();
    } else if (selection === 2 ) {
      $(".snakes").show(); 
    } else {
      $(".insects").show(); 
    }
  });

});



// $(document).ready(function() {
//   var age = parseInt(prompt("How old are you?"));

//   if (age > 21) {
//     $('#drinks').show();
//   } else if (age === 21) {
//     alert("Now don't go crazy!");
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });

