//Dependencies
import React from 'react';



export default {
    data : [
        {
          "bonificado": false,
          "validos": 4,
          "paqueteDTO": {
            "id": 80,
            "codigo": "40",
            "descripcion": "BLACK PACK",
            //"descripcion": "PLATINUM PACK",
            "descripcion": "GOLD PACK",
           //"descripcion": "BÚHO PACK",
            "estado": {
              "codigo": "V",
              "descripcion": "BLACK PACK"
            },
            "ciclo": "4",
            "tipoResumen": "V",
            "resumen": "1",
            "pagoTarjeta": "M",
            "cliente": {
              "rol": "P"
            },
            "programaRecompensa": "21",
            "programaRecompensaCanal": "2",
            "productos": [
              {
                "id": 3,
                "categoria": "CUENTA CORRIENTE",
                "codigo": "1",
                "descripcion": "CUENTAS CORRIENTES",
                "tipo": "CTE",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": true,
                "condicionante": "N",
                "categoriaDefault": "ASA"
              },
              {
                "id": 4,
                "categoria": "CAJA DE AHORRO",
                "codigo": "3",
                "descripcion": "CAJA DE AHORROS",
                "tipo": "AHO",
                "moneda": {
                  "id": "2",
                  "descripcion": "DOLARES"
                },
                "cuentaCobro": false,
                "condicionante": "S",
                "categoriaDefault": "D"
              },
              {
                "id": 4,
                "categoria": "CAJA DE AHORRO",
                "codigo": "3",
                "descripcion": "CAJA DE AHORROS",
                "tipo": "AHO",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": true,
                "condicionante": "N",
                "categoriaDefault": "D"
              },
              {
                "id": 16,
                "categoria": "TARJETA DE DEBITO",
                "codigo": "6",
                "descripcion": "TARJETA DE DEBITO",
                "tipo": "ATM",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": false,
                "condicionante": "N",
                "categoriaDefault": "NV|5"
              },
              {
                "id": 203,
                "categoria": "TARJETA DE CREDITO - SMO",
                "codigo": "33",
                "descripcion": "VISA SIGNATURE",
                "tipo": "SMA",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": false,
                "condicionante": "S",
                "categoriaDefault": "S"
              }
            ],
           "paqueteHeader": "Black",
           //"paqueteHeader": "Platinum",
            //"paqueteHeader": "Búho",
            "paqueteHeader": "Gold",
            "numeroPaquete": "43",
            "estadoCodigo": "V",
            "letraTarjeta": "S",
            "tarjetaDeCreditoDTO": {
              "id": 541,
              "subProducto": "TARJETA_VISA",
              "limiteCompra": 112000,
              "limiteCompraTotal": 280000,
              "limiteCompraCuotas": 168000,
              "fechaVigencia": "2019-10-18T03:00:00.000+0000",
              "fechaVigenciaSimple": "18-10-2019"
            },
            "canal": "25",
            "tcTituloA": "Visa Signature ",
            "tcTituloB": "SIGN",
            "tcSubProductoA": "AAPLUS",
            "tcSubProductoB": "BUHO",
            "tcHeader": "BUHO",
            "numeroTarjeta": "541",
            "costo": "1070",
            "tcSubProductoDefault": "Buho",
            "paqueteSubProductoAdmitido": "SELECT",
            "beneficios": [
              {
                "id": 8,
                "descBeneficio": "COMO CLIENTE BUHO ONE CONTÁS CON EL PROGRAMA AEROLÍNEAS PLUS 100% BONIFICADO Y SUMÁS MILLAS EXTRA CON EL CONSUMO DE TU TARJETA DE CRÉDITO.",
                "descBeneficioHTML": "COMO CLIENTE BUHO ONE CONT&Aacute;S CON EL PROGRAMA AEROL&Iacute;NEAS PLUS 100&#37; BONIFICADO Y SUM&Aacute;S MILLAS EXTRA CON EL CONSUMO DE TU TARJETA DE CR&Eacute;DITO.",
                "iconPath": "icono_Aerolineas_40x40-buho_one.png",
                "paquete": null
              },
              {
                "id": 9,
                "descBeneficio": "ACCESO A SALONES VIP EN AEROPUERTOS SIN CARGO Y LOS MEJORES BENEFICIOS EN VIAJES.",
                "descBeneficioHTML": "ACCESO A SALONES VIP EN AEROPUERTOS SIN CARGO Y LOS MEJORES BENEFICIOS EN VIAJES.",
                "iconPath": "icono_Aerolineas_40x40-buho_one.png",
                "paquete": null
              },
              {
                "id": 10,
                "descBeneficio": "CUENTA INVERSOR BONIFICADA Y ASESORAMIENTO PERSONALIZADO.",
                "descBeneficioHTML": "CUENTA INVERSOR BONIFICADA Y ASESORAMIENTO PERSONALIZADO.",
                "iconPath": "icono_Inversiones_40x40-buho_one.png",
                "paquete": null
              }
            ]
          }
        }

      /*
        ,
        {
          "cuentaCorriente": true,
          "bonificado": false,
          "validos": 4,
          "paqueteDTO": {
            "id": 80,
            "codigo": "53",
            "descripcion": "EMPRENDEDOR BLACK PACK",
            //"descripcion": "EMPRENDEDOR PLATINUM PACK",
            //"descripcion": "EMPRENDEDOR GOLD PACK",
            //"descripcion": "EMPRENDEDOR BÚHO PACK",

            "estado": {
              "codigo": "V",
              "descripcion": "EMPRENDEDOR BLACK PACK"
            },
            "ciclo": "6",
            "tipoResumen": "V",
            "resumen": "2",
            "pagoTarjeta": "M",
            "cliente": {
              "rol": "P"
            },
            "programaRecompensa": "21",
            "programaRecompensaCanal": "2",
            "productos": [
              {
                "id": 3,
                "categoria": "CUENTA CORRIENTE",
                "codigo": "1",
                "descripcion": "CUENTAS CORRIENTES",
                "tipo": "CTE",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": true,
                "condicionante": "N",
                "categoriaDefault": "ASC"
              },
              {
                "id": 4,
                "categoria": "CAJA DE AHORRO",
                "codigo": "3",
                "descripcion": "CAJA DE AHORROS",
                "tipo": "AHO",
                "moneda": {
                  "id": "2",
                  "descripcion": "DOLARES"
                },
                "cuentaCobro": false,
                "condicionante": "S",
                "categoriaDefault": "D"
              },
              {
                "id": 4,
                "categoria": "CAJA DE AHORRO",
                "codigo": "3",
                "descripcion": "CAJA DE AHORROS",
                "tipo": "AHO",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": true,
                "condicionante": "N",
                "categoriaDefault": "D"
              },
              {
                "id": 16,
                "categoria": "TARJETA DE DEBITO",
                "codigo": "6",
                "descripcion": "TARJETA DE DEBITO",
                "tipo": "ATM",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": false,
                "condicionante": "N",
                "categoriaDefault": "NV|5"
              },
              {
                "id": 203,
                "categoria": "TARJETA DE CREDITO - SMO",
                "codigo": "33",
                "descripcion": "VISA SIGNATURE",
                "tipo": "SMA",
                "moneda": {
                  "id": "80",
                  "descripcion": "PESOS"
                },
                "cuentaCobro": false,
                "condicionante": "S",
                "categoriaDefault": "S"
              }
            ],
            "paqueteHeader": "Emprendedor",
            "numeroPaquete": "53",
            "estadoCodigo": "V",
            "letraTarjeta": "S",
            "tarjetaDeCreditoDTO": {
              "id": 541,
              "subProducto": "TARJETA_VISA",
              "limiteCompra": 112000,
              "limiteCompraTotal": 280000,
              "limiteCompraCuotas": 168000,
              "fechaVigencia": "2019-10-18T03:00:00.000+0000",
              "fechaVigenciaSimple": "18-10-2019"
            },
            "canal": "25",
            "tcTituloA": "Visa Signature ",
            "tcTituloB": "SIGN",
            "tcSubProductoA": "AAPLUS",
            "tcSubProductoB": "BUHO",
            "tcHeader": "BUHO",
            "numeroTarjeta": "541",
            "costo": "800",
            "tcSubProductoDefault": "Buho",
            "paqueteSubProductoAdmitido": "SELECT",
            "beneficios": [
              {
                "id": 14,
                "descBeneficio": "OFICIAL DE ATENCIÓN PREFERENCIAL PARA TU ACTIVIDAD COMERCIAL Y PERSONAL.",
                "descBeneficioHTML": "OFICIAL DE ATENCI&Oacute;N PREFERENCIAL PARA TU ACTIVIDAD COMERCIAL Y PERSONAL.",
                "iconPath": "icono_Aerolineas_40x40-emprendedor_black_pack.png",
                "paquete": null
              },
              {
                "id": 15,
                "descBeneficio": "COMO CLIENTE BUHO ONE CONTÁS CON EL PROGRAMA AEROLÍNEAS PLUS 100% BONIFICADO Y SUMÁS MILLAS EXTRA CON EL CONSUMO DE TU TARJETA DE CRÉDITO.",
                "descBeneficioHTML": "COMO CLIENTE BUHO ONE CONT&Aacute;S CON EL PROGRAMA AEROL&Iacute;NEAS PLUS 100&#37; BONIFICADO Y SUM&Aacute;S MILLAS EXTRA CON EL CONSUMO DE TU TARJETA DE CR&Eacute;DITO.",
                "iconPath": "icono_Aerolineas_40x40-emprendedor_black_pack.png",
                "paquete": null
              },
              {
                "id": 16,
                "descBeneficio": "ACCESO A SALONES VIP EN AEROPUERTOS SIN CARGO Y LOS MEJORES BENEFICIOS EN VIAJES.",
                "descBeneficioHTML": "ACCESO A SALONES VIP EN AEROPUERTOS SIN CARGO Y LOS MEJORES BENEFICIOS EN VIAJES.",
                "iconPath": "icono_AtencionPreferencial_40x40-emprendedor_black_pack.png",
                "paquete": null
              }
            ]
          }
        }
        */
      ]
    };
