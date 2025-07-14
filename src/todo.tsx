import './styles/Todo.css'
import { Checkbox } from "@/components/ui/checkbox"

function Todo({title, description, completed, createdAt}: {title: string, description: string, completed: boolean, createdAt: string}) {
    return(
        <div className="bg-cyan-500">
            <Checkbox />
            <h1 className="flex flex-wrap p-8">{title}</h1>
            <p className="description">{description}</p>
            <p className="completed">{completed}</p>
            <p className="createdAt">{createdAt}</p>
        </div>
    )
}

export default Todo

