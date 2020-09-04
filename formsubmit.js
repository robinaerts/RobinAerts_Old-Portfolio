$("input[type='submit']").on("click",function(){
    var input1 = $("#voornaam-input");
    var errortxt1 = $(".error1")
    if(!input1.val()){
          input1.css("border","5px solid #BE2E2E");
          errortxt1.css("display","inline")
    }
    else{
        input1.css("border", "5px solid #333")
        errortxt1.css("display","none")
    }
});

$("input[type='submit']").on("click",function(){
    var input2 = $("#naam-input");
    var errortxt2 = $(".error2")
    if(!input2.val()){
          input2.css("border","5px solid #BE2E2E");
          errortxt2.css("display","inline")
    }
    else{
        input2.css("border", "5px solid #333")
        errortxt2.css("display","none")
    }
});

$("input[type='submit']").on("click",function(){
    var input3 = $("#email-input");
    var errortxt3 = $(".error3")
    if(!input3.val()){
          input3.css("border","5px solid #BE2E2E");
          errortxt3.css("display","inline")
    }
    else{
        input3.css("border", "5px solid #333")
        errortxt3.css("display","none")
    }
});

$("input[type='submit']").on("click",function(){
    var input4 = $("#area");
    var errortxt4 = $(".error4")
    if(!input4.val()){
          input4.css("border","5px solid #BE2E2E");
          errortxt4.css("display","inline")
    }
    else{
        input4.css("border", "5px solid #333")
        errortxt4.css("display","none")
    }
});

$('#area').keyup(function(){
    $('.word-counter').text(this.value.length+'/500');
    })