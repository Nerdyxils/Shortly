$(document).ready(function() {
    $('.add-url').click(function() {    
        if ($('#urlInput').val().length != 0) {
            var x = $('.form_output').html();

            var y = `<li class="row">
            <div class="col-6">
              <p> x </p>
            </div>
            <div class="col-4">
              <a href="#" id="shortUrl"> x </a>
            </div>
            <div class="col-2">
              <button class="c_btn">Copy</button>
            </div>
          ` + $('#urlInput').val() + `</li>`;

          $('.form_output').html(y + x);
          $('#urlOutput').val("");
        } else urlValidate();
    })

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

})
// function shortUrl () {
//     // urlValidate();
//     // var url = $("#urlInput");

//     // $('.form_output').css('display', 'block');
//     // $("#urlOutput").html(url.val());
//     // $("#shortUrl").html(url.val())
// }



