import theme from '#/theme';

export function checkValueLengthValid(value: string) {
  if (value?.length > 6) {
    return true;
  }
  return false;
}

export function checkContainDigit(value: string) {
  return /\d/.test(value);
}

export function checkContainAllTestCase(value: string) {
  const upper = /[A-Z]/.test(value),
    lower = /[a-z]/.test(value);

  return upper && lower;
}

export function checkContainSpecialCharacter(value: string) {
  return /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value);
}

export function checkPassword(value: string) {
  let passwordPoint = 0;

  if (checkValueLengthValid(value)) {
    passwordPoint++;
    if (checkContainDigit(value)) {
      passwordPoint++;
    }
    if (checkContainAllTestCase(value)) {
      passwordPoint++;
    }
    if (checkContainSpecialCharacter(value)) {
      passwordPoint++;
    }
  } else {
    passwordPoint = 0;
  }

  switch (passwordPoint) {
    case 1:
      return {
        color: theme.colorRed,
        passwordText: 'Weak',
        progress: 0.25,
      };
    case 2:
      return {
        color: theme.colorYellow,
        passwordText: 'Fair',
        progress: 0.5,
      };
    case 3:
      return {
        color: theme.colorPurple,
        passwordText: 'Good',
        progress: 0.75,
      };
    case 4:
      return {
        color: theme.colorGreen,
        passwordText: 'Strong',
        progress: 1,
      };
    default:
      return {
        color: theme.colorWhiteHalf,
        passwordText: 'Too Short',
        progress: 0,
      };
  }
}
