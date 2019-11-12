function closeModal(){
  document.getElementById('my_page_modal').style.display="none";
  document.getElementById('my-page-modal-search').style.display="none";
} 
$(document).ready(function () {
  const checkBoxCheckAllInit = $('#checkbox_input_field_1_all');
  const checkBoxAllInit = $('.checkbox1');
  if(checkBoxCheckAllInit.prop('checked')){
    checkBoxAllInit.each(function() {
      $(this).prop('checked',true)
    });
  }

  function togleModal(isOpen){
    const val = isOpen? 'block' : 'none'  
    $('#my_page_modal').css("display",val);
  } 

  $('#btn_open_modal').click(function(){
    togleModal(true);
  });

  $('#my_modal_close_btn').click(function(){
    togleModal(false);
  });

  $('.checkbox1').click(function(){
    const checkBoxCheckAll = $('#checkbox_input_field_1_all');
    const checkBoxChecked = $('.checkbox1:checked');
    const checkBoxAll = $('.checkbox1');
    if(checkBoxChecked.length === checkBoxAll.length){
      checkBoxCheckAll.prop('checked',true);
      return;
    }
    if(checkBoxChecked.length !== checkBoxAll.length){
      checkBoxCheckAll.prop('checked',false);
    }
  });
  $('#checkbox_input_field_1_all').click(function(){
    const checkBoxCheckAll = $('#checkbox_input_field_1_all');
    const checkBoxAll = $('.checkbox1');
    if(checkBoxCheckAll.prop('checked')){
      checkBoxAll.each(function() {
        $(this).prop('checked',true)
      });
    }else{
      checkBoxAll.each(function() {
        $(this).prop('checked',false)
      });
    }
  });
  $('.option_item_btn').click(function(){
    const currentClassName= $(this).prop('class');    
    if (!currentClassName.includes('option_item_btn_selected')){
      $('.option_item_btn').each(function(){
        $(this).prop('class',currentClassName);
      })
      $(this).prop('class',currentClassName.concat(" option_item_btn_selected"));
    }
  })
});
// ----------------------------  open modal search -----------------------------
$(document).ready(function () {
  const checkBoxCheckAllInit = $('#checkbox_input_field_1_all');
  const checkBoxAllInit = $('.checkbox1');
  if(checkBoxCheckAllInit.prop('checked')){
    checkBoxAllInit.each(function() {
      $(this).prop('checked',true)
    });
  }

  function togleModal(isOpen){
    const val = isOpen? 'block' : 'none'  
    $('#my-page-modal-search').css("display",val);
  } 

  $('#btn-open-modal-search').click(function(){
    togleModal(true);
  });

  $('#my_modal_close_btn_search').click(function(){
    togleModal(false);
  });

  $('.checkbox1').click(function(){
    const checkBoxCheckAll = $('#checkbox_input_field_1_all');
    const checkBoxChecked = $('.checkbox1:checked');
    const checkBoxAll = $('.checkbox1');
    if(checkBoxChecked.length === checkBoxAll.length){
      checkBoxCheckAll.prop('checked',true);
      return;
    }
    if(checkBoxChecked.length !== checkBoxAll.length){
      checkBoxCheckAll.prop('checked',false);
    }
  });
  $('#checkbox_input_field_1_all').click(function(){
    const checkBoxCheckAll = $('#checkbox_input_field_1_all');
    const checkBoxAll = $('.checkbox1');
    if(checkBoxCheckAll.prop('checked')){
      checkBoxAll.each(function() {
        $(this).prop('checked',true)
      });
    }else{
      checkBoxAll.each(function() {
        $(this).prop('checked',false)
      });
    }
  });
  $('.option_item_btn').click(function(){
    const currentClassName= $(this).prop('class');    
    if (!currentClassName.includes('option_item_btn_selected')){
      $('.option_item_btn').each(function(){
        $(this).prop('class',currentClassName);
      })
      $(this).prop('class',currentClassName.concat(" option_item_btn_selected"));
    }
  })
});
// ----------------------- JS calendar------------------
