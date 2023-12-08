import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('string'),
  наименование: DS.attr('i-i-s-zapasnojj-parkomat2-услуги'),
  номерУсл: DS.attr('number')
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-услуга.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерУсл: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-услуга.validations.номерУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-zapasnojj-parkomat2-услуга', {
    номерУсл: attr('Номер услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-zapasnojj-parkomat2-услуга', {
    номерУсл: attr('Номер услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 })
  });
};
