import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders correct brand text', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      <Navbar class="navbar" />
    `);

    assert.strictEqual(
      find('.navbar .navbar-brand')?.textContent?.trim(),
      'Navbar'
    );
  });
});
