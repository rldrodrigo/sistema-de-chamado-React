import Title from '../../components/Title';
import Header from '../../components/Header';
import './customers.css';

import { FiUser } from 'react-icons/fi';
import { useState } from 'react';

export default function Customers() {

    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    function handleAdd(e) {
        e.preventDefault();

        alert('enviou')
    }

    return(
        <div>
            <Header />

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile customers" onSubmit={handleAdd}>
                        <label> Nome Fantasia </label>
                        <input type="text" placeholder="Nome da sua empresa" value={nomeFantasia} onChange={ (e) => setNomeFantasia(e.target.value) }/>

                        <label> Nome Fantasia </label>
                        <input type="text" placeholder="Seu CNPJ" value={cnpj} onChange={ (e) => setCnpj(e.target.value) }/>

                        <label> Nome Fantasia </label>
                        <input type="text" placeholder="Endereço da empresa" value={endereco} onChange={ (e) => setEndereco(e.target.value) }/>
                    
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}