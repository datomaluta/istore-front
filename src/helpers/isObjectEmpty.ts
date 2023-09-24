export const isObjectEmpty = (obj: Record<string, any>): boolean => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};
