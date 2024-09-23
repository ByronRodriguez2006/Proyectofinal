import React from "react";

async function PostListadeMateriales(Img,Nombre,Descripcion) {
    try {
     
        const MaterialesData = { 
            Img,
            Nombre,
            Descripcion
        };

        const response = await fetch("http://localhost:3001/materiales", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(MaterialesData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostListadeMateriales;
