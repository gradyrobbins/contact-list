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
        let entryHtml = _contact.default.cardBuilder(entryItem);

        console.log(entryHtml);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0E7QUFBQzs7Ozs7QUFJYTtBQUVkLE1BQU0sT0FBTyxHQUFHO0FBQ1osRUFBQSxXQUFXLENBQUUsNEJBQUYsRUFBaUM7QUFDekMsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbEI7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosR0FBMEIsNEJBQTRCLENBQUMsSUFBdkQ7QUFFQSxRQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQXpCO0FBQ0EsSUFBQSxrQkFBa0IsQ0FBQyxXQUFuQixHQUFpQyw0QkFBNEIsQ0FBQyxXQUE5RDtBQUVBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQXJCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixHQUE2Qiw0QkFBNEIsQ0FBQyxPQUExRDtBQUVBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsV0FBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGtCQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsY0FBeEI7QUFFQSxXQUFPLFdBQVA7QUFDRjs7QUFsQlcsQ0FBaEI7ZUFxQmUsTzs7Ozs7Ozs7Ozs7QUNsQ2Y7Ozs7O0FBTUE7QUFFQSxNQUFNLGlCQUFpQixHQUFHO0FBQ2xCLEVBQUEsY0FBYyxHQUFHO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLG1DQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVDLEdBSmlCOztBQUtsQixFQUFBLFdBQVcsQ0FBRSxhQUFGLEVBQWlCO0FBQ3pCLFdBQU8sS0FBSyxDQUFDLG1DQUFELEVBQXNDO0FBQ2pELE1BQUEsTUFBTSxFQUFFLE1BRHlDO0FBRWpELE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGd0M7QUFLakQsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxhQUFmO0FBTDJDLEtBQXRDLENBQVo7QUFPRjs7QUFiaUIsQ0FBMUI7ZUFnQmUsaUI7Ozs7Ozs7Ozs7O0FDUmY7Ozs7QUFqQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLE1BQU0sV0FBVyxHQUFJO0FBRWIsRUFBQSxpQkFBaUIsR0FBSTtBQUNqQixRQUFJLFNBQVMsR0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFERDtBQW9CQSxRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLFNBQTNCLENBdEJpQixDQXdCakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0FoQ1k7O0FBa0NiLEVBQUEsb0JBQW9CLEdBQUk7QUFDcEIsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsSUFBQSxjQUFjLENBQUMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsTUFBTTtBQUMvQztBQUVBLFVBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixFQUF5QyxLQUFwRDtBQUNBLFVBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHlCQUF2QixFQUFrRCxLQUEvRDtBQUNBLFVBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixFQUE0QyxLQUExRDtBQUVBLFlBQU0sYUFBYSxHQUFHO0FBQ2xCLFFBQUEsSUFBSSxFQUFFLElBRFk7QUFFbEIsUUFBQSxXQUFXLEVBQUUsTUFGSztBQUdsQixRQUFBLE9BQU8sRUFBRTtBQUhTLE9BQXRCLENBUCtDLENBWS9DOztBQUdBLGlDQUFrQixXQUFsQixDQUE4QixhQUE5Qjs7QUFDQSxNQUFBLFFBQVEsQ0FBQyxNQUFULENBQWdCLElBQWhCO0FBQ0MsS0FqQkQ7QUFrQkg7O0FBdERZLENBQXJCO2VBeURlLFc7Ozs7Ozs7Ozs7O0FDakVmOztBQUNBOzs7O0FBWkE7Ozs7Ozs7Ozs7QUFjQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLGNBQWMsR0FBRTtBQUNaO0FBQ0wsK0JBQWtCLGNBQWxCLEdBQ0UsSUFERixDQUNPLFVBQVUsSUFBSTtBQUNsQixVQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUF6QjtBQUNFLE1BQUEsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsU0FBUyxJQUFJO0FBQ2hDLFlBQUksU0FBUyxHQUFHLGlCQUFRLFdBQVIsQ0FBb0IsU0FBcEIsQ0FBaEI7O0FBQ0EsUUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVo7QUFDQSxRQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFNBQS9CO0FBQ0QsT0FKQztBQUtBLFVBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixDQUFwQjtBQUNBLE1BQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsa0JBQTFCO0FBQ0gsS0FWRjtBQVdBOztBQWRpQixDQUFwQjtlQWlCZSxXOzs7Ozs7QUN4QmY7O0FBQ0E7Ozs7QUFSQTs7Ozs7QUFNQTtBQUtBLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjs7QUFFQSxxQkFBWSxpQkFBWjs7QUFDQSxxQkFBWSxvQkFBWjs7QUFFQSxxQkFBWSxjQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbkF1dGhvcjogR3JhZHlcbk5hbWU6IGNvbnRhY3QuanNcblB1cnBvc2U6IEEgQ29udGFjdCBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhIHBlcnNvbidzIG5hbWUsIHBob25lIG51bWJlciwgYW5kIGFkZHJlc3MuXG5UaGlzIG1vZHVsZSBidWlsZHMgb3V0IGEgc2luZ2xlIG9iamVjdCwgcmVwcmVzZW50aW5nIG9uZSBwZXJzb24ncyBjb250YWN0IGluZm8sIHRvIGJlIGFwcGVuZGVkIHRvIERPTSBpbiBhbm90aGVyIG1vZHVsZVxuKi9cblxuLy8gd2hhdCB0aGUgRE9NIGJ1aWxkIG91dCB3aWxsIGxvb2sgbGlrZVxuey8qIDxhcnRpY2xlPlxuICAgIDxoMz4ke25hbWV9PC9oMz5cbiAgICA8cD4ke3Bob25lTnVtYmVyfTwvcD5cbiAgICA8cD4ke2FkZHJlc3N9PC9wPlxuPC9hcnRpY2xlPiAqL31cblxuY29uc3QgY29udGFjdCA9IHtcbiAgICBjYXJkQnVpbGRlciAoc2luZ2xlT2JqZWN0ZnJvbURhdGFiYXNlSlNPTikgIHtcbiAgICAgICBsZXQgY29udGFjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcblxuICAgICAgIGxldCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IHNpbmdsZU9iamVjdGZyb21EYXRhYmFzZUpTT04ubmFtZTtcblxuICAgICAgIGxldCBjb250YWN0UGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICBjb250YWN0UGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBzaW5nbGVPYmplY3Rmcm9tRGF0YWJhc2VKU09OLnBob25lTnVtYmVyO1xuXG4gICAgICAgbGV0IGNvbnRhY3RBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgY29udGFjdEFkZHJlc3MudGV4dENvbnRlbnQgPSBzaW5nbGVPYmplY3Rmcm9tRGF0YWJhc2VKU09OLmFkZHJlc3M7XG5cbiAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XG4gICAgICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcbiAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG5cbiAgICAgICByZXR1cm4gY29udGFjdENhcmRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG5cbiIsIlxuLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdENvbGxlY3Rpb24uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIGNvbnRhY3RzIGZyb20gc3RvcmFnZSwgYW5kIHNhdmVzIG5ldyBvbmVzLiBFYWNoIG5ldyBjb250YWN0IHNob3VsZCBoYXZlIGFuIGF1dG8tZ2VuZXJhdGVkIGlkZW50aWZpZXIuXG4qL1xuXG4vL0FQSSBlbmRwb2ludDogIGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFxuXG5jb25zdCBjb250YWN0Q29sbGVjdGlvbiA9IHtcbiAgICAgICAgZ2V0Q29udGFjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVDb250YWN0IChjb250YWN0VG9TYXZlKSB7XG4gICAgICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0TGlzdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdFRvU2F2ZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG59O1xuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbGxlY3Rpb24iLCIvKlxuICAgIEF1dGhvcjogR3JhZHlcbiAgICBOYW1lOiBjb250YWN0Rm9ybS5qc1xuICAgIFB1cnBvc2U6IEEgQ29udGFjdEZvcm0gY29tcG9uZW50IHRoYXQsIHdoZW4gZmlsbGVkIG91dCBhbmQgYSBzdWJtaXQgYnV0dG9uIGlzIHByZXNzZWQsIGFkZHMgYSBuZXcgY29udGFjdCB0byBzdG9yYWdlLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5cbiAgICAvLzEuIGJ1aWxkaW5nIEhUTUwgZm9ybVxuICAgIC8vMi4gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbiBvZiBzdWJtaXQgZm9ybVxuICAgIC8vMy4gYXBwZW5kIGZvcm0gdG8gRE9NXG4gICAgLy80LiBuZWVkIHRvIGJ1aWxkIG91dCBhIFBPU1QgbWV0aG9kIGluIFwiZm9vZGNvbGxlY3Rpb24gXCIgbW9kdWxlXG4gICAgLy8gNS4gd2hlbiBldmVudCBoYXBwZW5zLFxuICAgIC8vY2FwdHVyZSB1c2VyIGlucHV0XG4gICAgLy8gY3JlYXRlIG9iamVjdCAobmFtZS9leHBpcmF0aW9uL3R5cGUpXG4gICAgLy9wb3N0IE5ldyBGb29kIHRvIERPTVxuICAgIC8vdGhpcyBjdXJyZW50IG1vZHVsZSB3aWxsIHJlcXVpZXJlIGltcG9ydCAnZm9vZGNvbGxlY3Rpb25cIiBtb2R1bGVcbiAgICAvLyByZWZlciB0byBsZWdvIGV4ZXJjaXNlXG5cbiovXG5pbXBvcnQgY29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb25cIlxuXG5jb25zdCBjb250YWN0Rm9ybSA9ICB7XG5cbiAgICAgICAgYXBwZW5kQ29udGFjdEZvcm0gKCkge1xuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8aDI+UGxlYXNlIGVudGVyIHlvdXIgY29udGFjdCBpbmZvcm1hdGlvbjogPC9oMj5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX25hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fbmFtZVwiIG5hbWU9XCJjb250YWN0X19uYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfX3Bob25lX19udW1iZXJcIiBuYW1lPVwiY29udGFjdF9fcGhvbmVfX251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfX2FkZHJlc3NcIj5BZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdF9fYWRkcmVzc1wiIG5hbWU9XCJjb250YWN0X19hZGRyZXNzXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY29udGFjdF9fc2F2ZVwiPlNhdmUgTmV3IENvbnRhY3QgdG8gTGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICBsZXQgY29udGFjdEZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtZm9ybS1kaXZcIik7XG4gICAgICAgICAgICBjb250YWN0Rm9ybURpdi5pbm5lckhUTUwgPSBpbnB1dEZvcm07XG5cbiAgICAgICAgICAgIC8vIEhvdyB0byBjcmVhdGUgYSBidXR0b24sIGFkZCBhIGNsYXNzIGFuZCBhdHRhY2ggYW4gZXZlbnQgbGlzdGVuZXIgdXNpbmcgY3JlYXRlRWxlbWVudC5cbiAgICAgICAgICAgIC8vIGxldCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgLy8gbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY2xhc3NcIik7XG4gICAgICAgICAgICAvLyBuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUZvcm1TdWJtaXNzaW9uKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0J1dHRvbik7XG4gICAgICAgICAgICAvLyBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24gKCkge1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RTYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0X19zYXZlXCIpO1xuICAgICAgICAgICAgY29udGFjdFNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmxvb29vb29wXCIpO1xuXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9fbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RfX3Bob25lX19udW1iZXJcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9fYWRkcmVzc1wiKS52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgY29udGFjdE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhY3RPYmplY3QpO1xuXG5cbiAgICAgICAgICAgIGNvbnRhY3RDb2xsZWN0aW9uLnNhdmVDb250YWN0KGNvbnRhY3RPYmplY3QpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEZvcm07IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdEZvcm0uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RMaXN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGFsbCBjb250YWN0cy4gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5cbiAgICAvLyAxLiBnZXQgYWxsIGNvbnRhY3RzOyBpbXBvcnRlZCBmcm9tIGNvbnRhY3RDb2xsZWN0aW9uIG1vZHVsZVxuICAgIC8vIDIuIGxvb3Agb3ZlciBhcnJheSBbXVxuICAgIC8vIDMuIHVzZSBjYXJkQnVpbGRlciBpbXBvcnRlZCBtZXRob2QgZnJvbSAuL2NvbnRhY3QgbW9kdWxlIChjb250YWN0LmNhcmRidWlsZGVyKSBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheVxuICAgIC8vIDQuIGFwcGVuZCB0byBET01cbiovXG5cbmltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0XCJcblxuY29uc3QgY29udGFjdExpc3QgPSB7XG4gICAgY29udGFjdERpc3BsYXkoKXtcbiAgICAgICAgLy8gV2hlcmUgdGhlIGRhdGEgaXMgcHJvY2Vzc2VkIGZyb20gY29sbGVjdEVudHJpZXNcbiAgIGNvbnRhY3RDb2xsZWN0aW9uLmdldENvbnRhY3RMaXN0KClcbiAgICAudGhlbihhbGxFbnRyaWVzID0+IHtcbiAgICAgIGxldCBjb250YWN0RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGFsbEVudHJpZXMuZm9yRWFjaChlbnRyeUl0ZW0gPT4ge1xuICAgICAgICBsZXQgZW50cnlIdG1sID0gY29udGFjdC5jYXJkQnVpbGRlcihlbnRyeUl0ZW0pXG4gICAgICAgIGNvbnNvbGUubG9nKGVudHJ5SHRtbClcbiAgICAgICAgY29udGFjdERvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGVudHJ5SHRtbClcbiAgICAgIH0pXG4gICAgICAgIGxldCBvdXRwdXRDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKVxuICAgICAgICBvdXRwdXRDb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3REb2NGcmFnbWVudClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogbWFpbi5qc1xuICAgIFB1cnBvc2U6IEluIG1haW4uanMsIGltcG9ydCB0aGUgQ29udGFjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdEZvcm0gY29tcG9uZW50LlxuKi9cblxuLy9JbiBtYWluLmpzLCBpbXBvcnQgdGhlIENvbnRhY3RMaXN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RGb3JtIGNvbXBvbmVudC5cbmltcG9ydCBjb250YWN0Rm9ybSBmcm9tIFwiLi9jb250YWN0Rm9ybVwiXG5pbXBvcnQgY29udGFjdExpc3QgZnJvbSBcIi4vY29udGFjdExpc3RcIlxuXG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gbWFpbi5qc1wiKVxuXG5jb250YWN0Rm9ybS5hcHBlbmRDb250YWN0Rm9ybSgpO1xuY29udGFjdEZvcm0uaGFuZGxlRm9ybVN1Ym1pc3Npb24oKTtcblxuY29udGFjdExpc3QuY29udGFjdERpc3BsYXkoKTtcbiJdfQ==
