export function formatDate(date: Date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toISOString().split("T")[0];
}
