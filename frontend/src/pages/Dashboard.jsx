import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch {
      alert("Error loading tasks");
    }
  };

  // CREATE OR UPDATE TASK
  const handleSubmit = async () => {

    if (!title) {
      alert("Enter task title");
      return;
    }

    try {

      if (editId) {

        await API.put(`/tasks/${editId}`, {
          title: title
        });

        alert("Task updated");

      } else {

        await API.post("/tasks", {
          title: title
        });

        alert("Task created");

      }

      setTitle("");
      setEditId(null);

      fetchTasks();

    } catch {

      alert("Error saving task");

    }

  };

  // DELETE TASK
  const deleteTask = async (id) => {

    await API.delete(`/tasks/${id}`);

    fetchTasks();

  };

  // EDIT BUTTON CLICK
  const editTask = (task) => {

    setTitle(task.title);

    setEditId(task._id);

  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (

    <div className="dashboard">

      <h2>Task Dashboard</h2>

      <button onClick={logout}>
        Logout
      </button>

      <br /><br />

      <input
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update Task" : "Add Task"}
      </button>

      <hr />

      {tasks.map((task) => (

        <div key={task._id} className="task">

          <b>{task.title}</b>

          <br /><br />

          <button onClick={() => editTask(task)}>
            Edit
          </button>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}

export default Dashboard;
