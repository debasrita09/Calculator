let keyholder=document.querySelector(".keys").childNodes;
let screen=document.querySelector(".screen");
screen.innerHTML="0";
let a=0,b=0,p=1,q=0,result=0,k=0,d=1,l=0;
 function main(){
    Array.from(keyholder).forEach(keyline=>{
        
        Array.from(keyline.childNodes).forEach(key=>{
            
            key.addEventListener("click", ()=>{
                
                if(key.value!="=" && key.value!="C" && key.value!="+" && key.value!="*" && key.value!="-" && key.value!="/" && key.value!="."){
                    if((screen.innerHTML=="0"&& key.value!="0") || k=="=") {
                        screen.innerHTML=" ";
                        k=0;
                    }
                    
                    screen.innerHTML+=`${key.value}`;
                    if(l==".") {
                        a=a+d*parseInt(key.value);
                        d/=10;
                        l=0;
                    }
                    else a=parseInt(a*10+parseInt(key.value));
                    console.log(a)
                    
                }
                else if(key.value=="+" || key.value=="-"){
                    if(k=="="){
                        result=parseInt(screen.innerText);
                        
                    }
                    screen.innerHTML+=`${key.value}`;
                    
                    if(k=="+" || k=="-" || k=="0"){
                        if(b=="+" || b==0) result=result+a;
                        else if(b=="-") result=result-a;
                    }
                    
                    if(k=="*"){
                        p*=a;
                        if(b=="+" || b==0) result+=p;
                        else result-=p;
                    }
                    else if(k=='/'){
                        p/=a;
                        if(b=="+" || b==0) result+=p;
                        else result-=p;
                    }
                    a=0;
                    b=key.value;
                    k=key.value;
                    p=1;
                    d=1;
                    
                }
                else if(key.value=="*" || key.value=="/"){
                    p*=a;
                    if(k=="="){
                        p=parseInt(screen.innerText);
                        
                    }
                    screen.innerHTML+=`${key.value}`;
                    q=key.value;
                    k=key.value;
                    
                    a=0;
                }
                else if(key.value=="."){
                    screen.innerHTML+=`${key.value}`;
                    l=".";
                    
                    d/=10;
                    
                }
                else if(key.value=="="){
                    if(k=="=")screen.innerHTML=" ";
                    if(k=="+" || k=="-" ){
                        if(b=="+") result=result+a;
                        else if(b=="-") result=result-a;

                    }
                    if(k=="*"){
                        p*=a;
                        if(b=="+" || b==0) result+=p;
                        else result-=p;
                    }
                    else if(k=='/'){
                        p/=a;
                        if(b=="+" || b==0) result+=p;
                        else result-=p;
                    }

                    k=key.value;
                    screen.innerHTML=`${result}`;
                    a=0,b=0,p=1,q=0,result=0;
                    d=1;

                }
                else if(key.value=="C"){
                    
                    screen.innerHTML="0";
                    a=0,b=0,p=1,q=0,result=0,k=0;
                    d=1;
                }
                
            })
        })
    })
    
    
}
main();
