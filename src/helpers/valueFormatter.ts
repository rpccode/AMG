export const valueFormatter = (number: number) => {
  return `$ ${Intl.NumberFormat("en-US").format(number)}`;
};

export const percentageFormatter = (number: number) => {
  return `${(number * 100).toFixed(2)}%`;
};

    export const dateFormatter = (dateStr: string) => {
      console.log(dateStr);
    
      // Split the date and time parts
      const [datePart, timePart] = dateStr.split(', ');
      if (!datePart || !timePart) {
        console.error("Invalid date value:", dateStr);
        return "Invalid Date";
      }
    
      // Split the date part into day, month, year
      const [day, month, year] = datePart.split('/').map(Number);
      if (!day || !month || !year) {
        console.error("Invalid date value:", dateStr);
        return "Invalid Date";
      }
    
      // Create a new date string in ISO format
      const formattedDateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${timePart}`;
    
      // Parse the formatted date string into a Date object
      const dateObj = new Date(formattedDateStr);
      if (isNaN(dateObj.getTime())) {
        console.error("Invalid date value:", dateStr);
        return "Invalid Date";
      }
    
      // Format the date using Intl.DateTimeFormat
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return new Intl.DateTimeFormat('es-ES', options).format(dateObj);
    };
    