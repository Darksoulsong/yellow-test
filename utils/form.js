export const fieldHasError = (fieldName, touched, errors) => {
  if (touched[fieldName]) {
    return !!errors[fieldName];
  }

  return false;
};

export const formatEmailContat = ({
  name,
  email,
  company,
  telephone,
  product,
  comment,
}) =>
  `
    Nome: ${name}\n
    Email: ${email}\n
    Empresa: ${company}\n
    Telefone: ${telephone}\n
    Produto que atende sua necessidade: ${product}\n
    Sobre o que precisa: ${comment}
  `;
