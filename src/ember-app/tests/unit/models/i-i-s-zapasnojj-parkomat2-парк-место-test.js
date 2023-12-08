import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zapasnojj-parkomat2-парк-место', 'Unit | Model | i-i-s-zapasnojj-parkomat2-парк-место', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-zapasnojj-parkomat2-автомобиль',
    'model:i-i-s-zapasnojj-parkomat2-водитель',
    'model:i-i-s-zapasnojj-parkomat2-запись',
    'model:i-i-s-zapasnojj-parkomat2-парк-место',
    'model:i-i-s-zapasnojj-parkomat2-паркомат',
    'model:i-i-s-zapasnojj-parkomat2-терминал',
    'model:i-i-s-zapasnojj-parkomat2-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
