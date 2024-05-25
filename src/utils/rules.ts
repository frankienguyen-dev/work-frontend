import * as yup from 'yup';

const today = new Date();
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

export const jobSchema = yup.object({
  name: yup.string().trim().required('Job name is required'),
  location: yup.string().trim().required('Location is required'),
  quantity: yup
    .number()
    .typeError('Quantity must be a number')
    .min(1, 'Quantity employer must be at least 1 employer')
    .required('Quantity is required'),
  level: yup
    .string()
    .trim()
    .notOneOf(['Select...'], 'Level is required')
    .required('Level is required'),
  salary: yup
    .number()
    .typeError('Quantity must be a number')
    .min(1, 'Salary must be at least $1')
    .required('Salary is required'),
  startDate: yup
    .date()
    .min(
      new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0),
      'Start date must be at least today'
    )
    .required('Start date is required'),
  endDate: yup
    .date()
    .min(yup.ref('startDate'), 'End date must be after start date')
    .required('End date is required'),
  description: yup.string().trim().required('Description is required'),
  responsibility: yup.string().trim().required('Responsibility is required'),
  experience: yup.string().trim().required('Experience is required'),
  jobType: yup.string().trim().required('Job type is required'),
  education: yup.string().trim().required('Education is required'),
  skills: yup
    .array()
    .required('Skills is required')
    .min(1, 'The job requires at least 1 skill.')
    .max(4, 'The job allows adding a maximum of 4 skills.'),
  company: yup
    .string()
    .notOneOf(['Select...'], 'Company name is required')
    .required('Company name is required')
});

interface FileWithSize {
  id: string;
  fileName: string;
  fileType: string;
  size: number;
  uploadTime: string;
}

export const companySchema = yup.object({
  name: yup.string().trim().required('Company name is required'),
  companyType: yup.string().trim().required('Industry type is required'),
  teamSize: yup
    .number()
    .typeError('Team size must be a number')
    .min(1, 'Team size must be at least 1')
    .required('Team size is required'),
  email: yup.string().trim().required('Email is required').email('Invalid email address'),
  address: yup.string().trim().required('Address is required'),
  phoneNumber: yup.string().trim().required('Phone is required'),
  foundedDate: yup
    .date()
    .max(
      new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0),
      'Founded date must be on or before today'
    )
    .required('Founded date is required'),
  description: yup.string().trim().required('Description is required'),
  companyVision: yup.string().trim().required('Company vision is required'),
  companyBenefit: yup.string().trim().required('Company benefit is required'),
  website: yup.string().trim().required('Company website is required'),
  logo: yup.mixed<FileWithSize>(),
  banner: yup.mixed<FileWithSize>()
});

export const userSchema = yup.object({
  email: yup.string().trim().email('Invalid email address').required('Email is required'),
  fullName: yup.string().trim().required('Full name is required'),
  address: yup.string().trim().required('Address is required'),
  age: yup.string().notOneOf(['Select...'], 'Age is required'),
  phoneNumber: yup.string().trim().required('Phone is required'),
  gender: yup
    .string()
    .trim()
    .notOneOf(['Select...'], 'Gender is required')
    .required('Gender is required'),
  title: yup
    .string()
    .trim()
    .notOneOf(['Select...'], 'Title is required')
    .required('Title is required'),
  avatar: yup.mixed<FileWithSize>(),
  roles: yup.string().required('Role is required').notOneOf(['Select...'], 'Role is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .min(6, 'Password must be at least 6 characters')
    .oneOf([yup.ref('password')], "Password doesn't match"),
  company: yup.string()
});

export const permissionSchema = yup.object({
  name: yup.string().trim().required('Permission name is required'),
  method: yup
    .string()
    .trim()
    .notOneOf(['Select...'], 'Method is required')
    .required('Method is required'),
  module: yup
    .string()
    .trim()
    .notOneOf(['Select...'], 'Module is required')
    .required('Module is required'),
  path: yup.string().trim().required('Path is required')
});

export const roleSchema = yup.object({
  name: yup.string().trim().required('Role name is required'),
  active: yup.bool(),
  permissions: yup.array().of(yup.string().trim().required('Permission name is required'))
});

export const searchRoleSchema = yup.object({
  name: yup.string().trim()
});

export const searchUserSchema = yup.object({
  email: yup.string().trim()
});

export const searchJobSchema = yup.object({
  name: yup.string().trim()
});

export const searchPermissionSchema = yup.object({
  name: yup.string().trim()
});

export const uploadImage = yup.object({});
export type searchSchemaJob = yup.InferType<typeof searchJobSchema>;
export type searchSchemaUser = yup.InferType<typeof searchUserSchema>;
export type searchSchemaRole = yup.InferType<typeof searchRoleSchema>;
export type searchSchemaPermission = yup.InferType<typeof searchPermissionSchema>;
export type UserSchema = yup.InferType<typeof userSchema>;
export type RoleSchema = yup.InferType<typeof roleSchema>;
export type Schema = yup.InferType<typeof schema>;
export type postJobSchema = yup.InferType<typeof jobSchema>;
export type companySchema = yup.InferType<typeof companySchema>;
export type createPermissionSchema = yup.InferType<typeof permissionSchema>;
