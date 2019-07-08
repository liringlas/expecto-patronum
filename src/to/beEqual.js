export const beEqual = (a, b) => {
  if (a == b) {
    /**
     * TODO:
     * Can return some special object instead of boolean value
     * for further operations
     */
    return true
  }

  throw new Error(`Values are not equal`)
}
