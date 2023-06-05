export const emailValidation = {
  required: 'Enter correct email.',
};

export const passwordValidation = {
  required: 'Enter correct password.',
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'An password may only contain English characters.';
    }
    if (value.length < 7) {
      return 'Your password must be longer than 7 characters.';
    }
    return true;
  },
};
