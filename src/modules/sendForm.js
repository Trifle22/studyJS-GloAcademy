const sendForm = () => {

  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const form3 = document.getElementById('form3');
  const forms = document.querySelectorAll('form');
  const preLoader = document.querySelector('.loader-container');
  const svgLoaderContainer = document.querySelector('.svg-loader-container');
  const checkMarkClassName = 'animate';
  const checkMarkLoader = document.querySelector('.check-mark-loader');
  const errorAlert = document.querySelector('.error-alert');
  const errorAlertClose = document.querySelector('.error-alert-close');


  const successfulExecution = (target) => {
    preLoader.style.display = 'none';
    svgLoaderContainer.style.display = 'block';
    checkMarkLoader.classList.add(checkMarkClassName);
    setTimeout(function(){      
      checkMarkLoader.classList.remove(checkMarkClassName);
      svgLoaderContainer.style.display = 'none';
      if (target.id === 'form3') {
        document.querySelector('.popup').style.display = 'none';
      }
    }, 1700);

  }
  const badExecution = (error, target) => {
    console.error(error);
    preLoader.style.display = 'none';
    errorAlert.classList.add('error-alert-active');
    errorAlertClose.addEventListener('click', () => {
      errorAlert.classList.remove('error-alert-active');
    })
    if (target.id === 'form3') {
      document.querySelector('.popup').style.display = 'none';
    }
  }

  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      const target = event.target;
      event.preventDefault();
      const formElements = [...target.elements].filter(item => item.tagName.toLowerCase() !== 'button');
      const formData = new FormData(target);
      let body = {};
      formData.forEach((value, key) => {
        body[key] = value;
      });
      if (formElements[0].value !== '' &&
      formElements[1].value !== '' &&
      formElements[2].value !== '') {
        postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200')
          }
          formElements.forEach(item => {
            item.value = '';
          })
          successfulExecution(target);
        })
        .catch(error => {
          badExecution(error, target);
        });
      } else {
        event.preventDefault();
        alert('Введите корректные данные во все поля формы');
      }
      })
  })


  const postData = (body) => {
    preLoader.style.display = 'block';
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
}
export default sendForm;