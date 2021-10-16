var bg=new Image(); //for imahe pattern
bg.src="star.png"

/*function draw(){
    var ctx=document.getElementById("my_can").getContext("2d")*/ 
    /*ctx is the rendering object of getcontextid
      of 2d object(which has a list of properties and methods tht we can access to do some action so watevr
      we do shud be done with the ctx reference)
     ctx represents a flat surface of x-0,y-0,z-0;(positions)
     In canvas we work on x y z axis , right,left=x,dowm,up=y*/ 
    
    /*we can get properties of the canvas can be obtained thru ctx omly!!

       alert(ctx.canvas.id+" | "+ctx.canvas.width)*/

// ctx.fillRect(x,y,w,h) creates immmediate rect
   /* ctx.fillStyle="pink"
    ctx.fillRect(20,20,200,100)
    ctx.fillRect(200,100,200,100)

    ctx.strokeRect(200,100,200,100)    
    ctx.strokeRect(20,20,200,100)
    
    ctx.clearRect(0,0,100,100)
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height) //racer,wiping the canvas within the specified rect
     */



// ctx.fillstyle=color | hex | rgb | gradient | pattern | rgba

    /*ctx.fillStyle="pink"
    ctx.strokeStyle="red" //color the stroke
    ctx.lineWidth=10 //gives width of the stroke
     ctx.fillRect(20,20,200,100)
     ctx.strokeRect(20,20,200,100)*/
    


// var gradient=ctx.createLinearGradient(x0,y0,x1,y1);
    // var g1=ctx.createLinearGradient(0,0,200,0); //left->right
   /* var g1=ctx.createLinearGradient(0,0,200,0); //left<-right
   // our gradient height shud be relative to the rect
    g1.addColorStop(0,"pink") //begining 0 ,middle 0.5, end  1
    g1.addColorStop(.5,"red")
    g1.addColorStop(1,"magenta")
    ctx.fillStyle=g1;
    ctx.fillRect(20,20,200,100)
    ctx.strokeRect(20,20,200,100)*/

// var gradient=ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
   /* var g2=ctx.createRadialGradient(350,200,0,350,100,100);
    g2.addColorStop(.5,"red")
    g2.addColorStop(1,"yellow")
    g2.addColorStop(0,"magenta")
    ctx.fillStyle=g2;
    ctx.fillRect(250,90,200,100)
    ctx.strokeRect(250,90,200,100)*/


/*var pattern=ctx.createPattern(mo,"repeat")
 //we can keep even repeat-x,-y also!!   
    ctx.fillStyle=pattern;
    ctx.styleStroke=g1
    ctx.lineWidth=20
    ctx.strokeStyle=g1
    ctx.fillRect(0,250,200,100)
    ctx.strokeRect(0,250,200,100)
    ctx.fill();*/


// line styles and lines and stroke
   /* ctx.lineWidth=20
    ctx.lineCap="butt" //butt,round,square
    ctx.lineJoin="butt" //bevel,round,miter 
    ctx.miterLimit=3;
    ctx.setLineDash([70,10]) 
    ctx.lineDashOffset=20
    // ctx.getLineDash()

    ctx.beginPath()
    ctx.moveTo(200,200)
    ctx.lineTo(200,300)
    ctx.lineTo(400,100)
    ctx.stroke()
    // ctx.fill()


    ctx.stroke()*/


// js methods behind drawing and building paths on canvas elements




    /*ctx.beginPath()//resets the current default path
    ctx.moveTo(50,50) //create new subpath with given point
    ctx.lineTo(250,50) //create a new line along the current subpath
    ctx.lineTo(250,150)
    ctx.lineTo(50,150)
    ctx.lineTo(50,50)
    ctx.fill()
    ctx.closePath() //closes the current path
    ctx.stroke() //stroke the curent default path
    alert(ctx.isPointInPath(50,150)) //determines tic specified points are in path*/
 
//clip()
   /* ctx.rect(50,50,100,100)//a
    ctx.clip() //in a,b will be cliped watever is already inside the a
    ctx.rect(0,0,100,100)//b */

//arc(x,y,radius,startAngle,endangle,anticlockwise)
    // ctx.arc(150,150,50,0,Math.PI*2,false)  //end angle can be 6.27 value or the mathpi . anticlock=true, clock=false=default
  
    
//arcTo()
    /*ctx.moveTo(200,200)
    ctx.lineTo(400,200)
    ctx.arcTo(450,200,450,300,50)//x1,y1=where it strts || x2,y2=where it ends || raduis=radius lol
    ctx.lineTo(450,450)
    ctx.stroke()*/

