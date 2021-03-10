const formsTextValidate = function() {
  const inputsName = document.querySelectorAll('input[placeholder="Ваше имя"]');
  const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
  const inputsEmail = document.querySelectorAll('input[type="email"]');
  const inputsPhone = document.querySelectorAll('input[placeholder="Номер телефона"]');
  const regText = /[^а-яё\s{1}\-]*/gi;

  const customValidator = val => {
    val = val.replace(/\s+/g, ' ');
    val = val.replace(/-+/g, '-');
    val = val.replace(/^[ |\-+]/g, '');
    val = val.replace(/[ |\-+]$/g, '');

    return val;
  };

  inputsName.forEach(item => {
    item.addEventListener('blur', e => {
      const target = e.target;
      let val = target.value;
      val = val.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
      val = customValidator(val);
      const arr = val.split(' ');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
        }
      }
      val = arr.join(' ');
      item.value = customValidator(val);
    });
  });

  inputMessage.addEventListener('blur', e => {
    const target = e.target;
    let val = target.value;
    val = val.replace(/[^а-яА-ЯёЁ0-9\s\-.,]+/g, '');
    val = customValidator(val);
    target.value = val;
  });
  
  inputsEmail.forEach(item => {
    item.addEventListener('blur', e => {
      const target = e.target;
      let val = target.value;
      val = val.replace(/[^_@.!~*'A_Za-z\-\d]/g, '');
      val = customValidator(val);
      if (val.includes('@') && val.trim() !== '') {
        target.value = val;
      } else {
        alert('Введите корректный адрес электронной почты');
        target.value = '';
      }
    });
  });

  inputsPhone.forEach(item => {
    maskPhone(`#${item.id}`);
    item.addEventListener('blur', e => {
      const target = e.target;
      let val = target.value;
      val = val.replace(/^\+[^\d()\-]/g, '');
      val = customValidator(val);
      val = '+' + val;
      if (val.length === 18) {
        target.value = val;
      } else {
        alert('Введите корректный номер телефона длиной 11 символов');
        target.value = '';
      }
    });
  });
};

export default formsTextValidate;