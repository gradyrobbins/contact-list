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
const contactForm = {
  // return
  appendContactForm() {
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
                  </article>`;
    let displayContainer = document.querySelector("#contact-form-div");
    displayContainer.innerHTML = inputForm; // How to create a button, add a class and attach an event listener using createElement.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RGb3JtLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0TGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU0sV0FBVyxHQUFJO0FBQ2pCO0FBQ0ksRUFBQSxpQkFBaUIsR0FBSTtBQUNuQixRQUFJLFNBQVMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBakI7QUFrQkEsUUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLEdBQTZCLFNBQTdCLENBcEJtQixDQXNCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBOUJZLENBQXJCO2VBaUNPLFc7Ozs7Ozs7Ozs7O0FDcERmOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUlBLE1BQU0sV0FBVyxHQUFHLEVBQXBCO2VBTWUsVzs7Ozs7O0FDZmY7O0FBQ0E7Ozs7QUFSQTs7Ozs7QUFNQTtBQUtBLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjs7QUFFQSxxQkFBWSxpQkFBWixHLENBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBjb250YWN0Rm9ybS5qc1xuICAgIFB1cnBvc2U6IEEgQ29udGFjdEZvcm0gY29tcG9uZW50IHRoYXQsIHdoZW4gZmlsbGVkIG91dCBhbmQgYSBzdWJtaXQgYnV0dG9uIGlzIHByZXNzZWQsIGFkZHMgYSBuZXcgY29udGFjdCB0byBzdG9yYWdlLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG4qL1xuXG4vLzEuIGJ1aWxkaW5nIEhUTUwgZm9ybVxuLy8yLiBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uIG9mIHN1Ym1pdCBmb3JtXG4vLzMuIGFwcGVuZCBmb3JtIHRvIERPTVxuLy80LiBuZWVkIHRvIGJ1aWxkIG91dCBhIFBPU1QgbWV0aG9kIGluIFwiZm9vZGNvbGxlY3Rpb24gXCIgbW9kdWxlXG4vLyA1LiB3aGVuIGV2ZW50IGhhcHBlbnMsXG4gICAgICAgIC8vY2FwdHVyZSB1c2VyIGlucHV0XG4gICAgICAgIC8vIGNyZWF0ZSBvYmplY3QgKG5hbWUvZXhwaXJhdGlvbi90eXBlKVxuICAgICAgICAvL3Bvc3QgTmV3IEZvb2QgdG8gRE9NXG4gICAgICAgIC8vdGhpcyBjdXJyZW50IG1vZHVsZSB3aWxsIHJlcXVpZXJlIGltcG9ydCAnZm9vZGNvbGxlY3Rpb25cIiBtb2R1bGVcbiAgICAgICAgLy8gcmVmZXIgdG8gbGVnbyBleGVyY2lzZVxuXG5cblxuICAgICAgICBjb25zdCBjb250YWN0Rm9ybSA9ICB7XG4gICAgICAgICAgICAvLyByZXR1cm5cbiAgICAgICAgICAgICAgICBhcHBlbmRDb250YWN0Rm9ybSAoKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGb3JtID0gYFxuICAgICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIDxoND5QbGVhc2UgZW50ZXIgeW91ciBjb250YWN0IGluZm9ybWF0aW9uOiA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsZWdvX19uYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsZWdvX19uYW1lXCIgbmFtZT1cImxlZ29fX25hbWVcIiB0eXBlPVwidGV4dFwiIGF1dG9mb2N1cyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsZWdvX19zaGFwZVwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsZWdvX19zaGFwZVwiIG5hbWU9XCJsZWdvX19zaGFwZVwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxlZ29fX2NvbG9yXCI+QWRkcmVzczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsZWdvX19jb2xvclwiIG5hbWU9XCJsZWdvX19jb2xvclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gbGVnb19fc2F2ZVwiPlNhdmUgTmV3IENvbnRhY3QgdG8gTGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPmBcblxuICAgICAgICAgICAgICAgICAgbGV0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtZm9ybS1kaXZcIik7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGlucHV0Rm9ybTtcblxuICAgICAgICAgICAgICAgICAgLy8gSG93IHRvIGNyZWF0ZSBhIGJ1dHRvbiwgYWRkIGEgY2xhc3MgYW5kIGF0dGFjaCBhbiBldmVudCBsaXN0ZW5lciB1c2luZyBjcmVhdGVFbGVtZW50LlxuICAgICAgICAgICAgICAgICAgLy8gbGV0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAvLyBuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjbGFzc1wiKTtcbiAgICAgICAgICAgICAgICAgIC8vIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlRm9ybVN1Ym1pc3Npb24pO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEZvcm07IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdEZvcm0uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RMaXN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGFsbCBjb250YWN0cy4gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5cbiAgICAvLyAxLiBnZXQgYWxsIGZvb2RzXG4gICAgLy8gMi4gbG9vcCBvdmVyIGFycmF5IFtdXG4gICAgLy8gMy4gdXNlIGNvbnRhY3RCdWlsZGVyIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAgLy8gNC4gYXBwZW5kIHRvIERPTVxuKi9cblxuLy8gaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuLy8gaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uXCJcblxuXG5cbmNvbnN0IGNvbnRhY3RMaXN0ID0gW107XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExpc3QiLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBtYWluLmpzXG4gICAgUHVycG9zZTogSW4gbWFpbi5qcywgaW1wb3J0IHRoZSBDb250YWN0TGlzdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Rm9ybSBjb21wb25lbnQuXG4qL1xuXG4vL0luIG1haW4uanMsIGltcG9ydCB0aGUgQ29udGFjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdEZvcm0gY29tcG9uZW50LlxuaW1wb3J0IGNvbnRhY3RGb3JtIGZyb20gXCIuL2NvbnRhY3RGb3JtXCJcbmltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9jb250YWN0TGlzdFwiXG5cblxuY29uc29sZS5sb2coXCJIZWxsbyBtYWluLmpzXCIpXG5cbmNvbnRhY3RGb3JtLmFwcGVuZENvbnRhY3RGb3JtKCk7XG4vLyBjb250YWN0TGlzdCgpOyJdfQ==
