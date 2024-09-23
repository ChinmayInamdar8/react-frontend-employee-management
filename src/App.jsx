import { useState } from 'react'
import './App.css'
import ME from './assets/ME.svg'

function App() {
  const [users, setusers] = useState([
    {
      name: "Chinmay",
      id: "34",
      status: "working"
    }
  ]);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [status, setStatus] = useState('');

  return (
    <>
      <a target="_blank" className='logo, logo-spin'>
        <img src={ME} className="logo react" alt="React logo" />
      </a>

      <h1>ManageEmp</h1>
      <input type="text" placeholder='Enter Employee name' onChange={(e) => {
        setName(e.target.value);
      }} />
      <input type="number" name="id" placeholder='Enter id' onChange={(e) => {
        setId(e.target.value);
      }} />
      <input type="text" name="id" placeholder='Enter status' className='status' onChange={(e) => {
        setStatus(e.target.value);
      }} />
      <button id='btn' onClick={() => {
        if (name !== "" && id != null && status != "") {
          if (status == "working" || status == "not working") {
            setusers([...users, {
              name: name,
              id: id,
              status: status
            }])
          }
          else {
            alert("Status should be 'working' or 'not working'");
          }
        }
        else {
          console.log(name, id, status);
          alert("provide correct details");
        }

      }}>Submit</button>
      {users.map((user) => {
        return <DisplayUser key={user.id} user={user} users={users} setUsers={setusers} />
      })}
    </>
  )
}

function DisplayUser({ user, users, setUsers }) {
  return (
    <div className='card'>
      <div className="first">
        <div className="inner-card">
          <p>Name</p>
          <p>Id</p>
          <p>Status</p>
        </div>
      </div>
      <div className="second">
        <div className="inner-card">
          <p className='title'>{user.name}</p>
          <p className='id'>{user.id}</p>
          <p>{user.status}</p>
        </div>
      </div>

      <button className='button' onClick={() => {
        const updatedUsers = users.map(u => {
          if (u.id === user.id) {
            return { ...u, status: u.status === "working" ? "not working" : "working" };
          }
          return u;
        });
        setUsers(updatedUsers);
      }}>
        Change status
      </button>
    </div>
  );
}

export default App
