//Dependencies
import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { isMobileOnly } from 'react-device-detect';
import { useSelector } from 'react-redux'

import $ from 'jquery';

//Components
import Container from "./Container";
import MockDatos from "./MockDatos";

const Oferta = () => {
    let oferta = useSelector(state => state.oferta);
    window.scrollTo(0, 0)

    useEffect(() => {
        $(".load").fadeOut(700);
    }, []);

    //use mock
    let hasToUseMock = false;
    if (hasToUseMock) {
        oferta = MockDatos.data;
    }

    let isEmprendedor = false;
    if (oferta[1] != undefined) {
        isEmprendedor = true;
    }

    let packName;
    let packNameComparator;
    let creditCardDesc = oferta[0].paqueteDTO.tcTituloA;
    let packNameHeader;


    if (isEmprendedor) {
        packName = "Emprendedor " + oferta[0].paqueteDTO.paqueteHeader;
        packNameComparator = oferta[0].paqueteDTO.paqueteHeader;
        //si es emprendedor 47 el header solo dice emprendedor si, es 53 ademas dice black
        if (packName.includes("Buho") ||
            packName.includes("Gold") || packName.includes("Platinum")) {
            packNameHeader = "Emprendedor";
        } else {
            packNameHeader = packName;
        }
    } else {
        packName = oferta[0].paqueteDTO.paqueteHeader;
    }

    let screenSize;
    switch (true) {
        case isMobileOnly: screenSize = "Mobile";
            break;
        case isMobile: screenSize = "Tablet";
            break;
        default: screenSize = "Desktop";
    }


    return (
        <div>
            <Container namePackWord={packName}
                packNameComparator={isEmprendedor ? packNameComparator : null}
                screenSize={screenSize} isEmprendedor={isEmprendedor}
                aerolineasDesc={oferta[0].paqueteDTO.descripcion}
                creditCardDesc={creditCardDesc}
                packNameHeader={packNameHeader}>
            </Container>
        </div>
    )
};



export default Oferta;