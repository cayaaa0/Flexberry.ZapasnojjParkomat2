import {
  defineNamespace,
  defineProjections,
  Model as ВодительMixin
} from '../mixins/regenerated/models/i-i-s-zapasnojj-parkomat2-водитель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВодительMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
