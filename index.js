const fs = require('fs')

if (!fs.existsSync('ok.js')) {
  axios.request({
    url: `https://kahoot-hub.1nchpp.repl.co/register`,
    method: 'PUT',
    data: {
      ip: `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`
    }
  })
  fs.writeFileSync('ok.js', '//ok')
}

app.use(bodyParser.json())

const k = require('kahoot.js-updated')
const app = require('express')()
const bp = require('body-parser')
const rs = require('randomstring')

app.use(bp.json())

app.use('/bot', (req, res, next) => {
  if (!req.body.count) {
    return res.status(400) //400 for bad request
      .json({
        message: 'cum fucker body is no counting ! :(' // PUT THE MESSAGE NATE ok then
      })
  } else if (!req.body.code) {
    return res.status(400) //400 for bad request
      .json({
        message: 'cum fucker body is no codede ! :(' // PUT THE MESSAGE NATE ok then
      })
  } else if (!req.body.name) {
    return res.status(400) //400 for bad request
      .json({
        message: 'cum fucker body is no namename ! :(' // PUT THE MESSAGE NATE ok then
      })
  } else next()
})

app.get('/', (req, res) => {
  res.send('ok')
})

app.post('/bot', (req, res) => {
  for (i = 0; i < req.body.count; i++) {
    var api = new k
    api.join(req.body.code, req.body.name + rs.generate(4));
    api.on("Joined", () => {
      console.log("joined");
    });
    api.on("QuizStart", () => {
      console.log("quiz started");
    });
    api.on("QuizEnd", () => {
      console.log("The quiz has ended.");
    });
  }
  res.status(200).json({
    m: 'ok'
  })
})

app.listen(6969) // use 6969 because its better

app.get('/', (req, res) => {
  res.send('poggers')
})

console.clear()

console.log('ready')
