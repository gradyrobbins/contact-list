/*
Author: Grady
Name: contact.js
Purpose: A Contact component that displays a person's name, phone number, and address.
This module builds out a single object, representing one person's contact info, to be appended to DOM in another module
*/

// what the DOM build out will look like
{/* <article>
    <h3>${name}</h3>
    <p>${phoneNumber}</p>
    <p>${address}</p>
</article> */}

const contact = {
    cardBuilder (singleObjectfromDatabaseJSON)  {
       let contactCard = document.createElement("article");
       contactCard.classList.add("scoop");
       contactCard.setAttribute("id", "bloop")

       let contactName = document.createElement("h3");
       contactName.textContent = singleObjectfromDatabaseJSON.name;

       let contactPhoneNumber = document.createElement("p");
       contactPhoneNumber.textContent = singleObjectfromDatabaseJSON.phoneNumber;

       let contactAddress = document.createElement("p");
       contactAddress.textContent = singleObjectfromDatabaseJSON.address;

       contactCard.appendChild(contactName);
       contactCard.appendChild(contactPhoneNumber);
       contactCard.appendChild(contactAddress);

       return contactCard
    }
}

export default contact;

