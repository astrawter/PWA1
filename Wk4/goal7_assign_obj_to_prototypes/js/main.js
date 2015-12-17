/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

    //Create an array called names that contains at least 5 people names
    // randomly select a name to output in the display.
    //Create three instances of the Person object using a FOR loop
    // place each reference of the object in an array called people.
    //When instantiating the Person object, make sure a randomly chosen name (using the Math.random() method) from the names array is sent to the constructor of the person along with what row number in the HTML the information will be displayed in.
Ex: var person = new Person(names[someName],someRow);
//Create a function called "populateHTML"
// outputs the person's name and person's job, on the web page.
    //DON'T allow duplicate names to appear.
    //Set up an Interval that calls a runUpdate() function 30 times a second.
    Example: "setInterval(runUpdate, 1000 / 30);"
Once all the Person instances are in the people array, the program will loop through each person and run the prototype update() function. The loop should execute in the runUpdate() function that is called from the setInterval (in the example directly above). For example:
    function runUpdate(){
        people.forEach(function(element){

            element.update();

        });

