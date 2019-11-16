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

    const arrBtnOpenModal = ["#btn_open_modal_location", "#btn_open_modal_industry", "#btn_open_modal_job", "#btn_open_modal_feature",'#btn_popup_check'];
    const arrModal = [
        "#my_page_modal_location",
        "#my_page_modal_industry",
        "#my_page_modal_job",
        "#my_page_modal_feature",
        "#popup_check"
    ];

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
        $('.btn_close_modal').click(function () {
            togleModal(false);
        });
        $('.page_modal').click(function (e) {
            if (e.target === this) {
                togleModal(false);
            }
        });
    })
    
    $('.checkbox1').click(function () {
        const parentCheckBox = $(this).parentsUntil('.option_item_values').parent();

        const checkBoxCheckAll = parentCheckBox.find('.checkbox_input_field_1_all');
        const checkBoxChecked = parentCheckBox.find('.checkbox1:checked');
        const checkBoxAll = parentCheckBox.find('.checkbox1');
        if (checkBoxChecked.length === checkBoxAll.length) {
            checkBoxCheckAll.each(function() {
                $(this).prop('checked', true);
            })
            
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
            checkBoxCheckAll.each(function() {
                $(this).prop('checked', false);
            })

            const getText = $(this).parent().children('span')[0].textContent;

            if ($(this).is(':checked')) {
                checkExistText(getText)
            } else {
                $('.search_checkbox_result_item').each(function() {
                    if ($(this).attr('data-id') == getText) {
                        $(this).remove();
                    }
                });
            }
            return;

        }
    });
    $('.checkbox_input_field_1_all').each(function (index) {

        $(this).click(function () {
            const checkBoxCheckAll = $(this);
            const checkBoxAll = $('.checkbox1');
            if (checkBoxCheckAll.prop('checked')) {
                checkBoxAll.each(function () {
                    const idCheck = $(this).parentsUntil('.option_item_values').parent().attr('id');
                    if(index + 1 === parseInt(idCheck.split("0").pop())) {
                        $(this).prop('checked', true);
                        const getText = $(this).parent().children('span')[0].textContent;
                        checkExistText(getText)
                    }
                });
            } else {
                checkBoxAll.each(function () {
                    const idCheck = $(this).parentsUntil('.option_item_values').parent().attr('id');
                    if(index + 1 === parseInt(idCheck.split("0").pop())) {
                        $(this).prop('checked', false);
                        const getText = $(this).parent().children('span')[0].textContent;
                        $('.search_checkbox_result_item').each(function() {
                            if ($(this).attr('data-id') == getText) {
                                $(this).remove();
                            }
                        });
                    }
                });
            }
        });
    })

    $(document).on('click', '#my_search_checkbox_result_item_confirm_btn', function () {
        $('.checkbox_input_field_1_all').prop('checked', false);
        $('.checkbox1').prop('checked', false);
        $('.search_checkbox_result_item').remove();

    });

    $(document).on('click', '.search_checkbox_result_item', function () {
        const dataId = $(this).attr("data-id");
        $(this).remove();
        $('.checkbox1').each(function () {
            if ($(this).parent().children('span')[0].textContent == dataId) {
                $(this).prop('checked', false);
                $('.checkbox_input_field_1_all').each(function() {
                    $(this).prop('checked', false);
                })
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
    });
    for (let i = 0; i < 20; i++) {
        $(document).on('click', '#option_item_btn_0'+i+'', function () {
            var showItem = $('#option_item_values_0'+i+'');
            $('.option_item_values').css("display", "none");
            showItem.css("display", "block");
            showItem.attr
        })
    };
    function checkExistText(getText) {

        let isNotExist = 1;
        $(".search_checkbox_result_item_content").each(function () {
            if ($(this).text() == getText) {
                isNotExist = 0;
            }
        });
        if (isNotExist) {
            $(".search_checkbox_results").append("<div class='search_checkbox_result_item selectcheckbox" + getText + "' data-id=" + getText + "><div class='search_checkbox_result_item_content'>" + getText + "</div><button class='search_checkbox_result_item_delete_btn btn" + getText + "'></button></div>");
        }
    }

    $('.item-job').click(function () {
        const currentClassName = $(this).prop('class');
        if (!currentClassName.includes('item-job-active')) {
            $(this).children('input').attr('checked', true);
            $(this).prop('class', currentClassName.concat(" item-job-active"));
        } else {
            $(this).prop('class', 'item-job');
            $(this).children('input').attr('checked', false);
        }
    })
});
