$('#area').keyup(function(){
    $('.word-counter').text(this.value.length+'/500');
    })