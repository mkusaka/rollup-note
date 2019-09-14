export default function(char: string, offset: number) {
  return String.fromCharCode(char.charCodeAt(0) + offset);
}
