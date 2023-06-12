"use client"


import { addTodo } from "@/api";
import { Modal } from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';


export default function AddTask() {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTextValue, setNewTextValue] = useState('')

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault();
        await addTodo({
            id: uuidv4(),
            text: newTextValue
        })
        setNewTextValue('')
        setModalOpen(false)
        router.refresh()
    }

    return (
        <div>
            <button onClick={()=>(setModalOpen(true))} className="w-full h-9 rounded-sm bg-purple-500 text-white shadow-md"> Add new task</button>

            <Modal modalOpen = {modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3>Add new task</h3>
                    <div>
                        <input
                        value={newTextValue}
                        onChange={e =>setNewTextValue(e.target.value)}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    )
}