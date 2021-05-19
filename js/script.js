function shortUrl () {
    urlValidate();
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
