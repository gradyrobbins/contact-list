(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
Author: Grady
Name: contact.js
Purpose: A Contact component that displays a person's name, phone number, and address.
This module builds out a single object, representing one person's contact info, to be appended to DOM in another module
*/
// what the DOM build out will look like
{
  /* <article>
     <h3>${name}</h3>
     <p>${phoneNumber}</p>
     <p>${address}</p>
  </article> */
}
const contact = {
  cardBuilder(singleObjectfromDatabaseJSON) {
    let contactCard = document.createElement("article");
    contactCard.classList.add("scoop");
    contactCard.setAttribute("id", "bloop");
    let contactName = document.createElement("h3");
    contactName.textContent = singleObjectfromDatabaseJSON.name;
    let contactPhoneNumber = document.createElement("p");
    contactPhoneNumber.textContent = singleObjectfromDatabaseJSON.phoneNumber;
    let contactAddress = document.createElement("p");
    contactAddress.textContent = singleObjectfromDatabaseJSON.address;
    contactCard.appendChild(contactName);
    contactCard.appendChild(contactPhoneNumber);
    contactCard.appendChild(contactAddress);
    return contactCard;
  }

};
var _default = contact;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Grady
    Name: contactCollection.js
    Purpose: A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
*/
//API endpoint:  http://localhost:8088/contactList
const contactCollection = {
  getContactList() {
    return fetch("http://localhost:8088/contactList").then(response => response.json());
  },

  saveContact(contactToSave) {
    return fetch("http://localhost:8088/contactList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactToSave)
    });
  }

};
var _default = contactCollection;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const contactForm = {
  appendContactForm() {
    let inputForm = `
            <article>
                <h2>Please enter your contact information: </h2>
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
            `;
    let contactFormDiv = document.querySelector("#contact-form-div");
    contactFormDiv.innerHTML = inputForm; // How to create a button, add a class and attach an event listener using createElement.
    // let newButton = document.createElement("button");
    // newButton.classList.add("aclass");
    // newButton.addEventListener("click", eventListeners.handleFormSubmission);
    // console.log(newButton);
    // displayContainer.appendChild(newButton);
  },

  handleFormSubmission() {
    let contactSaveBtn = document.querySelector(".contact__save");
    contactSaveBtn.addEventListener("click", () => {
      // console.log("bloooooop");
      let name = document.querySelector("#contact__name").value;
      let number = document.querySelector("#contact__phone__number").value;
      let address = document.querySelector("#contact__address").value;
      const contactObject = {
        name: name,
        phoneNumber: number,
        address: address
      }; // console.log(contactObject);

      _contactCollection.default.saveContact(contactObject);

      location.reload(true);
    });
  }

};
var _default = contactForm;
exports.default = _default;

},{"./contactCollection":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

var _contact = _interopRequireDefault(require("./contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Grady
    Name: contactForm.js
    Purpose: A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

    // 1. get all contacts; imported from contactCollection module
    // 2. loop over array []
    // 3. use cardBuilder imported method from ./contact module (contact.cardbuilder) for each item in the array
    // 4. append to DOM
*/
const contactList = {
  contactDisplay() {
    // Where the data is processed from collectEntries
    _contactCollection.default.getContactList().then(allEntries => {
      let contactDocFragment = document.createDocumentFragment();
      allEntries.forEach(entryItem => {
        let entryHtml = _contact.default.cardBuilder(entryItem); // console.log(entryHtml)


        contactDocFragment.appendChild(entryHtml);
      });
      let outputContact = document.querySelector("#display-container");
      outputContact.appendChild(contactDocFragment);
    });
  }

};
var _default = contactList;
exports.default = _default;

},{"./contact":1,"./contactCollection":2}],5:[function(require,module,exports){
"use strict";

var _contactForm = _interopRequireDefault(require("./contactForm"));

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Grady
    Name: main.js
    Purpose: In main.js, import the ContactList component and the ContactForm component.
*/
//In main.js, import the ContactList component and the ContactForm component.
console.log("Hello main.js");

_contactForm.default.appendContactForm();

_contactForm.default.handleFormSubmission();

_contactList.default.contactDisplay();

},{"./contactForm":3,"./contactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0E7QUFBQzs7Ozs7QUFJYTtBQUVkLE1BQU0sT0FBTyxHQUFHO0FBQ1osRUFBQSxXQUFXLENBQUUsNEJBQUYsRUFBaUM7QUFDekMsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLENBQXNCLEdBQXRCLENBQTBCLE9BQTFCO0FBQ0EsSUFBQSxXQUFXLENBQUMsWUFBWixDQUF5QixJQUF6QixFQUErQixPQUEvQjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQiw0QkFBNEIsQ0FBQyxJQUF2RDtBQUVBLFFBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBekI7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLEdBQWlDLDRCQUE0QixDQUFDLFdBQTlEO0FBRUEsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLEdBQTZCLDRCQUE0QixDQUFDLE9BQTFEO0FBRUEsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixXQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0Isa0JBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixjQUF4QjtBQUVB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WiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG5BdXRob3I6IEdyYWR5XG5OYW1lOiBjb250YWN0LmpzXG5QdXJwb3NlOiBBIENvbnRhY3QgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYSBwZXJzb24ncyBuYW1lLCBwaG9uZSBudW1iZXIsIGFuZCBhZGRyZXNzLlxuVGhpcyBtb2R1bGUgYnVpbGRzIG91dCBhIHNpbmdsZSBvYmplY3QsIHJlcHJlc2VudGluZyBvbmUgcGVyc29uJ3MgY29udGFjdCBpbmZvLCB0byBiZSBhcHBlbmRlZCB0byBET00gaW4gYW5vdGhlciBtb2R1bGVcbiovXG5cbi8vIHdoYXQgdGhlIERPTSBidWlsZCBvdXQgd2lsbCBsb29rIGxpa2VcbnsvKiA8YXJ0aWNsZT5cbiAgICA8aDM+JHtuYW1lfTwvaDM+XG4gICAgPHA+JHtwaG9uZU51bWJlcn08L3A+XG4gICAgPHA+JHthZGRyZXNzfTwvcD5cbjwvYXJ0aWNsZT4gKi99XG5cbmNvbnN0IGNvbnRhY3QgPSB7XG4gICAgY2FyZEJ1aWxkZXIgKHNpbmdsZU9iamVjdGZyb21EYXRhYmFzZUpTT04pICB7XG4gICAgICAgbGV0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgY29udGFjdENhcmQuY2xhc3NMaXN0LmFkZChcInNjb29wXCIpO1xuICAgICAgIGNvbnRhY3RDYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmxvb3BcIilcblxuICAgICAgIGxldCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IHNpbmdsZU9iamVjdGZyb21EYXRhYmFzZUpTT04ubmFtZTtcblxuICAgICAgIGxldCBjb250YWN0UGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICBjb250YWN0UGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBzaW5nbGVPYmplY3Rmcm9tRGF0YWJhc2VKU09OLnBob25lTnVtYmVyO1xuXG4gICAgICAgbGV0IGNvbnRhY3RBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgY29udGFjdEFkZHJlc3MudGV4dENvbnRlbnQgPSBzaW5nbGVPYmplY3Rmcm9tRGF0YWJhc2VKU09OLmFkZHJlc3M7XG5cbiAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XG4gICAgICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcbiAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG5cbiAgICAgICByZXR1cm4gY29udGFjdENhcmRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG5cbiIsIlxuLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdENvbGxlY3Rpb24uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIGNvbnRhY3RzIGZyb20gc3RvcmFnZSwgYW5kIHNhdmVzIG5ldyBvbmVzLiBFYWNoIG5ldyBjb250YWN0IHNob3VsZCBoYXZlIGFuIGF1dG8tZ2VuZXJhdGVkIGlkZW50aWZpZXIuXG4qL1xuXG4vL0FQSSBlbmRwb2ludDogIGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFxuXG5jb25zdCBjb250YWN0Q29sbGVjdGlvbiA9IHtcbiAgICAgICAgZ2V0Q29udGFjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVDb250YWN0IChjb250YWN0VG9TYXZlKSB7XG4gICAgICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdFRvU2F2ZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG59O1xuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbGxlY3Rpb24iLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBjb250YWN0Rm9ybS5qc1xuICAgIFB1cnBvc2U6IEEgQ29udGFjdEZvcm0gY29tcG9uZW50IHRoYXQsIHdoZW4gZmlsbGVkIG91dCBhbmQgYSBzdWJtaXQgYnV0dG9uIGlzIHByZXNzZWQsIGFkZHMgYSBuZXcgY29udGFjdCB0byBzdG9yYWdlLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5cbiAgICAvLzEuIGJ1aWxkaW5nIEhUTUwgZm9ybVxuICAgIC8vMi4gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbiBvZiBzdWJtaXQgZm9ybVxuICAgIC8vMy4gYXBwZW5kIGZvcm0gdG8gRE9NXG4gICAgLy80LiBuZWVkIHRvIGJ1aWxkIG91dCBhIFBPU1QgbWV0aG9kIGluIFwiZm9vZGNvbGxlY3Rpb24gXCIgbW9kdWxlXG4gICAgLy8gNS4gd2hlbiBldmVudCBoYXBwZW5zLFxuICAgIC8vY2FwdHVyZSB1c2VyIGlucHV0XG4gICAgLy8gY3JlYXRlIG9iamVjdCAobmFtZS9leHBpcmF0aW9uL3R5cGUpXG4gICAgLy9wb3N0IE5ldyBGb29kIHRvIERPTVxuICAgIC8vdGhpcyBjdXJyZW50IG1vZHVsZSB3aWxsIHJlcXVpZXJlIGltcG9ydCAnZm9vZGNvbGxlY3Rpb25cIiBtb2R1bGVcbiAgICAvLyByZWZlciB0byBsZWdvIGV4ZXJjaXNlXG5cbiovXG5pbXBvcnQgY29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb25cIlxuXG5jb25zdCBjb250YWN0Rm9ybSA9ICB7XG5cbiAgICAgICAgYXBwZW5kQ29udGFjdEZvcm0gKCkge1xuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8aDI+UGxlYXNlIGVudGVyIHlvdXIgY29udGFjdCBpbmZvcm1hdGlvbjogPC9oMj5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX25hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fbmFtZVwiIG5hbWU9XCJjb250YWN0X19uYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX3Bob25lX19udW1iZXJcIiBuYW1lPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX2FkZHJlc3NcIj5BZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fYWRkcmVzc1wiIG5hbWU9XCJjb250YWN0X19hZGRyZXNzXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY29udGFjdF9fc2F2ZVwiPlNhdmUgTmV3IENvbnRhY3QgdG8gTGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICBsZXQgY29udGFjdEZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtZm9ybS1kaXZcIik7XG4gICAgICAgICAgICBjb250YWN0Rm9ybURpdi5pbm5lckhUTUwgPSBpbnB1dEZvcm07XG5cbiAgICAgICAgICAgIC8vIEhvdyB0byBjcmVhdGUgYSBidXR0b24sIGFkZCBhIGNsYXNzIGFuZCBhdHRhY2ggYW4gZXZlbnQgbGlzdGVuZXIgdXNpbmcgY3JlYXRlRWxlbWVudC5cbiAgICAgICAgICAgIC8vIGxldCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgLy8gbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY2xhc3NcIik7XG4gICAgICAgICAgICAvLyBuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUZvcm1TdWJtaXNzaW9uKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0J1dHRvbik7XG4gICAgICAgICAgICAvLyBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24gKCkge1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RTYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0X19zYXZlXCIpO1xuICAgICAgICAgICAgY29udGFjdFNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmxvb29vb29wXCIpO1xuXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9fbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RfX3Bob25lX19udW1iZXJcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9fYWRkcmVzc1wiKS52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgY29udGFjdE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhY3RPYmplY3QpO1xuXG5cbiAgICAgICAgICAgIGNvbnRhY3RDb2xsZWN0aW9uLnNhdmVDb250YWN0KGNvbnRhY3RPYmplY3QpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEZvcm07IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdEZvcm0uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RMaXN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGFsbCBjb250YWN0cy4gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5cbiAgICAvLyAxLiBnZXQgYWxsIGNvbnRhY3RzOyBpbXBvcnRlZCBmcm9tIGNvbnRhY3RDb2xsZWN0aW9uIG1vZHVsZVxuICAgIC8vIDIuIGxvb3Agb3ZlciBhcnJheSBbXVxuICAgIC8vIDMuIHVzZSBjYXJkQnVpbGRlciBpbXBvcnRlZCBtZXRob2QgZnJvbSAuL2NvbnRhY3QgbW9kdWxlIChjb250YWN0LmNhcmRidWlsZGVyKSBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheVxuICAgIC8vIDQuIGFwcGVuZCB0byBET01cbiovXG5cbmltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0XCJcblxuY29uc3QgY29udGFjdExpc3QgPSB7XG4gICAgY29udGFjdERpc3BsYXkoKXtcbiAgICAgICAgLy8gV2hlcmUgdGhlIGRhdGEgaXMgcHJvY2Vzc2VkIGZyb20gY29sbGVjdEVudHJpZXNcbiAgIGNvbnRhY3RDb2xsZWN0aW9uLmdldENvbnRhY3RMaXN0KClcbiAgICAudGhlbihhbGxFbnRyaWVzID0+IHtcbiAgICAgIGxldCBjb250YWN0RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGFsbEVudHJpZXMuZm9yRWFjaChlbnRyeUl0ZW0gPT4ge1xuICAgICAgICBsZXQgZW50cnlIdG1sID0gY29udGFjdC5jYXJkQnVpbGRlcihlbnRyeUl0ZW0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVudHJ5SHRtbClcbiAgICAgICAgY29udGFjdERvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGVudHJ5SHRtbClcbiAgICAgIH0pXG4gICAgICAgIGxldCBvdXRwdXRDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKVxuICAgICAgICBvdXRwdXRDb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3REb2NGcmFnbWVudClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogbWFpbi5qc1xuICAgIFB1cnBvc2U6IEluIG1haW4uanMsIGltcG9ydCB0aGUgQ29udGFjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdEZvcm0gY29tcG9uZW50LlxuKi9cblxuLy9JbiBtYWluLmpzLCBpbXBvcnQgdGhlIENvbnRhY3RMaXN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RGb3JtIGNvbXBvbmVudC5cbmltcG9ydCBjb250YWN0Rm9ybSBmcm9tIFwiLi9jb250YWN0Rm9ybVwiXG5pbXBvcnQgY29udGFjdExpc3QgZnJvbSBcIi4vY29udGFjdExpc3RcIlxuXG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gbWFpbi5qc1wiKVxuXG5jb250YWN0Rm9ybS5hcHBlbmRDb250YWN0Rm9ybSgpO1xuY29udGFjdEZvcm0uaGFuZGxlRm9ybVN1Ym1pc3Npb24oKTtcblxuY29udGFjdExpc3QuY29udGFjdERpc3BsYXkoKTtcbiJdfQ==
