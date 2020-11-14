// Ignore favicon
function noFavicon () {
  const extNamePattern = /\/favicon\.?(jpe?g|png|ico|gif)?$/i

  return async (ctx, next) => {
    if (extNamePattern.test(ctx.request.url)) {
      ctx.status = 404
      ctx.body = null
    } else {
      await next()
    }
  }
}

module.exports = noFavicon
