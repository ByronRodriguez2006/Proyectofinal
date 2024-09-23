import React, { useState, useEffect } from 'react';
import '../Style/FormPrincipal.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PostListadeMateriales from '../Services/PostListadeMateriales';
import GetMateriales from '../Services/GetMateriales';
import deleteMaterial from '../Services/DeleteMaterial';
import updateMaterial from '../Services/UpdateMaterial.jsx';
import Swal from 'sweetalert2'; // Importa SweetAlert

function FormAdmi() {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [Materiales, setMateriales] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMaterialId, setSelectedMaterialId] = useState(null);

  const CargarNombre = (event) => setNombre(event.target.value);
  const CargarDescripcion = (event) => setDescripcion(event.target.value);
  const Cargar = () => navigate('/Login');

  const convertiraBase64 = (archivos) => {
    Array.from(archivos).forEach((archivo) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => setBase64Image(reader.result);
    });
  };

  const Agregar = async () => {
    try {
      if (selectedMaterialId) {
        await updateMaterial(selectedMaterialId, { Img: base64Image, Nombre, Descripcion });
        setSelectedMaterialId(null);
      } else {
        await PostListadeMateriales(base64Image, Nombre, Descripcion);
      }
      await fetchMateriales();
    } catch (error) {
      console.error('Error al agregar/editar el material:', error);
    }
  };

  const fetchMateriales = async () => {
    try {
      const data = await GetMateriales();
      setMateriales(data);
    } catch (error) {
      setError('Error al obtener materiales.');
    }
  };

  const handleEdit = (material) => {
    Swal.fire({
      title: '¿Editar Material?',
      text: `Estás a punto de editar "${material.Nombre}".`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        setSelectedMaterialId(material.id);
        setNombre(material.Nombre);
        setDescripcion(material.Descripcion);
        setBase64Image(material.Img);
      }
    });
  };

  const handleDelete = async (id) => {
    const materialToDelete = Materiales.find((m) => m.id === id);
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar "${materialToDelete.Nombre}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteMaterial(id);
          await fetchMateriales();
          Swal.fire('¡Eliminado!', `${materialToDelete.Nombre} ha sido eliminado.`, 'success');
        } catch (error) {
          console.error('Error al eliminar el material:', error);
        }
      }
    });
  };

  useEffect(() => {
    fetchMateriales();
  }, []);

  return (
    <div className="main-container">
     

      {/* Formulario para agregar/editar un material */}
      <div className="input">
        <div>
          <input
            placeholder="Ingrese el Nombre de la imagen"
            type="text"
            value={Nombre}
            onChange={CargarNombre}
          />
        </div>
        <div>
          <input
            placeholder="Escriba la descripción"
            type="text"
            value={Descripcion}
            onChange={CargarDescripcion}
          />
          <div>   
            <input type="file" multiple onChange={(e) => convertiraBase64(e.target.files)} />
          </div>
        </div>
        <div>
          <button onClick={Agregar}>
            {selectedMaterialId ? 'Editar Viaje ' : 'Agregar'}
          </button>
        </div>
      </div>

      {/* Mostrar la lista de materiales */}
      <div className="materiales-container">
        <h2>Lista de Materiales</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          Materiales.length > 0 ? (
            <div className="materiales-list">
              {Materiales.map((material, index) => (
                <div key={index} className="material-card">
                  <img src={material.Img} alt={material.Nombre} style={{ width: '200px' }} className="material-img" />
                  <h3>{material.Nombre}</h3>
                  <p>{material.Descripcion}</p>
                  <div className="button-container">
                    <div>
                      <button onClick={() => handleEdit(material)} className="btn-edit">Editar</button>
                    </div>

                    <div>
                      <button onClick={() => handleDelete(material.id)} className="btn-delete" style={{ backgroundColor: 'red', color: 'white' }}>Eliminar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay materiales disponibles</p>
          )
        )}
      </div>
    </div>
  );
}

export default FormAdmi;
