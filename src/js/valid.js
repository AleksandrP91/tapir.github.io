const validation = function () {
  const inputs = document.querySelectorAll('input[data-rule]');

  for (let input of inputs) {
    // на input вешаем событие по потери фокуса выполнить проверку
    input.addEventListener('blur', function () {
      let rule = this.dataset.rule;
      // содержимое input
      let value = this.value;
      let check;

      switch (rule) {
        case 'number':
          let length = value.length;
          let from = +this.dataset.from;
          let to = +this.dataset.to;
          check = length >= from && length <= to;
          break;
        case 'text':
          check = /^[a-zA-Z][a-zA-Z-_\.]{3,20}$/.test(value);
          break;
      }
      this.classList.remove('invalid-form');
      this.classList.remove('valid-form');
      if (check) {
        this.classList.add('valid-form');
      } else {
        this.classList.add('invalid-form');
      }
    });
  }
};

export default validation;
