/*
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') 
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <>
    <div className="container">
      <h1>ToDos Data</h1>
      <div className="todo-list">
      { todos.map((obj,index) => (
         <div key={index} className={`todo ${obj.completed ? 'Completed': 'Incompleted'}`}>
         <h3>ToDos Name : {obj.title}</h3>
         <p>Completed Status : {obj.completed ? 'Completed': 'Incompleted'}</p>
         </div>
    ))}
    </div>
  </div>
    </>
  );
}

export default App;
*/


/*
import React, { useState, useEffect } from 'react';
import './App.css';

function TodoItem({ index, title, completed }) {
  return (
    <tr className={`todo ${completed ? 'completed' : 'incompleted'}`}>
      <td>{index}</td>
      <td>{title}</td>
      <td>{completed ? 'Completed' : 'Incomplete'}</td>
    </tr>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') 
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => alert('Error fetching todos:', error));
  }, []);

  return (
    <div className="container">
      <h1>ToDos Data</h1>
      <table className="todo-list">
        <thead>
          <tr>
            <th>Todos NO.</th>
            <th className= "todoss">ToDos Name</th>
            <th>Completed Status</th>
          </tr>
        </thead>
        <tbody>

          {todos.map((todo, index) => (
            <TodoItem key={index} index={index+1} title={todo.title} completed={todo.completed} />
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default App;
*/

// import React, { useState, useEffect } from 'react';
// import './App.css';
 
// function TodoItem({ index, title, completed }) {
//   return (
//     <tr className={`todo ${completed ? 'completed' : 'incompleted'}`}>
//       <td>{index}</td>
//       <td>{title}</td>
//       <td>{completed ? 'Completed' : 'Incomplete'}</td>
//     </tr>
//   );
// }
 
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [error, setError] = useState(false);
 
//   useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/todos123') // Incorrect URL intentionally
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => setTodos(data))
//       .catch(error => {
//         setError(true);
//         console.error('Error fetching todos:', error);
//       });
//   }, []);
 
//   return (
//     <div className="container">
//       <h1>ToDos Data</h1>
//       {error ? (
//         <div className="error-alert">You entered the wrong URL.</div>
//       ) : (
//         <table className="todo-list">
//           <thead>
//             <tr>
//               <th>Todos NO.</th>
//               <th className="todoss">ToDos Name</th>
//               <th>Completed Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {todos.map((todo, index) => (
//               <TodoItem key={index} index={index+1} title={todo.title} completed={todo.completed} />
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
 
// export default App;


/*
import React, { useState, useEffect } from 'react';
import './App.css';
 
function TodoItem({ index, title, completed }) {
  return (
    <tr className={`todo ${completed ? 'completed' : 'incompleted'}`}>
      <td>{index}</td>
      <td>{title}</td>
      <td>{completed ? 'Completed' : 'Incomplete'}</td>
    </tr>
  );
}
 
function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
 
  useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          setError(true);
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
      if (error) {
      alert('You entered the wrong URL');
    }
  }, [error]);
 
  return (
    <div className="container">
      <h1>ToDos Data</h1>
      <table className="todo-list">
        <thead>
          <tr>
            <th>Todos NO.</th>
            <th className="todoss">ToDos Name</th>
            <th>Completed Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index+1} title={todo.title} completed={todo.completed} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default App;
*/

/*
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          setError(true);
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, [error]);


  const handleCreate = () => {
    if (!newTodo) return;
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false 
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };


  const handleUpdate = (id, updatedTitle,updatedStatus) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: updatedTitle, completed: updatedStatus};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <div className="container">
      <h1>To-Dos Data</h1>
      <div className="button-container">
        <input
          type="text"
          placeholder="Enter your todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleCreate}>Create</button>

      </div>
      <table className="todo-list">
        <thead>
          <tr>
            <th>Todos NO.</th>
            <th>ToDos Name</th>
            <th>Completed Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td> 
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Completed' : 'Incomplete'}</td>
              <td>
              <div className= "action-button">
              <button className="update-button"
              onClick={() => {
                const newTitle = prompt('Enter new todo title');
                const newStatus = prompt('Is the todo completed?');
                handleUpdate(todo.id, newTitle, newStatus)}}>Update</button>
                <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
*/


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [newTodoStatus, setNewTodoStatus] = useState('');
//   const [updateId, setUpdateId] = useState(null);
//   const [updateTitle, setUpdateTitle] = useState('');
//   const [updateStatus, setUpdateStatus] = useState('');

