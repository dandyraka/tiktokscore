$(function(){

    for(i=0;i<150;i++){
        $('#confetti').append('<div class="confetti-'+i+'"></div>');
    }

    $('input').on('input',function(e){
        $(this).val($(this).val().replace(/[^0-9]/g,''));
    });

    $('#views').on('keydown',function(e){
        if(e.code == 'Enter'){
            $('#likes').focus();
        }
    });

    $('#likes').on('keydown',function(e){
        if(e.code == 'Enter'){
            $('#button').click();
        }
    });

    $('#button').click(function(){
        $('table,#button').hide();
        var score = Math.floor($('#likes').val() / $('#views').val() * 1000);
        var state = 0;
        anim = setInterval(function(){
            $('#score').text(state);
            state++;
            if(state>score){
                $('#score').text(score);
                clearInterval(anim);
                if(score>99){
                    $('#confetti').show();
                }
            }
        },1000/score);
        $('#result').show();
    });

});