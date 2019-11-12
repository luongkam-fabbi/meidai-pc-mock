$(document).ready(function (){
  $('.message_tab').click(function (){
    const className = $(this).attr('class');
    if (!className.includes('active')){
      $('.message_tab.active').toggleClass('active');
      $(this).toggleClass('active');
      console.log($('.message_tab.active'))
    }
  });
  $('.bookmark_btn').click(function (){
    $(this).toggleClass('active');
  });
  $('.message_content').click(function (){
    const deactiveChat = $('.message_item.has_chat_active');
    if(deactiveChat.length ===0){
      $('.message_item').each( function(){
          $(this).addClass('has_chat_active');
        }
      );
      $(this).parent().removeClass('has_chat_active');
      $('.show_new_message').toggleClass('active');
      $('.new_message_editor').toggleClass('active');
    }else{
      deactiveChat.each(function(){
        $(this).removeClass('has_chat_active');
      });
      $('.show_new_message').toggleClass('active');
      $('.new_message_editor').toggleClass('active');
    }
  });
  $("#pdf_btn").click(function(){
    const uploader = $('<input type="file" accept=".pdf" />');
    uploader.click()

  });
  $("#image_btn").click(function(){
    const uploader = $('<input type="file" accept="image/*" />');
    uploader.click()
    // const userImage="..\/assets\/images\/message_list\/arrow-right-blue.png";
    // const a = `<div class='chat_item'>\
    //   <div class='chat_item_time'>2019/5/22 14:50</div>\
    //   <div class='chat_item_text'>\
    //     <span class='arrow_right'></span>\
    //     <img class="user_chat_image" src="${userImage}">
    //     </div>\
    // </div>`;
    // $('.chat_content').append(a);
  });
});