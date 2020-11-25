const validation = function () {
  const inputs = document.querySelectorAll('input[data-rule]');

  for (let input of inputs) {
    // на input вешаем событие по потери фокуса выполнить проверку
    input.addEventListener('blur', function () {
      let rule = this.dataset.rule;
      // содержимое input
      let value = this.value;
      let check;
      // let num;

      switch (rule) {
        case 'number':
          check = /^[0-9]{4,4}$/.test(value);
          break;
        case 'number-three':
          check = /^[0-9]{3,3}$/.test(value);
          break;
        case 'text':
          check = /^[a-zA-Z][a-zA-Z-_' '\.]{3,20}$/.test(value);
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