// quadraticcurveTo(cpx,cpy,x,y) control point-
// beziercurveTo(cpx1,cpy1,cpx2,cpy2,x,y)
    /*ctx.moveTo(200,200)
    ctx.lineTo(400,200)
    //ctx.quadraticCurveTo(400,200,450,200)
    ctx.bezierCurveTo(250,100,120,100,400,100)
    ctx.lineTo(400,450)

    ctx.stroke() */


// load and work with img and mp4 using js on canvas
//  ctx.drawImage(img,x,y)
//  ctx.drawImage(img,x,y,w,h)  
//  ctx.drawImage(img,clipx,clipy,x,y,w,h)we can even give w,h as mo.width=takes exact pic width
//  ctx.drawImage(img,clipx,clipy,clipw,cliph,x,y,w,h)

// in place of img we can place videos it works just as img
  
    // ctx.drawImage(mo,10,0,200,200,20,20,200,200) //1-image src,2-x pint, 3-y point
    // alert(mo.width) //+ve will clip to left -ve to right

//js methods behind drawing text and text stroke to the canvas
// fillText(text,x,y,maxWidth) maxwidth is optional prameter
// strokeText(text,x,y,maxWidth)
    /*ctx.fillStyle="orange"
    ctx.font="italic bold 56px cursive"
    ctx.textAlign="start" //start end left right center
    ctx.textBaseline='hanging' //top,bottom,middle,hanging,alphabetic,ideographic
    ctx.fillText("chaithra p",50,50,200)//200 is the max-width
    ctx.strokeStyle="magenta"
    ctx.lineWidth=4
    ctx.strokeText("chaithra p",50,50,200)*/


//shadows
// shadowColor=color || hex || rgba()
// shadowOffSetX=+,-Ve
// shadowOffSetY=+,-Ve
// shadowBlur=+ve number
/*  ctx.rect(250,250,200,200)
    ctx.fillStyle="magenta"
    ctx.shadowColor='rgba(0,250,250,0.5)'
    ctx.shadowOffsetX=-10
    ctx.shadowOffsetY=10
    ctx.shadowBlur=3
    ctx.rect(50,50,200,200)
    ctx.fill()
*/

//transformations
// scale(x,y)
    /*ctx.fillStyle='#fc0'
    ctx.fillRect(50,50,100,100)
    // ctx.scale(.4,.5) //everything will be scaled
    // ctx.rotate(.27) //rotate the elemet acc to the perspect
    // ctx.translate(-20,-50) //movement

// ctx.transform(xScale,yskew,xskew,yscale,xtranslate,y trans)
    // default transform matrics is (1,0,0,1,0,0)
    // ctx.transform(1,0,0.1,1,30,20)
    ctx.setTransform(1,0,0.5,1,0,100)
    ctx.fillRect(200,50,100,100)
    ctx.setTransform(1,0,0.5,1,0,100)
    ctx.fillRect(350,50,100,100)*/

//pixel manupulation
   /* ctx.fillStyle="blue"
     ctx.fillRect(20,20,100,100)
     ctx.fillStyle="magenta"
     ctx.fillRect(40,40,100,100)


     var prc=ctx.getImageData(20,20,100,100)
    //  ctx.putImageData(prc,200,200) or we can just store the copy and access using the for-loop
    var copy=ctx.createImageData(prc.width,prc.height) //directly we can give 1 para as prc
    /*for(let i=0;i<copy.data.length;i++)
    copy.data[i]=prc.data[i]
    // or
    copy.data.set(prc.data) //but explorer wont work with set
    ctx.putImageData(copy,250,20)*/


// compositing  deals with global transparency packing and conteoling whn they ovwrlap each other
    //globalAlpha= 0-1.0 ,
    // globalcompositeOperation=source-atop || source-in ||source-out || source-over(d)
    // destination-atop || destination-in || destinationdestination-over ||lighter|| copy || xor

   /* ctx.fillStyle="magenta"
    ctx.fillRect(20,20,100,100) 
    ctx.globalAlpha=0.5 
    ctx.fillStyle="blue"
    ctx.fillRect(40,40,100,100)*/

// dynamic centering =assets acc to any canvas dimention
   /* ctx.fillStyle="blue"
    var w=h=100
    var rectx=(ctx.canvas.width)/(2-w*.5);//which makes the element exactly to the center
    var recty=(ctx.canvas.height)/(2-h*.5);
    ctx.fillRect(rectx,recty,w,h) */
/*}
window.onload=draw; */


