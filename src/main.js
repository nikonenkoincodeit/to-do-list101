import { userDataEl } from "./refs";
import { saveForm } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

function onSubmit(event) {
  event.preventDefault();

  const userInfo = event.target.elements.message.value.trim();
  console.log(userInfo);
  if (!userInfo) return;
  saveForm(userInfo);
}
userDataEl.addEventListener("submit", onSubmit);
