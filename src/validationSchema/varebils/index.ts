import * as yup from 'yup';

export const varebilValidationSchema = yup.object().shape({
  mileage: yup.string().nullable(),
  varebil_varebil: yup.string().nullable(),
});
