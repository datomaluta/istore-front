export type PropsType = {
  edit: boolean;
};

export type ProductType = {
  id: number;
  name: string;
  parent_id: number;
};

export type FormValues = {
  brand: string;
  price: number;
  image: Blob;
  label: string;
  category_id: { value: number; label: string };
  stock: number;
};

export type extraFieldType = { name: string; label: string; type: string };

export type extraFieldsArrayType = Array<extraFieldType>;
