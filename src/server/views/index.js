const index = (helmet = {}, appHtml = '', initialState = {}) => (
`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${ helmet.title.toString() }

    <style> section { border-bottom: 1px solid #ccc; border-top: 1px solid #ccc; margin: 15px 0px }</style>
    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
    <main id="app">${ appHtml }</main>

    <script>
        window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) }
    </script>

    <script type="text/javascript" src="/js/bundle.js?${ Math.random() }"></script>
</body>
</html>`
)

export default index
