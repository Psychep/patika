const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    ctx.accepts('text/html')
    ctx.is('text/html')
    ctx.body = 'Hello Koa';
    const url = ctx.url;
    if (url == "/") ctx.body = "<p>Anasayfa</p>"
    else if (url == "/about") ctx.body = `
                    Hakkımda Sayfasına hoşgeldin `
    else if (url == "/iletisim ") ctx.body = "İletişim sayfasına Hoşgeldin"
    else ctx.body = `
                    $ {
                        url.slice(1)
                    }
                    Sayfasını aradığına emin misin ? Ben böyle bir şey bulamadım `

});

app.listen(3000);