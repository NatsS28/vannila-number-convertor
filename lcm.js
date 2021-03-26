function lcmcalc(){
    var res;
    n1=document.calcform.first.value;
    
    n2=document.calcform.Second.value;
    //console.log(num1+""+num2);
   

    let lcm = (n1, n2) => {
        
        let lar = Math.max(n1, n2);
        let small = Math.min(n1, n2);
        
        
        let i = lar;
        while(i % small !=0){
          i += lar;
          //res=i;
        }
        
        //return the number
        document.calcform.firstO.value = i.toString();
       // console.log(res);
      }


      let gcd = (x,y)=>{
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
          }
          document.calcform.secondO.value = x.toString();

      }



      lcm(n1,n2);
      gcd(n1,n2);
      
    
}
   