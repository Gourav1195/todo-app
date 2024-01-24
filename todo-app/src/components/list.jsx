import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {BsTrash} from "react-icons/bs"
import axios from 'axios'
import { baseURL } from '../utilis/constant'


//List will recieve some props
const List = ({id, task, setUpdateUI, updateMode}) => {

  const removeTask = async() => {
    await axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEditAlt className="icon" onClick={() => updateMode(id, task)} />
        <BsTrash className='icon' onClick={removeTask} />
      </div>
    </li>
  )
}

export default List