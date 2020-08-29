import {
  combineValidators,
  isRequired,
  composeValidators,
  matchesPattern,
  hasLengthGreaterThan,
  hasLengthLessThan,
  matchesField,
  isNumeric,
  isAlphabetic,
  createValidator,
} from 'revalidate';
export const emailRegexLogin=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
export const phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
export const numberRegex = /[1-4]/g;
export const shouldBeLessThen = a =>
  createValidator(
    message => value => {
      if (value && value >= a) {
        return message;
      }
    },
    field => `${field} should be less then ${a}`,
  );
export const validateSignupForm = combineValidators({
  name: composeValidators(
    isRequired({message: 'Please enter your name'}),
    isAlphabetic({message: 'Alphabets only'}),
    hasLengthGreaterThan(2)({
      message: 'Name must be at least 3 characters',
    }),
    hasLengthLessThan(31)({
      message: 'Name must be at most 30 characters.',
    }),
  )(),
  phone_number: composeValidators(
    isRequired({message: 'Please enter your Phone Number'}),
    matchesPattern(phoneNumberRegex)({message: 'Invalid Phone Number'}),
  )(),
  email: composeValidators(
    isRequired({message: 'Please enter your Email'}),
    matchesPattern(emailRegex)({message: 'Invalid Email'}),
  )(),
  password: composeValidators(
    isRequired({message: 'Please enter your Password'}),
    hasLengthGreaterThan(7)({
      message: 'Password must be at least 8 characters.',
    }),
    hasLengthLessThan(17)({message: 'Password must be at most 16 characters.'}),
  )(),
  confirm_password: composeValidators(
    isRequired({message: 'Please enter you Password again'}),
    matchesField('password')({message: "Passwords doesn't match"}),
  )(),
});
export const validateOtp = combineValidators({
  otp: composeValidators(
    isRequired({message: 'Please enter OTP'}),
    matchesPattern(numberRegex)({message: 'Invalid OTP format'}),
    hasLengthLessThan(7)({message: 'OTP must be 6 characters'}),
  )(),
});
export const validateEmail = combineValidators({
  email: composeValidators(
    isRequired({message: 'Please enter your Email'}),
    matchesPattern(emailRegex)({message: 'Invalid Email'}),
  )(),
});
export const validateLoginForm = combineValidators({
  username: composeValidators(
    isRequired({message: 'Please enter email or phone number'}),
    matchesPattern(emailRegex)({message: 'Invalid Email'}),
  )(),
  password: composeValidators(
    isRequired({message: 'Please enter your Password'}),
    hasLengthGreaterThan(7)({
      message: 'Password must be at least 8 characters.',
    }),
    hasLengthLessThan(17)({message: 'Password must be at most 16 characters.'}),
  )(),
});

export const validateWithForgotForm = combineValidators({
  new_password: composeValidators(
    isRequired({message: 'Please enter your Password'}),
    hasLengthGreaterThan(7)({
      message: 'Password must be at least 8 characters.',
    }),
    hasLengthLessThan(17)({message: 'Password must be at most 16 characters.'}),
  )(),
  confirm_password: composeValidators(
    isRequired({message: 'Please enter your Password again'}),
    matchesField('new_password')({message: "Passwords doesn't match"}),
  )(),
});

export const validateChangePasswordForm = combineValidators({
  old_password: composeValidators(
    isRequired({message: 'Please enter old Password'}),
    hasLengthGreaterThan(7)({
      message: 'Password must be at least 8 characters.',
    }),
    hasLengthLessThan(17)({message: 'Password must be at most 16 characters.'}),
  )(),
  new_password: composeValidators(
    isRequired({message: 'Please enter new Password'}),
    hasLengthGreaterThan(7)({
      message: 'Password must be at least 8 characters.',
    }),
    hasLengthLessThan(17)({message: 'Password must be at most 16 characters.'}),
  )(),
  confirm_password: composeValidators(
    isRequired({message: 'Please enter your Password again'}),
    matchesField('new_password')({message: "Passwords doesn't match"}),
  )(),
});

