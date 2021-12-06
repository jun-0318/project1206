$(document).ready(function(){
    $('.modal_button').click(function(){
        var buttonId = $(this).attr('id');
        $('#modal_container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    })
    
    $('#modal_container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });
});