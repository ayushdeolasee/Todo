import './styles/App.css'
import Todo from './todo'

function App() {
  return (
      <div className="bg-background">
        <Todo title="Buy groceries" description="Buy groceries" completed={false} createdAt="2025-01-01" />
      </div>
  )
}

export default App
