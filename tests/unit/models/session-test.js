import { module, test } from 'qunit';

import { setupTest } from 'frontend-onboarding-template/tests/helpers';

module('Unit | Model | session', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('session', {});

    assert.ok(model, 'model exists');
  });
});
