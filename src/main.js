import { formRef, listRef } from './refs';
import { saveData, getData } from './api';
import { createMarkup } from './markup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

formRef.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target));

  data.id = Date.now();
  data.checked = false;

  const dataArr = getData();
  // const inStorage
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
  listRef.insertAdjacentHTML('beforeend', markup);
}
init();
