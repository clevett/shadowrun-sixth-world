export const memoize = (func: any) => {
  const results = {};
  return (...args: any) => {
    const argsKey = JSON.stringify(args);
    //@ts-ignore
    if (!results[argsKey]) {
      //@ts-ignore
      results[argsKey] = func(...args);
    }
    //@ts-ignore
    return results[argsKey];
  };
};

export default memoize