function change(){
        document.getElementById('game').innerHTML="<video autoplay='' data-loop-start-time='3' playsinline='' width='100%'><source src='Présentation.mp4' type='video/mp4'></video>";
        setTimeout("gogame()",28000);
        document.getElementById('jsf').innerHTML="<button class='skype' title='passer les règles' onclick='gogame()'>Passer les règles</button>";
       
}
function gogame(){
        document.getElementById('game').innerHTML="";
        document.getElementById('jsf').innerHTML="<iframe class='j' width='841' height='526' src='jeux_cdf.html' frameborder='0'></iframe>";
}


function click(){
        audio = new Audio("click.wav");
        audio.play();
        change();
}
