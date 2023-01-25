/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const config = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'node 12.20.0',
                useBuiltIns: 'usage',
                corejs: '3.25',
                modules: false
            }
        ],
        '@babel/preset-typescript'
    ]
}

export default config
