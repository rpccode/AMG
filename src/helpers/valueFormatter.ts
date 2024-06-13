export const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;


    export const dateFormatter = (dateStr: string) => {
        const dateObj = new Date(dateStr);
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        return new Intl.DateTimeFormat('es-ES', options).format(dateObj);
      };
      