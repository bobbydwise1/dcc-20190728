/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

   record(order_id): adds the order_id to the log
   get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
*/


$(document).ready(function() {
  $('#form1').submit(function(event) {
    event.preventDefault();
    let input1 = $('#input1').val()
    $('#output-section-1').text(1);
    $('#output-section-2').text(2);
  });
});
