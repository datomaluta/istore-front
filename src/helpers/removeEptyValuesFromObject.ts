export function removeEptyValuesFromObject(
  obj: Record<string, any>
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in obj) {
    if (obj[key] !== "") {
      result[key] = obj[key];
    }
  }
  return result;
}
