import './styles/Todo.css'
import { Button } from "@/components/ui/button"
import React from "react"

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
    });
}

function Todo({title, description, completed, createdAt}: {title: string, description: string, completed: boolean, createdAt: string}) {
    return(
        <div className="bg-card text-card-foreground rounded-xl shadow-lg p-6 flex flex-col justify-between max-w-sm w-full min-h-[220px] m-4">
            <div>
                <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
                <p className="text-sm mb-4 break-words">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs text-muted-foreground">{formatDate(createdAt)}</span>
                {!completed ? (
                    <Button size="sm">Mark as completed</Button>
                ) : (
                    <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 font-medium">Completed</span>
                )}
            </div>
        </div>
    )
}

export default Todo

