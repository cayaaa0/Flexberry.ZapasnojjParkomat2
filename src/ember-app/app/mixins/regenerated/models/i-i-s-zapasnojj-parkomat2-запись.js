import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  стоимость: DS.attr('decimal'),
  автомобиль: DS.belongsTo('i-i-s-zapasnojj-parkomat2-автомобиль', { inverse: null, async: false }),
  паркМесто: DS.belongsTo('i-i-s-zapasnojj-parkomat2-парк-место', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-zapasnojj-parkomat2-услуга', { inverse: null, async: false }),
  паркомат: DS.belongsTo('i-i-s-zapasnojj-parkomat2-паркомат', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  стоимость: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-запись.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  автомобиль: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-запись.validations.автомобиль.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  паркМесто: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-запись.validations.паркМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-запись.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  паркомат: {
    descriptionKey: 'models.i-i-s-zapasnojj-parkomat2-запись.validations.паркомат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-zapasnojj-parkomat2-запись', {
    стоимость: attr('Стоимость', { index: 0 }),
    автомобиль: belongsTo('i-i-s-zapasnojj-parkomat2-автомобиль', 'Автомобиль', {
      госНомер: attr('Гос номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'госНомер' }),
    паркМесто: belongsTo('i-i-s-zapasnojj-parkomat2-парк-место', 'Парковочное место', {
      номер: attr('Номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номер' }),
    услуга: belongsTo('i-i-s-zapasnojj-parkomat2-услуга', 'Услуга', {
      длительность: attr('Длительность', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'длительность' })
  });
};
