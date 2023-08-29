/* JSON cannot parse BigInt, therefore this will allow for BigINT
    to be parsed as a string, instead of an int
*/

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = () => {
  return String(this);
};
