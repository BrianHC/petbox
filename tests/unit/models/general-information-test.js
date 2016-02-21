import { moduleForModel, test } from 'ember-qunit';

moduleForModel('general-information', 'Unit | Model | general information', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
