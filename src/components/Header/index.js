import React, { useState } from 'react';

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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">História</a></li>
                        <li><a href="#">Comparação</a></li>
                        <li><a href="#">Doação</a></li>
                    </ul>
                </Conteudo>
            </Headers>
        </>
    );
}
