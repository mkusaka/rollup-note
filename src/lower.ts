import { UPPERCASE_LETTERS } from './constants';
import lowerChar from './lowerChar';

export default function(string: string) {
  return string.replace(UPPERCASE_LETTERS, lowerChar);
}
