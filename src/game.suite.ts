/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path, config, expect, sleep, suite, test } from '@minimouli/framework'

suite('Game', () => {

    config({
        attempts: 3
    })

    test('Attack again after wrong position', async () => {

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

        navy1.stdin.write(['Z9', 'A1', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'attack: wrong position',
            'attack: A1: missed'
        ], {
            start: 29,
            end: 31
        })
    })

    test('Attack same position twice', async () => {

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

        navy1.stdin.write(['C4', 'C4', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'attack: C4: missed'
        ], {
            start: 58,
            end: 59
        })
    })

    test('Attack wrong position #1', async () => {

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

        navy1.stdin.write(['A0', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'attack: wrong position'
        ], {
            start: 29,
            end: 30
        })
    })

    test('Attack wrong position #2', async () => {

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

        navy1.stdin.write(['A9', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'attack: wrong position'
        ], {
            start: 29,
            end: 30
        })
    })

    test('Attack wrong position #3', async () => {

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

        navy1.stdin.write(['Z9', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'attack: wrong position'
        ], {
            start: 29,
            end: 30
        })
    })

    test('Attack hit', async () => {

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

        navy1.stdin.write(['C4', ''].join('\n'))
        navy2.stdin.write(['B2', ''].join('\n'))

        await sleep(2000)

        navy1.kill()
        navy2.kill()

        await expect(navy1).toOutput([
            'attack: C4: hit'
        ], {
            start: 29,
            end: 30
        })
    })

    test('Attack miss', async () => {

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
    })

    test('Full game', async () => {

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

        navy1.stdin.write([
            'A1',
            'B1',
            'C1',
            'D1',
            'E1',
            'F1',
            'H1',
            'H2',
            'H3',
            'C4',
            'D4',
            'E6',
            'E7',
            'F6',
            'G6',
            'H6',
            ''
        ].join('\n'))

        navy2.stdin.write([
            'C1',
            'B1',
            'C2',
            'A3',
            'C5',
            'E5',
            'F4',
            'G4',
            'F3',
            'E4',
            'D4',
            'C4',
            'E1',
            'D7',
            'E7',
            'F7',
            'G7',
            ''
        ].join('\n'))

        await sleep(10_000)

        navy1.kill()
        navy2.kill()

        await sleep(1000)

        expect(navy1).toExitWith(0)
        expect(navy2).toExitWith(1)

        await expect(navy1).toOutput([
            'I won'
        ], {
            start: 490,
            end: 491
        })

        await expect(navy2).toOutput([
            'Enemy won'
        ], {
            start: 489,
            end: 490
        })
    })

})
