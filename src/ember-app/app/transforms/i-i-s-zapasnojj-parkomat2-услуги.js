import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугиEnum from '../enums/i-i-s-zapasnojj-parkomat2-услуги';

export default FlexberryEnum.extend({
  enum: УслугиEnum,
  sourceType: 'IIS.Zapasnojj_parkomat2.Услуги'
});
