import { useState } from 'react'

/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}*/
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random


//注意Button的写法，教程里是用()包围结果，另外App里面是<Button ... />，不是<Button> ... </Button>
const Button = ({ handleClick}) => (

    <button onClick={handleClick}>
      next anecdotes?
    </button>
    
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const difAnecdot = () => {
        let difRandInt = getRandomInt(6)  //7个anecdotes，选一个和现在的selected不一样的
        const res = difRandInt===selected?(6-difRandInt):difRandInt
        //console.log(res)
        setSelected(res)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={difAnecdot} />
    </div>
  )
}

export default App