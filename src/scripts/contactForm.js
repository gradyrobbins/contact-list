/*
    Author: Grady
    Name: contactForm.js
    Purpose: A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
*/

//1. building HTML form
//2. attach event listener to button of submit form
//3. append form to DOM
//4. need to build out a POST method in "foodcollection " module
// 5. when event happens,
        //capture user input
        // create object (name/expiration/type)
        //post New Food to DOM
//this current module will requiere import 'foodcollection" module
// refer to lego exercise



const contactForm = function(name, phoneNumber, address) {
    console.log("Hello contactForm.js")
    return {
      name,
      phoneNumber,
      address,
    
      toString () {
          return ` ${this.name} ${this.phoneNumber} ${this.address}`
      },
    
      drive (destination) {
          return `You drive ${this} to ${destination}`
      }
    }
  }

export default contactForm;