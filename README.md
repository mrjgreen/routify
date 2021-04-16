# Routify 3

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [RoutifyCallback](#routifycallback)
    -   [Parameters](#parameters)
-   [RoutifyPlugin](#routifyplugin)
    -   [Properties](#properties)

### 

### RoutifyCallback

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

#### Parameters

-   `first` **{instance: Routify}** 

Returns **(T | [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;T>)** 

### RoutifyPlugin

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### Properties

-   `before` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>)?** name of plugin(s) to run before
-   `after` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>)?** name of plugin(s) to run after
-   `condition` **[RoutifyCallback](#routifycallback)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>?** run plugin if true
-   `run` **[RoutifyCallback](#routifycallback)&lt;any>** plugin script
-   `mode` **(`"compile"` \| `"runtime"`)** 