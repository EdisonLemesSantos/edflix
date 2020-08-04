import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper, ButtonLink} from './style.js';


function Menu(){
    return (
            <MenuWrapper className="Menu">
                <a href="/">
                    <LogoImage className="Logo" src={Logo} alt="AluraFlix logo"/>
                </a>
                <ButtonLink as="a" className="ButtonLink" href="/">Novo vídeo
                </ButtonLink>
            </MenuWrapper>
    );
}

export default Menu;