//   useEffect(() => {
//     fetch(' http://localhost:8001/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => setTodos(data))
//       .catch(error => console.error('Error fetching todos:', error));
//   }, []);


//   const handleCreate = () => {
//     if (!newTodoTitle || !newTodoStatus) return;
//     const newTodoItem = {
//       id: todos.length + 1,
//       title: newTodoTitle,
//       completed: newTodoStatus === 'Completed'
//     };
//     setTodos([...todos, newTodoItem]);
//     setNewTodoTitle('');
//     setNewTodoStatus('');
//   };


//   const handleUpdate = (id) => {
//     const updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, title: updateTitle, completed: updateStatus === 'Completed' };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//     setUpdateId(null);
//     setUpdateTitle('');
//     setUpdateStatus('');
//   };

//   const handleDelete = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const handleUpdateClick = (id, title, completed) => {
//     setUpdateId(id);
//     setUpdateTitle(title);
//     setUpdateStatus(completed ? 'Completed' : 'Incomplete');
//   };

//   return (
//     <div className="container">
//       <h1>To-Dos Data</h1>
//       <div className="button-container">
//         <input
//           type="text"
//           placeholder="Enter your todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
//           <option value="">Select Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//         <button onClick={handleCreate}>Create</button>
//       </div>
//       <table className="todo-list">
//         <thead>
//           <tr>
//             <th>Todos NO.</th>
//             <th>ToDos Name</th>
//             <th>Completed Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo, index) => (
//             <tr key={todo.id}>
//               <td>{index + 1}</td> 
//               <td>{updateId === todo.id ? (
//                   <input type="text" value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} />
//                 ) : (
//                   todo.title
//                 )}
//               </td>
//               <td>{updateId === todo.id ? (
//                   <select value={updateStatus} onChange={(e) => setUpdateStatus(e.target.value)}>
//                     <option value="Completed">Completed</option>
//                     <option value="Incomplete">Incomplete</option>
//                   </select>
//                 ) : (
//                   todo.completed ? 'Completed' : 'Incomplete'
//                 )}
//               </td>
//               <td>
//                 <div className= "action-button">
//                   {updateId === todo.id ? (
//                     <button className="update-button" onClick={() => handleUpdate(todo.id)}>Save</button>
//                   ) : (
//                     <button className="update-button" onClick={() => handleUpdateClick(todo.id, todo.title, todo.completed)}>Update</button>
//                   )}
//                   <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [newTodoStatus, setNewTodoStatus] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = () => {
//     fetch('http://localhost:7001/todos')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => setTodos(data))
//       .catch(error => console.error('Error fetching todos:', error));
//   };

//   const handleCreate = () => {
//     if (!newTodoTitle || !newTodoStatus) return;
//     const newTodoItem = {
//       userId: todos.length + 1,
//       id: todos.length + 1,
//       title: newTodoTitle,
//       completed: newTodoStatus === 'Completed'
//     };
//     fetch('http://localhost:7001/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTodoItem),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to create todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); // Refresh todos after creation
//       setNewTodoTitle('');
//       setNewTodoStatus('');
//     })
//     .catch(error => console.error('Error creating todo:', error));
//   };

//   const handleUpdate = (id, updatedTitle, updatedStatus) => {
//     const updatedTodo = {
//       title: updatedTitle,
//       completed: updatedStatus === 'Completed'
//     };
//     fetch(`http://localhost:7001/todos/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedTodo),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to update todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); // Refresh todos after update
//     })
//     .catch(error => console.error('Error updating todo:', error));
//   };

//   const handleDelete = (id) => {
//     fetch(`http://localhost:7001/todos/${id}`, {
//       method: 'DELETE',
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to delete todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); // Refresh todos after deletion
//     })
//     .catch(error => console.error('Error deleting todo:', error));
//   };

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <div className="button-container">
//         <input
//           type="text"
//           placeholder="Enter your todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
//           <option value="">Select Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//         <button onClick={handleCreate}>Create</button>
//       </div>
//       <table className="todo-list">
//         <thead>
//           <tr>
//             <th>To-Do No.</th>
//             <th>To-Do Name</th>
//             <th>Completed Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo, index) => (
//             <tr key={todo.id}>
//               <td>{todo.id}</td>
//               <td>{todo.title}</td>
//               <td>{todo.completed ? 'Completed' : 'Incomplete'}</td>
//               <td>
//                 <button onClick={() => handleUpdate(todo.id, todo.title, todo.completed ? 'Completed' : 'Incomplete')}>Update</button>
//                 <button onClick={() => handleDelete(todo.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [newTodoStatus, setNewTodoStatus] = useState('');
//   const [updatedTodoTitle, setUpdatedTodoTitle] = useState('');
//   const [updatedTodoStatus, setUpdatedTodoStatus] = useState('');
//   const [updatingTodoId, setUpdatingTodoId] = useState(null);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = () => {
//     fetch('http://localhost:7001/todos')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => setTodos(data))
//       .catch(error => console.error('Error fetching todos:', error));
//   };

