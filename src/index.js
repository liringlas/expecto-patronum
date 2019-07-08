import { beSame } from './to/beSame'
import { beEqual } from './to/beEqual'
import { beFalsy } from './to/beFalsy'
import { beTruthy } from './to/beTruthy'
import { beEquallyStringified } from './to/beEquallyStringified'

/**
 * TODO:
 * Get the idea what we can potentially do with
 * tests array data and it's form
 */

let tests = []

const createPatronum = description => {
  const tasks = { success: 0, fail: 0 }
  const catcher = err => console.log(err.stack)

  /**
   * Higher order function
   */

  const withCatcher = func => {
    return (...args) => {
      try {
        func(...args)
        ++tasks.success
      } catch (err) {
        ++tasks.fail
        catcher(err)
      }
    }
  }

  /**
   * Our main hero
   */
  function Patronum(val) {
    return {
      beSame: otherVal => withCatcher(beSame)(val, otherVal),
      beEqual: otherVal => withCatcher(beEqual)(val, otherVal),
      beFalsy: () => withCatcher(beFalsy)(val),
      beTruthy: () => withCatcher(beTruthy)(val),
      beEquallyStringified: otherVal =>
        withCatcher(beEquallyStringified)(val, otherVal),
    }
  }

  Patronum.fin = (id, cb) => {
    tests = tests.filter(test => test !== id)

    console.log(`${description} finished`)
    console.log(`Success: ${tasks.success}`)
    console.log(`Fail: ${tasks.fail}`)

    /**
     * Sending tasks in callback if there is some
     */
    if (typeof cb === 'function') {
      cb(tasks)
    }
  }

  return Patronum
}

export const expecto = (description, fn, cb) => {
  /**
   * TODO:
   * We can trace async tasks in future
   */
  const id = Date.now()
  const patronum = createPatronum(description)

  tests.push(id)
  /**
   * Works for synchronous case only
   */
  fn(patronum)
  patronum.fin(id, cb)
}
