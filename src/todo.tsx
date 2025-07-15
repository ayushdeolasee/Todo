import './styles/Todo.css'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState} from "react"
import { Input } from './components/ui/input';

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
    });
}

interface TodoProps {
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    onMarkCompleted: () => void;
    onMarkIncomplete: () => void;
    changeTitle: (title: string) => void;
    changeDescription: (description: string) => void;
}

function Todo({title, description, completed, createdAt, onMarkCompleted, onMarkIncomplete, changeTitle, changeDescription}: TodoProps) {
    const [showDetails, setShowDetails] = useState(false)
    
    return showDetails ? (
        <Card className="cursor-pointer bg-card text-card-foreground rounded-xl shadow-lg p-6 flex flex-col justify-between w-full min-h-[220px] m-2 border-none">
            <h2>Title</h2> 
            <Input placeholder="Title" value={title} onChange={(e) => changeTitle(e.target.value)} className="border-none shadow-lg"/>
            <h2>Description</h2>
            <Input placeholder="Description" value={description} onChange={(e) => changeDescription(e.target.value)} className="border-none shadow-lg"/>
            <Button onClick={() => { setShowDetails(false) }} className="cursor-pointer">Save</Button>
        </Card>
        ) : (
        <Card onClick={() => { setShowDetails(true) }} className="cursor-pointer bg-card text-card-foreground rounded-xl shadow-lg p-6 flex flex-col justify-between w-full min-h-[220px] m-2 border-none">
            <div>
                <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
                <p className="text-sm mb-4 break-words">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs text-muted-foreground">{formatDate(createdAt)}</span>
                {!completed ? (
                    <Button className="z-1 cursor-pointer" size="sm" onClick={ e => {
                        e.stopPropagation()
                        onMarkCompleted()
                    }}>Mark as completed</Button>
                ) : (
                    <Button
                        className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 font-medium cursor-pointer hover:bg-green-200"
                        size="sm"
                        variant="ghost"
                        onClick={e => { e.stopPropagation()
                            onMarkIncomplete()
                        }}
                    >
                        Completed
                    </Button>
                )}
            </div>
        </Card>
    )
}

export default Todo

