<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/dataql/master/about/identity/dataql-logo.png" height="250px">
    <br />
    <br />
    <a target="_blank" href="https://github.com/plurid/dataql/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h1 align="center">
    dataql
</h1>


<h3 align="center">
    Data Query Language and Service
</h3>



`dataql` is a query language and service based on `datasign` and inspired by `GraphQL` and `TypeScript`.



### Contents

+ [About](#about)
+ [Packages](#packages)
+ [Codeophon](#codeophon)



## About

A `dataql` server can be a `gateway` or a `service`. The `gateway` connects multiple `services`. A `service` has `signs` and `resolvers`. The `signs` contain `calls` and `types`. A `call` can be a `get`, a `set`, or a `net`. There is no technical difference between `get`, `set`, and `net`, but differentiating between them provides an well-abstracted access layer for the client: `get` for queries, `set` for mutations, `net` for subscriptions. A `type` is comprised of a `Name`, by convention `PascalCased`, and a record of `key primitive | Type` pairs. A `type` can also be composed from other types using `&` and `|` operators. The `primitives` are `string | number | boolean | undefined`.


``` dataql
// signs for an example service

// simple call
getSomething(InputSomething): ResponseSomething

// with input and response types
InputSomething {
    someKey string | number | boolean
}

ResponseSomething {
    someOtherKey string | number | boolean
}


// types
SomeType {
    simpleKey string | number | boolean
    nestedKey {
        nestedNestedKey string | number | boolean
    }
}

SomeComposedType = SomeType & {
    anotherKey string | number | boolean
}

SomeDisjoinedType = {
    aKey string | number | boolean
} | {
    anotherKey string | number | boolean
}

SomeDotComposedType {
    someKey string | number | boolean
    someOtherKey SomeComposedType.anotherKey
}

SomeTypeWithOptionalKeys {
    requiredKey string | number | boolean
    optionalKey? string | number | boolean
    anotherOptionalKey? string | number | boolean | undefined
}
```



## Packages

<a target="_blank" href="https://www.npmjs.com/package/@plurid/dataql-client">
    <img src="https://img.shields.io/npm/v/@plurid/dataql-client.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
</a>

[@plurid/dataql-client-javascript][dataql-client-javascript] • dataql JavaScript client

[dataql-client-javascript]: https://github.com/plurid/dataql/tree/master/packages/dataql-client/dataql-javascript



<a target="_blank" href="https://www.npmjs.com/package/@plurid/dataql-server">
    <img src="https://img.shields.io/npm/v/@plurid/dataql-server.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
</a>

[@plurid/dataql-server-javascript][dataql-server-javascript] • dataql JavaScript server

[dataql-server-javascript]: https://github.com/plurid/dataql/tree/master/packages/dataql-server/dataql-javascript



## [Codeophon](https://github.com/ly3xqhl8g9/codeophon)

+ licensing: [delicense](https://github.com/ly3xqhl8g9/delicense)
+ versioning: [αver](https://github.com/ly3xqhl8g9/alpha-versioning)