//   const handleCreate = () => {
//     if (!newTodoTitle || !newTodoStatus) return;
//     const randomUserId = Math.floor(Math.random() *1000);
//     const newTodoItem = {
//       userId: randomUserId,
//       id: todos.length + 1,
//       title: newTodoTitle,
//       completed: newTodoStatus === 'Completed'
//     };
//     fetch('http://localhost:7001/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTodoItem),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to create todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); 
//       setNewTodoTitle('');
//       setNewTodoStatus('');
//     })
//     .catch(error => console.error('Error creating todo:', error));
//   };

//   const handleUpdateButtonClick = (id, title, completed) => {
//     setUpdatingTodoId(id);
//     setUpdatedTodoTitle(title);
//     setUpdatedTodoStatus(completed ? 'Completed' : 'Incomplete');
//   };

//   const handleUpdate = () => {
//     if (!updatedTodoTitle || !updatedTodoStatus) return;
//     const updatedTodoItem = {
//       title: updatedTodoTitle,
//       completed: updatedTodoStatus === 'Completed'
//     };
//     fetch(`http://localhost:7001/todos/${updatingTodoId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedTodoItem),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to update todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); 
//       setUpdatingTodoId(null); 
//       setUpdatedTodoTitle(''); 
//       setUpdatedTodoStatus(''); 
//     })
//     .catch(error => console.error('Error updating todo:', error));
//   };

//   const handleDelete = (id) => {
//     fetch(`http://localhost:7001/todos/${id}`, {
//       method: 'DELETE',
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to delete todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); 
//     })
//     .catch(error => console.error('Error deleting todo:', error));
//   };

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <div className="button-container">
//         <input
//           type="text"
//           placeholder="Enter your todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
//           <option value="">Select Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//         <button className="update-button" onClick={handleCreate}>Create</button>
//       </div>
//       <table className="todo-list">
//         <thead>
//           <tr>
//             <th>To-Do No.</th>
//             <th>To-Do Name</th>
//             <th>Completed Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo) => (
//             <tr key={todo.id}>
//               <td>{todo.id}</td>
//               <td>{updatingTodoId === todo.id ? (
//                 <input
//                   type="text"
//                   value={updatedTodoTitle}
//                   onChange={(e) => setUpdatedTodoTitle(e.target.value)}
//                 />
//               ) : (
//                 todo.title
//               )}</td>
//               <td>{updatingTodoId === todo.id ? (
//                 <select value={updatedTodoStatus} onChange={(e) => setUpdatedTodoStatus(e.target.value)}>
//                   <option value="Completed">Completed</option>
//                   <option value="Incomplete">Incomplete</option>
//                 </select>
//               ) : (
//                 todo.completed ? 'Completed' : 'Incomplete'
//               )}</td>
//               <td className="action-button">
//                 {updatingTodoId === todo.id ? (
//                   <button className="update-button" onClick={handleUpdate}>Save</button>
//                 ) : (
//                   <button className="update-button" onClick={() => handleUpdateButtonClick(todo.id, todo.title, todo.completed ? 'Completed' : 'Incomplete')}>Update</button>
//                 )}
//                 <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [newTodoStatus, setNewTodoStatus] = useState('');
//   const [updatedTodoTitle, setUpdatedTodoTitle] = useState('');
//   const [updatedTodoStatus, setUpdatedTodoStatus] = useState('');
//   const [updatingTodoId, setUpdatingTodoId] = useState(null);
//   const [filter,setFilter] = useState('All');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = () => {
//     fetch('http://localhost:7001/todos')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => setTodos(data))
//       .catch(error => console.error('Error fetching todos:', error));
//   };

