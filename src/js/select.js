const selected = function () {
  const month = document.querySelector('.month');
  const year = document.querySelector('.year');
  const iconMonth = document.querySelector('.select__icon-month');
  const iconYear = document.querySelector('.select__icon-year');
  const selectItemMonth = document.querySelectorAll('.select__item-month');
  const selectItemYear = document.querySelectorAll('.select__item-year');

  selectItemYear.forEach(function (item) {
    item.addEventListener('click', function () {
      let text = this.innerText;
      let currentText = this.closest('.select').querySelector('.select__current-year');
      currentText.innerText = text;
      year.classList.remove('is-active');
      iconYear.classList.remove('icon-active');
    });
  });

  selectItemMonth.forEach(function (item) {
    item.addEventListener('click', function () {
      let text = this.innerText;
      let currentText = this.closest('.select').querySelector('.select__current-month');
      currentText.innerText = text;
      month.classList.remove('is-active');
      iconMonth.classList.remove('icon-active');
    });
  });

  iconMonth.addEventListener('click', function () {
    month.classList.toggle('is-active');
    iconMonth.classList.toggle('icon-active');
  });

  iconYear.addEventListener('click', function () {
    year.classList.toggle('is-active');
    iconYear.classList.toggle('icon-active');
  });
};

export default selected;
