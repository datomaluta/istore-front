import * as Yup from "yup";

export const registerFormValidationSchema = Yup.object({
  name: Yup.string()
    //aqac satargmni ikneba
    .required("field_required")
    .min(3, "field_min_length")
    .max(15, "field_max_length")
    .matches(/^[a-zA-Z]+$/, {
      message: "only_letters",
    }),

  email: Yup.string().required("field_required").email("email_format"),

  password: Yup.string()
    .required("field_required")
    .min(4, "field_min_length")
    .max(15, "field_max_length")
    .matches(/^[a-z0-9]+$/, {
      message: "only_letters_and_numbers",
    }),

  confirm_password: Yup.string()
    .required("field_required")
    .oneOf([Yup.ref("password")], "password_does_not_match"),
});

export const loginFormValidationSchema = Yup.object({
  email: Yup.string().required("field_required").email("email_format"),

  password: Yup.string()
    .required("field_required")
    .min(4, "field_min_length")
    .max(15, "field_max_length")
    .matches(/^[a-z0-9]+$/, {
      message: "only_letters_and_numbers",
    }),
});

export const userUpdateFormValidationSchema = Yup.object({
  name: Yup.string()
    .nullable()
    .min(3, "field_min_length")
    .max(15, "field_max_length")
    .matches(/^[a-zA-Z]+$/, {
      message: "only_letters",
    }),

  password: Yup.string()
    .nullable()
    .min(4, "field_min_length")
    .max(15, "field_max_length")
    .matches(/^[a-z0-9]+$/, {
      message: "only_letters_and_numbers",
    }),
});
