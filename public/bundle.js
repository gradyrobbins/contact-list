(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

      _contactCollection.default.saveContact(contactObject);
    });
  }

};
var _default = contactForm;
exports.default = _default;

},{"./contactCollection":1}],3:[function(require,module,exports){
"use strict";

var _contactForm = _interopRequireDefault(require("./contactForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Grady
    Name: main.js
    Purpose: In main.js, import the ContactList component and the ContactForm component.
*/
//In main.js, import the ContactList component and the ContactForm component.
// import contactList from "./contactList"
console.log("Hello main.js");

_contactForm.default.appendContactForm();

_contactForm.default.handleFormSubmission();

},{"./contactForm":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7Ozs7QUFNQTtBQUVBLE1BQU0saUJBQWlCLEdBQUc7QUFDbEIsRUFBQSxjQUFjLEdBQUc7QUFDakIsV0FBTyxLQUFLLENBQUMsbUNBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUMsR0FKaUI7O0FBS2xCLEVBQUEsV0FBVyxDQUFFLGFBQUYsRUFBaUI7QUFDekIsV0FBTyxLQUFLLENBQUMsbUNBQUQsRUFBc0M7QUFDakQsTUFBQSxNQUFNLEVBQUUsTUFEeUM7QUFFakQsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUZ3QztBQUtqRCxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLGFBQWY7QUFMMkMsS0FBdEMsQ0FBWjtBQU9GOztBQWJpQixDQUExQjtlQWdCZSxpQjs7Ozs7Ozs7Ozs7QUNSZjs7OztBQWpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsTUFBTSxXQUFXLEdBQUk7QUFFYixFQUFBLGlCQUFpQixHQUFJO0FBQ2pCLFFBQUksU0FBUyxHQUNaOzs7Ozs7Ozs7Ozs7Ozs7OzthQUREO0FBb0JBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQUFyQjtBQUNBLElBQUEsY0FBYyxDQUFDLFNBQWYsR0FBMkIsU0FBM0IsQ0F0QmlCLENBd0JqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQWhDWTs7QUFrQ2IsRUFBQSxvQkFBb0IsR0FBSTtBQUNwQixRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxNQUFNO0FBQy9DLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO0FBRUEsVUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQXBEO0FBQ0EsVUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtELEtBQS9EO0FBQ0EsVUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDLEtBQTFEO0FBRUEsWUFBTSxhQUFhLEdBQUc7QUFDbEIsUUFBQSxJQUFJLEVBQUUsSUFEWTtBQUVsQixRQUFBLE1BQU0sRUFBRSxNQUZVO0FBR2xCLFFBQUEsT0FBTyxFQUFFO0FBSFMsT0FBdEI7QUFLQSxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksYUFBWjs7QUFHQSxpQ0FBa0IsV0FBbEIsQ0FBOEIsYUFBOUI7QUFFQyxLQWpCRDtBQWtCSDs7QUF0RFksQ0FBckI7ZUF5RGUsVzs7Ozs7O0FDckVmOzs7O0FBUEE7Ozs7O0FBTUE7QUFFQTtBQUdBLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjs7QUFFQSxxQkFBWSxpQkFBWjs7QUFDQSxxQkFBWSxvQkFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdENvbGxlY3Rpb24uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIGNvbnRhY3RzIGZyb20gc3RvcmFnZSwgYW5kIHNhdmVzIG5ldyBvbmVzLiBFYWNoIG5ldyBjb250YWN0IHNob3VsZCBoYXZlIGFuIGF1dG8tZ2VuZXJhdGVkIGlkZW50aWZpZXIuXG4qL1xuXG4vL0FQSSBlbmRwb2ludDogIGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFxuXG5jb25zdCBjb250YWN0Q29sbGVjdGlvbiA9IHtcbiAgICAgICAgZ2V0Q29udGFjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVDb250YWN0IChjb250YWN0VG9TYXZlKSB7XG4gICAgICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdFRvU2F2ZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG59O1xuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbGxlY3Rpb24iLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBjb250YWN0Rm9ybS5qc1xuICAgIFB1cnBvc2U6IEEgQ29udGFjdEZvcm0gY29tcG9uZW50IHRoYXQsIHdoZW4gZmlsbGVkIG91dCBhbmQgYSBzdWJtaXQgYnV0dG9uIGlzIHByZXNzZWQsIGFkZHMgYSBuZXcgY29udGFjdCB0byBzdG9yYWdlLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5cbiAgICAvLzEuIGJ1aWxkaW5nIEhUTUwgZm9ybVxuICAgIC8vMi4gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbiBvZiBzdWJtaXQgZm9ybVxuICAgIC8vMy4gYXBwZW5kIGZvcm0gdG8gRE9NXG4gICAgLy80LiBuZWVkIHRvIGJ1aWxkIG91dCBhIFBPU1QgbWV0aG9kIGluIFwiZm9vZGNvbGxlY3Rpb24gXCIgbW9kdWxlXG4gICAgLy8gNS4gd2hlbiBldmVudCBoYXBwZW5zLFxuICAgIC8vY2FwdHVyZSB1c2VyIGlucHV0XG4gICAgLy8gY3JlYXRlIG9iamVjdCAobmFtZS9leHBpcmF0aW9uL3R5cGUpXG4gICAgLy9wb3N0IE5ldyBGb29kIHRvIERPTVxuICAgIC8vdGhpcyBjdXJyZW50IG1vZHVsZSB3aWxsIHJlcXVpZXJlIGltcG9ydCAnZm9vZGNvbGxlY3Rpb25cIiBtb2R1bGVcbiAgICAvLyByZWZlciB0byBsZWdvIGV4ZXJjaXNlXG5cbiovXG5pbXBvcnQgY29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb25cIlxuXG5jb25zdCBjb250YWN0Rm9ybSA9ICB7XG5cbiAgICAgICAgYXBwZW5kQ29udGFjdEZvcm0gKCkge1xuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8aDQ+UGxlYXNlIGVudGVyIHlvdXIgY29udGFjdCBpbmZvcm1hdGlvbjogPC9oND5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX25hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fbmFtZVwiIG5hbWU9XCJjb250YWN0X19uYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX3Bob25lX19udW1iZXJcIiBuYW1lPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX2FkZHJlc3NcIj5BZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fYWRkcmVzc1wiIG5hbWU9XCJjb250YWN0X19hZGRyZXNzXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY29udGFjdF9fc2F2ZVwiPlNhdmUgTmV3IENvbnRhY3QgdG8gTGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICBsZXQgY29udGFjdEZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtZm9ybS1kaXZcIik7XG4gICAgICAgICAgICBjb250YWN0Rm9ybURpdi5pbm5lckhUTUwgPSBpbnB1dEZvcm07XG5cbiAgICAgICAgICAgIC8vIEhvdyB0byBjcmVhdGUgYSBidXR0b24sIGFkZCBhIGNsYXNzIGFuZCBhdHRhY2ggYW4gZXZlbnQgbGlzdGVuZXIgdXNpbmcgY3JlYXRlRWxlbWVudC5cbiAgICAgICAgICAgIC8vIGxldCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgLy8gbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY2xhc3NcIik7XG4gICAgICAgICAgICAvLyBuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUZvcm1TdWJtaXNzaW9uKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0J1dHRvbik7XG4gICAgICAgICAgICAvLyBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24gKCkge1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RTYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0X19zYXZlXCIpO1xuICAgICAgICAgICAgY29udGFjdFNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmxvb29vb29wXCIpO1xuXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9fbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RfX3Bob25lX19udW1iZXJcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9fYWRkcmVzc1wiKS52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgY29udGFjdE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250YWN0T2JqZWN0KTtcblxuXG4gICAgICAgICAgICBjb250YWN0Q29sbGVjdGlvbi5zYXZlQ29udGFjdChjb250YWN0T2JqZWN0KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Rm9ybTsiLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBtYWluLmpzXG4gICAgUHVycG9zZTogSW4gbWFpbi5qcywgaW1wb3J0IHRoZSBDb250YWN0TGlzdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Rm9ybSBjb21wb25lbnQuXG4qL1xuXG4vL0luIG1haW4uanMsIGltcG9ydCB0aGUgQ29udGFjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdEZvcm0gY29tcG9uZW50LlxuaW1wb3J0IGNvbnRhY3RGb3JtIGZyb20gXCIuL2NvbnRhY3RGb3JtXCJcbi8vIGltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9jb250YWN0TGlzdFwiXG5cblxuY29uc29sZS5sb2coXCJIZWxsbyBtYWluLmpzXCIpXG5cbmNvbnRhY3RGb3JtLmFwcGVuZENvbnRhY3RGb3JtKCk7XG5jb250YWN0Rm9ybS5oYW5kbGVGb3JtU3VibWlzc2lvbigpO1xuIl19
