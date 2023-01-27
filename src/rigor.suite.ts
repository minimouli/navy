/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, suite, test } from '@minimouli/framework'

suite('Rigor', () => {

    test('2 boats has same length', async () => {

        const exec = new Executable('navy', [
            Path.fromMoulinette('/res/invalid/same-length')
        ])

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Bad boat length', async () => {

        const exec = new Executable('navy', [
            Path.fromMoulinette('/res/invalid/bad-length')
        ])

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Bad file path', async () => {

        const exec = new Executable('navy', [
            Path.fromMoulinette('/res/invalid/bad-file-path')
        ])

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Miss argument split', async () => {

        const exec = new Executable('navy', [
            Path.fromMoulinette('/res/invalid/miss-argument-split')
        ])

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Bad argument value', async () => {

        const exec = new Executable('navy', [
            Path.fromMoulinette('/res/invalid/miss-argument-value')
        ])

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Miss one boat', async () => {

        const exec = new Executable('navy', [
            Path.fromMoulinette('/res/invalid/miss-one-boat')
        ])

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Too few arguments', async () => {

        const exec = new Executable('navy')

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Wrong argument value', async () => {

        const exec = new Executable('navy', [
            Path.fromMoulinette('/res/invalid/wrong-argument-value')
        ])

        exec.setTimeout(1000)
        await exec.execute()

        expect(exec).toExitWith(84)
    })

})
