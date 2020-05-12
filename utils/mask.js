function parse(maskPattern, original) {
  let index = -1;
  let accumulator = '';
  let maskedValue = '';

  return maskPattern.split('').reduce((newValue, currentCharacter) => {
    const value = newValue;

    if (index >= original.length) {
      return value;
    }

    if (currentCharacter === '#') {
      index += 1;
      maskedValue = value;

      if (original[index]) {
        maskedValue = value + accumulator + original[index];
      }
      accumulator = '';

      return maskedValue;
    }

    accumulator += currentCharacter;

    return value;
  }, '');
}

function removeAllNonDigitCharacters(v = '') {
  return v.replace(/\D/g, '');
}

const patterns = {
  cpf: '###.###.###-##',
  cnpj: '##.###.###/###-##',
  cellphone: '(##) # ####-####',
  phone: '(##) ####-####',
  date: '##/##/####',
  cep: '#####-###',
};

export function mask(input = '', maskType) {
  const pattern = maskType ? patterns[maskType.toLowerCase()] : '';

  if (!input || !pattern) {
    return '';
  }

  return parse(pattern, String(removeAllNonDigitCharacters(input)));
}
