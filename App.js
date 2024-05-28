
   let  mint = 0;
   let  second = 0;
   let  milliSec = 0;
   let time ;

if(milliSec < 10){
    milliSec = '0'+milliSec
}else{
    milliSec = milliSec
}

if(second < 10){
    second = '0'+ second
}else{
    second = second
}



function start(){
    time= setInterval(()=>{
        milliSec++
        if(milliSec > 100){
            second++
            milliSec= 0
        }
        if(second > 60){
            mint++
            second= 0
        }
        
       
        document.getElementById('stop-watch').innerHTML=`${mint}:${second}:${milliSec}`
    },10)
}



function stop(){
    clearInterval(time)
    
}

function reset(){
    location.reload()
}