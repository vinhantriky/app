import {describe, test, expect, jest} from '@jest/globals';

import theme from '#/theme';

import {
  checkContainAllTestCase,
  checkContainDigit,
  checkContainSpecialCharacter,
  checkPassword,
  checkValueLengthValid,
} from '../src/utils/password';

jest.mock('#/theme', () => ({
  colorRed: 'red',
  colorYellow: 'yellow',
  colorPurple: 'purple',
  colorGreen: 'green',
  colorWhiteHalf: 'whiteHalf',
}));

describe('Password validation functions', () => {
  describe('checkValueLengthValid', () => {
    test('returns true for length greater than 6', () => {
      expect(checkValueLengthValid('abcdefg')).toBe(true);
    });

    test('returns false for length of 6 or fewer', () => {
      expect(checkValueLengthValid('abcde')).toBe(false);
    });

    test('returns false for empty string', () => {
      expect(checkValueLengthValid('')).toBe(false);
    });
  });

  describe('checkContainDigit', () => {
    test('returns true if value contains a digit', () => {
      expect(checkContainDigit('abc1def')).toBe(true);
    });

    test('returns false if value does not contain a digit', () => {
      expect(checkContainDigit('abcdef')).toBe(false);
    });

    test('returns false for empty string', () => {
      expect(checkContainDigit('')).toBe(false);
    });
  });

  describe('checkContainAllTestCase', () => {
    test('returns true if value contains both upper and lower case letters', () => {
      expect(checkContainAllTestCase('AbcDef')).toBe(true);
    });

    test('returns false if value contains only lower case letters', () => {
      expect(checkContainAllTestCase('abcdef')).toBe(false);
    });

    test('returns false if value contains only upper case letters', () => {
      expect(checkContainAllTestCase('ABCDEF')).toBe(false);
    });

    test('returns false for empty string', () => {
      expect(checkContainAllTestCase('')).toBe(false);
    });
  });

  describe('checkContainSpecialCharacter', () => {
    test('returns true if value contains special character', () => {
      expect(checkContainSpecialCharacter('abc@def')).toBe(true);
    });

    test('returns false if value does not contain special character', () => {
      expect(checkContainSpecialCharacter('abcdef')).toBe(false);
    });

    test('returns false for empty string', () => {
      expect(checkContainSpecialCharacter('')).toBe(false);
    });
  });

  describe('checkPassword', () => {
    test('returns "Too Short" for passwords with length 6 or fewer', () => {
      expect(checkPassword('abc')).toEqual({
        color: theme.colorWhiteHalf,
        passwordText: 'Too Short',
        progress: 0,
      });
    });

    test('returns "Weak" for valid length without digit, mixed case, or special character', () => {
      expect(checkPassword('abcdefg')).toEqual({
        color: theme.colorRed,
        passwordText: 'Weak',
        progress: 0.25,
      });
    });

    test('returns "Fair" for valid length with digit but without mixed case or special character', () => {
      expect(checkPassword('abcdef1')).toEqual({
        color: theme.colorYellow,
        passwordText: 'Fair',
        progress: 0.5,
      });
    });

    test('returns "Good" for valid length with digit and mixed case but without special character', () => {
      expect(checkPassword('Abcdef1')).toEqual({
        color: theme.colorPurple,
        passwordText: 'Good',
        progress: 0.75,
      });
    });

    test('returns "Strong" for valid length with digit, mixed case, and special character', () => {
      expect(checkPassword('Abcdef1@')).toEqual({
        color: theme.colorGreen,
        passwordText: 'Strong',
        progress: 1,
      });
    });
  });
});
