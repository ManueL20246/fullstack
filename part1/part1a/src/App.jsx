import { useState } from 'react'

const Display = (props) => {
  return (
    <div> {props.counter} </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [ counter, setCounter ] = useState(0)

  /*setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  console.log('rendering.....', counter)*/

  /*const handleClick = () => {
    console.log('clicked')
  }*/

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne}
        text ='plus'
      />
      <Button onClick={decreaseByOne}
        text ='minus'
      />
      <Button onClick={setToZero}
        text ='zero'
      />
    </div>
  )
}

export default App