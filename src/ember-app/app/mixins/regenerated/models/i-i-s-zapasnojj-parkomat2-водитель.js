import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерВод: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  номерВод: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-водитель.validations.номерВод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-водитель.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-водитель.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВодительE', 'i-i-s-zapasnojj-parkomat2-водитель', {
    номерВод: attr('Номер водителя', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });

  modelClass.defineProjection('ВодительL', 'i-i-s-zapasnojj-parkomat2-водитель', {
    номерВод: attr('Номер водителя', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });
};
