(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
  }

};
var _default = contactForm;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
    Author: Grady
    Name: contactForm.js
    Purpose: A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

    // 1. get all foods
    // 2. loop over array []
    // 3. use contactBuilder for each item in the array
    // 4. append to DOM
*/
// import contact from "./contact";
// import contactCollection from "./contactCollection"
const contactList = [];
var _default = contactList;
exports.default = _default;

},{}],3:[function(require,module,exports){
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

_contactForm.default.appendContactForm(); // contactList();

},{"./contactForm":1,"./contactList":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RGb3JtLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0TGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQlEsTUFBTSxXQUFXLEdBQUk7QUFFYixFQUFBLGlCQUFpQixHQUFJO0FBQ25CLFFBQUksU0FBUyxHQUNaOzs7Ozs7Ozs7Ozs7Ozs7OzttQkFERDtBQW9CQSxRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLFNBQTNCLENBdEJtQixDQXdCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBaENZLENBQXJCO2VBbUNPLFc7Ozs7Ozs7Ozs7O0FDdERmOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUlBLE1BQU0sV0FBVyxHQUFHLEVBQXBCO2VBTWUsVzs7Ozs7O0FDZmY7O0FBQ0E7Ozs7QUFSQTs7Ozs7QUFNQTtBQUtBLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjs7QUFFQSxxQkFBWSxpQkFBWixHLENBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBjb250YWN0Rm9ybS5qc1xuICAgIFB1cnBvc2U6IEEgQ29udGFjdEZvcm0gY29tcG9uZW50IHRoYXQsIHdoZW4gZmlsbGVkIG91dCBhbmQgYSBzdWJtaXQgYnV0dG9uIGlzIHByZXNzZWQsIGFkZHMgYSBuZXcgY29udGFjdCB0byBzdG9yYWdlLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5cbiAgICAvLzEuIGJ1aWxkaW5nIEhUTUwgZm9ybVxuICAgIC8vMi4gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbiBvZiBzdWJtaXQgZm9ybVxuICAgIC8vMy4gYXBwZW5kIGZvcm0gdG8gRE9NXG4gICAgLy80LiBuZWVkIHRvIGJ1aWxkIG91dCBhIFBPU1QgbWV0aG9kIGluIFwiZm9vZGNvbGxlY3Rpb24gXCIgbW9kdWxlXG4gICAgLy8gNS4gd2hlbiBldmVudCBoYXBwZW5zLFxuICAgIC8vY2FwdHVyZSB1c2VyIGlucHV0XG4gICAgLy8gY3JlYXRlIG9iamVjdCAobmFtZS9leHBpcmF0aW9uL3R5cGUpXG4gICAgLy9wb3N0IE5ldyBGb29kIHRvIERPTVxuICAgIC8vdGhpcyBjdXJyZW50IG1vZHVsZSB3aWxsIHJlcXVpZXJlIGltcG9ydCAnZm9vZGNvbGxlY3Rpb25cIiBtb2R1bGVcbiAgICAvLyByZWZlciB0byBsZWdvIGV4ZXJjaXNlXG5cbiovXG5cblxuICAgICAgICBjb25zdCBjb250YWN0Rm9ybSA9ICB7XG5cbiAgICAgICAgICAgICAgICBhcHBlbmRDb250YWN0Rm9ybSAoKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGb3JtID1cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UGxlYXNlIGVudGVyIHlvdXIgY29udGFjdCBpbmZvcm1hdGlvbjogPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb250YWN0X19uYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fbmFtZVwiIG5hbWU9XCJjb250YWN0X19uYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiIG5hbWU9XCJjb250YWN0X19waG9uZV9fbnVtYmVyXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9fYWRkcmVzc1wiPkFkZHJlc3M6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX2FkZHJlc3NcIiBuYW1lPVwiY29udGFjdF9fYWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjb250YWN0X19zYXZlXCI+U2F2ZSBOZXcgQ29udGFjdCB0byBMaXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgIGBcblxuICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhY3RGb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWZvcm0tZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgY29udGFjdEZvcm1EaXYuaW5uZXJIVE1MID0gaW5wdXRGb3JtO1xuXG4gICAgICAgICAgICAgICAgICAvLyBIb3cgdG8gY3JlYXRlIGEgYnV0dG9uLCBhZGQgYSBjbGFzcyBhbmQgYXR0YWNoIGFuIGV2ZW50IGxpc3RlbmVyIHVzaW5nIGNyZWF0ZUVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAvLyBsZXQgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgIC8vIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWNsYXNzXCIpO1xuICAgICAgICAgICAgICAgICAgLy8gbmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVGb3JtU3VibWlzc2lvbik7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Rm9ybTsiLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBjb250YWN0Rm9ybS5qc1xuICAgIFB1cnBvc2U6IEEgQ29udGFjdExpc3QgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYWxsIGNvbnRhY3RzLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudC5cblxuICAgIC8vIDEuIGdldCBhbGwgZm9vZHNcbiAgICAvLyAyLiBsb29wIG92ZXIgYXJyYXkgW11cbiAgICAvLyAzLiB1c2UgY29udGFjdEJ1aWxkZXIgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXlcbiAgICAvLyA0LiBhcHBlbmQgdG8gRE9NXG4qL1xuXG4vLyBpbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG4vLyBpbXBvcnQgY29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb25cIlxuXG5cblxuY29uc3QgY29udGFjdExpc3QgPSBbXTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0TGlzdCIsIi8qXG4gICAgQXV0aG9yOiBHcmFkeVxuICAgIE5hbWU6IG1haW4uanNcbiAgICBQdXJwb3NlOiBJbiBtYWluLmpzLCBpbXBvcnQgdGhlIENvbnRhY3RMaXN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RGb3JtIGNvbXBvbmVudC5cbiovXG5cbi8vSW4gbWFpbi5qcywgaW1wb3J0IHRoZSBDb250YWN0TGlzdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Rm9ybSBjb21wb25lbnQuXG5pbXBvcnQgY29udGFjdEZvcm0gZnJvbSBcIi4vY29udGFjdEZvcm1cIlxuaW1wb3J0IGNvbnRhY3RMaXN0IGZyb20gXCIuL2NvbnRhY3RMaXN0XCJcblxuXG5jb25zb2xlLmxvZyhcIkhlbGxvIG1haW4uanNcIilcblxuY29udGFjdEZvcm0uYXBwZW5kQ29udGFjdEZvcm0oKTtcbi8vIGNvbnRhY3RMaXN0KCk7Il19
