// Set counter default to zero
//var value = 0

// Display total
$("#value").text(value);

// When button is clicked
$("#plus-btn").click(function(){
  //Add 1 to counter
  value = value + 1;
	// Display total
	$("#value").text(value);
});


//Subtract
$("#minus-btn").click(function(){
  value = value - 1;
  $("#value").text(value);
});







/*
$('.minus-btn').on('click', function(e) {
 e.preventDefault();
 var $this = $(this);
 var $input = $this.closest('div').find('input');

 var value = parseInt($input.val());

        if (value > 1) {
             value = value - 1;
        } else {
             value = 0;
        }

        $input.val(value);

        });

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
         } else {
            value =100;
         }

            $input.val(value);
        });

  $('.like-btn').on('click', function() {
        $(this).toggleClass('is-active');
   });
*/
