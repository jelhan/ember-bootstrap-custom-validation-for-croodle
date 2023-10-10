import BaseBsFormElement from 'ember-bootstrap/components/bs-form/element';

export default class BsFormElement extends BaseBsFormElement {
  '__ember-bootstrap_subclass' = true;

  get errors() {
    // native validation state doesn't integrate with Ember's autotracking, so we need to invalidate our `errors` getter explicitly when
    // `this.value` changes by consuming it here.
    // eslint-disable-next-line no-unused-vars
    const { model, property } = this.args;
    return model[`${property}Validation`];
  }

  get hasValidator() {
    return true;
  }
}
