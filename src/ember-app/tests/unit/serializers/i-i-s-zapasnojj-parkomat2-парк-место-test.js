import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zapasnojj-parkomat2-парк-место', 'Unit | Serializer | i-i-s-zapasnojj-parkomat2-парк-место', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-zapasnojj-parkomat2-парк-место',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-zapasnojj-parkomat2-оплата',
    'transform:i-i-s-zapasnojj-parkomat2-статусы',
    'transform:i-i-s-zapasnojj-parkomat2-услуги',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
