import * as Yup from "yup";

export const productAddValidationSchema = Yup.object({
  brand: Yup.string().required("field_required"),

  price: Yup.string().required("field_required"),

  image: Yup.mixed()
    .required("Image is required")
    .test("required", "field_required", (value) => {
      if (value instanceof FileList && value.length > 0) {
        return true;
      } else {
        return false;
      }
    })
    .test("fileType", "Invalid file format", (value) => {
      if (value instanceof FileList && value.length > 0) {
        const file = value[0];
        return ["image/jpeg", "image/png", "image/jpg"].includes(file.type);
      }
    })
    .test("fileSize", "File is too large", (value) => {
      if (value instanceof FileList && value.length > 0) {
        const file = value[0];
        return file.size <= 2 * 1024 * 1024; // 2MB in bytes
      }
    }),
  stock: Yup.string().required("field_required"),
  label: Yup.string().required("field_required"),
  category_id: Yup.object().required("field_required"),
});

export const producEditValidationSchema = Yup.object({
  brand: Yup.string().required("field_required"),

  price: Yup.string().required("field_required"),

  image: Yup.mixed()
    .test("fileType", "Invalid file format", (value) => {
      if (value instanceof FileList && value.length > 0) {
        const file = value[0];
        return ["image/jpeg", "image/png", "image/jpg"].includes(file.type);
      } else {
        return true;
      }
    })
    .test("fileSize", "File is too large", (value) => {
      if (value instanceof FileList && value.length > 0) {
        const file = value[0];
        return file.size <= 2 * 1024 * 1024; // 2MB in bytes
      } else {
        return true;
      }
    }),
  stock: Yup.string().required("field_required"),
  label: Yup.string().required("field_required"),
  category_id: Yup.object().required("field_required"),
});

export const pcValidationSchema = Yup.object({
  cpu: Yup.string().required("field_required"),
  ram: Yup.string().required("field_required"),
  ssd: Yup.string().required("field_required"),
  hdd: Yup.string().required("field_required"),
  gpu: Yup.string().required("field_required"),
  motherboard: Yup.string().required("field_required"),
});

export const laptopAndAllInOneValidationSchema = Yup.object({
  cpu: Yup.string().required("field_required"),
  ram: Yup.string().required("field_required"),
  ssd: Yup.string().required("field_required"),
  hdd: Yup.string().required("field_required"),
  gpu: Yup.string().required("field_required"),
  model: Yup.string().required("field_required"),
  screen_size: Yup.string().required("field_required"),
  resolution: Yup.string().required("field_required"),
});
