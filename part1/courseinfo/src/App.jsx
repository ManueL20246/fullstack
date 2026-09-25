import { useState } from 'react'

// --- Composant UNICAFE ---

const Display = (props) => <h2>{props.name}</h2> 
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if (props.value1 === 0 && props.value2 === 0 && props.value3 === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table border={0}>
        <tbody>
          <StatisticLine text="Good" value={props.value1} />
          <StatisticLine text="Neutral" value={props.value2} />
          <StatisticLine text="Bad" value={props.value3} />
          <StatisticLine text="All" value={props.total} />
          <StatisticLine text="Average" value={props.ave} />
          <StatisticLine text="Positive" value={`${props.positive} %`}/>
        </tbody>
      </table>
    </div>
  )
}
const Button = (props) => {
  const {handleClick, text} = props
  //console.log('props value is', props)
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Unicafe = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = good+neutral+bad
  let avg = (good-bad)/sum
  let pos = (good/sum)*100

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleAverage = () => {
    if (good === 0 && neutral === 0 && bad === 0){
      return avg = 0, pos = 0
    }
    return avg
  }
  const setToZero = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  return (
    <div>
      <Display name="Give feedback"/>
      <Button handleClick={handleGoodClick} text="Good"/>&nbsp;
      <Button handleClick={handleNeutralClick} text="Neutral"/>&nbsp;
      <Button handleClick={handleBadClick} text="Bad"/>&nbsp;
      <Button handleClick={setToZero} text="Reset"/><br />
      <Display name="Statistics"/>
      <Statistics value1={good} value2={neutral} value3={bad} total={sum} ave={handleAverage()} positive={pos}/>
    </div>
  )
}


// --- Composant ANECDOTE ---

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const tab = Array(anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(tab.fill(0))

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }
  
  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleAnecdoteClick}>next anecdote</button><br/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Gestion Unicafe</h1>
      <Unicafe />
      <hr />
      <h1>Gestion Anecdote</h1>
      <Anecdotes />
    </div>
  )
}

export default App