//   const handleCreate = () => {
//     if (!newTodoTitle || !newTodoStatus) return;
//     const randomUserId = Math.floor(Math.random() *100);
//     const newTodoItem = {
//       userId: randomUserId,
//       id: todos.length + 1,
//       title: newTodoTitle,
//       completed: newTodoStatus === 'Completed'
//     };
//     fetch('http://localhost:7001/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTodoItem),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to create todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); 
//       setNewTodoTitle('');
//       setNewTodoStatus('');
//     })
//     .catch(error => console.error('Error creating todo:', error));
//   };

//   const handleUpdateButtonClick = (id, title, completed) => {
//     setUpdatingTodoId(id);
//     setUpdatedTodoTitle(title);
//     setUpdatedTodoStatus(completed ? 'Completed' : 'Incomplete');
//   };

//   const handleUpdate = () => {
//     if (!updatedTodoTitle || !updatedTodoStatus) return;
//     const updatedTodoItem = {
//       title: updatedTodoTitle,
//       completed: updatedTodoStatus === 'Completed'
//     };
//     fetch(`http://localhost:7001/todos/${updatingTodoId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedTodoItem),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to update todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); 
//       setUpdatingTodoId(null); 
//       setUpdatedTodoTitle(''); 
//       setUpdatedTodoStatus(''); 
//     })
//     .catch(error => console.error('Error updating todo:', error));
//   };

//   const handleDelete = (id) => {
//     fetch(`http://localhost:7001/todos/${id}`, {
//       method: 'DELETE',
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to delete todo');
//       }
//       return response.json();
//     })
//     .then(() => {
//       fetchTodos(); 
//     })
//     .catch(error => console.error('Error deleting todo:', error));
//   };

//   return (
//     <div className="container">
//       <h1>To-Do Data</h1>
//       <div className="button-container">
//         <label><strong>ToDo : </strong></label>
//         <input
//           type="text"
//           placeholder="Enter your todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
//           <option value="">Select Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//         <button className="update-button" onClick={handleCreate}>Create</button>
//       </div>
//       <div className="filter-container">
//         <label><strong>Status: </strong></label>
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="Status">status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//       </div>
//       <table className="todo-list">
//         <thead>
//           <tr>
//             <th>To-Do No.</th>
//             <th>To-Do Name</th>
//             <th>Completed Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos
//               .filter(todo => {
//                 if(filter ==='Status'){
//                   return true;
//                 } else if (filter ==='Completed') {
//                   return todo.completed;
//                 } else {
//                   return !todo.completed;
//                 }
//               })
//                 .map((todo) => (
//                   <tr key={todo.id}>
//                     <td>{todo.id}</td>
//                     <td>{updatingTodoId === todo.id ? (
//                       <input
//                         type="text"
//                         value={updatedTodoTitle}
//                         onChange={(e) => setUpdatedTodoTitle(e.target.value)}
//                       />
//                     ) : (
//                       todo.title
//               )}</td>
//               <td>{updatingTodoId === todo.id ? (
//                 <select value={updatedTodoStatus} onChange={(e) => setUpdatedTodoStatus(e.target.value)}>
//                   <option value="Completed">Completed</option>
//                   <option value="Incomplete">Incomplete</option>
//                 </select>
//               ) : (
//                 todo.completed ? 'Completed' : 'Incomplete'
//               )}</td>
//               <td className="action-button">
//                 {updatingTodoId === todo.id ? (
//                   <button className="update-button" onClick={handleUpdate}>Save</button>
//                 ) : (
//                   <button className="update-button" onClick={() => handleUpdateButtonClick(todo.id, todo.title, todo.completed ? 'Completed' : 'Incomplete')}>Update</button>
//                 )}
//                 <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


// Using Data.json

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [newTodoStatus, setNewTodoStatus] = useState('');
//   const [updatedTodoTitle, setUpdatedTodoTitle] = useState('');
//   const [updatedTodoStatus, setUpdatedTodoStatus] = useState('');
//   const [updatingTodoId, setUpdatingTodoId] = useState(null);
//   const [filter, setFilter] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = () => {
//     fetch('http://localhost:7001/todos')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => setTodos(data))
//       .catch(error => console.error('Error fetching todos:', error));
//   };

//   const handleCreate = () => {
//     if (!newTodoTitle || !newTodoStatus) return;
//     const randomUserId = Math.floor(Math.random() * 100);
//     const newTodoItem = {
//       userId: randomUserId,
//       id: todos.length + 1,
//       title: newTodoTitle,
//       completed: newTodoStatus === 'Completed'
//     };
//     fetch('http://localhost:7001/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTodoItem),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to create todo');
//         }
//         return response.json();
//       })
//       .then(() => {
//         fetchTodos();
//         setNewTodoTitle('');
//         setNewTodoStatus('');
//       })
//       .catch(error => console.error('Error creating todo:', error));
//   };