// aniumations
/*function initCanvas()  {
    var ctx=document.getElementById("my_can").getContext("2d") 
    var cw=ctx.canvas.width;
    var ch=ctx.canvas.height;

     var y=0,x=0;
   
    function animate(){
        ctx.save(); //if changes happen,to restore all the transform effects
        //changes happen here draw here
        //  ctx.clearRect(0,0,cw,ch)//when we start animation we shud clear the canvas bcz it actaully looks like everything has drawn
        // if we call the animate with the particular interval the previously called will also be visible it just looks like everything
        //  has drwn to clear it every time we use clear rect canvas


        ctx.fillStyle="blue"
        ctx.rotate(-.3)
        ctx.fillRect(0,y,100,100)
        ctx.fillStyle="magenta"
        ctx.rotate(.8)
        ctx.fillRect(x,0,100,100) //animate() adjust the properties dynamilcally
         y++;
         x++;
        ctx.restore(); //after u run all the changes in the camvas

    }

    var interval=setInterval(animate,30);
    ctx.canvas.addEventListener('click',function(event){
        clearInterval(interval)//this event stops the animation as it clicked 
    })
}

    window.addEventListener('load',function(event){
      initCanvas()      
    })*/



/*assets=each thing or var we add are objects with their own properties such as co-ordin,color
size and more hence assets are distict which actually helps in avoiding the value collision when we animate many at a time*/

  /* function initCanvas()  {
        var ctx=document.getElementById("my_can").getContext("2d") 
       var cw=ctx.canvas.width,ch=ctx.canvas.height;

       var y=0,x=0;
       function rectobj(){
        this.x=0,this.y=0,this.w=0,this.h=0;
        // render the elements
        this.render=function(ctx,rx,ry,rw,rh,clr){
            ctx.fillStyle=clr
            ctx.fillRect(rx,ry,rw,rh)
        }
    }
    // Establish Assets outside of the animate function
    // to avoid re-creating them each time the function runs
    var rect1 = new rectobj();
    var rect2 = new rectobj();
    rect2.y=100
    rect1.w=50
    function animate(){
        
        ctx.clearRect(0,0,cw,ch)
        rect1.render(ctx,rect1.x,rect1.y,rect1.w,50,"magenta")
        rect2.render(ctx,rect2.x*2,rect2.y,50,50,"blue")
        rect1.x++;
        rect2.x++;
    }
    var interval=setInterval(animate,30);
}
window.addEventListener('load',function(event){
      initCanvas()      
    })*/

//mouse co -ordinates
/*function initCanvas(){
    var ctx=document.getElementById("my_can").getContext("2d") 
        ctx.canvas.addEventListener('mousemove',function(event){
            var mousex=event.clientX-ctx.canvas.offsetLeft;//returns the mouse position of user
            var mousey=event.clientY-ctx.canvas.offsetTop;
            var status=document.getElementById('status');
            status.innerHTML=mousex+" | "+mousey
        })
        ctx.canvas.addEventListener('click',function(event){
            var mousex=event.clientX-ctx.canvas.offsetLeft;//returns the mouse position of user
            var mousey=event.clientY-ctx.canvas.offsetTop;
            var status=document.getElementById('status');
            // status.innerHTML=
            // alert(mousex+" | "+mousey)
            ctx.fillStyle="orange"
            ctx.fillRect(mousex-15,mousey-15,30,30)
        })

    }
    window.addEventListener('load',function(event){
        initCanvas()      
    })*/


//background animations and keyboard controls
/*function initCanvas()  {
    var ctx=document.getElementById("my_can").getContext("2d") 
   var cw=ctx.canvas.width,ch=ctx.canvas.height;

   function background(){
       this.x=0,this.y=0,this.w=bg.width,
       this.h=bg.height
       this.render=function(){
           ctx.drawImage(bg,0,this.y-=3)
           if(this.y<=-300)
           this.y=0
       }
   }

   function player(){
       this.x=0,this.y=0,this.w=50,
       this.h=50
       this.render=function(){
           ctx.fillStyle="blue"
           ctx.fillRect(this.x,this.y,this.w,this.h)
        
       }
   }
   var background=new background()
   var player=new player();
   player.x=100
   player.y=100

   function animate(){
    ctx.save();
    ctx.clearRect(0, 0, cw, ch);
    // Start drawing here
    background.render();
    player.render()
    ctx.fillStyle = "orange";
    // ctx.fillRect(100,100,50,50);
    // End drawing here
    ctx.restore();
}
var animateInterval = setInterval(animate,30)
document.addEventListener('keydown', function(event) {
    var key_press=String.fromCharCode(event.keyCode);
    // alert(event.keyCode+""+key_press)
    if(key_press=="w"){
        player.y-=3
    }


})

}
window.addEventListener('load',function(event){
    initCanvas()
})*/




