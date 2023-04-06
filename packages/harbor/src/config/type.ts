/*
 * Copyright (c) 2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { Config as BaseConfig } from 'hapic';

export type ConnectionOptions = {
    host: string,
    user: string,
    password: string
};
export type Config = BaseConfig & {
    connectionString?: string,
    connectionOptions?: ConnectionOptions
};

export type ConfigInput = Partial<Config>;