//   const handleUpdateButtonClick = (id, title, completed) => {
//     setUpdatingTodoId(id);
//     setUpdatedTodoTitle(title);
//     setUpdatedTodoStatus(completed ? 'Completed' : 'Incomplete');
//   };

//   const handleUpdate = () => {
//     if (!updatedTodoTitle || !updatedTodoStatus) return;
//     const updatedTodoItem = {
//       title: updatedTodoTitle,
//       completed: updatedTodoStatus === 'Completed'
//     };
//     fetch(`http://localhost:7001/todos/${updatingTodoId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedTodoItem),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to update todo');
//         }
//         return response.json();
//       })
//       .then(() => {
//         fetchTodos();
//         setUpdatingTodoId(null);
//         setUpdatedTodoTitle('');
//         setUpdatedTodoStatus('');
//       })
//       .catch(error => console.error('Error updating todo:', error));
//   };

//   const handleDelete = (id) => {
//     fetch(`http://localhost:7001/todos/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to delete todo');
//         }
//         return response.json();
//       })
//       .then(() => {
//         fetchTodos();
//       })
//       .catch(error => console.error('Error deleting todo:', error));
//   };

//   return (
//     <div className="container">
//       <h1>To-Do Data</h1>
//       <div className="button-container">
//         <label><strong>ToDo : </strong></label>
//         <input
//           type="text"
//           placeholder="Enter your todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
//           <option value="">Select Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//         <button className="update-button" onClick={handleCreate}>Create</button>
//       </div>
//       <div className="filter-container">
//         <label><strong>Status: </strong></label>
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//       </div>
//       <div className="search-container">
//         <label><strong>ToDo search: </strong></label>
//         <input
//           type="text"
//           placeholder="Search todo..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <table className="todo-list">
//         <thead>
//           <tr>
//             <th>To-Do No.</th>
//             <th>To-Do Name</th>
//             <th>Completed Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos
//             .filter(todo => {
//               if (filter === 'All') {
//                 return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               } else if (filter === 'Completed') {
//                 return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               } else {
//                 return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               }
//             })
//             .map((todo) => (
//               <tr key={todo.id}>
//                 <td>{todo.id}</td>
//                 <td>{updatingTodoId === todo.id ? (
//                   <input
//                     type="text"
//                     value={updatedTodoTitle}
//                     onChange={(e) => setUpdatedTodoTitle(e.target.value)}
//                   />
//                 ) : (
//                   todo.title
//                 )}</td>
//                 <td>{updatingTodoId === todo.id ? (
//                   <select value={updatedTodoStatus} onChange={(e) => setUpdatedTodoStatus(e.target.value)}>
//                     <option value="Completed">Completed</option>
//                     <option value="Incomplete">Incomplete</option>
//                   </select>
//                 ) : (
//                   todo.completed ? 'Completed' : 'Incomplete'
//                 )}</td>
//                 <td className="action-button">
//                   {updatingTodoId === todo.id ? (
//                     <button className="update-button" onClick={handleUpdate}>Save</button>
//                   ) : (
//                     <button className="update-button" onClick={() => handleUpdateButtonClick(todo.id, todo.title, todo.completed ? 'Completed' : 'Incomplete')}>Update</button>
//                   )}
//                   <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       {todos.filter(todo => {
//         if (filter === 'All') {
//           return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         } else if (filter === 'Completed') {
//           return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         } else {
//           return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         }
//       }).length === 0 && (
//         <p className="search"><strong>No todo is found with this data!</strong></p>
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [newTodoStatus, setNewTodoStatus] = useState('');
//   const [updatedTodoTitle, setUpdatedTodoTitle] = useState('');
//   const [updatedTodoStatus, setUpdatedTodoStatus] = useState('');
//   const [updatingTodoId, setUpdatingTodoId] = useState(null);
//   const [filter, setFilter] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(data => setTodos(data))
//       .catch(error => console.error('Error fetching todos:', error));
//   };

