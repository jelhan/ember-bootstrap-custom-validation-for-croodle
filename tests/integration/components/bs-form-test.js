import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-bootstrap-custom-validation-for-croodle/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BsForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BsForm>
        template block text
      </BsForm>
    `);

    assert.dom().hasText('template block text');
  });
});
