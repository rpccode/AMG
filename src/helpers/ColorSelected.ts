

export const getColorBar = (value: number) => {
  if (value >= 90) return 'green';
  else if (value >= 50) return 'orange';
  else if (value >= 20) return 'yellow';
  else if (value >= 5) return 'red';
  else return 'red';
};