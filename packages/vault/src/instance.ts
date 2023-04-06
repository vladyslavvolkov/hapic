/*
 * Copyright (c) 2022-2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import {
    hasOwnProperty,
    verifyInstanceBySymbol,
} from 'hapic';
import type { ConfigInput } from './config';
import { Client } from './module';

const instances: Record<string, Client> = {};

/**
 * Verify if a vault client singleton instance exists.
 *
 * @param key
 */
export function hasClient(
    key?: string,
) : boolean {
    return hasOwnProperty(instances, key || 'default');
}

/**
 * Set the vault client singleton instance.
 *
 * @param client
 * @param key
 */
export function setClient(
    client: Client,
    key?: string,
) : Client {
    key = key || 'default';

    instances[key] = client;

    return client;
}

/**
 * Receive a vault singleton instance.
 *
 * @param key
 */
export function useClient(
    key?: string,
) : Client {
    key = key || 'default';

    if (Object.prototype.hasOwnProperty.call(instances, key)) {
        return instances[key];
    }

    const instance = createClient();

    instances[key] = instance;

    return instance;
}

/**
 * Unset a vault client singleton instance.
 *
 * @param key
 */
export function unsetClient(key?: string) {
    key = key || 'default';
    if (hasOwnProperty(instances, key)) {
        delete instances[key];
    }
}

/**
 * Create a vault client.
 *
 * @param input
 */
export function createClient(input?: ConfigInput) {
    return new Client(input);
}

/**
 * Check if the argument is of instance Client.
 *
 * @param input
 */
export function isClient(input: unknown): input is Client {
    if (input instanceof Client) {
        return true;
    }

    return verifyInstanceBySymbol(input, 'VaultClient');
}
