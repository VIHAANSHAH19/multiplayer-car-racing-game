class Form{
    constructor(){
        this.input= createInput("Name")
        this.button=createButton('play')
        this.greeting=createElement('h4')
        this.button2=createButton('reset')
    }
    display(){
       
        this.input.position(displayWidth/2-100,100)
        var title=createElement('h1','Car Racing Game')

        this.button2.position(displayWidth/1.5,20)
        title.position(displayWidth/2-100,0)
       
        this.button.position(displayWidth/2-50,150)
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        title.hide()
        player.name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.updateCount(playerCount)
        player.update()
        this.greeting.html('Hello'+player.name)
        this.greeting.position(displayWidth/2-100,200)    


    })
    this.button2.mousePressed(()=>{
        game.updateState(0)
        player.updateCount(0)
        player.distance=0
        player.update()
    })
    }
}