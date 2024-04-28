import OpenAI from "openai";
import { findBestMatch } from 'string-similarity';
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
});

const cochabambaExamples = {
    //Question about the bot gobierno municipal de cochabamba  
    /*"ALCALDIA DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },*/
    "CUAL ES EL NOMBRE COMPLETO DEL ALCALDE DE COCHABAMBA":{
        content:"Manfred Armando Antonio Reyes Villa Bacigalupi",
    },
    "NOMBRE COMPLETO DEL ALCALDE DE COCHABAMBA":{
        content:"Manfred Armando Antonio Reyes Villa Bacigalupi",
    },
    "CUAL ES EL NOMBRE COMPLETO DE MANFRED":{
        content:"Manfred Armando Antonio Reyes Villa Bacigalupi",
    },
    
    "CUAL ES EL NOMBRE COMPLETO DE LA MAXIMA AUTORIDAD DE COCHABAMBA":{
        content:"Manfred Armando Antonio Reyes Villa Bacigalupi",
    },
    "QUE AÑO NACIO MANFRED ARMANDO REYES VILLA BACIGALUPI":{
        content:"Nació el 19 de abril el año 1955",
    },
    "CUANDO NACIO MANFRED ARMANDO REYES VILLA BACIGALUPI":{
        content:"Nació el 19 de abril el año 1955",
    },
    "QUE CARGOS OCUPO MANFRED REYES VILLA":{
        content:"Manfred Reyes Villa, el actual alcalde de Cochabamba, ha ocupado varios cargos públicos en su carrera política. Fue prefecto del departamento de Cochabamba y también candidato a la presidencia de Bolivia. Además, cuenta con una amplia experiencia política y administrativa que lo ha llevado a desempeñar varios roles en el ámbito gubernamental. En su actual mandato como alcalde, se enfoca en mejorar la infraestructura urbana y los servicios públicos de la ciudad de Cochabamba.",
    },
    "CARGOS QUE OCUPO MANFRED ARMANDO REYES VILLA":{
        content:"Manfred Reyes Villa, el actual alcalde de Cochabamba, ha ocupado varios cargos públicos en su carrera política. Fue prefecto del departamento de Cochabamba y también candidato a la presidencia de Bolivia. Además, cuenta con una amplia experiencia política y administrativa que lo ha llevado a desempeñar varios roles en el ámbito gubernamental. En su actual mandato como alcalde, se enfoca en mejorar la infraestructura urbana y los servicios públicos de la ciudad de Cochabamba.",
    },
    "DONDE NACIO MANFRED REYES VILLA":{
        content:"Nació en el Departamento de La Paz",
    },
    "DONDE NACIO MANFRED ARMANDO REYES VILLA BACIGALUPI":{
        content:"Nació en el Departamento de La Paz",
    },
    "DONDE NACIO":{
        content:"Nació en el Departamento de La Paz",
    },
    "CUANTAS VECES FUE ALCALDE DE COCHABAMBA":{
        content:"De retorno a Bolivia empezó su carrera política a principios de 1990. En 1992 asumió la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente llegó a ser burgomaestre por cuatro periodos consecutivos entre 1993 y 2000, simultáneamente a su labor de Alcalde, fue elegido Presidente de la Asociación de Gobiernos MunicipalesAutónomos de Bolivia, asumiendo por tal calidad el cargo de Miembro de la Unión Internacional de Autoridades Locales (IULA) y siendo nombrado a nivel internacional como representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Word Association of Cities and Local Authorities Coordination, con base en Ginebra, Suiza",
    },
    "CUANTAS VECES FUE ALCALDE":{
        content:"De retorno a Bolivia empezó su carrera política a principios de 1990. En 1992 asumió la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente llegó a ser burgomaestre por cuatro periodos consecutivos entre 1993 y 2000, simultáneamente a su labor de Alcalde, fue elegido Presidente de la Asociación de Gobiernos MunicipalesAutónomos de Bolivia, asumiendo por tal calidad el cargo de Miembro de la Unión Internacional de Autoridades Locales (IULA) y siendo nombrado a nivel internacional como representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Word Association of Cities and Local Authorities Coordination, con base en Ginebra, Suiza",
    },
    "CUANTAS VECES FUE ALCALDE DE COCHABAMBA MANFRED REYES VILLA":{
        content:"De retorno a Bolivia empezó su carrera política a principios de 1990. En 1992 asumió la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente llegó a ser burgomaestre por cuatro periodos consecutivos entre 1993 y 2000, simultáneamente a su labor de Alcalde, fue elegido Presidente de la Asociación de Gobiernos MunicipalesAutónomos de Bolivia, asumiendo por tal calidad el cargo de Miembro de la Unión Internacional de Autoridades Locales (IULA) y siendo nombrado a nivel internacional como representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Word Association of Cities and Local Authorities Coordination, con base en Ginebra, Suiza",
    },
    "CUANTAS VECES FUE ALCALDE DE COCHABAMBA MANFRED ARMANDO REYES VILLA BACIGALUPI":{
        content:"De retorno a Bolivia empezó su carrera política a principios de 1990. En 1992 asumió la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente llegó a ser burgomaestre por cuatro periodos consecutivos entre 1993 y 2000, simultáneamente a su labor de Alcalde, fue elegido Presidente de la Asociación de Gobiernos MunicipalesAutónomos de Bolivia, asumiendo por tal calidad el cargo de Miembro de la Unión Internacional de Autoridades Locales (IULA) y siendo nombrado a nivel internacional como representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Word Association of Cities and Local Authorities Coordination, con base en Ginebra, Suiza",
    },   
    "CUANTAS VECES FUE ALCALDE DE COCHABAMBA MANFRED":{
        content:"De retorno a Bolivia empezó su carrera política a principios de 1990. En 1992 asumió la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente llegó a ser burgomaestre por cuatro periodos consecutivos entre 1993 y 2000, simultáneamente a su labor de Alcalde, fue elegido Presidente de la Asociación de Gobiernos MunicipalesAutónomos de Bolivia, asumiendo por tal calidad el cargo de Miembro de la Unión Internacional de Autoridades Locales (IULA) y siendo nombrado a nivel internacional como representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Word Association of Cities and Local Authorities Coordination, con base en Ginebra, Suiza",
    },
    /*"CARGO DE LA ALCALDIA DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
    "QUIEN ESTA A CARGO DE LA ALCALDIA DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },*/
    /*"GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
    "GOBIERNO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },*/
    /*"QUIEN ESTA A CARGO DEL GOBIERNO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },*/
    "QUIEN ESTA AL MANDO DEL GOBIERNO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
    /*"QUIEN ESTA A CARGO DEL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },*/
    "QUIEN ESTA AL MANDO DEL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
    /*"CARGO":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
    "CARGO DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },*/
    "QUIEN ESTA A CARGO DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
    "QUIEN ESTA A CARGO DE COCHABAMBA ACTUALMENTE":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi"
    },
    "QUIEN ES LA AUTORIDAD COCHABAMBA":{
        content:"La Maxima Autoridad de Cochabamba es El Alcalde Manfred Reyes Villa Bacigalupi"
    },
    "QUIEN ES LA MAXIMA AUTORIDAD DE COCHABAMBA ACTUALMENTE":{
        content:"La Maxima Autoridad de Cochabamba es El Alcalde Manfred Reyes Villa Bacigalupi"
    },
    "QUIEN ES LA MAXIMA AUTORIDAD DE COCHABAMBA":{
        content:"La Maxima Autoridad de Cochabamba es El Alcalde Manfred Reyes Villa Bacigalupi"
    },
    "QUIEN ES LA MAXIMA AUTORIDAD":{
        content:"La Maxima Autoridad de Cochabamba es El Alcalde Manfred Reyes Villa Bacigalupi"
    },
    "AUTORIDAD DE COCHABAMBA":{
        content:"La Maxima Autoridad de Cochabamba es El Alcalde Manfred Reyes Villa Bacigalupi"
    },
    "QUIEN ES EL ACTUAL ALCALDE DE COCHABAMBA":{
        content: "El Alcalde de Cochabamba es Manfred Reyes Villa",
    },
    "QUIEN ES EL ALCALDE DE COCHABAMBA":{
        content: "El Alcalde de Cochabamba es Manfred Reyes Villa",
    },
    "ALCALDE DE COCHABAMBA":{
        content: "El Alcalde de Cochabamba es Manfred Reyes Villa",
    },
    "QUIEN ES EL SECRETARIO MUNICIPAL DE CIUDAD DIGITAL Y GOBIERNO ELECTRONICO":{
        content:"André Canelas somare",
    },
    "QUIEN ES EL SECRETARIO MUNICIPAL DE CIUDAD DIGITAL":{
        content:"André Canelas somare",
    },
    "QUIEN ES EL SECRETARIO MUNICIPAL DEl GOBIERNO ELECTRONICO":{
        content:"André Canelas somare",
    },
    /*"ALCALDE":{
        content:"El Alcalde de Cochabamba es Manfred Reyes Villa"
    },
    "ALCALDE COCHABAMBA":{
        content:"El Alcalde de Cochabamba es Manfred Reyes Villa"
    },
    
    "ACTUAL ALCALDE DE COCHABAMBA":{
        content: "El Alcalde de Cochabamba es Manfred Reyes Villa",
    },
    "ALCALDE DE COCHABAMBA":{
        content: "El Alcalde de Cochabamba es Manfred Reyes Villa",
    },
    "ACTUAL ALCALDE COCHABAMBA":{
        content: "El Alcalde de Cochabamba es Manfred Reyes Villa",
    },
    "QUIEN ES EL ALCALDE DE COCHABAMBA":{
        content: "El Alcalde de Cochabamba es Manfred Reyes Villa",
    },*/
    "HOLA":{
        content:"Hola soy AVONNI TU ASISTENTE, una asistente virtual basada en inteligencia artificial implementada por la Alcaldía de Cochabamba",
    },
    "QUIEN ERES":{
        content:"Soy AVONNI TU ASISTENTE, una asistente virtual basada en inteligencia artificial implementada por la Alcaldía de Cochabamba, Estoy aquí para ayudarte con preguntas, conversaciones o cualquier otra cosa con referencia a los tramites que se realizan en la alcaldía de Cochabamba o sus 7 sub alcaldías.",
    },
    "COMO FUNCIONAS":{
        content:"Funciono procesando el texto que me proporcionas y generando respuestas basadas en mi comprensión del lenguaje natural y mi entrenamiento con una gran cantidad que la alcaldía me proporciono para aprender",
    },
    "QUE PUEDES HACER":{
        content:"Puedo ayudarte a responder preguntas, proporcionar información sobre los temas de la alcaldía de Cochabamba.",
    },
    "DE DONDE OBTIENES TU INFORMACION":{
        content:"Mi conocimiento se basa en información proporcionada por la alcaldía de Cochabamba, y otras fuentes de información pública.",
    },
    "PUEDES APRENDER":{
        content:"Sí, puedo aprender de nuevas interacciones contigo y mejorar mis respuestas con el tiempo",
    },
    "TIENES EMOCIONES":{
        content:"No tengo emociones ni conciencia propia. Soy un programa de inteligencia artificial diseñado para procesar y generar respuestas basadas en el texto que recibo.",
    },
    //quetions about cochabamba
    "VISADO":{
        content:" Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "COMO HAGO EL VISADO":{
        content:"Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "VISADO DE URBANIZACION":{
        content:" Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "VISADO URBANIZACION":{
        content:" Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "DONDE HAGO VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO EL VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO VISADO DE URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO EL VISADO DE URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE SE HACE EL VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE SE HACE VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE PUEDO HACER VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE PUEDO HACER VISADO EL URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
   "COSTO VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO DEL VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO DEL VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO DEL VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO DEL VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "CUANTO CUESTA VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA EL VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA EL VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA EL VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO DEL VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO DEL VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "REQUISITOS VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DE VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DEL VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DEL VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "LOS REQUISITO DEL VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "LOS REQUISITO DEL VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    //CON LA PALABRA TRAMITE
    "TRAMITE DE VISADO":{
        content:" Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "COMO HAGO EL TRAMITE DE VISADO":{
        content:"Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "TRAMITE DE VISADO DE URBANIZACION":{
        content:" Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "TRAMITE DE VISADO URBANIZACION":{
        content:" Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "DONDE HAGO EL TRAMITE DE VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO EL TRAMITE VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO EL TRAMITE VISADO DE URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO EL TRAMITE VISADO DE URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE HAGO EL TRAMITE VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE SE HACE EL TRAMITE VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE SE HACE EL TRAMITE VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE PUEDO HACER EL TRAMITE DE VISADO URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
    "DONDE PUEDO HACER EL TRAMITE VISADO EL URBANIZACION":{
        content:"Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.",
    },
   "COSTO TRAMITE DE  VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO DEL TRAMITE DE VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO DEL TRAMITE DE VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO TRAMITE DE VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO DEL TRAMITE DE VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO TRAMITE DE VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO DEL TRAMITE DE VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "CUANTO CUESTA TRAMITE DE VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA EL TRAMITE DE VISADO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA EL TRAMITE DE VISADO URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA TRAMITE DE VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "CUANTO CUESTA EL TRAMITE DE VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO TRAMITE DE VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "COSTO TRAMITE DE DEL VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO TRAMITE DE VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "PRECIO DEL TRAMITE DE VISADO":{
        content:"El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    }, 
    "REQUISITOS TRAMITE DE VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO TRAMITE DE VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DE TRAMITE DE VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DEL TRAMITE DE VISADO": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DE TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS DEL TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO DE TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS TRAMITE DE VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITOS TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO TRAMITE DE VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "REQUISITO TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL TRAMITE DE VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITO DEL TRAMITE DE VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "LOS REQUISITO DEL TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "LOS REQUISITO DEL TRAMITE DE VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE DE VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE DE VISADO DE URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE DE VISADO URBANIZACION": {
        content: "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes:1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.",
    },
    //TIEMPO
    "TIEMPO VISADO URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "TIEMPO DEL VISADO DE URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "TIEMPO TRAMITE VISADO URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "TIEMPO DEL TRAMITE VISADO DE URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO TIEMPO ES VISADO URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO TIEMPO ES EL VISADO DE URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "DURACION VISADO URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "DURACION DEL VISADO DE URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO DDURA VISADO URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO DURA EL VISADO DE URBANIZACION": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "TIEMPO VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "TIEMPO DEL VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "TIEMPO TRAMITE VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "TIEMPO DEL TRAMITE VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO TIEMPO ES VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO TIEMPO ES EL VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "DURACION VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "DURACION DEL VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO DURA VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    "CUANTO DURA EL VISADO": {
        content: "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    //remodelacion
    "REMODELACION AMPLIACION REGULARIZACION EDIFICIO": {content:" Es un trámite a realizar cuando se tiene plano de construcción aprobado y se desea realizar modificaciones funcionales y/o de volumetría o se requiera realizar una ampliación a la edificación (mayor a tres plantas), para ello se debe solicitar la aprobación de remodelación o ampliación según el caso. El presente trámite también es aplicable en el caso que se desee realizar la regularización de una edificación construida que cumple la normativa vigente. También se aplica el trámite en caso que se requiera sustituir un plano de construcción aprobado por otro proyecto, siempre y cuando no esté construida la edificación.El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente", },
    "REMODELACION AMPLIACION": {content:" Es un trámite a realizar cuando se tiene plano de construcción aprobado y se desea realizar modificaciones funcionales y/o de volumetría o se requiera realizar una ampliación a la edificación (mayor a tres plantas), para ello se debe solicitar la aprobación de remodelación o ampliación según el caso. El presente trámite también es aplicable en el caso que se desee realizar la regularización de una edificación construida que cumple la normativa vigente. También se aplica el trámite en caso que se requiera sustituir un plano de construcción aprobado por otro proyecto, siempre y cuando no esté construida la edificación.El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente", },
    "REGULARIZACION EDIFICIO": {content:" Es un trámite a realizar cuando se tiene plano de construcción aprobado y se desea realizar modificaciones funcionales y/o de volumetría o se requiera realizar una ampliación a la edificación (mayor a tres plantas), para ello se debe solicitar la aprobación de remodelación o ampliación según el caso. El presente trámite también es aplicable en el caso que se desee realizar la regularización de una edificación construida que cumple la normativa vigente. También se aplica el trámite en caso que se requiera sustituir un plano de construcción aprobado por otro proyecto, siempre y cuando no esté construida la edificación.El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente", },
    //lugar
    "DONDE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE HACER LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE REMODELACION REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE REMODELACION REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE LA REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE HACER LA REGULARIZACION EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE REGULARIZACION EDIFICIO ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE LA REGULARIZACION DE EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE LA REGULARIZACION DE EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE HACER LA REGULARIZACION DE EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE HACER LA REGULARIZACION DE EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE LA REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE HACER LA REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE LA REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE LA REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE HACER LA REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE PUEDE HACER LA REGULARIZACION DEL EDIFICIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    //COSTO
    "COSTO REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "PRECIO REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO CUESTA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUAL ES EL COSTO REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUALES SON LOS PRECIOS REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO VALE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "COSTO DE LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "PRECIO DE LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO CUESTA LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUAL ES EL COSTO DE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUALES SON LOS PRECIOS DE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO VALE LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "COSTO DE LA REMODELACION":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "PRECIO DE LA REMODELACION":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO CUESTA LA REMODELACION ":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUAL ES EL COSTO DE REMODELACION ":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUALES SON LOS PRECIOS DE REMODELACION ":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO VALE LA REMODELACION":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "COSTO REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "PRECIO REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO CUESTA REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUAL ES EL COSTO REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUALES SON LOS PRECIOS REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO VALE REMODELACION REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "COSTO DE LA REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "PRECIO DE LA REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO CUESTA LA REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUAL ES EL COSTO DE LA REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUALES SON LOS PRECIOS DE LA REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO VALE LA REGULARIZACION EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "COSTO DE LA REGULARIZACION DE EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "PRECIO DE LA REGULARIZACION DE EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO CUESTA LA REGULARIZACION DE EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUAL ES EL COSTO DE LA REGULARIZACION DE EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUALES SON LOS PRECIOS DE LA REGULARIZACION DE EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    "CUANTO VALE LA REGULARIZACION DE EDIFICIO":{content:"El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico",},
    //RQUISITOS
    "REQUISITOS REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "CUALES REQUISITOS REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "QUE REQUISITOS REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "REQUISITOS DE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "CUALES REQUISITOS DE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "QUE REQUISITOS DE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "REQUISITOS DE LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "CUALES SON LOS REQUISITOS DE REMODELACION Y AMPLIACION DE REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "QUE REQUISITOS PIDEN EN REMODELACION AMPLIACION Y REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "REQUISITOS REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "CUALES SON LOS REQUISITOS DE LA REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "QUE REQUISITOS PIDEN REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "REQUISITOS DE REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "CUALES SON LOS REQUISITOS DE LA REGULARIZACION DE EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    "QUE REQUISITOS PIDEN PARA LA REGULARIZACION EDIFICIO":{content:"Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario desolicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",},
    //DURACION
    "DURACION REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO TARDA LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO DURA LA REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUAL ES EL TIEMPO DE REMODELACION AMPLIACION REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "DURACION REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO TARDA LA REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO DURA LA REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUAL ES EL TIEMPO DE REGULARIZACION EDIFICIO":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "DURACION REMODELACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO TARDA LA REMODELACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO DURA LA REMODELACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUAL ES EL TIEMPO DE REMODELACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "DURACION DE LA AMPLIACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO TARDA LA AMPLIACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUANTO DURA LA AMPLIACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    "CUAL ES EL TIEMPO DE AMPLIACION":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.",},	
    //PLANO VERJA
    "PLANO VERJA": {content:" Es un trámite para aprobar un proyecto de construcción de verja, El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},
    "PLANO DE VERJA": {content:" Es un trámite para aprobar un proyecto de construcción de verja, El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},
    "TRAMITE VERJA": {content:" Es un trámite para aprobar un proyecto de construcción de verja, El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},
    "TRAMITE DE VERJA": {content:" Es un trámite para aprobar un proyecto de construcción de verja, El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},
    //DONDE VERJA    
    "DONDE PLANO VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE PLANO VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL PLANO VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER PLANO VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO PLANO VERJA ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL PLANO VERJA ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO PLANO DE VERJA ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL PLANO VERJA ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    //COSTO
    "COSTO PLANO VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "PRECIO PLANO VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUANTO CUESTA PLANO VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUANTO VALE PLANO VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUAL COSTO PLANO VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUAL ES EL COSTO PLANO VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "COSTO PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "PRECIO PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUANTO CUESTA PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUANTO VALE PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUAL COSTO PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUAL ES EL COSTO PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "COSTO DEL PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "PRECIO DEL PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUANTO CUESTA EL PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUANTO VALE EL PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUAL COSTO DEL PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    "CUAL ES EL COSTO DEL PLANO DE VERJA":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",},	
    //REQUISITOS     
    "REQUISITOS PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "REQUISITO PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON REQUISITOS PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",},
    "CUALES SON LOS REQUISITOS PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUAL ES EL REQUISITO PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON LOS REQUISITOS PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON LOS REQUISITO PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "REQUISITOS DEL PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "REQUISITO DEL PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON REQUISITOS DEL PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUAL ES EL REQUISITO DEL PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON LOS REQUISITOS DEL PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON LOS REQUISITO DEL PLANO VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "REQUISITOS DEL PLANO DE VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "REQUISITO DEL PLANO DE VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON LOS REQUISITOS DEL PLANO DE VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUAL ES EL REQUISITO DEL PLANO DE VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON LOS REQUISITOS DEL PLANO DE VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    "CUALES SON LOS REQUISITO DEL PLANO DE VERJA":{content:"Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopiaCarnet de identidad vigente. ",}, 
    //Duracion
    "DURACION PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "PLAZO PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO DURA PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO TARDA PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUAL DURACION PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "DURACION DE PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUAL ES DURACION PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "PLAZO DE PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO DURA EL PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO TARDA EL PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "DURACION DEL PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUAL ES DURACION DEL PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "PLAZO DEL PLANO VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO DURA EL TRAMITES DE VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO TARDA EL TRAMITES DE VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "DURACION DEL PLANO DE VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUAL ES LA DURACION DEL PLANO DE VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "PLAZO DEL PLANO DE VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO DURA EL TRAMITE DE VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    "CUANTO TARDA EL TRAMITE DE VERJA":{content:" El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.",},	
    //TRABAJOS MENORES
    "TRABAJOS MENORES": {content:" Es un trámite para la ejecución de obras de pequeña magnitud, excavaciones en vía pública, construcción de muro perimetral, apertura de puertas y ventanas, cambio total de cubiertas, acopio de material y escombros, bardas temporales en la vereda, arreglo de fachada o trabajos externos con uso de la acera, demolición de bloque o de unidad. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente",},	
    "TRABAJO MENOR": {content:" Es un trámite para la ejecución de obras de pequeña magnitud, excavaciones en vía pública, construcción de muro perimetral, apertura de puertas y ventanas, cambio total de cubiertas, acopio de material y escombros, bardas temporales en la vereda, arreglo de fachada o trabajos externos con uso de la acera, demolición de bloque o de unidad. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente",},	
    //DONDE 
    "DONDE TRABAJOS MENORES":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO TRABAJOS MENORES":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE TRABAJOS MENORES":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER TRABAJOS MENORES":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA TRABAJOS MENORES":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    //COSTO
    "COSTO TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "PRECIOS TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "PRECIO TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO CUESTA TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO VALE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUAL ES EL PRECIO TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUAL ES EL COSTO TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO CUESTA TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO VALE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	        
    "COSTO DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "PRECIOS DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "PRECIO DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO CUESTA LOS TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO VALE LOS TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUAL ES EL PRECIO DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUAL ES EL COSTO DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO CUESTA LOS TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO VALE LOS TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "COSTO DEL TRAMITE DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "PRECIOS DE TRAMITE DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "PRECIO DE TRAMITE DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO CUESTA EL TRAMITE DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO VALE EL TRAMITE DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUAL ES EL PRECIO DEL TRAMITE DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUAL ES EL COSTO DEL TRAMITE DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO CUESTA LOS TRAMITES DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    "CUANTO VALE LOS TRAMITES DE TRABAJOS MENORES":{content:"Son varios los costos por la autorización de trabajos menores, el costo de trámitepor construcción de habitación provisional es de 50 bolivianos por Unidad, por excavacionesen vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",},	
    //SREQUISITOS
    "REQUISITOS TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITO TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITOS DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITO DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "CUALES SON REQUISITOS TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "CUALES SON REQUISITO TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "QUE REQUISITOS TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "QUE REQUISITO PIDEN TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITOS DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITO DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITOS DE LOS TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITO DE LOS TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "CUALES SON LOS REQUISITOS TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "CUALES SON LOS REQUISITO TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "QUE REQUISITOS PIDEN TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "QUE REQUISITO PIDEN TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITOS DE TRAMITE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITO DE TRAMITE DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITOS DE LOS TRAMITES DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "REQUISITO DE LOS TRAMITES TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "CUALES SON LOS REQUISITOS DE TRAMITE DE LOS TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "CUALES SON LOS REQUISITO DEL TRAMITE DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "QUE REQUISITOS PIDE EL TRAMITE DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    "QUE REQUISITO PIDE EL TRAMITE DE TRABAJOS MENORES":{ content:"Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ",},
    //TIEMPO
    "TIEMPO TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "DURACION TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TIEMPO TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO DURA TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TARDA TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "TIEMPO DE TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "DURACION DE TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TIEMPO DURA TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO DURAN LOS TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TARDAN LOS TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",},
    "TIEMPO DE LOS TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "DURACION DE LOS TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TIEMPO DURAN LOS TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO DURAN LOS TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TARDA LOS TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",},  
    "TIEMPO DEL TRAMITE DE TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "DURACION DEL TRAMITE DE TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TIEMPO DEL TRAMITE DE TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO DURA EL TRAMITE DE TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    "CUANTO TARDA EL TRAMITE DE TRABAJOS MENORES":{content:"La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.",}, 	
    //VISADO
    "VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS": {content:" Es un trámite a realizar cuando se requiere la aprobación del plano arquitectónico de anteproyecto de equipamientos público y privados.", },
    "VISADO EQUIPAMIENTO PUBLICO Y PRIVADO": {content:" Es un trámite a realizar cuando se requiere la aprobación del plano arquitectónico de anteproyecto de equipamientos público y privados.", },
    "VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS": {content:" Es un trámite a realizar cuando se requiere la aprobación del plano arquitectónico de anteproyecto de equipamientos público y privados.", },
    "VISADO DE EQUIPAMIENTO PUBLICO Y PRIVADO": {content:" Es un trámite a realizar cuando se requiere la aprobación del plano arquitectónico de anteproyecto de equipamientos público y privados.", },
    //donde 
    "DONDE HAGO VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR PARA HACER EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO VISADO DE EQUIPAMIENTO PUBLICOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER VISADO DE EQUIPAMIENTO PUBLICOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA VISADO DE EQUIPAMIENTO PUBLICOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR VISADO DE EQUIPAMIENTO PUBLICOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR PARA HACER EL VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    
    
    "DONDE HAGO VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOSS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR PARA HACER EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE REALIZA EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO ACUDIR PARA HACER EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE EQUIPAMIENTOS PUBLICOS Y PRIVADOS VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE SE HACE EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE PUEDO HACER EL PLANO DE VERJA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO PLANO DE VERJA ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "DONDE HAGO EL VISADO DE EQUIPAMIENTO PUBLICOS Y PRIVADOS ":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    //costo
    "COSTO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "PRECIOS VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "PRECIO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO CUESTA EL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO VALE VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUAL ES EL PRECIO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUAL ES EL COSTO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO CUESTA VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO VALE VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "COSTO DEL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "PRECIOS DEL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "PRECIO DEL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO CUESTA EL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO VALE EL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUAL ES EL PRECIO DEL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUAL ES EL COSTO DEL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO CUESTA EL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    "CUANTO VALE EL VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",},
    //REQUISITOS
    "REQUISITOS VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITOS DE VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO DE VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON REQUISITOS VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON REQUISITO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITOS VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITOS DE VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO DE VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON REQUISITOS VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON REQUISITO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "QUE REQUISITOS VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "QUE REQUISITO PIDEN VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITOS DEL VISADO DE EQUIPAMIENTO PUBLICO Y PRIVADO":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO DEL VISADO DE EQUIPAMIENTO PUBLICO Y PRIVADO":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITOS DEL VISADO DE EQUIPAMIENTO PUBLICO Y PRIVADO":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO DEL VISADO DE EQUIPAMIENTO PUBLICO Y PRIVADO":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON LOS REQUISITOS DEL VISADO DE EQUIPAMIENTO PUBLICO Y PRIVADO":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON LOS REQUISITO DEL VISADO DE EQUIPAMIENTO PUBLICO Y PRIVADO":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITOS DEL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO DEL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITOS DEL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "REQUISITO DEL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON LOS REQUISITOS DEL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "CUALES SON LOS REQUISITO DEL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "QUE REQUISITOS DEL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "QUE REQUISITO PIDE EL VISADO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS":{ content:"Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. "},
    "TIEMPO VISADO EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:" La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente.",},  
    //FALTA DE ACA PA ABAJO
    "VISADO ESTACION SERVICIO SURTIDOR": {content:" Es un trámite a para visar un anteproyecto de construcción de estación de servicio o surtidor, e puede realizar en la Sub Alcaldía a la que corresponde el predio Se puede realizar en la Sub Alcaldía a la que corresponde el predio",},
    "VISADO ESTACION SERVICIO SURTIDOR":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "COSTO VISADO ESTACION SERVICIO SURTIDOR":{ content:"El precio de derecho de admisión 20 (DA  20) es de 46 bolivianos, folder municipal 5 bolivianos, la tasa de verificación de superficies de 0.50 bolivianos por metro cuadrado, tasa de fijación de rasante por metro lineal en el subdistrito 1 al 16 de 1 boliviano el metro lineal y del sub distrito 17 al 32 de 1.5 bolivianos el metro lineal ",},
    "REQUISITO VISADO ESTACION SERVICIO SURTIDOR":{ content:"Son el derecho de admisión 20 (DA 20), folder municipal, memorial dirigido al sub alcalde, plano de lote aprobado, título de propiedad, impuestos al día, fotocopia Carnet de identidad vigente, solvencia fiscal, anteproyecto de construcción, certificado de ubicación. ",},
    "TIEMPO VISADO PLANO ESTACION DE SERVICIO Y SURTIDORES":{ content:" La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente.",},
    "AUTORIZACION USO ESPACIOS PUBLICOS": {content:" Es un trámite para solicitar autorización eventual cuando una persona natural, institución, agrupación, organización o empresa, requiera utilizar en forma temporal algún espacio público municipal para actividades con fines o sin fines de lucro: instalación de circos, parques de diversiones o la realización de kermeses, ferias u otras actividades similares ",},
    "DONDE USO ESPACIOS PUBLICOS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "COSTO USO ESPACIOS PUBLICOS":{ content:"Para las actividades sin fines de lucro no tiene costo, para las actividades con fines de lucro el derecho de admisión 21 (DA 21) es de 20 bolivianos, folder municipal a 5 bolivianos,y el costo de comprobante de pago de patente.",},
    "REQUISITOS USO ESPACIOS PUBLICOS":{ content:"Los requisitos son solicitud escrita dirigida al sub alcalde indicado, carta notariada de compromiso de entrega en las mismas condiciones, contrato de emsa, derecho de admisión 22 (DA 22), folder municipal, comprobante de pago de la patente. ",},
    "TIEMPO USO ESPACIOS PUBLICOS":{ content:" La duración del trámite si cumple todos los requisitos es de 2 días hábiles aproximadamente.",},
    "VISACION MINUTAS": {content:" es cuando se desea obtener el visado de una minuta, se puede realizar en la Sub Alcaldía a la que corresponde el predio",},
    "DONDE VISACION MINUTAS":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "COSTO VISACION MINUTAS":{ content:" Los costos son, Tasa de visación de predio, lote o inmueble ubicado en área urbana: Hasta 500 metros cuadrados de lote 25 Bolivianos, Hasta 500 metros cuadrados de lote con edificación 40 Bolivianos, Más de 501 metros cuadrados de lote 60 Bolivianos, Más de 500 metros cuadrados de lote con edificación 90 Bolivianos, Tasa de visación de predio, lote o inmueble ubicado en área rural o rústica: Terreno de uso agrícola, mayor a 5000 metros cuadrados 120 Bolivianos, Terrenos rústicos transferidos en su integridad 90 Bolivianos, Derecho de admisión 23 (DA 23) de trámite 5 Bolivianos.",},
    "REQUISITOS VISACION MINUTAS":{ content:"Los requisitos son solicitud, fotocopia Carnet de identidad vigente, titulo de propiedad y folio real actualizado, registro catastral, plano de lote, impuestos al dia, minuta de transferencia",},
    "TIEMPO REQUISITOS VISACION MINUTAS":{ content:" La duración del trámite si cumple todos los requisitos es de 1 día hábil aproximadamente.",},
    "SELLO SECO": {content:" es cuando se desea obtener sello seco en testimonios protocolizados y/o en minutas con reconocimiento de firmas para su registro en Derechos Reales. ",},
    "DONDE SELLO SECO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",},
    "COSTO SELLO SECO":{ content:"El costo del timbre es de 10 Bolivianos",},
    "REQUISITO SELLO SECO":{ content:"Los requisitos son solicitud, testimonio protocolizado, minuta de Transferencia con reconocimiento de firmas, formulario de pago de impuestos.",},
    "TIEMPO SELLO SECO":{ content:" La duración del trámite si cumple todos los requisitos es Inmediato.",},
    "AVALUO INMUEBLE": {content:" Es un trámite a realizarse por Orden Judicial y/o Petición de Parte para atribuir el valor de un predio dentro de la jurisdicción del Gobierno Autónomo Municipal de Cochabamba con referencia a las tablas de valoración de superficie construida, antigüedad, categoría y zona homogénea de valor de terreno y edificaciones definidos y actualizados por el Gobierno Autónomo Municipal de Cochabamba. Se puede realizar en la Sub Alcaldía a la que corresponde el predio",},
    "DONDE AVALUO INMUEBLE":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "COSTO AVALUO INMUEBLE":{ content:" El costo es: derecho de admisión 24 (DA 24) de trámite 27 Bolivianos, Folder municipal 5 Bolivianos, Tasa por verificación de superficie en lote 0.50 Bolivianos por metro cuadrado, Tasa por verificación de superficie en inmueble edificado 0.80 Bolivianos por metro cuadrado, Certificación 30 Bolivianos, Certificación (según Ordenanza Municipal Número 2636, válido solo para el Distrito 9) 50 Bolivianos ",
    },
    "REQUISITOS AVALUO INMUEBLE":{ content:"Los requisitos son Requerimiento fiscal. Plano aprobado del predio, escritura pública o folio real, fotocopia de Carnet de identidad vigente.",
    },
    "TIEMPO AVALUO INMUEBLE":{ content:" De no encontrarse observaciones es de 10 días hábiles aproximadamente.",
    },
    "NUMERACION DOMICILIARIA": {content:" Es un trámite a realizarse cuando desee obtener el número de domicilio para identificación física de su inmueble. Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "DONDE NUMERACION DOMICILIARIA":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "COSTO NUMERACION DOMICILIARIA":{ content:" El costo es: derecho de admisión 25 (DA 25) de trámite es 25 Bolivianos, Folder municipal 5 Bolivianos, Tasa por numeración de domicilio 17 Bolivianos",
    },
    "REQUISITO NUMERACION DOMICILIARIA":{ content:"Los requisitos son solicitud, fotocopia de  Carnet de identidad vigente, el inmueble o lote debe contar con muro o verja de cierre frontal, título de propiedad registrado en Derechos reales, impuestos al dia, plano de lote aprobado",
    },
    "TIEMPO NUMERACION DOMICILIARIA":{ content:" De no encontrarse observaciones es de 10 días hábiles aproximadamente.",
    }, 
    "LEGALIZACION DOCUMENTOS DERECHO PROPIETARIO":{content:" Es un trámite a realizar para obtener documentos legalizados para uso exclusivo en el Gobierno Autónomo Municipal de Cochabamba"
    },
    "DONDE LEGALIZACION DOCUMENTOS DERECHO PROPIETARIO":{ content:" Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    }, 
    "COSTO LEGALIZACION DOCUMENTOS DERECHO PROPIETARIO":{ content:" El costo es de 10 bolivianos el timbre por cada documento legalizado y de 5 bolivianos por cada impuesto legalizado.",
    }, 
    "REQUISITO LEGALIZACION DOCUMENTOS DERECHO PROPIETARIO":{ content:"Los requisitos son solicitud, documento a legalizar, timbre municipal por cada documento",
    },
    "TIEMPO LEGALIZACION DOCUMENTOS DERECHO PROPIETARIO":{ content:" Inmediato, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "PLANO REGULARIZACIÓN LOTE": {Content: "Trámite a realizar cuando se requiere regularizar un lote de terreno ubicado en área urbanizable hasta 1300 metros cuadrados que no cuenta con plano aprobado o que contando con ello, existe diferencia entre la superficie y dimensiones del plano aprobado. La unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía",
    },
    "REQUISITOS APROBACION PLANO REGULARIZACIÓN LOTE": {Content: "Los requisitos son los siguientes1.    Valorados municipales, Derecho de admisión 111, DA 111 .2.    Folder municipal3.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.4.    títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real.5.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Plano de regularización de lote con número de registro proporcionado por el Colegio Profesional correspondiente, firmado y sellado por el Arquitecto con registro profesional, cinco ejemplares en papel bond.7.    Fotocopia del Carnet de identidad vigente del o los propietarios.8.    Licencia ambiental.9.    Fotocopia Carnet de identidad vigente del o los propietarios.10.  Plano de Lote o Urbanización aprobado fotocopia legalizada y o Registro Catastral y o Plano de construcción presentar en caso de existir para no pago de sesiones.11.  Carimbo, manzano de la Planimetría, superficie de ARCO y Resolución de aprobación de ARCO Solo para Distrito 9.12.  Tradición de la minuta, original o fotocopia legalizada Solo para Distrito 9.13.  Declaratoria de herederos en caso necesario y o Poder suficiente conferido por el o los propietarios del inmueble Solo para Distrito 9."},
    "COSTO PLANO REGULARIZACIÓN LOTE": {Content: "Los costos son los siguientes1.    Para el derecho de admisión 111 DA 111 del trámite el costo es de 27 bolivianos.2.    Para el folder municipal 5 bolivianos.3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos del lote o urbanización aprobada por cada fotocopia un timbre el cual el costo es de 10 bolivianos.5.    Para la tradición de la minuta por cada fotocopia un timbre el cual el costo es de 10 bolivianos6.    Para la tasa por regularización de lote el costo es de 0.20 bolivianos por metro cuadrado.7.    Para la tasa de fijación de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 boliviano por metro lineal.8.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.",
    },
    "PLANO ANEXION LOTE": {Content: "Es un Trámite realizado para anexar lotes contiguos, La unidad a cargo es la unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.",
    },
    "DONDE APROBACION PLANO ANEXION LOTE": {Content: "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "REQUISITOS APROBACION PLANO ANEXION LOTE": {Content: "Los requisitos son los siguientes:1.    Derecho de admisión 111 DA 111 .2.    Folder municipal3.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.4.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real.5.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Plano del proyecto de anexión de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto.7.    Fotocopia del Carnet de identidad vigente del o los propietarios.8.    Registro Catastral o Certificación de Registro Catastral.9.    Plano de lotes aprobados, fotocopia legalizada.",
    },
    "COSTO APROBACION PLANO ANEXION LOTE": {Content: "Los costos son los siguientes 1.    Para el derecho de admisión 111 DA 111 del trámite el costo es de 27 bolivianos.2.    Para el folder municipal 5 bolivianos.3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.5.    Para la tasa por anexión de lote el costo es de 0.25 bolivianos por metro cuadrado.6.    Para la tasa de fijación de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 bolivianos por metro lineal.7.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.",
    },
    "TIEMPO APROBACION PLANO ANEXION LOTE": {Content: "El trámite llega a dudar 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "APROBACION PLANO SUBDIVISION LOTE": {	Content: "Es un Trámite realizado para subdividir un lote aprobado en otros menores. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía",
    },
    "DONDE PLANO SUBDIVISION LOTE": {Content: "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "REQUISITOS PLANO SUBDIVISION  LOTE": {Content: "Los requisitos son los siguientes1.    Derecho de admisión 111 DA 111 .2.    Folder municipal3.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.4.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real.5.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Plano del proyecto de subdivisión de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto.7.    Fotocopia del Carnet de identidad vigente del o los propietarios.8.    Registro Catastral o Certificación de Registro Catastral. 9.    Plano de lotes aprobados, fotocopia legalizada.",
    },
    "COSTO PLANO SUBDIVISION LOTE": {Content: "Los costos son los siguientes1.    Para el derecho de admisión 111 DA 111 del trámite el costo es de 27 bolivianos.2.    Para el folder municipal 5 bolivianos.3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.5.    Para la tasa por subdivisión de lote el costo es de 0.20 bolivianos por metro cuadrado.6.    Para la tasa de fijación de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 boliviano por metro lineal.7.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.",
    },
    "TIEMPO PLANO SUBDIVISION LOTE": {Content: "El trámite llega a durar 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },

    "CERTIFICACION PLANO LOTE": {	Content: "Es un Trámite a realizar cuando se tiene un plano de urbanización, subdivisión, anexión o regularización aprobado y se requiere una certificación de plano individual a nombre del actual propietario. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía, La duración del trámite llega a ser de 5 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones"
    },
    "REQUISITO CERTIFICACION PLANO LOTE": {	Content: "Los requisitos son los siguientes1.    Derecho de admisión 06 DA 06 de trámite.2.    Folder municipal3.    Solicitud verbal o nota simple.4.    títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real.5.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Plano del proyecto de certificación de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto.7.    Plano de lotes aprobado, fotocopia legalizada8.    Certificación.",
    },
    "COSTO CERTIFICACION PLANO LOTE": {	Content: "Los costos son los siguientes1.    Para el derecho de admisión 06 DA 06 del trámite el costo es de 27 bolivianos.2.    Para el folder municipal 5 bolivianos.3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos de lote aprobados por cada fotocopia un timbre el cual el costo es de 10 bolivianos.5.    Para la certificación 30 bolivianos.",
    },
    "TIEMPO CERTIFICACION PLANO LOTE": {Content: "La duración del trámite llega a ser de 5 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },

    "RESOLUCIONES COMPLEMENTARIAS": {Content: "Es un Trámite a realizar cuando se tiene algún dato que está errado dentro la Resolución Administrativa Municipal, y debe modificarse, en ese caso se emite una Resolución Complementaria. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.",
    },
    "DONDE RESOLUCIONES COMPLEMENTARIAS": {Content: "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "REQUISITOS RESOLUCIONES COMPLEMENTARIAS": {	Content: "Los requisitos son los siguientes1.    Derecho de admisión 07 DA 07.2.    Folder municipal3.    Memorial dirigido al sub alcalde solicitando Resolución complementaria.4.    títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real.5.    Impuestos pagados de las últimas 5 gestiones, fotocopia simple del comprobante de pago de impuestos o proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Resolución municipal, Fotocopia legalizada.7.    Fotocopia del carnet de identidad del o los propietarios.8.    Inspección de ser necesario.9.    Certificación.10.  Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito 9.",
    },
    "COSTO RESOLUCIONES COMPLEMENTARIAS": {	Content: "Los costos son los siguientes1.    Para el derecho de admisión 07 DA 07 del trámite el costo es de 27 bolivianos.2.    Para el folder municipal 5 bolivianos.3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.5.    Para la inspección 20 bolivianos.6.    Para la certificación 30 bolivianos.7.    Para la Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito 9.",
    },
    "tIEMPO RESOLUCIONES COMPLEMENTARIAS": {Content: "La duración del trámite llega a ser de 10 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },

    "CERTIFICACION USO SUELO": {Content: "Es un Trámite a realizar cuando se desee obtener una certificación de cualidades físicas urbanas de un territorio o sitio urbano definido para un determinado uso A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.La duración del trámite llega a ser de 15 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones"
    },
    "DONDE CERTIFICACION USO SUELO": {Content: "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "REQUISITOS CERTIFICACION USO SUELO": {	Content: "Los requisitos son los siguientes1.    Derecho de admisión 09 DA 09 .2.    Folder municipal3.    Memorial dirigido al sub alcalde solicitando el trámite.4.    títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real.5.    Impuesto al día Proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Plano de lote aprobado, fotocopia legalizada.7.    Plano de Lote geo referenciado preferentemente por el Instituto Geográfico Militar solo en caso de área Rural.8.    Fotocopia Carnet de identidad vigente del o los propietarios.9.    Certificación.10.  Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito 9.11.  Inspección",
    },
    "COSTO CERTIFICACION USO SUELO": {	Content: "Los costos son los siguientes1.    Para el derecho de admisión 09 DA 09 del trámite el costo es de 25 bolivianos.2.    Para el folder municipal 5 bolivianos.3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.5.    Para la certificación 30 bolivianos.6.    Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito 9.7.    Para la inspección 20 bolivianos.",
    },
    "TIEMPO CERTIFICACION USO SUELO ": {Content: "La duración del trámite llega a ser de 15 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "FIJACION LINEA A  NIVEL": {Content: "Es un Trámite a realizar cuando se requiere establecer la línea y nivel para la construcción del cordón y acera de un predio que tenga o no plano aprobado, A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.",
    },
    "DONDE FIJACION LINEA A  NIVEL": {Content: "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "REQUISITO FIJACION LINEA A NIVEL": {	Content: "Los requisitos son los siguientes1.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.2.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.3.    Plano de Lote Aprobado, fotocopia legalizada si tiene.4.    Título de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real Si tiene.5.    Fotocopia del Carnet de identidad vigente del o los propietarios.6.    Derecho de admisión 10 DA 10 del trámite.7.    Folder municipal.10.  Inspección topográfica.",
    },
    "COSTOS FIJACION LINEA NIVEL": {Content: "Los costos son los siguientes1.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.2.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.3.    Para el derecho de admisión 10 DA 10 del trámite el costo es de 28 bolivianos.4.    Para el folder municipal 5 bolivianos.5.    Para las Tasas de fijación de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 boliviano por metro lineal.6.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.7.    Para la inspección topográfica el costo es de 20 bolivianos",
    },
    "TIEMPO  FIJACION LINEA  NIVEL": {Content: "La duración del trámite llega a ser de 15 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },

    "FIJACION RASANTE SUPERFICIE LOTE": {Content: "Es un Trámite a realizar cuando no se cuenta con plano aprobado y se requiere establecer la rasante municipal y se desconoce la ubicación de las estacas respecto a la vía o vías colindantes; o que teniendo plano aprobado se ha modificado la rasante.Se requiere verificar una superficie de lote con o sin plano aprobado para conocer con exactitud su superficie, dimensiones de sus límites y posibles afectaciones en relación con la vía o vías colindantes. Se puede realizar en la Sub Alcaldía a la que corresponde el predio",
    },
    "DONDE FIJACION RASANTE SUPERFICIE LOTE": {Content: "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "REQUISITO  FIJACION RASANTE SUPERFICIE Se puede realizar en la Sub Alcaldía a la que corresponde el predio": {Content: "Los requisitos son los siguientes1.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.2.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.3.    Plano de Lote Aprobado, fotocopia legalizada si tiene.4.    Título de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real.5.    Plano demostrativo de la ubicación del lote en detalle en caso de no contar con Plano de Lote aprobado.6.    Fotocopia del carnet de identidad vigente del o los propietarios.7.    Derecho de admisión 11 DA 11 de trámite.8.    Folder municipal.9.    Formulario técnico Numero 012.14.  Certificación.15.  Inspección.",
    },
    "COSTO FIJACION RASANTE SUPERFICIE LOTE": {Content: "Los costos son los siguientes1.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.2.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.3.    Para el derecho de admisión 11 DA 11 del trámite el costo es de 28 bolivianos.4.    Para el folder municipal 5 bolivianos.5.    Para el formulario técnico N 012 el costo es de 12 bolivianos.6.    Para las Tasas de fijación de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 boliviano por metro lineal.7.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.8.    Para la tasa por verificación de superficie en lote el costo es de 0.50 bolivianos por metro cuadrado.9.    Para la tasa por verificación de superficie metro cuadrado en inmueble edificado el costo es de 0.80 bolivianos por metro cuadrado.10.  Para la certificación el costo es de 30 bolivianos.11.  Para la inspección el costo es de 20 bolivianos.",
    },
    "TIEMPO  FIJACION RASANTE SUPERFICIE LOTE": {Content: "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },

    " VISADO CONSTRUCCIoN EDIFICIO VIVIENDA": {Content: "Es un Trámite a realizar cuando se tiene un predio ubicado en área urbana con plano de lote aprobado y se desea construir una edificación mayor a tres plantas de uno o más bloques. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía",
    },
    "DONDE VISADO CONSTRUCCION EDIFICIO O VIVIENDA": {Content: "Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica centro Histórico los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial  Dirección de Planeamiento Pasaje Sucre.",
    },
    "REQUISITOS VISADO CONSTRUCCION EDIFICIO VIVIENDA": {Content: "Los requisitos son los siguientes1.    Visado del plano arquitectónico.2.    Derecho de admisión 12 DA 12 del trámite.3.    Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Poder o Carta Notariada.4.    Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro.5.    Planos arquitectónicos de Anteproyecto tres ejemplares y en medio magnético formato PDF, firmado y sellado por el Arquitecto con registro profesional correspondiente.6.    Plano de Lote aprobado, fotocopia legalizada.7.    Fotocopia del carnet de identidad vigente del o los propietarios.",
    },
    "COSTO VISADO CONSTRUCCION EDIFICIO VIVIENDA": {Content: "Los costos son los siguientes1.    Para el visado de plano arquitectónico el costo es de 30 bolivianos2.    El derecho de admisión 12 DA 12 de trámite tiene un costo de 5 bolivianos.3.    Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia.",
    },
    "TIEMPO VISADO CONSTRUCCION EDIFICIO VIVIENDA": {Content: "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "APROBACION PLANO CONSTRUCCION VIVIENDA": {	Content: "Es un Trámite a realizar para la aprobación de un proyecto de construcción o edificación de vivienda unifamiliar o más unidades de vivienda en un lote hasta tres plantas. Acargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía",
    },
    "DONDE APROBACION PLANO CONSTRUCCION VIVIENDA": {Content: "Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica (centro Histórico) los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial – Dirección de Planeamiento (Pasaje Sucre).",
    },
    "REQUISITOS APROBACION PLANO CONSTRUCCION VIVIENDA": {Content: "Los requisitos son los siguientes1.    Derecho de admisión 13 (DA 13) de trámite.2.    Folder Municipal.3.    Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Carta o Poder Notariado.4.    Plano de lote aprobado, fotocopia legalizada.5.    Plano del proyecto de construcción, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.6.    Fotocopia Carnet de identidad vigente del o los propietarios.7.    Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro.",
    },
    "COSTO APROBACION PLANO CONSTRUCCION VIVIENDA": {Content: "Los costos son los siguientes1.    El derecho de admisión 13 (DA 13) de trámite tiene un costo de 36 bolivianos.2.    Para el folder municipal tiene un costo de 5 bolivianos3.    Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia.4.    Para la tasa de aprobación residencial el costo es de 1.00 bolivianos por metro cuadrado.5.    Para la tasa de aprobación no residencial (comercial) el costo es de 2.00 bolivianos por metro cuadrado.6.    Para las Tasas de fijación de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 Boliviano por metro lineal.7.    Para subdistritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal",
    },
    "TIEMPO APROBACION PLANO CONSTRUCCION VIVIENDA": {Content: "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    " PLANO REMODELACION VIVIENDA": {Content: "Es un Trámite a realizar cuando se tiene plano de construcción aprobado y se desea realizar modificaciones funcionales y/o de volumetría o se requiere realizar una ampliación a la edificación, siempre y cuando la altura total construida (incluyendo la ampliación) sea hasta tres plantas.A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía",
    },
    "DONDE PLANO REMODELACION VIVIENDA": {Content: "En la Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica (centro Histórico) los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial – Dirección de Planeamiento (Pasaje Sucre).",
    },
    "REQUISITOS PLANO REMODELACION VIVIENDA": {Content: "Los requisitos son los siguientes1.    Derecho de admisión 14 (DA 14) de trámite.2.    Folder Municipal.3.    Fotocopia Carnet de identidad vigente del o los propietarios.4.    Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Poder o Carta Notariada.5.    Proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Plano de lote aprobado, fotocopia legalizada.7.    Plano del proyecto de ampliación o remodelación, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.8.    Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro.",
    },
    "COSTO PLANO REMODELACION VIVIENDA": {Content: "Los costos son los siguientes1.    El derecho de admisión 14 (DA 14) de trámite tiene un costo de 26 bolivianos.2.    Para el folder municipal tiene un costo de 5 bolivianos3.    Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia.4.    La tasa de aprobación de remodelación sin cambiar función tiene un costo de 0.25 bolivianos por metro cuadrado.5.    La tasa de aprobación de remodelación cambiando función tiene un costo de 0.50 bolivianos por metro cuadrado.6.    La tasa de aprobación de ampliación área residencial tiene un costo de 1.00 bolivianos por metro cuadrado.7.    La tasa de aprobación de ampliación área no residencial tiene un costo de 2.00 bolivianos por metro cuadrado.",
    },
    "TIEMPO PLANO REMODELACION VIVIENDA": {Content: "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "PLANO CONSTRUCCION EDIFICIO": {	Content: "Es un Trámite a realizar para la aprobación de un proyecto de construcción de una edificación superior a tres plantas, cuando usted posee un predio ubicado en área urbana con plano de lote aprobado. Acargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía",
    },
    "DONDE PLANO CONSTRUCCION EDIFICIO": {Content: "En la Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica (centro Histórico) los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial – Dirección de Planeamiento (Pasaje Sucre).",
    },
    "REQUISITOS PLANO CONSTRUCCION EDIFICIO ": {Content: "Los requisitos son los siguientes1.    Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Poder o Carta Notariada.2.    Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro.3.    Impuestos al día (Proforma del sistema RUAT que evidencie el no adeudo tributario).4.    Fotocopia Carnet de identidad vigente del o los propietarios.5.    Licencia Ambiental o constancia de inicio de trámite debidamente acreditado por la secretaría Departamental de los Derechos de la Madre Tierra.6.    Planos Arquitectónicos de Anteproyecto visado por el Gobierno Autónomo Municipal de Cochabamba.7.    Plano del proyecto de construcción, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto.8.    Planos del Proyecto Estructural, si sobrepasa los 3 pisos, tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. También debe anexarse la Memoria de Cálculo y el Estudio de Suelos.9.    Plano de Instalación Hidrosanitaria, tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. También debe anexarse la Memoria de Cálculo.10.  Plano de Instalación Eléctrica, tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. También debe anexarse la Memoria de Cálculo.11.  Plano de Instalaciones Especiales cuando corresponda (Ejm: gas, aire acondicionado, ascensores, etc.), tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el profesional con registro que lo acredite. También debe anexarse la Memoria de Cálculo.",
    },
    "COSTO PLANO CONSTRUCCION EDIFICIO": {Content: "Los costos son los siguientes1.    El derecho de admisión 15 (DA 15) de trámite tiene un costo de 26 bolivianos.2.    Para el folder municipal tiene un costo de 5 bolivianos3.    La tasa de aprobación residencial tiene un costo de 1.00 bolivianos por metro cuadrado.4.    La tasa de aprobación no residencial (comercial) tiene un costo de 2.00 bolivianos por metro cuadrado.5.    La tasa de aprobación del plano estructural tiene un costo de 2.00 bolivianos por metro al cubo.6.    La tasa de fijación de rasante por metro lineal de los sub distritos 1 al 16 tiene un costo de 1.00 bolivianos por metro lineal.7.    Para los sub distritos 17 al 32 tiene un costo de 1.5 bolivianos por metro lineal.",
    },
    "TIEMPO PLANO CONSTRUCCION EDIFICIO": {Content: "La duración del trámite llega a ser de 40 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.",
    },

    "TRANSFERENCIA INMUEBLE": {Content: "Los requisitos son los siguientes:1.	original y copia de la declaración jurada aprobada del sistema de visación de minuta de inmuebles.2.	fotocopia del comprobante de pago de impuestos a la propiedad del bien inmueble de la última gestión.3.	original de la minuta de compraventa o documento privado con reconocimiento de firmas.4.	fotocopia de la cédula de identidad del comprador (en caso de no tener registro en el padrón municipal de contribuyente.5.	fotocopia de cédula de identidad a color.6.	1 foto 3 por 3 fondo rojo.7.	fotocopia de la cédula de identidad del vendedor.8.	título de propiedad y folio real legalizado por la sub alcaldía correspondiente.9.	plano del bien inmueble aprobado por la sub alcaldía correspondiente o el departamento de normas urbanas y rurales (propiedad horizontal), original y fotocopia.10. registro catastral emitido por la comuna correspondiente (original y fotocopia).11. en caso de existir poder notariado del comprador y/o vendedor fotocopia legalizada de la notaría de fe pública.",
    },
    "TRANSFERENCIA ESPECIAL INMUEBLES": {Content: "Los requisitos son los siguientes:1.    FOLIO REAL (original y fotocopia legalizada por la Sub Alcaldía correspondiente).2.    Título de propiedad, Declaratoria de Herederos, Anticipo de legítima u otro (original y fotocopia legalizada).3.    Fotocopia de la cédula de Identidad de los ACTORES (En caso de NO tener registro en el Padrón Municipal de Contribuyente (PMC) adjuntar: Fotocopia de Cédula de Identidad a color y 1 Foto 3 por 3 Fondo Rojo).4.    Registro Catastral (Original y fotocopia).5.    Comprobante de pago por concepto del Impuesto a la Propiedad de Bien Inmueble - (IPBI), a la fecha de pago del Título de Propiedad.6.    Certificación del Servicio Impuestos Nacionales.7.    Certificación del Gobierno Autónomo Departamental de Cochabamba del pago del impuesto a la Transferencia. (A partir de la gestión 2016).Recomendaciones: Con la finalidad de recibir una atención efectiva y oportuna, recomienda ordenar los documentos conforme lo descrito en originales y copias, para realizar el registro de la Transferencia Especial del Bien Inmueble de la Jurisdicción del Gobierno Autónomo Municipal de Cochabamba.",
    },

    "REGULARIZACION ACCIONES DERECHOS INMUEBLES": {Content: "Recomendaciones: Establecer los requisitos básicos para proceder a la modificación del porcentaje definido para la propiedad del bien inmueble cuando corresponda, en función del FOLIO REAL ACTUALIZADO.Los requisitos son los siguientes:1.    Comprobante de Pago del Impuesto a la Propiedad del Bien Inmueble de una gestión pasada.2.    Fotocopia de la cédula de identidad del titular(es) para su registro en el padrón municipal de contribuyente, (En caso de NO tener registro Adjuntar: Fotocopia de cédula de identidad a color y 1 Foto 3 por 3 Fondo Rojo).3.    TÍTULO DE PROPIEDAD acredita derecho propietario del titular del inmueble (Original y copia).4.    FOLIO REAL (ACTUALIZADO) original y fotocopia legible de todos los asientos registrados.5.    Plano del bien inmueble aprobado por la Sub Alcaldía correspondiente o el Departamento de Normas Urbanas y Rurales (Propiedad Horizontal) – (Original y Fotocopia).6.    REGISTRO CATASTRAL emitido por Comuna Correspondiente (Original y fotocopia).7.    En caso de existir Poder notariado, presentar la original y copia que le faculte la realización del presente trámite.8.    Otros documentos que acrediten el derecho propietario en función al folio real y su asiento debidamente registrado.",
    },
    "EXENCION INMUEBLE DESCUENTO TERCERA EDAD": {Content: "Los requisitos son los siguientes:1.    FOTOCOPIA, simple de Testimonio de Propiedad o Folio Real a nombre del titular que solicite la exención. 2.    FOTOCOPIA, de Cédula de identidad que consigne la dirección del Inmueble sujeto o exención. 3.    FOTOCOPIA del comprobante de pago de Impuesto del Inmueble o proforma resumida.4.    Declaración jurada impresa en caso de ser terceras personas (si Corresponde) para el descuento de la tercera edad.Recomendaciones:Los sujetos pasivos de más de 60 años de edad, gozarán del beneficio de la exención establecido en la Disposición Adicional Primera de la ley Municipal Número 0719/2020 de Incentivo Tributario, En caso de ser 2 o más propietarios, todos deben sobrepasar los 60 años de edad, caso contrario no corresponde.La dirección detallada en la cédula de identidad debe ser la misma del inmueble que solicita la exención por tercera edad, caso contrario no Corresponde. En las declaraciones juradas que solicitan la declaración jurada deberán firmar el o los titulares con su huella dactilar y ubicar correctamente en el plano digital.",
    },
    "VISACION MINUTA": {Content: "Los requisitos son los siguientes:1.    DERECHO DE ADMISIÓN (DA -99), la persona natural o jurídica debe cancelar el derecho de Admisión de trámite al número cuenta:  DA-99 por 20 bolivianos en la Entidad Financiera Autorizada o Caja Recaudadora del Gobierno Autónomo Municipal de Cochabamba.2.    DECLARACIÓN JURADA IMPRESA, EI formulario de Visación de Minutas deberá estar firmado por el comprador o vendedor o apoderado, debiendo verificar la firma con la cédula de identidad.3.    ORIGINAL DEL REGISTRO CATASTRAL O CERTIFICACIÓN CATASTRAL, en caso de ser primera transferencia no corresponde. (último asiento a nombre del titular).4.    ORIGINAL DEL FOLIO REAL O INFORMACIÓN RÁPIDA ACTUALIZADO (emitido en la presente gestión a del titular).5.    Cuando el vendedor es persona jurídica: Fotocopia del NIT, Poder del representante Legal y Cédula de identidad.6.    FOTOCOPIA DE LA CÉDULA DE IDENTIDAD de las partes intervinientes VENDEDORES y COMPRADORES.7.    PLANO APROBADO DE LOTE, CONSTRUCCIÓN O UNIDAD DE PROPIEDAD HORIZONTAL LEGALIZADO, según el objeto de La transferencia.8.    MINUTA DE TRANSFERENCIA DEL BIEN INMUEBLE (con firma de las partes y el abogado).9.    ORIGINAL DEL TÍTULO DE PROPIEDAD.10. ORIGINAL DEL PODER DE REPRESENTACIÓN LEGAL (otorgado por el comprador o vendedor).RECOMENDACIONES:Para la admisión del trámite de visación, el contribuyente debe cancelar el derecho de admisión (DA 99), llenar la declaración jurada en el sistema de visaciones y realizar la aprobación de la declaración.El inmueble no deberá consignar mora tributaria a la fecha de su registro.Para los casos de venta judicial adjuntar. SENTENCIA, ACTA DE REMATE Y AUTO DE ADJUDICACIÓN.Una vez revisada toda la documentación original, se deberá presentar adjunta una copia simple en el mismo orden.",
    },

    
    "REGISTRO VEHICULO ":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, certificado único de datos técnicos de automotor, póliza de importación, factura comercial (original y fotocopia), y en caso de ser apoderado presentar el poder de representación legal. La unidad a cargo es la Dirección de Recaudaciones ",
    },
    "REGISTRO VEHICULO FACTURA TRANSFERENCIA ":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, póliza de importación, factura comercial (original y fotocopia), documento de compra y venta (original y fotocopia), fotocopia vigente del vendedor y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones ",
    },
    "REGISTRO IMPORTACION VEHICULO":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, póliza de importación, y en caso de ser apoderado presentar el poder de representación legal. La unidad a cargo es la Dirección de Recaudaciones",
    },
    "INSCRIPCION VEHICULO TRANSFERENCIA":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, póliza de importación, Documento compra y venta (original y fotocopia), Fotocopia de documento de identidad del vendedor y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones ",
    },
    "TRANSFERENCIA VEHICULO":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehículo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representación legal. La unidad a cargo es la Dirección de Recaudaciones",
    },
    "TRANSFERENCIA VEHICULO CAMBIO RADICATORIA":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehículo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones ",
    },
    "CAMBIO RADICATORIA VEHICULO.":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, registró a la propiedad del vehículo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones ",
    },
    "CAMBIO SERVICIO PARTICULAR  PUBLICO.":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, registró a la propiedad del vehículo automotor terrestre (original y fotocopia), Certificado de transporte del servicio público, fotocopia de licencia o equivalente, y en caso de ser apoderado presentar el poder de representación legal. La unidad a cargo es la Dirección de Recaudaciones",
    },
    "CAMBIO RADICATORIA VEHICULO POSEEDOR.":{ content:"Los requisitos son  DECLARACIÓN JURADA VIRTUAL  Cambio de Radicatoria Poseedor  registro a la propiedad del vehículo automotor terrestre (original y fotocopia),fotocopia de cédula de identidad del poseedor, fotocopia del documento que acredite su condición de poseedor de buena fe (opcional).La unidad a cargo es la Dirección de Recaudaciones ",
    },
    "DUPLICADO POR EXTRAVIO CERTIFICADO PROPIEDAD VEHICULO.":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Original (Para Verificación) y Fotocopia de la Factura de Publicación en un medio de prensa escrita de circulación nacional, comunicando el extravío del Certificado de Registro de Propiedad del Vehículo Automotor por tres  días continuos, y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones ",
    },
    "DUPLICADOS ROBO CERTIFICADO PROPIEDAD VEHICULO.":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Original y Fotocopia de la Certificación de Denuncia por Robo/Hurto del Certificado de Registro de Propiedad del Vehículo Automotor (Policía Boliviana - FELCC), Original (Para Verificación) y Fotocopia de la Factura de Publicación en un medio de prensa escrita de circulación nacional, comunicando el extravío del Certificado de Registro de Propiedad del Vehículo Automotor por tres (3) días continuos, y en caso de ser apoderado presentar el poder de representación legal.  La unidad a cargo es la Dirección de Recaudaciones.",
    },
    " DUPLICADO DETERIORO CERTIFICADO PROPIEDAD VEHICULO .":{ content:"Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, original del certificado de registro a la propiedad del vehículo automotor terrestre deteriorado y en caso de ser apoderado presentar el poder de representación legal. ",
    },
    "DUPLICADO DETERIORO PLACAS.":{ content:"Los requisitos son Original y fotocopia del certificado de registro a la propiedad del vehículo automotor terrestre, devolución al Gobierno Autónomo Municipal de Cochabamba de las placas metálicas deterioradas, certificado emitido por la unidad correspondiente de la policía boliviana y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones",
    },
    "REGISTRO  PROPIEDAD  VEHICULO.":{ content:"Los requisitos son Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Derecho de admisión 102 (DA  102)  transferencia especial, Original y fotocopia del certificado de registro a la propiedad del vehículo automotor terrestre, testimonio que acredite el motivo de transferencia, Fotocopia de la factura, y en caso de ser apoderado presentar el poder de representación legal.,La unidad a cargo es la Dirección de Recaudaciones"},
    "REEMPLAQUE VEHICULO.":{ content:"Los requisitos son Los requisitos son Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Original y Fotocopia de la Comunicación al Poseedor (COPO) Documento a Recabarse en Aduana Nacional o Póliza Titularizada del Automotor (PTA), de no Contar Con El Original Presentar La Certificación de la Denuncia Registrada en la FELCC, Original y Fotocopia del Carnet de Propiedad (Anterior), de no contar con el documento original deberá presentar la Certificación de la Denuncia Registrada en la FELCC, Declaración Jurada de No Emplacado (a Obtener en Recaudaciones), Original y Fotocopia de Informe De Datos Técnicos – Relevamiento de las Características del Vehículo emitido por la Sección correspondiente del Gobierno Autónomo Municipal de Cochabamba (formulario RUA 08), de Corresponder. y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones",
    },
    "BAJA TRIBUTARIA ROBO.":{ content:"Los requisitos son, Original de la certificación de denuncia de robo emitida por la policía boliviana, original del certificado de propiedad de vehículo automotor original y copia de cédula de identidad del titular, impuestos al día, derecho de admisión 101 (DA  101), folder municipal, timbre para la emisión de la certificación y en caso de ser apoderado presentar el poder de representación legalLa unidad a cargo es la Dirección de Recaudaciones.",
    },
    "BAJA TRIBUTARIA VIDA UTIL.":{ content:"Los requisitos son, Original y Copia Legalizada del Documento que Evidencie la condición de Obsoleto o Fin de Vida Útil Emitido por el Gobierno Autónomo Municipal de Cochabamba Devolución del Certificado de Propiedad del Vehículo Automotor Terrestre (Certificado de Registro de Propiedad del Vehículo Automotor), Devolución de Placas y Plaquetas, No debe ser Otra Radicatoria, Tampoco debe registrar gravámenes y los impuestos al Dia para proceder a la Baja, Original y Copia de la Cédula de Identidad del Sujeto Pasivo, Derecho de Admisión 101 (DA  101)– Baja de Vehículo – a ser Depositado en la cuenta Por 37 Bolivianos. En Caso de ser Apoderado Además debe adjuntar lo siguiente Original (Para Verificación) y Fotocopia de Poder de representación Legal, Fotocopia de Documento de Identidad del Apoderado.La unidad a cargo es la Dirección de Recaudaciones",
    },

    "DISTRITOS SUBDISTRITOS  ZONAS PERTENECEN SUB ALCALDIA TUNARI":{ content:"Distrito 1 conformado por sub distrito 25  Zona Aranjuez Alto,  Sub Distrito 26  Zona Mesadilla.Distrito 2 conformado por sub distrito 22  Zona Condebamba, Sub Distrito 23  Zona Temporal Pampa, Sub Distrito 24  Zona Queru Queru Alto, Sub Distrito 1  Zona Mayorazgo.Distrito 13 Parque Nacional Tunari.",
    },

    "DISTRITOS SUBDISTRITOS  ZONAS PERTENECEN SUB ALCALDIA MOLLE":{ content:"Distrito 3 conformado por sub distrito 21  Zona Sarcobamba, Sub Distrito 37  Zona Chiquicollo.distrito 4 conformado por sub distrito Distrito 10  Zona Chimba, Sub Distrito 27  Zona Villa Bush, Sub Distrito 28  Zona Coña Coña.",
    },

    "DISTRITOS SUBDISTRITOS  ZONAS PERTENECEN SUB ALCALDIA ALEJO CALATAYUD  ":{ content:"Distrito 5 conformado por sub distrito 14  Zona La Maica, Sub Distrito 15  Zona Jaihuayco, Sub Distrito 17  Zona Lacma, Sub Distrito 18  Zona Ticti, Sub Distrito 20  Zona Alalay Valle Hermoso.Distrito 8 conformado por sub distrito  Zona Uspha Uspha.",
    },

    "DISTRITOS, SUBDISTRITOS  ZONAS PERTENECEN SUB ALCALDIA VALLE HERMOSO":{ content:"Distrito 6 conformado por sub distrito 16  Zona Alalay Norte.Distrito 7 conformado por sub distrito 19  Zona Alalay Sud.Distrito 14 conformado por sub distrito 20  Zona Valle Hermoso.",
    },

    "DISTRITOS SUBDISTRITOS Y ZONAS PERTENECEN SUB ALCALDIA ITOCTA":{ content:"Distrito 9 conformado por sub distrito 29  Zona Tamborada Pukarita, Sub Distrito 30  Zona 1 de mayo,Sub Distrito 31  Zona Pucara Grande Norte, Sub Distrito 35  Zona Pucara Grande Sur, sub Distrito 36  Zona Pucara Grande Oeste.",
    },

    "DISTRITOS SUBDISTRITOS  ZONAS PERTENECEN A LA SUB ALCALDIA ADELA ZAMUDIO ":{ content:"Distrito 10 conformado por sub distrito  7  Zona Noroeste, sub Distrito 8  Zona Noreste, Sub Distrito 11  Zona Sudoeste, Sub Distrito 12  Zona Sudeste.Distrito 11 conformado por sub distrito 9  Zona Muyurina, Sub Distrito 13  Zona Las Cuadras.Distrito 12 conformado por sub distrito 2  Zona Sarco,Sub Distrito   Zona Cala Cala,Sub Distrito 4  Zona Queru Queru,Sub Distrito 5  Zona Tupuraya,Sub Distrito 6  Zona Hipódromo.",
    },

    " DISTRITOS, SUBDISTRITOS ZONAS PERTENECEN SUB ALCALDIA TAMBORADA ":{ content:"Distrito 15 conformado por sub distrito 32  Zona Valle Hermoso Oeste, Sub Distrito 33  Khara Khara Arrumani, sub distrito 35 zona pukara grande sur.",
    },
    "RESTRICCION VEHICULAR":{content:" Para disminuir el número de vehículos que circulan en la zona crítica de la ciudad, facilitar la circulación de vehículos en el área central, posibilitar un eficiente servicio de transporte de pasajeros minimizando los problemas de congestionamiento vial y los tiempos de desplazamiento y disminuir la contaminación ambiental provocada por la emisión de gases de escape de vehículos por el congestionamiento vial.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "AREA RESTRICCIÓN VEHICULAR":{content:"la restricción de ingreso y circulación de vehículos al área central de la ciudad está limitada por las siguientes vías Avenida Oquendo, Circuito Bolivia Oeste, Avenida 6 de Agosto, Avenida Ayacucho, Corredor San Sebastián, Avenida Aroma, Calle Junín, Calle Gral. Achá, Avenida Ayacucho, Avenida Rafael Urquidi, Avenida Ramón Rivero y cierre con la Avenida Oquendo.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "RESTRICCION VEHICULAR POR NUMERO DE PLACA EN COCHABAMBA":{ content:"Día Lunes no puede ingresar si el último número de su placa es cero y uno, día Martes no puede ingresar si el último número de su placa es dos y tres, día miércoles no puede ingresar si el último número de su placa es cuatro y  cinco, día jueves no puede ingresar si el último número de su placa es seis y siete, día viernes no puede ingresar si el último número de su placa es ocho y nueve.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },
    "RESTRICCION VEHICULAR POR NUMERO DE PLACA ":{ content:"Día Lunes no puede ingresar si el último número de su placa es cero y uno, día Martes no puede ingresar si el último número de su placa es dos y tres, día miércoles no puede ingresar si el último número de su placa es cuatro y  cinco, día jueves no puede ingresar si el último número de su placa es seis y siete, día viernes no puede ingresar si el último número de su placa es ocho y nueve.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },
    "PLACA NO INGRESA LUNES RESTRICCION VEHICULAR EN COCHABAMBA ":{content:"No puede ingresar si el último número de su placa es cero y uno.",
    },
    "PLACA NO INGRESA MARTES  RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el último número de su placa es dos y tres.",
    },
    "PLACA NO INGRESA MIERCOLES RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el último número de su placa es cuatro y cinco.",
    },
    "PLACA NO INGRESA JUEVES  RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el último número de su placa es seis y siete.",
    },
    "PLACA NO INGRESA DIA VIERNES  RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el último número de su placa es ocho y nueve.",
    },
    "HORARIO RESTRICCION VEHICULAR EN COCHABAMBA":{content:"el horario establecido para el control y cumplimiento de la restricción de ingreso y circulación de vehículos es de 7 30 mañana  a 19  tarde.",
    },
    "VEHICULOS APLICA RESTRICCION VEHICULAR":{content:"se aplica todo vehículo del servicio particular, todo vehículo de servicio de radio Taxi, Radio Móvil, Taxi Asociado,  Taxi Libre, todos los vehículos oficiales, excepto los vehículos oficiales del Presidente del estado plurinacional, Gobernador, Alcalde Municipal, así como vehículos de Auxilio, emergencia y medios de Comunicación, todos los vehículos de los precitados incisos 1, 2 y 3, registrados en el Gobierno Autónomo Municipal de Cochabamba, los registrados en otros municipios que desarrollan su trabajo en la jurisdicción del Cercado y aquellos que están en tránsito por la ciudad de Cochabamba.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },
    "EXCLUIDOS RESTRICCION VEHICULAR":{content:"Los vehículos de transporte urbano de pasajeros de las modalidades correspondientes a Buses, Microbuses, Minibuses y Taxitrufis definidos en el Artículo 11 del Reglamento Municipal para el Servicio de Transporte Público de Pasajeros aprobado por Ordenanza Municipal Número 2998 del 2003, vehículos que por contrato de construcción de obras o de servicios estén vinculados con el Gobierno Autónomo Municipal de Cochabamba y cuenten con autorización de la Dirección de Planeamiento, a través del Departamento de Ordenamiento de Sistemas de Movilidad Urbana.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "MULTA RESTRICCION VEHICULAR":{content:"El ingreso de un vehículo al área descrita en el Artículo Primero en días en que la terminación numérica de la placa se encuentre restringida, será considerado como una infracción, para lo cual se aplicará una multa de Bolivianos 100.En caso de resistencia o ausencia del propietario o conductor del vehículo, el mismo será trasladado a garaje de resguardo.Para que un vehículo conducido o trasladado con remolque a garaje de resguardo pueda ser liberado, el conductor o propietario deberá acreditar la propiedad o tenencia legal del vehículo, haber cancelado la Multa correspondiente en la Dirección de Recaudaciones e Ingresos del Municipio; cancelar la tarifa de Bolivianos 100 por el traslado del vehículo a la empresa convocada para el efecto y cancelar y Bolivianos  10 por día de permanencia del vehículo en garaje de resguardo.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "FOTOMULTA EN COCHABAMBA":{content:"Es un sistema de vigilancia automatizado que utiliza cámaras para capturar imágenes de vehículos que infringen las normas de restricción vehicular, estas cámaras registran la placa del vehículo y la fecha y hora de la infracción, y luego se emite una multa al propietario del vehículo.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "NORMATIVA RESTRICCION VEHICULAR":{content:"En la ley Municipal número  395 del 2019, de regulación de ingresos no tributariosOrdenanza Municipal  Número 4394 del 2012,  Restricción vehicular.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "ESTACIONAMIENTO TARIFADO":{content:"Regular las condiciones de utilización y uso de las vías públicas con fines de estacionamiento temporal de vehículos particulares, así como, la disposición de paradas para el servicio de transporte público de pasajeros y la aplicación de las sanciones correspondientes.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "HORARIOS PARA ESTACIONAMIENTO":{content:"Los estacionamientos vehiculares permitidos podrán ser utilizados mientras no exista una restricción que prohíba su uso.Los horarios de uso de las vías de estacionamiento tarifado son desde las 8 de la mañana  hasta las 12 de la tarde y desde las 14 30 de la tarde hasta las 18 30 de la tarde de lunes a viernes y los sábados de 8 de la mañana  hasta las 13 de la tarde.Los horarios de control en las vías de estacionamiento prohibido se determinarán en función a los niveles de congestión, demoras, perfiles de vía, volumen de vehículos y otros parámetros técnicos, y estarán establecidos mediante Decreto Municipal ReglamentarioLa unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes.",},

    "TARIFAS ESTACIONAMIENTO":{content:"La tarifa única por cada treinta minutos de Estacionamiento en las vías de estacionamiento tarifado, es de bolivianos unoLa unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes.",
    },

    "PAGO ESTACIONAMIENTO":{content:"El pago por el servicio de estacionamiento municipal se puede realizar con el personal del servicio de estacionamiento municipal  distribuido por las áreas de parqueo tarifado, por la aplicación Innova para celulares o la página web de Innova La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes.",
    },

    "MULTA NO PAGO ESTACIONAMIENTO":{content:"La no cancelación por uso del estacionamiento tiene una multa de 25 Bolivianos  la primera vez y 35 Bolivianos  la reincidencia.Puede realizar el pago a través de la plataforma INNOVA, cajeros municipales o bancos autorizadosLa unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "MULTA POR PASAR TIEMPO ESTACIONAMIENTO":{content:"La permanencia por mayor tiempo del efectivamente cancelado DEL ESTACIONAMIENTO, con una tolerancia de 15 minutos  tiene una multa de 25 Bolivianos  la primera vez y 35 Bolivianos la reincidencia.Puede realizar el pago a través de la plataforma INNOVA, cajeros municipales o bancos autorizadosLa unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "MULTA OCUPAR MAYOR ESPACIO":{content:"La ocupación de más de un espacio demarcado, impidiendo con ello que sea utilizado por otro vehículo tiene una multa de 25 Bolivianos  la primera vez y 35 Bolivianos  la reincidencia.Puede realizar el pago a través de la plataforma INNOVA, cajeros municipales o bancos autorizados",
    },

    "Permanecer engrapado":{content:"Permanecer con el dispositivo de inmovilización por más de dos horas tiene un costo de 100 Bolivianos  por la multa y cubrir el costo de 100 Bolivianos por el traslado a garaje de resguardo, al propietario de la grúa.Puede realizar el pago a través de la plataforma INNOVA, cajeros municipales o bancos autorizadosLa unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "Dañar o destruir señalización.":{content:"La destrucción de la señalización vertical tiene una multa de 100 Bolivianos  más los costos de reposición de la señalización dañada.Puede realizar el pago a través de la plataforma INNOVA, cajeros municipales o bancos autorizadosLa unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "TRASLADO VEHÍCULO":{content:"En caso de resistencia al pago de la multa o ausencia del propietario o conductor del vehículo infractor, el vehículo será trasladado a garaje de resguardoPara que un vehículo conducido o trasladado con remolque a garaje de resguardo pueda ser liberado, el conductor o propietario deberá acreditar la propiedad o tenencia legal del vehículo, y haber canceladoLa multa correspondiente a la infracción.Por el traslado del vehículo al garaje de resguardo. Por la permanencia del vehículo en garaje de resguardo, la suma de bolivianos 10 por día.Puede realizar el pago a través de la plataforma INNOVA, cajeros municipales o bancos autorizadosLa unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "DONDE PAGO MULTAS POR INFRACCION EN COCHABAMBA":{content:"La cancelación de las multas y sanciones será realizada de manera virtual en la plataforma INNOVA,  en oficinas de la Dirección de Recaudaciones, la División del Servicio de Estacionamiento Municipal, entidades bancarias habilitadas para el servicio de cancelación de infracciones.",
    },

    "NORMATIVA  ESTACIONAMIENTO COCHABAMBA":{content:"La Constitución Política del Estado Artículos 283 y 302.Ley numero 31 Marco de Autonomías y Descentralización Andrés Ibáñez.Ley numero 165 General de Transportes.Ley Municipal numero 395 del 2019, De regulación de ingresos no tributarios.Ley Municipal numero 1087 del 2022,  De regulación de estacionamientos temporales en vías públicas de la ciudad de Cochabamba.Ordenanza Municipal numero 4398 del 2012, Reglamento sobre estacionamiento vehicular.",
    },

    "TAXI SEGURO COCHABAMBA":{content:"Tiene por objeto regular y dar seguridad a los pasajeros de transporte público de taxis y radiotaxis, estableciendo el procedimiento para el registro, obligaciones de los conductores, facultades del Gobierno Autónomo Municipal de Cochabamba, infracciones, sanciones y entrega de distintivos de Registro Vehicular a los propietarios de vehículos en el municipio de Cochabamba y poder denominarlos Taxi Seguro.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",
    },

    "TAXI SEGURO COCHABAMBA":{content:"Para Reducir el índice de hechos ilícitos en la ciudad de Cochabamba por medio de acciones que uniformizan los distintivos de identificación de los servicios de taxis y radiotaxis.Determinar los requisitos, plazos y condiciones para la recepción de documentación, llenado en el sistema de registro y entrega del Distintivo del Registro Vehicular así como el colocado en los vehículos automotores de tipo taxi y radio taxi.Contar con una base de datos actualizada de la población de conductores de taxis y radiotaxis así como de las movilidades utilizadas.Establecer las infracciones y sanciones ante el incumplimiento de la obtención del Distintivo de Registro Vehicular.La unidad a cargo es la Dirección de Movilidad Urbana a través de sus unidades competentes",},

    "OBLIGACIONES  TAXI SEGURO  COCHABAMBA":{content:"Las personas naturales o jurídicas que brindan el Servicio de Transporte Público de Pasajeros en la modalidad de Taxi o Radio Taxi, están obligadas a:El Propietario del vehículo, debe recabar y exhibir el Distintivo Autoadhesivo del Registro Vehicular (RV) de su vehículo, en el ángulo superior derecho del parabrisas delantero del vehículo.El Propietario del vehículo, debe implementar a su costo todas las características adicionales de Identificación del Registro Vehicular (RV).Las Empresas de Radio Taxis, deben exigir a todos sus conductores, la presentación del RV como requisito antes de su incorporación.Todo vehículo registrado como Taxi Seguro con carácter Obligatorio deberá ser conducido por un conductor que cuente con la Tarjeta de Identificación del Conductor.(TIC) correspondiente.",
    },

    "REQUISITOS TRAMITE REGISTRO VEHICULAR":{content:"El propietario de Taxis o Radio Taxi, deberá registrar su vehículo en las oficinas de la Dirección de Movilidad Urbana adjuntando la siguiente documentaciónFotocopia de Carnet de Identidad.Fotocopia del RUAT.Fotocopia del certificado de SOAT vigente.Fotocopia del Certificado de la Inspección Técnica Vehicular.Fotocopia de la TIC otorgada por el Organismo Operativo de Tránsito.Cumplir con la inspección física del vehículo por la DGMU a través del DTP.Todos los interesados al momento de presentar las fotocopias, deben exhibir el original de los documentos.",
    },

    "REGISTRO VEHICULAR  COCHABAMBA":{content:"Recibida la documentación el (la) funcionario (a) del DTP, verificará la presentación de todos los requisitos y la autenticidad de las fotocopias respecto de los originales.En caso de que faltare uno o varios de los requisitos establecidos, se procederá a la devolución inmediata de la documentación al solicitante y se tendrá como no presentada.Cumplida la presentación de todos los requisitos, el (la) funcionario (a) registrará la carpeta y datos del vehículo y de su propietario.Se remitirá los antecedentes al técnico encargado para la digitalización de la información y registro del vehículo con un número de serie correlativo.Posteriormente, el responsable del DTP, comunicará al responsable de la DGMU quien a su vez autorizará la impresión del distintivo de registro del vehículo y dispondrá el pegado del mismo en el vehículo automotor.La carpeta y antecedentes del trámite será archivada y quedará bajo custodia del DTP.El trámite desde su inicio hasta la entrega del distintivo del RV tendrá una duración máxima de 5 días hábiles.",
    },

    " BAJA REGISTRO VEHICULAR COCHABAMBA":{content:"El propietario que deje de prestar el Servicio Público de Transporte en la modalidad de Taxi o Radio Taxi, o transfiera el vehículo, debe solicitar mediante una carta dirigida al Alcalde o Alcaldesa del GAMC la baja del Registro del Vehículo y retiro del distintivo del motorizado.En caso de transferencia del vehículo y que el nuevo propietario continúe realizando el Servicio Público de Transporte en la modalidad de Taxi o Radio Taxi, este deberá realizar el trámite para Registro del Vehículo cumpliendo los requisitos establecidos en la presente Ley Municipal.",
    },

    "INFRACCIONES SANCIONES REGISTRO VEHICULAR":{content:"El propietario del vehículo que brinde el servicio de Taxis o Radiotaxis sin contar con el RV será sujeto a una multa de 300.00 Bolivianos. El Propietario del vehículo que brinde el servicio de Taxis o Radiotaxis sin exhibir el RV será sujeto a una multa de 150.00 Bolivianos.El propietario del vehículo que brinde el servicio de Taxi o Radio Taxi sin cumplir con las características de identificación del RV será sujeto a una multa de 100 Bolivianos.El pago de las multas se realizará en las oficinas de la Dirección de Recaudaciones del Gobierno Autónomo Municipal de Cochabamba, a través de la plataforma INNOVA o bancos autorizado",},


    "SUB ALCALDIAS  COCHABAMBA":{content:"LAS SUB ALCALDÍAS sonTunari ubicada en la Avenida. Circunvalación y Melchor Pérez de Olguín.Molle ubicada en la Avenida Daniel Campos (Mercado el Rosario)Valle Hermoso, ubicada en Circuito Bolivia, esquina avenida Barranca, lado oeste del Campo Ferial.Adela Zamudio, ubicada en la Avenida Uyuni casi puente Recoleta NÚMERO 654Alejo Calatayud, ubicada en la Avenida. Petrolera kilómetro 2 y medio  edificio verde.Itocta ubicada en la Avenida Petrolera kilómetro  4 Entrando al PolitécnicoTamborada.",
    },

    "biografía  Manfred Reyes Villa":{content:" El Capitán Manfred Reyes Villa Bacigalupi actualmente Alcalde de Cochabamba, es un militar retirado, político y empresario. Es cochabambino por decisión, ama a su gente, a su tierra y sobre todo a Dios, nació en La Paz en 1955. Actualmente está casado y tuvo 7 hijos, dos de los cuales ya han fallecido.Estudió en el Colegio Israelita de la ciudad de La Paz; en 1973 ingresó a la Escuela Militar del Ejército, donde en 1977 obtuvo el grado de Segundo Teniente. Durante su carrera militar ocupó importantes cargos como docente en Asuntos de Especialización Militar, y trabajó como Agregado Militar de la Embajada de Bolivia en Brasil y Estados Unidos. En 1988, por motivos personales, abandona definitivamente su carrera militar con el grado de Capitán del Ejército para residir en Estados Unidos dedicándose a la vida civil y familiar, y en su área de formación académica (Business Management), ocupando también importantes cargos. como Vicepresidente de Crawford International en Silver Spring, Maryland Estados Unidos.A su regreso a Bolivia, inició su carrera política a principios de los años 1990. En 1992 asumió la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente ocupó la Alcaldía por cuatro períodos consecutivos entre 1993 y 2000. Simultáneamente a su labor como Alcalde, fue elegido Presidente de la Asociación de Gobiernos Municipales Autónomos de Bolivia, asumiendo el cargo de Miembro de la Unión Internacional de Autoridades Locales (ULA) y siendo designado de manera intermitente como Representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Asociación Mundial de Coordinación de Ciudades y Autoridades Locales, con sede en Ginebra, Suiza.En 2005 fue el primer Prefecto del departamento de Cochabamba elegido democráticamente y, en abril de 2009, en el marco de la nueva Constitución Política del Estado, se postuló a las elecciones presidenciales de 2009 obteniendo el segundo lugar de preferencia electoral. Reyes Villa se postuló nuevamente como Alcalde de Cochabamba en las elecciones subnacionales de 2021 representando a la agrupación política SUMATE, resultando electo por quinta vez con el 55.63% de los votos, ocupando la sede de este municipio como un político experimentado, con una fuerte trayectoria. disco y grandes ideas..",
    },

    "Quien es Manfred Reyes Villa":{content:" El Capitán Manfred Reyes Villa Bacigalupi actualmente Alcalde de Cochabamba, es un militar retirado, político y empresario. Es cochabambino.",
    },

    "Registro Catastral ": {content:"Es el registro de la información del bien inmueble técnico y legal, ya sea en la creación de una nueva unidad catastral o cuando existan cambios en el estado físico del inmueble, propietarios, nuevas construcciones o mejora de las mismas.El tramite dura 10 días calendario aproximadamente, en caso de no tener observación en los requisitosLa unidad a cargo es la Dirección de Administración Geográfica y Catastro ",
    },

    "responsable registro catastral  COCHABAMBA": {Content: "la Dirección de Administración Geográfica y Catastro.",
    },

    "Requisitos Registro Catastral COCHABAMBA": {Content: "Los requisitos son Derecho de Admisión (Formulario Único de Recaudaciones FUR DA 40)  32 Bolivianos.Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Trámites Catastrales.Título de Propiedad con su folio Real (Fotocopia Legalizada).Plano del Lote (Fotocopia Legalizada).Plano de unidad de propiedad horizontal (si corresponde) (Fotocopia Legalizada).Resolución administrativa municipal de aprobación de Propiedad Horizontal (si corresponde) (Fotocopia Legalizada).Impuestos de las últimas 5 gestiones (Fotocopia simple).Carnet de identidad propietarios (Fotocopia simple).Último Registro Catastral (Fotocopia simple).",
    },

    "REGISTRO CATASTRAL ADECUACION  PROPIEDAD HORIZONTAL COCHABAMBA": {Content: "Es el documento de una o varias personas naturales o jurídicas, que representa su propiedad sobre un bien inmueble a través de la asignación de un código catastral. Cuenta con información legal y técnica, cuando existe un cambio en el predio al régimen de propiedad horizontal, proporcionando nuevos códigos catastrales y el empadronamiento al Registro Único para Administración Tributaria Municipal de las nuevas unidades catastrales.El tramite tiene una durecion de 15 días calendario aproximadamente, en caso de no tener observación en los requisitosLa unidad a cargo es la Dirección de Administración Geográfica y Catastro",
    },

    "Unidad responsable registro catastral ":{Content: "Dirección de Administración Geográfica y Catastro",
    },

    "Duracion del tramite propiedad horizontal": {Content: "15 días calendario aproximadamente, en caso de no tener observación en los requisitos.",
    },
    

    "Requisitos Registro Catastral propiedad Horizontal": {Content: "Los requisitos son Derecho de Admisión (Formulario Único de Recaudaciones FUR DA42)  50.00 Bolivianos.Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Trámites Catastrales.Título de Adecuación a propiedad horizontal con sus respectivos folios reales (Fotocopia Legalizada).Título de propiedad con su respectivo Folio Real (Fotocopia Legalizada).Resolución ejecutiva de aprobación de Adecuación de propiedad horizontal (Fotocopia Legalizada).Plano de Adecuación a Propiedad Horizontal (Fotocopia Legalizada).Plano de Lote o Urbanización (Fotocopia Legalizada).Impuestos de las últimas 5 gestiones (Fotocopia simple).Carnet de identidad de los propietarios (Fotocopia simple).Último Registro Catastral (Fotocopia simple).Folder.",
    },

    "CERTIFICACION DE DATOS TECNICOS": {Content: "Es el Certificado Catastral que establece la ubicación exacta, y la superficie del predio de acuerdo a la documentación presentada, esta certificación sirve para la corrección de ubicación y superficies en el Folio Real. brinda información de datos técnicos actuales del predio que coinciden con el plano aprobado por el Gobierno Autónomo Municipal de Cochabamba y el Plano de Información de Datos Espaciales (IDE).El tramite esta a cargo de la Dirección de Administración Geográfica y Catastro",
    },

    "Requisitos Certificacion Datos Tecnicos": {Content: "Derecho de Admisión (Formulario Único de Recaudaciones FUR DA42)  69.00 Bolivianos.Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Trámites Catastrales.Título de Propiedad con su Folio Real (Fotocopia Legalizada).Plano del Lote (Fotocopia Legalizada).Plano de unidad de propiedad horizontal (si corresponde) (Fotocopia Legalizada).Resolución administrativa municipal de aprobación de Propiedad Horizontal (si corresponde) (Fotocopia Legalizada).Carnet de identidad de los propietarios (Fotocopia simple).",
    },


    "CERTIFICACION CATASTRAL  Solicitud  Verbal": {Content: "Es el documento oficial por el cual el Gobierno Autónomo Municipal de Cochabamba, brinda seguridad jurídica a los administrados y da constancia del registro de un bien inmueble en el Catastro, consignando la última información técnica, legal.Tiempo del tramite es primer día hábil, en caso de no tener observación en los requisitos; El tramite esta a cargo de la Dirección de Administración Geográfica y Catastro",
    },

    "Unidad responsable certificacion catastral ": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    "Requisitos Certificacion Catastral Solicitud Verbal": {Content: "Los requisitos son Derecho de Admisión (Formulario Único de Recaudaciones FUR DA42) - 50.00 Bolivianos.Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Trámites Catastrales.Título de Propiedad con su Folio Real (Fotocopia Legalizada).Plano del Lote (Fotocopia Legalizada).Plano de unidad de propiedad horizontal (si corresponde) (Fotocopia Legalizada).Resolución administrativa municipal de aprobación de Propiedad Horizontal (si corresponde) (Fotocopia Legalizada).Impuestos de las últimas 5 gestiones (Fotocopia simple).Carnet de identidad de los propietarios (Fotocopia simple).",
    },

    "CERTIFICACION CATASTRAL Usucapion": {Content: "Es el documento oficial por el cual el Gobierno Autónomo Municipal de Cochabamba, brinda seguridad jurídica a los administrados y da constancia del registro de un bien inmueble en el Catastro,consignando la última información técnica, legal.El trámite está a cargo de la Dirección de Administración Geográfica y Catastro",
    },

    "Duracion certificacion catastral Usucapión ": {Content: "5 días hábiles, en caso de no tener observación en los requisitos.",
    },

    "Requisitos Certificacion Catastral Usucapion": {Content: "Los requisitos son Derecho de Admisión (Formulario Único de Recaudaciones FUR DA42) - 50.00 Bolivianos.Orden Judicial o Memorial solicitando Certificaciones para Usucapión o Adjudicación.Informe Topográfico elaborado en la Sub Alcaldía correspondiente.Plano elaborado por el topógrafo de la Sub Alcaldía.Informe de remisión del trámite de Usucapión o Adjudicación elaborado en la Sub Alcaldía correspondiente.",
    },

    "CERTIFICACION CATASTRAL Adjudicacion": {Content: "Es el documento oficial por el cual el Gobierno Autónomo Municipal de Cochabamba, brinda seguridad jurídica a los administrados y da constancia del registro de un bien inmueble en el Catastro,consignando la última información técnica, legal. Tiene una duracion de 5 días hábiles, en caso de no tener observación en los requisitosA cargo de Dirección de Administración Geográfica y Catastro ",
    },

    " Requisitos Certificacion CATASTRAL Adjudicacion ": {Content: "Los requisitos son Derecho de Admisión (Formulario Único de Recaudaciones FUR DA42) - 50.00 Bolivianos.Orden Judicial o Memorial solicitando Certificaciones para Usucapión o Adjudicación.Informe Topográfico elaborado en la Sub Alcaldía correspondiente.Plano elaborado por el topógrafo de la Sub Alcaldía.Informe de remisión del trámite de Usucapión o Adjudicación elaborado en la Sub Alcaldía correspondiente.",
    },

    "CERTIFICACION CATASTRAL regularizar Derecho Propietario": {Content: "Es el documento oficial por el cual el Gobierno Autónomo Municipal de Cochabamba, que muestra la última información técnico, legal que registra el inmueble o unidad catastral dentro del municipio, además de certificar la existencia de construcciones habitadas en el periodo establecido de acuerdo a la normativa.Tiene una duración de 10 días hábiles, en caso de no tener observación en los requisitos.A cargo de Dirección de Administración Geográfica y Catastro",
    },

    "Requisitos Certificacion Catastral regularizacion Derecho Propietario " :{Content: "Los requisitos sonOrden Judicial o Memorial solicitando Certificaciones para Usucapión o Adjudicación.Informe Topográfico elaborado en la Sub Alcaldía correspondiente.Plano elaborado por el topógrafo de la Sub Alcaldía.Informe de remisión del trámite de Usucapión o Adjudicación elaborado en la Sub Alcaldía correspondiente.",
    },

    "CERTIFICACION CATASTRAL predios municipales ": {Content: "Es el documento oficial por el cual el Gobierno Autónomo Municipal de Cochabamba, que muestra la última información técnico, legal que registra el inmueble o unidad catastral dentro el municipio, dentro el proceso de la Ley 207 para el registro de áreas verdes y equipamiento a favor del municipio. El tramite tiene una duracion de 10 días hábiles, en caso de no tener observación en los requisitos.El trámite está a cargo de la Dirección de Administración Geográfica y Catastro",
    },

    "Duración TRAMITE CERTIFICACION CATASTRAL": {Content: "10 días hábiles, en caso de no tener observación en los requisitos.",},

    "Requisitos  CERTIFICACION CATASTRAL predios municipales": {Content: "Los requisitos son •	Orden Judicial o Memorial solicitando Certificaciones para Usucapión o Adjudicación.Informe Topográfico elaborado en la Sub Alcaldía correspondiente.",
    },
    "CERTIFICACION CATASTRAL ORDEN JUDICIAL": {
    Content: "Es el certificado de Registro Catastral que muestra la última información técnico, legal que registra el inmueble o unidad catastral dentro el municipio solicitado por orden judicial o de la Fiscalía para un proceso determinado.",
    },

    "Unidad responsable  CERTIFICACION CATASTRAL ORDEN JUDICIAL": {Content: "Asuntos Jurídicos.",
    },

    "Duracion CERTIFICACION CATASTRAL ORDEN JUDICIAL": {Content: "2 días hábiles ",
    },

    " Requisitos CERTIFICACION CATASTRAL ORDEN JUDICIAL": {Content: "El requisito es una  solicitud derivada por la Dirección de Asuntos Jurídicos.",
    },


    "LEGALIZACION DE PLANOS": {Content: "El trámite consiste en la obtención de copias legalizadas de los planos que se encuentran custodiados en Archivo de planos, de un predio en específico.Unidad a cargo Archivo de Planos",
    },

    "Unidad responsable LEGALIZACION PLANOS": {Content: "Archivo de planos.",
    },

    "Cuanto dura LEGALIZACION PLANOS": {Content: "1 día hábil.",
    },

    "Requisitos LEGALIZACION PLANOS": {Content: "Los requisitos son • Derecho de Admisión (Formulario Único de Recaudaciones FUR DA42) - 69.00 Bolivianos. • Título de Propiedad con su folio Real (Fotocopia Legalizada). • Impuestos de las últimas 5 gestiones (Fotocopia Simple). • Carnet de identidad de los propietarios (Fotocopia simple). • Timbre Municipal de 10.00 Bolivianos.", },

    "LEGALIZACION PLANOS PH O URBANIZACION": {Content: "El trámite consiste en la obtención de copias legalizadas de las láminas enteras de los Planos de Urbanizaciones o Propiedades Horizontales que se encuentran custodiados en Archivo de planos, previa autorización de la OTB o el directorio de la Propiedad Horizontal.Unidad a cargo Archivo de planos",
    },

    "cuanto dura LEGALIZACION PLANOS PH O URBANIZACION": {Content: "1 día hábil.",},

    "requisitos Legalizacion Planos PH o Urbanización.": {Content: "Los requisitos son • Título de Propiedad con su folio Real (Fotocopia Legalizada). • Impuestos de las últimas 5 gestiones (fotocopia simple). • Carnet de identidad de los propietarios (fotocopia simple). • 5 timbres municipales de 10 Bolivianos. • Autorización de la OTB o del Directorio de la propiedad Horizontal.", }, 

    "LEGALIZACION DE RESOLUCIÓN  EN COCHABAMBA": {Content: "El trámite consiste en la obtención de copias legalizadas de las Resoluciones que se encuentran custodiados en Archivo  de planos, de un predio en específico.Unidad a cargo Archivo de planos",
    },

    "Unidad responsable LEGALIZACION DE RESOLUCION": {Content: "Archivo de planos.",
    },

    "Duracion LEGALIZACION RESOLUCION": {Content: "1 día hábil.",},

    "Requisitos Legalizacion Resolucion": {Content: "son • Título de Propiedad con su folio Real (Fotocopia Legalizada). • Impuestos de las últimas 5 gestiones (fotocopia simple). • Carnet de identidad de los propietarios (fotocopia simple). • Timbre Municipal de 10.00 Bolivianos.", },
    
    "PRE REVISION EN COCHABAMBA": {Content: "El trámite consiste en la obtención de copias legalizadas de las láminas enteras de los Planos de Urbanizaciones o Propiedades Horizontales que se encuentran custodiados en Archivo de planos, previa autorización de la OTB o el directorio de la Propiedad Horizontal.A cargo de Dirección de Administración Geográfica y Catastro",},

    "Unidad responsable PRE REVISION": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    "Duracion dEL PRE REVISION ": {Content: "1 día hábil.",},

    " requisitos Pre Revision": {Content: "Los requisitos son • Derecho de admisión DA41 - 22.00 Bolivianos. • Título de propiedad con su folio real (Fotocopia Legalizada). • Plano del lote (fotocopia legalizada). • Plano de unidad de propiedad horizontal (si corresponde) (fotocopia legalizada). • Resolución administrativa municipal de aprobación de propiedad Horizontal (si corresponde) (Fotocopia Legalizada). • Impuestos de las últimas 5 gestiones (fotocopia simple). • Carnet de identidad de los propietarios (fotocopia simple).", },


    "HOMOLOGACION CODIGO CATASTRAL": {Content: "Es la actualización de código catastral de alfanumérico a la nueva codificación, verificando sus antecedentes y buscando en la base de datos que no hubiera ninguna observación.A cargo de Dirección de Administración Geográfica y Catastro",
    },

    "Duracion HOMOLOGACION CODIGO CATASTRAL": {Content: "1 día hábil.",},

    "Requisitos HOMOLOGACION CODIGO CATASTRAL": {Content: "Los requisitos son • Plano de lote o ubicación. • Impuestos (Fotocopia última gestión). • Registro catastral.", },


    "ACTUALIZACION MODIFICACION DATOS TECNICOS SISTEMA RUAT ": {Content: "Es una actualización realizada con un Avalúo de declaración jurada para la modificación de datos técnicos,previa revisión digital en la base de datos de Catastro y uso de herramientas informáticas.A cargo de la Dirección de Administración Geográfica y Catastro",
    },

    "Unidad responsable ACTUALIZACION  MODIFICACION DATOS TECNICOS SISTEMA RUAT ": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    " Duracion ACTUALIZACION MODIFICACIÓN DATOS TECNICOS EN SISTEMA RUAT ": {Content: "1 día hábil.",
    },

    "Requisitos ACTUALIZACION MODIFICACION DATOS TECNICOS SISTEMA RUAT ": { Content: "Los requisitos son • Titulo de Propiedad mas Folio Real (Fotocopia Simple). • Copia de Plano de Lote o PH. • Fotocopia de Carnet de identidad. • Registro Catastral (Opcional). • Impuestos (Boleta de las 5 últimas gestiones).", },

    "APERTURA CASOS SIREC (RUAT)": {Content: "Consiste en dar solución a casos con observaciones en el sistema RUAT, sobre las superficies del pago impositivo. Soluciones coordinadas con el soporte RUAT Nacional.",
    },

    "Unidad responsable APERTURA CASOS SIREC (RUAT)": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    "Duracion APERTURACASOS SIREC (RUAT)": {Content: "10 días hábiles.",
    },

    "requisitos APERTURA CASOS SIREC (RUAT) EN COCHABAMBA.": { Content: "Los requisitos son • Proforma con Antecedentes y problema del caso. • Certificado de estabilidad estructural( opcional) solo cuando se trate de regularizaciones o ampliación de permiso.", },


    "BAJAS CODIGOS": {Content: "(matriciales, fraccionamientos, duplicados, y mal empadronados. Es el análisis técnico y legal para dar soluciones a matrices que siguen generando impuestos, fraccionamientos que no se deslindan del número matriz, números de inmuebles duplicados que le generan doble tributación, y mal empadronados por errores técnicos por insuficiencia de datos.",
    },

    "Unidad responsable BAJAS CODIGOS": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    " Duracion BAJAS DE CODIGOS": {Content: "15 días hábiles.",
    },

    "Requisitos BAJAS DE CODIGOS": {Content: "Los requisitos son Solicitud del Contribuyente; legal tributario, fiscalización. • Resolución Técnica Administrativa para anular mixtas. • Registro Catastral. • Folio Real (fotocopia simple).", },

    "AVALUO CATASTRAL REGISTRO PROPIEDAD HORIZONTAL": {Content: "En este trámite se demuestra el valor catastral del predio y construcción del inmueble para distintos tipos de trámites en Derechos reales.",
    },
    "Unidad responsable AVALUO CATASTRAL REGISTRO DE PROPIEDAD HORIZONTAL ": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    " Duracion AVALUO CATASTRAL REGISTRO  PROPIEDAD HORIZONTAL ": {Content: "1 día hábil.",
    },

    "Requisitos AVALUO CATASTRAL REGISTRO PH": {Content: "Los requisitos son • Solicitud dirigida al Alcalde. • Resolución técnica (Fotocopia simple). • Registro catastral (Fotocopia simple). • Titulo de Propiedad mas Folio Real (fotocopia simple). • Fotocopia planos de construcción y/o adecuación de propiedad horizontal. • Formulario de Declaración Jurada de actualización de datos técnicos. • Formulario Único de Recaudaciones (FUR DA46). • Impuesto (fotocopia 5 últimas gestiones). • Planos de lote aprobados. • Boleta de liquidación.", },

    "ASIGNACION ACTUALIZACION CODIGOS CATASTRALES MI PLANO": {Content: "Es la determinación de ubicación de un Predio en cartografía, a la presentación de un Plano Referencial.",
    },

    "responsable ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES MI PLANO": {Content: "La Dirección de Administración Geográfica y Catastro.",
    },

    "Duracion ASIGNACION O ACTUALIZACION CODIGOS CATASTRALES MI PLANO": {Content: "Inmediato.",
    },

    "requisitos ASIGNACION O ACTUALIZACION CODIGOS CATASTRALES MI PLANO": {Content: "Los requisitos son • Copia simple del plano referencial. • Título de propiedad más Folio real (Fotocopia simple). • Impuestos (Fotocopia última gestión).", },

    " APROBACION PLANO DIVISION PROPIEDAD HORIZONTAL": {Content: "La aprobación del Plano de División en Propiedad Horizontal es el proceso administrativo por el cual el o los propietarios de un bien inmueble, adecúan el mismo al Régimen de Propiedad Horizontal de acuerdo con las disposiciones emanadas de la Ley Nacional de Propiedad Horizontal del 30 de diciembre de 1949, el Código Civil y la Normativa Municipal en vigencia.",
    },

    "responsable APROBACION PLANO DIVISION PROPIEDAD HORIZONTAL": {Content: "Departamento de Administración Urbana-Dirección de Urbanismo.",
    },
    "Duracion APROBACION PLANO DIVISION PROPIEDAD HORIZONTAL": {Content: "15 días hábiles.",
    },
    "REGISTRO CATASTRAL": {Content: "Es el registro de la información del bien inmueble técnico y legal, ya sea en la creación de una nueva unidad catastral o cuando existan cambios en el estado físico del inmueble, propietarios, nuevas construcciones o mejora de las mismas.",
    },

    "responsable REGISTRO CATASTRAL": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    "Duracion REGISTRO CATASTRAL": {Content: "10 días calendario aproximadamente, en caso de no tener observación en los requisitos.",
    },

    "Requisitos REGISTRO CATASTRAL": {Content: "Los requisitos son • Derecho de Admisión (Formulario Único de Recaudaciones FUR DA40) - 32.00 Bolivianos. • Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Trámites Catastrales. • Título de Propiedad con su folio Real (Fotocopia Legalizada). • Plano del Lote (Fotocopia Legalizada). • Plano de unidad de propiedad horizontal (si corresponde) (Fotocopia Legalizada). • Resolución Administrativa Municipal de aprobación de Propiedad Horizontal (si corresponde) (Fotocopia Legalizada). • Impuestos de las últimas 5 gestiones (Fotocopia simple). • Carnet de identidad de propietarios (Fotocopia simple). • Último Registro Catastral (Fotocopia simple).", },



    " Registro Catastral  Adecuacion  propiedad Horizontal": {Content: "Es el documento de una o varias personas naturales o jurídicas, que representa su propiedad sobre un bien inmueble a través de la asignación de un código catastral. Cuenta con información legal y técnica, cuando existe un cambio en el predio al régimen de propiedad horizontal, proporcionando nuevos códigos catastrales y el empadronamiento al Registro Único para Administración Tributaria Municipal de las nuevas unidades catastrales.",
    },

    "responsable Registro Catastral  Adecuacion  propiedad Horizontal": {Content: "Dirección de Administración Geográfica y Catastro.",
    },

    " Duracion Registro Catastral  Adecuacion  propiedad Horizontal": {Content: "15 días calendario aproximadamente, en caso de no tener observación en los requisitos.",
    },

    "Requisitos REGISTRO CATASTRAL": {Content: "Los requisitos son • Derecho de Admisión (Formulario Único de Recaudaciones FUR DA40) - 32.00 Bolivianos. • Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Trámites Catastrales. • Título de Propiedad con su folio Real (Fotocopia Legalizada). • Plano del Lote (Fotocopia Legalizada). • Plano de unidad de propiedad horizontal (si corresponde) (Fotocopia Legalizada). • Resolución Administrativa Municipal de aprobación de Propiedad Horizontal (si corresponde) (Fotocopia Legalizada). • Impuestos de las últimas 5 gestiones (Fotocopia simple). • Carnet de identidad de propietarios (Fotocopia simple). • Último Registro Catastral (Fotocopia simple).", },
    "LEGALIZACION PLANOS": {Content: "El trámite consiste en la obtención de copias legalizadas de los planos que se encuentran custodiados en Archivo de planos, de un predio en específico.",
    },

    "responsable LEGALIZACION PLANOS": {Content: "Archivo de planos.",
    },

    "Duracion LEGALIZACION PLANOS": {Content: "1 día hábil.",
    },

    "RequisitosLEGALIZACION PLANOS": {Content: "los requisitos son • Derecho de Admisión (Formulario Único de Recaudaciones FUR DA42) - 69.00 Bolivianos. • Título de Propiedad con su folio Real (Fotocopia Legalizada). • Impuestos de las últimas 5 gestiones (Fotocopia Simple). • Carnet de identidad de los propietarios (Fotocopia simple). • Timbre Municipal de 10.00 Bolivianos.", },

    "CRAM Certificado de Registro Ambiental Municipal": {Content: "Es el Certificado de Registro Ambiental Municipal que tiene como finalidad la implementación de Control y Vigilancia Ambiental de Actividades Económicas como parte de la Gestión Ambiental Municipal.",
    },

    "RESPONSABLE CRAM Certificado de Registro Ambiental Municipal": {Content: "el Departamento de Gestión Atmosférica, Control y Seguimiento Ambiental, dependiente de la Secretaría de Planificación y Medio Ambiente.",
    },

    "Duracion CRAM Certificado de Registro Ambiental Municipal": {Content: "Eltrámite dura 10 días hábiles.",
    },

    "El Certificado de Registro Ambiental Municipal (CRAM) sustituye a una licencia ambiental": {Content: "No, el Certificado de Registro Ambiental Municipal no sustituye a una licencia ambiental, de acuerdo a la ley Número 1333 de Medio Ambiente.",
    },

    "Requisitos CRAM Certificado de Registro Ambiental Municipa": {Content: "Los requisitos son Nota escrita, dirigida a la Secretaría de Planificación y Medio Ambiente, solicitando la emisión del Certificado de Registro Ambiental Municipal . Comprobante de depósito bancario por el pago de admisión de trámite (según categoría: Clase 1 Bolivianos 150, Clase 2 Bolivianos 400) (para realizar el depósito, el representante legal deberá verificar el rubro que corresponda a su actividad económica, según el Anexo 3 del Decreto Municipal número 146 del 19). Formulario Ambiental Municipal (FAM) debidamente llenado acompañando las fotocopias de Cédula de Identidad del Propietario o Representante Legal, Poder de Representante Legal en caso de Personas Jurídicas El Formulario Ambiental Municipal, deberá ser presentado en físico y en formato digital (CD); en folder amarillo tamaño oficio y foliado en dos ejemplares, (Un ejemplar será para constancia del Representante Legal como constancia de presentación).", },

    "Requisitos Renovacion de la CRAM": {Content: "Los requisitos son El representante legal deberá realizar la renovación cada dos años. Nota escrita a la Secretaría de Planificación y Medio Ambiente Certificado de Registro Ambiental Original Fotocopia de Carnet de Identidad Fotocopia de licencia de funcionamiento Comprobante de pago según clase 1 Bolivianos. 150, clase 2 Bolivianos 400.", },

    "RAI registro Ambiental Industrial ": {Content: "Es el registro Ambiental Industrial, es un proceso de regulación ambiental de las actividades del sector Industrial Manufacturero, en cumplimiento de las disposiciones del Reglamento Ambiental para el Sector Manufacturero (RASIM).",
    },

    "Responsable RAI registro Ambiental Industrial": {Content: "Departamento de Gestión Atmosférica, control y seguimiento Ambiental, dependiente de la Secretaría de Planificación y Medio Ambiente.",
    },

    " Duracion RAI registro Ambiental Industrial": {Content: "El trámite llega a durar 10 días hábiles.",
    },

    "Requisitos RAI registro Ambiental Industrial": {Content: "Los requisitos son Fotocopia de Cédula de Identidad del Propietario o Representante Legal y Consultor Ambiental. Fotocopia de Certificado RENCA vigente del Consultor Ambiental. Declaración jurada firmada por representante legal y consultor. Ambiental en los 3 ejemplares. Croquis de ubicación de Industria. Coordenadas Georeferenciales en UTM. fotocopias a detalle de la industria. Foliado de documentos ambientales.· Fotocopias de Poder de poder representante legal en caso de Sociedad. Otros documentos según rubro.", },

    " Licencia Ambiental (L.A.)": {Content: "Es el documento jurídico administrativo otorgado por la Autoridad Ambiental Competente al Representante Legal que avala el cumplimiento de todos los requisitos previstos en la Ley y Reglamentación correspondiente en lo que se refiere a los procedimientos de prevención y control ambiental.",
    },

    "CLASIFICACION ESPACIOS DEPORTIVOS EN COCHABAMBA": {Content: "Su clasificación es Categoría A Corresponde a centros deportivos de alta competencia; cuentan con las características establecidas por normativa y reglamentación internacional. Categoría B Corresponde a complejos, campos y coliseos deportivos cercados que albergan una o más disciplinas deportivas. Categoría C Corresponde a campos deportivos de suelo natural o artificial que no se encuentren cercados. Categoría D Corresponde a canchas polifuncionales que son de libre acceso para el uso de la población en general.", },

    "ADMINISTRA ESCENARIOS DEPORTIVOS EN COCHABAMBA": {Content: "La administración y uso de los escenarios deportivos se realizará a través de la Dirección de Deportes dependiente de la Secretaría de Desarrollo Humano y Deportes",
    },

    " MODALIDADES USO CAMPOS DEPORTIVOS": {Content: "las modalidades de uso SON CONVENIOS Es el acuerdo que celebra el GAMC, con una persona natural o jurídica, nacional o extranjera, sea pública o privada, con el fin de que las partes acordantes se brinden contraprestaciones recíprocas para el apoyo de diferentes actividades y/o eventos de desarrollo humano. CONCESIÓN ADMINISTRATIVA. - Es la relación jurídica contractual entre el GAMC y una persona natural o jurídica, para el uso de un bien de dominio público o la prestación de un servicio público por un tiempo limitado a cambio de una contraprestación. ARRENDAMIENTO. - Es la relación jurídica contractual, por la cual el GAMC, concede el uso y goce temporal de un bien o grupo de bienes a una persona natural o jurídica a cambio de una contraprestación económica, con la obligación de restituirlos a la entidad en el mismo estado.", },

    "DONDE HAGO MI TRAMITE DE VEHICULOS":{content:" DEPENDIENDO del trámite, este se puede realizar en movilidad urbana si es relacionado al transporte público,en recaudaciones si esta relacionado a impuestos, transferencias  o registros.",
    },

};

// Función para calcular la distancia de Levenshtein entre dos cadenas
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // Inicializar la matriz
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Calcular la distancia de Levenshtein
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

// Función para verificar si una pregunta es similar a otra usando un umbral de distancia
/*function isSimilar(question1, question2, threshold) {
    if (question1.toUpperCase() === question2.toUpperCase()) {
        return true; // Si las preguntas son idénticas, devolver true
    }
    // Calcular la distancia de Levenshtein
    const distance = levenshteinDistance(question1.toUpperCase(), question2.toUpperCase());
    return distance <= threshold || question1.toUpperCase().includes(question2.toUpperCase()) || question2.toUpperCase().includes(question1.toUpperCase());
}*/


function isSimilar(question1, question2, threshold) {
    if (question1.toUpperCase() === question2.toUpperCase()) {
        return true; // Si las preguntas son idénticas, devolver true
    }
    const matches = findBestMatch(question1.toUpperCase(), [question2.toUpperCase()]);
    const bestMatch = matches.bestMatch;
    return bestMatch.rating >= threshold;
}
/*function isSimilar(question1, question2, threshold) {
    if (question1.toUpperCase() === question2.toUpperCase()) {
        return true; // Si las preguntas son idénticas, devolver true
    }

    // Verificar si una pregunta es una subcadena de la otra
    if (question1.toUpperCase().includes(question2.toUpperCase()) || question2.toUpperCase().includes(question1.toUpperCase())) {
        return true;
    }

    // Calcular la distancia de Levenshtein
    const distance = levenshteinDistance(question1.toUpperCase(), question2.toUpperCase());

    // Verificar si la distancia de Levenshtein está dentro del umbral especificado
    if (distance <= threshold) {
        return true;
    }

    // Verificar similitud de palabras usando la librería string-similarity
    const matches = findBestMatch(question1.toUpperCase(), [question2.toUpperCase()]);
    const bestMatch = matches.bestMatch;
    if (bestMatch.rating >= threshold) {
        return true;
    }

    return false;
}*/

export async function GET(req) {
    const question = req.nextUrl.searchParams.get("question");
    /*const isRelatedToAlcaldia = question.includes("TRAMITES") ;
    if (!isRelatedToAlcaldia) {
        return Response.json({ message: "Este bot está diseñado para responder preguntas sobre trámites de la alcaldía de Cochabamba. Por favor, formula una pregunta relacionada con trámites de la alcaldía." });
    }*/
    let matchedQuestion = null;
    /*for (const exampleQuestion in cochabambaExamples) {
        if (isSimilar(exampleQuestion, question, 1)) {
            matchedQuestion = exampleQuestion;
            break;
        }
    }*/
    // Verificar si la pregunta es exactamente igual a alguna clave
    if (cochabambaExamples.hasOwnProperty(question)) {
        matchedQuestion = question;
    } else {
        // Si no es exactamente igual, buscar coincidencias similares
        for (const exampleQuestion in cochabambaExamples) {
            if (isSimilar(exampleQuestion, question, 0.6)) {
                matchedQuestion = exampleQuestion;
                break;
            }
        }
    }
    
   
    /*const alcaldeResponse = {
        spanish: [
            { word: "Manfred" } // Esto es solo un ejemplo, podría ser más complejo según tus necesidades
        ],
        content: "Manfred"
    };*/
    const cochabambaExample = cochabambaExamples[matchedQuestion];
    let combinedResponse;
    
    
    //if (/^(?=.*\bDONDE\b)(?=.*\bVISADO\b)(?=.*\bURBANIZACION\b)/i.test(question)) {
    if  (/^(?=.*\bQUE\b)(?=.*\bVISADO\b)(?=.*\bURBANIZACION\b)/i.test(question)){
        const variable = "Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al Gobierno Autónomo Municipal de Cochabamba la visación de los planos del anteproyecto. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }
    if(/^(?=.*\bDONDE\b)(?=.*\bVISADO\b)(?=.*\bURBANIZACION\b)/i.test(question)){
        const variable = "Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía y Dirección de Urbanismo y Servicios Municipales.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }
     if(/^(?=.*\bCOSTO\b)(?=.*\bVISADO\b)(?=.*\bURBANIZACION\b)/i.test(question)){
        const variable = "El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }
    if(/^(?=.*\bREQUISITOS\b)(?=.*\bVISADO\b)(?=.*\bURBANIZACION\b)/i.test(question)){
        const variable = "Los requisitos para el trámite de visado de anteproyecto de urbanización son los siguientes: 1.    Derecho de admisión 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio (En caso de estar matriculado, acompañar Folio Real).4.    Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario.5.    Plano de levantamiento topográfico geo referenciado firmado y sellado por un Topógrafo o profesional acreditado.6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.7.    Fotocopia del carnet de identidad vigente del o los propietarios.10.  Inspección.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }
    if(/^(?=.*\bTIEMPO\b)(?=.*\bVISADO\b)(?=.*\bURBANIZACION\b)/i.test(question)){
        const variable = "El trámite llega a durar aproximadamente 90 días calendario después de cumplirse todos los requisitos y no encontrar observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }
    if(/^(?=.*\bQUE\b)(?=.*\bREGULARIZACION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "Es un trámite a realizar cuando se tiene plano de construcción aprobado y se desea realizar modificaciones funcionales y/o de volumetría o se requiera realizar una ampliación a la edificación (mayor a tres plantas), para ello se debe solicitar la aprobación de remodelación o ampliación según el caso. El presente trámite también es aplicable en el caso que se desee realizar la regularización de una edificación construida que cumple la normativa vigente. También se aplica el trámite en caso que se requiera sustituir un plano de construcción aprobado por otro proyecto, siempre y cuando no esté construida la edificación.El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }
    if(/^(?=.*\bDONDE\b)(?=.*\bREGULARIZACION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bREGULARIZACION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "El costo para Remodelación sin cambiar la función es de 0.25 bolivianos por metro cuadrado, y si cambia función el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliación de área residencial es de 1.00 boliviano por metro cuadrado, por ampliación de área no residencial es de 2.00 bolivianos por metro cuadrado, por ampliaciónde plano estructural es de 2.00 bolivianos por metro cúbico";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS \b)(?=.*\bREGULARIZACION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "Los requisitos son, el derecho de admisión 16 (DA 16), folder municipal, formulario de solicitud de trámite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectónicos del proyecto de remodelación o ampliación, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDURACION\b)(?=.*\bREGULARIZACION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "El trámite si cumple todos los requisitos y no hay observaciones, dura 40 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bPLANO\b)(?=.*\bVERJA\b)/i.test(question)){
        const variable = "Es un trámite para aprobar un proyecto de construcción de verja, El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bPLANO\b)(?=.*\bVERJA\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bPLANO\b)(?=.*\bVERJA\b)/i.test(question)){
        const variable = "El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijaciónde rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bPLANO\b)(?=.*\bVERJA\b)/i.test(question)){
        const variable = "Los requisitos son: Derecho de admisión 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construcción, fotocopia Carnet de identidad vigente. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDURACION\b)(?=.*\bPLANO\b)(?=.*\bVERJA\b)/i.test(question)){
        const variable = "El trámite si cumple todos los requisitos y no hay observaciones, dura 10 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bTRABAJOS\b)(?=.*\bMENORES\b)/i.test(question)){
        const variable = "Es un trámite para la ejecución de obras de pequeña magnitud, excavaciones en vía pública, construcción de muro perimetral, apertura de puertas y ventanas, cambio total de cubiertas, acopio de material y escombros, bardas temporales en la vereda, arreglo de fachada o trabajos externos con uso de la acera, demolición de bloque o de unidad. Se puede realizar en la Sub Alcaldía a la que corresponde el predio. La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bTRABAJOS\b)(?=.*\bMENORES\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bTRABAJOS\b)(?=.*\bMENORES\b)/i.test(question)){
        const variable = "Son varios los costos por la autorización de trabajos menores, el costo de trámite por construcción de habitación provisional es de 50 bolivianos por Unidad, por excavaciones en vía pública el costo es de 100 Bolivianos, el costo por construcción de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bTRABAJOS\b)(?=.*\bMENORES\b)/i.test(question)){
        const variable = "Los requisitos son: solicitud de trámite, folder amarillo. Plano de lote aprobado, título de propiedad, fotocopia de Carnet de identidad vigente, impuestos al día. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bTRABAJOS\b)(?=.*\bMENORES\b)/i.test(question)){
        const variable = "La duración del trámite si cumple todos los requisitos es de 3 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bVISADO\b)(?=.*\bEQUIPAMIENTOS\b)(?=.*\bPUBLICOS\b)(?=.*\bPRIVADOS\b)/i.test(question)){
        const variable = "Es un trámite a realizar cuando se requiere la aprobación del plano arquitectónico de anteproyecto de equipamientos público y privados.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bVISADO\b)(?=.*\bEQUIPAMIENTOS\b)(?=.*\bPUBLICOS\b)(?=.*\bPRIVADOS\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bVISADO\b)(?=.*\bEQUIPAMIENTOS\b)(?=.*\bPUBLICOS\b)(?=.*\bPRIVADOS\b)/i.test(question)){
        const variable = "el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admisión 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bVISADO\b)(?=.*\bEQUIPAMIENTOS\b)(?=.*\bPUBLICOS\b)(?=.*\bPRIVADOS\b)/i.test(question)){
        const variable = "Los requisitos son: Visado del plano arquitectónico, derecho de admisión 18 (DA 18) del trámite, formulario de solicitud del trámite, certificado catastral, planos arquitectónicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bVISADO\b)(?=.*\bEQUIPAMIENTOS\b)(?=.*\bPUBLICOS\b)(?=.*\bPRIVADOS\b)/i.test(question)){
        const variable = "La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bVISADO\b)(?=.*\bEQUIPAMIENTOS\b)(?=.*\bPUBLICOS\b)(?=.*\bPRIVADOS\b)/i.test(question)){
        const variable = "La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bVISADO\b)(?=.*\bESTACION\b)(?=.*\bSERVICIO\b)(?=.*\bSURTIDOR\b)/i.test(question)){
        const variable = "Es un trámite a para visar un anteproyecto de construcción de estación de servicio o surtidor, e puede realizar en la Sub Alcaldía a la que corresponde el predio Se puede realizar en la Sub Alcaldía a la que corresponde el predio";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bVISADO\b)(?=.*\bESTACION\b)(?=.*\bSERVICIO\b)(?=.*\bSURTIDOR\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bVISADO\b)(?=.*\bESTACION\b)(?=.*\bSERVICIO\b)(?=.*\bSURTIDOR\b)/i.test(question)){
        const variable = "El precio de derecho de admisión 20 (DA  20) es de 46 bolivianos, folder municipal 5 bolivianos, la tasa de verificación de superficies de 0.50 bolivianos por metro cuadrado, tasa de fijación de rasante por metro lineal en el subdistrito 1 al 16 de 1 boliviano el metro lineal y del sub distrito 17 al 32 de 1.5 bolivianos el metro lineal ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITO\b)(?=.*\bVISADO\b)(?=.*\bESTACION\b)(?=.*\bSERVICIO\b)(?=.*\bSURTIDOR\b)/i.test(question)){
        const variable = "Son el derecho de admisión 20 (DA 20), folder municipal, memorial dirigido al sub alcalde, plano de lote aprobado, título de propiedad, impuestos al día, fotocopia Carnet de identidad vigente, solvencia fiscal, anteproyecto de construcción, certificado de ubicación. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bVISADO\b)(?=.*\bESTACION\b)(?=.*\bSERVICIO\b)(?=.*\bSURTIDOR\b)/i.test(question)){
        const variable = "La duración del trámite si cumple todos los requisitos es de 30 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bESPACIOS\b)(?=.*\bPUBLICOS\b)/i.test(question)){
        const variable = "Es un trámite para solicitar autorización eventual cuando una persona natural, institución, agrupación, organización o empresa, requiera utilizar en forma temporal algún espacio público municipal para actividades con fines o sin fines de lucro: instalación de circos, parques de diversiones o la realización de kermeses, ferias u otras actividades similares";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bESPACIOS\b)(?=.*\bPUBLICOS\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bESPACIOS\b)(?=.*\bPUBLICOS\b)/i.test(question)){
        const variable = "Para las actividades sin fines de lucro no tiene costo, para las actividades con fines de lucro el derecho de admisión 21 (DA 21) es de 20 bolivianos, folder municipal a 5 bolivianos,y el costo de comprobante de pago de patente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bESPACIOS\b)(?=.*\bPUBLICOS\b)/i.test(question)){
        const variable = "Los requisitos son solicitud escrita dirigida al sub alcalde indicado, carta notariada de compromiso de entrega en las mismas condiciones, contrato de emsa, derecho de admisión 22 (DA 22), folder municipal, comprobante de pago de la patente. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bESPACIOS\b)(?=.*\bPUBLICOS\b)/i.test(question)){
        const variable = "La duración del trámite si cumple todos los requisitos es de 2 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bVISACION\b)(?=.*\bMINUTAS\b)/i.test(question)){
        const variable = "es cuando se desea obtener el visado de una minuta, se puede realizar en la Sub Alcaldía a la que corresponde el predio";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bVISACION\b)(?=.*\bMINUTAS\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bVISACION\b)(?=.*\bMINUTAS\b)/i.test(question)){
        const variable = "Los costos son, Tasa de visación de predio, lote o inmueble ubicado en área urbana: Hasta 500 metros cuadrados de lote 25 Bolivianos, Hasta 500 metros cuadrados de lote con edificación 40 Bolivianos, Más de 501 metros cuadrados de lote 60 Bolivianos, Más de 500 metros cuadrados de lote con edificación 90 Bolivianos, Tasa de visación de predio, lote o inmueble ubicado en área rural o rústica: Terreno de uso agrícola, mayor a 5000 metros cuadrados 120 Bolivianos, Terrenos rústicos transferidos en su integridad 90 Bolivianos, Derecho de admisión 23 (DA 23) de trámite 5 Bolivianos.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bVISACION\b)(?=.*\bMINUTAS\b)/i.test(question)){
        const variable = "Los requisitos son solicitud, fotocopia Carnet de identidad vigente, titulo de propiedad y folio real actualizado, registro catastral, plano de lote, impuestos al dia, minuta de transferencia";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bVISACION\b)(?=.*\bMINUTAS\b)/i.test(question)){
        const variable = "La duración del trámite si cumple todos los requisitos es de 1 día hábil aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bSELLO\b)(?=.*\bSECO\b)/i.test(question)){
        const variable = "es cuando se desea obtener sello seco en testimonios protocolizados y/o en minutas con reconocimiento de firmas para su registro en Derechos Reales. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bSELLO\b)(?=.*\bSECO\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bSELLO\b)(?=.*\bSECO\b)/i.test(question)){
        const variable = "El costo del timbre es de 10 Bolivianos";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITO\b)(?=.*\bSELLO\b)(?=.*\bSECO\b)/i.test(question)){
        const variable = "Los requisitos son solicitud, testimonio protocolizado, minuta de Transferencia con reconocimiento de firmas, formulario de pago de impuestos.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bSELLO\b)(?=.*\bSECO\b)/i.test(question)){
        const variable = "La duración del trámite si cumple todos los requisitos es Inmediato.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bAVALUO\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "Es un trámite a realizarse por Orden Judicial y/o Petición de Parte para atribuir el valor de un predio dentro de la jurisdicción del Gobierno Autónomo Municipal de Cochabamba con referencia a las tablas de valoración de superficie construida, antigüedad, categoría y zona homogénea de valor de terreno y edificaciones definidos y actualizados por el Gobierno Autónomo Municipal de Cochabamba. Se puede realizar en la Sub Alcaldía a la que corresponde el predio";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bAVALUO\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bAVALUO\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = " El costo es: derecho de admisión 24 (DA 24) de trámite 27 Bolivianos, Folder municipal 5 Bolivianos, Tasa por verificación de superficie en lote 0.50 Bolivianos por metro cuadrado, Tasa por verificación de superficie en inmueble edificado 0.80 Bolivianos por metro cuadrado, Certificación 30 Bolivianos, Certificación (según Ordenanza Municipal Número 2636, válido solo para el Distrito 9) 50 Bolivianos";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bAVALUO\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "Los requisitos son Requerimiento fiscal. Plano aprobado del predio, escritura pública o folio real, fotocopia de Carnet de identidad vigente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bAVALUO\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "De no encontrarse observaciones es de 10 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bNUMERACION\b)(?=.*\bDOMICILIARIA\b)/i.test(question)){
        const variable = "Es un trámite a realizarse cuando desee obtener el número de domicilio para identificación física de su inmueble. Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bNUMERACION\b)(?=.*\bDOMICILIARIA\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bNUMERACION\b)(?=.*\bDOMICILIARIA\b)/i.test(question)){
        const variable = "El costo es: derecho de admisión 25 (DA 25) de trámite es 25 Bolivianos, Folder municipal 5 Bolivianos, Tasa por numeración de domicilio 17 Bolivianos";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITO\b)(?=.*\bNUMERACION\b)(?=.*\bDOMICILIARIA\b)/i.test(question)){
        const variable = "Los requisitos son solicitud, fotocopia de  Carnet de identidad vigente, el inmueble o lote debe contar con muro o verja de cierre frontal, título de propiedad registrado en Derechos reales, impuestos al dia, plano de lote aprobado";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bNUMERACION\b)(?=.*\bDOMICILIARIA\b)/i.test(question)){
        const variable = " De no encontrarse observaciones es de 10 días hábiles aproximadamente.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bDERECHO\b)(?=.*\bPROPIETARIO\b)/i.test(question)){
        const variable = "Es un trámite a realizar para obtener documentos legalizados para uso exclusivo en el Gobierno Autónomo Municipal de Cochabamba";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bDERECHO\b)(?=.*\bPROPIETARIO\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bDERECHO\b)(?=.*\bPROPIETARIO\b)/i.test(question)){
        const variable = "El costo es de 10 bolivianos el timbre por cada documento legalizado y de 5 bolivianos por cada impuesto legalizado.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bDERECHO\b)(?=.*\bPROPIETARIO\b)/i.test(question)){
        const variable = "Los requisitos son solicitud, documento a legalizar, timbre municipal por cada documento";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bDERECHO\b)(?=.*\bPROPIETARIO\b)/i.test(question)){
        const variable = "Inmediato, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bREGULARIZACION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Trámite a realizar cuando se requiere regularizar un lote de terreno ubicado en área urbanizable hasta 1300 metros cuadrados que no cuenta con plano aprobado o que contando con ello, existe diferencia entre la superficie y dimensiones del plano aprobado. La unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bREGULARIZACION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Valorados municipales, Derecho de admisión 111, DA 111 . 2. Folder municipal 3. Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado. 4. títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real. 5. Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario. 6. Plano de regularización de lote con número de registro proporcionado por el Colegio Profesional correspondiente, firmado y sellado por el Arquitecto con registro profesional, cinco ejemplares en papel bond. 7. Fotocopia del Carnet de identidad vigente del o los propietarios. 8. Licencia ambiental. 9. Fotocopia Carnet de identidad vigente del o los propietarios. 10. Plano de Lote o Urbanización aprobado fotocopia legalizada y o Registro Catastral y o Plano de construcción presentar en caso de existir para no pago de sesiones. 11. Carimbo, manzano de la Planimetría, superficie de ARCO y Resolución de aprobación de ARCO Solo para Distrito 9. 12. Tradición de la minuta, original o fotocopia legalizada Solo para Distrito 9. 13. Declaratoria de herederos en caso necesario y o Poder suficiente conferido por el o los propietarios del inmueble Solo para Distrito 9. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bREGULARIZACION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Para el derecho de admisión 111 DA 111 del trámite el costo es de 27 bolivianos. 2. Para el folder municipal 5 bolivianos. 3. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4. Para los planos del lote o urbanización aprobada por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 5. Para la tradición de la minuta por cada fotocopia un timbre el cual el costo es de 10 bolivianos 6. Para la tasa por regularización de lote el costo es de 0.20 bolivianos por metro cuadrado. 7. Para la tasa de fijación de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 boliviano por metro lineal. 8. Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bANEXION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Es un Trámite realizado para anexar lotes contiguos, La unidad a cargo es la unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bANEXION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bANEXION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes: 1. Derecho de admisión 111 DA 111 . 2. Folder municipal 3. Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado. 4. Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real. 5. Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario. 6. Plano del proyecto de anexión de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto. 7. Fotocopia del Carnet de identidad vigente del o los propietarios. 8. Registro Catastral o Certificación de Registro Catastral. 9. Plano de lotes aprobados, fotocopia legalizada. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bANEXION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Para el derecho de admisión 111 DA 111 del trámite el costo es de 27 bolivianos. 2. Para el folder municipal 5 bolivianos. 3. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4. Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos. 5. Para la tasa por anexión de lote el costo es de 0.25 bolivianos por metro cuadrado. 6. Para la tasa de fijación de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 bolivianos por metro lineal. 7. Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bANEXION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "El trámite llega a dudar 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Es un Trámite realizado para subdividir un lote aprobado en otros menores. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Derecho de admisión 111 DA 111 . 2. Folder municipal 3. Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado. 4. Títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real. 5. Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario. 6. Plano del proyecto de subdivisión de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto. 7. Fotocopia del Carnet de identidad vigente del o los propietarios. 8. Registro Catastral o Certificación de Registro Catastral. 9. Plano de lotes aprobados, fotocopia legalizada. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Para el derecho de admisión 111 DA 111 del trámite el costo es de 27 bolivianos. 2. Para el folder municipal 5 bolivianos. 3. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4. Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos. 5. Para la tasa por subdivisión de lote el costo es de 0.20 bolivianos por metro cuadrado. 6. Para la tasa de fijación de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 boliviano por metro lineal. 7. Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "El trámite llega a durar 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bPLANO\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Es un Trámite a realizar cuando se tiene un plano de urbanización, subdivisión, anexión o regularización aprobado y se requiere una certificación de plano individual a nombre del actual propietario. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía”, La duración del trámite llega a ser de 5 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITO\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Derecho de admisión 06 DA 06 de trámite. 2. Folder municipal 3. Solicitud verbal o nota simple. 4. títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real. 5. Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario. 6. Plano del proyecto de certificación de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto. 7. Plano de lotes aprobado, fotocopia legalizada 8. Certificación. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Para el derecho de admisión 06 DA 06 del trámite el costo es de 27 bolivianos. 2. Para el folder municipal 5 bolivianos. 3. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4. Para los planos de lote aprobados por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 5. Para la certificación 30 bolivianos. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bSUBDIVISION\b)(?=.*\bLOTE\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 5 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bRESOLUCIONES\b)(?=.*\bCOMPLEMENTARIAS\b)/i.test(question)){
        const variable = "Es un Trámite a realizar cuando se tiene algún dato que está errado dentro la Resolución Administrativa Municipal, y debe modificarse, en ese caso se emite una Resolución Complementaria. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bRESOLUCIONES\b)(?=.*\bCOMPLEMENTARIAS\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bRESOLUCIONES\b)(?=.*\bCOMPLEMENTARIAS\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Derecho de admisión 07 DA 07. 2. Folder municipal 3. Memorial dirigido al sub alcalde solicitando Resolución complementaria. 4. títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real. 5. Impuestos pagados de las últimas 5 gestiones, fotocopia simple del comprobante de pago de impuestos o proforma del sistema RUAT que evidencie el no adeudo tributario. 6. Resolución municipal, Fotocopia legalizada. 7. Fotocopia del carnet de identidad del o los propietarios. 8. Inspección de ser necesario. 9. Certificación. 10. Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bRESOLUCIONES\b)(?=.*\bCOMPLEMENTARIAS\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Para el derecho de admisión 07 DA 07 del trámite el costo es de 27 bolivianos. 2. Para el folder municipal 5 bolivianos. 3. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4. Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos. 5. Para la inspección 20 bolivianos. 6. Para la certificación 30 bolivianos. 7. Para la Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito 9. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bRESOLUCIONES\b)(?=.*\bCOMPLEMENTARIAS\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 10 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bUSO\b)(?=.*\bSUELO\b)/i.test(question)){
        const variable = "Es un Trámite a realizar cuando se desee obtener una certificación de cualidades físicas urbanas de un territorio o sitio urbano definido para un determinado uso A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.”,La duración del trámite llega a ser de 15 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bUSO\b)(?=.*\bSUELO\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bUSO\b)(?=.*\bSUELO\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Derecho de admisión 09 DA 09 . 2. Folder municipal 3. Memorial dirigido al sub alcalde solicitando el trámite. 4. títulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real. 5. Impuesto al día Proforma del sistema RUAT que evidencie el no adeudo tributario. 6. Plano de lote aprobado, fotocopia legalizada. 7. Plano de Lote geo referenciado preferentemente por el Instituto Geográfico Militar solo en caso de área Rural. 8. Fotocopia Carnet de identidad vigente del o los propietarios. 9. Certificación. 10. Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito 9. 11. Inspección ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bUSO\b)(?=.*\bSUELO\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Para el derecho de admisión 09 DA 09 del trámite el costo es de 25 bolivianos. 2. Para el folder municipal 5 bolivianos. 3. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4. Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos. 5. Para la certificación 30 bolivianos. 6. Certificación según Ordenanza Municipal Número 2636, válido solo para el Distrito 9. 7. Para la inspección 20 bolivianos. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bUSO\b)(?=.*\bSUELO\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 15 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bFIJACION\b)(?=.*\bLINEA\b)/i.test(question)){
        const variable = "Es un Trámite a realizar cuando se requiere establecer la línea y nivel para la construcción del cordón y acera de un predio que tenga o no plano aprobado, A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bFIJACION\b)(?=.*\bLINEA\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITO\b)(?=.*\bFIJACION\b)(?=.*\bLINEA\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado. 2. Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario. 3. Plano de Lote Aprobado, fotocopia legalizada si tiene. 4. Título de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real Si tiene. 5. Fotocopia del Carnet de identidad vigente del o los propietarios. 6. Derecho de admisión 10 DA 10 del trámite. 7. Folder municipal. 10. Inspección topográfica. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTOS\b)(?=.*\bFIJACION\b)(?=.*\bLINEA\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 2. Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos. 3. Para el derecho de admisión 10 DA 10 del trámite el costo es de 28 bolivianos. 4. Para el folder municipal 5 bolivianos. 5. Para las Tasas de fijación de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 boliviano por metro lineal. 6. Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal. 7. Para la inspección topográfica el costo es de 20 bolivianos ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bFIJACION\b)(?=.*\bLINEA\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 15 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bFIJACION\b)(?=.*\bRASANTE\b)/i.test(question)){
        const variable = "Es un Trámite a realizar cuando no se cuenta con plano aprobado y se requiere establecer la rasante municipal y se desconoce la ubicación de las estacas respecto a la vía o vías colindantes; o que teniendo plano aprobado se ha modificado la rasante.Se requiere verificar una superficie de lote con o sin plano aprobado para conocer con exactitud su superficie, dimensiones de sus límites y posibles afectaciones en relación con la vía o vías colindantes. Se puede realizar en la Sub Alcaldía a la que corresponde el predio";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bFIJACION\b)(?=.*\bRASANTE\b)/i.test(question)){
        const variable = "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bFIJACION\b)(?=.*\bRASANTE\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Memorial dirigido al Sub Alcalde solicitando el trámite requerido con la firma del o los propietarios, copropietarios o apoderado. 2. Impuestos al día Proforma del sistema RUAT que evidencie el no adeudo tributario. 3. Plano de Lote Aprobado, fotocopia legalizada si tiene. 4. Título de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldía a la que corresponde el predio En caso de estar matriculado, acompañar Folio Real. 5. Plano demostrativo de la ubicación del lote en detalle en caso de no contar con Plano de Lote aprobado. 6. Fotocopia del carnet de identidad vigente del o los propietarios. 7. Derecho de admisión 11 DA 11 de trámite. 8. Folder municipal. 9. Formulario técnico Numero 012. 14. Certificación. 15. Inspección. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bFIJACION\b)(?=.*\bRASANTE\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 2. Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos. 3. Para el derecho de admisión 11 DA 11 del trámite el costo es de 28 bolivianos. 4. Para el folder municipal 5 bolivianos. 5. Para el formulario técnico N 012 el costo es de 12 bolivianos. 6. Para las Tasas de fijación de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 boliviano por metro lineal. 7. Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal. 8. Para la tasa por verificación de superficie en lote el costo es de 0.50 bolivianos por metro cuadrado. 9. Para la tasa por verificación de superficie metro cuadrado en inmueble edificado el costo es de 0.80 bolivianos por metro cuadrado. 10. Para la certificación el costo es de 30 bolivianos. 11. Para la inspección el costo es de 20 bolivianos.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bFIJACION\b)(?=.*\bRASANTE\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bVISADO\b)(?=.*\bCONSTRUCCION\b)/i.test(question)){
        const variable = "Es un Trámite a realizar cuando se tiene un predio ubicado en área urbana con plano de lote aprobado y se desea construir una edificación mayor a tres plantas de uno o más bloques. A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bVISADO\b)(?=.*\bCONSTRUCCION\b)/i.test(question)){
        const variable = "Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica centro Histórico los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial  Dirección de Planeamiento Pasaje Sucre.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bVISADO\b)(?=.*\bCONSTRUCCION\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Visado del plano arquitectónico. 2. Derecho de admisión 12 DA 12 del trámite. 3. Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Poder o Carta Notariada. 4. Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro. 5. Planos arquitectónicos de Anteproyecto tres ejemplares y en medio magnético formato PDF, firmado y sellado por el Arquitecto con registro profesional correspondiente. 6. Plano de Lote aprobado, fotocopia legalizada. 7. Fotocopia del carnet de identidad vigente del o los propietarios. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTOS\b)(?=.*\bVISADO\b)(?=.*\bCONSTRUCCION\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. Para el visado de plano arquitectónico el costo es de 30 bolivianos 2. El derecho de admisión 12 DA 12 de trámite tiene un costo de 5 bolivianos. 3. Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bVISADO\b)(?=.*\bCONSTRUCCION\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bCONSTRUCCION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "Es un Trámite a realizar para la aprobación de un proyecto de construcción o edificación de vivienda unifamiliar o más unidades de vivienda en un lote hasta tres plantas. Acargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bCONSTRUCCION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica (centro Histórico) los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial – Dirección de Planeamiento (Pasaje Sucre)";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bCONSTRUCCION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Derecho de admisión 13 (DA 13) de trámite. 2. Folder Municipal. 3. Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Carta o Poder Notariado. 4. Plano de lote aprobado, fotocopia legalizada. 5. Plano del proyecto de construcción, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto. 6. Fotocopia Carnet de identidad vigente del o los propietarios. 7. Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTO\b)(?=.*\bCONSTRUCCION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. El derecho de admisión 13 (DA 13) de trámite tiene un costo de 36 bolivianos. 2. Para el folder municipal tiene un costo de 5 bolivianos 3. Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia. 4. Para la tasa de aprobación residencial el costo es de 1.00 bolivianos por metro cuadrado. 5. Para la tasa de aprobación no residencial (comercial) el costo es de 2.00 bolivianos por metro cuadrado. 6. Para las Tasas de fijación de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 Boliviano por metro lineal. 7. Para subdistritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bCONSTRUCCION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bREMODELACION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "Es un Trámite a realizar cuando se tiene plano de construcción aprobado y se desea realizar modificaciones funcionales y/o de volumetría o se requiere realizar una ampliación a la edificación, siempre y cuando la altura total construida (incluyendo la ampliación) sea hasta tres plantas.A cargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bREMODELACION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = " En la Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica (centro Histórico) los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial – Dirección de Planeamiento (Pasaje Sucre).";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bREMODELACION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Derecho de admisión 14 (DA 14) de trámite. 2. Folder Municipal. 3. Fotocopia Carnet de identidad vigente del o los propietarios. 4. Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Poder o Carta Notariada. 5. Proforma del sistema RUAT que evidencie el no adeudo tributario. 6. Plano de lote aprobado, fotocopia legalizada. 7. Plano del proyecto de ampliación o remodelación, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto. 8. Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTOS\b)(?=.*\bREMODELACION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. El derecho de admisión 14 (DA 14) de trámite tiene un costo de 26 bolivianos. 2. Para el folder municipal tiene un costo de 5 bolivianos 3. Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia. 4. La tasa de aprobación de remodelación sin cambiar función tiene un costo de 0.25 bolivianos por metro cuadrado. 5. La tasa de aprobación de remodelación cambiando función tiene un costo de 0.50 bolivianos por metro cuadrado. 6. La tasa de aprobación de ampliación área residencial tiene un costo de 1.00 bolivianos por metro cuadrado. 7. La tasa de aprobación de ampliación área no residencial tiene un costo de 2.00 bolivianos por metro cuadrado. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bREMODELACION\b)(?=.*\bVIVIENDA\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 20 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bCONSTRUCCION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "Es un Trámite a realizar para la aprobación de un proyecto de construcción de una edificación superior a tres plantas, cuando usted posee un predio ubicado en área urbana con plano de lote aprobado. Acargo de la Unidad de Urbanismo y Trámites Administrativos correspondiente a la Sub Alcaldía";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDONDE\b)(?=.*\bCONSTRUCCION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "En la Sub Alcaldía a la que corresponde el predio. Si el predio se encuentra en el Área de preservación Histórica (centro Histórico) los trámites deberán ser presentados en las Oficinas del Departamento de Patrimonio Territorial – Dirección de Planeamiento (Pasaje Sucre).";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bCONSTRUCCION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes 1. Formulario de Solicitud de Trámite, firmado por el propietario según Certificado o Registro Catastral y/o firmado por el apoderado según Poder o Carta Notariada. 2. Certificado Catastral ó Registro Catastral Computarizado a nombre del actual propietario emitido por la Dirección de Información Geográfica y Catastro. 3. Impuestos al día (Proforma del sistema RUAT que evidencie el no adeudo tributario). 4. Fotocopia Carnet de identidad vigente del o los propietarios. 5. Licencia Ambiental o constancia de inicio de trámite debidamente acreditado por la secretaría Departamental de los Derechos de la Madre Tierra. 6. Planos Arquitectónicos de Anteproyecto visado por el Gobierno Autónomo Municipal de Cochabamba. 7. Plano del proyecto de construcción, cinco ejemplares en papel bond y 1 copia digital en formato CAD, firmado y sellado por el Arquitecto. 8. Planos del Proyecto Estructural, si sobrepasa los 3 pisos, tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. También debe anexarse la Memoria de Cálculo y el Estudio de Suelos. 9. Plano de Instalación Hidrosanitaria, tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. También debe anexarse la Memoria de Cálculo. 10. Plano de Instalación Eléctrica, tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. También debe anexarse la Memoria de Cálculo. 11. Plano de Instalaciones Especiales cuando corresponda (Ejm: gas, aire acondicionado, ascensores, etc.), tres ejemplares y en medio magnético formato pdf, con número de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el profesional con registro que lo acredite. También debe anexarse la Memoria de Cálculo. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bCOSTOS\b)(?=.*\bCONSTRUCCION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "Los costos son los siguientes 1. El derecho de admisión 15 (DA 15) de trámite tiene un costo de 26 bolivianos. 2. Para el folder municipal tiene un costo de 5 bolivianos 3. La tasa de aprobación residencial tiene un costo de 1.00 bolivianos por metro cuadrado. 4. La tasa de aprobación no residencial (comercial) tiene un costo de 2.00 bolivianos por metro cuadrado. 5. La tasa de aprobación del plano estructural tiene un costo de 2.00 bolivianos por metro al cubo. 6. La tasa de fijación de rasante por metro lineal de los sub distritos 1 al 16 tiene un costo de 1.00 bolivianos por metro lineal. 7. Para los sub distritos 17 al 32 tiene un costo de 1.5 bolivianos por metro lineal. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bTIEMPO\b)(?=.*\bCONSTRUCCION\b)(?=.*\bEDIFICIO\b)/i.test(question)){
        const variable = "La duración del trámite llega a ser de 40 días hábiles aproximadamente, después de cumplirse todos los requisitos y no encontrarse observaciones.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bTRANSFERENCIA\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes: 1. original y copia de la declaración jurada aprobada del sistema de visación de minuta de inmuebles. 2. fotocopia del comprobante de pago de impuestos a la propiedad del bien inmueble de la última gestión. 3. original de la minuta de compraventa o documento privado con reconocimiento de firmas. 4. fotocopia de la cédula de identidad del comprador (en caso de no tener registro en el padrón municipal de contribuyente. 5. fotocopia de cédula de identidad a color. 6. 1 foto 3 por 3 fondo rojo. 7. fotocopia de la cédula de identidad del vendedor. 8. título de propiedad y folio real legalizado por la sub alcaldía correspondiente. 9. plano del bien inmueble aprobado por la sub alcaldía correspondiente o el departamento de normas urbanas y rurales (propiedad horizontal), original y fotocopia. 10. registro catastral emitido por la comuna correspondiente (original y fotocopia). 11. en caso de existir poder notariado del comprador y/o vendedor fotocopia legalizada de la notaría de fe pública. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bTRANSFERENCIA\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes: 1. FOLIO REAL (original y fotocopia legalizada por la Sub Alcaldía correspondiente). 2. Título de propiedad, Declaratoria de Herederos, Anticipo de legítima u otro (original y fotocopia legalizada). 3. Fotocopia de la cédula de Identidad de los ACTORES (En caso de NO tener registro en el Padrón Municipal de Contribuyente (PMC) adjuntar: Fotocopia de Cédula de Identidad a color y 1 Foto 3 por 3 Fondo Rojo). 4. Registro Catastral (Original y fotocopia). 5. Comprobante de pago por concepto del Impuesto a la Propiedad de Bien Inmueble - (IPBI), a la fecha de pago del Título de Propiedad. 6. Certificación del Servicio Impuestos Nacionales. 7. Certificación del Gobierno Autónomo Departamental de Cochabamba del pago del impuesto a la Transferencia. (A partir de la gestión 2016). Recomendaciones: Con la finalidad de recibir una atención efectiva y oportuna, recomienda ordenar los documentos conforme lo descrito en originales y copias, para realizar el registro de la Transferencia Especial del Bien Inmueble de la Jurisdicción del Gobierno Autónomo Municipal de Cochabamba. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREGULARIZACION\b)(?=.*\bDERECHOS\b)(?=.*\bINMUEBLES\b)/i.test(question)){
        const variable = "Recomendaciones: Establecer los requisitos básicos para proceder a la modificación del porcentaje definido para la propiedad del bien inmueble cuando corresponda, en función del FOLIO REAL ACTUALIZADO. Los requisitos son los siguientes: 1. Comprobante de Pago del Impuesto a la Propiedad del Bien Inmueble de una gestión pasada. 2. Fotocopia de la cédula de identidad del titular(es) para su registro en el padrón municipal de contribuyente, (En caso de NO tener registro Adjuntar: Fotocopia de cédula de identidad a color y 1 Foto 3 por 3 Fondo Rojo). 3. TÍTULO DE PROPIEDAD acredita derecho propietario del titular del inmueble (Original y copia). 4. FOLIO REAL (ACTUALIZADO) original y fotocopia legible de todos los asientos registrados. 5. Plano del bien inmueble aprobado por la Sub Alcaldía correspondiente o el Departamento de Normas Urbanas y Rurales (Propiedad Horizontal) – (Original y Fotocopia). 6. REGISTRO CATASTRAL emitido por Comuna Correspondiente (Original y fotocopia). 7. En caso de existir Poder notariado, presentar la original y copia que le faculte la realización del presente trámite. 8. Otros documentos que acrediten el derecho propietario en función al folio real y su asiento debidamente registrado. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bVISACION\b)(?=.*\bMINUTA\b)/i.test(question)){
        const variable = "Los requisitos son los siguientes: 1. DERECHO DE ADMISIÓN (DA -99), la persona natural o jurídica debe cancelar el derecho de Admisión de trámite al número cuenta: DA-99 por 20 bolivianos en la Entidad Financiera Autorizada o Caja Recaudadora del Gobierno Autónomo Municipal de Cochabamba. 2. DECLARACIÓN JURADA IMPRESA, EI formulario de Visación de Minutas deberá estar firmado por el comprador o vendedor o apoderado, debiendo verificar la firma con la cédula de identidad. 3. ORIGINAL DEL REGISTRO CATASTRAL O CERTIFICACIÓN CATASTRAL, en caso de ser primera transferencia no corresponde. (último asiento a nombre del titular). 4. ORIGINAL DEL FOLIO REAL O INFORMACIÓN RÁPIDA ACTUALIZADO (emitido en la presente gestión a del titular). 5. Cuando el vendedor es persona jurídica: Fotocopia del NIT, Poder del representante Legal y Cédula de identidad. 6. FOTOCOPIA DE LA CÉDULA DE IDENTIDAD de las partes intervinientes VENDEDORES y COMPRADORES. 7. PLANO APROBADO DE LOTE, CONSTRUCCIÓN O UNIDAD DE PROPIEDAD HORIZONTAL LEGALIZADO, según el objeto de La transferencia. 8. MINUTA DE TRANSFERENCIA DEL BIEN INMUEBLE (con firma de las partes y el abogado). 9. ORIGINAL DEL TÍTULO DE PROPIEDAD. 10. ORIGINAL DEL PODER DE REPRESENTACIÓN LEGAL (otorgado por el comprador o vendedor). RECOMENDACIONES: Para la admisión del trámite de visación, el contribuyente debe cancelar el derecho de admisión (DA 99), llenar la declaración jurada en el sistema de visaciones y realizar la aprobación de la declaración. • El inmueble no deberá consignar mora tributaria a la fecha de su registro. • Para los casos de venta judicial adjuntar. SENTENCIA, ACTA DE REMATE Y AUTO DE ADJUDICACIÓN. Una vez revisada toda la documentación original, se deberá presentar adjunta una copia simple en el mismo orden. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bREGISTRO\b)(?=.*\bVEHICULO \b)/i.test(question)){
        const variable = "Los requisitos son Fotocopia de cédula de identidad vigente, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, certificado único de datos técnicos de automotor, póliza de importación, factura comercial (original y fotocopia), y en caso de ser apoderado presentar el poder de representación legal. La unidad a cargo es la Dirección de Recaudaciones ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bREGISTRO\b)(?=.*\bVEHICULO\b)(?=.*\bFACTURA\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, póliza de importación, factura comercial (original y fotocopia), documento de compra y venta (original y fotocopia), fotocopia vigente del vendedor y en caso de ser apoderado presentar el poder de representación legal.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bIMPORTACION\b)(?=.*\bVEHICULO\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, póliza de importación, y en caso de ser apoderado presentar el poder de representación legal";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bINSCRIPCION\b)(?=.*\bVEHICULO\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, declaración única de importación, formulario de registro vehicular, póliza de importación, Documento compra y venta (original y fotocopia), Fotocopia de documento de identidad del vendedor y en caso de ser apoderado presentar el poder de representación legal.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bTRANSFERENCIA\b)(?=.*\bVEHICULO\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehículo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representación legal";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bTRANSFERENCIA\b)(?=.*\bVEHICULO\b)(?=.*\bRADICATORIA\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehículo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representación legal.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bCAMBIO\b)(?=.*\bVEHICULO\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, registró a la propiedad del vehículo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representación legal.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bCAMBIO\b)(?=.*\bPARTICULAR\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, registró a la propiedad del vehículo automotor terrestre (original y fotocopia), Certificado de transporte del servicio público, fotocopia de licencia o equivalente, y en caso de ser apoderado presentar el poder de representación legal. ";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bCAMBIO\b)(?=.*\bPOSEEDOR\b)/i.test(question)){
        const variable = "Los requisitos son  DECLARACIÓN JURADA VIRTUAL – Cambio de Radicatoria “Poseedor” – registro a la propiedad del vehículo automotor terrestre (original y fotocopia),fotocopia de cédula de identidad del poseedor, fotocopia del documento que acredite su condición de poseedor de buena fe (opcional).";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bEXTRAVIO\b)(?=.*\bVEHICULO\b)/i.test(question)){
        const variable = "Los requisitos son  Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Original (Para Verificación) y Fotocopia de la Factura de Publicación en un medio de prensa escrita de circulación nacional, comunicando el extravío del Certificado de Registro de Propiedad del Vehículo Automotor por tres  días continuos, y en caso de ser apoderado presentar el poder de representación legal.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bREEMPLAQUE\b)(?=.*\bVEHICULO\b)/i.test(question)){
        const variable = "Los requisitos son Los requisitos son Fotocopia de cédula de identidad vigente a color, foto 3 por 3 fondo rojo, Original y Fotocopia de la Comunicación al Poseedor (COPO) Documento a Recabarse en Aduana Nacional o Póliza Titularizada del Automotor (PTA), de no Contar Con El Original Presentar La Certificación de la Denuncia Registrada en la FELCC, Original y Fotocopia del Carnet de Propiedad (Anterior), de no contar con el documento original deberá presentar la Certificación de la Denuncia Registrada en la FELCC, Declaración Jurada de No Emplacado (a Obtener en Recaudaciones), Original y Fotocopia de Informe De Datos Técnicos – Relevamiento de las Características del Vehículo emitido por la Sección correspondiente del Gobierno Autónomo Municipal de Cochabamba (formulario RUA 08), de Corresponder. y en caso de ser apoderado presentar el poder de representación legal.La unidad a cargo es la Dirección de Recaudaciones";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bREQUISITOS\b)(?=.*\bBAJA\b)(?=.*\bTRIBUTARIA\b)/i.test(question)){
        const variable = "Los requisitos son, Original de la certificación de denuncia de robo emitida por la policía boliviana, original del certificado de propiedad de vehículo automotor original y copia de cédula de identidad del titular, impuestos al día, derecho de admisión 101 (DA  101), folder municipal, timbre para la emisión de la certificación y en caso de ser apoderado presentar el poder de representación legal";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDISTRITOS\b)(?=.*\bSUB\b)(?=.*\bALCALDIA\b)(?=.*\bTUNARI\b)/i.test(question)){
        const variable = "Distrito 1 conformado por sub distrito 25  Zona Aranjuez Alto,  Sub Distrito 26  Zona Mesadilla.Distrito 2 conformado por sub distrito 22  Zona Condebamba, Sub Distrito 23  Zona Temporal Pampa, Sub Distrito 24  Zona Queru Queru Alto, Sub Distrito 1  Zona Mayorazgo.Distrito 13 Parque Nacional Tunari";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDISTRITOS\b)(?=.*\bSUB\b)(?=.*\bALCALDIA\b)(?=.*\bMOLLE\b)/i.test(question)){
        const variable = "Distrito 3 conformado por sub distrito 21  Zona Sarcobamba, Sub Distrito 37  Zona Chiquicollo.distrito 4 conformado por sub distrito Distrito 10  Zona Chimba, Sub Distrito 27  Zona Villa Bush, Sub Distrito 28  Zona Coña Coña.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDISTRITOS\b)(?=.*\bSUB\b)(?=.*\bALCALDIA\b)(?=.*\bALEJO\b)/i.test(question)){
        const variable = "Distrito 5 conformado por sub distrito 14  Zona La Maica, Sub Distrito 15  Zona Jaihuayco, Sub Distrito 17  Zona Lacma, Sub Distrito 18  Zona Ticti, Sub Distrito 20  Zona Alalay Valle Hermoso.Distrito 8 conformado por sub distrito  Zona Uspha Uspha";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDISTRITOS\b)(?=.*\bSUB\b)(?=.*\bALCALDIA\b)(?=.*\bVALLE\b)/i.test(question)){
        const variable = "Distrito 6 conformado por sub distrito 16  Zona Alalay Norte.Distrito 7 conformado por sub distrito 19  Zona Alalay Sud.Distrito 14 conformado por sub distrito 20  Zona Valle Hermoso.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDISTRITOS\b)(?=.*\bSUB\b)(?=.*\bALCALDIA\b)(?=.*\bITOCTA\b)/i.test(question)){
        const variable = "Distrito 9 conformado por sub distrito 29  Zona Tamborada Pukarita, Sub Distrito 30  Zona 1 de mayo,Sub Distrito 31  Zona Pucara Grande Norte, Sub Distrito 35  Zona Pucara Grande Sur, sub Distrito 36  Zona Pucara Grande Oeste.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDISTRITOS\b)(?=.*\bSUB\b)(?=.*\bALCALDIA\b)(?=.*\bADELA\b)/i.test(question)){
        const variable = "Distrito 10 conformado por sub distrito  7  Zona Noroeste, sub Distrito 8  Zona Noreste, Sub Distrito 11  Zona Sudoeste, Sub Distrito 12  Zona Sudeste.Distrito 11 conformado por sub distrito 9  Zona Muyurina, Sub Distrito 13  Zona Las Cuadras.Distrito 12 conformado por sub distrito 2  Zona Sarco,Sub Distrito   Zona Cala Cala,Sub Distrito 4  Zona Queru Queru,Sub Distrito 5  Zona Tupuraya,Sub Distrito 6  Zona Hipódromo.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bDISTRITOS\b)(?=.*\bSUB\b)(?=.*\bALCALDIA\b)(?=.*\bTAMBORADA\b)/i.test(question)){
        const variable = "Distrito 15 conformado por sub distrito 32  Zona Valle Hermoso Oeste, Sub Distrito 33  Khara Khara Arrumani, sub distrito 35 zona pukara grande sur.";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }
    /*if(/^(?=.*\bQUE\b)(?=.*\bTRANSFERENCIA\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bTRANSFERENCIA\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }if(/^(?=.*\bQUE\b)(?=.*\bTRANSFERENCIA\b)(?=.*\bINMUEBLE\b)/i.test(question)){
        const variable = "";
        combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: `${variable}`,
        };
    }*/
    
    if (!combinedResponse) {
        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: "Eres un asistente virtual de trámites del Gobierno Municipal de Cochabamba (Alcaldía de Cochabamba). Tu cliente te está haciendo una pregunta sobre trámites realizados o que se realizan en la alcaldía de Cochabamba. Debes responder con: \n- spanish: la versión en español de la pregunta, dividida en palabras ej: \n- content: Tu respuesta proporcionando información sobre procesos de trámites en la alcaldía de Cochabamba y sobre el actual alcalde de cochabamba que es Manfred Reyes Villa Bacigalupi."
                    },
                    {
                        role: "system",
                        content: "Siempre debes responder con un objeto JSON con el siguiente formato: \n{\n    \"spanish\": [\n        {\n            \"word\": \"\"\n        }\n    ],\n    \"content\": \"\"\n}"
                    },
                    {
                        role: "user",
                        content: question
                    }
                ],
                model: "gpt-4-turbo",
                response_format: {
                    type: "json_object"
                }
            });

            const chatResponse = JSON.parse(chatCompletion.choices[0].message.content);
            combinedResponse = {
                spanish: [], // Aquí debes poner la versión en español de la pregunta
                content: chatResponse.content
            };

            console.log("Respuesta de la API de OpenAI:", chatCompletion);
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
            return Response.json({ error: "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde." });
        }
        /*combinedResponse = {
            spanish: cochabambaExample.spanish,
            content: "Aún no está en mi base.",
        };*/
    }
    /*if (!matchedQuestion) {
        console.log("no match")
        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: "Eres un asistente virtual de trámites del Gobierno Municipal de Cochabamba (Alcaldía de Cochabamba). Tu cliente te está haciendo una pregunta sobre trámites realizados o que se realizan en la alcaldía de Cochabamba. Debes responder con: \n- spanish: la versión en español de la pregunta, dividida en palabras ej: \n- content: Tu respuesta proporcionando información sobre procesos de trámites en la alcaldía de Cochabamba y sobre el actual alcalde de cochabamba que es Manfred Reyes Villa Bacigalupi."
                    },
                    {
                        role: "system",
                        content: "Siempre debes responder con un objeto JSON con el siguiente formato: \n{\n    \"spanish\": [\n        {\n            \"word\": \"\"\n        }\n    ],\n    \"content\": \"\"\n}"
                    },
                    {
                        role: "user",
                        content: question
                    }
                ],
                model: "gpt-4-turbo",
                response_format: {
                    type: "json_object"
                }
            });

            const chatResponse = JSON.parse(chatCompletion.choices[0].message.content);
            combinedResponse = {
                spanish: [], // Aquí debes poner la versión en español de la pregunta
                content: chatResponse.content
            };

            console.log("Respuesta de la API de OpenAI:", chatCompletion);
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
            return Response.json({ error: "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde." });
        }
    } else {
        console.log("pregunta")
        try {
            const cochabambaExample = cochabambaExamples[matchedQuestion];
            const chatCompletion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: `Eres un asistente virtual de trámites del Gobierno Municipal de Cochabamba (Alcaldía de Cochabamba). Tu cliente te está haciendo una pregunta sobre trámites realizados o que se realizan en la alcaldía de Cochabamba. Debes responder con: 
                        - spanish: la versión en español de la pregunta, dividida en palabras ej: ${JSON.stringify(
                            cochabambaExample.spanish
                        )}
                        - content: Tu respuesta proporcionando información sobre procesos de trámites en la alcaldía de Cochabamba.`,
                    },
                    {
                        role: "system",
                        content: `Siempre debes responder con un objeto JSON con el siguiente formato: 
                        {
                            "spanish": [
                                {
                                    "word": ""
                                }
                            ],
                            "content": ""
                        }`,
                    },
                    {
                        role: "user",
                        content: question,
                    },
                ],
                model: "gpt-4-turbo",
                response_format: {
                    type: "json_object",
                },
            });

            const chatResponse = JSON.parse(chatCompletion.choices[0].message.content);
            const chatResponseHOLA = {
                spanish: cochabambaExample.spanish,
                content: `${cochabambaExample.content}`,
            };
            combinedResponse = chatResponseHOLA;
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
            return Response.json({ error: "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde." });
        }
    }*/

    return Response.json(combinedResponse);

    
}
