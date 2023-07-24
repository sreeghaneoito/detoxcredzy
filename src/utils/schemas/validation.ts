import * as yup from 'yup';

// Login page schema
const LoginValidationSchema = yup.object().shape({
  email: yup.string().required().email('Invalid email'),
  password: yup.string().required('required field'),
});

// Signupform schema
const SignupFormValidationSchema = yup.object().shape({
  email: yup.string().email().required('required email').label('email'),
  password: yup
    .string()
    .required('required password')
    .min(8)
    .label('password')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'weak password',
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('required confirm password'),
});
// Personal Info Name
const NameValidationSchema = yup.object().shape({
  firstName: yup.string().min(2).required(),
  lastName: yup.string().min(2).required(),
});

// Personal Info Phone
const PhoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required('Required field')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    )
    .min(10, 'Phone number should be atleast 10 characters'),
});

// Personal Info SSN
const SsnValidationSchema = yup.object().shape({
  ssn: yup.string().required('Required field').min(9, 'Invalid ssn'),
  dob: yup
    .string()
    .required('Required field')
    .test('dob-validation', 'Invalid Date of Birth (MM/DD/YYYY)', value => {
      if (+value?.substring(0, 2)! < 0 || +value?.substring(0, 2)! > 12) {
        return false;
      } else if (
        +value?.substring(2, 4)! < 0 ||
        +value?.substring(2, 4)! > 32
      ) {
        return false;
      } else if (+value?.length < 8) {
        return false;
      } else {
        return true;
      }
    }),
});

// Details Form
const DetailsValidationSchema = yup.object().shape({
  firstName: yup.string().min(2).required(),
  lastName: yup.string().min(2).required(),
  streetAddress: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.number().max(6).required(),
});

// Estimated Monthly Incone
const EstimatedIncomeValidationSchema = yup.object().shape({
  estimatedIncome: yup.number().required(),
});

// Estimated Monthly Debt
const EstimatedDebtValidationSchema = yup.object().shape({
  estimatedDebt: yup.number().required(),
});
const UpdatePasswordValidationSchema = yup.object().shape({
  currentpassword: yup.string().required('required password').min(8),
  newpassword: yup
    .string()
    .required('required password')
    .min(8)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'weak password',
    ),
  confirmnewpassword: yup
    .string()
    .oneOf([yup.ref('newpassword'), null], 'Passwords must match')
    .required('confirm password'),
});
const NewPasswordValidationSchema = yup.object().shape({
  newpassword: yup
    .string()
    .required('required field')
    .min(8)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'weak password',
    ),
  confirmnewpassword: yup
    .string()
    .oneOf([yup.ref('newpassword'), null], 'Passwords must match')
    .required('confirm password'),
});
// Register email
const RegisterEmailValidationSchema = yup.object().shape({
  email: yup.string().email().required('required field'),
  firstname: yup
    .string()
    .required('required Field')
    .matches(/^[a-zA-Z]+$/, 'Invalid First Name'),
  lastname: yup
    .string()
    .required('required field')
    .matches(/^[a-zA-Z]+$/, 'Invalid Last Name'),
});
const ForgotCredentialValidationSchema = yup.object().shape({
  email: yup.string().email().required('required'),
});

const capacityDataValidationSchema = yup.object().shape({
  debt: yup.string().required('required'),
  income: yup.string().required('required'),
});

const capitalDataValidationSchema = yup.object().shape({
  f401k: yup.string(),
  other: yup.string(),
  savings: yup.string(),
  stock: yup.string(),
  real_estate: yup.string(),
});
const characterDataValidationSchema = yup.object().shape({
  equifax: yup.string().required('required'),
  experian: yup.string().required('required'),
  transunion: yup.string().required('required'),
});
const createSwaValidationSchema = yup.object().shape({
  first_name: yup.string().required('required field'),
  last_name: yup.string().required('required field'),
  street: yup.string().required('required field'),
  city: yup.string().required('required field'),
  state: yup.string().required('required field'),
  zip_code: yup
    .string()
    .required('required field')
    .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'Invalid zip code'),
});
export {
  LoginValidationSchema,
  SignupFormValidationSchema,
  EstimatedDebtValidationSchema,
  EstimatedIncomeValidationSchema,
  DetailsValidationSchema,
  NameValidationSchema,
  SsnValidationSchema,
  PhoneValidationSchema,
  UpdatePasswordValidationSchema,
  RegisterEmailValidationSchema,
  ForgotCredentialValidationSchema,
  NewPasswordValidationSchema,
  capacityDataValidationSchema,
  capitalDataValidationSchema,
  characterDataValidationSchema,
  createSwaValidationSchema,
};
