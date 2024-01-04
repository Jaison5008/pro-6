class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get PG(){
        return this.rating
    }
}
const movie1= new Movie ("robo","Lyca","PG7");
const movie2=new Movie("run","studioGreen")
const movie3=new Movie( "titanic","Eon Productions","PG­13");
console.log(movie1);
console.log(movie2);
console.log(movie3);
//-----------------------------------------------------------------------
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color
    }
    get radius(){
        return this.r;
    }
    set radius(r){
        this.r=r;
    }
    get color(){
        return this.c;
    }
    set color(c){
        this.c=c;
    }
    get toString(){
        return `"cricle[radius=${this.r},color=${this.c}]"`
    }
    get area(){
        return Math.PI*this.r*this.r
    }
    get cricumference(){
        return 2*Math.PI*this.r
    }

}
const obj1=new Circle(1.0,"red");
console.log(obj1.radius);
obj1.radius=3.5;
console.log(obj1.radius);
console.log(obj1.color);
obj1.color="blue";
console.log(obj1.color);
console.log(obj1.toString);
console.log(obj1.area.toFixed(3));
console.log(obj1.cricumference.toFixed(3));
//--------------------------------------------------------------------------
class Person{
    constructor (name,age,gender,salary,address){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
        this.address=address;
    }    
}
const person=new Person("venky",23,"male",35000,"kali street");
const person1=new Person("sathish",20,"male",40000,"Raintreestreet");
const person2=new Person("karthika",23,"female",50000,"Arumugam street");
console.log(person);
console.log(person1);
console.log(person2);
//--------------------------------------------------------------------------
class Ubar{
    constructor(kelometer,price=30){
        this.km=kelometer;
        this.pr=price;
    }
    get price(){
        return this.km* this.pr;
    }
}
const ubar1=new Ubar(5);
const ubar2=new Ubar(3,100);
console.log(ubar1.price);
console.log(ubar2.price);