$(document).ready(function(){
    $('.p1').click(function(){
        $(this).hide()
    })
})

$('.btn-1').click(function(){
    $('.p1').fadeToggle(1000)
})

$('.box1').click(function(){
    $('.box2').slideToggle();
})

$('.box3').click(function(){
    $(this).animate({
        left: '300px',
        height: '400px'
    })
})

$('.b1').click(function(){
    $('.c1').text('This is the changed text')
}
)

$('.b2').click(function(){
    $('.c2').append('is not completed')
})

$('.b3').click(function(){
    $('.box7').remove()
})

$('.b4').click(function(){
    $('.box8').empty()
})

$('.b5').click(function(){
    $('.box8').css('background-color', 'red')
})

$('.l2-1').parent().css('color', 'red')

$('.l3').children().css('color', 'blue')


$('#search').on('keyup', function(){
    var val = $(this).val().toLowerCase()
    $('.filter *').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1)
    })
})


// var jq = $.noConflict();
// jq('.b6').click(function(){
//     jq('.last-p').text('this is the changed text using jquery')
// })
