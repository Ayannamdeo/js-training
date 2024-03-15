// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    getArea(){
        console.log("area cannot be determined just on basis of height and width for any arbitary shape");
    }
}

class Rectangle extends Shape{
    getArea(){
        // super.getArea();
        console.log(this.height * this.width);
    }
}
class Triangle extends Shape{
    getArea(){
        console.log(1/2 * this.height * this.width);
    }
}


const s1 = new Shape(100, 100);
const s2 = new Rectangle(100, 200);
const s3 = new Triangle(100, 50);

s1.getArea();
s2.getArea();
s3.getArea();
