import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ToodeList = () => {
    const [toodeList, setToodeList] = useState([]);

    useEffect(() => {
        fetchToodeList();
    }, []);

    const fetchToodeList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/toode');
            setToodeList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Toode List</h1>
            {toodeList.map((toode) => (
                <div key={toode._id}>
                    <h2>{toode.Nimetus}</h2>
                    <p>Hind: {toode.Hind}</p>
                    <img src={toode.pildi_url} height={60} width={60} alt="Toode pilt" />
                    <p>Aktiivne: {toode.aktiivne ? 'Yes' : 'No'}</p>
                    <p>Laokogus: {toode.laokogus}</p>
                    <p>Vananemis aeg: {toode.vananemis_aeg}</p>
                    <p>Kategooria FK: {toode.kategooria_fk}</p>
                </div>
            ))}
        </div>
    );
};

export default ToodeList;
