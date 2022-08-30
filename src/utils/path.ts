export const resolvePath = (path: string) => {
  const prefix = process.env.APP_HOST;
  if (path.charAt(0) === '/') {
    return `${prefix}${path}`;
  }
  return `${prefix}/${path}`;
};