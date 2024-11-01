import React, { useEffect, useState } from 'react';

const Historico = () => {
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:3000/consumo'; 

  useEffect(() => {
    const fetchHistorico = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Falha ao buscar dados do histórico');
        }
        const data = await response.json();
        setHistorico(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorico();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h2>Histórico de Consumo</h2>
      <table>
        <thead>
          <tr>
            <th>ID do Usuário</th>
            <th>Quantidade (m³)</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {historico.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.userId}</td>
              <td>{registro.quantidade}</td>
              <td>{new Date(registro.data).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historico;
