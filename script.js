$(document).ready(function(){
   $("#imgCarousel,#textCarousel").carousel({
    interval:3000,
    cycle:true;
   });
   
    $('ul li').click(function(){
    // This function will be called every time one of the tabs is clicked
    var clicked_href = $(this).children('a').attr('href');
    $("#Qu").hide();
    $(clicked_href).show();

      
    var clicked_tab = $(this);
    
    // TODO Complete the next line to add the active class to the clicked tab: 
    clicked_tab.addClass('active');
    
    // TODO Complete the next line to remove the active class from the rest:
    clicked_tab.siblings('li').not(clicked_tab).removeClass('active');
 });
 
  
 });
 
 