//   const handleCreate = () => {
//     if (!newTodoTitle || !newTodoStatus) return;
//     const newTodoItem = {
//       title: newTodoTitle,
//       completed: newTodoStatus === 'Completed'
//     };
//     fetch('https://jsonplaceholder.typicode.com/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTodoItem),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to create todo');
//         }
//         return response.json();
//       })
//       .then((newTodo) => {
//         setTodos([...todos, newTodo]);
//         setNewTodoTitle('');
//         setNewTodoStatus('');
//       })
//       .catch(error => console.error('Error creating todo:', error));
//   };

//   const handleUpdateButtonClick = (id, title, completed) => {
//     setUpdatingTodoId(id);
//     setUpdatedTodoTitle(title);
//     setUpdatedTodoStatus(completed ? 'Completed' : 'Incomplete');
//   };

//   const handleUpdate = () => {
//     if (!updatedTodoTitle || !updatedTodoStatus) return;
//     const updatedTodoItem = {
//       title: updatedTodoTitle,
//       completed: updatedTodoStatus === 'Completed'
//     };
//     fetch(`https://jsonplaceholder.typicode.com/todos/${updatingTodoId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedTodoItem),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to update todo');
//         }
//         return response.json();
//       })
//       .then((updatedTodo) => {
//         setTodos(todos.map(todo => todo.id === updatingTodoId ? updatedTodo : todo));
//         setUpdatingTodoId(null);
//         setUpdatedTodoTitle('');
//         setUpdatedTodoStatus('');
//       })
//       .catch(error => console.error('Error updating todo:', error));
//   };

//   const handleDelete = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to delete todo');
//         }
//         return response.json();
//       })
//       .then(() => {
//         setTodos(todos.filter(todo => todo.id !== id));
//       })
//       .catch(error => console.error('Error deleting todo:', error));
//   };

//   return (
//     <div className="container">
//       <h1>To-Do Data</h1>
//       <div className="button-container">
//         <label><strong>ToDo : </strong></label>
//         <input
//           type="text"
//           placeholder="Enter your todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
//           <option value="">Select Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//         <button className="update-button" onClick={handleCreate}>Create</button>
//       </div>
//       <div className="filter-container">
//         <label><strong>Status: </strong></label>
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//       </div>
//       <div className="search-container">
//         <label><strong>ToDo search: </strong></label>
//         <input
//           type="text"
//           placeholder="Search todo..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <table className="todo-list">
//         <thead>
//           <tr>
//             <th>To-Do No.</th>
//             <th>To-Do Name</th>
//             <th>Completed Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos
//             .filter(todo => {
//               if (filter === 'All') {
//                 return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               } else if (filter === 'Completed') {
//                 return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               } else {
//                 return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               }
//             })
//             .map((todo) => (
//               <tr key={todo.id}>
//                 <td>{todo.id}</td>
//                 <td>{updatingTodoId === todo.id ? (
//                   <input
//                     type="text"
//                     value={updatedTodoTitle}
//                     onChange={(e) => setUpdatedTodoTitle(e.target.value)}
//                   />
//                 ) : (
//                   todo.title
//                 )}</td>
//                 <td>{updatingTodoId === todo.id ? (
//                   <select value={updatedTodoStatus} onChange={(e) => setUpdatedTodoStatus(e.target.value)}>
//                     <option value="Completed">Completed</option>
//                     <option value="Incomplete">Incomplete</option>
//                   </select>
//                 ) : (
//                   todo.completed ? 'Completed' : 'Incomplete'
//                 )}</td>
//                 <td className="action-button">
//                   {updatingTodoId === todo.id ? (
//                     <button className="update-button" onClick={handleUpdate}>Save</button>
//                   ) : (
//                     <button className="update-button" onClick={() => handleUpdateButtonClick(todo.id, todo.title, todo.completed ? 'Completed' : 'Incomplete')}>Update</button>
//                   )}
//                   <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       {todos.filter(todo => {
//         if (filter === 'All') {
//           return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         } else if (filter === 'Completed') {
//           return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         } else {
//           return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         }
//       }).length === 0 && (
//         <p className="search"><strong>No todo is found with this data!</strong></p>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [newTodoStatus, setNewTodoStatus] = useState('');
//   const [updatedTodoTitle, setUpdatedTodoTitle] = useState('');
//   const [updatedTodoStatus, setUpdatedTodoStatus] = useState('');
//   const [updatingTodoId, setUpdatingTodoId] = useState(null);
//   const [filter, setFilter] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = () => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(storedTodos);
//   };

//   const saveTodos = (todos) => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     setTodos(todos);
//   };

