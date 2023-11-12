import { formRef } from "./refs";
import { saveData, getData } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formRef.addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));

    data.id = Date.now();
    data.checked = false;

    const dataArr = getData();
    // const inStorage
    dataArr.push(data);
    saveData(dataArr);

    event.target.reset();
}
