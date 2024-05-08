const express = require('express') //导入express库
const app = express()

app.use(express.json())
//json-parser 的功能是将请求的 JSON 数据转化为 JavaScript 对象
//然后在调用路由处理程序之前将其附加到 request 对象的 body 属性

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
  console.dir(request.ip)
  //console.dir(request)
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})


//3.1
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

//3.2
app.get('/info', (request, response) => {

  // 模板字符串``
  const res = `<p>Phonebook has info for ${persons.length} people</p><p>${Date()}</p>`
  console.log(res)
  response.send(res)

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})