$(document).ready(function() {
    $('.add-url').click(function() {    
        if ($('#urlInput').val().length != 0) {
            var x = $('.form_output').html();
            var input = $('#urlInput').val();
            var y = `<div class="form_d row">
                        <div className="col-5 inp">` + input + `</div> 
                        <div className="col-5">
                            <a href="#">` + $('#urlInput').val() + `</a>
                        </div>  
                        <div class="col-md-2 col-xs-12">
                            <button class="c_btn copy_button">Copy</button>
                        </div>
                    </div>`;

          $('.form_output').html(y + x);
          $('#urlIput').val("");
        } else urlValidate();

        $(document).on('click', '.c_btn', function() {
            $('#urlInput').select();
            document.execCommand('copy');
            $(this).text('Copied!').css('background-color', '#000')
        })
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



