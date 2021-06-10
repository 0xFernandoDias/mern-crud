import { useState, useEffect } from 'react'
import List from "./components/List"
import Axios from 'axios'
import './App.css'

const App = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [list, setList] = useState([])
  const [showList, setShowList] = useState(false)

  const addFriend = () => {
    Axios.post('http://localhost:3001/addfriend', {
      name: name,
      age: age
    }).then(() => alert("It was added with success")).catch(() => alert("It didn't work..."))
  }

  const updateFriend = (id) => {
    const newName = prompt("Enter new name")
    const newAge = prompt("Enter new age")

    Axios.put('http://localhost:3001/update', { newName: newName, newAge: newAge, id: id })
}

  const binaryOption = () => {
    if (showList === false) {
      setShowList(true)
    } else {
      setShowList(false)
    }
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((res) => setList(res.data)).catch(() => console.log("Error"))
  }, [list])

  const deleteFriend = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
}

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

        <div className="buttons">
          <button type="button"
            className="enter-button btn btn-dark"
            onClick={addFriend}
          >
            Add Friend
          </button>

          <button type="button"
            className="enter-button btn btn-secondary"
            onClick={() => binaryOption()}
          >
            {showList ? "Hide the list" : "See the list"}
          </button>
        </div>

        </form>
      </div>

      <List className="list-style" array={list} showList={showList} upd={updateFriend} del={deleteFriend}/>

    </div>
  )
}

export default App