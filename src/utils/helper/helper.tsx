export function dateToDay(date: string | number | Date): string {
  const currentDate = new Date(date); // Create a date object
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    currentDate
  );
}

export function formatDateString(dateString: string): string {
  // Convert the string to a Date object
  const date = new Date(dateString);

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit", // Day with leading zero (e.g., 10)
    month: "long", // Full month name (e.g., May)
    year: "numeric", // Full year (e.g., 2020)
  };

  // Format the date using Intl.DateTimeFormat
  return date.toLocaleDateString("en-US", options);
}

export function getWeekday(dateInput: number | string | Date): string {
  // Convert the input to a Date object
  const date = new Date(dateInput);

  // Array of weekday names
  const weekdays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week (0-6, where 0 = Sunday)
  const weekday = weekdays[date.getDay()];

  return weekday;
}

export function roundTemperature(temp: number): number {
  return Math.round(temp);
}
