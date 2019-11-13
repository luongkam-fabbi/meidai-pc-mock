$(document).ready(function (){
  $('.message_tab').click(function (){
    const className = $(this).attr('class');
    if (!className.includes('active')){
      $('.message_tab.active').toggleClass('active');
      $(this).toggleClass('active');
      const hasChatActive = $('.has_chat_active');
      if (hasChatActive.length > 0){
        hasChatActive.each(function(){
          $(this).removeClass('has_chat_active');
        });
      }
      $('.show_new_message.active').removeClass('active');
      $('.new_message_editor.active').removeClass('active'); 
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
    uploader.change(function(event){
      const uploadedFile = event.target.files[0];
      if(uploadedFile.type != "application/pdf"){
        alert("Only PDF file are allowed!");
      }else{
        const fileUrl = URL.createObjectURL(uploadedFile);
        const fileName = uploadedFile.name;
        const a = `<div class='chat_item'>\
          <div class='chat_item_time'>2019/5/22 14:50</div>\
          <div class='chat_item_text'>\
            <span class='arrow_right'></span>\
            <a class="user_pdf_file" href="${fileUrl}" download="${fileName}">${fileName}</a>
            </div>\
        </div>`;
        $('.chat_content').append(a);
        const scrollMessage = $('.scroll_message');
        scrollMessage.scrollTop(scrollMessage.prop("scrollHeight"));
      }
    });
  });
  $("#image_btn").click(function(){
    const uploader = $('<input type="file" accept="image/*" />');
    uploader.click()
    uploader.change(function(event){
      const uploadedFile = event.target.files[0];
      if(!uploadedFile.type.includes('image')){
        alert("Only image file are allowed!");
      }else{
        const fileUrl = URL.createObjectURL(uploadedFile);
        const a = `<div class='chat_item'>\
          <div class='chat_item_time'>2019/5/22 14:50</div>\
          <div class='chat_item_text'>\
            <span class='arrow_right'></span>\
            <img class="user_chat_image" src="${fileUrl}">
            </div>\
        </div>`;
        $('.chat_content').append(a);
        const scrollMessage = $('.scroll_message');
        scrollMessage.scrollTop(scrollMessage.prop("scrollHeight"));
      }
    });
  });
});