import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class IntlMessage {
  key;
  options;

  constructor(key, options = {}) {
    this.key = key;
    this.options = options;
  }
}

class FormData {
  @tracked email;
  @tracked password;

  get emailValidation() {
    const { email } = this;

    if (!email) {
      return new IntlMessage('validations.email.valueMissing');
    }

    if (!email.includes('@')) {
      return new IntlMessage('validations.email.badInput', {
        value: this.email,
      });
    }

    return null;
  }

  get passwordValidation() {
    const { password } = this;
    const requiredLength = 8;

    if (!password) {
      return new IntlMessage('validations.password.valueMissing');
    }

    if (password.length < requiredLength) {
      return new IntlMessage('validations.password.tooShort', {
        min: requiredLength,
      });
    }

    return null;
  }
}

export default class FormPlaygroundComponent extends Component {
  formData = new FormData();

  @action
  submit() {
    window.alert('Form submitted');
  }
}
