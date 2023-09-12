//   En JavaScript, l'opérateur this est utilisé pour faire référence à l'objet courant,
//   c'est-à-dire à l'objet sur lequel une méthode est appelée ou à l'objet dans lequel
//   une fonction est définie. Voici quelques exemples où vous pouvez utiliser l'opérateur this :


// Dans une méthode d'un objet :
const obj = {
  name: "John",
  Age: 29,
  sayHello: function () {
    console.log("Hello, my age is " + this.Age + " and my name is " + this.name );
  },
};

// Affiche "Hello, my age is 29"
obj.sayHello();



// Dans un constructeur de classe :
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}

const person = new Person("John");
person.sayHello(); 
// Affiche "Hello, my name is John"


// Dans une fonction callback d'un événement :
document.querySelector("#myButton").addEventListener("click", function () {
  console.log("Button clicked by " + this.textContent);
});

// Dans cet exemple, this fait référence à l'élément HTML sur lequel l'événement a été déclenché.

// Dans une fonction fléchée à l'intérieur d'une méthode :
const obj2 = {
  name: "John",
  sayHello: function () {
    const greet = () => {
      console.log("Hello, my name is " + this.name);
    };
    greet();
  },
};

obj2.sayHello();
 // Affiche "Hello, my name is John"

 // Dans ce cas, la fonction fléchée conserve la valeur de this de l'objet parent.

// Notez que le comportement de this peut varier en fonction du contexte
// d'exécution, tel que le mode strict ("use strict") et les fonctions fléchées.
// Il est important de comprendre comment this est lié dans chaque cas particulier pour éviter les erreurs.
