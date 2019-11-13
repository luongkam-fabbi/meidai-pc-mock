$(document).ready(function(){
  $('.content_header_btn').click(function(e){
    const btnId = $(this).attr('id');
    const inputList = $(`#content_${btnId} input`);
    inputList.each(function(){
      const disabledValue = $(this).attr('disabled');
      $(this).attr('disabled',!disabledValue);
    });
  });
})