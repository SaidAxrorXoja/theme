function rang(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    if(a<=255&&b<=255&&c<=255){
        document.getElementById("rew").style.color="rgb("+a+", "+b+", "+c+")";
    }
    else{
        document.getElementById("a").style.visibility=false;
    }
}
function rang2(){
    var a=document.getElementById("w").value;
    var b=document.getElementById("e").value;
    var c=document.getElementById("r").value;
    if(a<=255&&b<=255&&c<=255){
        document.body.style.backgroundColor="rgb("+a+", "+b+", "+c+")";
    }
    else{
        document.getElementById("a").style.visibility=false;
    }
}
function knop(){
    document.getElementById("werr").style.display="block";
    document.getElementById("werr2").style.display="block";
    document.getElementById("werr3").style.display="block";
    document.getElementById("fr").style.display="none";
    document.getElementById("gr").style.display="block";
}
function knop2(){
    document.getElementById("werr").style.display="none";
    document.getElementById("fr").style.display="block";
    document.getElementById("gr").style.display="none";
    document.getElementById("werr2").style.display="none";
    document.getElementById("werr3").style.display="none";
}
function margin(){
    var a=document.getElementById("tr").value;
    var b=document.getElementById("rt").value;
    var c=document.getElementById("rg").value;
    var d=document.getElementById("hg").value;
    if(a<=1000&&b<=1000&&c<=1000&&d<=1000){
        document.getElementById("rew").style.marginLeft=a+"px";
        document.getElementById("rew").style.marginTop=b+"px";
        document.getElementById("rew").style.fontSize=c+"em";
        document.getElementById("frw").style.transform="rotate("+d+"deg)";

    }
    else{
        document.getElementById("a").style.visibility=false;
    }
}
function rotate(){
    var d=document.getElementById("hg").value;
    if(d<=1000){
        document.getElementById("frw").style.transform="rotate("+d+"deg)";

    }
    else{
        document.getElementById("a").style.visibility=false;
    }
}
function knop6(){
    document.getElementById("frw").style.display="block";
}
function knop5(){
    document.getElementById("frw").style.display="none";
}