//   const handleCreate = () => {
//     if (!newTodoTitle || !newTodoStatus) return;
//     const newTodoItem = {
//       id: todos.length ? todos[todos.length - 1].id + 1 : 1,
//       title: newTodoTitle,
//       completed: newTodoStatus === 'Completed'
//     };
//     const updatedTodos = [...todos, newTodoItem];
//     saveTodos(updatedTodos);
//     setNewTodoTitle('');
//     setNewTodoStatus('');
//   };

//   const handleUpdateButtonClick = (id, title, completed) => {
//     setUpdatingTodoId(id);
//     setUpdatedTodoTitle(title);
//     setUpdatedTodoStatus(completed ? 'Completed' : 'Incomplete');
//   };

//   const handleUpdate = () => {
//     if (!updatedTodoTitle || !updatedTodoStatus) return;
//     const updatedTodoItem = {
//       id: updatingTodoId,
//       title: updatedTodoTitle,
//       completed: updatedTodoStatus === 'Completed'
//     };
//     const updatedTodos = todos.map(todo =>
//       todo.id === updatingTodoId ? updatedTodoItem : todo
//     );
//     saveTodos(updatedTodos);
//     setUpdatingTodoId(null);
//     setUpdatedTodoTitle('');
//     setUpdatedTodoStatus('');
//   };

//   const handleDelete = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     saveTodos(updatedTodos);
//   };

