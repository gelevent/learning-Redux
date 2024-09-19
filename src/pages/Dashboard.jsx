import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-8">Task Management Dashboard</h1>
            {}
            <TaskForm />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {}
                <TaskList status="To-Do" />
                <TaskList status="In Progress" />
                <TaskList status="Done" />
            </div>
        </div>
    );
};

export default Dashboard;