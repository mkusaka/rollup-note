import { LOWERCASE_LETTERS } from './constants';
import upperChar from './upperChar';

export default function(string: string) {
  return string.replace(LOWERCASE_LETTERS, upperChar);
}
