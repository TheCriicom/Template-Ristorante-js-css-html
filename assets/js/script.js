/*Sebastian*/
var flag=1,status=0, cursor=1;

function slide_drag()
{
    let width=window.innerWidth;
    if(width<=767){slide_mobile();}
    else if(width<=1024){slide_tablet();}
    else if(width>1024){slide_desktop();} 
}

 function slide_desktop()
 {
    console.log("Desktop!");
        if(flag==1)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag+3)+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
            console.log(flag);
            flag=2;
            
        }
        else if (flag==2)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
            
            flag=3;
        }
        else if(flag==3)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag-2)+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
            console.log(flag);
            flag=4;
    
        }
        else if(flag==4)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+1+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+2+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+3+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+4+".jpg";
            flag=1;
            if (status==0){
                
                document.getElementById("slide_dot_1").style.color="gray";
                document.getElementById("slide_dot_2").style.color="#ff530a";
                status=1;
            }
            else if(status==1){
                document.getElementById("slide_dot_1").style.color="#ff530a";
                document.getElementById("slide_dot_2").style.color="gray";
                status=0;
            }
        }    
    
}

function slide_tablet()
{

    
    
            let s_dot="slide_dot_";
         
            if(cursor==1)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                cursor=2;
            }
            else if(cursor==2)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                cursor=3;
            
            }
            else if(cursor==3)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                cursor=4;
            
            }

            else if(cursor==4)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                cursor=1;
            
            }

            if (flag==1)
            {
                    
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    
                    flag=2;
                    
            }
            else if (flag==2)
            {
                    
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    flag=3;
            }
            else if(flag==3){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag-2)+".jpg";
                    flag=1;
           

            }

            

}
function slide_mobile()
{
    
    
            let s_dot="slide_dot_";
            console.log("risoluzione<767!"+cursor)
            if(cursor==1){
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                document.getElementById(s_dot+(cursor+5)).style.color="gray";
                document.getElementById(s_dot+(cursor+6)).style.color="gray";
                document.getElementById(s_dot+(cursor+7)).style.color="gray";
                cursor=2;
            }
            else if(cursor==2)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                document.getElementById(s_dot+(cursor+5)).style.color="gray";
                document.getElementById(s_dot+(cursor+6)).style.color="gray";
                
                cursor=3;
            
            }
            else if(cursor==3)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                document.getElementById(s_dot+(cursor+5)).style.color="gray";
                
                cursor=4;
            
            }

            else if(cursor==4)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                
                
                cursor=5;
            
            }
            else if(cursor==5)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                
                
                cursor=6;
            
            }
            else if(cursor==6)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor-5)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                
                
                cursor=7;
            
            }
            else if(cursor==7)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor-5)).style.color="gray";
                document.getElementById(s_dot+(cursor-6)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                
                
                cursor=8;
            
            }
            else if(cursor==8)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor-5)).style.color="gray";
                document.getElementById(s_dot+(cursor-6)).style.color="gray";
                document.getElementById(s_dot+(cursor-7)).style.color="gray";
                
                
                cursor=1;
            
            }


            if (flag<=4){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag)+".jpg";
                    flag++;
                }
            else { flag=1;}
            
            

}
function slide_scroll(dot_number)
{
    let width=window.innerWidth, s_dot="slide_dot_";
    console.log("click!");
    if(width<768)
    {
      if(dot_number==1)
      { 
          document.getElementById("slide_img_1").src="assets/images/slider/slider-img-1.jpg";  
          document.getElementById("slide_img_2").src="assets/images/slider/slider-img-2.jpg";
          document.getElementById("slide_img_3").src="assets/images/slider/slider-img-3.jpg";    
          document.getElementById("slide_img_4").src="assets/images/slider/slider-img-4.jpg";
          document.getElementById(s_dot+dot_number).style.color="#ff530a";
          document.getElementById(s_dot+(dot_number1)).style.color="gray";
          document.getElementById(s_dot+(dot_number+2)).style.color="gray";
          document.getElementById(s_dot+(dot_number+3)).style.color="gray";
          document.getElementById(s_dot+(dot_number+4)).style.color="gray";
          document.getElementById(s_dot+(dot_number+5)).style.color="gray";
          document.getElementById(s_dot+(dot_number+6)).style.color="gray";
          document.getElementById(s_dot+(dot_number+7)).style.color="gray";  
      }
      else if(dot_number==2)
      { 
          document.getElementById("slide_img_1").src="assets/images/slider/slider-img-2.jpg";
          document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
          document.getElementById("slide_img_3").src="assets/images/slider/slider-img-4.jpg";
          document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";
          document.getElementById(s_dot+dot_number).style.color="#ff530a";
          document.getElementById(s_dot+(dot_number-1)).style.color="gray";
          document.getElementById(s_dot+(dot_number+1)).style.color="gray";
          document.getElementById(s_dot+(dot_number+2)).style.color="gray";
          document.getElementById(s_dot+(dot_number+3)).style.color="gray";
          document.getElementById(s_dot+(dot_number+4)).style.color="gray";
          document.getElementById(s_dot+(dot_number+5)).style.color="gray";
          document.getElementById(s_dot+(dot_number+6)).style.color="gray";        
      }
      else if(dot_number==3)
      {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-3.jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-4.jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-1.jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-2.jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number-2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+3)).style.color="gray";
            document.getElementById(s_dot+(dot_number+4)).style.color="gray";
            document.getElementById(s_dot+(dot_number+5)).style.color="gray";        
      }
      else if(dot_number==4)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-1.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById(s_dot+dot_number).style.color="#ff530aed";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        document.getElementById(s_dot+(dot_number+2)).style.color="gray";
        document.getElementById(s_dot+(dot_number+3)).style.color="gray";
        document.getElementById(s_dot+(dot_number+4)).style.color="gray";
                        
     }
  
      else if(dot_number==5)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-1.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById(s_dot+dot_number).style.color="#ff530a";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number-4)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        document.getElementById(s_dot+(dot_number+2)).style.color="gray";
        document.getElementById(s_dot+(dot_number+3)).style.color="gray";
                        
     }
      else if(dot_number==6)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";        
        document.getElementById(s_dot+dot_number).style.color="#ff530a";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number-4)).style.color="gray";
        document.getElementById(s_dot+(dot_number-5)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        document.getElementById(s_dot+(dot_number+2)).style.color="gray";        
     }
      else if(dot_number==7)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-1.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById(s_dot+dot_number).style.color="#ff530a";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number-4)).style.color="gray";
        document.getElementById(s_dot+(dot_number-5)).style.color="gray";
        document.getElementById(s_dot+(dot_number-6)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";        
     }
     else if(dot_number==8)
     {
       document.getElementById("slide_img_1").src="assets/images/slider/slider-img-4.jpg";
       document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
       document.getElementById("slide_img_3").src="assets/images/slider/slider-img-2.jpg";
       document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";
       document.getElementById(s_dot+dot_number).style.color="#ff530a";
       document.getElementById(s_dot+(dot_number-1)).style.color="gray";
       document.getElementById(s_dot+(dot_number-2)).style.color="gray";
       document.getElementById(s_dot+(dot_number-3)).style.color="gray";
       document.getElementById(s_dot+(dot_number-4)).style.color="gray";
       document.getElementById(s_dot+(dot_number-5)).style.color="gray";
       document.getElementById(s_dot+(dot_number-6)).style.color="gray";
       document.getElementById(s_dot+(dot_number-7)).style.color="gray";        
    } 
    }
    else if(width<=1024)
    {
        if(dot_number==1)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+dot_number+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number+1)+".jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+3)).style.color="gray";
               
        }
        else if(dot_number==2)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(dot_number)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number-1)+".jpg";document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+2)).style.color="gray";
            
        }
        else if(dot_number==3)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(dot_number)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number-1)+".jpg";document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number-2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            
        }
        else if(dot_number==4)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(dot_number)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number-1)+".jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number-2)).style.color="gray";
            document.getElementById(s_dot+(dot_number-3)).style.color="gray";
            
        }
       
    }
    else if(width >=1024)
    {
        if(dot_number==1)
        {    
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-1.jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-2.jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-3.jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-4.jpg";
            
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            
        }
        else if(dot_number==2)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-4.jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-2.jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";
            
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
                 
        }
    }       
}