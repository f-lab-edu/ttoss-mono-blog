export const formatDate = (date) => (
  new Date(date).toLocaleDateString('ko-Kore-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
);
