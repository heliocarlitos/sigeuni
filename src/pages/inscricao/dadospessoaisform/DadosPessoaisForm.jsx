function DadosPessoaisForm() {
    return (
        <>
            <div className="formulario">

                <div className="input_bloco">

                    <div className="titulo3">
                        <p> Informações pessoais </p>
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="primeiro_nome">Primeiro nome</label>
                        <input type="text" name="primeiro_nome" id="primeiro_nome" placeholder="Escreva seu primeiro nome" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="outros_nomes">Outros nomes</label>
                        <input type="text" name="outros_nomes" id="outros_nomes" placeholder="Escreva seu outros nomes" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="data_de_nascimento">Data de nascimento</label>
                        <input type="date" name="data_de_nascimento" id="data_de_nascimento" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="distrito_de_nascimento">Distrito</label>
                        <input type="text" name="distrito_de_nascimento" id="distrito_de_nascimento" placeholder="Escreva o distrito de nascimento" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="provincia_de_nascimento">Província</label>
                        <input type="text" name="provincia_de_nascimento" id="provincia_de_nascimento" placeholder="Escreva a província de nascimento" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="numero_de_bilhete_de_identificacao">Número de B.I</label>
                        <input type="text" name="numero_de_bilhete_de_identificacao" id="numero_de_bilhete_de_identificacao" placeholder="Digite o seu número de B.I" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="validade_do_bilhete_de_identificacao">Validade do B.I</label>
                        <input type="date" name="validade_do_bilhete_de_identificacao" id="validade_do_bilhete_de_identificacao" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="nome_do_pai">Nome do pai</label>
                        <input type="text" name="nome_do_pai" id="nome_do_pai" placeholder="Digite o nome do seu pai" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="nome_da_mae">Nome da mãe</label>
                        <input type="text" name="nome_da_mae" id="nome_da_mae" placeholder="Digite o nome da sua mãe" required />
                    </div>

                </div>

                <div className="input_bloco">

                    <div className="titulo3">
                        <p>Contactos e residência</p>
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="numero_de_telefone">Número de telefone</label>
                        <input type="number" name="numero_de_telefone" id="numero_de_telefone" placeholder="Digite o seu número de telefone" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="numero_de_telefone_alternativo">Contacto alternativo <span>(Opcional)</span></label>
                        <input type="number" name="numero_de_telefone_alternativo" id="numero_de_telefone_alternativo" placeholder="Digite o seu número alternativo" />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="endereco_de_email">Endereço de email</label>
                        <input type="email" name="endereco_de_email" id="endereco_de_email" placeholder="Digite o seu email" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="provincia_de_residencia">Província de residência</label>
                        <input type="text" name="provincia_de_residencia" id="provincia_de_residencia" placeholder="Escreva a província de residência" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="distrito_de_residencia">Distrito de residência</label>
                        <input type="text" name="distrito_de_residencia" id="distrito_de_residencia" placeholder="Escreva o distrito de residência" required />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="bairro">Bairro <span>(Opcional)</span></label>
                        <input type="text" name="bairro" id="bairro" placeholder="Escreva seu bairro" />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="avenida">Bairro ou Avenida <span>(Opcional)</span></label>
                        <input type="text" name="avenida" id="avenida" placeholder="Escreva sua avenida" />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="quarteirao">Quarteirão <span>(Opcional)</span></label>
                        <input type="text" name="quarteirao" id="quarteirao" placeholder="Escreva seu quarteirão" />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="numero_da_casa"> Casa número <span>(Opcional)</span></label>
                        <input type="text" name="numero_da_casa" id="numero_da_casa" placeholder="Escreva o número da casa" />
                    </div>

                </div>

            </div>
        </>
    )
}
export default DadosPessoaisForm;