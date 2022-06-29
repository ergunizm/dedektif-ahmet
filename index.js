$(document).ready(function (){
            $("#third-second").click(function (){
                $('html, body').animate({
                    scrollTop: $("#down").offset().top
                }, 1000);
    });
});

function dpdwn(extra){
    let dropcheck =document.getElementById("dropcheck-"+extra)
    let h = document.querySelector(".dropcheckm-"+extra)
    if(h.style.marginBottom == '160px' || !dropcheck.checked){
        h.style.marginBottom = '75px'
    }else if(h.style.marginBottom != '160px'){
        h.style.marginBottom = '160px'
    }
}