import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProjectMobile from './ProjectMobile';
import ProjectDesktop from './ProjectDesktop';
import land1 from '../../image/land1.png'
import land2 from '../../image/land2.png'
import land3 from '../../image/land3.png'
import land4 from '../../image/land4.png'
import land5 from '../../image/land5.png'
import land6 from '../../image/land6.png'
// import Cookies from 'js-cookie';
// import axios from 'axios'

const ConsultProjectInvestor = () => {
    // const token = Cookies.get('token');
    // const { id } = useParams();
    const [data, setData] = useState(undefined)

    useEffect(() => {
        //   axios.get(axios.defaults.baseURL + "projects/investor/" + id + "/", {
        //     withCredentials: true,
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Authorization": `Token ${token}`
        //     }
        //   }).then((response) => {
        //     console.log(response.data)
        //     setData({ ...response.data, imagenes: [land6, land1, land2, land3, land4, land5] })
        //   }).catch((error) => {
        //     console.log(error)
        //   });
        setData({
            "id": 1,
    "colaborator": {
        "id": 6,
        "full_name": "facundo guell"
    },
    "possible_token_value": 100.0,
    "address": {
        "id": 1,
        "city": {
            "id": 705,
            "state": {
                "id": 11,
                "country": {
                    "id": 1,
                    "name": "Argentina"
                },
                "name": "Catamarca"
            },
            "name": "Ancasti"
        },
        "number": "2218",
        "name": "Test",
        "dept": null
    },
    "created_at": "2023-11-29T19:25:57.056876Z",
    "updated_at": "2023-11-29T19:25:57.056902Z",
    "deleted_at": null,
    "name": "Test",
    "type": "building",
    "short_text": "Test test test  Test test test  Test test test  Test test test",
    "description": "Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test  Test test test",
    "initial_date": "2023-12-01",
    "end_date": "2023-12-21",
    "volatility": "low",
    "status": "pending",
    "total_value": 10000000,
    "value": 100000,
    "possible_quantity_token": 1000,
            imagenes: [land6, land1, land2, land3, land4, land5]
        })
    }, [])

    return (
        <div className='w-screen flex flex-col items-center justify-start h-screen pt-[100px]'>
            {data === undefined ? <h1>Cargando...</h1> : (
                <>
                    <ProjectDesktop data={data} />
                    <ProjectMobile data={data} />
                </>
            )}

        </div>
    )
}

export default ConsultProjectInvestor