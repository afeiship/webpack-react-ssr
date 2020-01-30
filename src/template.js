export default (body) => `<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React SSR</title>
    </head>

    <body>
      <main id="app">${body}</main>
      <script src="/client.js"></script>
    </body>
</html>`;
