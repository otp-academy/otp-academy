export const checkStatus = data => {
  if (data.errorStatus) {
    throw new Error(data.message);
  }
  return data;
}