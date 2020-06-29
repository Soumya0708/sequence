class Story{
    constructor(){
        this.paragraph=createElement('p');
        this.titleImage=createImg('images/images.jpg')
        this.start=createButton("Start")
       
    }
    display(){
        this.paragraph.html("There is a group called as sad seven </br> because they never get chance to win against other people so now its up to will you make the sad seven as the lucky seven ");
        this.paragraph.position( 200,200 )
        this.titleimage.position(150,200)
        this.start.position(100,200)
    }
}