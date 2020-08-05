// Rocket being transported to the top


$(".block").on('click', function(event){
    $(".blocks").prepend($(this))
 
});


// Travelers moving to the right


$(document).ready(
    function(){
        $('.block').mousedown(
            function(){
                $(this)
                    .animate(
                        {
                            'margin-left':'710px'
                        },710,
                        );
            });
    });

    // $(document).read(
    //     function(){
    //         $('.block').mouseup(
    //             function(){
    //                 $(this).animation('none')
    //             }
    //         )
    //     }
    // )

