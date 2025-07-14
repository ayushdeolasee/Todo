import './styles/App.css'
import Todo from './todo'
import data from "./data.json"
import { Input } from "@/components/ui/input"


function App() {
  return (
    <div >
      <Input />
      <div className="bg-background grid grid-cols-3 gap-2"> 
        {data.map((item) => (
          <Todo key={item.key} title={item.title} description={item.description} completed={item.completed} createdAt={item.createdAt} />
        ))}

      </div>
      </div>
  )
}

export default App
