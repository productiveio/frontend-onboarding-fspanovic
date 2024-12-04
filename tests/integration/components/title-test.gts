import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import Title from 'frontend-onboarding-template/components/title';

module('Integration | Component | title', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct title', async function (assert) {
    await render(<template>
      <Title data-test-title>
        Welcome
      </Title>
    </template>);

    assert.strictEqual(
      find('[data-test-title]')?.textContent?.trim(),
      'Welcome'
    );
  });
});
