//define the action of the Employee object, method 
function printEmployee()
{
    var name_line = "<td>" + this.name + "</td>";
    var title_line = "<td>" + this.title + "</td>";
    var phone_line = "<td>" + this.phone + "</td>";

    var row = "<tr>" + name_line + title_line + phone_line + "</tr>";
    document.write(row)
}

//define an object using construction function 
function Employee(name, title, phone)
{
    //list of attributes for this object 
    this.name = name;
    this.title = title;
    this.phone = phone;
    //assign method to the employee object
    this.printEmployee = printEmployee;
}

//create emplyee objects 
var nick = new Employee("Nick", "Instructor", "(956) 872-3445" );
var lisa = new Employee("Lisa Simpson", "Teacher", "(956) 333-1111");
var valeria = new Employee("Valeria Ramirez", "Testing Coordinator", "(956) 289-6103")
//display the employee information
//nick.printEmployee();
//lisa.printEmployee();
//valeria.printEmployee();

//create an array of emplyee name
var emArray = [nick.name, lisa.name, valeria.name];

emArray = emArray.sort(); //built-in sort function sorts letters but not numbers

for( var counter = 0; counter < emArray.length; counter++)
{
    document.write(emArray[counter] + "<br>");
}