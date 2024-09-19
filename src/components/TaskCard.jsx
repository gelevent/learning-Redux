import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';

const TaskCard = ({ task, onEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-sm text-gray-700">{task.description}</p>
            <p className="text-xs text-gray-500 mt-2">Priority: {task.priority}</p>
            { }
            <button onClick={handleDelete} className="mt-2 text-red-500 text-sm">
                Delete
            </button>

            <button onClick={() => onEdit(task)} className="text-blue-500 text-sm">
                Edit
            </button>
        </div>
    );
};

export default TaskCard;