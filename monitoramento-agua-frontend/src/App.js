import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import sabespLogo from './assets/sabesp-logo.jpg';

function App() {
  const [usuarioId, setUsuarioId] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [data, setData] = useState('');
  const [historico, setHistorico] = useState([]);
  const [alerta, setAlerta] = useState('');

  const API_URL = 'http://localhost:3000/consumo';

  const buscarHistorico = useCallback(async () => {
    if (!usuarioId) return;
    try {
      const response = await axios.get(`${API_URL}/historico`, {
        params: { usuarioId }
      });
      setHistorico(response.data);
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
    }
  }, [usuarioId]);

  const registrarConsumo = async () => {
    if (!usuarioId || !quantidade || !data) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    try {
      await axios.post(API_URL, { usuarioId, quantidade: Number(quantidade), data });
      alert('Consumo registrado com sucesso!');
      buscarHistorico();
      verificarAlerta();
    } catch (error) {
      console.error('Erro ao registrar consumo:', error);
    }
  };

  const verificarAlerta = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/alerta`, { params: { usuarioId } });
      setAlerta(response.data);
    } catch (error) {
      console.error('Erro ao verificar alerta:', error);
    }
  }, [usuarioId]);

  const limparTela = () => {
    setUsuarioId('');
    setQuantidade('');
    setData('');
    setHistorico([]);
    setAlerta('');
  };

  useEffect(() => {
    if (usuarioId) {
      buscarHistorico();
      verificarAlerta();
    }
  }, [usuarioId, buscarHistorico, verificarAlerta]);

  return (
    <div className="App">
      <header>
        <img src={sabespLogo} alt="Logo Sabesp" className="logo" />
        <h1>Monitoramento de Consumo de Água</h1>
      </header>
      <div className="container">
        <div className="form-section">
          <h2>Registrar Consumo</h2>

          <div> 
          <input type="text" placeholder="ID do Usuário" value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} />
          </div>
          
          <div>
          <input type="number" placeholder="Quantidade (m³)" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
          </div>

          <div>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
          </div>
                    
        </div>
        
        <div> 
        <button className="round-button" onClick={registrarConsumo}>Registrar</button>
        <button className="round-button clear" onClick={limparTela}>Limpar</button>
        </div>        

        <div className="history-section">
          <h2>Histórico de Consumo</h2>
          <ul>
            {historico.map((registro, index) => (
              <li key={index}>{`Data: ${new Date(registro.data).toLocaleDateString()}, Quantidade: ${registro.quantidade} m³`}</li>
            ))}
          </ul>
        </div>
        <div className="alert-section">
          <h2>Alertas</h2>
          {alerta && <p>{alerta}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
