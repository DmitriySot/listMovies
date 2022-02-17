export function getNumber(url: string): number {
  const num = url.match(/\d+/);
  return (num && Number(num[0])) || 0;
}
