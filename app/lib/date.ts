export function formatPublishedDate(dateValue?: string | null): string | null {
  if (!dateValue) return null;

  const parsedDate = new Date(dateValue);

  if (Number.isNaN(parsedDate.getTime())) return null;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
}
