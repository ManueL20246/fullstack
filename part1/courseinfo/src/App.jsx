import { useState } from "react"

const Display = (props) => <h1>{props.name}</h1> 

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

const App = () => {
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
      <Display name="Give feedback"/><br></br>
      <Button handleClick={handleGoodClick} text="Good"/>&nbsp;
      <Button handleClick={handleNeutralClick} text="Neutral"/>&nbsp;
      <Button handleClick={handleBadClick} text="Bad"/>&nbsp;
      <Button handleClick={setToZero} text="Reset"/><br></br>
      <Display name="Statistics"/>
      <Statistics value1={good} value2={neutral} value3={bad} total={sum} ave={handleAverage()} positive={pos}/>
    </div>
  )
}

export default App