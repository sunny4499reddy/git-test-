function displaytime(){
    var datatime = new data();
    var hrs = datatime.gethours();
    var min = datatime.getminutes();
    var sec = datatime.getsecounds();
    var session = document,getelementbyid('session');

    if(hrs >= 12){
        session.innerHTML = 'pm';

    }else{
        session.innerHTML = 'am';

    }
    
    if(hrs > 12){
        hrs = hrs - 12;
    }


    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
setinterval(displaytime, 10);