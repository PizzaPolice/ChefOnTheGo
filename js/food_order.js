// Set counter default to zero
var counter = 0

// Display total
$("#counter").text(counter);

// When button is clicked
$("#plus-btn").click(function(){
  //Add 10 to counter
  counter = counter + 1;
	// Display total
	$("#counter").text(counter);
});


//Subtract
$("#minus-btn").click(function(){
  counter = counter - 1;
  $("#counter").text(counter);
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
