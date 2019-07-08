import { expecto } from './src/index'

/**
 * For now works with sync stuff only
 */
expecto(
  'All tests should PASS',
  patronum => {
    /**
     * For now that's all predicates here listed, lol
     */
    patronum(0).beFalsy()
    patronum(1).beEqual(1)
    patronum(2).beSame(2)
    patronum(3).beTruthy()
    patronum({ a: 'a', b: 'b' }).beEquallyStringified({ a: 'a', b: 'b' })
  },
  /**
   * Callback gets { fail: number; success: number; }
   * So it could be just console.log as a callback
   */
  tests => console.log(tests)
)

expecto(
  'All tests should FAIL',
  patronum => {
    patronum(1).beFalsy()
    patronum(2).beEqual(3)
    patronum([]).beSame([])
    patronum(0).beTruthy()
    patronum({ a: 'a', b: 'b' }).beEquallyStringified({ b: 'b', a: 'a' })
  },
  console.log
)
