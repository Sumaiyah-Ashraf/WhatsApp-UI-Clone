 let $=el=>{
    return document.querySelectorAll(el);
}

let user=[
          "Me",
          "Contact 1",
          "Contact 2",
          "Contact 3",          
          "Contact 4",
          "Contact 5",
          "Contact 6"          
];
let link=[
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
          "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",  
          "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",          
          "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
          "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg", 
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",                         
];
let info=[
         ["Hi, Link saved","14:30",""],
         ["Hi, How are you","1:50",""],
         ["Hi, Let's start the meeting ","1:45",""],
         ["Hi, I'm Deepa","2:20",""],
         ["Hi, Save me JS","3:21",""],         
         ["Hi, Ok","10:20",""],
         ["Typing...","11:25",""]
          
];
let message;
let tab=[".t1", ".t2", ".t3"];
onload=()=>{
    

    $(".n1 .list")[0].onmouseover=()=>{
        $(".n1 .list")[0].style.clipPath="circle(100%)";
        $(".n1 .list")[0].style.opacity="1";
    }
    $(".n1 .list")[0].onmouseleave=()=>{
        $(".n1 .list")[0].style.clipPath="circle(30% at 100% 0%)";
        $(".n1 .list")[0].style.opacity="0";
    }
    
    for(let i in tab){
        $(tab[i])[0].onclick=()=>{
            $(".dash")[0].style.transform=`translateX(${i*100}%)`;
        }
    }
    
    $(".fa-search")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(100% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(-101%)";
        setTimeout(()=>{
        $(".n2")[0].style.position="absolute";
        },200)
    }
    $(".close")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(0% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(0%)";
        $(".n2")[0].style.position="";
    }
    
    for(let i=0;i<user.length;i++){
        message=`<div class="chat">
                    <span class="avatar">
                        <img src="${link[i]}">
                    </span>
                    
                    <span class="container ${user[i]}">
                        <span class="info">
                            <span>${user[i]}</span>
                            <span>${info[i][1]}</span>
                        </span>
                        
                        <span class="message">
                        <span>${info[i][0]}</span>
                        <span>${info[i][2]}</span>
                        </span>
                    </span>
                </div>`;
                
            $("section")[0].innerHTML+=message;
    }
    $(".container")[user.length-1].style.border="none";
    $(".message")[user.length-1].style=`
    color:var(--green2);
    font-weight:bolder;
    `;
    
    setTimeout(()=>{
    main.style.display="block";
    loader.style.display="none";
    },3000)    
}