$(document).ready(function(){
  $('#startPageCarousel').carousel({
    interval : false
  });
    var progressPercent = 0;
    var progressPercentIncrementation = 0.1;
      setInterval(function(){
        // console.log(progressPercent);
        if(progressPercent > (100 - progressPercentIncrementation)){
          progressPercent = 0;
          $('#startPageCarousel').carousel('next');
        }else if(($('#startPageCarousel')).is(':hover')){
          progressPercent = progressPercent;
        }else{
        progressPercent += progressPercentIncrementation;
        $('.progressBar').width(progressPercent + '%');
      }
    }, 10);

  $('.item1').click(function(){
      if(($('.active').index()) != 0){
        progressPercent = 0;
        $('.progressBar').width(progressPercent + '%');
        $('#startPageCarousel').carousel(0);
      }
  });
  $('.item2').click(function(){
      if(($('.active').index()) != 1){
        $('#startPageCarousel').carousel(1);
        progressPercent = 0;
        $('.progressBar').width(progressPercent + '%');
      }
  });
  $('.item3').click(function(){
    if(($('.active').index()) != 2){
      $('#startPageCarousel').carousel(2);
      progressPercent = 0;
      $('.progressBar').width(progressPercent + '%');
    }
  });
  $('.item4').click(function(){
    if(($('.active').index()) != 3){
      $('#startPageCarousel').carousel(3);
      progressPercent = 0;
      $('.progressBar').width(progressPercent + '%');
    }
  });
  $('.item5').click(function(){
    if(($('.active').index()) != 4){
      $('#startPageCarousel').carousel(4);
      progressPercent = 0;
      $('.progressBar').width(progressPercent + '%');
    }
  });
  $('.carousel-control-prev').click(function(){
    $('#startPageCarousel').carousel('prev');
    progressPercent = 0;
    $('.progressBar').width(progressPercent + '%');
  });
  $('.carousel-control-next').click(function(){
    $('#startPageCarousel').carousel('next');
    progressPercent = 0;
    $('.progressBar').width(progressPercent + '%');
  });
})
