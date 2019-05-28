export class ArrayHelper {

  public static arraysEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  public static checkArrayIsSorted(incomingArray): boolean {
    return !!incomingArray.reduce((n, item) => n !== false && item >= n && item);
  }

  public static getRandomValueFromArray(array): any {
    return array[Math.floor(Math.random() * array.length)];
  }
}
