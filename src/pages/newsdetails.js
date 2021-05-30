import React from 'react';
import { useParams } from "react-router-dom"

export default function NewsDetails() {
    const {id} = useParams();

    return (
        <div>
            Soy pagina de detalles con id {id}
        </div>
    )
}