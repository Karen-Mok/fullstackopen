/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*
const App = (props) => {
  const { notes } = props

  /*return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  )*/

  /*return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )*/

/*  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
    </div>
  )
}*/

/*不再在App.js里直接定义Note组件了，放到components里去了
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}*/

/*import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App;*/

//2.1-2.4
/*
const Course =({name,parts}) => {
  /*
  const total = parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    return s.exercises+p.exercises; //这样写不对，一开始s,p都是js对象，但第二个s就是纯数了，没有属性了。
  })*/
/*
  const total = parts.map(part=>part.exercises).reduce((s, p) => {  //先把对象数组转换为纯数数组
    console.log('what is happening', s, p)  //s暂存求和结果,p指向下一个元素
    return s+p;
  })

  return(
    <div>
      <h2>{name}</h2>
      {parts.map(
        part =>(<p key={part.id}>{part.name} {part.exercises}</p>) 
      )}

      <p><strong>total of {total} exercises</strong></p>
    </div>
  )
}*/

/*2.1-2.3
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course name={course.name} parts={course.parts} />
}*/

//2.5
import Course from './components/Course'

//2.4
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  //注意：ourses.map()里的组件Course直接写就行了，不要用{}包裹
  return (
    <div>
      <h1>Web Development curriculum</h1>
      {courses.map(course => 
        <Course name={course.name} parts={course.parts} />)
      }
    </div>
  )
}

export default App;
