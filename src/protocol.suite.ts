/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, config, expect, sleep, suite, test } from '@minimouli/framework'

suite('Protocol', () => {

    config({
        attempts: 3
    })

    test('Player 1 attack', async () => {

        const navy1 = new Executable('navy', [
            Path.fromMoulinette('/res/valid/position1')
        ])

        navy1.setTimeout(-1)
        void navy1.execute()

        await sleep(1000)

        const navy2 = new Executable('navy', [
            navy1.pid.toString(),
            Path.fromMoulinette('/res/valid/position2')
        ])

        navy2.setTimeout(-1)
        void navy2.execute()

        await sleep(1000)

        expect(navy1.exitCode).toBeNull()
        expect(navy2.exitCode).toBeNull()

        navy1.stdin.write(['A1', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'attack: A1: missed'
        ], {
            start: 29,
            end: 30
        })
        await expect(navy2).toOutput([
            'A1: missed'
        ], {
            start: 28,
            end: 29
        })
    })

    test('Player 1 wait for attack', async () => {

        const navy1 = new Executable('navy', [
            Path.fromMoulinette('/res/valid/position1')
        ])

        navy1.setTimeout(-1)
        void navy1.execute()

        await sleep(1000)

        const navy2 = new Executable('navy', [
            navy1.pid.toString(),
            Path.fromMoulinette('/res/valid/position2')
        ])

        navy2.setTimeout(-1)
        void navy2.execute()

        await sleep(1000)

        expect(navy1.exitCode).toBeNull()
        expect(navy2.exitCode).toBeNull()

        navy1.stdin.write(['A1', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'B2: missed'
        ], {
            start: 32,
            end: 33
        })
        await expect(navy2).toOutput([
            'attack: B2: missed'
        ], {
            start: 30,
            end: 31
        })
    })

})
