/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, expect, sleep, suite, test } from '@minimouli/framework'

suite('Basic', () => {

    test('Player connection', async () => {

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

        navy1.kill()
        navy2.kill()

        await expect(navy2).toOutput([
            'successfully connected'
        ], {
            start: 1,
            end: 2
        })
    })

    test('Player waiting connection', async () => {

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

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'waiting for enemy connection...',
            '',
            'enemy connected'
        ], {
            start: 1,
            end: 4
        })
    })

})
