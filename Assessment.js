// Q1


function Animal(animalName,type){
   this.animalName=animalName;
   this.type=type;

   
}

Animal.prototype.getAnimalName = function(){
    return this.animalName;
};

Animal.prototype.createElement = function(){
    $("#create").appendchild("<h1> new Dom </h1>");
}

createdAnimal= new Animal();

// End Q1

//Q2


const shape = (height, length , area) =>{
   
   const getArea =() =>
   {
       return this.area;
   }
  }
 

  // End Q2

  //Q3

const filterArray =(arr) =>{
    if (arr.length != 4)
    {
        arr.pop();
        
    }
    return arr;
}

//End Q3

 