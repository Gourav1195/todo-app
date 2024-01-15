import React from 'react'

function todoApp() {
  return (
    <main>
        <h1>CRUD Operations
        </h1>
        <div >
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add Task</button>
        </div>    
        <ul>
            <List />
        </ul>
    </main>
  )
}

export default todoApp