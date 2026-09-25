import React from 'react'

const Header = ({course}) => {
  return (
    <div>
      <h2>{course}</h2>
    </div>
  )
}
const Part = ({part}) => {
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}
const Content = ({parts}) => {
  return (
    <div>
     {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}
const Total = ({parts}) => {
  const result = parts.reduce((total, part) => total + part.exercises, 0)
  return (
    <div>
      <p><b>The total number of exercises is {result} </b></p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course