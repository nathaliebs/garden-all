const FormatMoney = (value) => {
  if (value) {
    return `R$ ${(value / 100).toFixed(2).replace('.', ',')}`;
  }

  return value;
};

export default FormatMoney;
