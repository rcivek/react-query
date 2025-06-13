import React from 'react';
import CarTable from './components/CarTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1> Araç Bilgileri CRUD Örneği (React-Query Template) </h1>
        <CarTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
