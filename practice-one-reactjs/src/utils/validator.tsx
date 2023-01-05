export const pokemonNameValidate = (name: string) => {
  if (!name) {
    return 'Email is required';
  }
  return '';
};

export const pokemonNumberValidate = (code: string) => {
  if (!code) {
    return 'Pokemon Number is required';
  }
  return '';
};
