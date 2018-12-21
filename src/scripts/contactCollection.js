
/*
    Author: Grady
    Name: contactCollection.js
    Purpose: A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
*/

//API endpoint:  http://localhost:8088/contactList

const contactCollection = {
        getContactList() {
        return fetch("http://localhost:8088/contactList")
        .then(response => response.json())
        },
        saveContact (contactToSave) {
           return fetch("http://localhost:8088/contactList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactToSave)
            });
        },

};
export default contactCollection