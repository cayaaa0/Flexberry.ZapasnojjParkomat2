import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISZapasnojj_parkomat2АвтомобильLForm from './forms/i-i-s-zapasnojj-parkomat2-автомобиль-l';
import IISZapasnojj_parkomat2ВодительLForm from './forms/i-i-s-zapasnojj-parkomat2-водитель-l';
import IISZapasnojj_parkomat2ПаркМестоLForm from './forms/i-i-s-zapasnojj-parkomat2-парк-место-l';
import IISZapasnojj_parkomat2ПаркоматLForm from './forms/i-i-s-zapasnojj-parkomat2-паркомат-l';
import IISZapasnojj_parkomat2ТерминалLForm from './forms/i-i-s-zapasnojj-parkomat2-терминал-l';
import IISZapasnojj_parkomat2УслугаLForm from './forms/i-i-s-zapasnojj-parkomat2-услуга-l';
import IISZapasnojj_parkomat2АвтомобильEForm from './forms/i-i-s-zapasnojj-parkomat2-автомобиль-e';
import IISZapasnojj_parkomat2ВодительEForm from './forms/i-i-s-zapasnojj-parkomat2-водитель-e';
import IISZapasnojj_parkomat2ПаркМестоEForm from './forms/i-i-s-zapasnojj-parkomat2-парк-место-e';
import IISZapasnojj_parkomat2ПаркоматEForm from './forms/i-i-s-zapasnojj-parkomat2-паркомат-e';
import IISZapasnojj_parkomat2ТерминалEForm from './forms/i-i-s-zapasnojj-parkomat2-терминал-e';
import IISZapasnojj_parkomat2УслугаEForm from './forms/i-i-s-zapasnojj-parkomat2-услуга-e';
import IISZapasnojj_parkomat2АвтомобильModel from './models/i-i-s-zapasnojj-parkomat2-автомобиль';
import IISZapasnojj_parkomat2ВодительModel from './models/i-i-s-zapasnojj-parkomat2-водитель';
import IISZapasnojj_parkomat2ЗаписьModel from './models/i-i-s-zapasnojj-parkomat2-запись';
import IISZapasnojj_parkomat2ПаркМестоModel from './models/i-i-s-zapasnojj-parkomat2-парк-место';
import IISZapasnojj_parkomat2ПаркоматModel from './models/i-i-s-zapasnojj-parkomat2-паркомат';
import IISZapasnojj_parkomat2ТерминалModel from './models/i-i-s-zapasnojj-parkomat2-терминал';
import IISZapasnojj_parkomat2УслугаModel from './models/i-i-s-zapasnojj-parkomat2-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-zapasnojj-parkomat2-автомобиль': IISZapasnojj_parkomat2АвтомобильModel,
    'i-i-s-zapasnojj-parkomat2-водитель': IISZapasnojj_parkomat2ВодительModel,
    'i-i-s-zapasnojj-parkomat2-запись': IISZapasnojj_parkomat2ЗаписьModel,
    'i-i-s-zapasnojj-parkomat2-парк-место': IISZapasnojj_parkomat2ПаркМестоModel,
    'i-i-s-zapasnojj-parkomat2-паркомат': IISZapasnojj_parkomat2ПаркоматModel,
    'i-i-s-zapasnojj-parkomat2-терминал': IISZapasnojj_parkomat2ТерминалModel,
    'i-i-s-zapasnojj-parkomat2-услуга': IISZapasnojj_parkomat2УслугаModel
  },

  'application-name': 'Zapasnojj_parkomat2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Zapasnojj_parkomat2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zapasnojj_parkomat2',
          title: 'Zapasnojj_parkomat2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        услуги: {
          caption: 'Услуги',
          title: 'Услуги',
          'i-i-s-zapasnojj-parkomat2-услуга-l': {
            caption: 'Услуга',
            title: ''
          }
        },
        паркомат: {
          caption: 'Паркомат',
          title: 'Паркомат',
          'i-i-s-zapasnojj-parkomat2-терминал-l': {
            caption: 'Терминал',
            title: 'Терминал'
          },
          'i-i-s-zapasnojj-parkomat2-парк-место-l': {
            caption: 'Парковочное место',
            title: 'Парк место'
          },
          'i-i-s-zapasnojj-parkomat2-паркомат-l': {
            caption: 'Паркомат',
            title: 'Паркомат'
          }
        },
        водитель: {
          caption: 'Водитель',
          title: 'Водитель',
          'i-i-s-zapasnojj-parkomat2-водитель-l': {
            caption: 'Водитель',
            title: 'Водитель'
          },
          'i-i-s-zapasnojj-parkomat2-автомобиль-l': {
            caption: 'Автомобиль',
            title: 'Автомобиль'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-zapasnojj-parkomat2-автомобиль-l': IISZapasnojj_parkomat2АвтомобильLForm,
    'i-i-s-zapasnojj-parkomat2-водитель-l': IISZapasnojj_parkomat2ВодительLForm,
    'i-i-s-zapasnojj-parkomat2-парк-место-l': IISZapasnojj_parkomat2ПаркМестоLForm,
    'i-i-s-zapasnojj-parkomat2-паркомат-l': IISZapasnojj_parkomat2ПаркоматLForm,
    'i-i-s-zapasnojj-parkomat2-терминал-l': IISZapasnojj_parkomat2ТерминалLForm,
    'i-i-s-zapasnojj-parkomat2-услуга-l': IISZapasnojj_parkomat2УслугаLForm,
    'i-i-s-zapasnojj-parkomat2-автомобиль-e': IISZapasnojj_parkomat2АвтомобильEForm,
    'i-i-s-zapasnojj-parkomat2-водитель-e': IISZapasnojj_parkomat2ВодительEForm,
    'i-i-s-zapasnojj-parkomat2-парк-место-e': IISZapasnojj_parkomat2ПаркМестоEForm,
    'i-i-s-zapasnojj-parkomat2-паркомат-e': IISZapasnojj_parkomat2ПаркоматEForm,
    'i-i-s-zapasnojj-parkomat2-терминал-e': IISZapasnojj_parkomat2ТерминалEForm,
    'i-i-s-zapasnojj-parkomat2-услуга-e': IISZapasnojj_parkomat2УслугаEForm
  },

});

export default translations;
