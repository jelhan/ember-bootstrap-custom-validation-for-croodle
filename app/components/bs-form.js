import BaseBsForm from 'ember-bootstrap/components/bs-form';

export default class BsForm extends BaseBsForm {
  '__ember-bootstrap_subclass' = true;

  get hasValidator() {
    return true;
  }

  async validate(model) {
    const isInvalid = Object.keys(model).any((potentialProperty) => {
      const potentialValidation = model[`${potentialProperty}Validation`];
      const isValidation = Array.isArray(potentialValidation);

      if (!isValidation) {
        return false;
      }

      return potentialValidation.length > 0;
    });

    if (isInvalid) {
      throw new Error();
    }
  }
}
