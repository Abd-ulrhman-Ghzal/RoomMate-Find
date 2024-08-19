let Fyesnobtns=document.querySelectorAll(".Fbtns");
        let Syesnobtns=document.querySelectorAll(".Sbtns");
        let page1=document.getElementById('FSignUp-page');
        let page2=document.getElementById('SSignUp-page');
        let page3=document.getElementById('THSignUp-page');
        let number1=document.querySelectorAll('#one');
        let number2=document.querySelectorAll('#two');
        let number3=document.querySelectorAll('#three');
        let counterElement=document.getElementById('min-max-num')
        let counter=1;
        let pagenumber=1;
        counterElement.innerHTML=counter;


        if(pagenumber === 1){
                page1.style.display='block'
                page2.style.display='none'
                page3.style.display='none'
            }else if(pagenumber === 2){
                page1.style.display='none'
                page2.style.display='flex'
                page3.style.display='none'
            }else if(pagenumber === 3){
                page1.style.display='none'
                page2.style.display='none'
                page3.style.display='flex'
            }
        function loadstep1(){
            pagenumber = 1
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function(){
                page1.style.display='block'
                page2.style.display='none'
                page3.style.display='none'
                for(let i=0;i<number1.length;i++){
                    number1[i].style.cssText='box-shadow: 0px 0px 1px 3px #2387C2;'
                }
                for(let i=0;i<number2.length;i++){
                    number2[i].style.cssText='color:#2387C2;background-color:white'
                }
        }
        xhttp.open("GET", "");
        xhttp.send();
    }
        function loadstep2(){
            pagenumber = 2
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function(){
                page1.style.display='none'
                page2.style.display='flex'
                page3.style.display='none'
                for(let i=0;i<number1.length;i++){
                    number1[i].style.cssText='background-color: #2387C2;color: white;'
                }
                for(let i=0;i<number2.length;i++){
                    number2[i].style.cssText='box-shadow: 0px 0px 1px 3px #2387C2;'
                }
                for(let i=0;i<number2.length;i++){
                    number3[i].style.cssText='box-shadow:none'
                }
        }
        xhttp.open("GET", "");
        xhttp.send();
        }
        function loadstep3(){
            pagenumber = 3
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function(){
                page2.style.display='none'
                page3.style.display='flex'
                for(let i=0;i<number2.length;i++){
                    number2[i].style.cssText='background-color: #2387C2;color: white;'
                }
                for(let i=0;i<number3.length;i++){
                    number3[i].style.cssText='box-shadow: 0px 0px 1px 3px #2387C2;'
                }
        }
        xhttp.open("GET", "");
        xhttp.send();
        }
        function dropmenu(id){
            let selectedul=document.getElementById(`${id}`)
            if(selectedul.classList.contains('active')){
                selectedul.classList.remove('active')
            }else{
                selectedul.classList.add('active')
            }
        }
        function check(){
            for(let i=0;i<Fyesnobtns.length;i++){
                if(Fyesnobtns[i].classList.contains('active-btn')){
                    Fyesnobtns[i].classList.remove('active-btn')
                }else{
                    Fyesnobtns[i].classList.add('active-btn')
                }
            }
        }
        function check2(){
            for(let i=0;i<Syesnobtns.length;i++){
                if(Syesnobtns[i].classList.contains('active-btn')){
                    Syesnobtns[i].classList.remove('active-btn')
                }else{
                    Syesnobtns[i].classList.add('active-btn')
                }
            }
        }
        function handelmin(){
            if(counter>1){
                counter=counter - 1
                counterElement.innerHTML=counter
            }
            else{
                return
            }
        }
        function handelmax(){
            counter = counter + 1
            counterElement.innerHTML=counter
        }
     