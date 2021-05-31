$(document).ready(function() {

    let linksArray = [];
    let link = document.querySelector('demoInputBox');

    $('.add-url').click(function() {  

        urlValidate();

        let linkVal = $('#urlInput').val;

        $('#urlInput').prop('disabled', true);

        fetch(`https://api.shrtco.de/v2/shorten?url=${linkVal}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let linkObj = {
                originalLink: data.result.original_link,
                shortenedLink: data.result.full_short_link
            }

            $('#urlInput').prop('disabled', false);

            linksArray.unshift(linkObj);
            
            $('.form_output').html('');
        })
        

        linksArray.forEach( link => {
            let linkHtmlString = 
            `<div class="form_d row">
                <div class="inp"> ${link.originalLink} </div> 
                <div class="out_text">
                    <a href="#" id="sample"> ${link.shortenedLink} </a>
                </div>  
                 <div class="col-md-2 col-xs-12">
                    <button class="c_btn">Copy</button>
                </div>
            </div>`;

            $('.form_output').html(linkHtmlString);

            $('#urlInput').val("");
        })

        // if ($('#urlInput').val().length != 0) {
        //     var x = $('.form_output').html();
        //     var input = $('#urlInput').val();
        //     var y = `<div class="form_d row">
        //                 <div class="inp">` + input + `</div> 
        //                 <div class="out_text">
        //                     <a href="#" id="sample">` + input + `</a>
        //                 </div>  
        //                 <div class="col-md-2 col-xs-12">
        //                     <button class="c_btn">Copy</button>
        //                 </div>
        //             </div>`;

        //   $('.form_output').html(y + x);
        //   $('#urlInput').val("");
        // } else urlValidate();

        


        $(document).on('click', '.c_btn', function() {
            var url_copy = $('#sample');
            url_copy.select();
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



