
import { getAllTodos } from '@/api'
import AddTask from '@/components/AddTask'
import TodoList from '@/components/TodoList'
import Image from 'next/image'

export default async  function Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  return (
    <main className="max-w-3xl mx-auto mt-4">
      <div className='text-center my-5 flex flex-col gap-4 '>
        <h1 className='text-2xl font-bold'>Todo List</h1>
        <AddTask />
      </div>
      <div>
        <TodoList  tasks={tasks}/>
      </div>
    </main>
  )
}