import { module, test } from 'qunit';

import { setupTest } from 'frontend-onboarding-template/tests/helpers';

module('Unit | Model | people', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('people', {});

    assert.ok(model, 'model exists');
  });
});
