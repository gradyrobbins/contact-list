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
  },

  handleFormSubmission() {
    // return console.log("clicked the save button")
    let contactSaveBtn = document.querySelector(".contact__save"); // console.log(contactSaveBtn);

    contactSaveBtn.addEventListener("click", () => console.log("bloooooop")); // contactList();
  }

};
var _default = contactForm;
exports.default = _default;

},{}],2:[function(require,module,exports){
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

},{"./contactForm":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RGb3JtLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CUSxNQUFNLFdBQVcsR0FBSTtBQUViLEVBQUEsaUJBQWlCLEdBQUk7QUFDbkIsUUFBSSxTQUFTLEdBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUREO0FBb0JBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQUFyQjtBQUNBLElBQUEsY0FBYyxDQUFDLFNBQWYsR0FBMkIsU0FBM0IsQ0F0Qm1CLENBd0JuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQWhDWTs7QUFrQ2IsRUFBQSxvQkFBb0IsR0FBSTtBQUNwQjtBQUNBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUFyQixDQUZvQixDQUdwQjs7QUFDQSxJQUFBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxNQUFNLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixDQUEvQyxFQUpvQixDQUtwQjtBQUNIOztBQXhDWSxDQUFyQjtlQTJDTyxXOzs7Ozs7QUN2RGY7Ozs7QUFQQTs7Ozs7QUFNQTtBQUVBO0FBR0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaOztBQUVBLHFCQUFZLGlCQUFaOztBQUNBLHFCQUFZLG9CQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdEZvcm0uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RGb3JtIGNvbXBvbmVudCB0aGF0LCB3aGVuIGZpbGxlZCBvdXQgYW5kIGEgc3VibWl0IGJ1dHRvbiBpcyBwcmVzc2VkLCBhZGRzIGEgbmV3IGNvbnRhY3QgdG8gc3RvcmFnZS4gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50LlxuXG4gICAgLy8xLiBidWlsZGluZyBIVE1MIGZvcm1cbiAgICAvLzIuIGF0dGFjaCBldmVudCBsaXN0ZW5lciB0byBidXR0b24gb2Ygc3VibWl0IGZvcm1cbiAgICAvLzMuIGFwcGVuZCBmb3JtIHRvIERPTVxuICAgIC8vNC4gbmVlZCB0byBidWlsZCBvdXQgYSBQT1NUIG1ldGhvZCBpbiBcImZvb2Rjb2xsZWN0aW9uIFwiIG1vZHVsZVxuICAgIC8vIDUuIHdoZW4gZXZlbnQgaGFwcGVucyxcbiAgICAvL2NhcHR1cmUgdXNlciBpbnB1dFxuICAgIC8vIGNyZWF0ZSBvYmplY3QgKG5hbWUvZXhwaXJhdGlvbi90eXBlKVxuICAgIC8vcG9zdCBOZXcgRm9vZCB0byBET01cbiAgICAvL3RoaXMgY3VycmVudCBtb2R1bGUgd2lsbCByZXF1aWVyZSBpbXBvcnQgJ2Zvb2Rjb2xsZWN0aW9uXCIgbW9kdWxlXG4gICAgLy8gcmVmZXIgdG8gbGVnbyBleGVyY2lzZVxuXG4qL1xuXG5cbiAgICAgICAgY29uc3QgY29udGFjdEZvcm0gPSAge1xuXG4gICAgICAgICAgICAgICAgYXBwZW5kQ29udGFjdEZvcm0gKCkge1xuICAgICAgICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBlbnRlciB5b3VyIGNvbnRhY3QgaW5mb3JtYXRpb246IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9fbmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX25hbWVcIiBuYW1lPVwiY29udGFjdF9fbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX3Bob25lX19udW1iZXJcIj5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX3Bob25lX19udW1iZXJcIiBuYW1lPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX2FkZHJlc3NcIj5BZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb250YWN0X19hZGRyZXNzXCIgbmFtZT1cImNvbnRhY3RfX2FkZHJlc3NcIiB0eXBlPVwidGV4dFwiIGF1dG9mb2N1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY29udGFjdF9fc2F2ZVwiPlNhdmUgTmV3IENvbnRhY3QgdG8gTGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICBgXG5cbiAgICAgICAgICAgICAgICAgIGxldCBjb250YWN0Rm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1mb3JtLWRpdlwiKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRhY3RGb3JtRGl2LmlubmVySFRNTCA9IGlucHV0Rm9ybTtcblxuICAgICAgICAgICAgICAgICAgLy8gSG93IHRvIGNyZWF0ZSBhIGJ1dHRvbiwgYWRkIGEgY2xhc3MgYW5kIGF0dGFjaCBhbiBldmVudCBsaXN0ZW5lciB1c2luZyBjcmVhdGVFbGVtZW50LlxuICAgICAgICAgICAgICAgICAgLy8gbGV0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAvLyBuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjbGFzc1wiKTtcbiAgICAgICAgICAgICAgICAgIC8vIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlRm9ybVN1Ym1pc3Npb24pO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gY29uc29sZS5sb2coXCJjbGlja2VkIHRoZSBzYXZlIGJ1dHRvblwiKVxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFjdFNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RfX3NhdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhY3RTYXZlQnRuKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwiYmxvb29vb29wXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGFjdExpc3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEZvcm07IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogbWFpbi5qc1xuICAgIFB1cnBvc2U6IEluIG1haW4uanMsIGltcG9ydCB0aGUgQ29udGFjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdEZvcm0gY29tcG9uZW50LlxuKi9cblxuLy9JbiBtYWluLmpzLCBpbXBvcnQgdGhlIENvbnRhY3RMaXN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RGb3JtIGNvbXBvbmVudC5cbmltcG9ydCBjb250YWN0Rm9ybSBmcm9tIFwiLi9jb250YWN0Rm9ybVwiXG4vLyBpbXBvcnQgY29udGFjdExpc3QgZnJvbSBcIi4vY29udGFjdExpc3RcIlxuXG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gbWFpbi5qc1wiKVxuXG5jb250YWN0Rm9ybS5hcHBlbmRDb250YWN0Rm9ybSgpO1xuY29udGFjdEZvcm0uaGFuZGxlRm9ybVN1Ym1pc3Npb24oKTtcbiJdfQ==
