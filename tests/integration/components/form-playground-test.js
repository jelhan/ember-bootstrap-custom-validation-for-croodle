import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-bootstrap-custom-validation-for-croodle/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form-playground', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FormPlayground />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FormPlayground>
        template block text
      </FormPlayground>
    `);

    assert.dom().hasText('template block text');
  });
});
