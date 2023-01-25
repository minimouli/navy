/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, suite, test } from '@minimouli/framework'

suite('Example', () => {

    test('Hello world', () => {
        expect('hello').toBe('hello')
    })

    test('Bonjour le monde', () => {
        expect('bonjour').toBe('salut')
    })

})
