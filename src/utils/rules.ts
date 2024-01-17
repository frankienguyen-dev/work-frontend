// import { RegisterOptions, UseFormGetValues } from 'react-hook-form';
import * as yup from 'yup';

// type Rules = {
//   [key in 'email' | 'password' | 'confirm_password' | 'full_name' | 'read_agree']: RegisterOptions;
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//   read_agree: {
//     required: {
//       value: true,
//       message: 'You must agree to our terms and conditions'
//     }
//   },

//   full_name: {
//     required: {
//       value: true,
//       message: 'Full name is required'
//     }
//   },

//   email: {
//     required: {
//       value: true,
//       message: 'Email is required'
//     },
//     pattern: {
//       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       message: 'Invalid email address'
//     }
//   },

//   password: {
//     required: {
//       value: true,
//       message: 'Password is required'
//     },
//     minLength: {
//       value: 6,
//       message: 'Password must be at least 6 characters'
//     }
//   },

//   confirm_password: {
//     required: {
//       value: true,
//       message: 'Confirm password is required'
//     },
//     minLength: {
//       value: 6,
//       message: 'Confirm password must be at least 6 characters'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => value === getValues('password') || " Password doesn't match"
//         : undefined
//   }
// });

export const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .min(6, 'Password must be at least 6 characters')
    .oneOf([yup.ref('password')], "Password doesn't match"),
  read_agree: yup.boolean().oneOf([true], 'You must agree to our terms and conditions'),
  role: yup.string().required('Role is required'),
  name: yup.string().trim(),
  location: yup.string().trim()
});

export type Schema = yup.InferType<typeof schema>;
