import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Headers, Menu, Conteudo } from './styles';

import logo from '../../assets/imagens/logo.png';

export default function Header() {

    const [open, setOpen] = useState (false);

    function abrir() {
        const change = open ? false : true;
        console.log(change);

        setOpen(change);
    }

    return (
        <>
            <Headers>
                <Menu>

                    <a href="/"><img src={logo} alt="5GS-Logotipo" height={35}/></a>

                    <div class="hamburger" onClick={() => abrir()}>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </Menu>

                <Conteudo open={open}>
                    <ul>
                        <li><Link to="/" onClick={() => abrir()}>Inicio</Link></li>
                        <li><Link to="/informacoes" onClick={() => abrir()}>História</Link></li>
                        <li><Link to="/comparacao" onClick={() => abrir()}>Comparação</Link></li>
                        <li><Link to="/" onClick={() => abrir()}>Doação</Link></li>
                    </ul>
                </Conteudo>
            </Headers>
        </>
    );
}
