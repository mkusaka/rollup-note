import upper from "./upper";

export default function(string: string) {
  return upper(string.substring(0, 1)) + string.substring(1);
}
