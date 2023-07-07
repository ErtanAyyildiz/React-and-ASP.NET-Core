class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }

    area(){
        console.log('The area of the rectangle is ' + this.height*this.width );
    }
}

const rectangle1=new Rectangle(7,2);
//console.log(rectangle1.height);
rectangle1.area();