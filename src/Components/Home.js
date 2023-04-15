import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from './Employee'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

    let navigate = useNavigate();

    const handleEdit =(id, name, age)=>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Age',age)
        localStorage.setItem('Id',id)
    }

    const handleData = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id)

        Employees.splice(index, 1)

        navigate('/')
    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <ht>
                                Age
                            </ht>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleData(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data avaliable"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-1' to='/create'>
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}
