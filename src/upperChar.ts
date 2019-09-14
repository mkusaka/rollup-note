import { UPPERCASE_OFFSET } from "./constants";
import shiftChar from './shiftChar';

export default function(char: string) {
  return shiftChar(char, UPPERCASE_OFFSET);
}
