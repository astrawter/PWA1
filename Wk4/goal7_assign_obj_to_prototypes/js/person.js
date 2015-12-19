/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
//(function(){
window.Person = Person;
//Person object set to the global window to be used with main
// person.jobs & person.actions with an array of 4 or more multiple items for each





function Person(name,row){
    this.name = name;
//Math.floor(Math.random()*Person.actions.length) randomly select one item from the Person.actions array
    Person.actions = ['Running','Sleeping','Drawing','Swimming','Eating'];
//Math.floor(Math.random()*Person.jobs.length) randomly select one item from the Person.jobs array
    Person.jobs = ['Lawyer','Pilot', 'Teacher', 'Chef', 'Doctor'];
    this.row = row;
}
Person();
    var r = Math.floor(Math.random()*Person.actions.length);
    Person.actions = Person.actions[r];
    document.getElementById('r1c3').innerHTML= Person.actions;
    console.log(Person.actions);

    var rr = Math.floor(Math.random()*Person.jobs.length);
    Person.jobs = Person.jobs[rr];
    document.getElementById('r1c2').innerHTML= Person.jobs;
    console.log(Person.jobs);

//display starting action of Person in 3rd column
//add property through prototype called update which is called from the main
//});