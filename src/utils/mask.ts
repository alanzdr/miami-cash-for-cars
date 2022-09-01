export type InputMaskType = 'tel' | 'email'

export const maskEmail = (oldValue: string) => {
  return oldValue.replace(/ /, '');
};

// (702) 703-5115
export const maskPhone = (oldValue: string) => {
  const values = oldValue.replace(/\D/g, '');

  if (values.length <= 3) {
    const x = values.match(/(\d{0,3})/);
    return !x ? '' : `${x[1]}`;
  } else if (values.length < 10) {
    const x = values.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    return !x ? '' : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
  } else {
    const x = values.match(/(\d{0,3})(\d{0,3})(\d{0,12})/);
    return !x ? '' : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
  }
};

export const maskValue = (type: InputMaskType, value: string) => {
  switch (type) {
    case 'tel': return maskPhone(value);
    case 'email': return maskEmail(value);
    default: return value;
  }
};
