/*
 * Copyright (c) 2023-2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { Client as BaseClient, Driver, DriverRequestConfig } from 'hapic';
import { createDriver, isClient } from 'hapic';
import { Client } from '../module';
import { parseOpenIDProviderMetadata } from './provider-metadata';
import type { OpenIDProviderMetadata } from './type';

/**
 * Create a client instance by requesting details of
 * the open-id discovery endpoint.
 *
 * @param url (.e.g. .well-known/openid-configuration)
 * @param client
 */
export async function createClientWithOpenIDDiscoveryURL(
    url: string,
    client?: BaseClient | DriverRequestConfig | Driver,
) : Promise<Client> {
    let driver: Driver;

    if (isClient(client)) {
        driver = client.driver;
    } else {
        driver = createDriver(client);
    }

    const { data }: { data: OpenIDProviderMetadata } = await driver.get(url);

    return new Client({ driver, options: parseOpenIDProviderMetadata(data) });
}
