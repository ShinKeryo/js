function createCookie(name,value){

//쿠키 만료시간 설정

//var millis = date.getTime() + 3600000; //1시간
//var time = new Date(millis);

var time = new Date();
time.setDate(time.getDate()+1) //현재 시간으로부터 +1일







  //쿠키사용
  function findCookie(find){
    
     var coo = document.cookie; //쿠키얻음
      var arr = coo.split("; "); //쿠키 스플릿

      for(var i=0; i<arr.length; i++){
          //console.log(arr[i])
          if(arr[i].indexOf(find+"=") != -1){ //indexOf != -1은 찾았음.
              console.log(arr[i].replace(find+"=","")) /쿠키값찾기
              return true;

          }
      }

  }
}