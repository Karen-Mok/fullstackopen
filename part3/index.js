const express = require('express') //导入express库
const morgan = require('morgan')
const app = express()

app.use(express.json())
//json-parser 中间件，功能是将请求的 JSON 数据(字符串)转化为 JavaScript 对象
//然后在调用路由处理程序之前将其附加到 request 对象的 body 属性

//3.7
//app.use(morgan('tiny'))

//3.8
/*const middleware = (request, response, next) => {
  //console.log(typeof request.body)  //此时的body是经过express.json处理得到的js对象
  //console.log(typeof JSON.stringify(request.body))  //把js对象转换为原始的json字符串
  next()
}

app.use(middleware)*/ //对于3.8来说，不需要中间件，写这个只是为了练习

morgan.token('showReqBody', function getBody (req) {
  const body =JSON.stringify(req.body)
  return body
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :showReqBody'))

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

//3.3
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  console.log(id,typeof(id))

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

//3.4
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

//3.5-3.6
const generateId = () => {
  const Id = Math.round(Math.random()*10000)
  return Id 
}

app.post('/api/persons',(request, response) => {

  const body = request.body

  //错误处理一
  if(!body.name || !body.number ) {
    return response.status(400).json({
      error : 'name or number missing'
    })
    //只有if没有else的写法，必须调用 return
    //否则代码会执行到最后，错误的person会被保存到应用中
  }

  //错误处理二
  if(persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error : 'name must be unique'
    })
  }

  const person = {
    "id" : generateId(),
    "name":body.name,
    "number":body.number
  }

  persons = persons.concat(person)

  response.json(person)

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})