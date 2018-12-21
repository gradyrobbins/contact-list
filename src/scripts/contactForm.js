/*
    Author: Grady
    Name: contactForm.js
    Purpose: A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

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

*/
import contactCollection from "./contactCollection"

const contactForm =  {

        appendContactForm () {
            let inputForm =
            `
            <article>
                <h4>Please enter your contact information: </h4>
                <fieldset>
                <label for="contact__name">Name:</label>
                <input id="contact__name" name="contact__name" type="text" autofocus />
                </fieldset>
                <fieldset>
                <label for="contact__phone__number">Phone Number:</label>
                <input id="contact__phone__number" name="contact__phone__number" type="text" autofocus />
                </fieldset>
                <fieldset>
                <label for="contact__address">Address:</label>
                <input id="contact__address" name="contact__address" type="text" autofocus />
                </fieldset>
                <button class="btn contact__save">Save New Contact to List</button>
            </article>
            `

            let contactFormDiv = document.querySelector("#contact-form-div");
            contactFormDiv.innerHTML = inputForm;

            // How to create a button, add a class and attach an event listener using createElement.
            // let newButton = document.createElement("button");
            // newButton.classList.add("aclass");
            // newButton.addEventListener("click", eventListeners.handleFormSubmission);
            // console.log(newButton);
            // displayContainer.appendChild(newButton);
        },

        handleFormSubmission () {
            let contactSaveBtn = document.querySelector(".contact__save");
            contactSaveBtn.addEventListener("click", () => {
            console.log("bloooooop");

            let name = document.querySelector("#contact__name").value;
            let number = document.querySelector("#contact__phone__number").value;
            let address = document.querySelector("#contact__address").value;

            const contactObject = {
                name: name,
                number: number,
                address: address
            };
            console.log(contactObject);


            contactCollection.saveContact(contactObject)

            })
        }
    }

export default contactForm;