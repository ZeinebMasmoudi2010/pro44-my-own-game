function preload(){
    bgImg=loadImage("./simpsons/bg.jpg")
    donutImg=loadImage("./simpsons/donut.png")
    homerImg=loadImage("./simpsons/homer.png")
    lisaImg=loadImage("./simpsons/Lisa.png")
    maggieImg=loadImage("./simpsons/maggie.png")
    margeImg=loadImage("./simpsons/marge.png")
    playButtonImg=loadImage("./simpsons/play.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    gamestate=0

    playButton=createSprite(width/2,height/2)
    playButton.addImage(playButtonImg)
    playButton.scale=0.5

    donut=createSprite(width/2,height/2)
    donut.addImage(donutImg)
    donut.scale=0.175

    wall1=createSprite(10,height/2,20,height)
    wall1.shapeColor="pink"

    wall2=createSprite(width/2,10,width,20)
    wall2.shapeColor="pink"

    wall3=createSprite(width/2,height-10,width,20)
    wall3.shapeColor="pink"

    wall4=createSprite(width-10,height/2,20,height)
    wall4.shapeColor="pink"

    wall5=createSprite(120,400,200,20)
    wall5.shapeColor="pink"

    wall6=createSprite(width-120,400,200,20)
    wall6.shapeColor="pink"

    wall7=createSprite(220,310,200,20)
    wall7.shapeColor="pink"

    wall8=createSprite(330,400,20,200)
    wall8.shapeColor="pink"

    wall9=createSprite(220,490,200,20)
    wall9.shapeColor="pink"

    wall10=createSprite(width-220,310,200,20)
    wall10.shapeColor="pink"

    wall11=createSprite(width-330,400,20,200)
    wall11.shapeColor="pink"

    wall12=createSprite(width-220,490,200,20)
    wall12.shapeColor="pink"

    wall13=createSprite(230,580,220,20)
    wall13.shapeColor="pink"
    
    wall14=createSprite(440,400,20,379)
    wall14.shapeColor="pink"

    wall15=createSprite(230,height-581,220,20)
    wall15.shapeColor="pink"

    wall16=createSprite(width-230,580,220,20)
    wall16.shapeColor="pink"

    wall17=createSprite(width-440,400,20,379)
    wall17.shapeColor="pink"

    wall18=createSprite(width-230,height-581,220,20)
    wall18.shapeColor="pink"

    wall19=createSprite(120,685,200,20)
    wall19.shapeColor="pink"

    wall20=createSprite(440,685,200,20)
    wall20.shapeColor="pink"

    wall21=createSprite(120,height-685,200,20)
    wall21.shapeColor="pink"

    wall22=createSprite(440,height-685,200,20)
    wall22.shapeColor="pink"

    wall23=createSprite(width-120,685,200,20)
    wall23.shapeColor="pink"

    wall24=createSprite(width-440,685,200,20)
    wall24.shapeColor="pink"

    wall25=createSprite(width-120,height-685,200,20)
    wall25.shapeColor="pink"

    wall26=createSprite(width-440,height-685,200,20)
    wall26.shapeColor="pink"

    wall27=createSprite(550,525,20,130)
    wall27.shapeColor="pink"

    wall28=createSprite(330,633,20,125)
    wall28.shapeColor="pink"

    wall29=createSprite(610,470,140,20)
    wall29.shapeColor="pink"

    wall30=createSprite(1300,170,20,125)
    wall30.shapeColor="pink"

    wall31=createSprite(width-550,height-512,20,150)
    wall31.shapeColor="pink"

    wall32=createSprite(width-610,height-440,140,20)
    wall32.shapeColor="pink"
    
    wall33=createSprite(964,415,20,125)
    wall33.shapeColor="pink"

    wall34=createSprite(width-964,415,20,125)
    wall34.shapeColor="pink"

    wall35=createSprite(825,470,298,20)
    wall35.shapeColor="pink"

    wall36=createSprite(705,362,85,20)
    wall36.shapeColor="pink"

    wall37=createSprite(width-705,362,85,20)
    wall37.shapeColor="pink"

    wall38=createSprite(550,290,20,160)
    wall38.shapeColor="pink"

    wall39=createSprite(width-550,height-290,20,160)
    wall39.shapeColor="pink"

    wall40=createSprite(670,690,20,200)
    wall40.shapeColor="pink"

    wall41=createSprite(width-670,height-690,20,200)
    wall41.shapeColor="pink"

    wall42=createSprite(940,582,270,20)
    wall42.shapeColor="pink"

    wall43=createSprite(width-940,height-582,270,20)
    wall43.shapeColor="pink"

    wall44=createSprite(970,640,20,110)
    wall44.shapeColor="pink"

    wall45=createSprite(820,730,20,110)
    wall45.shapeColor="pink"

    wall46=createSprite(width-970,height-640,20,110)
    wall46.shapeColor="pink"

    wall47=createSprite(width-820,height-730,20,110)
    wall47.shapeColor="pink"

    
}
function draw(){
    background(bgImg)
    text(mouseX+","+mouseY,mouseX,mouseY)


    if(gamestate===0){
        playButton.visible=true
        donut.visible=false
        wall1.visible=false
        wall2.visible=false
        wall3.visible=false
        wall4.visible=false
        wall5.visible=false
        wall6.visible=false
        wall7.visible=false
        wall8.visible=false
        wall9.visible=false
        wall10.visible=false
        wall11.visible=false
        wall12.visible=false
        wall13.visible=false
        wall14.visible=false
        wall15.visible=false
        wall16.visible=false
        wall17.visible=false
        wall18.visible=false
        wall19.visible=false
        wall20.visible=false
        wall21.visible=false
        wall22.visible=false
        wall23.visible=false
        wall24.visible=false
        wall25.visible=false
        wall26.visible=false
        wall27.visible=false
        wall28.visible=false
        wall29.visible=false
        wall30.visible=false
        wall31.visible=false
        wall32.visible=false
        wall33.visible=false
        wall34.visible=false
        wall35.visible=false
        wall36.visible=false
        wall37.visible=false
        wall38.visible=false
        wall39.visible=false
        wall40.visible=false
        wall41.visible=false
        wall42.visible=false
        wall43.visible=false
        wall44.visible=false
        wall45.visible=false
        wall46.visible=false
        wall47.visible=false



        drawSprites()
        if(mousePressedOver(playButton)){
            gamestate=1
        }
    }


    if(gamestate===1){
        playButton.visible=false
        donut.visible=true
        wall1.visible=true
        wall2.visible=true
        wall3.visible=true
        wall4.visible=true
        wall5.visible=true
        wall6.visible=true
        wall7.visible=true
        wall8.visible=true
        wall9.visible=true
        wall10.visible=true
        wall11.visible=true
        wall12.visible=true
        wall13.visible=true
        wall14.visible=true
        wall15.visible=true
        wall16.visible=true
        wall17.visible=true
        wall18.visible=true
        wall19.visible=true
        wall20.visible=true
        wall21.visible=true
        wall22.visible=true
        wall23.visible=true
        wall24.visible=true
        wall25.visible=true
        wall26.visible=true
        wall27.visible=true
        wall28.visible=true
        wall29.visible=true
        wall30.visible=true
        wall31.visible=true
        wall32.visible=true
        wall33.visible=true
        wall34.visible=true
        wall35.visible=true
        wall36.visible=true
        wall37.visible=true
        wall38.visible=true
        wall39.visible=true
        wall40.visible=true
        wall41.visible=true
        wall42.visible=true
        wall43.visible=true
        wall44.visible=true
        wall45.visible=true
        wall46.visible=true
        wall47.visible=true
        if(keyIsDown(LEFT_ARROW)){
            donut.position.x-=5
        }
        if(keyIsDown(RIGHT_ARROW)){
            donut.position.x+=5
        }
        if(keyIsDown(UP_ARROW)){
            donut.position.y-=5
        }
        if(keyIsDown(DOWN_ARROW)){
            donut.position.y+=5
        }
        drawSprites()
    }
}