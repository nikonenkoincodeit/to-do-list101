import { formRef, listRef } from "./refs";
import { saveData, getData } from "./api";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formRef.addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));

    data.id = Date.now();
    data.checked = false;

    const dataArr = getData();
    dataArr.push(data);
    saveData(dataArr);
    const markup = createMarkup([data]);
    addMarkup(markup);
    event.target.reset();
}

function init() {
    const dataArr = getData();
    if (!dataArr.length) {
        return;
    }
    const markup = createMarkup(dataArr);
    addMarkup(markup);
}

function addMarkup(markup) {
    listRef.insertAdjacentHTML("beforeend", markup);
}
init();
listRef.addEventListener("click", btnClick);

function btnClick(e) {
    if (!e.target.classList.contains("button")) return;
    const {parantRef, varRef} = getBtnInfo(e);

    // const parantRef = e.target.closest(".item");
    // const varRef = parantRef.dataset.id;
    parantRef.remove();
    const dataArr = getData().filter(({ id }) => String(id) !== varRef);
    saveData(dataArr);
}

listRef.addEventListener("click", handleChecked);

function handleChecked(e) {
    if (!e.target.classList.contains("text")) {
        return;
    }
    const {parantRef, varRef} = getBtnInfo(e);

    // const parantRef = event.target.closest(".item");
    // const varRef = parantRef.dataset.id;
    
    const dataArr = getData().map(obj => {
      if(String(obj.id) === varRef) {
        obj.checked = !obj.checked
      }
      return obj;
    })

    saveData(dataArr);

    parantRef.classList.toggle("checked");
}

function getBtnInfo(e) {
  const parantRef = e.target.closest(".item");
    const varRef = parantRef.dataset.id;
    return {parantRef, varRef}
}
