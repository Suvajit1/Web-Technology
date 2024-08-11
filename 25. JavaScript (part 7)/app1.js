// this in arrow function

const student = {
    name : "Suvajit",
    marks : 70,
    prop : this, // global scope

    getName : function(){
        console.log(this); // student
        return this.name;
    },

    getMarks : () =>{
        console.log(this); // window
        return this.marks;
    },

    getInfo1 : function(){
        setTimeout( () => {
            console.log(this)   // student
        }, 2000);
    },
    getInfo2 : function(){
        setTimeout( function() {
            console.log(this)   // window
        }, 2000);
    }
};

let a = 5; // global scope
