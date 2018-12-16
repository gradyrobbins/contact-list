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
// ====>
// what the DOM build out will look like
{
  /* <article>
     <h3>${name}</h3>
     <p>${phoneNumber}</p>
     <p>${address}</p>
  </article> */
}
const contact = {// cardBuilder (singleObject) => {
  //    let contactCard = document.createElement("article");
  //    let contactName = document.createElement("h3");
  //    contactName.textContent = singleObject.name;
  //    let contactPhoneNumber = document.createElement("p");
  //    contactPhoneNumber.textContent = singleObject.phoneNumber;
  //    let contactAddress = document.createElement("p");
  //    contactAddress.textContent = singleObject.address;
  //    contactCard.appendChild(contactName);
  //    contactCard.appendChild(contactPhoneNumber);
  //    contactCard.appendChild(contactAddress);
  //    return contactCard
  // }
};
var _default = contact;
exports.default = _default;

},{}],2:[function(require,module,exports){
/*
    Author: Grady
    Name: contactCollection.js
    Purpose: A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
*/
//getAllFoods() fetch to API
// post New Food
// const foodCollection = {
//     getAllFoods() => {
//         return fetch("http://localhost:8088/fridge")
//         .then(response => response.json())
//     }
// }
//API endpoint:  http://localhost:8088/contactList
// export default contactCollection
"use strict";

},{}],3:[function(require,module,exports){
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
const contactForm = function (name, phoneNumber, address) {
  console.log("Hello contactForm.js");
  return {
    name,
    phoneNumber,
    address,

    toString() {
      return ` ${this.name} ${this.phoneNumber} ${this.address}`;
    },

    drive(destination) {
      return `You drive ${this} to ${destination}`;
    }

  };
};

var _default = contactForm;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contact = _interopRequireDefault(require("./contact"));

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Grady
    Name: contactForm.js
    Purpose: A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
    
    // 1. get all foods
    // 2. loop over array []
    // 3. use contactBuilder for each item in the array
    // 4. append to DOM
*/
const contactList = [];
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
(0, _contactForm.default)();
(0, _contactList.default)();

},{"./contactForm":3,"./contactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7OztBQVFBO0FBRUE7QUFDQTtBQUFDOzs7OztBQUlhO0FBRWQsTUFBTSxPQUFPLEdBQUcsQ0FDWjtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWxCWSxDQUFoQjtlQXFCZSxPOzs7O0FDckNmOzs7OztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUVBOzs7Ozs7Ozs7OztBQ3RCQTs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQTtBQUNBO0FBQ1I7QUFDQTtBQUlBLE1BQU0sV0FBVyxHQUFHLFVBQVMsSUFBVCxFQUFlLFdBQWYsRUFBNEIsT0FBNUIsRUFBcUM7QUFDckQsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHNCQUFaO0FBQ0EsU0FBTztBQUNMLElBQUEsSUFESztBQUVMLElBQUEsV0FGSztBQUdMLElBQUEsT0FISzs7QUFLTCxJQUFBLFFBQVEsR0FBSTtBQUNSLGFBQVEsSUFBRyxLQUFLLElBQUssSUFBRyxLQUFLLFdBQVksSUFBRyxLQUFLLE9BQVEsRUFBekQ7QUFDSCxLQVBJOztBQVNMLElBQUEsS0FBSyxDQUFFLFdBQUYsRUFBZTtBQUNoQixhQUFRLGFBQVksSUFBSyxPQUFNLFdBQVksRUFBM0M7QUFDSDs7QUFYSSxHQUFQO0FBYUQsQ0FmSDs7ZUFpQmUsVzs7Ozs7Ozs7Ozs7QUN6QmY7O0FBQ0E7Ozs7QUFaQTs7Ozs7Ozs7OztBQWdCQSxNQUFNLFdBQVcsR0FBRyxFQUFwQjtlQU1lLFc7Ozs7OztBQ2ZmOztBQUNBOzs7O0FBUkE7Ozs7O0FBTUE7QUFLQSxPQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFFQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbkF1dGhvcjogR3JhZHlcbk5hbWU6IGNvbnRhY3QuanNcblB1cnBvc2U6IEEgQ29udGFjdCBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhIHBlcnNvbidzIG5hbWUsIHBob25lIG51bWJlciwgYW5kIGFkZHJlc3MuXG5UaGlzIG1vZHVsZSBidWlsZHMgb3V0IGEgc2luZ2xlIG9iamVjdCwgcmVwcmVzZW50aW5nIG9uZSBwZXJzb24ncyBjb250YWN0IGluZm8sIHRvIGJlIGFwcGVuZGVkIHRvIERPTSBpbiBhbm90aGVyIG1vZHVsZVxuKi9cblxuXG4vLyA9PT09PlxuXG4vLyB3aGF0IHRoZSBET00gYnVpbGQgb3V0IHdpbGwgbG9vayBsaWtlXG57LyogPGFydGljbGU+XG4gICAgPGgzPiR7bmFtZX08L2gzPlxuICAgIDxwPiR7cGhvbmVOdW1iZXJ9PC9wPlxuICAgIDxwPiR7YWRkcmVzc308L3A+XG48L2FydGljbGU+ICovfVxuXG5jb25zdCBjb250YWN0ID0ge1xuICAgIC8vIGNhcmRCdWlsZGVyIChzaW5nbGVPYmplY3QpID0+IHtcbiAgICAvLyAgICBsZXQgY29udGFjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcblxuICAgIC8vICAgIGxldCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAvLyAgICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IHNpbmdsZU9iamVjdC5uYW1lO1xuXG4gICAgLy8gICAgbGV0IGNvbnRhY3RQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vICAgIGNvbnRhY3RQaG9uZU51bWJlci50ZXh0Q29udGVudCA9IHNpbmdsZU9iamVjdC5waG9uZU51bWJlcjtcblxuICAgIC8vICAgIGxldCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vICAgIGNvbnRhY3RBZGRyZXNzLnRleHRDb250ZW50ID0gc2luZ2xlT2JqZWN0LmFkZHJlc3M7XG5cbiAgICAvLyAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XG4gICAgLy8gICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcbiAgICAvLyAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG5cbiAgICAvLyAgICByZXR1cm4gY29udGFjdENhcmRcbiAgICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG5cbiIsIlxuLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdENvbGxlY3Rpb24uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIGNvbnRhY3RzIGZyb20gc3RvcmFnZSwgYW5kIHNhdmVzIG5ldyBvbmVzLiBFYWNoIG5ldyBjb250YWN0IHNob3VsZCBoYXZlIGFuIGF1dG8tZ2VuZXJhdGVkIGlkZW50aWZpZXIuXG4qL1xuXG4vL2dldEFsbEZvb2RzKCkgZmV0Y2ggdG8gQVBJXG4vLyBwb3N0IE5ldyBGb29kXG5cbi8vIGNvbnN0IGZvb2RDb2xsZWN0aW9uID0ge1xuLy8gICAgIGdldEFsbEZvb2RzKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZnJpZGdlXCIpXG4vLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICB9XG5cblxuXG4vLyB9XG5cbi8vQVBJIGVuZHBvaW50OiAgaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RMaXN0XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb2xsZWN0aW9uIiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdEZvcm0uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RGb3JtIGNvbXBvbmVudCB0aGF0LCB3aGVuIGZpbGxlZCBvdXQgYW5kIGEgc3VibWl0IGJ1dHRvbiBpcyBwcmVzc2VkLCBhZGRzIGEgbmV3IGNvbnRhY3QgdG8gc3RvcmFnZS4gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50LlxuKi9cblxuLy8xLiBidWlsZGluZyBIVE1MIGZvcm1cbi8vMi4gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbiBvZiBzdWJtaXQgZm9ybVxuLy8zLiBhcHBlbmQgZm9ybSB0byBET01cbi8vNC4gbmVlZCB0byBidWlsZCBvdXQgYSBQT1NUIG1ldGhvZCBpbiBcImZvb2Rjb2xsZWN0aW9uIFwiIG1vZHVsZVxuLy8gNS4gd2hlbiBldmVudCBoYXBwZW5zLFxuICAgICAgICAvL2NhcHR1cmUgdXNlciBpbnB1dFxuICAgICAgICAvLyBjcmVhdGUgb2JqZWN0IChuYW1lL2V4cGlyYXRpb24vdHlwZSlcbiAgICAgICAgLy9wb3N0IE5ldyBGb29kIHRvIERPTVxuLy90aGlzIGN1cnJlbnQgbW9kdWxlIHdpbGwgcmVxdWllcmUgaW1wb3J0ICdmb29kY29sbGVjdGlvblwiIG1vZHVsZVxuLy8gcmVmZXIgdG8gbGVnbyBleGVyY2lzZVxuXG5cblxuY29uc3QgY29udGFjdEZvcm0gPSBmdW5jdGlvbihuYW1lLCBwaG9uZU51bWJlciwgYWRkcmVzcykge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gY29udGFjdEZvcm0uanNcIilcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHBob25lTnVtYmVyLFxuICAgICAgYWRkcmVzcyxcbiAgICBcbiAgICAgIHRvU3RyaW5nICgpIHtcbiAgICAgICAgICByZXR1cm4gYCAke3RoaXMubmFtZX0gJHt0aGlzLnBob25lTnVtYmVyfSAke3RoaXMuYWRkcmVzc31gXG4gICAgICB9LFxuICAgIFxuICAgICAgZHJpdmUgKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGBZb3UgZHJpdmUgJHt0aGlzfSB0byAke2Rlc3RpbmF0aW9ufWBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEZvcm07IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogY29udGFjdEZvcm0uanNcbiAgICBQdXJwb3NlOiBBIENvbnRhY3RMaXN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGFsbCBjb250YWN0cy4gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG4gICAgXG4gICAgLy8gMS4gZ2V0IGFsbCBmb29kc1xuICAgIC8vIDIuIGxvb3Agb3ZlciBhcnJheSBbXVxuICAgIC8vIDMuIHVzZSBjb250YWN0QnVpbGRlciBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheVxuICAgIC8vIDQuIGFwcGVuZCB0byBET01cbiovXG5cbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXG5cblxuXG5jb25zdCBjb250YWN0TGlzdCA9IFtdO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0IiwiLypcbiAgICBBdXRob3I6IEdyYWR5XG4gICAgTmFtZTogbWFpbi5qc1xuICAgIFB1cnBvc2U6IEluIG1haW4uanMsIGltcG9ydCB0aGUgQ29udGFjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdEZvcm0gY29tcG9uZW50LlxuKi9cblxuLy9JbiBtYWluLmpzLCBpbXBvcnQgdGhlIENvbnRhY3RMaXN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RGb3JtIGNvbXBvbmVudC5cbmltcG9ydCBjb250YWN0Rm9ybSBmcm9tIFwiLi9jb250YWN0Rm9ybVwiXG5pbXBvcnQgY29udGFjdExpc3QgZnJvbSBcIi4vY29udGFjdExpc3RcIlxuXG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gbWFpbi5qc1wiKVxuXG5jb250YWN0Rm9ybSgpO1xuY29udGFjdExpc3QoKTsiXX0=
