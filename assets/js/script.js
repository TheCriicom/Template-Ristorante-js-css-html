/*Sebastian*/
var flag=1,status=0, cursor=1;
function slide_drag(event)
{
    if (window.screen.width>991){
                if(flag==1){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag+3)+".jpg";
                    document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
                    console.log(flag);
                    flag++;
                    
                }
                else if (flag==2){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
                    document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
                    console.log(flag);
                    flag++;
                }
                else if(flag==3){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag-2)+".jpg";
                    document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
                    document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
                    console.log(flag);
                    flag++;
            
                }
                else if(flag==4){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+1+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+2+".jpg";
                    document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+3+".jpg";
                    document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+4+".jpg";
                    flag=1;
                    if (status==0){
                        
                        document.getElementById("slide_dot_1").style.color="gray";
                        document.getElementById("slide_dot_2").style.color="red";
                        status=1;
                    }
                    else if(status==1){
                        document.getElementById("slide_dot_1").style.color="red";
                        document.getElementById("slide_dot_2").style.color="gray";
                        status=0;
                    }
                }    
    }
    else if(window.screen.width<=991)
        {
            let s_dot="slide_dot_";
            console.log("risoluzione<767!"+cursor)
            if(cursor==1){
                document.getElementById(s_dot+cursor).style.color="red";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                cursor=2;
            }
            else if(cursor==2)
            {
                document.getElementById(s_dot+cursor).style.color="red";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                cursor=3;
            
            }
            else if(cursor==3)
            {
                document.getElementById(s_dot+cursor).style.color="red";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                cursor=4;
            
            }

            else if(cursor==4)
            {
                document.getElementById(s_dot+cursor).style.color="red";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                cursor=1;
            
            }

            if (flag==1){
                    
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    
                    flag++;
                    
                }
            else if (flag==2){
                    let s_dot="slide_img_";
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    flag=1;
            }
            else if(flag==3){flag=1;}
            

        }
        
    
}