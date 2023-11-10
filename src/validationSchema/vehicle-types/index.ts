import * as yup from 'yup';

export const vehicleTypeValidationSchema = yup.object().shape({
  max_speed: yup.number().integer().nullable(),
});
