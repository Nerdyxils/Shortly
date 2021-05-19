function shortUrl () {
    urlValidate();

    var url = $("#urlInput");

    $('.form_output').css('display', 'block');
    $("#urlOutput").html(url.val());
    $("#shortUrl").html(url.val())
}


function urlValidate() {
    var valid = true; 
    $(".demoInputBox").css('background-color', '');
    $(".info").html('');
    if(!$("#urlInput").val()) {
        $("#urlInput-info").html("Please add a link");
        $("input").addClass("err-class");
        valid = false
    }
    return valid;
}
