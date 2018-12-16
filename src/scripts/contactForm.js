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



        const contactForm =  {
            // return
                appendContactForm () {
                  let inputForm = `
                  <article>
                    <h4>Please enter your contact information: </h4>
                    <fieldset>
                    <label for="lego__name">Name:</label>
                    <input id="lego__name" name="lego__name" type="text" autofocus />
                    </fieldset>
                    <fieldset>
                    <label for="lego__shape">Phone Number:</label>
                    <input id="lego__shape" name="lego__shape" type="text" autofocus />
                    </fieldset>
                    <fieldset>
                    <label for="lego__color">Address:</label>
                    <input id="lego__color" name="lego__color" type="text" autofocus />
                    </fieldset>
                    <button class="btn lego__save">Save New Contact to List</button>
                  </article>`

                  let displayContainer = document.querySelector("#contact-form-div");
                  displayContainer.innerHTML = inputForm;

                  // How to create a button, add a class and attach an event listener using createElement.
                  // let newButton = document.createElement("button");
                  // newButton.classList.add("aclass");
                  // newButton.addEventListener("click", eventListeners.handleFormSubmission);
                  // console.log(newButton);
                  // displayContainer.appendChild(newButton);
                }
  }

export default contactForm;