import { Eq as EqString } from 'fp-ts/lib/string'
import { Eq as EqNumber } from 'fp-ts/lib/number'
import { Eq as EqBoolean } from 'fp-ts/lib/boolean'
import { isBoolean, isNumber, isString } from '@he110/utils/typeof'

export const includesString = (keyword: string) => (text: string) => text.includes(keyword)

export const equalString = (text1: string) => (text2: unknown) => isString(text2) && EqString.equals(text1, text2)
export const equalNumber = (num1: number) => (num2: unknown) => isNumber(num2) && EqNumber.equals(num1, num2)
export const equalBoolean = (bool1: boolean) => (bool2: unknown) => isBoolean(bool2) && EqBoolean.equals(bool1, bool2)
