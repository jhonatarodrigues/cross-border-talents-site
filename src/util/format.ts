/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-template */
/* eslint-disable operator-assignment */

export const htmlToText = (html: string) => {
  const text = encodeURI(html);

  return text;
};
export const htmlURIDecode = (html: string) => {
  const text = decodeURI(html);

  return text;
};

export function formatPhone(phone: string): string {
  if (!phone) {
    return '';
  }

  let r = phone.replace(/\D/g, '');
  r = r.replace(/^0/, '');

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, '($1) $2-$3');
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else if (phone.trim() !== '') {
    r = r.replace(/^(\d*)/, '($1');
  }
  return r;
}

export const removeFormat = (text: string): string => {
  if (!text) {
    return '';
  }

  return text.replace(/\D/g, '');
};

export const removeCurrencyFormat = (text: string): string => {
  if (!text) {
    return '';
  }
  const sizeInt = text.replace(/\D/g, '').length - 2;
  const int = text.replace(/\D/g, '').substr(0, sizeInt);
  const cents = '.' + text.replace(/\D/g, '').substr(-2);
  return int + cents;
};

export const formatCPF = (valor: string): string => {
  if (!valor) {
    return '';
  }

  return valor
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const formatCNPJ = (valor: string): string => {
  let val = valor;
  if (!val) {
    return '';
  }

  if (val.length > 18) {
    return val.substr(0, 18);
  }

  val = val.replace(/\D/g, '');

  return val.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
};

export const formatCPFCNPJ = (text: string): string => {
  if (!text) {
    return '';
  }

  let textFormated = removeFormat(text);

  textFormated = textFormated && textFormated.substr(0, 14);

  if (textFormated && textFormated.length <= 11) {
    textFormated = formatCPF(textFormated);
  } else if (textFormated) {
    textFormated = formatCNPJ(textFormated);
  }

  return textFormated || '';
};

export const formatCurrency = (val: string): string => {
  if (!val) {
    return '';
  }
  if (val.length === 1 && isNaN(parseFloat(val))) {
    return '';
  }
  let valor = val;
  valor = valor.replace(/\D/g, '');
  valor = (parseInt(valor, 10) / 100).toFixed(2) + '';
  valor = valor.replace('.', ',');
  valor = valor.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
  valor = valor.replace(/(\d)(\d{3}),/g, '$1.$2,');
  return 'R$' + valor;
};

export const formatNumeric = (val: string): string => {
  if (!val) {
    return '';
  }
  if (val.length === 1 && isNaN(parseFloat(val))) {
    return '';
  }
  let valor = val;
  valor = valor.replace(/\D/g, '');
  return valor;
};

export function formatCep(val: string): string {
  if (val && val.length > 9) {
    return val.substr(0, 9);
  }

  let valReturn = val;
  valReturn = valReturn.replace(/\D/g, '');
  valReturn = valReturn.replace(/^(\d{5})(\d)/, '$1-$2');

  return valReturn;
}
