var metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  layouts = require('metalsmith-layouts'),
  handlebars = require('handlebars'),
  permalinks = require('metalsmith-permalinks'),
  serve = require('metalsmith-serve'),
  watch = require('metalsmith-watch'),
  rewrite = require('metalsmith-rewrite');

metalsmith(__dirname)
  .metadata({
    site: {
      name: 'Commitment',
      description: "Git on it"
    }
  })
  .source('./src')
  .destination('./docs')
  .use(markdown())
  .use(permalinks({
      relative: false,
      pattern: ':title',
    }))
  .use(layouts({
            engine: 'handlebars',
            directory: './layouts',
            pattern: ["*/*/*html","*/*html","*html"],
            partials: {
              pagehead: 'partials/pagehead',
              pageheader: 'partials/pageheader',
              footer: 'partials/footer'
            }
        }))
  .use(rewrite([{
      pattern: ['**/*.html', '!**/index.html'],
      filename: '{path.dir}/{path.name}/index.html'
    }]))
  .use(serve({
  port: 8082,
  verbose: true
  }))
  .use(watch({
      paths: {
        "${source}/**/*": true,
        "layout/**/*": "**/*",
      }
    }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site built!');
    }
  });