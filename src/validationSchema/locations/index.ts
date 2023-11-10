import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  zip_code: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
});
