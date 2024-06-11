import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

/*  1.7: unicafe step2
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks,setAll] = useState([])

  const goodClick = () => {
    setAll(allClicks.concat('g'))
    setGood(good + 1)
  }

  const neutralClick = () => {
    setAll(allClicks.concat('n'))
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setAll(allClicks.concat('b'))
    setBad(bad + 1)
  }

  const calc = () => {
    return [(good-bad)/allClicks.length,good/allClicks.length]
  }

  /* //错误写法
  const funcClick = () => {
    switch({text}) {
        case 'good':
            setGood(good + 1);
            break;
        case 'neutral':
            setNeutral(neutral+1)
            break;
        case 'bad':
            setBad(bad + 1);
            break;
        default:
            alert('what?');
    }
  }*/
/*
  return (
    <div>
    <h1>give feedback</h1>
    <Button handleClick={goodClick} text={'good'} />
    <Button handleClick={neutralClick} text={'neutral'} />
    <Button handleClick={badClick} text={'bad'} />
    <h1>statistics</h1>
    <p> good {good} </p>
    <p> neutral {neutral} </p>
    <p> bad {bad} </p>
    <p> all  {allClicks.length}</p>
    <p> average {calc()[0]} </p>
    <p> positive {calc()[1]*100}% </p>
    </div>
  )
}*/

/* 1.8-1.9
const Statistics = ({good,neutral,bad,allClicks,calc}) => {
    if (allClicks.length === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    return (
    <div>
        <p> good {good} </p>
        <p> neutral {neutral} </p>
        <p> bad {bad} </p>
        <p> all  {allClicks.length}</p>
        <p> average {calc()[0]} </p>
        <p> positive {calc()[1]*100}% </p>
    </div>
    )
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const [allClicks,setAll] = useState([])
  
    const goodClick = () => {
      setAll(allClicks.concat('g'))
      setGood(good + 1)
    }
  
    const neutralClick = () => {
      setAll(allClicks.concat('n'))
      setNeutral(neutral + 1)
    }
  
    const badClick = () => {
      setAll(allClicks.concat('b'))
      setBad(bad + 1)
    }
  
    const calc = () => {
      return [(good-bad)/allClicks.length,good/allClicks.length]
    }

    return (
        <div>
        <h1>give feedback</h1>
        <Button handleClick={goodClick} text={'good'} />
        <Button handleClick={neutralClick} text={'neutral'} />
        <Button handleClick={badClick} text={'bad'} />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} calc={calc} />
        </div>
    )
}
*/

/*1.10
const StatisticLine = ({text,value}) => {

    //注意，{text}并不是在props中赋值的字符串，此时它是一个对象，需要访问其text属性
    if ({text}.text === "positive") {
        return (
            <p> {text} {value}%</p>
        )
    }

    //console.log({text},typeof({text}),{text}.text) 

    return (
        <p> {text} {value}</p>
    )
}

const Statistics = ({good,neutral,bad,allClicks,calc}) => {
    if (allClicks.length === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    return (
    <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={allClicks.length} />
        <StatisticLine text="average" value={calc()[0]} />
        <StatisticLine text="positive" value={calc()[1]*100} />
    </div>
    )
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const [allClicks,setAll] = useState([])
  
    const goodClick = () => {
      setAll(allClicks.concat('g'))
      setGood(good + 1)
    }
  
    const neutralClick = () => {
      setAll(allClicks.concat('n'))
      setNeutral(neutral + 1)
    }
  
    const badClick = () => {
      setAll(allClicks.concat('b'))
      setBad(bad + 1)
    }
  
    const calc = () => {
      return [(good-bad)/allClicks.length,good/allClicks.length]
    }

    return (
        <div>
        <h1>give feedback</h1>
        <Button handleClick={goodClick} text={'good'} />
        <Button handleClick={neutralClick} text={'neutral'} />
        <Button handleClick={badClick} text={'bad'} />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} calc={calc} />
        </div>
    )
}*/

const StatisticLine = ({text,value}) => {

  //注意，{text}并不是在props中赋值的字符串，此时它是一个对象，需要访问其text属性
  if ({text}.text === "positive") {
      return (
          <tr>
          <td> {text} </td>
          <td>{value}%</td>
          </tr>
      )
  }

  return (
    <tr>
    <td> {text} </td>
    <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad,allClicks,calc}) => {
  if (allClicks.length === 0) {
      return (
          <div>
              No feedback given
          </div>
      )
  }

  return (
  <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={allClicks.length} />
      <StatisticLine text="average" value={calc()[0]} />
      <StatisticLine text="positive" value={calc()[1]*100} />
  </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks,setAll] = useState([])

  const goodClick = () => {
    setAll(allClicks.concat('g'))
    setGood(good + 1)
  }

  const neutralClick = () => {
    setAll(allClicks.concat('n'))
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setAll(allClicks.concat('b'))
    setBad(bad + 1)
  }

  const calc = () => {
    return [(good-bad)/allClicks.length,good/allClicks.length]
  }

  return (
      <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text={'good'} />
      <Button handleClick={neutralClick} text={'neutral'} />
      <Button handleClick={badClick} text={'bad'} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} calc={calc} />
      </div>
  )
}

export default App