import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>
/*{
  return (
    <div>{counter}</div>
  )
}*/
const Button = ({onSmash, text}) => <button onClick={onSmash}> {text} </button>
/*{
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}*/

const App = () => {
  const [counter, setCounter] = useState(0)

  /*setTimeout(
    () => setCounter(counter + 1), 
    1000 
  )
  const handleClick = () => {
    console.log('cliked')
  }*/
  const increaseByOne =  () => setCounter(counter + 1)
  const decreaseByOne =  () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne}
        text = 'plus'
      />
      <Button onClick={decreaseByOne}
        text = 'minus'
      />
      <Button onClick={setToZero}
        text = 'Zero'
      />
    </div>
  )
}

export default App