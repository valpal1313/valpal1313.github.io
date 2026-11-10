//difine the action of cars own object, method
function printCars()
{
    var name_line = "<td>" + this.name + "</td>";
    var brand_line = "<td>" + this.brand + "</td>";
    var year_line = "<td>" + this.year + "</td>";

    var row = "<tr>" + name_line + brand_line + year_line + "</tr>";
    document.write(row)
}
//define an object using construction function 
function Cars(name, brand, year)
{
    //list of attributes for this object 
    this.name = name;
    this.brand = brand;
    this.year = year;
    //assign method to the cars object 
    this.printCars = printCars;
}

//create Cars object 
var taos = new Cars("Taos", "Volkswagen", "2022");
var jetta = new Cars("Jetta", "Volkswagen", "2009");
var tiguan = new Cars("Tiguan", "Volkswagen", "2014");
var atlas = new Cars("Atlas", "Volkswagen", "2027");
var beetle = new Cars("Beetle", "Volkswagen", "1964");
//display the Cars information
//taos.printCars()
//jetta.printCars()
//tiguan.printCars()
//atlas.printCars()
//beetle.printCars()

//create an array of car name
var emArray = [taos.name, jetta.name, tiguan.name, atlas.name, beetle.name];

emArray = emArray.sort(); //built-in sort function sort letters but not numbers

for( var counter = 0; counter < emArray.length; counter++)
{
    document.write(emArray[counter] + "<br>");
}