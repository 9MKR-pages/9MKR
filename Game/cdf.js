let vies=1
let points=5

        function clear(){
        	document.getElementById('deb').innerHTML="<img src='null.svg'></img>";
        	if1();
        }

        function getRandomInt(max) {
                return Math.floor(Math.random() * max);
        }

        function if1(){
                let objet=getRandomInt(9);
                
                if (objet === 0){
                        document.getElementById('obj0').innerHTML="<img src='images/pomme.png' class='imgs'>";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                        }
                if (objet === 1){
                        document.getElementById('obj1').innerHTML="<img src='images/fraise.png' class='imgs'>";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 2){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="<img src='images/orange.png' class='imgs'>";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 3){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="<img src='images/banane.png' class='imgs'>";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";
                                
                }
                if (objet === 4){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="<img src='images/fruit de la passion.png' class='imgs'>";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 5){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="<img src='images/pasteque.png' class='imgs'>";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 6){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="<img src='images/cerise.png' class='imgs'>";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }	
                if (objet === 7){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="<img src='images/Bombe.png' class='imgs'>";
                        document.getElementById('obj0').innerHTML="";
                }

                if (objet === 8){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="<img src='images/sncf.svg' class='imgs'>";
                        document.getElementById('obj0').innerHTML="";
                }
                
                if (vies < 1 ){
                        document.getElementById('obj0').innerHTML="<img src='images/go.svg'></img>";
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        
                }
                
                if (points > 99 ){
                        document.getElementById('obj0').innerHTML="<img src='images/bv.svg'></img>";
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                }
                
                if (points < 100){
                        setTimeout("fin()",2000);
                }
                if (vies > 0){
                        setTimeout("fin()",2000);
                }
                
                function fin(){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";
                        if2();
                }
        }
        
        
        
        
        
        function if2(){
                let objet=getRandomInt(9);
                
                if (objet === 0){
                        document.getElementById('obj0').innerHTML="<img src='images/pomme.png' class='imgs'>";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                        }
                if (objet === 1){
                        document.getElementById('obj1').innerHTML="<img src='images/fraise.png' class='imgs'>";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 2){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="<img src='images/orange.png' class='imgs'>";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 3){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="<img src='images/banane.png' class='imgs'>";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";
                                
                }
                if (objet === 4){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="<img src='images/fruit de la passion.png' class='imgs'>";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 5){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="<img src='images/pasteque.png' class='imgs'>";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }
                if (objet === 6){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="<img src='images/cerise.png' class='imgs'>";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";

                }	
                if (objet === 7){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="<img src='images/Bombe.png' class='imgs'>";
                        document.getElementById('obj0').innerHTML="";
                }

                if (objet === 8){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="<img src='images/sncf.svg' class='imgs'>";
                        document.getElementById('obj0').innerHTML="";
                }
                
                
                if (vies < 1 ){
                        document.getElementById('obj0').innerHTML="<img src='images/go.svg'></img>";
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        
                }
                
                if (points > 99 ){
                        document.getElementById('obj0').innerHTML="<img src='images/bv.svg'></img>";
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                }
                
                if (points < 100){
                        setTimeout("fin()",2000);
                }
                if (vies > 0){
                        setTimeout("fin()",2000);
                }
                
                function fin(){
                        document.getElementById('obj1').innerHTML="";
                        document.getElementById('obj2').innerHTML="";
                        document.getElementById('obj3').innerHTML="";
                        document.getElementById('obj4').innerHTML="";
                        document.getElementById('obj5').innerHTML="";
                        document.getElementById('obj6').innerHTML="";
                        document.getElementById('obj7').innerHTML="";
                        document.getElementById('obj0').innerHTML="";
                        if1();
                }
        }	
