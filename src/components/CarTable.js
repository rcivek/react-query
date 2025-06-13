import React, { useState } from 'react';
import CarForm from './CarForm';
import {
  useCars,
  useAddCar,
  useDeleteCar,
  useUpdateCar,
} from '../hooks/useCars';

const CarTable = () => {
  const [editingCar, setEditingCar] = useState(null);

  const { data: cars, isLoading, error } = useCars();
  const addMutation = useAddCar();
  const deleteMutation = useDeleteCar();
  const updateMutation = useUpdateCar();

  const handleEdit = (car) => {
    setEditingCar(car);
  };

  const handleCancelEdit = () => {
    setEditingCar(null);
  };

  const handleUpdate = (updatedCar) => {
    updateMutation.mutate(updatedCar);
    setEditingCar(null);
  };

  const handleDelete = (deletedCar) => {
    deleteMutation.mutate(deletedCar.id);
  };

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div className="container mt-3">
      <h2 className="mb-3"> Araç Bilgileri CRUD Örneği (React-Query) </h2>
      <CarForm onSubmit={addMutation.mutate} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Yıl</th>
            <th>Renk</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>
                {editingCar && editingCar.id === car.id ? (
                  <CarForm
                    car={car}
                    onSubmit={handleUpdate}
                    onCancel={handleCancelEdit}
                  />
                ) : (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(car)}
                  >
                    Güncelle
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(car.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;
