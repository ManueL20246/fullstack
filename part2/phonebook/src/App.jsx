import { useState } from 'react'
import Course from './components/course'

const Filter = ({filter, handlefilter}) => {
  return (
    <div>
        Filter shown with <input value={filter} onChange={handlefilter} />
    </div>
  )
}
const PersonsForm = ({newperson, name, number, handlename, handlenumber, text}) => {
  return (
    <form onSubmit={newperson}>
      <div>
        name: <input value={name} onChange={handlename} />
      </div><br></br>
      <div>
        number: <input value={number} onChange={handlenumber} />
      </div><br></br>
      <div>
        <button type="submit">{text}</button>
      </div>
    </form>
  )
}
const Persons = ({showperson}) => {
  return (
    <div>
      {showperson.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = newFilter === ''
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={newFilter} handlefilter={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonsForm newperson={addPerson} name={newName} number={newNumber} handlename={handleNameChange} handlenumber={handleNumberChange} text="add"/>
      <h2>Numbers</h2>
      <Persons showperson={personsToShow} />
    </div>
  )
}

export default App