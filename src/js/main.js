$(document).ready(function(){
  var $body = $('body');
  var $modalOverlay = $('.modal__overlay');
  var $modalWindow = $('.modal__window');
  var $modalCloseBtn = $('.btn-close-modal');
  var $modalLoose = $('#modalLoose');
  var $modalWin = $('#modalWin');

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
      openModal();
      $modalWin.addClass('is-active');
    } else {
      openModal();
      $modalLoose.addClass('is-active');
    }
  });

  function removeValue() {
    $('#checkNumber').val('');
  }

  $('.refreshBtn').on('click', function() {
    createNumbers();
    compareNumbers();
    removeValue();
    console.log(x,y);
  });

  function openModal() {
    $body.addClass('is-fixed');
    $modalOverlay.addClass('is-active');
  }

  function closeModal() {
    $body.removeClass('is-fixed');
    $modalOverlay.removeClass('is-active');
    $modalWindow.removeClass('is-active');
    removeValue();
  }

  $modalOverlay.on('click', function () {
    closeModal();
  });

  $modalCloseBtn.on('click', function () {
    closeModal();
  });

  $('#checkBtn').addClass('disabled');

  $('#checkNumber').change(function(){
    var validated = true;

    if($('#checkNumber').val().length === 0){
      validated = false;
    }
    if(validated) {
      $('#checkBtn').removeClass("disabled");
    }
  });
});
