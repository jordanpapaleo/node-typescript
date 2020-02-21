import dotenv from 'dotenv'
import { test } from 'common/utils'
dotenv.config()

console.log(process.env.KEY)
console.log(test('hi'))
