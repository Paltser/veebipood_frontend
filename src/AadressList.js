import React, { useEffect, useState } from "react";
import axios from "axios";

const AadressList = () => {
    const [aadressList, setAadressList] = useState([]);

    useEffect(() => {
        const fetchAadressList = async () => {
            try {
                const response = await axios.get("http://localhost:3000/aadress");
                setAadressList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAadressList();
    }, []);

    return (
        <div>
            <h2>Aadress List</h2>
            <ul>
                {aadressList.map((aadress) => (
                    <li key={aadress._id}>
                        Tanav: {aadress.tanav}, Maja: {aadress.maja}, Linn: {aadress.linn}, Postiindeks: {aadress.postiindeks}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AadressList;