//   return (
//     <div className="container">
//       <h1>To-Do Data</h1>
//       <div className="button-container">
//         <label><strong>ToDo : </strong></label>
//         <input
//           type="text"
//           placeholder="Enter your todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
//           <option value="">Select Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//         <button className="update-button" onClick={handleCreate}>Create</button>
//       </div>
//       <div className="filter-container">
//         <label><strong>Status: </strong></label>
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Completed">Completed</option>
//           <option value="Incomplete">Incomplete</option>
//         </select>
//       </div>
//       <div className="search-container">
//         <label><strong>ToDo search: </strong></label>
//         <input
//           type="text"
//           placeholder="Search todo..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <table className="todo-list">
//         <thead>
//           <tr>
//             <th>To-Do No.</th>
//             <th>To-Do Name</th>
//             <th>Completed Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos
//             .filter(todo => {
//               if (filter === 'All') {
//                 return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               } else if (filter === 'Completed') {
//                 return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               } else {
//                 return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//               }
//             })
//             .map((todo) => (
//               <tr key={todo.id}>
//                 <td>{todo.id}</td>
//                 <td>{updatingTodoId === todo.id ? (
//                   <input
//                     type="text"
//                     value={updatedTodoTitle}
//                     onChange={(e) => setUpdatedTodoTitle(e.target.value)}
//                   />
//                 ) : (
//                   todo.title
//                 )}</td>
//                 <td>{updatingTodoId === todo.id ? (
//                   <select value={updatedTodoStatus} onChange={(e) => setUpdatedTodoStatus(e.target.value)}>
//                     <option value="Completed">Completed</option>
//                     <option value="Incomplete">Incomplete</option>
//                   </select>
//                 ) : (
//                   todo.completed ? 'Completed' : 'Incomplete'
//                 )}</td>
//                 <td className="action-button">
//                   {updatingTodoId === todo.id ? (
//                     <button className="update-button" onClick={handleUpdate}>Save</button>
//                   ) : (
//                     <button className="update-button" onClick={() => handleUpdateButtonClick(todo.id, todo.title, todo.completed)}>Update</button>
//                   )}
//                   <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       {todos.filter(todo => {
//         if (filter === 'All') {
//           return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         } else if (filter === 'Completed') {
//           return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         } else {
//           return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
//         }
//       }).length === 0 && (
//         <p className="search"><strong>No todo is found with this data!</strong></p>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoStatus, setNewTodoStatus] = useState('');
  const [newTodoDate, setNewTodoDate] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState('');
  const [updatedTodoTitle, setUpdatedTodoTitle] = useState('');
  const [updatedTodoStatus, setUpdatedTodoStatus] = useState('');
  const [updatedTodoDate, setUpdatedTodoDate] = useState('');
  const [updatedTodoPriority, setUpdatedTodoPriority] = useState('');
  const [updatingTodoId, setUpdatingTodoId] = useState(null);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  };

  const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodos(todos);
  };

  const handleCreate = () => {
    if (!newTodoTitle || !newTodoStatus || !newTodoDate || !newTodoPriority) {
      alert("Please fill out all fields.");
      return;
    }
    const newTodoItem = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: newTodoTitle,
      completed: newTodoStatus === 'Completed',
      date: newTodoDate,
      priority: newTodoPriority
    };
    const updatedTodos = [...todos, newTodoItem];
    saveTodos(updatedTodos);
    setNewTodoTitle('');
    setNewTodoStatus('');
    setNewTodoDate('');
    setNewTodoPriority('');
  };

  const handleUpdateButtonClick = (id, title, completed, date, priority) => {
    setUpdatingTodoId(id);
    setUpdatedTodoTitle(title);
    setUpdatedTodoStatus(completed ? 'Completed' : 'Incomplete');
    setUpdatedTodoDate(date);
    setUpdatedTodoPriority(priority);
  };

  const handleUpdate = () => {
    if (!updatedTodoTitle || !updatedTodoStatus || !updatedTodoDate || !updatedTodoPriority) {
      alert("Please fill out all fields.");
      return;
    }
    const updatedTodoItem = {
      id: updatingTodoId,
      title: updatedTodoTitle,
      completed: updatedTodoStatus === 'Completed',
      date: updatedTodoDate,
      priority: updatedTodoPriority
    };
    const updatedTodos = todos.map(todo =>
      todo.id === updatingTodoId ? updatedTodoItem : todo
    );
    saveTodos(updatedTodos);
    setUpdatingTodoId(null);
    setUpdatedTodoTitle('');
    setUpdatedTodoStatus('');
    setUpdatedTodoDate('');
    setUpdatedTodoPriority('');
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    saveTodos(updatedTodos);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>To-Do Data</h1>
      <div className="button-container">
        <label><strong>ToDo: </strong></label>
        <input
          type="text"
          placeholder="Enter your todo"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <div className="input-group">
        <select value={newTodoStatus} onChange={(e) => setNewTodoStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        </div>
        <div className="input-group">
        <input
          type="date"
          value={newTodoDate}
          onChange={(e) => setNewTodoDate(e.target.value)}
        />
        </div>
        <div className="input-group">
        <select value={newTodoPriority} onChange={(e) => setNewTodoPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        </div>
        <div className="input-group">
        <button className="update-button" onClick={handleCreate}>Create</button>
      </div>
      </div>
      <div className="filter-container">
        <label><strong>Status: </strong></label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      <div className="search-container">
        <label><strong>ToDo search: </strong></label>
        <input
          type="text"
          placeholder="Search todo..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="todo-list">
        <thead>
          <tr>
            <th>To-Do No.</th>
            <th>To-Do Name</th>
            <th>Completed Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos
            .filter(todo => {
              if (filter === 'All') {
                return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
              } else if (filter === 'Completed') {
                return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
              } else {
                return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
              }
            })
            .map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{updatingTodoId === todo.id ? (
                  <input
                    type="text"
                    value={updatedTodoTitle}
                    onChange={(e) => setUpdatedTodoTitle(e.target.value)}
                  />
                ) : (
                  todo.title
                )}</td>
                <td>{updatingTodoId === todo.id ? (
                  <select value={updatedTodoStatus} onChange={(e) => setUpdatedTodoStatus(e.target.value)} className="updating">
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                  </select>
                ) : (
                  todo.completed ? 'Completed' : 'Incomplete'
                )}</td>
                <td>{updatingTodoId === todo.id ? (
                  <input
                    type="date"
                    value={updatedTodoDate}
                    onChange={(e) => setUpdatedTodoDate(e.target.value)} className="updating"
                  />
                ) : (
                  todo.date
                )}</td>
                <td>{updatingTodoId === todo.id ? (
                  <select value={updatedTodoPriority} onChange={(e) => setUpdatedTodoPriority(e.target.value)} className="updating">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                ) : (
                  todo.priority
                )}</td>
                <td className="action-button">
                  {updatingTodoId === todo.id ? (
                    <button className="update-button" onClick={handleUpdate}>Save</button>
                  ) : (
                    <button className="update-button" onClick={() => handleUpdateButtonClick(todo.id, todo.title, todo.completed, todo.date, todo.priority)}>Update</button>
                  )}
                  <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {todos.filter(todo => {
        if (filter === 'All') {
          return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (filter === 'Completed') {
          return todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
          return !todo.completed && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        }
      }).length === 0 && (
        <p className="search"><strong>No todo is found!</strong></p>
      )}
    </div>
  );
}

export default App;
