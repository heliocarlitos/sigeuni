import React from "react";
import "./InputOpcoes.css";

const InputOpcoes = ({ id, label, opcoes = [], valorSelecionado, aoMudar, label_2 }) => {
  return (
    <div className="input_caixa">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        name={id}
        id={id}
        value={valorSelecionado}
        onChange={(e) => aoMudar(e.target.value)}
      >
        <option value="">-- Nenhum seleccionado --</option>
        {opcoes.map((opcao, index) => (
          <option key={index} value={opcao.valor}>
            {opcao.texto}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputOpcoes;
