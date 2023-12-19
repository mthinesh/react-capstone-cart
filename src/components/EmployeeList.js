import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEmployee, getallEmployee } from '../service/employeeService';
function List(props) {
    const [inputText, setInputText] = useState([]);
    console.log(props);
    useEffect(() => {
        console.log(props);
        getUsers();

    });

    const getUsers = async () => {
        const response = await getallEmployee();
        console.log(response);
        const filteredData = response.data.filter((el) => {

            if (props.input.trim() === '') {
                return el;
            } else {
                console.log(el);
                return el.name.toLowerCase().includes(props.input.trim());
            }
            //setInputText(filteredData);
        })
        setInputText(filteredData);
        // setInputText(response.data);
    }

    const deleteData = async (id) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            await deleteEmployee(id);
            alert(`Record id ${id} successfully deleted!`);
            getUsers();
        }

    }

    return (
        <>
            {inputText.map((empl) => (
                <tr key={empl.id} >
                    <td scope="row" >{empl.id}</td>
                    <td>{empl.name}</td>
                    <td>{empl.username}</td>
                    <td>{empl.email}</td>
                    <td>{empl.address}</td>
                    <td>{empl.phone}</td>
                    <td>{empl.website}</td>
                    <td>{empl.company}</td>
                    <td><Link component={Link} to={`/editEmployee/${empl.id}`}><div data-toggle="tooltip" title='edit' className='btn btn-primary'><BorderColorIcon /></div></Link> </td>
                    <td><Link ><div data-toggle="tooltip" title='delete' className='btn btn-danger' onClick={() => deleteData(empl.id)}><DeleteIcon /></div></Link> </td>
                </tr>
            ))}
        </>
    )
}

export default List