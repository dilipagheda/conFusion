$(document).ready(function(){
    //display reserve table modal
    $('#reserveTable').click(function(){
        $('#reserveTableModal').modal('show');
    })
    //display login modal
    $('#login').click(function(){
        $('#loginModal').modal('show');
    })
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
})