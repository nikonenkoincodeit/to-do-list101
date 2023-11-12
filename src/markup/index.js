function createMarkup(arr = []) {
  return arr
    .map(
      ({ id, message, checked }) => `<li class="item ${
        checked ? 'checked' : ''
      } " data-id="${id}">
<p class="text">${message}</p>
<button type="button" class="button">x</button>
</li>`
    )
    .join('');
}

export { createMarkup };
