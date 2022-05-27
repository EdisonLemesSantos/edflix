import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import{ LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function Menu() {
    return (
            <MenuWrapper className="Menu">
                <a href="/">
                    <LogoImage className="Logo" src={Logo} alt="AluraFlix logo"/>
                </a>
                <Button as={Link} className= "ButtonLink" to="/cadastro/video">
                    Novo vídeo
                </Button>
            </MenuWrapper>
    );
}

export default Menu;