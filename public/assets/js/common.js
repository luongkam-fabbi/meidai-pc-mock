$(document).ready(function () {
    //up to top
    const elmScrollTop = '#up-to-top';
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(elmScrollTop).fadeIn();
        } else {
            $(elmScrollTop).fadeOut();
        }
    });
    $(elmScrollTop).click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Button More
    var showChar = 100;
    var ellipsestext = "...";
    var moretext = "続きを読む &nbsp;";
    var moreimage = "assets/images/extend.png";
    var lessimage = "assets/images/extend2.png";
    var lesstext = "隠す &nbsp;";

    $('.more-text').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h +
                '</span>&nbsp;&nbsp;<a href="#" class="extend morelink"><p>' + moretext + '</p><img src=' + moreimage + '></a></span>';
            $(this).html(html);
        }
    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(".morelink p").html(moretext);
            $(".morelink img").attr("src", moreimage);
        } else {
            $(this).addClass("less");
            $(".morelink p").html(lesstext);
            $(".morelink img").attr("src", lessimage);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    // modal location

    let arrIndex = [1, 2, 3, 4, 5];

    arrIndex.forEach((item, index) => {
        $('.checkbox_location_0' + item + '').click(function () {
            const checkBoxCheckAll = $('#checkbox_location_all_0' + item + '');
            const checkBoxChecked = $('.checkbox_location_0' + item + ':checked');
            const checkBoxAll = $('.checkbox_location_0' + item + '');
            if (checkBoxChecked.length === checkBoxAll.length) {
                checkBoxCheckAll.prop('checked', true);
                return;
            }
            if (checkBoxChecked.length !== checkBoxAll.length) {
                checkBoxCheckAll.prop('checked', false);
            }
        });
        $('#checkbox_location_all_0' + item + '').click(function (event) {
            if (this.checked) {
                // Iterate each checkbox
                $('.checkbox_location_0' + item + '').each(function () {
                    this.checked = true;
                });
            } else {
                $('.checkbox_location_0' + item + '').each(function () {
                    this.checked = false;
                });
            }
        });
    });

    const arrBtnOpenModal = ["#btn_open_modal_location", "#btn_open_modal_industry", "#btn_open_modal_job", "#btn_open_modal_feature"];
    const arrModal = [
        "#my_page_modal_location",
        "#my_page_modal_industry",
        "#my_page_modal_job",
        "#my_page_modal_feature"];

    arrBtnOpenModal.forEach((item, index) => {
        function togleModal(isOpen) {
            const val = isOpen ? 'block' : 'none'
            $(arrModal[index]).css("display", val);
        }
        $(item).click(function () {
            togleModal(true);
        });

        $('.modal_close_btn').click(function () {
            togleModal(false);
        });

        $('.page_modal').click(function (e) {
            if (e.target === this) {
                togleModal(false);
            }
        });
    })
    // modal industry
    // delete item select
    // $(document).on('click', '.search_checkbox_result_item_delete_btn', function () {
    //     $(this).removeAtt;
    // });

    const checkBoxCheckAllInit = $('#checkbox_input_field_1_all');
    const checkBoxAllInit = $('.checkbox1');
    if (checkBoxCheckAllInit.prop('checked')) {
        checkBoxAllInit.each(function () {
            $(this).prop('checked', true)
        });
    }
    $('.checkbox1').click(function () {

        const checkBoxCheckAll = $('#checkbox_input_field_1_all');
        const checkBoxChecked = $('.checkbox1:checked');
        const checkBoxAll = $('.checkbox1');
        if (checkBoxChecked.length === checkBoxAll.length) {
            checkBoxCheckAll.prop('checked', true);
            const getText = $(this).parent().children('span')[0].textContent;
            //
            
            if ($(this).is(':checked')) {
                checkExistText(getText)
            } else {
                $('.selectcheckbox' + getText).remove();

            }
            return;
        }
        if (checkBoxChecked.length !== checkBoxAll.length) {
            const getText = $(this).parent().children('span')[0].textContent;
            
            if ($(this).is(':checked')) {
                checkExistText(getText)
            } else {
                $('.selectcheckbox' + getText).remove();

            }
            return;

        }
    });
    $('#checkbox_input_field_1_all').click(function () {
        const checkBoxCheckAll = $('#checkbox_input_field_1_all');
        const checkBoxAll = $('.checkbox1');
        if (checkBoxCheckAll.prop('checked')) {
            checkBoxAll.each(function () {
                $(this).prop('checked', true);
                const getText = $(this).parent().children('span')[0].textContent;

                $(document).on('click', '#my_search_checkbox_result_item_confirm_btn', function () {
                    $(checkBoxCheckAll).prop('checked', false);
                    $(checkBoxAll).prop('checked', false);
                    $('.search_checkbox_result_item').remove();

                });
                checkExistText(getText)
                
            });
        } else {
            checkBoxAll.each(function () {
                $(this).prop('checked', false);
                const getText = $(this).parent().children('span')[0].textContent;
                
                $('.selectcheckbox' + getText).remove();

            });
        }
    });

    $(document).on('click', '.search_checkbox_result_item', function () {
        const dataId = $(this).attr("data-id");
        $(this).remove();
        $('.checkbox1').each(function() {
            if ($(this).parent().children('span')[0].textContent == dataId) {
                $(this).prop('checked', false);
                $('#checkbox_input_field_1_all').prop('checked', false);
            }
        })
    });

    $('.option_item_btn').click(function () {
        const currentClassName = $(this).prop('class');
        if (!currentClassName.includes('option_item_btn_selected')) {
            $('.option_item_btn').each(function () {
                $(this).prop('class', currentClassName);
            })
            $(this).prop('class', currentClassName.concat(" option_item_btn_selected"));
        }
    })
//checked input
$('.item-job input').click(function(){
    alert('hello')
})
});

function checkExistText(getText) {
    let isNotExist = 1;
    $(".search_checkbox_result_item_content").each(function() {
        if ($(this).text() == getText) {
            isNotExist = 0;
        }
    });
    if (isNotExist) {
        $(".search_checkbox_results").append("<div class='search_checkbox_result_item selectcheckbox" + getText + "' data-id="+getText+"><div class='search_checkbox_result_item_content'>" + getText + "</div><button class='search_checkbox_result_item_delete_btn btn" + getText + "'></button></div>");
    }
}
