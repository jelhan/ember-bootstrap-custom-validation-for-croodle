import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class FormData {
  @tracked email;
  @tracked password;

  get emailValidation() {
    const { email } = this;

    if (!email) {
      return ['Please provide an email.'];
    }

    if (!email.includes('@')) {
      return ['Please provide a valid email.'];
    }

    return [];
  }

  get passwordValidation() {
    return [];
  }
}

export default class FormPlaygroundComponent extends Component {
  formData = new FormData();

  @action
  submit() {
    window.alert('Form submitted');
  }
}
