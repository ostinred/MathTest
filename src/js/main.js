$(document).ready(function(){
  var $body = $('body');

  var $n1 = $('#number1 span');
  var $n2 = $('#number2 span');
  var $task = $('.task');
  var $total = $('.summary span');
  var $refreshBtn = $('#refreshBtn');
  var x, y, totalNumber;

  function createNumbers(){
    x = randomNumber();
    y = randomNumber();
    totalNumber = x + y;
  }
  createNumbers();

  function randomNumber() {
    return Math.round((Math.random() * Math.random()) * 100);
  }

  function compareNumbers() {
    if(x > y) {
      var difference = x - y;
      $task.empty().append('<span>x</span> is greater than <span>y</span> of the '+ '<span>'+difference+'</span>');
    } else if(x < y) {
      var difference = y - x;
      $task.empty().append('<span>x</span> is less than <span>y</span> of the '+ '<span>'+difference+'</span>');
    } else {
      $task.empty().append('<span>x</span> and <span>y</span> are equal');
    }
    $total.empty().append(totalNumber);
  }
  compareNumbers();

  $('#checkBtn').on('click', function() {
    if($('#checkNumber').val() == y) {

      alert('Well done. You are right');
    } else {
      alert('Sorry. You\'ve made a mistake');
    }
  });

  $('.refreshBtn').on('click', function() {
    createNumbers();
    compareNumbers();
    console.log(x,y);
  });




});

// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault();
//
//   $('html, body').animate({
//     scrollTop: $($.attr(this, 'href')).offset().top
//   }, 500);
// });
