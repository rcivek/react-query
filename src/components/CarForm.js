import React, { useState, useEffect } from 'react';

const CarForm = ({ car, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ brand: '', model: '', year: '', color: '' });

  useEffect(() => {
    if (car) {
      setFormData(car);
    }
  }, [car]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!car) {
      setFormData({ brand: '', model: '', year: '', color: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 form-inline">
      <input
        type="text"
        name="brand"
        placeholder="Marka"
        value={formData.brand}
        onChange={handleChange}
        className="form-control me-2"
        required
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={formData.model}
        onChange={handleChange}
        className="form-control me-2"
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Yıl"
        value={formData.year}
        onChange={handleChange}
        className="form-control me-2"
        required
      />
      <input
        type="text"
        name="color"
        placeholder="Renk"
        value={formData.color}
        onChange={handleChange}
        className="form-control me-2"
        required
      />
      <button type="submit" className="btn btn-primary me-2">{ car ? 'Güncelle' : 'Ekle' }</button>
      {onCancel && <button type="button" onClick={onCancel} className="btn btn-secondary">İptal</button>}
    </form>
  );
};

export default CarForm; 