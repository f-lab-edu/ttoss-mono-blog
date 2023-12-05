export const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return false;
  }

  const { worker } = await import('./browser');

  return worker.start();
};
