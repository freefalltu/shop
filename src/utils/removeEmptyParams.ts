export const removeEmptyParams = (
  params: Record<string | number, string | number>,
) => {
  for (const key in params) {
    if (params[key] === "" || params[key] === null) {
      delete params[key as keyof typeof params];
    }
  }
};
