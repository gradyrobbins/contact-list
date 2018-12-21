/*
    Author: Grady
    Name: contactForm.js
    Purpose: A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

    // 1. get all contacts; imported from contactCollection module
    // 2. loop over array []
    // 3. use cardBuilder imported method from ./contact module (contact.cardbuilder) for each item in the array
    // 4. append to DOM
*/

import contactCollection from "./contactCollection"
import contact from "./contact"

const contactList = {
    contactDisplay(){
        // Where the data is processed from collectEntries
   contactCollection.getContactList()
    .then(allEntries => {
      let contactDocFragment = document.createDocumentFragment();
        allEntries.forEach(entryItem => {
        let entryHtml = contact.cardBuilder(entryItem)
        console.log(entryHtml)
        contactDocFragment.appendChild(entryHtml)
      })
        let outputContact = document.querySelector("#display-container")
        outputContact.appendChild(contactDocFragment)
    })
  }
}

export default contactList