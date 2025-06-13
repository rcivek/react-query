const API_URL = 'http://localhost:5000/cars';

export const getCars = () => fetch(API_URL).then(res => res.json());

export const addCar = (newCar) => fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newCar) }).then(res => res.json());

export const deleteCar = (id) => fetch(`${API_URL}/${id}`, { method: 'DELETE' });

export const updateCar = (updatedCar) => fetch(`${API_URL}/${updatedCar.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updatedCar) }).then(res => res.json()); 