# koa-no-favicon

Koa middleware to ignore favicon.* requests

## Install

```bash
# npm
npm i koa-no-favicon
# yarn
yarn add koa-no-favicon
```

## Example

```js
const Koa       = require('koa')
const noFavicon = require('koa-no-favicon')
const app       = new Koa()

app.use(noFavicon())

app.listen(process.env.PORT || 5000)
```

## License
[MIT](LICENSE)
