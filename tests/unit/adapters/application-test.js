import { module, test } from 'qunit';

import { setupTest } from 'frontend-onboarding-template/tests/helpers';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:application');

    assert.ok(adapter, 'adapter exists');
  });
});
