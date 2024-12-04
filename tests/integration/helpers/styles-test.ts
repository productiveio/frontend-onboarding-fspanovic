import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

class MockStyledComponent {
  styles = {
    red: 'module-style-red',
    blue: 'module-style-blue',
    green: 'module-style-green',
  };
}

module('Integration | Helper | styles', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    this.set('context', new MockStyledComponent());

    await render<{ context: MockStyledComponent }>(
      hbs`<span class="container">{{styles this.context "red" "blue"}}</span>`
    );

    assert.strictEqual(
      find('.container')?.textContent?.trim(),
      'module-style-red module-style-blue'
    );
  });

  test('it works with conditional styles', async function (assert) {
    this.set('context', new MockStyledComponent());

    await render<{ context: MockStyledComponent }>(
      hbs`<span class="container">{{styles this.context "red" blue=false green=true}}</span>`
    );

    assert.strictEqual(
      find('.container')?.textContent?.trim(),
      'module-style-red module-style-green'
    );
  });
});
