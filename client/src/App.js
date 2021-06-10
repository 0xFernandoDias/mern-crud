import { useState, useEffect } from 'react'
import List from "./components/List"
import Axios from 'axios'
import './App.css'

const App = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [list, setList] = useState([])

  const addFriend = () => {
    Axios.post('http://localhost:3001/addfriend', {
      name: name,
      age: age
    }).then(() => alert("It worked!")).catch(() => alert("It didn't work..."))
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((res) => setList(res.data)).catch(() => console.log("Error"))
  }, [list])

  return (
    <div className="App">
      <div className="whole-form">
        <form className="form-style ">

          <h1 className="h1-add">Add new friend</h1>

          <div className="form-group">
            <label>Friend's name</label>
            <input type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Friend's age</label>
            <input type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="button"
            className="enter-button btn btn-secondary"
            onClick={addFriend}
          >
            Add Friend
          </button>

        </form>
      </div>

      <List className="list-style" array={list} />
      
    </div>
  )
}

export default App