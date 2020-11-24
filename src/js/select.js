const selected = function () {
  const month = document.querySelector('.month');
  const year = document.querySelector('.year');
  const iconMonth = document.querySelector('.select__icon-month');
  const iconYear = document.querySelector('.select__icon-year');

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
