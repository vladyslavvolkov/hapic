/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

export enum AuthorizeResponseMode {
    QUERY = 'query',
    FRAGMENT = 'fragment',
    FORM_POST = 'form_post',
    WEB_MESSAGE = 'web_message',
}

export enum AuthorizeCodeChallengeMethod {
    SHA_256 = 'S256',
    PLAIN = 'plain',
}

export enum AuthorizeResponseType {
    NONE = 'none',
    CODE = 'code',
    TOKEN = 'token',
    ID_TOKEN = 'id_token',
}