//keyboard controls
    /*function initCanvas(){
        var ctx = document.getElementById('my_can').getContext('2d');
        var buildings = [ {"id":"house","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                      {"id":"grocery","x":200,"y":100,"w":50,"h":50,"bg":"green"},
                      {"id":"post_office","x":300,"y":100,"w":50,"h":50,"bg":"orange"}
    ];
    for(var i = 0; i < buildings.length; i++){
        var b = buildings[i];
        ctx.fillStyle = b.bg;
        ctx.fillRect(b.x,b.y,b.w,b.h);
    }
    }
    window.addEventListener('load', function(event) {
    initCanvas();
    });*/



// hit detection(touch)
/*function initCanvas(){
    var ctx = document.getElementById('my_can').getContext('2d');
    ctx.canvas.addEventListener('mousedown', function(event) {//mousedown touchstart touchcancel touchleave touchmove
        var mX = event.clientX - ctx.canvas.offsetLeft;
        var mY = event.clientY - ctx.canvas.offsetTop;
        for(var i = 0; i < buildings.length; i++){
            var b = buildings[i];
            if(mX >= b.x && mX < b.x+b.w && mY >= b.y && mY < b.y+b.h){
                document.getElementById('status').innerHTML = "You touched "+b.id;
            }
        }
    });
    var buildings = [ {"id":"house","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                      {"id":"grocery","x":200,"y":100,"w":50,"h":50,"bg":"green"},
                      {"id":"post_office","x":300,"y":100,"w":50,"h":50,"bg":"orange"}
    ];
    for(var i = 0; i < buildings.length; i++){
        var b = buildings[i];
        ctx.fillStyle = b.bg;
        ctx.fillRect(b.x,b.y,b.w,b.h);
    }
}
window.addEventListener('load', function(event) {
    initCanvas();
});*/



//colllision detection
/*function initCanvas(){
    var ctx = document.getElementById('my_can').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var enemies = [ {"id":"enemy1","x":100,"y":-20,"w":40,"h":20},
                    {"id":"enemy2","x":225,"y":-20,"w":40,"h":20},
                    {"id":"enemy3","x":350,"y":-20,"w":40,"h":20},
                    {"id":"enemy4","x":100,"y":-70,"w":40,"h":20},
                    {"id":"enemy5","x":225,"y":-70,"w":40,"h":20},
                    {"id":"enemy6","x":350,"y":-70,"w":40,"h":20}
    ];
    function renderEnemies(){
        for(var i = 0; i < enemies.length; i++){
            ctx.fillStyle = "blue";
            ctx.fillRect(enemies[i].x, enemies[i].y+=.5, enemies[i].w, enemies[i].h);
        }
    }
    function Launcher(){
        this.y = 280, this.x = cW*.5-25, this.w = 50, this.h = 50, this.dir, this.bg="orange", this.missiles = [];
        this.render = function(){
            if(this.dir == 'left'){
                this.x-=5;
            } else if(this.dir == 'right'){
                this.x+=5;
            }
            ctx.fillStyle = this.bg;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            for(var i=0; i < this.missiles.length; i++){
                var m = this.missiles[i];
                ctx.fillStyle = m.bg;
                ctx.fillRect(m.x, m.y-=5, m.w, m.h);
                this.hitDetect(this.missiles[i],i);
                if(m.y <= 0){ // If a missile goes past the canvas boundaries, remove it
                    this.missiles.splice(i,1); // Splice that missile out of the missiles array
                }
            }
            if(enemies.length == 0){
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = '#FC0';
                ctx.font = 'italic bold 36px Arial, sans-serif';
                ctx.fillText('Level Complete', cW*.5-130, 50, 300);
            }
        }
        this.hitDetect = function(m,mi){
            for(var i = 0; i < enemies.length; i++){
                var e = enemies[i];
                if(m.x+m.w >= e.x && m.x <= e.x+e.w && m.y >= e.y && m.y <= e.y+e.h){
                    this.missiles.splice(this.missiles[mi],1); // Remove the missile
                    enemies.splice(i,1); // Remove the enemy that the missile hit
                    document.getElementById('status').innerHTML = "You destroyed "+ e.id;
                }
            }
        }
    }
    var launcher = new Launcher();
    function animate(){
        //ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies();
        //ctx.restore();
    }
    var animateInterval = setInterval(animate, 30);
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn = document.getElementById('fire_btn');
    left_btn.addEventListener('mousedown', function(event) {
        launcher.dir = 'left';
    });
    left_btn.addEventListener('mouseup', function(event) {
        launcher.dir = '';
    });
    right_btn.addEventListener('mousedown', function(event) {
        launcher.dir = 'right';
    });
    right_btn.addEventListener('mouseup', function(event) {
        launcher.dir = '';
    });
    fire_btn.addEventListener('mousedown', function(event) {
        launcher.missiles.push({"x":launcher.x+launcher.w*.5,"y":launcher.y,"w":3,"h":10,"bg":"red"});
    });
}
window.addEventListener('load', function(event) {
    initCanvas();
});*/


