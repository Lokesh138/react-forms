import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().required()
        .max(63, "maximum length should not be greater than 63 characters")
        .min(3, "minimum length should not be less than 3 characters"),
    mobileNumber: yup.string().required()
        .matches(
            /^[0-9]{9,12}$/,
            'Must be 9 or 12 digits and should be numbers',
        ),
    officeNumber: yup.string()
        .transform(value => (!value ? null : value))
        .nullable()
        .matches(
            /^[0-9]{9,12}$/,
            'Must be 9 or 12 digits',
        ),
    email: yup.string().email("should be valid email")
        .max(63, "maximum length should not be greater than 63 characters")
        .transform(value => (!value ? null : value))
        .nullable()
        .min(5, "minimum length should not be less than 5 characters"),

    address: yup.string()
        .transform(value => (!value ? null : value))
        .nullable()
        .max(256, "maximum length should not be greater than 256 characters")
        .min(10, "minimum length should not be less than 10 characters"),
});