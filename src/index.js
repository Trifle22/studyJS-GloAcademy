
import countTimer from './modules/countTimer';
import scrollToAnchors from './modules/scrollToAnchors';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import replacePhoto from './modules/replacePhoto';
import calcValidate from './modules/calcValidate';
import formsTextValidate from './modules/formsTextValidate';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';



  //count timer 
  countTimer('12 march 2021');

  // scrollToAnchors
  scrollToAnchors();

  toggleMenu();

  //popup 
  togglePopup();

  //tabs 
  tabs();


  //slider
  slider();

  //replace photo
  replacePhoto();

  //calc validate
  calcValidate();

  //formsTextValidate
  formsTextValidate();

  //calculator
  calculator(100);

  //send-ajax-form
  sendForm();