import { userDataEl, listEl } from "./refs";
import { saveForm } from "./api";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

function onSubmit(event) {
  event.preventDefault();

  const userInfo = event.target.elements.message.value.trim();
  console.log(userInfo);
  if (!userInfo) return;
  const newObject = createObject(userInfo);
  saveForm(newObject);
  const markup = createMarkup([newObject]);
  insertMarkup(markup);
  console.log(markup);
}
userDataEl.addEventListener("submit", onSubmit);

function createObject(message) {
  const object = {
    id: Date.now(),
    message,
    checked: false,
  };
  return object;
}
function insertMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}
