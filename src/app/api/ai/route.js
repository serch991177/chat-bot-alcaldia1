import OpenAI from "openai";

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
    "GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
    "GOBIERNO MUNICIPAL DE COCHABAMBA":{
        content:"El Alcalde Manfred Reyes Villa Bacigalupi",
    },
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
    "TRAMITES":{
        content:"",
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
    "QUE ES EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION":{
        content:" Es un tramite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con caracter previo al diseno de los planos definitivos del proyecto de urbanizacion, debe solicitar al Gobierno Autonomo Municipal de Cochabamba la visacion de los planos del anteproyecto.",
    },
    "COMO HAGO EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION":{
        content:" Es un tramite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 metros cuadrados, con caracter previo al diseno de los planos definitivos del proyecto de urbanizacion, debe solicitar al Gobierno Autonomo Municipal de Cochabamba la visacion de los planos del anteproyecto.",
    },
    "DONDE SE REALIZA EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION":{
        content:"Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION":{
        content:"Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION":{
        content:"El costo depende del terreno por ejemplo la tasa de visacion de anteproyecto: por terreno plano es 0.05 Bolivianos por metro cuadrado",
    },
    "DONDE SE REALIZA EL TRAMITE DE APROBACION DEL PLANO DE REMODELACION AMPLIACION, REGULARIZACION Y/O SUSTITUCION DE EDIFICIO ":{ 
        content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE DE APROBACION DEL PLANO DE REMODELACION AMPLIACION, REGULARIZACION Y/O SUSTITUCION DE EDIFICIO ":{ 
        content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "QUE ES LA APROBACION DEL PLANO DE REMODELACION AMPLIACION, REGULARIZACION Y/O SUSTITUCION DE EDIFICIO": {
        content:" Es un tramite a realizar cuando se tiene plano de construccion aprobado y se desea realizar modificaciones funcionales y/o de volumetria o se requiera realizar una ampliacion a la edificacion (mayor a tres plantas), para ello se debe solicitar la aprobacion de remodelacion o ampliacion segun el caso. El presente tramite tambien es aplicable en el caso que se desee realizar la regularizacion de una edificacion construida que cumple la normativa vigente. Tambien se aplica el tramite en caso que se requiera sustituir un plano de construccion aprobado por otro proyecto, siempre y cuando no este construida la edificacion.", 
    },
    "COMO HAGO LA APROBACION DEL PLANO DE REMODELACION AMPLIACION, REGULARIZACION Y/O SUSTITUCION DE EDIFICIO": {
        content:" Es un tramite a realizar cuando se tiene plano de construccion aprobado y se desea realizar modificaciones funcionales y/o de volumetria o se requiera realizar una ampliacion a la edificacion (mayor a tres plantas), para ello se debe solicitar la aprobacion de remodelacion o ampliacion segun el caso. El presente tramite tambien es aplicable en el caso que se desee realizar la regularizacion de una edificacion construida que cumple la normativa vigente. Tambien se aplica el tramite en caso que se requiera sustituir un plano de construccion aprobado por otro proyecto, siempre y cuando no este construida la edificacion.", 
    },
    "CUALES SON LOS COSTOS DEL TRAMITE DE APROBACION DEL PLANO DE REMODELACION AMPLIACION,REGULARIZACION Y/O SUSTITUCION DE EDIFICIO ":{
        content:"El costo para Remodelacion sin cambiar la funcion es de 0.25 bolivianos por metro cuadrado, y si cambia funcion el costo es de 0.50 bolivianos por metro cuadrado, el costo por Ampliacion de area residencial es de 1.00 boliviano por metro cuadrado, por ampliacion de area no residencial es de 2.00 bolivianos por metro cuadrado, por ampliacion de plano estructural es de 2.00 bolivianos por metro cubico",
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE DE APROBACION DEL PLANO DE REMODELACION AMPLIACION, REGULARIZACION Y/O SUSTITUCION DE EDIFICIO ":{
        content:"Los requisitos son, el derecho de admision 16 (DA 16), folder municipal, formulario de solicitud de tramite, certificado catastral, impuestos al dia, fotocopia de carnet de identidad vigente, plano de lotes aprobados y fotocopia legalizada, planos arquitectonicos del proyecto de remodelacion o ampliacion, certificado de estabilidad estructural emitida por la Sociedad de Ingenieros de Bolivia ",
    },
    "CUANTO DURA EL TRAMITE DE APROBACION DEL PLANO DE REMODELACION AMPLIACION, REGULARIZACION Y/O SUSTITUCION DE EDIFICIO ":{
        content:" El tramite si cumple todos los requisitos y no hay observaciones, dura 40 dias habiles aproximadamente.",
    },
    "QUE ES LA APROBACION DEL PLANO DE VERJA": {
        content:" Es un tramite para aprobar un proyecto de construccion de verja.",
    },
    "COMO HAGO LA APROBACION DEL PLANO DE VERJA": {
        content:" Es un tramite para aprobar un proyecto de construccion de verja.",
    },
    "DONDE SE REALIZA LA APROBACION DEL PLANO DE VERJA ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO LA APROBACION DEL PLANO DE VERJA ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DE LA APROBACION DEL PLANO DE VERJA ":{content:"El costo por metro lineal del frente del terreno es de 2 bolivianos, el costo de fijacion de rasante por metro lineal del subdistrito 1 al 16 es de 1 boliviano y del subdistrito 17 al 32 es de 1.5 bolivianos por metro lineal",
    },
    "CUALES SON LOS REQUISITOS DE LA APROBACION DEL PLANO DE VERJA ":{
        content:"Los requisitos son: Derecho de admision 17 (DA 17), folder municipal, formulario de solicitud, plano de lote aprobado, registro catastral, plano de construccion, fotocopia Carnet de identidad vigente. ",
    }, 
    "CUANTO ES LA DURACION DE LA APROBACION DEL PLANO DE VERJA ":{
        content:" El tramite si cumple todos los requisitos y no hay observaciones, dura 10 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA EL TRAMITE DE AUTORIZACION DE TRABAJOS MENORES":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE DE AUTORIZACION DE TRABAJOS MENORES":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DE AUTORIZACION DE TRABAJOS MENORES":{
        content:"Son varios los costos por la autorizacion de trabajos menores, el costo de tramite por construccion de habitacion provisional es de 50 bolivianos por Unidad, por excavaciones en via publica el costo es de 100 Bolivianos, el costo por construccion de muro perimetral es de 0.50 bolivianos por metro cuadrado, por la apertura o colocado de puertas y ventanas es de 20 Bolivianos la unidad.",
    },
    "CUALES SON LOS REQUISITOS DE AUTORIZACION DE TRABAJOS MENORES ":{ content:"Los requisitos son: solicitud de tramite, folder amarillo. Plano de lote aprobado, titulo de propiedad, fotocopia de Carnet de identidad vigente, impuestos al dia. ",
    },
    "CUANTO ES LA DURACION DE AUTORIZACION DE TRABAJOS MENORES ":{
        content:" La duracion del tramite si cumple todos los requisitos es de 3 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA EL VISADO DE ANTEPROYECTO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL VISADO DE ANTEPROYECTO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DEL VISADO DE ANTEPROYECTO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:"el precio del visado del plano es de 30 bolivianos, el precio de Derecho de admision 18 (DA 18) es de 5 bolivianos y el timbre de 10 bolivianos por cada fotocopia. ",
    },
    "CUALES SON LOS REQUISITOS DEL VISADO DE ANTEPROYECTO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:"Los requisitos son: Visado del plano arquitectonico, derecho de admision 18 (DA 18) del tramite, formulario de solicitud del tramite, certificado catastral, planos arquitectonicos de anteproyecto, plano de lote aprobado, fotocopia de  Carnet de identidad vigente. ",
    },
    "CUANTO ES LA DURACION DEL VISADO DE ANTEPROYECTO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:" La duracion del tramite si cumple todos los requisitos es de 30 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA LA APROBACION DE PLANO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO LA APROBACION DE PLANO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DE LA APROBACION DE PLANO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:"Los timbres tienen un costo de 20 Bolivianos, folder municipal a 5 bolivianos, reposicion de boleta comprobante y folder 6 bolivianos, tasa de aprobacion area residencial por metro cuadrado es de 2 bolivianos, tasa de aprobacion plano estructural por metro cubico a 2 bolivianos ",
    },
    "CUALES SON LOS REQUISITOS DE LA APROBACION DE PLANO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:"Los requisitos son: formulario de solicitud de tramite, certificado catastral, impuestos al dia, licencia ambiental, planos arquitectonicos de anteproyecto visado por la alcaldia, planos del proyecto estructural, plano de instalacion hidrosanitaria, plano instalacion electrica, plano de instalaciones especiales, fotocopia carnet de identidad vigente",
    },
    "CUANTO ES LA DURACION DE LA APROBACION DE PLANO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS ":{ content:" La duracion del tramite si cumple todos los requisitos es de 30 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA EL VISADO DE PLANO DE ANTEPROYECTO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL VISADO DE PLANO DE ANTEPROYECTO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DEL VISADO DE PLANO DE ANTEPROYECTO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:"El precio de derecho de admision 20 (DA  20) es de 46 bolivianos, folder municipal 5 bolivianos, la tasa de verificacion de superficies de 0.50 bolivianos por metro cuadrado, tasa de fijacion de rasante por metro lineal en el subdistrito 1 al 16 de 1 boliviano el metro lineal y del sub distrito 17 al 32 de 1.5 bolivianos el metro lineal ",
    },
    "CUALES SON LOS REQUISITOS DEL VISADO DE PLANO DE ANTEPROYECTO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:"Son el derecho de admision 20 (DA 20), folder municipal, memorial dirigido al sub alcalde, plano de lote aprobado, titulo de propiedad, impuestos al dia, fotocopia Carnet de identidad vigente, solvencia fiscal, anteproyecto de construccion, certificado de ubicacion. ",
    },
    "CUANTO ES LA DURACION DEL VISADO DE PLANO DE ANTEPROYECTO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:" La duracion del tramite si cumple todos los requisitos es de 30 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA LA APROBACION DEL PLANO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    }, 
    "DONDE HAGO LA APROBACION DEL PLANO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    }, 
    "CUALES SON LOS COSTOS DE LA APROBACION DEL PLANO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:"El precio de derecho de admision 21 (DA 21) es de 46 bolivianos, folder municipal 5 bolivianos, tasa de aprobacion por metro cuadrado a 3 bolivianos, tasa de aprobacion por metro cuadrado de edificaciones 2 bolivianos, tasa de fijacion de rasante 1.5 bolivianos por metro lineal.",
    }, 
    "CUALES SON LOS REQUISITOS DE LA APROBACION DEL PLANO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:"Son el derecho de admision 21 (DA 21), folder municipal, memorial dirigido al sub alcalde, plano de lote aprobado, titulo de propiedad, impuestos al dia, fotocopia Carnet de identidad vigente, solvencia fiscal, plano de proyecto de construccion, plano de detalle construccion, plano de detalles constructivos, plano de instalaciones electricas, plano de instalacion sanitaria, certificado de ubicacion, anteproyecto visado, licencia ambiental. ",
    },
    "CUANTO ES LA DURACION DE LA APROBACION DEL PLANO DE ESTACION DE SERVICIO Y SURTIDORES ":{ content:" La duracion del tramite si cumple todos los requisitos es de 30 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA LA AUTORIZACION EVENTUAL PARA USO DE ESPACIOS PUBLICOS PARA ACTIVIDADES CIVICAS, RELIGIOSAS, TRADICIONALES, CULTURALES Y OTROS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO LA AUTORIZACION EVENTUAL PARA USO DE ESPACIOS PUBLICOS PARA ACTIVIDADES CIVICAS, RELIGIOSAS, TRADICIONALES, CULTURALES Y OTROS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DE LA AUTORIZACION EVENTUAL PARA USO DE ESPACIOS PUBLICOS PARA ACTIVIDADES CIVICAS, RELIGIOSAS, TRADICIONALES, CULTURALES Y OTROS ":{ content:"Para las actividades sin fines de lucro no tiene costo, para las actividades con fines de lucro el derecho de admision 21 (DA 21) es de 20 bolivianos, folder municipal a 5 bolivianos,y el costo de comprobante de pago de patente.",
    },
    "CUALES SON LOS REQUISITOS DE LA AUTORIZACION EVENTUAL PARA USO DE ESPACIOS PUBLICOS PARA ACTIVIDADES CIVICAS, RELIGIOSAS, TRADICIONALES, CULTURALES Y OTROS ":{ content:"Los requisitos son solicitud escrita dirigida al sub alcalde indicado, carta notariada de compromiso de entrega en las mismas condiciones, contrato de emsa, derecho de admision 22 (DA 22), folder municipal, comprobante de pago de la patente. ",
    },
    "CUANTO ES LA DURACION DE LA AUTORIZACION EVENTUAL PARA USO DE ESPACIOS PUBLICOS PARA ACTIVIDADES CIVICAS, RELIGIOSAS, TRADICIONALES, CULTURALES Y OTROS ":{ content:" La duracion del tramite si cumple todos los requisitos es de 2 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA LA VISACION TECNICA Y LEGAL DE MINUTAS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO LA VISACION TECNICA Y LEGAL DE MINUTAS ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DE LA VISACION TECNICA Y LEGAL DE MINUTAS ":{ content:" Los costos son, Tasa de visacion de predio, lote o inmueble ubicado en area urbana: Hasta 500 metros cuadrados de lote 25 Bolivianos, Hasta 500 metros cuadrados de lote con edificacion 40 Bolivianos, Mas de 501 metros cuadrados de lote 60 Bolivianos, Mas de 500 metros cuadrados de lote con edificacion 90 Bolivianos, Tasa de visacion de predio, lote o inmueble ubicado en area rural o rustica: Terreno de uso agricola, mayor a 5000 metros cuadrados 120 Bolivianos, Terrenos rusticos transferidos en su integridad 90 Bolivianos, Derecho de admision 23 (DA 23) de tramite 5 Bolivianos.",
    },
    "CUALES SON LOS REQUISITOS DE LA VISACION TECNICA Y LEGAL DE MINUTAS ":{ content:"Los requisitos son solicitud, fotocopia Carnet de identidad vigente, titulo de propiedad y folio real actualizado, registro catastral, plano de lote, impuestos al dia, minuta de transferencia",
    },
    "CUANTO ES LA DURACION DE LA VISACION TECNICA Y LEGAL DE MINUTAS ":{ content:" La duracion del tramite si cumple todos los requisitos es de 1 dia habil aproximadamente.",
    },
    "DONDE SE REALIZA EL SELLO SECO EN TESTIMONIOS Y/O MINUTAS CON RECONOCIMIENTO DE FIRMAS PARA SU REGISTRO EN DERECHOS REALES ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL SELLO SECO EN TESTIMONIOS Y/O MINUTAS CON RECONOCIMIENTO DE FIRMAS PARA SU REGISTRO EN DERECHOS REALES ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DE SELLO SECO EN TESTIMONIOS Y/O MINUTAS CON RECONOCIMIENTO DE FIRMAS PARA SU REGISTRO EN DERECHOS REALES ":{ content:"El costo del timbre es de 10 Bolivianos",
    },
    "CUALES SON LOS REQUISITOS DE EL SELLO SECO EN TESTIMONIOS Y/O MINUTAS CON RECONOCIMIENTO DE FIRMAS PARA SU REGISTRO EN DERECHOS REALES ":{ content:"Los requisitos son solicitud, testimonio protocolizado, minuta de Transferencia con reconocimiento de firmas, formulario de pago de impuestos.",
    },
    "CUANTO ES LA DURACION DE EL SELLO SECO EN TESTIMONIOS Y/O MINUTAS CON RECONOCIMIENTO DE FIRMAS PARA SU REGISTRO EN DERECHOS REALES ":{ content:" La duracion del tramite si cumple todos los requisitos es Inmediato.",
    },
    "DONDE SE REALIZA LA ATENCION DE DENUNCIAS SOBRE PROBLEMAS TECNICOS Y LEGALES DE CONSTRUCCION ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO LA ATENCION DE DENUNCIAS SOBRE PROBLEMAS TECNICOS Y LEGALES DE CONSTRUCCION ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DE LA ATENCION DE DENUNCIAS SOBRE PROBLEMAS TECNICOS Y LEGALES DE CONSTRUCCION ":{ content:"No tiene costo alguno",
    },
    "CUALES SON LOS REQUISITOS DE LA ATENCION DE DENUNCIAS SOBRE PROBLEMAS TECNICOS Y LEGALES DE CONSTRUCCION ":{ content:"Los requisitos son solicitud, documentos que respalden la denuncia, fotocopia de Carnet de identidad vigente.",
    },
    "CUANTO ES LA DURACION DE LA ATENCION DE DENUNCIAS SOBRE PROBLEMAS TECNICOS Y LEGALES DE CONSTRUCCION ":{ content:" La presentacion de la denuncia es inmediata. El tiempo de respuesta varia en funcion al contenido de la denuncia.",
    },
    "DONDE SE REALIZA EL AVALUO DE INMUEBLE CON ORDEN JUDICIAL Y/O A PETICION DE PARTE ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL AVALUO DE INMUEBLE CON ORDEN JUDICIAL Y/O A PETICION DE PARTE ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DEL AVALUO DE INMUEBLE CON ORDEN JUDICIAL Y/O A PETICION DE PARTE ":{ content:" El costo es: derecho de admision 24 (DA 24) de tramite 27 Bolivianos, Folder municipal 5 Bolivianos, Tasa por verificacion de superficie en lote 0.50 Bolivianos por metro cuadrado, Tasa por verificacion de superficie en inmueble edificado 0.80 Bolivianos por metro cuadrado, Certificacion 30 Bolivianos, Certificacion (segun Ordenanza Municipal Numero 2636, valido solo para el Distrito 9) 50 Bolivianos ",
    },
    "CUALES SON LOS REQUISITOS DEL AVALUO DE INMUEBLE CON ORDEN JUDICIAL Y/O A PETICION DE PARTE ":{ content:"Los requisitos son Requerimiento fiscal. Plano aprobado del predio, escritura publica o folio real, fotocopia de Carnet de identidad vigente.",
    },
    "CUANTO ES LA DURACION DEL AVALUO DE INMUEBLE CON ORDEN JUDICIAL Y/O A PETICION DE PARTE ":{ content:" De no encontrarse observaciones es de 10 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA LA NUMERACION DOMICILIARIA ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO LA NUMERACION DOMICILIARIA ":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS LA NUMERACION DOMICILIARIA ":{ content:" El costo es: derecho de admision 25 (DA 25) de tramite es 25 Bolivianos, Folder municipal 5 Bolivianos, Tasa por numeracion de domicilio 17 Bolivianos",
    },
    "CUALES SON LOS REQUISITOS DE LA NUMERACION DOMICILIARIA ":{ content:"Los requisitos son solicitud, fotocopia de  Carnet de identidad vigente, el inmueble o lote debe contar con muro o verja de cierre frontal, titulo de propiedad registrado en Derechos reales, impuestos al dia, plano de lote aprobado",
    },
    "CUANTO ES LA DURACION DE LA NUMERACION DOMICILIARIA ":{ content:" De no encontrarse observaciones es de 10 dias habiles aproximadamente.",
    },
    "DONDE SE REALIZA LA LEGALIZACION DE COPIA DE DOCUMENTOS DE DERECHO PROPIETARIO (TESTIMONIO, Y OTROS), RESOLUCIONES, INFORMES, PLANOS APROBADOS, IMPUESTOS Y OTROS PARA USO EXCLUSIVO DEL Gobierno Autonomo Municipal de Cochabamba":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    }, 
    "DONDE HAGO LA LEGALIZACION DE COPIA DE DOCUMENTOS DE DERECHO PROPIETARIO (TESTIMONIO, Y OTROS), RESOLUCIONES, INFORMES, PLANOS APROBADOS, IMPUESTOS Y OTROS PARA USO EXCLUSIVO DEL Gobierno Autonomo Municipal de Cochabamba":{ content:" Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    }, 
    "CUALES SON LOS COSTOS LA LEGALIZACION DE COPIA DE DOCUMENTOS DE DERECHO PROPIETARIO (TESTIMONIO, Y OTROS), RESOLUCIONES, INFORMES, PLANOS APROBADOS, IMPUESTOS Y OTROS PARA USO EXCLUSIVO DEL Gobierno Autonomo Municipal de Cochabamba":{ content:" El costo es de 10 bolivianos el timbre por cada documento legalizado y de 5 bolivianos por cada impuesto legalizado.",
    }, 
    "CUALES SON LOS REQUISITOS DE LA LEGALIZACION DE COPIA DE DOCUMENTOS DE DERECHO PROPIETARIO (TESTIMONIO, Y OTROS), RESOLUCIONES, INFORMES, PLANOS APROBADOS, IMPUESTOS Y OTROS PARA USO EXCLUSIVO DEL Gobierno Autonomo Municipal de Cochabamba":{ content:"Los requisitos son solicitud, documento a legalizar, timbre municipal por cada documento",
    },
    "CUANTO ES LA DURACION DE LA LEGALIZACION DE COPIA DE DOCUMENTOS DE DERECHO PROPIETARIO (TESTIMONIO, Y OTROS), RESOLUCIONES, INFORMES, PLANOS APROBADOS, IMPUESTOS Y OTROS PARA USO EXCLUSIVO DEL Gobierno Autonomo Municipal de Cochabamba":{ content:" Inmediato, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE ES EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content:" Es un tramite a realizar cuando se requiere urbanizar un terreno de una propiedad con superficie a 1300 metros cuadrados, con caracter previo al diseno de los planos definitivos del proyecto de urbanizacion, debe solicitar al Gobierno Autonomo Municipal de Cochabamba. la visacion de los planos del anteproyecto.",
    }, 
    "QUE ES LA AUTORIZACION DE TRABAJOS MENORES": {content:" Es un tramite para la ejecucion de obras de pequena magnitud, excavaciones en via publica, construccion de muro perimetral, apertura de puertas y ventanas, cambio total de cubiertas, acopio de material y escombros, bardas temporales en la vereda, arreglo de fachada o trabajos externos con uso de la acera, demolicion de bloque o de unidad.",
    }, 
    "QUE ES VISADO DE ANTEPROYECTO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS": {content:" Es un tramite a realizar cuando se requiere la aprobacion del plano arquitectonico de anteproyecto de equipamientos publico y privados.",
    },  
    "QUE ES LA APROBACION DE PLANO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS": {content:" Es un tramite a realizar cuando se requiere la aprobacion del plano arquitectonico de anteproyecto de equipamientos publicos y privado",
    },
    "QUE ES EL VISADO DE PLANO DE ANTEPROYECTO DE ESTACION DE SERVICIO Y SURTIDORES": {content:" Es un tramite a para visar un anteproyecto de construccion de estacion de servicio o surtidor",
    },
    "QUE ES LA APROBACION DEL PLANO DE ESTACION DE SERVICIO Y SURTIDORES": {content:" Es un tramite realizado para aprobar un proyecto de construccion de estacion de servicio o surtidor",
    }, 
    "QUE ES LA AUTORIZACION EVENTUAL PARA USO DE ESPACIOS PUBLICOS PARA ACTIVIDADES CIVICAS, RELIGIOSAS, TRADICIONALES, CULTURALES Y OTROS": {content:" Es un tramite para solicitar autorizacion eventual cuando una persona natural, institucion, agrupacion, organizacion o empresa, requiera utilizar en forma temporal algun espacio publico municipal para actividades con fines o sin fines de lucro: instalacion de circos, parques de diversiones o la realizacion de kermeses, ferias u otras actividades similares ",
    },
    "QUE ES LA VISACION TECNICA Y LEGAL DE MINUTAS": {content:" es cuando se desea obtener el visado de una minuta",
    },
    "QUE ES SELLO SECO EN TESTIMONIOS Y/O MINUTAS CON RECONOCIMIENTO DE FIRMAS PARA SU REGISTRO EN DERECHOS REALES": {content:" es cuando se desea obtener sello seco en testimonios protocolizados y/o en minutas con reconocimiento de firmas para su registro en Derechos Reales. ",
    },
    "QUE ES LA ATENCION DE DENUNCIAS SOBRE PROBLEMAS TECNICOS Y LEGALES DE CONSTRUCCION": {content:" es cuando se desee realizar una denuncia para la solucion de problemas tecnicos y legales de construccion.",
    },
    "QUE ES EL AVALUO DE INMUEBLE CON ORDEN JUDICIAL Y/O A PETICION DE PARTE": {content:" Es un tramite a realizarse por Orden Judicial y/o Peticion de Parte para atribuir el valor de un predio dentro de la jurisdiccion del Gobierno Autonomo Municipal de Cochabamba con referencia a las tablas de valoracion de superficie construida, antiguedad, categoria y zona homogenea de valor de terreno y edificaciones definidos y actualizados por el Gobierno Autonomo Municipal de Cochabamba.",
    },
    "QUE ES LA NUMERACION DOMICILIARIA": {content:" Es un tramite a realizarse cuando desee obtener el numero de domicilio para identificacion fisica de su inmueble.",
    }, 
    "QUE ES LA LEGALIZACION DE COPIA DE DOCUMENTOS DE DERECHO PROPIETARIO (TESTIMONIO, Y OTROS), RESOLUCIONES, INFORMES, PLANOS APROBADOS, IMPUESTOS Y OTROS PARA USO EXCLUSIVO DEL Gobierno Autonomo Municipal de Cochabamba":{
        content:"Es un tramite a realizar para obtener documentos legalizados para uso exclusivo en el Gobierno Autonomo Municipal de Cochabamba"
    }, 
    //COMO HAGO
    "COMO HAGO EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content:" Es un tramite a realizar cuando se requiere urbanizar un terreno de una propiedad con superficie a 1300 metros cuadrados, con caracter previo al diseno de los planos definitivos del proyecto de urbanizacion, debe solicitar al Gobierno Autonomo Municipal de Cochabamba. la visacion de los planos del anteproyecto.",
    }, 
    "COMO HAGO LA AUTORIZACION DE TRABAJOS MENORES": {content:" Es un tramite para la ejecucion de obras de pequena magnitud, excavaciones en via publica, construccion de muro perimetral, apertura de puertas y ventanas, cambio total de cubiertas, acopio de material y escombros, bardas temporales en la vereda, arreglo de fachada o trabajos externos con uso de la acera, demolicion de bloque o de unidad.",
    }, 
    "COMO HAGO VISADO DE ANTEPROYECTO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS": {content:" Es un tramite a realizar cuando se requiere la aprobacion del plano arquitectonico de anteproyecto de equipamientos publico y privados.",
    },  
    "COMO HAGO LA APROBACION DE PLANO DE EQUIPAMIENTOS PUBLICOS Y PRIVADOS": {content:" Es un tramite a realizar cuando se requiere la aprobacion del plano arquitectonico de anteproyecto de equipamientos publicos y privado",
    },
    "COMO HAGO EL VISADO DE PLANO DE ANTEPROYECTO DE ESTACION DE SERVICIO Y SURTIDORES": {content:" Es un tramite a para visar un anteproyecto de construccion de estacion de servicio o surtidor",
    },
    "COMO HAGO LA APROBACION DEL PLANO DE ESTACION DE SERVICIO Y SURTIDORES": {content:" Es un tramite realizado para aprobar un proyecto de construccion de estacion de servicio o surtidor",
    }, 
    "COMO HAGO LA AUTORIZACION EVENTUAL PARA USO DE ESPACIOS PUBLICOS PARA ACTIVIDADES CIVICAS, RELIGIOSAS, TRADICIONALES, CULTURALES Y OTROS": {content:" Es un tramite para solicitar autorizacion eventual cuando una persona natural, institucion, agrupacion, organizacion o empresa, requiera utilizar en forma temporal algun espacio publico municipal para actividades con fines o sin fines de lucro: instalacion de circos, parques de diversiones o la realizacion de kermeses, ferias u otras actividades similares ",
    },
    "COMO HAGO LA VISACION TECNICA Y LEGAL DE MINUTAS": {content:" es cuando se desea obtener el visado de una minuta",
    },
    "COMO HAGO SELLO SECO EN TESTIMONIOS Y/O MINUTAS CON RECONOCIMIENTO DE FIRMAS PARA SU REGISTRO EN DERECHOS REALES": {content:" es cuando se desea obtener sello seco en testimonios protocolizados y/o en minutas con reconocimiento de firmas para su registro en Derechos Reales. ",
    },
    "COMO HAGO LA ATENCION DE DENUNCIAS SOBRE PROBLEMAS TECNICOS Y LEGALES DE CONSTRUCCION": {content:" es cuando se desee realizar una denuncia para la solucion de problemas tecnicos y legales de construccion.",
    },
    "COMO HAGO EL AVALUO DE INMUEBLE CON ORDEN JUDICIAL Y/O A PETICION DE PARTE": {content:" Es un tramite a realizarse por Orden Judicial y/o Peticion de Parte para atribuir el valor de un predio dentro de la jurisdiccion del Gobierno Autonomo Municipal de Cochabamba con referencia a las tablas de valoracion de superficie construida, antiguedad, categoria y zona homogenea de valor de terreno y edificaciones definidos y actualizados por el Gobierno Autonomo Municipal de Cochabamba.",
    },
    "COMO HAGO LA NUMERACION DOMICILIARIA": {content:" Es un tramite a realizarse cuando desee obtener el numero de domicilio para identificacion fisica de su inmueble.",
    }, 
    "COMO HAGO LA LEGALIZACION DE COPIA DE DOCUMENTOS DE DERECHO PROPIETARIO (TESTIMONIO, Y OTROS), RESOLUCIONES, INFORMES, PLANOS APROBADOS, IMPUESTOS Y OTROS PARA USO EXCLUSIVO DEL Gobierno Autonomo Municipal de Cochabamba":{
        content:"Es un tramite a realizar para obtener documentos legalizados para uso exclusivo en el Gobierno Autonomo Municipal de Cochabamba"
    }, 
    "CUAL ES LA UNIDAD RESPONSABLE DE LA EJECUCION DEL TRAMITE": {
        content: "Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia y Direccion de Urbanismo y Servicios Municipales.",
    },
    "DONDE SE REALIZA EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content:"Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content:"Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE DE VISADO DE ANTEPROYECTO DE URBANIZACION": {
        content: "Los requisitos para el tramite de visado de anteproyecto de urbanizacion son los siguientes: 1.    Derecho de admision 111 (DA 111) 2.    Memorial dirigido al Sub Alcalde solicitando el tramite requerido con la firma del o los propietarios, copropietarios o apoderado.3.    Titulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real). 4.    Impuestos al dia Proforma del sistema RUAT que evidencie el no adeudo tributario. 5.    Plano de levantamiento topografico geo referenciado firmado y sellado por un Topografo o profesional acreditado. 6.    Plano de Anteproyecto, tres ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto. 7.    Fotocopia del carnet de identidad vigente del o los propietarios. 10.  Inspeccion.",
    },
    "CUALES SON LOS COSTOS DE LOS REQUISITOS DEL VISADO ANTEPROYECTO DE URBANIZACION": {
        content: "Los costos son los siguientes: 1.    Para el derecho de admision 111 (DA 111) del tramite el costo es de 27 bolivianos. 2.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 3.    Para la tasa de visacion de anteproyecto el costo es de 0.05 bolivianos por metros cuadrados por terreno plano metro cuadrado 4.    Para el terreno con pendiente metro cuadrado el costo es de 0.08 bolivianos por metros cuadrados 5.    Para la inspeccion el costo es de 20 bolivianos.",
    },
    //problema
    "CUANTO DURA EL TRAMITE": {
        content: "El tramite llega a durar aproximadamente 90 dias calendario despues de cumplirse todos los requisitos y no encontrar observaciones.",
    },
    //Vehiculos
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION DE VEHICULO AUTOMOTOR TERRESTRE CON FACTURA":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, certificado unico de datos tecnicos de automotor, poliza de importacion, factura comercial (original y fotocopia), y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION DE VEHICULO AUTOMOTOR TERRESTRE CON FACTURA Y TRANSFERENCIA ":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, poliza de importacion, factura comercial (original y fotocopia), documento de compra y venta (original y fotocopia), fotocopia vigente del vendedor y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION IMPORTACION DIRECTA DEL VEHICULO AUTOMOTOR TERRESTRE":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, poliza de importacion, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION IMPORTACION DIRECTA DEL VEHICULO AUTOMOTOR TERRESTRE CON TRANSFERENCIA":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, poliza de importacion, Documento compra y venta (original y fotocopia), Fotocopia de documento de identidad del vendedor y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA TRANSFERENCIA DEL VEHICULO AUTOMOTOR TERRESTRE":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehiculo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    
    "CUALES SON LOS REQUISITOS DE LA TRANSFERENCIA DEL VEHICULO AUTOMOTOR TERRESTRE CON CAMBIO DE RADICATORIA":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehiculo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DEL CAMBIO DE RADICATORIA DEL VEHICULO AUTOMOTOR TERRESTRE.":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, registro a la propiedad del vehiculo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA EL CAMBIO DE SERVICIO DEL VEHICULO AUTOMOTOR TERRESTRE CASO 1  PARTICULAR A PUBLICO.":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, registro a la propiedad del vehiculo automotor terrestre (original y fotocopia), Certificado de transporte del servicio publico, fotocopia de licencia o equivalente, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA EL CAMBIO DE RADICATORIA DEL VEHICULO AUTOMOTOR TERRESTRE POSEEDOR.":{ content:"Los requisitos son  DECLARACION JURADA VIRTUAL  Cambio de Radicatoria Poseedor  registro a la propiedad del vehiculo automotor terrestre (original y fotocopia),fotocopia de cedula de identidad del poseedor, fotocopia del documento que acredite su condicion de poseedor de buena fe (opcional). ",
    },
    "CUALES SON LOS REQUISITOS PARA EL CAMBIO DE SERVICIO DEL VEHICULO AUTOMOTOR TERRESTRE CASO 1  PARTICULAR A PUBLICO.":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, registro a la propiedad del vehiculo automotor terrestre (original y fotocopia), informe tecnico emitido por la policia boliviana, informe de datos tecnicos emitido por el Gobierno Autonomo Municipal de Cochabamba, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 1: EXTRAVIO DEL CERTIFICADO DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE (Certificado de Registro de Propiedad del Vehiculo Automotor).":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Original (Para Verificacion) y Fotocopia de la Factura de Publicacion en un medio de prensa escrita de circulacion nacional, comunicando el extravio del Certificado de Registro de Propiedad del Vehiculo Automotor por tres (3) dias continuos, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 2: ROBO DEL CERTIFICADO DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE (Certificado de Registro de Propiedad del Vehiculo Automotor).":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Original y Fotocopia de la Certificacion de Denuncia por Robo/Hurto del Certificado de Registro de Propiedad del Vehiculo Automotor (Policia Boliviana - FELCC), Original (Para Verificacion) y Fotocopia de la Factura de Publicacion en un medio de prensa escrita de circulacion nacional, comunicando el extravio del Certificado de Registro de Propiedad del Vehiculo Automotor por tres (3) dias continuos, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 3: DETERIORO DEL CERTIFICADO DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE (Certificado de Registro de Propiedad del Vehiculo Automotor).":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, original del certificado de registro a la propiedad del vehiculo automotor terrestre deteriorado y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 4: DETERIORO DE PLACAS METALICAS / PLAQUETAS.":{ content:"Los requisitos son Original y fotocopia del certificado de registro a la propiedad del vehiculo automotor terrestre, devolucion al Gobierno Autonomo Municipal de Cochabamba de las placas metalicas deterioradas, certificado emitido por la unidad correspondiente de la policia boliviana y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 4: DETERIORO DE PLACAS METALICAS / PLAQUETAS.":{ content:"Los requisitos son Original y fotocopia del certificado de registro a la propiedad del vehiculo automotor terrestre, devolucion al Gobierno Autonomo Municipal de Cochabamba de las placas metalicas deterioradas, certificado emitido por la unidad correspondiente de la policia boliviana y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA LA REGULARIZACION DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE.":{ content:"Los requisitos son Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Derecho de admision 102 (DA  102)  transferencia especial, Original y fotocopia del certificado de registro a la propiedad del vehiculo automotor terrestre, testimonio que acredite el motivo de transferencia, Fotocopia de la factura, y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA EL REEMPLAQUE VEHICULO AUTOMOTOR.":{ content:"Los requisitos son Los requisitos son Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Original y Fotocopia de la Comunicacion al Poseedor (COPO) Documento a Recabarse en Aduana Nacional o Poliza Titularizada del Automotor (PTA), de no Contar Con El Original Presentar La Certificacion de la Denuncia Registrada en la FELCC, Original y Fotocopia del Carnet de Propiedad (Anterior), de no contar con el documento original debera presentar la Certificacion de la Denuncia Registrada en la FELCC, Declaracion Jurada de No Emplacado (a Obtener en Recaudaciones), Original y Fotocopia de Informe De Datos Tecnicos  Relevamiento de las Caracteristicas del Vehiculo emitido por la Seccion correspondiente del Gobierno Autonomo Municipal de Cochabamba (formulario RUA 08), de Corresponder. y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA BAJA TRIBUTARIA POR ROBO.":{ content:"Los requisitos son, Original de la certificacion de denuncia de robo emitida por la policia boliviana, original del certificado de propiedad de vehiculo automotor original y copia de cedula de identidad del titular, impuestos al dia, derecho de admision 101 (DA  101), folder municipal, timbre para la emision de la certificacion y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA BAJA TRIBUTARIA POR FIN DE VIDA UTIL.":{ content:"Los requisitos son, Original y Copia Legalizada del Documento que Evidencie la condicion de Obsoleto o Fin de Vida Util Emitido por el Gobierno Autonomo Municipal de Cochabamba Devolucion del Certificado de Propiedad del Vehiculo Automotor Terrestre (Certificado de Registro de Propiedad del Vehiculo Automotor), Devolucion de Placas y Plaquetas, No debe ser Otra Radicatoria, Tampoco debe registrar gravamenes y los impuestos al Dia para proceder a la Baja, Original y Copia de la Cedula de Identidad del Sujeto Pasivo, Derecho de Admision 101 (DA  101) Baja de Vehiculo  a ser Depositado en la cuenta Por 37 Bolivianos. En Caso de ser Apoderado Ademas debe adjuntar lo siguiente Original (Para Verificacion) y Fotocopia de Poder de representacion Legal, Fotocopia de Documento de Identidad del Apoderado.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene el plan visado de anteproyecto de urbanizacion",
    },
    "ACLARACIONES PARA EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content: "las aclaraciones son las siguientes: 1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto. 2.    En ningun caso el interesado debe cancelar otros montos economicos.3.    La vigencia de la documentacion presentada en copia legalizada debera ser maximo de un ano a partir de la fecha de legalizacion. 4.    En caso que requiera opinion tecnica adicional, el tramite podra derivarse a la Direccion de Urbanismo y Servicios Municipales. 5.    El visado de planos del Anteproyecto tendra vigencia de seis meses a partir de su emision. 6.    El visado de planos del Anteproyecto se constituye como requisito para la obtencion de Licencia Ambiental ante la Gobernacion. 7.    Cuando el proyecto se encuentre en un area con planos sectoriales actuales y no modifique la estructura vial y el uso de suelo, no es necesario solicitar visado del anteproyecto. 8.    Cuando el anteproyecto comprenda mas de una propiedad, se debe presentar los diferentes titulos de propiedad.",
    },
    "QUE ES EL TRAMITE DE APROBACION DEL PLANO DE URBANIZACION": {
        content: "Es un tramite a realizar cuando se requiere aprobar un proyecto de terreno mayor a 1300 metros cuadrados que ha cumplido con el visado de anteproyecto de acuerdo a normativas usadas",
    },
    "COMO HAGO EL TRAMITE DE APROBACION DEL PLANO DE URBANIZACION": {
        content: "Es un tramite a realizar cuando se requiere aprobar un proyecto de terreno mayor a 1300 metros cuadrados que ha cumplido con el visado de anteproyecto de acuerdo a normativas usadas",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE APROBACION DEL PLANO DE URBANIZACION ": {
        content: "Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "DONDE SE REALIZA EL TRAMITE APROBACION DEL PLANO DE URBANIZACION": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE APROBACION DEL PLANO DE URBANIZACION": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS REQUISITOS DE LA APROBACION DEL PLANO DE URBANIZACION": {
        content: "Los requisitos son los siguientes: REQUISITOS: 1.    Derecho de admision 111 (DA 111). 2.    Folder municipal 3.    Memorial dirigido al Sub Alcalde solicitando el tramite requerido con la firma del o los propietarios, copropietarios o apoderado.4.    Titulo de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real). 5.    Impuestos al dia Proforma del sistema RUAT que evidencie el no adeudo tributario. 6.    Plano del proyecto de urbanizacion, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto. 7.    Plano de anteproyecto visado por la Sub Alcaldia, fotocopia legalizada.8.    Licencia ambiental. 9.    Fotocopia del carnet de identidad vigente del o los propietarios. 10.  Plano de instalaciones sanitarias visado por SEMAPA y/o certificacion de la institucion proveedora del servicio. 11.  Planos de instalaciones electricas visados por ELFEC.",
    },
    "CUALES SON LOS COSTOS DE LA APROBACION DEL PLANO DE URBANIZACION": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision (DA 111) del tramite el costo es de 27 bolivianos. 2.    Para el folder municipal 5 bolivianos. 3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4.    Por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 5.    Para la tasa de aprobacion de la urbanizacion el costo es de 0.20 bolivianos por metro cuadrado. 6.    Para la tasa de fijacion de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 boliviano por metro lineal. 7.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene proyecto de urbanizacion aprobado con resolucion emitida por la Sub alcaldia.",
    },
    "ACLARACIONES PARA EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content: "las aclaraciones son las siguientes:1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto.2.    En ningun caso el interesado debe cancelar otros montos economicos.3.    No es requisito la presentacion de planos de infraestructura, ni licencia ambiental cuando la urbanizacion es igual o menor a nueve lotes.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DONDE PUEDE ACLARAR DUDAS, PRESENTAR QUEJAS Y/O SUGERENCIAS": {
        content: "Unidad de urbanismo y tramites administrativos de la sub alcaldia.",
    },

    "QUE ES EL TRAMITE DE APROBACION DEL PLANO DE REGULARIZACION DE LOTE": {
        content: "Tramite a realizar cuando se requiere regularizar un lote de terreno ubicado en area urbanizable hasta 1300 metros cuadrados que no cuenta con plano aprobado o que contando con ello, existe diferencia entre la superficie y dimensiones del plano aprobado.",
    },
    "COMO HAGO EL TRAMITE DE APROBACION DEL PLANO DE REGULARIZACION DE LOTE": {
        content: "Tramite a realizar cuando se requiere regularizar un lote de terreno ubicado en area urbanizable hasta 1300 metros cuadrados que no cuenta con plano aprobado o que contando con ello, existe diferencia entre la superficie y dimensiones del plano aprobado.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE APROBACION DEL PLANO DE REGULARIZACION DE LOTE": {
        content: "Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "DONDE SE REALIZA EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS REQUISITOS DE LA APROBACION DEL PLANO DE REGULARIZACION DE LOTE": {
        content: "Los requisitos son los siguientes: REQUISITOS: 1.    Valorados municipales, Derecho de admision 111 (DA 111) . 2.    Folder municipal 3.    Memorial dirigido al Sub Alcalde solicitando el tramite requerido con la firma del o los propietarios, copropietarios o apoderado. 4.    titulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real). 5.    Impuestos al dia Proforma del sistema RUAT que evidencie el no adeudo tributario. 6.    Plano de regularizacion de lote con numero de registro proporcionado por el Colegio Profesional correspondiente, firmado y sellado por el Arquitecto con registro profesional, cinco ejemplares en papel bond. 7.    Fotocopia del Carnet de identidad vigente del o los propietarios. 8.    Licencia ambiental. 9.    Fotocopia Carnet de identidad vigente del o los propietarios. 10.  Plano de Lote o Urbanizacion aprobado fotocopia legalizada y/o Registro Catastral y/o Plano de construccion (presentar en caso de existir para no pago de sesiones). 11.  Carimbo, manzano de la Planimetria, superficie de ARCO y Resolucion de aprobacion de ARCO (Solo para Distrito 9). 12.  Tradicion de la minuta, original o fotocopia legalizada (Solo para Distrito 9).13.  Declaratoria de herederos (en caso necesario) y/o Poder suficiente conferido por el o los propietarios del inmueble (Solo para Distrito 9).",
    },
    "CUALES SON LOS COSTOS DE LA APROBACION DEL PLANO DE REGULARIZACION DE LOTE": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision 111 (DA 111) del tramite el costo es de 27 bolivianos. 2.    Para el folder municipal 5 bolivianos. 3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4.    Para los planos del lote o urbanizacion aprobada por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 5.    Para la tradicion de la minuta por cada fotocopia un timbre el cual el costo es de 10 bolivianos 6.    Para la tasa por regularizacion de lote el costo es de 0.20 bolivianos por metro cuadrado. 7.    Para la tasa de fijacion de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 boliviano por metro lineal. 8.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene Plano de regularizacion de lote aprobado con resolucion emitida por la Sub Alcaldia.",
    },
    "ACLARACIONES PARA EL TRAMITE DE APROBACION DEL PLANO DE REGULARIZACION DE LOTE": {
        content: "las aclaraciones son las siguientes: 1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto. 2.    En ningun caso el interesado debe cancelar otros montos economicos. 3.    No corresponde el cobro de cesiones segun Ordenanza Municipal numero 3285/04, cuando la superficie afectada es mayor a la superficie de cesion obligatoria, cuando se presenta plano de construccion o lote aprobado anteriormente o registro catastral. 4.    Se podra realizar el tramite de regularizacion, anexion y subdivision indistintamente cumpliendo los requisitos exigidos para cada caso.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DONDE PUEDE ACLARAR DUDAS, PRESENTAR QUEJAS Y/O SUGERENCIAS": {
        content: "Unidad de urbanismo y tramites administrativos de la sub alcaldia.",
    },
    "QUE ES EL TRAMITE DE APROBACION DEL PLANO DE ANEXION DE LOTE": {
        content: "Es un Tramite realizado para anexar lotes contiguos.",
    },
    "COMO HAGOEL TRAMITE DE APROBACION DEL PLANO DE ANEXION DE LOTE": {
        content: "Es un Tramite realizado para anexar lotes contiguos.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE APROBACION DEL PLANO DE ANEXION DE LOTE": {
        content: "Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "DONDE SE REALIZA EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS REQUISITOS DE LA APROBACION DEL PLANO DE ANEXION DE LOTE": {
        content: "Los requisitos son los siguientes: REQUISITOS: 1.    Derecho de admision 111 (DA 111) . 2.    Folder municipal 3.    Memorial dirigido al Sub Alcalde solicitando el tramite requerido con la firma del o los propietarios, copropietarios o apoderado. 4.    Titulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real). 5.    Impuestos al dia Proforma del sistema RUAT que evidencie el no adeudo tributario. 6.    Plano del proyecto de anexion de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto. 7.    Fotocopia del Carnet de identidad vigente del o los propietarios. 8.    Registro Catastral o Certificacion de Registro Catastral. 9.    Plano de lotes aprobados, fotocopia legalizada.",
    },
    "CUALES SON LOS COSTOS DE LA APROBACION DEL PLANO DE ANEXION DE LOTE": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision 111 (DA 111) del tramite el costo es de 27 bolivianos. 2.    Para el folder municipal 5 bolivianos. 3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.5.    Para la tasa por anexion de lote el costo es de 0.25 bolivianos por metro cuadrado. 6.    Para la tasa de fijacion de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 bolivianos por metro lineal. 7.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.",
    },
    "CUALES SON LOS COSTOS DE LA APROBACION DEL PLANO DE SUBDIVISION DE LOTE": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision 111 (DA 111) del tramite el costo es de 27 bolivianos.2.    Para el folder municipal 5 bolivianos.3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.4.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.5.    Para la tasa por subdivision de lote el costo es de 0.20 bolivianos por metro cuadrado. 6.    Para la tasa de fijacion de rasante por metro lineal del sub distrito 1 al 16 el costo es de 1 boliviano por metro lineal.7.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.",
    },
    "DURACION DEL TRAMITE": {
        content: "El tramite llega a durar 20 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
     
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Plano de subdivision de lote aprobado mediante Resolucion emitida por la Sub Alcaldia.",
    },
    "ACLARACIONES PARA EL TRAMITE DE APROBACION DEL PLANO DE ANEXION DE LOTE": {
        content: "las aclaraciones son las siguientes:4.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto. 5.    En ningun caso el interesado debe cancelar otros montos economicos. 6.    Se podra realizar el tramite de regularizacion, anexion y subdivision indistintamente cumpliendo los requisitos exigidos para cada caso.",
    },
    "QUE ES EL TRAMITE CERTIFICACION DE PLANO DE LOTE": {
        content: "Es un Tramite a realizar cuando se tiene un plano de urbanizacion, subdivision, anexion o regularizacion aprobado y se requiere una certificacion de plano individual a nombre del actual propietario.",
    },
    "COMO HAGO EL TRAMITE CERTIFICACION DE PLANO DE LOTE": {
        content: "Es un Tramite a realizar cuando se tiene un plano de urbanizacion, subdivision, anexion o regularizacion aprobado y se requiere una certificacion de plano individual a nombre del actual propietario.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE CERTIFICACION DE LOTE": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "DONDE SE REALIZA EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS REQUISITOS DE LA CERTIFICACION DE PLANO DE LOTE": {
        content: "Los requisitos son los siguientes: REQUISITOS: 1.    Derecho de admision 06 (DA 06) de tramite. 2.    Folder municipal 3.    Solicitud verbal o nota simple. 4.    titulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real). 5.    Impuestos al dia Proforma del sistema RUAT que evidencie el no adeudo tributario. 6.    Plano del proyecto de certificacion de lote, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto. 7.    Plano de lotes aprobado, fotocopia legalizada 8.    Certificacion.",
    },
    "CUALES SON LOS COSTOS DE LA CERTIFICACION DE PLANO DE LOTE": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision 06 (DA 06)del tramite el costo es de 27 bolivianos. 2.    Para el folder municipal 5 bolivianos. 3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4.    Para los planos de lote aprobados por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 5.    Para la certificacion 30 bolivianos.",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 5 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene el Plano de lote certificado a nombre del actual propietario.",
    }, 
    "QUE ES EL TRAMITE CERTIFICACION DE RESOLUCIONES COMPLEMENTARIAS": {
        content: "Es un Tramite a realizar cuando se tiene algun dato que esta errado dentro la Resolucion Administrativa Municipal, y debe modificarse, en ese caso se emite una Resolucion Complementaria.",
    },
    "COMO HAGO EL TRAMITE CERTIFICACION DE RESOLUCIONES COMPLEMENTARIAS": {
        content: "Es un Tramite a realizar cuando se tiene algun dato que esta errado dentro la Resolucion Administrativa Municipal, y debe modificarse, en ese caso se emite una Resolucion Complementaria.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE CERTIFICACION DE RESOLUCIONES COMPLEMENTARIAS": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "DONDE SE REALIZA EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "DONDE HAGO EL TRAMITE": {
        content: "Se puede realizar en la Sub Alcaldia a la que corresponde el predio.",
    },
    "CUALES SON LOS REQUISITOS DE LAS RESOLUCIONES COMPLEMENTARIAS": {
        content: "Los requisitos son los siguientes: REQUISITOS:1.    Derecho de admision 07 (DA 07). 2.    Folder municipal 3.    Memorial dirigido al sub alcalde solicitando Resolucion complementaria.  4.    titulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real).5.    Impuestos pagados de las ultimas 5 gestiones, fotocopia simple del comprobante de pago de impuestos o proforma del sistema RUAT que evidencie el no adeudo tributario. 6.    Resolucion municipal, Fotocopia legalizada. 7.    Fotocopia del carnet de identidad del o los propietarios. 8.    Inspeccion (de ser necesario).9.    Certificacion.10.  Certificacion (segun Ordenanza Municipal Numero 2636, valido solo para el Distrito 9).",
    },
    "CUALES SON LOS COSTOS DE LAS RESOLUCIONES COMPLEMENTARIAS": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision 07 (DA 07) del tramite el costo es de 27 bolivianos. 2.    Para el folder municipal 5 bolivianos. 3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4.    Para los planos de lote aprobados por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 5.    Para la inspeccion 20 bolivianos. 6.    Para la certificacion 30 bolivianos. 7.    Para la Certificacion (segun Ordenanza Municipal Numero 2636, valido solo para el Distrito 9).",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 10 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
     
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene la certificacion de datos tecnicos de funcion al requerimiento.",
    },
    "ACLARACIONES PARA EL TRAMITE DE RESOLUCIONES COMPLEMENTARIAS": {
        content: "las aclaraciones son las siguientes: 1.    El seguimiento del tramite tambien puede ser realizado por una tercera persona, siempre y cuando esta se identifique con su Cedula de Identidad. 2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite. 3.    En caso de requerir certificacion de perfil de via, no se requiere presentar Plano de Lote aprobado, Titulo de Propiedad, ni comprobantes de pago de impuestos.",
    },
    "QUE ES EL TRAMITE DE CERTIFICACIONES VARIOS": {
        content: "Es un Tramite a realizar cuando se desee obtener una certificacion de datos tecnicos, legales y/o administrativos en aplicacion de la Normativa Urbana",
    },
    "COMO HAGO EL TRAMITE DE CERTIFICACIONES VARIOS": {
        content: "Es un Tramite a realizar cuando se desee obtener una certificacion de datos tecnicos, legales y/o administrativos en aplicacion de la Normativa Urbana",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE CERTIFICACIONES VARIOS": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE CERTIFICACIONES VARIOS": {
        content: "Los requisitos son los siguientes: REQUISITOS: 1.   Derecho de admision 07 (DA 07) de tramite 2.    Folder municipal 3.    Memorial dirigido al sub alcalde solicitando la certificacion.4.    titulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real). 5.    Proforma del sistema RUAT que evidencie el no adeudo tributario. 6.    Plano de lote aprobado, fotocopia legalizada. 7.    Fotocopia del Carnet de identidad del solicitante. 8.    Inspeccion (de ser necesario). 9.    Certificacion. 10.  Certificacion (segun Ordenanza Municipal Numero 2636, valido solo para el Distrito 9).",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE CERTIFICACIONES VARIOS": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision 07 (DA 07) del tramite el costo es de 25 bolivianos. 2.    Para el folder municipal 5 bolivianos. 3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4.    Para los planos de lote aprobados por cada fotocopia un timbre el cual el costo es de 10 bolivianos.5.    Para la inspeccion 20 bolivianos. 6.    Para la certificacion 30 bolivianos. 7.    Certificacion (segun Ordenanza Municipal Numero 2636, valido solo para el Distrito 9).",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 15 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene la certificacion en funcion al requerimiento.",
    },
    "ACLARACIONES PARA EL TRAMITE DE CERTIFICACIONES VARIOS": {
        content: "las aclaraciones son las siguientes: 1.    El seguimiento del tramite tambien puede ser realizado por una tercera persona, siempre y cuando esta se identifique con su Cedula de Identidad. 2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.",
    }, 
    "QUE ES EL TRAMITE DE CERTIFICACION DE USO DE SUELO": {
        content: "Es un Tramite a realizar cuando se desee obtener una certificacion de cualidades fisicas urbanas de un territorio o sitio urbano definido para un determinado uso.",
    },
    "COMO HAGO EL TRAMITE DE CERTIFICACION DE USO DE SUELO": {
        content: "Es un Tramite a realizar cuando se desee obtener una certificacion de cualidades fisicas urbanas de un territorio o sitio urbano definido para un determinado uso.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE CERTIFICACION DE USO DE SUELO": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE CERTIFICACION DE USO DE SUELO": {
        content: "Los requisitos son los siguientes: REQUISITOS: 1.    Derecho de admision 09 (DA 09) . 2.    Folder municipal 3.    Memorial dirigido al sub alcalde solicitando el tramite. 4.    titulos de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real). 5.    Impuesto al dia Proforma del sistema RUAT que evidencie el no adeudo tributario. 6.    Plano de lote aprobado, fotocopia legalizada.7.    Plano de Lote geo referenciado preferentemente por el Instituto Geografico Militar (solo en caso de area Rural). 8.    Fotocopia Carnet de identidad vigente del o los propietarios.9.    Certificacion. 10.  Certificacion (segun Ordenanza Municipal Numero 2636, valido solo para el Distrito 9).11.  Inspeccion",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE CERTIFICACION DE USO DE SUELO": {
        content: "Los costos son los siguientes: COSTOS: 1.    Para el derecho de admision 09 (DA 09) del tramite el costo es de 25 bolivianos. 2.    Para el folder municipal 5 bolivianos. 3.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 4.    Para los planos de lote aprobados por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 5.    Para la certificacion 30 bolivianos. 6.    Certificacion (segun Ordenanza Municipal Numero 2636, valido solo para el Distrito 9). 7.    Para la inspeccion 20 bolivianos.",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 15 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene la certificacion de uso de suelo.",
    },
    "ACLARACIONES PARA EL TRAMITE DE CERTIFICACION DE USO DE SUELO": {
        content: "las aclaraciones son las siguientes: 1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto. 2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.",
    },
    "QUE ES EL TRAMITE DE FIJACION DE LINEA A NIVEL": {
        content: "Es un Tramite a realizar cuando se requiere establecer la linea y nivel para la construccion del cordon y acera de un predio que tenga o no plano aprobado.",
    },
    "COMO HAGO EL TRAMITE DE FIJACION DE LINEA A NIVEL": {
        content: "Es un Tramite a realizar cuando se requiere establecer la linea y nivel para la construccion del cordon y acera de un predio que tenga o no plano aprobado.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE FIJACION DE LINEA A NIVEL": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE FIJACION DE LINEA A NIVEL": {
        content: "Los requisitos son los siguientes: REQUISITOS: 1.    Memorial dirigido al Sub Alcalde solicitando el tramite requerido con la firma del o los propietarios, copropietarios o apoderado. 2.    Impuestos al dia (Proforma del sistema RUAT que evidencie el no adeudo tributario). 3.    Plano de Lote Aprobado, fotocopia legalizada (si tiene). 4.    Titulo de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real) (Si tiene). 5.    Fotocopia del Carnet de identidad vigente del o los propietarios. 6.    Derecho de admision 10 (DA 10) del tramite. 7.    Folder municipal. 8.  Inspeccion topografica.",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE FIJACION DE LINEA A NIVEL": {
        content: "Los costos son los siguientes: COSTOS: 1.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos. 2.    Para los planos de lote aprobados por cada fotocopia un timbre el cual el costo es de 10 bolivianos. 3.    Para el derecho de admision 10 (DA 10) del tramite el costo es de 28 bolivianos. 4.    Para el folder municipal 5 bolivianos. 5.    Para las Tasas de fijacion de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 boliviano por metro lineal. 6.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal. 7.    Para la inspeccion topografica el costo es de 20 bolivianos",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 15 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene el Informe Topografico de Linea y Nivel.",
    },
    "ACLARACIONES PARA EL TRAMITE FIJACION DE LINEA A NIVEL": {
        content: "las aclaraciones son las siguientes: El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto. En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.",
    },
    "QUE ES EL TRAMITE DE FIJACION DE RASANTE, VERIFICACION DE MEDIDAS Y SUPERFICIE DE LOTE": {
        content: "Es un Tramite a realizar cuando:· No se cuenta con plano aprobado y se requiere establecer la rasante municipal y se desconoce la ubicacion de las estacas respecto a la via o vias colindantes; o que teniendo plano aprobado se ha modificado la rasante.·         Se requiere verificar una superficie de lote con o sin plano aprobado para conocer con exactitud su superficie, dimensiones de sus limites y posibles afectaciones en relacion con la via o vias colindantes.",
    },
    "COMO HAGO EL TRAMITE DE FIJACION DE RASANTE, VERIFICACION DE MEDIDAS Y SUPERFICIE DE LOTE": {
        content: "Es un Tramite a realizar cuando:· No se cuenta con plano aprobado y se requiere establecer la rasante municipal y se desconoce la ubicacion de las estacas respecto a la via o vias colindantes; o que teniendo plano aprobado se ha modificado la rasante.·         Se requiere verificar una superficie de lote con o sin plano aprobado para conocer con exactitud su superficie, dimensiones de sus limites y posibles afectaciones en relacion con la via o vias colindantes.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE FIJACION DE RASANTE, VERIFICACION DE MEDIDAS Y SUPERFICIE DE LOTE": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DE FIJACION DE RASANTE, VERIFICACION DE MEDIDAS Y SUPERFICIE DE LOTE": {
        content: "Los requisitos son los siguientes: REQUISITOS:1.    Memorial dirigido al Sub Alcalde solicitando el tramite requerido con la firma del o los propietarios, copropietarios o apoderado.2.    Impuestos al dia (Proforma del sistema RUAT que evidencie el no adeudo tributario).3.    Plano de Lote Aprobado, fotocopia legalizada (si tiene).4.    Titulo de propiedad registrado en Derechos Reales a nombre del actual propietario, fotocopia legalizada por la Sub Alcaldia a la que corresponde el predio (En caso de estar matriculado, acompanar Folio Real).5.    Plano demostrativo de la ubicacion del lote en detalle (en caso de no contar con Plano de Lote aprobado).6.    Fotocopia del carnet de identidad vigente del o los propietarios.7.    Derecho de admision 11 (DA 11) de tramite.8.    Folder municipal.9.    Formulario tecnico Numero 012.10.  Certificacion.11.  Inspeccion.",
    },
    "CUALES SON LOS COSTOS DE FIJACION DE RASANTE, VERIFICACION DE MEDIDAS Y SUPERFICIE DE LOTE": {
        content: "Los costos son los siguientes: COSTOS:1.    Por cada testimonio un timbre el cual el costo es de 10 bolivianos.2.    Para los planos de lote aprobados por cada fotocopia, un timbre el cual el costo es de 10 bolivianos.3.    Para el derecho de admision 11 (DA 11) del tramite el costo es de 28 bolivianos.4.    Para el folder municipal 5 bolivianos.5.    Para el formulario tecnico N 012 el costo es de 12 bolivianos.6.    Para las Tasas de fijacion de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 boliviano por metro lineal.7.    Para los sub distritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal.8.    Para la tasa por verificacion de superficie en lote el costo es de 0.50 bolivianos por metro cuadrado.9.    Para la tasa por verificacion de superficie metro cuadrado en inmueble edificado el costo es de 0.80 bolivianos por metro cuadrado.10.  Para la certificacion el costo es de 30 bolivianos.11.  Para la inspeccion el costo es de 20 bolivianos.",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 20 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene lo siguiente:·         Formulario Tecnico N 012 llenado y firmado, en caso de fijacion de rasante.·         Informe Tecnico y Plano demostrativo, en caso de verificacion de medidas y superficies de lote.",
    },
    "ACLARACIONES PARA EL TRAMITE DE FIJACION DE RASANTE, VERIFICACION DE MEDIDAS Y SUPERFICIE DE LOTE": {
        content: "las aclaraciones son las siguientes: 1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto.2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.",
    },
    "QUE ES EL TRAMITE VISADO DE ANTEPROYECTO DE CONSTRUCCION DE EDIFICIO O VIVIENDA MULTIFAMILIAR": {
        content: "Es un Tramite a realizar cuando se tiene un predio ubicado en area urbana con plano de lote aprobado y se desea construir una edificacion mayor a tres plantas de uno o mas bloques.",
    },
    "COMO HAGO EL TRAMITE VISADO DE ANTEPROYECTO DE CONSTRUCCION DE EDIFICIO O VIVIENDA MULTIFAMILIAR": {
        content: "Es un Tramite a realizar cuando se tiene un predio ubicado en area urbana con plano de lote aprobado y se desea construir una edificacion mayor a tres plantas de uno o mas bloques.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE VISADO DE ANTEPROYECTO DE CONSTRUCCION DE EDIFICIO O VIVIENDAS MULTIFAMILIAR": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DE VISADO DE ANTEPROYECTO DE CONSTRUCCION DE EDIFICIO O VIVIENDA MULTIFAMILIAR": {
        content: "Los requisitos son los siguientes:REQUISITOS:1.    Visado del plano arquitectonico.2.    Derecho de admision 12 (DA 12 )del tramite.3.    Formulario de Solicitud de Tramite, firmado por el propietario segun Certificado o Registro Catastral y/o firmado por el apoderado segun Poder o Carta Notariada.4.    Certificado Catastral o Registro Catastral Computarizado a nombre del actual propietario emitido por la Direccion de Informacion Geografica y Catastro.5.    Planos arquitectonicos de Anteproyecto (tres ejemplares y en medio magnetico formato PDF), firmado y sellado por el Arquitecto con registro profesional correspondiente.6.    Plano de Lote aprobado, fotocopia legalizada.7.    Fotocopia del carnet de identidad vigente del o los propietarios.",
    },
    "CUALES SON LOS COSTOS DE VISADO DE ANTEPROYECTO DE CONSTRUCCION DE EDIFICIO O VIVIENDA MULTIFAMILIAR": {
        content: "Los costos son los siguientes:COSTOS:1.    Para el visado de plano arquitectonico el costo es de 30 bolivianos2.    El derecho de admision 12 (DA 12) de tramite tiene un costo de 5 bolivianos.3.    Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia.",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 20 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene el Plano de Anteproyecto de Construccion Visado por la Sub Alcaldia.",
    },
    "ACLARACIONES PARA EL TRAMITE DE VISADO DE ANTEPROYECTO DE CONSTRUCCION DE EDIFICIO O VIVIENDA MULTIFAMILIAR": {
        content: "las aclaraciones son las siguientes:1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto.2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.3.    En caso que requiera opinion tecnica adicional, el tramite podra derivarse a la DNUR (Direccion de Planeamiento).4.    El visado de plano del Anteproyecto tendra vigencia de seis meses a partir de su emision.5.    El visado de plano del Anteproyecto se constituye como requisito para la obtencion de Licencia Ambiental ante la Gobernacion.",
    },
    "QUE ES EL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE VIVIENDA UNIFAMILIAR O MULTIFAMILIAR": {
        content: "Es un Tramite a realizar para la aprobacion de un proyecto de construccion o edificacion de vivienda unifamiliar o mas unidades de vivienda en un lote hasta tres plantas.",
    },
    "COMO HAGO EL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE VIVIENDA UNIFAMILIAR O MULTIFAMILIAR": {
        content: "Es un Tramite a realizar para la aprobacion de un proyecto de construccion o edificacion de vivienda unifamiliar o mas unidades de vivienda en un lote hasta tres plantas.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE VIVIENDA UNIFAMILIAR O MULTIFAMILIAR": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DE APROBACION DEL PLANO DE CONSTRUCCION DE VIVIENDA UNIFAMILIAR O MULTIFAMILIAR": {
        content: "Los requisitos son los siguientes:REQUISITOS:1.    Derecho de admision 13 (DA 13) de tramite.2.    Folder Municipal.3.    Formulario de Solicitud de Tramite, firmado por el propietario segun Certificado o Registro Catastral y/o firmado por el apoderado segun Carta o Poder Notariado.4.    Plano de lote aprobado, fotocopia legalizada.5.    Plano del proyecto de construccion, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.6.    Fotocopia Carnet de identidad vigente del o los propietarios.7.    Certificado Catastral o Registro Catastral Computarizado a nombre del actual propietario emitido por la Direccion de Informacion Geografica y Catastro.",
    },
    "CUALES SON LOS COSTOS DE APROBACION DEL PLANO DE CONSTRUCCION DE VIVIENDA UNIFAMILIAR O MULTIFAMILIAR": {
        content: "Los costos son los siguientes:COSTOS:1.    El derecho de admision 13 (DA 13) de tramite tiene un costo de 36 bolivianos.2.    Para el folder municipal tiene un costo de 5 bolivianos3.    Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia.4.    Para la tasa de aprobacion residencial el costo es de 1.00 bolivianos por metro cuadrado.5.    Para la tasa de aprobacion no residencial (comercial) el costo es de 2.00 bolivianos por metro cuadrado.6.    Para las Tasas de fijacion de rasante por metro lineal: Sub Distritos 1 al 16 el costo es de 1 Boliviano por metro lineal.7.    Para subdistritos 17 al 32 el costo es de 1.5 bolivianos por metro lineal",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 20 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
     
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene el Plano de Anteproyecto de Construccion Visado por la Sub Alcaldia.",
    },
    "ACLARACIONES PARA EL TRAMITE DE APROBACION DEL PLANO DE CONSTRUCCION DE VIVIENDA UNIFAMILIAR O MULTIFAMILIAR": {
        content: "las aclaraciones son las siguientes:1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto.2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.3.    En caso que requiera opinion tecnica adicional, el tramite podra derivarse a la DNUR (Direccion de Planeamiento).4.    El visado de plano del Anteproyecto tendra vigencia de seis meses a partir de su emision.5.    El visado de plano del Anteproyecto se constituye como requisito para la obtencion de Licencia Ambiental ante la Gobernacion.",
    },
    "QUE ES EL TRAMITE APROBACION DEL PLANO DE REMODELACION Y AMPLIACION DE VIVIENDA": {
        content: "Es un Tramite a realizar cuando se tiene plano de construccion aprobado y se desea realizar modificaciones funcionales y/o de volumetria o se requiere realizar una ampliacion a la edificacion, siempre y cuando la altura total construida (incluyendo la ampliacion) sea hasta tres plantas.",
    },
    "COMO HAGO EL TRAMITE APROBACION DEL PLANO DE REMODELACION Y AMPLIACION DE VIVIENDA": {
        content: "Es un Tramite a realizar cuando se tiene plano de construccion aprobado y se desea realizar modificaciones funcionales y/o de volumetria o se requiere realizar una ampliacion a la edificacion, siempre y cuando la altura total construida (incluyendo la ampliacion) sea hasta tres plantas.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE APROBACION DEL PLANO DE REMODELACION DE AMPLIACION DE VIVIENDA": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE APROBACION DEL PLANO DE REMODELACION Y AMPLIACION DE VIVIENDA": {
        content: "Los requisitos son los siguientes:REQUISITOS:1.    Derecho de admision 14 (DA 14) de tramite.2.    Folder Municipal.3.    Fotocopia Carnet de identidad vigente del o los propietarios.4.    Formulario de Solicitud de Tramite, firmado por el propietario segun Certificado o Registro Catastral y/o firmado por el apoderado segun Poder o Carta Notariada.5.    Proforma del sistema RUAT que evidencie el no adeudo tributario.6.    Plano de lote aprobado, fotocopia legalizada.7.    Plano del proyecto de ampliacion o remodelacion, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.8.    Certificado Catastral o Registro Catastral Computarizado a nombre del actual propietario emitido por la Direccion de Informacion Geografica y Catastro.",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE APROBACION DEL PLANO DE REMODELACION Y AMPLIACION DE VIVIENDA": {
        content: "Los costos son los siguientes:COSTOS:1.    El derecho de admision 14 (DA 14) de tramite tiene un costo de 26 bolivianos.2.    Para el folder municipal tiene un costo de 5 bolivianos3.    Para los planos de lote aprobado un timbre de 10 bolivianos por cada fotocopia.4.    La tasa de aprobacion de remodelacion sin cambiar funcion tiene un costo de 0.25 bolivianos por metro cuadrado.5.    La tasa de aprobacion de remodelacion cambiando funcion tiene un costo de 0.50 bolivianos por metro cuadrado.6.    La tasa de aprobacion de ampliacion area residencial tiene un costo de 1.00 bolivianos por metro cuadrado.7.    La tasa de aprobacion de ampliacion area no residencial tiene un costo de 2.00 bolivianos por metro cuadrado.",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 20 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "ACLARACIONES PARA EL TRAMITE APROBACION DEL PLANO DE REMODELACION Y AMPLIACION DE VIVIENDA": {
        content: "las aclaraciones son las siguientes: 1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto.2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.3.    En caso de inicio de obras sin el respectivo plano aprobado y autorizacion de inicio de obra, se hara pasible a sanciones de acuerdo Reglamento de Sanciones por Contravenciones a Disposiciones Municipales.4.    La aprobacion de los planos de construccion y autorizacion de inicio de obra tendra una vigencia de un ano luego de ser otorgado. Transcurrido el plazo debera solicitar su revalidacion (costo de 35 bolivianos).5.    La Municipalidad, en cualquier momento, podra realizar inspecciones aleatorias (sin aviso) a la construccion.6.    Culminada la obra, el propietario debe comunicar la finalizacion en la Comuna / Sub Alcaldia correspondiente a su distrito.7.    Los danos que se ocasionen a los vecinos colindantes por la demolicion, excavaciones y durante todo el proceso de construccion, son de absoluta responsabilidad del ejecutor y/o propietario de la obra, debiendo en consecuencia subsanar los danos ocasionados. Si el dano persiste, la obra se paralizara en su ejecucion previa evaluacion e informe de la instancia municipal correspondiente.8.    Las ampliaciones y remodelaciones se sujetan a normativa en vigencia, vale decir, siempre y cuando respeten retiros o alturas.9.    En caso de no contar con Plano de Construccion aprobado, el interesado debera realizar el tramite de Regularizacion de Plano de Construccion.",
    },
    "QUE ES EL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE EDIFICIO": {
        content: "Es un Tramite a realizar para la aprobacion de un proyecto de construccion de una edificacion superior a tres plantas, cuando usted posee un predio ubicado en area urbana con plano de lote aprobado.",
    },
    "COMO HAGO EL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE EDIFICIO": {
        content: "Es un Tramite a realizar para la aprobacion de un proyecto de construccion de una edificacion superior a tres plantas, cuando usted posee un predio ubicado en area urbana con plano de lote aprobado.",
    },
    "EL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE EDIFICIO": {
        content: "Es un Tramite a realizar para la aprobacion de un proyecto de construccion de una edificacion superior a tres plantas, cuando usted posee un predio ubicado en area urbana con plano de lote aprobado.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE EDIFICIO": {
        content: "La Unidad de Urbanismo y Tramites Administrativos correspondiente a la Sub Alcaldia."
    },
    "CUALES SON LOS REQUISITOS DEL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE EDIFICIO": {
        content: "Los requisitos son los siguientes: REQUISITOS:1.    Formulario de Solicitud de Tramite, firmado por el propietario segun Certificado o Registro Catastral y/o firmado por el apoderado segun Poder o Carta Notariada.2.    Certificado Catastral o Registro Catastral Computarizado a nombre del actual propietario emitido por la Direccion de Informacion Geografica y Catastro.3.    Impuestos al dia (Proforma del sistema RUAT que evidencie el no adeudo tributario).4.    Fotocopia Carnet de identidad vigente del o los propietarios.5.    Licencia Ambiental o constancia de inicio de tramite debidamente acreditado por la secretaria Departamental de los Derechos de la Madre Tierra.6.    Planos Arquitectonicos de Anteproyecto visado por el Gobierno Autonomo Municipal de Cochabamba.7.    Plano del proyecto de construccion, cinco ejemplares en papel bond y 1 copia digital en formato CAD), firmado y sellado por el Arquitecto.8.    Planos del Proyecto Estructural, si sobrepasa los 3 pisos, tres ejemplares y en medio magnetico formato pdf, con numero de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. Tambien debe anexarse la Memoria de Calculo y el Estudio de Suelos.9.    Plano de Instalacion Hidrosanitaria, tres ejemplares y en medio magnetico formato pdf, con numero de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. Tambien debe anexarse la Memoria de Calculo.10.  Plano de Instalacion Electrica, tres ejemplares y en medio magnetico formato pdf, con numero de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el Ingeniero con registro profesional. Tambien debe anexarse la Memoria de Calculo.11.  Plano de Instalaciones Especiales cuando corresponda (Ejm: gas, aire acondicionado, ascensores, etc.), tres ejemplares y en medio magnetico formato pdf, con numero de registro del proyecto proporcionado por el Colegio Profesional correspondiente y firmado y sellado por el profesional con registro que lo acredite. Tambien debe anexarse la Memoria de Calculo.",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE EDIFICIO": {
        content: "Los costos son los siguientes:COSTOS:1.    El derecho de admision 15 (DA 15) de tramite tiene un costo de 26 bolivianos.2.    Para el folder municipal tiene un costo de 5 bolivianos3.    La tasa de aprobacion residencial tiene un costo de 1.00 bolivianos por metro cuadrado.4.    La tasa de aprobacion no residencial (comercial) tiene un costo de 2.00 bolivianos por metro cuadrado.5.    La tasa de aprobacion del plano estructural tiene un costo de 2.00 bolivianos por metro al cubo.6.    La tasa de fijacion de rasante por metro lineal de los sub distritos 1 al 16 tiene un costo de 1.00 bolivianos por metro lineal.7.    Para los sub distritos 17 al 32 tiene un costo de 1.5 bolivianos por metro lineal.",
    },
    "DURACION DEL TRAMITE": {
        content: "La duracion del tramite llega a ser de 40 dias habiles aproximadamente, despues de cumplirse todos los requisitos y no encontrarse observaciones.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene lo siguiente:·         Plano de construccion aprobado con Resolucion emitida por la Sub Alcaldia.·         Autorizacion de Inicio de Obra.",
    },
    "ACLARACIONES PARA EL TRAMITE APROBACION DEL PLANO DE CONSTRUCCION DE EDIFICIO": {
        content: "las aclaraciones son las siguientes:1.    El tramite tambien puede ser realizado por una tercera persona, siempre y cuando se presente Carta o Poder Notariado para el efecto.2.    En ningun caso el interesado debe cancelar otros montos economicos que no esten indicados en la presente guia de tramite.3.    En caso de inicio de obras sin el respectivo plano aprobado y autorizacion de inicio de obra, se hara pasible a sanciones de acuerdo Reglamento de Sanciones por Contravenciones a Disposiciones Municipales.4.    La aprobacion de los planos de construccion y autorizacion de inicio de obra tendra una vigencia de un ano luego de ser otorgado. Transcurrido el plazo debera solicitar su revalidacion (costo de 35 bolivianos).5.    El proyecto arquitectonico deberan contener la siguiente informacion, plano de ubicacion, de emplazamiento, de plantas, de elevaciones y fachada, prevision contra incendios y salidas de emergencia, de cortes, de cimientos o fundaciones, de cierre frontal (verja), de techos o cubiertas, detalle constructivo (corte de borde), de cota cero, de rampas de acceso, de sala de maquinas, de piscina (de existir) y depositos de agua, de emplazamiento con relacion a sus colindantes, de vegetacion sobre fajas jardin y acera, de escaleras, de parqueos, salon de copropietarios y otros. Tambien los planos deberan presentarse con el formato del carimbo establecido.6.    El proyecto estructural debera contener la informacion especificada en el Documento de Contenido Minimo de Proyecto Estructural, los planos a presentar son emplazamiento de cimientos, emplazamiento de diferentes niveles, cimientos, muros de contencion y/o sotanos, detalles constructivos, losas y escaleras, columnas, vigas y otros. Ademas, estos deberan presentarse con el formato del carimbo establecido.7.    Todos los planos de los diferentes proyectos deberan registrar los datos del propietario segun certificado catastral.8.    Para el inicio de la construccion necesariamente se debe contar con el director de Obra.9.    Para el recojo del Plano de Construccion aprobado es imprescindible presentar la Licencia Ambiental aprobada.",
    },
    "QUE DOCUMENTOS SE OBTIENEN CON EL TRAMITE": {
        content: "Se obtiene el Plano de Anteproyecto de Construccion Visado por la Sub Alcaldia.",
    },
    "REQUISITOS PARA LA TRANSFERENCIA (BIENES INMUEBLES)": {
        content: "Los requisitos son los siguientes:1.	original y copia de la declaracion jurada aprobada del sistema de visacion de minuta de inmuebles.2.	fotocopia del comprobante de pago de impuestos a la propiedad del bien inmueble de la ultima gestion.3.	original de la minuta de compraventa o documento privado con reconocimiento de firmas.4.	fotocopia de la cedula de identidad del comprador (en caso de no tener registro en el padron municipal de contribuyente.5.	fotocopia de cedula de identidad a color.6.	1 foto 3 por 3 fondo rojo.7.	fotocopia de la cedula de identidad del vendedor.8.	titulo de propiedad y folio real legalizado por la sub alcaldia correspondiente.9.	plano del bien inmueble aprobado por la sub alcaldia correspondiente o el departamento de normas urbanas y rurales (propiedad horizontal), original y fotocopia.10. registro catastral emitido por la comuna correspondiente (original y fotocopia).11. en caso de existir poder notariado del comprador y/o vendedor fotocopia legalizada de la notaria de fe publica.Recomendaciones: Con la finalidad de recibir una atencion efectiva y oportuna, se recomienda ordenar los documentos conforme lo descrito en originales y copias. Una vez verificado el cumplimiento de los requisitos, se procedera con el tramite y otorgar la proforma de pago por el Impuesto Municipal a la Transferencia (IMT).Un dato importante:en caso de venta judicial debera incluir copia de la sentencia como tambien el acta de remate.",
    },
    "REQUISITOS PARA LA TRANSFERENCIA ESPECIAL (BIENES INMUEBLES)": {
    content: "Los requisitos son los siguientes:1.    FOLIO REAL (original y fotocopia legalizada por la Sub Alcaldia correspondiente).2.    Titulo de propiedad, Declaratoria de Herederos, Anticipo de legitima u otro (original y fotocopia legalizada).3.    Fotocopia de la cedula de Identidad de los ACTORES (En caso de NO tener registro en el Padron Municipal de Contribuyente (PMC) adjuntar: Fotocopia de Cedula de Identidad a color y 1 Foto 3 por 3 Fondo Rojo).4.    Registro Catastral (Original y fotocopia).5.    Comprobante de pago por concepto del Impuesto a la Propiedad de Bien Inmueble - (IPBI), a la fecha de pago del Titulo de Propiedad.6.    Certificacion del Servicio Impuestos Nacionales.7.    Certificacion del Gobierno Autonomo Departamental de Cochabamba del pago del impuesto a la Transferencia. (A partir de la gestion 2016).Recomendaciones: Con la finalidad de recibir una atencion efectiva y oportuna, recomienda ordenar los documentos conforme lo descrito en originales y copias, para realizar el registro de la Transferencia Especial del Bien Inmueble de la Jurisdiccion del Gobierno Autonomo Municipal de Cochabamba.",
    },
    "REQUISITOS PARA LA REGULARIZACION ACCIONES Y DERECHOS (BIENES INMUEBLES)": {
    content: "Recomendaciones: Establecer los requisitos basicos para proceder a la modificacion del porcentaje definido para la propiedad del bien inmueble cuando corresponda, en funcion del FOLIO REAL ACTUALIZADO. Los requisitos son los siguientes:1.    Comprobante de Pago del Impuesto a la Propiedad del Bien Inmueble de una gestion pasada.2.    Fotocopia de la cedula de identidad del titular(es) para su registro en el padron municipal de contribuyente, (En caso de NO tener registro Adjuntar: Fotocopia de cedula de identidad a color y 1 Foto 3 por 3 Fondo Rojo).3.    TITULO DE PROPIEDAD acredita derecho propietario del titular del inmueble (Original y copia).4.    FOLIO REAL (ACTUALIZADO) original y fotocopia legible de todos los asientos registrados.5.    Plano del bien inmueble aprobado por la Sub Alcaldia correspondiente o el Departamento de Normas Urbanas y Rurales (Propiedad Horizontal) – (Original y Fotocopia).6.    REGISTRO CATASTRAL emitido por Comuna Correspondiente (Original y fotocopia).7.    En caso de existir Poder notariado, presentar la original y copia que le faculte la realizacion del presente tramite.8.    Otros documentos que acrediten el derecho propietario en funcion al folio real y su asiento debidamente registrado.",
    },
    "REQUISITOS PARA EXENCION DE INMUEBLE (DESCUENTO TERCERA EDAD)": {
    content: "Los requisitos son los siguientes:1.    FOTOCOPIA, simple de Testimonio de Propiedad o Folio Real a nombre del titular que solicite la exencion. 2.    FOTOCOPIA, de Cedula de identidad que consigne la direccion del Inmueble sujeto o exencion. 3.    FOTOCOPIA del comprobante de pago de Impuesto del Inmueble o proforma resumida.4.    Declaracion jurada impresa en caso de ser terceras personas (si Corresponde) para el descuento de la tercera edad.Recomendaciones:Los sujetos pasivos de mas de 60 anos de edad, gozaran del beneficio de la exencion establecido en la Disposicion Adicional Primera de la ley Municipal Numero 0719/2020 de Incentivo Tributario, En caso de ser 2 o mas propietarios, todos deben sobrepasar los 60 anos de edad, caso contrario no corresponde. La direccion detallada en la cedula de identidad debe ser la misma del inmueble que solicita la exencion por tercera edad, caso contrario no Corresponde. En las declaraciones juradas que solicitan la declaracion jurada deberan firmar el o los titulares con su huella dactilar y ubicar correctamente en el plano digital.",
    },
    "REQUISITOS PARA LA VISACION MINUTAS": {
    content: "Los requisitos son los siguientes:1.    DERECHO DE ADMISION (DA -99), la persona natural o juridica debe cancelar el derecho de Admision de tramite al numero cuenta:  DA-99 por 20 bolivianos en la Entidad Financiera Autorizada o Caja Recaudadora del Gobierno Autonomo Municipal de Cochabamba.2.    DECLARACION JURADA IMPRESA, EI formulario de Visacion de Minutas debera estar firmado por el comprador o vendedor o apoderado, debiendo verificar la firma con la cedula de identidad.3.    ORIGINAL DEL REGISTRO CATASTRAL O CERTIFICACION CATASTRAL, en caso de ser primera transferencia no corresponde. (ultimo asiento a nombre del titular).4.    ORIGINAL DEL FOLIO REAL O INFORMACION RAPIDA ACTUALIZADO (emitido en la presente gestion a del titular).5.    Cuando el vendedor es persona juridica: Fotocopia del NIT, Poder del representante Legal y Cedula de identidad.6.    FOTOCOPIA DE LA CEDULA DE IDENTIDAD de las partes intervinientes VENDEDORES y COMPRADORES.7.    PLANO APROBADO DE LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL LEGALIZADO, segun el objeto de La transferencia.8.    MINUTA DE TRANSFERENCIA DEL BIEN INMUEBLE (con firma de las partes y el abogado).9.    ORIGINAL DEL TITULO DE PROPIEDAD.10. ORIGINAL DEL PODER DE REPRESENTACION LEGAL (otorgado por el comprador o vendedor).RECOMENDACIONES:Para la admision del tramite de visacion, el contribuyente debe cancelar el derecho de admision (DA 99), llenar la declaracion jurada en el sistema de visaciones y realizar la aprobacion de la declaracion.El inmueble no debera consignar mora tributaria a la fecha de su registro.Para los casos de venta judicial adjuntar. SENTENCIA, ACTA DE REMATE Y AUTO DE ADJUDICACION.Una vez revisada toda la documentacion original, se debera presentar adjunta una copia simple en el mismo orden.",
    },
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION DE VEHICULO AUTOMOTOR TERRESTRE CON FACTURA ":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, certificado unico de datos tecnicos de automotor, poliza de importacion, factura comercial (original y fotocopia), y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION DE VEHICULO AUTOMOTOR TERRESTRE CON FACTURA Y TRANSFERENCIA ":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, poliza de importacion, factura comercial (original y fotocopia), documento de compra y venta (original y fotocopia), fotocopia vigente del vendedor y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION IMPORTACION DIRECTA DEL VEHICULO AUTOMOTOR TERRESTRE":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, poliza de importacion, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA INSCRIPCION IMPORTACION DIRECTA DEL VEHICULO AUTOMOTOR TERRESTRE CON TRANSFERENCIA":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, declaracion unica de importacion, formulario de registro vehicular, poliza de importacion, Documento compra y venta (original y fotocopia), Fotocopia de documento de identidad del vendedor y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA TRANSFERENCIA DEL VEHICULO AUTOMOTOR TERRESTRE":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehiculo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DE LA TRANSFERENCIA DEL VEHICULO AUTOMOTOR TERRESTRE CON CAMBIO DE RADICATORIA":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Documento de compra y venta (Original y fotocopia), registro a la propiedad del vehiculo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS DEL CAMBIO DE RADICATORIA DEL VEHICULO AUTOMOTOR TERRESTRE.":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, registro a la propiedad del vehiculo automotor terrestre (original y fotocopia) y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA EL CAMBIO DE SERVICIO DEL VEHICULO AUTOMOTOR TERRESTRE CASO 1  PARTICULAR A PUBLICO.":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, registro a la propiedad del vehiculo automotor terrestre (original y fotocopia), Certificado de transporte del servicio publico, fotocopia de licencia o equivalente, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA EL CAMBIO DE RADICATORIA DEL VEHICULO AUTOMOTOR TERRESTRE POSEEDOR.":{ content:"Los requisitos son  DECLARACION JURADA VIRTUAL – Cambio de Radicatoria registro a la propiedad del vehiculo automotor terrestre (original y fotocopia),fotocopia de cedula de identidad del poseedor, fotocopia del documento que acredite su condicion de poseedor de buena fe (opcional). ",
    },
    "CUALES SON LOS REQUISITOS PARA EL CAMBIO DE SERVICIO DEL VEHICULO AUTOMOTOR TERRESTRE CASO 1  PARTICULAR A PUBLICO.":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, registro a la propiedad del vehiculo automotor terrestre (original y fotocopia), informe tecnico emitido por la policia boliviana, informe de datos tecnicos emitido por el Gobierno Autonomo Municipal de Cochabamba, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 1: EXTRAVIO DEL CERTIFICADO DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE (Certificado de Registro de Propiedad del Vehiculo Automotor).":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Original (Para Verificacion) y Fotocopia de la Factura de Publicacion en un medio de prensa escrita de circulacion nacional, comunicando el extravio del Certificado de Registro de Propiedad del Vehiculo Automotor por tres (3) dias continuos, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 2: ROBO DEL CERTIFICADO DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE (Certificado de Registro de Propiedad del Vehiculo Automotor).":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Original y Fotocopia de la Certificacion de Denuncia por Robo/Hurto del Certificado de Registro de Propiedad del Vehiculo Automotor (Policia Boliviana - FELCC), Original (Para Verificacion) y Fotocopia de la Factura de Publicacion en un medio de prensa escrita de circulacion nacional, comunicando el extravio del Certificado de Registro de Propiedad del Vehiculo Automotor por tres (3) dias continuos, y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 3: DETERIORO DEL CERTIFICADO DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE (Certificado de Registro de Propiedad del Vehiculo Automotor).":{ content:"Los requisitos son  Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, original del certificado de registro a la propiedad del vehiculo automotor terrestre deteriorado y en caso de ser apoderado presentar el poder de representacion legal. ",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 4: DETERIORO DE PLACAS METALICAS / PLAQUETAS.":{ content:"Los requisitos son Original y fotocopia del certificado de registro a la propiedad del vehiculo automotor terrestre, devolucion al Gobierno Autonomo Municipal de Cochabamba de las placas metalicas deterioradas, certificado emitido por la unidad correspondiente de la policia boliviana y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA DUPLICADOS CASO 4: DETERIORO DE PLACAS METALICAS / PLAQUETAS.":{ content:"Los requisitos son Original y fotocopia del certificado de registro a la propiedad del vehiculo automotor terrestre, devolucion al Gobierno Autonomo Municipal de Cochabamba de las placas metalicas deterioradas, certificado emitido por la unidad correspondiente de la policia boliviana y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA LA REGULARIZACION DE PROPIEDAD DE VEHICULO AUTOMOTOR TERRESTRE.":{ content:"Los requisitos son Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Derecho de admision 102 (DA  102) – transferencia especial, Original y fotocopia del certificado de registro a la propiedad del vehiculo automotor terrestre, testimonio que acredite el motivo de transferencia, Fotocopia de la factura, y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA EL REEMPLAQUE VEHICULO AUTOMOTOR.":{ content:"Los requisitos son Los requisitos son Fotocopia de cedula de identidad vigente a color, foto 3 por 3 fondo rojo, Original y Fotocopia de la Comunicacion al Poseedor (COPO) Documento a Recabarse en Aduana Nacional o Poliza Titularizada del Automotor (PTA), de no Contar Con El Original Presentar La Certificacion de la Denuncia Registrada en la FELCC, Original y Fotocopia del Carnet de Propiedad (Anterior), de no contar con el documento original debera presentar la Certificacion de la Denuncia Registrada en la FELCC, Declaracion Jurada de No Emplacado (a Obtener en Recaudaciones), Original y Fotocopia de Informe De Datos Tecnicos – Relevamiento de las Caracteristicas del Vehiculo emitido por la Seccion correspondiente del Gobierno Autonomo Municipal de Cochabamba (formulario RUA 08), de Corresponder. y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA BAJA TRIBUTARIA POR ROBO.":{ content:"Los requisitos son, Original de la certificacion de denuncia de robo emitida por la policia boliviana, original del certificado de propiedad de vehiculo automotor original y copia de cedula de identidad del titular, impuestos al dia, derecho de admision 101 (DA  101), folder municipal, timbre para la emision de la certificacion y en caso de ser apoderado presentar el poder de representacion legal.",
    },
    "CUALES SON LOS REQUISITOS PARA BAJA TRIBUTARIA POR FIN DE VIDA UTIL.":{ content:"Los requisitos son, Original y Copia Legalizada del Documento que Evidencie la condicion de Obsoleto o Fin de Vida Util Emitido por el Gobierno Autonomo Municipal de Cochabamba Devolucion del Certificado de Propiedad del Vehiculo Automotor Terrestre (Certificado de Registro de Propiedad del Vehiculo Automotor), Devolucion de Placas y Plaquetas, No debe ser Otra Radicatoria, Tampoco debe registrar gravamenes y los impuestos al Dia para proceder a la Baja, Original y Copia de la Cedula de Identidad del Sujeto Pasivo, Derecho de Admision 101 (DA  101)– Baja de Vehiculo – a ser Depositado en la cuenta Por 37 Bolivianos. En Caso de ser Apoderado Ademas debe adjuntar lo siguiente Original (Para Verificacion) y Fotocopia de Poder de representacion Legal, Fotocopia de Documento de Identidad del Apoderado.",
    },
    "QUE  DISTRITOS, SUBDISTRITOS Y ZONAS PERTENECEN A LA SUB ALCALDIA TUNARI  DE COCHABAMBA":{ content:"Distrito 1 conformado por sub distrito 25  Zona Aranjuez Alto,  Sub Distrito 26  Zona Mesadilla.Distrito 2 conformado por sub distrito 22  Zona Condebamba, Sub Distrito 23  Zona Temporal Pampa, Sub Distrito 24  Zona Queru Queru Alto, Sub Distrito 1  Zona Mayorazgo.Distrito 13 Parque Nacional Tunari.",
    },
    "QUE  DISTRITOS, SUBDISTRITOS Y ZONAS PERTENECEN A LA SUB ALCALDIA MOLLE  DE COCHABAMBA ":{ content:"Distrito 3 conformado por sub distrito 21  Zona Sarcobamba, Sub Distrito 37  Zona Chiquicollo.distrito 4 conformado por sub distrito Distrito 10  Zona Chimba, Sub Distrito 27  Zona Villa Bush, Sub Distrito 28  Zona Cona Cona.",
    },
    "QUE  DISTRITOS, SUBDISTRITOS Y ZONAS PERTENECEN A LA SUB ALCALDIA ALEJO CALATAYUD  DE COCHABAMBA":{ content:"Distrito 5 conformado por sub distrito 14  Zona La Maica, Sub Distrito 15  Zona Jaihuayco, Sub Distrito 17  Zona Lacma, Sub Distrito 18  Zona Ticti, Sub Distrito 20  Zona Alalay Valle Hermoso.Distrito 8 conformado por sub distrito  Zona Uspha Uspha.",
    },

    "QUE  DISTRITOS, SUBDISTRITOS Y ZONAS PERTENECEN A LA SUB ALCALDIA VALLE HERMOSO  DE COCHABAMBA":{ content:"Distrito 6 conformado por sub distrito 16  Zona Alalay Norte.Distrito 7 conformado por sub distrito 19  Zona Alalay Sud.Distrito 14 conformado por sub distrito 20  Zona Valle Hermoso.",
    },

    "QUE  DISTRITOS, SUBDISTRITOS Y ZONAS PERTENECEN A LA SUB ALCALDIA ITOCTA  DE COCHABAMBA":{ content:"Distrito 9 conformado por sub distrito 29  Zona Tamborada Pukarita, Sub Distrito 30  Zona 1 de mayo,Sub Distrito 31  Zona Pucara Grande Norte, Sub Distrito 35  Zona Pucara Grande Sur, sub Distrito 36  Zona Pucara Grande Oeste.",
    },

    "QUE  DISTRITOS, SUBDISTRITOS Y ZONAS PERTENECEN A LA SUB ALCALDIA ADELA ZAMUDIO  DE COCHABAMBA":{ content:"Distrito 10 conformado por sub distrito  7  Zona Noroeste, sub Distrito 8  Zona Noreste, Sub Distrito 11  Zona Sudoeste, Sub Distrito 12  Zona Sudeste.Distrito 11 conformado por sub distrito 9  Zona Muyurina, Sub Distrito 13  Zona Las Cuadras.Distrito 12 conformado por sub distrito 2  Zona Sarco,Sub Distrito   Zona Cala Cala,Sub Distrito 4  Zona Queru Queru,Sub Distrito 5  Zona Tupuraya,Sub Distrito 6  Zona Hipodromo.",
    },

    "QUE  DISTRITOS, SUBDISTRITOS Y ZONAS PERTENECEN A LA SUB ALCALDIA TAMBORADA  DE COCHABAMBA":{ content:"Distrito 15 conformado por sub distrito 32  Zona Valle Hermoso Oeste, Sub Distrito 33  Khara Khara Arrumani, sub distrito 35 zona pukara grande sur.",
    },

    "PARA QUE SIRVE LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:" Para disminuir el numero de vehiculos que circulan en la zona critica de la ciudad, facilitar la circulacion de vehiculos en el area central, posibilitar un eficiente servicio de transporte de pasajeros minimizando los problemas de congestionamiento vial y los tiempos de desplazamiento y disminuir la contaminacion ambiental provocada por la emision de gases de escape de vehiculos por el congestionamiento vial.",
    },

    "CUAL ES EL AREA DE LA RESTRICCION VEHICULAR DE COCHABAMBA":{content:"la restriccion de ingreso y circulacion de vehiculos al area central de la ciudad esta limitada por las siguientes vias Avenida Oquendo, Circuito Bolivia Oeste, Avenida 6 de Agosto, Avenida Ayacucho, Corredor San Sebastian, Avenida Aroma, Calle Junin, Calle Gral. Acha, Avenida Ayacucho, Avenida Rafael Urquidi, Avenida Ramon Rivero y cierre con la Avenida Oquendo.",
    },

    "CUAL ES LA RESTRICCION VEHICULAR POR NUMERO DE PLACA EN COCHABAMBA":{ content:"Dia Lunes no puede ingresar si el ultimo numero de su placa es cero y uno, dia Martes no puede ingresar si el ultimo numero de su placa es dos y tres, dia miercoles no puede ingresar si el ultimo numero de su placa es cuatro y  cinco, dia jueves no puede ingresar si el ultimo numero de su placa es seis y siete, dia viernes no puede ingresar si el ultimo numero de su placa es ocho y nueve.",
    },

    "QUE PLACA NO INGRESA EL DIA LUNES POR LA RESTRICCION VEHICULAR EN COCHABAMBA ":{content:"No puede ingresar si el ultimo numero de su placa es cero y uno.",
    },

    "QUE PLACA NO INGRESA EL DIA MARTES POR LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el ultimo numero de su placa es dos y tres.",
    },

    "QUE PLACA NO INGRESA EL DIA MIERCOLES POR LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el ultimo numero de su placa es cuatro y cinco.",
    },

    "QUE PLACA NO INGRESA EL DIA JUEVES POR LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el ultimo numero de su placa es seis y siete.",
    },

    "QUE PLACA NO INGRESA EL DIA VIERNES POR LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:"No puede ingresar si el ultimo numero de su placa es ocho y nueve.",
    },

    "CUAL ES EL HORARIO DE LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:"el horario establecido para el control y cumplimiento de la restriccion de ingreso y circulacion de vehiculos es de 7 30 manana  a 19  tarde.",
    },

    "A QUE VEHICULOS SE APLICARA LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:"se aplica todo vehiculo del servicio particular, todo vehiculo de servicio de radio Taxi, Radio Movil, Taxi Asociado,  Taxi Libre, todos los vehiculos oficiales, excepto los vehiculos oficiales del Presidente del estado plurinacional, Gobernador, Alcalde Municipal, asi como vehiculos de Auxilio, emergencia y medios de Comunicacion, todos los vehiculos de los precitados incisos 1, 2 y 3, registrados en el Gobierno Autonomo Municipal de Cochabamba, los registrados en otros municipios que desarrollan su trabajo en la jurisdiccion del Cercado y aquellos que estan en transito por la ciudad de Cochabamba.",
    },

    "QUIENES ESTAN EXCLUIDOS DE LA RESTRICCION VEHICULAR EN COCHABAMBA":{content:"Los vehiculos de transporte urbano de pasajeros de las modalidades correspondientes a Buses, Microbuses, Minibuses y Taxitrufis definidos en el Articulo 11 del Reglamento Municipal para el Servicio de Transporte Publico de Pasajeros aprobado por Ordenanza Municipal Numero 2998 del 2003, vehiculos que por contrato de construccion de obras o de servicios esten vinculados con el Gobierno Autonomo Municipal de Cochabamba y cuenten con autorizacion de la Direccion de Planeamiento, a traves del Departamento de Ordenamiento de Sistemas de Movilidad Urbana.",
    },

    "CUAL ES LA MULTA POR RESTRICCION VEHICULAR EN COCHABAMBA":{content:"El ingreso de un vehiculo al area descrita en el Articulo Primero en dias en que la terminacion numerica de la placa se encuentre restringida, sera considerado como una infraccion, para lo cual se aplicara una multa de Bolivianos 100.En caso de resistencia o ausencia del propietario o conductor del vehiculo, el mismo sera trasladado a garaje de resguardo.Para que un vehiculo conducido o trasladado con remolque a garaje de resguardo pueda ser liberado, el conductor o propietario debera acreditar la propiedad o tenencia legal del vehiculo, haber cancelado la Multa correspondiente en la Direccion de Recaudaciones e Ingresos del Municipio; cancelar la tarifa de Bolivianos 100 por el traslado del vehiculo a la empresa convocada para el efecto y cancelar y Bolivianos  10 por dia de permanencia del vehiculo en garaje de resguardo.",
    },

    "QUE ES LA FOTOMULTA EN COCHABAMBA":{content:"Es un sistema de vigilancia automatizado que utiliza camaras para capturar imagenes de vehiculos que infringen las normas de restriccion vehicular, estas camaras registran la placa del vehiculo y la fecha y hora de la infraccion, y luego se emite una multa al propietario del vehiculo.",
    },

    "EN QUE NORMATIVA SE BASA LA RESTRICCION VEHICULAR DE COCHABAMBA":{content:"En la ley Municipal numero  395 del 2019, de regulacion de ingresos no tributariosOrdenanza Municipal  Numero 4394 del 2012,  Restriccion vehicular.",
    },

    "QUE ES EL ESTACIONAMIENTO TARIFADO DE COCHABAMBA":{content:"Regular las condiciones de utilizacion y uso de las vias publicas con fines de estacionamiento temporal de vehiculos particulares, asi como, la disposicion de paradas para el servicio de transporte publico de pasajeros y la aplicacion de las sanciones correspondientes.",
    },
    "CUALES SON LOS HORARIOS PARA ESTACIONAMIENTO PERMITIDO, TARIFADO, PROHIBIDO EN VIAS PUBLICAS DE COCHABAMBA":{content:"Los estacionamientos vehiculares permitidos podran ser utilizados mientras no exista una restriccion que prohiba su uso. Los horarios de uso de las vias de estacionamiento tarifado son desde las 8 de la manana  hasta las 12 de la tarde y desde las 14 30 de la tarde hasta las 18 30 de la tarde de lunes a viernes y los sabados de 8 de la manana  hasta las 13 de la tarde. Los horarios de control en las vias de estacionamiento prohibido se determinaran en funcion a los niveles de congestion, demoras, perfiles de via, volumen de vehiculos y otros parametros tecnicos, y estaran establecidos mediante Decreto Municipal Reglamentario.",
     },
    
    "CUALES SON LAS TARIFAS DE ESTACIONAMIENTO EN COCHABAMBA":{content:"La tarifa unica por cada treinta minutos de Estacionamiento en las vias de estacionamiento tarifado, es de bolivianos uno.",
     },
    
    "COMO PAGO EL ESTACIONAMIENTO EN COCHABAMBA":{content:"El pago por el servicio de estacionamiento municipal se puede realizar con el personal del servicio de estacionamiento municipal  distribuido por las areas de parqueo tarifado, por la aplicacion Innova para celulares o la pagina web de Innova .",
     },
    
    "CUAL ES LA MULTA POR NO PAGAR EL ESTACIONAMIENTO EN COCHABAMBA":{content:"La no cancelacion por uso del estacionamiento tiene una multa de 25 Bolivianos  la primera vez y 35 Bolivianos  la reincidencia.",
     },
    
    "CUAL ES LA MULTA POR PASAR DEL TIEMPO DE  ESTACIONAMIENTO EN COCHABAMBA":{content:"La permanencia por mayor tiempo del efectivamente cancelado DEL ESTACIONAMIENTO, con una tolerancia de 15 minutos  tiene una multa de 25 Bolivianos  la primera vez y 35 Bolivianos la reincidencia.",
     },
    
    "CUAL ES LA MULTA POR OCUPAR MAYOR ESPACIO DE ESTACIONAMIENTO EN COCHABAMBA":{content:"La ocupacion de mas de un espacio demarcado, impidiendo con ello que sea utilizado por otro vehiculo tiene una multa de 25 Bolivianos  la primera vez y 35 Bolivianos  la reincidencia.",
     },
    "CUAL ES LA MULTA POR no colocar el comprobante de pago de estacionamiento en un lugar visible del vehiculo EN COCHABAMBA":{content:"La falta de colocacion del comprobante de pago de estacionamiento en lugar visible al interior del vehiculo. tiene una multa de 25 Bolivianos la primera vez y 35 Bolivianos  la reincidencia.",
     },
    
    "CUAL ES LA MULTA POR Permanecer con el cepo o engrapado por mas de una hora EN COCHABAMBA,":{content:"Permanecer con el dispositivo de inmovilizacion por mas de dos horas tiene un costo de 100 Bolivianos  por la multa y cubrir el costo de 100 Bolivianos por el traslado a garaje de resguardo, al propietario de la grua.",
     },
    
    "CUAL ES LA MULTA POR Danar o destruir la senalizacion vertical u horizontal EN COCHABAMBA.":{content:"La destruccion de la senalizacion vertical tiene una multa de 100 Bolivianos  mas los costos de reposicion de la senalizacion danada.",
     },
    
    "QUE ES UN TRASLADO DE VEHICULO EN COCHABAMBA":{content:"En caso de resistencia al pago de la multa o ausencia del propietario o conductor del vehiculo infractor, el vehiculo sera trasladado a garaje de resguardo Para que un vehiculo conducido o trasladado con remolque a garaje de resguardo pueda ser liberado, el conductor o propietario debera acreditar la propiedad o tenencia legal del vehiculo, y haber cancelado La multa correspondiente a la infraccion.Por el traslado del vehiculo al garaje de resguardo.  Por la permanencia del vehiculo en garaje de resguardo, la suma de bolivianos 10 por dia.",
     },
    
    "DONDE PAGO MULTAS POR INFRACCION EN COCHABAMBA":{content:"La cancelacion de las multas y sanciones sera realizada de manera virtual en la plataforma INNOVA,  en oficinas de la Direccion de Recaudaciones, la Division del Servicio de Estacionamiento Municipal, entidades bancarias habilitadas para el servicio de cancelacion de infracciones.",
     },
    
    "CUAL ES LA NORMATIVA DE ESTACIONAMIENTO EN COCHABAMBA":{content:"La Constitucion Politica del Estado Articulos 283 y 302. Ley numero 31 Marco de Autonomias y Descentralizacion Andres Ibanez.Ley numero 165 General de Transportes. Ley Municipal numero 395 del 2019, De regulacion de ingresos no tributarios. Ley Municipal numero 1087 del 2022,  De regulacion de estacionamientos temporales en vias publicas de la ciudad de Cochabamba.Ordenanza Municipal numero 4398 del 2012, Reglamento sobre estacionamiento vehicular.",
     },
    
    "QUE ES EL TAXI SEGURO EN COCHABAMBA":{content:"Tiene por objeto regular y dar seguridad a los pasajeros de transporte publico de taxis y radiotaxis, estableciendo el procedimiento para el registro, obligaciones de los conductores, facultades del Gobierno Autonomo Municipal de Cochabamba, infracciones, sanciones y entrega de distintivos de Registro Vehicular a los propietarios de vehiculos en el municipio de Cochabamba y poder denominarlos Taxi Seguro.",
     },
    
    "PARA QUE SIRVE TAXI SEGURO EN COCHABAMBA":{content:"Para Reducir el indice de hechos ilicitos en la ciudad de Cochabamba por medio de acciones que uniformizan los distintivos de identificacion de los servicios de taxis y radiotaxis.Determinar los requisitos, plazos y condiciones para la recepcion de documentacion, llenado en el sistema de registro y entrega del Distintivo del Registro Vehicular asi como el colocado en los vehiculos automotores de tipo taxi y radio taxi. Contar con una base de datos actualizada de la poblacion de conductores de taxis y radiotaxis asi como de las movilidades utilizadas.Establecer las infracciones y sanciones ante el incumplimiento de la obtencion del Distintivo de Registro Vehicular.",
     },
    
    "OBLIGACIONES DE TAXI SEGURO EN COCHABAMBA":{content:"Las personas naturales o juridicas que brindan el Servicio de Transporte Publico de Pasajeros en la modalidad de Taxi o Radio Taxi, estan obligadas a:El Propietario del vehiculo, debe recabar y exhibir el Distintivo Autoadhesivo del Registro Vehicular (RV) de su vehiculo, en el angulo superior derecho del parabrisas delantero del vehiculo.El Propietario del vehiculo, debe implementar a su costo todas las caracteristicas adicionales de Identificacion del Registro Vehicular (RV). Las Empresas de Radio Taxis, deben exigir a todos sus conductores, la presentacion del RV como requisito antes de su incorporacion.Todo vehiculo registrado como Taxi Seguro con caracter Obligatorio debera ser conducido por un conductor que cuente con la Tarjeta de Identificacion del Conductor.(TIC) correspondiente.",
     },
    
    "QUE CARACTERISTICAS TIENE EL DISTINTIVO DE REGISTRO VEHICULAR DE COCHABAMBA":{content:"consistira en un autoadhesivo con Logotipo del Escudo del Estado Plurinacional de Bolivia en la parte superior izquierda, Logotipo del escudo del Gobierno Autonomo municipal en la parte inferior derecha, Numero de placa del vehiculo, con una dimension de diez centimetros de alto y veinte centimetros  de ancho y el numero de serie del registro.",
     },
    
    "CUALES SON LOS REQUISITOS DEL TRAMITE DE REGISTRO VEHICULAR EN COCHABAMBA":{content:"El propietario de Taxis o Radio Taxi, debera registrar su vehiculo en las oficinas de la Direccion de Movilidad Urbana adjuntando la siguiente documentacionFotocopia de Carnet de Identidad.Fotocopia del RUAT.Fotocopia del certificado de SOAT vigente.Fotocopia del Certificado de la Inspeccion Tecnica Vehicular.Fotocopia de la TIC otorgada por el Organismo Operativo de Transito.Cumplir con la inspeccion fisica del vehiculo por la DGMU a traves del DTP.Todos los interesados al momento de presentar las fotocopias, deben exhibir el original de los documentos.",
     },
    
    "CUAL ES EL PROCEDIMIENTO PARA TENER EL REGISTRO VEHICULAR EN COCHABAMBA":{content:"Recibida la documentacion el (la) funcionario (a) del DTP, verificara la presentacion de todos los requisitos y la autenticidad de las fotocopias respecto de los originales.En caso de que faltare uno o varios de los requisitos establecidos, se procedera a la devolucion inmediata de la documentacion al solicitante y se tendra como no presentada.Cumplida la presentacion de todos los requisitos, el (la) funcionario (a) registrara la carpeta y datos del vehiculo y de su propietario.Se remitira los antecedentes al tecnico encargado para la digitalizacion de la informacion y registro del vehiculo con un numero de serie correlativo.Posteriormente, el responsable del DTP, comunicara al responsable de la DGMU quien a su vez autorizara la impresion del distintivo de registro del vehiculo y dispondra el pegado del mismo en el vehiculo automotor.La carpeta y antecedentes del tramite sera archivada y quedara bajo custodia del DTP.El tramite desde su inicio hasta la entrega del distintivo del RV tendra una duracion maxima de 5 dias habiles.",
     },
    
    "CUALES ES LA VIGENCIA DEL REGISTRO VEHICULAR EN COCHABAMBA":{content:"El distintivo del registro de vehiculo de transporte publico para Taxis o Radio Taxis estara vigente hasta que el propietario del vehiculo disponga el cambio de uso, transferencia o la baja del registro.El distintivo de los vehiculos registrados para prestar el Servicio Publico de Taxis y Radio Taxis es de uso unico y exclusivo del vehiculo registrado",
     },
    
    "QUE HACER EN CASO DE PERDIDA, DANO O ROBO DEL DISTINTIVO DEL REGISTRO VEHICULAR EN COCHABAMBA":{content:"En caso de perdida o robo del distintivo de registro, el titular deberaDenunciar el hecho ante la Fuerza Especial de Lucha Contra el Crimen FELCC. Publicar en un medio de prensa de circulacion nacional la perdida o robo del distintivo.Presentar una copia de la Denuncia y la Publicacion realizada a la DGMU.El responsable del DTP, comunicara al responsable de la DGMU quien a su vez autorizara la reposicion e impresion del distintivo de registro del vehiculo y dispondra el pegado del mismo en el vehiculo automotor.En caso de que se produzca algun dano o deterioro del distintivo, debera ser devuelto al DTP, para la reposicion del distintivo de registro.",
     },
    
    "COMO DOY DE BAJA EL REGISTRO VEHICULAR DE COCHABAMBA":{content:"El propietario que deje de prestar el Servicio Publico de Transporte en la modalidad de Taxi o Radio Taxi, o transfiera el vehiculo, debe solicitar mediante una carta dirigida al Alcalde o Alcaldesa del GAMC la baja del Registro del Vehiculo y retiro del distintivo del motorizado.En caso de transferencia del vehiculo y que el nuevo propietario continue realizando el Servicio Publico de Transporte en la modalidad de Taxi o Radio Taxi, este debera realizar el tramite para Registro del Vehiculo cumpliendo los requisitos establecidos en la presente Ley Municipal.",
     },
    
    "CUALES SON LAS INFRACCIONES Y SANCIONES DEL REGISTRO VEHICULAR EN COCHABAMBA":{content:"El propietario del vehiculo que brinde el servicio de Taxis o Radiotaxis sin contar con el RV sera sujeto a una multa de 300.00 Bolivianos. El Propietario del vehiculo que brinde el servicio de Taxis o Radiotaxis sin exhibir el RV sera sujeto a una multa de 150.00 Bolivianos.El propietario del vehiculo que brinde el servicio de Taxi o Radio Taxi sin cumplir con las caracteristicas de identificacion del RV sera sujeto a una multa de 100 Bolivianos.El pago de las multas se realizara en las oficinas de la Direccion de Ingresos Tributarios del Gobierno Autonomo Municipal de Cochabamba.",
     },
    "CUALES SON LAS SUB SUB ALCALDIAS  DE COCHABAMBA ":{content:"LAS SUB ALCALDIAS son Tunari ubicada en la Avenida. Circunvalacion y Melchor Perez de Olguin.Molle ubicada en la Avenida Daniel Campos (Mercado el Rosario)Valle Hermoso, ubicada en Circuito Bolivia, esquina avenida Barranca, lado oeste del Campo Ferial.Adela Zamudio, ubicada en la Avenida Uyuni casi puente Recoleta NUMERO 654Alejo Calatayud, ubicada en la Avenida. Petrolera kilometro 2 y medio  edificio verde.Itocta ubicada en la Avenida Petrolera kilometro  4 Entrando al PolitecnicoTamborada.",
    },
    "SUB SUB ALCALDIAS  DE COCHABAMBA ":{content:"LAS SUB ALCALDIAS son Tunari ubicada en la Avenida. Circunvalacion y Melchor Perez de Olguin.Molle ubicada en la Avenida Daniel Campos (Mercado el Rosario)Valle Hermoso, ubicada en Circuito Bolivia, esquina avenida Barranca, lado oeste del Campo Ferial.Adela Zamudio, ubicada en la Avenida Uyuni casi puente Recoleta NUMERO 654Alejo Calatayud, ubicada en la Avenida. Petrolera kilometro 2 y medio  edificio verde.Itocta ubicada en la Avenida Petrolera kilometro  4 Entrando al PolitecnicoTamborada.",
    },
    "SUBALCALDIAS":{content:"LAS SUB ALCALDIAS son Tunari ubicada en la Avenida. Circunvalacion y Melchor Perez de Olguin.Molle ubicada en la Avenida Daniel Campos (Mercado el Rosario)Valle Hermoso, ubicada en Circuito Bolivia, esquina avenida Barranca, lado oeste del Campo Ferial.Adela Zamudio, ubicada en la Avenida Uyuni casi puente Recoleta NUMERO 654Alejo Calatayud, ubicada en la Avenida. Petrolera kilometro 2 y medio  edificio verde.Itocta ubicada en la Avenida Petrolera kilometro  4 Entrando al PolitecnicoTamborada.",
    },
    "CUAL ES LA BIOGRAFIA DE MANFRED REYES VILLA":{content:" El Capitan Manfred Reyes Villa Bacigalupi actualmente Alcalde de Cochabamba, politico y empresario. Es cochabambino por decision, ama a su gente, a su tierra y sobre todo a Dios, nacio en La Paz en 1955. Actualmente esta casado y tuvo 7 hijos, dos de los cuales ya han fallecido. Estudio en el Colegio Israelita de la ciudad de La Paz; en 1973 ingreso a la Escuela Militar del Ejercito, donde en 1977 obtuvo el grado de Segundo Teniente. Durante su carrera militar ocupo importantes cargos como docente en Asuntos de Especializacion Militar, y trabajo como Agregado Militar de la Embajada de Bolivia en Brasil y Estados Unidos. En 1988, por motivos personales, abandona definitivamente su carrera militar con el grado de Capitan del Ejercito para residir en Estados Unidos dedicandose a la vida civil y familiar, y en su area de formacion academica (Business Management), ocupando tambien importantes cargos. como Vicepresidente de Crawford International en Silver Spring, Maryland Estados Unidos.A su regreso a Bolivia, inicio su carrera politica a principios de los anos 1990. En 1992 asumio la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente ocupo la Alcaldia por cuatro periodos consecutivos entre 1993 y 2000. Simultaneamente a su labor como Alcalde, fue elegido Presidente de la Asociacion de Gobiernos Municipales Autonomos de Bolivia, asumiendo el cargo de Miembro de la Union Internacional de Autoridades Locales (ULA) y siendo designado de manera intermitente como Representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Asociacion Mundial de Coordinacion de Ciudades y Autoridades Locales, con sede en Ginebra, Suiza.En 2005 fue el primer Prefecto del departamento de Cochabamba elegido democraticamente y, en abril de 2009, en el marco de la nueva Constitucion Politica del Estado, se postulo a las elecciones presidenciales de 2009 obteniendo el segundo lugar de preferencia electoral. Reyes Villa se postulo nuevamente como Alcalde de Cochabamba en las elecciones subnacionales de 2021 representando a la agrupacion politica SUMATE, resultando electo por quinta vez con el 55.63% de los votos, ocupando la sede de este municipio como un politico experimentado, con una fuerte trayectoria. disco y grandes ideas..",
    },
    "BIOGRAFIA MANFRED REYES VILLA":{content:" El Capitan Manfred Reyes Villa Bacigalupi actualmente Alcalde de Cochabamba, politico y empresario. Es cochabambino por decision, ama a su gente, a su tierra y sobre todo a Dios, nacio en La Paz en 1955. Actualmente esta casado y tuvo 7 hijos, dos de los cuales ya han fallecido. Estudio en el Colegio Israelita de la ciudad de La Paz; en 1973 ingreso a la Escuela Militar del Ejercito, donde en 1977 obtuvo el grado de Segundo Teniente. Durante su carrera militar ocupo importantes cargos como docente en Asuntos de Especializacion Militar, y trabajo como Agregado Militar de la Embajada de Bolivia en Brasil y Estados Unidos. En 1988, por motivos personales, abandona definitivamente su carrera militar con el grado de Capitan del Ejercito para residir en Estados Unidos dedicandose a la vida civil y familiar, y en su area de formacion academica (Business Management), ocupando tambien importantes cargos. como Vicepresidente de Crawford International en Silver Spring, Maryland Estados Unidos.A su regreso a Bolivia, inicio su carrera politica a principios de los anos 1990. En 1992 asumio la Vicepresidencia del Concejo Municipal de Cochabamba. Posteriormente ocupo la Alcaldia por cuatro periodos consecutivos entre 1993 y 2000. Simultaneamente a su labor como Alcalde, fue elegido Presidente de la Asociacion de Gobiernos Municipales Autonomos de Bolivia, asumiendo el cargo de Miembro de la Union Internacional de Autoridades Locales (ULA) y siendo designado de manera intermitente como Representante Oficial de la Red Latinoamericana de Asociaciones Municipales ante la Asociacion Mundial de Coordinacion de Ciudades y Autoridades Locales, con sede en Ginebra, Suiza.En 2005 fue el primer Prefecto del departamento de Cochabamba elegido democraticamente y, en abril de 2009, en el marco de la nueva Constitucion Politica del Estado, se postulo a las elecciones presidenciales de 2009 obteniendo el segundo lugar de preferencia electoral. Reyes Villa se postulo nuevamente como Alcalde de Cochabamba en las elecciones subnacionales de 2021 representando a la agrupacion politica SUMATE, resultando electo por quinta vez con el 55.63% de los votos, ocupando la sede de este municipio como un politico experimentado, con una fuerte trayectoria. disco y grandes ideas..",
    },
    "QUIEN ES MANFRED REYES VILLA":{content:" El Capitán Manfred Reyes Villa Bacigalupi actualmente Alcalde de Cochabamba, es un militar , político y empresario.",
    },
    "QUE ES Y EN QUE CONSISTE EL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content:"Es el registro de la informacion del bien inmueble tecnico y legal, ya sea en la creacion de una nueva unidad catastral o cuando existan cambios en el estado fisico del inmueble, propietarios, nuevas construcciones o mejora de las mismas.",
    },
    "COMO HAGO Y EN QUE CONSISTE EL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content:"Es el registro de la informacion del bien inmueble tecnico y legal, ya sea en la creacion de una nueva unidad catastral o cuando existan cambios en el estado fisico del inmueble, propietarios, nuevas construcciones o mejora de las mismas.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DE REGISTRO CATASTRAL EN COCHABAMBA": {content: "la Direccion de Administracion Geografica y Catastro.",
    },

    "CUANTO DURA EL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content: "10 dias calendario aproximadamente, en caso de no tener observacion en los requisitos.",
    },	

    "SE PUEDE HACER DE MANERA VIRTUAL EL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content: "Aun no es posible realizar el tramite de manera virtual.",
    },

    "CUALES SON LOS REQUISITOS PARA EL REGISTRO CATASTRAL EN COCHABAMBA": {content: "Los requisitos son Derecho de Admision (Formulario Unico de Recaudaciones FUR DA 40)  32 Bolivianos.Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Tramites Catastrales.Titulo de Propiedad con su folio Real (Fotocopia Legalizada).Plano del Lote (Fotocopia Legalizada).Plano de unidad de propiedad horizontal (si corresponde) (Fotocopia Legalizada).Resolucion administrativa municipal de aprobacion de Propiedad Horizontal (si corresponde) (Fotocopia Legalizada).Impuestos de las ultimas 5 gestiones (Fotocopia simple).Carnet de identidad propietarios (Fotocopia simple).Ultimo Registro Catastral (Fotocopia simple).",
    },
    

    "QUE ES EN QUE CONSISTE EL TRAMITE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "Es el documento de una o varias personas naturales o juridicas, que representa su propiedad sobre un bien inmueble a traves de la asignacion de un codigo catastral. Cuenta con informacion legal y tecnica, cuando existe un cambio en el predio al regimen de propiedad horizontal, proporcionando nuevos codigos catastrales y el empadronamiento al Registro Unico para Administracion Tributaria Municipal de las nuevas unidades catastrales.",
    },
    
    "COMO HAGO EN QUE CONSISTE EL TRAMITE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "Es el documento de una o varias personas naturales o juridicas, que representa su propiedad sobre un bien inmueble a traves de la asignacion de un codigo catastral. Cuenta con informacion legal y tecnica, cuando existe un cambio en el predio al regimen de propiedad horizontal, proporcionando nuevos codigos catastrales y el empadronamiento al Registro Unico para Administracion Tributaria Municipal de las nuevas unidades catastrales.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA":{content: "Direccion de Administracion Geografica y Catastro",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "15 dias calendario aproximadamente, en caso de no tener observacion en los requisitos.",
    },
        
    
    "CUALES SON LOS REQUISITOS PARA EL REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "Los requisitos son Derecho de Admision (Formulario Unico de Recaudaciones FUR DA42)  50.00 Bolivianos.Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple) o Formulario de solicitud de Tramites Catastrales.Titulo de Adecuacion a propiedad horizontal con sus respectivos folios reales (Fotocopia Legalizada).Titulo de propiedad con su respectivo Folio Real (Fotocopia Legalizada).Resolucion ejecutiva de aprobacion de Adecuacion de propiedad horizontal (Fotocopia Legalizada).Plano de Adecuacion a Propiedad Horizontal (Fotocopia Legalizada).Plano de Lote o Urbanizacion (Fotocopia Legalizada).Impuestos de las ultimas 5 gestiones (Fotocopia simple).Carnet de identidad de los propietarios (Fotocopia simple).Ultimo Registro Catastral (Fotocopia simple).Folder.",
    },

    "QUE ES  EN QUE CONSISTE EL TRAMITE CERTIFICACION DE DATOS TECNICOS EN COCHABAMBA": {content: "Es el Certificado Catastral que establece la ubicacion exacta, y la superficie del predio de acuerdo a la documentacion presentada, esta certificacion sirve para la correccion de ubicacion y superficies en el Folio Real. brinda informacion de datos tecnicos actuales del predio que coinciden con el plano aprobado por el Gobierno Autonomo Municipal de Cochabamba y el Plano de Informacion de Datos Espaciales (IDE).",
    },
    "COMO HAGO EN QUE CONSISTE EL TRAMITE CERTIFICACION DE DATOS TECNICOS EN COCHABAMBA": {content: "Es el Certificado Catastral que establece la ubicacion exacta, y la superficie del predio de acuerdo a la documentacion presentada, esta certificacion sirve para la correccion de ubicacion y superficies en el Folio Real. brinda informacion de datos tecnicos actuales del predio que coinciden con el plano aprobado por el Gobierno Autonomo Municipal de Cochabamba y el Plano de Informacion de Datos Espaciales (IDE).",
    },
    "CUAL ES LA UNIDAD RESPONSABLE PARA EL TRAMITE DE CERTIFICACION DE DATOS TECNICOS EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO",
    },
    
    "CUANTO ES LA DURACION PARA EL TRAMITE DE CERTIFICACION DE DATOS TECNICOS EN COCHABAMBA": {content: "NO SE CUENTA CON EL DATO.",
    },
    "SE PUEDE HACER DE MANERA VIRTUAL EL TRAMITE DE CERTIFICACION DE DATOS TECNICOS EN COCHABAMBA": {content: "AUN NO ES POSIBLE REALIZAR EL TRAMITE DE MANERA VIRTUAL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA EL CERTIFICACION DE DATOS TECNICOS EN COCHABAMBA": {content: "DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA42)  69.00 BOLIVIANOS.MEMORIAL DIRIGIDO AL HONORABLE ALCALDE MUNICIPAL (ORIGINAL Y FOTOCOPIA SIMPLE) O FORMULARIO DE SOLICITUD DE TRAMITES CATASTRALES.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).PLANO DEL LOTE (FOTOCOPIA LEGALIZADA).PLANO DE UNIDAD DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).",
    },
    
    "QUE ES EL TRAMITE DE CERTIFICACION CATASTRAL  SI LA SOLICITUD ES VERBAL EN COCHABAMBA": {content: "ES EL DOCUMENTO OFICIAL POR EL CUAL EL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA, BRINDA SEGURIDAD JURIDICA A LOS ADMINISTRADOS Y DA CONSTANCIA DEL REGISTRO DE UN BIEN INMUEBLE EN EL CATASTRO, CONSIGNANDO LA ULTIMA INFORMACION TECNICA, LEGAL.",
    },
    
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE CERTIFICACION CATASTRAL EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE  DE CERTIFICACION CATASTRAL EN COCHABAMBA":{content: "PRIMER DIA HABIL, EN CASO DE NO TENER OBSERVACION EN LOS REQUISITOS.",
    },
    
    
    "CUALES SON LOS REQUISITOS PARA LA CERTIFICACION CATASTRAL (SOLICITUD VERBAL) EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA42) - 50.00 BOLIVIANOS.MEMORIAL DIRIGIDO AL HONORABLE ALCALDE MUNICIPAL (ORIGINAL Y FOTOCOPIA SIMPLE) O FORMULARIO DE SOLICITUD DE TRAMITES CATASTRALES.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).PLANO DEL LOTE (FOTOCOPIA LEGALIZADA).PLANO DE UNIDAD DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).",
    },
    
    
    "QUE ES EL TRAMITE CERTIFICACION CATASTRAL  DE USUCAPION EN COCHABAMBA": {content: "ES EL DOCUMENTO OFICIAL POR EL CUAL EL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA, BRINDA SEGURIDAD JURIDICA A LOS ADMINISTRADOS Y DA CONSTANCIA DEL REGISTRO DE UN BIEN INMUEBLE EN EL CATASTRO,CONSIGNANDO LA ULTIMA INFORMACION TECNICA, LEGAL.",
    },
    
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE CERTIFICACION CATASTRAL  DE USUCAPION EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE CERTIFICACION CATASTRAL DE USUCAPION EN COCHABAMBA": {content: "5 DIAS HABILES, EN CASO DE NO TENER OBSERVACION EN LOS REQUISITOS.",
    },
    
    
    "CUALES SON LOS REQUISITOS PARA EL CERTIFICACION CATASTRAL (USUCAPION) EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA42) - 50.00 BOLIVIANOS.ORDEN JUDICIAL O MEMORIAL SOLICITANDO CERTIFICACIONES PARA USUCAPION O ADJUDICACION.INFORME TOPOGRAFICO ELABORADO EN LA SUB ALCALDIA CORRESPONDIENTE.PLANO ELABORADO POR EL TOPOGRAFO DE LA SUB ALCALDIA.INFORME DE REMISION DEL TRAMITE DE USUCAPION O ADJUDICACION ELABORADO EN LA SUB ALCALDIA CORRESPONDIENTE.",
    },
     
    "QUE ES EL TRAMITE CERTIFICACION CATASTRAL (PARA PROCESO DE ADJUDICACION) EN COCHABAMBA": {content: "ES EL DOCUMENTO OFICIAL POR EL CUAL EL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA, BRINDA SEGURIDAD JURIDICA A LOS ADMINISTRADOS Y DA CONSTANCIA DEL REGISTRO DE UN BIEN INMUEBLE EN EL CATASTRO,CONSIGNANDO LA ULTIMA INFORMACION TECNICA, LEGAL.",
    },
    "COMO HAGO EL TRAMITE CERTIFICACION CATASTRAL (PARA PROCESO DE ADJUDICACION) EN COCHABAMBA": {content: "ES EL DOCUMENTO OFICIAL POR EL CUAL EL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA, BRINDA SEGURIDAD JURIDICA A LOS ADMINISTRADOS Y DA CONSTANCIA DEL REGISTRO DE UN BIEN INMUEBLE EN EL CATASTRO,CONSIGNANDO LA ULTIMA INFORMACION TECNICA, LEGAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DE TRAMITE CERTIFICACION CATASTRAL (PARA PROCESO DE ADJUDICACION) EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO",
    },
    
    "CUANTO ES LA DURACION DEL  DE CERTIFICACION CATASTRAL (PARA PROCESO DE ADJUDICACION) EN COCHABAMBA": {content: "5 DIAS HABILES, EN CASO DE NO TENER OBSERVACION EN LOS REQUISITOS.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA CERTIFICACION CATASTRAL (PARA PROCESO DE ADJUDICACION EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA42) - 50.00 BOLIVIANOS.ORDEN JUDICIAL O MEMORIAL SOLICITANDO CERTIFICACIONES PARA USUCAPION O ADJUDICACION.INFORME TOPOGRAFICO ELABORADO EN LA SUB ALCALDIA CORRESPONDIENTE.PLANO ELABORADO POR EL TOPOGRAFO DE LA SUB ALCALDIA.INFORME DE REMISION DEL TRAMITE DE USUCAPION O ADJUDICACION ELABORADO EN LA SUB ALCALDIA CORRESPONDIENTE.",
    },
    
    "QUE ES EL TRAMITE DE CERTIFICACION CATASTRAL (PARA LA REGULARIZACION DEL DERECHO PROPIETARIO LEY 247) EN COCHABAMBA": {content: "ES EL DOCUMENTO OFICIAL POR EL CUAL EL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA, QUE MUESTRA LA ULTIMA INFORMACION TECNICO, LEGAL QUE REGISTRA EL INMUEBLE O UNIDAD CATASTRAL DENTRO DEL MUNICIPIO, ADEMAS DE CERTIFICAR LA EXISTENCIA DE CONSTRUCCIONES HABITADAS EN EL PERIODO ESTABLECIDO DE ACUERDO A LA NORMATIVA.",
    },
    "COMO HAGO EL TRAMITE DE CERTIFICACION CATASTRAL (PARA LA REGULARIZACION DEL DERECHO PROPIETARIO LEY 247) EN COCHABAMBA": {content: "ES EL DOCUMENTO OFICIAL POR EL CUAL EL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA, QUE MUESTRA LA ULTIMA INFORMACION TECNICO, LEGAL QUE REGISTRA EL INMUEBLE O UNIDAD CATASTRAL DENTRO DEL MUNICIPIO, ADEMAS DE CERTIFICAR LA EXISTENCIA DE CONSTRUCCIONES HABITADAS EN EL PERIODO ESTABLECIDO DE ACUERDO A LA NORMATIVA.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE CERTIFICACION CATASTRAL (PARA LA REGULARIZACION DEL DERECHO PROPIETARIO LEY 247) EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE EN COCHABAMBA": {content: "10 DIAS HABILES, EN CASO DE NO TENER OBSERVACION EN LOS REQUISITOS.",
    },
    
    "SE PUEDE HACER DE MANERA VIRTUAL EL TRAMITE EN COCHABAMBA": {
    content: "AUN NO ES POSIBLE REALIZAR EL TRAMITE DE MANERA VIRTUAL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA CERTIFICACION CATASTRAL (PARA LA REGULARIZACION DEL DERECHO PROPIETARIO LEY 247) EN COCHABAMBA" :{content: "LOS REQUISITOS SONORDEN JUDICIAL O MEMORIAL SOLICITANDO CERTIFICACIONES PARA USUCAPION O ADJUDICACION.INFORME TOPOGRAFICO ELABORADO EN LA SUB ALCALDIA CORRESPONDIENTE.PLANO ELABORADO POR EL TOPOGRAFO DE LA SUB ALCALDIA.INFORME DE REMISION DEL TRAMITE DE USUCAPION O ADJUDICACION ELABORADO EN LA SUB ALCALDIA CORRESPONDIENTE.", 
    },
    
    "QUE ES EL TRAMITE CERTIFICACION CATASTRAL (PARA PREDIOS MUNICIPALES 207 EN COCHABAMBA)" : {content: "ES EL DOCUMENTO OFICIAL POR EL CUAL EL GOBIERNO AUTONOMO MUNICIPAL DE COCHABAMBA, QUE MUESTRA LA ULTIMA INFORMACION TECNICO, LEGAL QUE REGISTRA EL INMUEBLE O UNIDAD CATASTRAL DENTRO EL MUNICIPIO, DENTRO EL PROCESO DE LA LEY 207 PARA EL REGISTRO DE AREAS VERDES Y EQUIPAMIENTO A FAVOR DEL MUNICIPIO.",
    },
    
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE CERTIFICACION CATASTRAL (PARA PREDIOS MUNICIPALES 207 EN COCHABAMBA)": {
    content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO. ",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE CERTIFICACION CATASTRAL (PARA PREDIOS MUNICIPALES 207 EN COCHABAMBA)": {content: "10 DIAS HABILES, EN CASO DE NO TENER OBSERVACION EN LOS REQUISITOS.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA  CERTIFICACION CATASTRAL (PARA PREDIOS MUNICIPALES 207) EN COCHABAMBA": {content: "LOS REQUISITOS SON ORDEN JUDICIAL O MEMORIAL SOLICITANDO CERTIFICACIONES PARA USUCAPION O ADJUDICACION. INFORME TOPOGRAFICO ELABORADO EN LA SUB ALCALDIA CORRESPONDIENTE.",
    },
    
    "QUE ES EL TRAMITE CERTIFICACION CATASTRAL (POR ORDEN JUDICIAL) EN COCHABAMBA": {
    content: "ES EL CERTIFICADO DE REGISTRO CATASTRAL QUE MUESTRA LA ULTIMA INFORMACION TECNICO, LEGAL QUE REGISTRA EL INMUEBLE O UNIDAD CATASTRAL DENTRO EL MUNICIPIO SOLICITADO POR ORDEN JUDICIAL O DE LA FISCALIA PARA UN PROCESO DETERMINADO.",
    },
    
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE CERTIFICACION CATASTRAL (POR ORDEN JUDICIAL) EN COCHABAMBA": {content: "ASUNTOS JURIDICOS.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE CERTIFICACION CATASTRAL (POR ORDEN JUDICIAL) EN COCHABAMBA": {content: "2 DIAS HABILES ",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA CERTIFICACION CATASTRAL (POR ORDEN JUDICIAL) EN COCHABAMBA": {content: "EL REQUISITO ES UNA  SOLICITUD DERIVADA POR LA DIRECCION DE ASUNTOS JURIDICOS.",
    },
    
    "QUE ES EL TRAMITE LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LOS PLANOS QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, DE UN PREDIO EN ESPECIFICO.",
    },
    
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "ARCHIVO DE PLANOS.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA42) - 69.00 BOLIVIANOS.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).TIMBRE MUNICIPAL DE 10.00 BOLIVIANOS.",
    },
    "QUE ES EL TRAMITE LEGALIZACION DE PLANOS PH O URBANIZACION (LAMINA ENTERA) EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS LAMINAS ENTERAS DE LOS PLANOS DE URBANIZACIONES O PROPIEDADES HORIZONTALES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, PREVIA AUTORIZACION DE LA OTB O EL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
    
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE LEGALIZACION DE PLANOS PH O URBANIZACION (LAMINA ENTERA) EN COCHABAMBA": {content: "ARCHIVO DE PLANOS.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DEL TRAMITE LEGALIZACION DE PLANOS PH O URBANIZACION (LAMINA ENTERA) EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA LEGALIZACION DE PLANOS PH O URBANIZACION. (LAMINA ENTERA) EN COCHABAMBA": {content: "LOS REQUISITOS SON TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).5 TIMBRES MUNICIPALES DE 10 BOLIVIANOS.AUTORIZACION DE LA OTB O DEL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
     
    "QUE ES EL TRAMITE LEGALIZACION DE RESOLUCION  EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS RESOLUCIONES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO  DE PLANOS, DE UN PREDIO EN ESPECIFICO.",
    },
    "COMO HAGO EL TRAMITE LEGALIZACION DE RESOLUCION  EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS RESOLUCIONES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO  DE PLANOS, DE UN PREDIO EN ESPECIFICO.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE  DEL TRAMITE LEGALIZACION DE RESOLUCION  EN COCHABAMBA": {content: "ARCHIVO DE PLANOS.",
    },
    
    "CUANTO ES LA DURACION DEL  TRAMITE LEGALIZACION DE RESOLUCION  EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA LEGALIZACION DE RESOLUCION EN COCHABAMBA": {content: "SONTITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).TIMBRE MUNICIPAL DE 10.00 BOLIVIANOS.",
    },
    
     
    "QUE ES EL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS LAMINAS ENTERAS DE LOS PLANOS DE URBANIZACIONES O PROPIEDADES HORIZONTALES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, PREVIA AUTORIZACION DE LA OTB O EL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
    "COMO HAGO EL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS LAMINAS ENTERAS DE LOS PLANOS DE URBANIZACIONES O PROPIEDADES HORIZONTALES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, PREVIA AUTORIZACION DE LA OTB O EL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA EL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION DA41 - 22.00 BOLIVIANOS.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).PLANO DEL LOTE (FOTOCOPIA LEGALIZADA).PLANO DE UNIDAD DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).",
    },
     
    "QUE ES EL TRAMITE DE TRANSCRIPCION EN COCHABAMBA": {content: "ES EL PROCEDIMIENTO QUE PERMITE LA TRANSCRIPCION DE UN REGISTRO CATASTRAL ANTIGUO ENTREGADO POR EL INTERESADO DENTRO EL SISTEMA DE GESTION CATASTRAL, ACOMPANADA DE LA DOCUMENTACION DE RESPALDO.",
    },
    "COMO HAGO EL TRAMITE DE TRANSCRIPCION EN COCHABAMBA": {content: "ES EL PROCEDIMIENTO QUE PERMITE LA TRANSCRIPCION DE UN REGISTRO CATASTRAL ANTIGUO ENTREGADO POR EL INTERESADO DENTRO EL SISTEMA DE GESTION CATASTRAL, ACOMPANADA DE LA DOCUMENTACION DE RESPALDO.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE TRANSCRIPCION EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE TRANSCRIPCION EN COCHABAMBA": {content: "10 DIAS HABILES.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA TRANSCRIPCION EN COCHABAMBA": {content: "LOS REQUISITOS SONDERECHO DE ADMISION DA41 - 22.00 BOLIVIANOS.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).PLANO DEL LOTE (FOTOCOPIA LEGALIZADA).PLANO DE UNIDAD DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).REGISTRO CATASTRAL ORIGINAL.IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).",
    },
    
     
    "QUE ES EL TRAMITE DE HOMOLOGACION DE CODIGO CATASTRAL EN COCHABAMBA": {content: "ES LA ACTUALIZACION DE CODIGO CATASTRAL DE ALFANUMERICO A LA NUEVA CODIFICACION, VERIFICANDO SUS ANTECEDENTES Y BUSCANDO EN LA BASE DE DATOS QUE NO HUBIERA NINGUNA OBSERVACION.",
    },
    
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE HOMOLOGACION DE CODIGO CATASTRAL EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE HOMOLOGACION DE CODIGO CATASTRAL EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA HOMOLOGACION DE CODIGO CATASTRAL EN COCHABAMBA": {content: "LOS REQUISITOS SON PLANO DE LOTE O UBICACION.IMPUESTOS (FOTOCOPIA ULTIMA GESTION).REGISTRO CATASTRAL.",
    },
    
    "QUE ES EL TRAMITE DE ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {content: "ES UNA ACTUALIZACION REALIZADA CON UN AVALUO DE DECLARACION JURADA PARA LA MODIFICACION DE DATOS TECNICOS,PREVIA REVISION DIGITAL EN LA BASE DE DATOS DE CATASTRO Y USO DE HERRAMIENTAS INFORMATICAS.",
    },
    "COMO HAGO EL TRAMITE DE ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {content: "ES UNA ACTUALIZACION REALIZADA CON UN AVALUO DE DECLARACION JURADA PARA LA MODIFICACION DE DATOS TECNICOS,PREVIA REVISION DIGITAL EN LA BASE DE DATOS DE CATASTRO Y USO DE HERRAMIENTAS INFORMATICAS.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE EL TRAMITE DE ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {
    content: "LOS REQUISITOS SON TITULO DE PROPIEDAD MAS FOLIO REAL (FOTOCOPIA SIMPLE).COPIA DE PLANO DE LOTE O PH.FOTOCOPIA DE CARNET DE IDENTIDAD.REGISTRO CATASTRAL (OPCIONAL).IMPUESTOS (BOLETA DE LAS 5 ULTIMAS GESTIONES).",
    },
    
    "QUE ES EL TRAMITE DE ASISTENCIA TRAMITE DE VISACION DE MINUTAS EN COCHABAMBA": {content: "CONSISTE EN LA VERIFICACION Y ACTUALIZACION DE DATOS EN EL SISTEMA CATASTRAL, SISTEMA RUAT Y SISTEMA DE  VISACION DE TRANSFERENCIA.",
    },
    "COMO HAGO EL TRAMITE DE ASISTENCIA TRAMITE DE VISACION DE MINUTAS EN COCHABAMBA": {content: "CONSISTE EN LA VERIFICACION Y ACTUALIZACION DE DATOS EN EL SISTEMA CATASTRAL, SISTEMA RUAT Y SISTEMA DE  VISACION DE TRANSFERENCIA.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE ASISTENCIA TRAMITE DE VISACION DE MINUTAS EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE ASISTENCIA TRAMITE DE VISACION DE MINUTAS EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "SE PUEDE HACER DE MANERA VIRTUAL DEL TRAMITE DE ASISTENCIA TRAMITE DE VISACION DE MINUTAS EN COCHABAMBA": {content: "SE INICIA CON EL LLENADO DE DECLARACION JURADA, RECABADA EN LA PAGINA WEB DE ATM",
    },
    
    "CUALES SON  LOS REQUISITOS PARA LA ASISTENCIA TRAMITE DE VISACION DE MINUTAS EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION (DA99) 22.00 BOLIVIANOS.LLENADO DE DECLARACION JURADA, RECABAR EN LA PAGINA WEB HTTP.//ATM.COCHABAMBA.BO.FOTOCOPIA DE CARNET DE IDENTIDAD DE LAS PARTES INTERVINIENTES.ORIGINAL Y FOTOCOPIA DEL TITULO DE PROPIEDAD Y FOLIO REAL ACTUALIZADO.FOTOCOPIA DE REGISTRO CATASTRAL O CERTIFICADO DE REGISTRO CATASTRAL.FOTOCOPIA DEL PLANO DEL LOTE O CONSTRUCCION.ORIGINAL DEL DOCUMENTO OBJETO DE TRANSFERENCIA.ORIGINAL Y FOTOCOPIA DEL PODER DE REPRESENTACION LEGAL (SI CORRESPONDE).IMPUESTOS AL DIA (FOTOCOPIA ULTIMA GESTION) NO CONSIGNAR MORA TRIBUTARIA EN EL INMUEBLE, OBJETO DE TRANSFERENCIA A LA FECHA DE REGISTRO.",
    },
    
    "QUE ES EL TRAMITE DE APERTURA DE CASOS SIREC (RUAT) EN COCHABAMBA": {content: "CONSISTE EN DAR SOLUCION A CASOS CON OBSERVACIONES EN EL SISTEMA RUAT, SOBRE LAS SUPERFICIES DEL PAGO IMPOSITIVO. SOLUCIONES COORDINADAS CON EL SOPORTE RUAT NACIONAL.",
    },
    "COMO HAGO EL TRAMITE DE APERTURA DE CASOS SIREC (RUAT) EN COCHABAMBA": {content: "CONSISTE EN DAR SOLUCION A CASOS CON OBSERVACIONES EN EL SISTEMA RUAT, SOBRE LAS SUPERFICIES DEL PAGO IMPOSITIVO. SOLUCIONES COORDINADAS CON EL SOPORTE RUAT NACIONAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE APERTURA DE CASOS SIREC (RUAT) EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE APERTURA DE CASOS SIREC (RUAT) EN COCHABAMBA": {content: "10 DIAS HABILES.",
    },
    
    "CUALES SON LOS REQUISITOS PARA EL TRAMITE DE APERTURA DE CASOS SIREC (RUAT) EN COCHABAMBA.": {content: "LOS REQUISITOS SONPROFORMA CON ANTECEDENTES Y PROBLEMA DEL CASO.CERTIFICADO DE ESTABILIDAD ESTRUCTURAL( OPCIONAL) SOLO CUANDO SE TRATE DE REGULARIZACIONES O AMPLIACION DE PERMISO.",
    },
    
    "QUE ES EL TRAMITE DE BAJAS DE CODIGOS (MATRICIALES, FRACCIONAMIENTOS, DUPLICADOS, MAL EMPADRONADOS)  EN COCHABAMBA": {content: "(MATRICIALES, FRACCIONAMIENTOS, DUPLICADOS, Y MAL EMPADRONADOS. ES EL ANALISIS TECNICO Y LEGAL PARA DAR SOLUCIONES A MATRICES QUE SIGUEN GENERANDO IMPUESTOS, FRACCIONAMIENTOS QUE NO SE DESLINDAN DEL NUMERO MATRIZ, NUMEROS DE INMUEBLES DUPLICADOS QUE LE GENERAN DOBLE TRIBUTACION, Y MAL EMPADRONADOS POR ERRORES TECNICOS POR INSUFICIENCIA DE DATOS.",
    },
    "COMO HAGO EL TRAMITE DE BAJAS DE CODIGOS (MATRICIALES, FRACCIONAMIENTOS, DUPLICADOS, MAL EMPADRONADOS)  EN COCHABAMBA": {content: "(MATRICIALES, FRACCIONAMIENTOS, DUPLICADOS, Y MAL EMPADRONADOS. ES EL ANALISIS TECNICO Y LEGAL PARA DAR SOLUCIONES A MATRICES QUE SIGUEN GENERANDO IMPUESTOS, FRACCIONAMIENTOS QUE NO SE DESLINDAN DEL NUMERO MATRIZ, NUMEROS DE INMUEBLES DUPLICADOS QUE LE GENERAN DOBLE TRIBUTACION, Y MAL EMPADRONADOS POR ERRORES TECNICOS POR INSUFICIENCIA DE DATOS.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE BAJAS DE CODIGOS (MATRICIALES, FRACCIONAMIENTOS, DUPLICADOS, MAL EMPADRONADOS)  EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE BAJAS DE CODIGOS (MATRICIALES, FRACCIONAMIENTOS, DUPLICADOS, MAL EMPADRONADOS)  EN COCHABAMBA": {content: "15 DIAS HABILES.",
    },
    
    "CUALES SON LOS REQUISITOS PARA EL TRAMITE DE BAJAS DE CODIGOS (MATRICIALES, FRACCIONAMIENTOS, DUPLICADOS, MAL EMPADRONADOS) EN COCHABAMBA": {content: "LOS REQUISITOS SON SOLICITUD DEL CONTRIBUYENTE; LEGAL TRIBUTARIO, FISCALIZACION.RESOLUCION TECNICA ADMINISTRATIVA PARA ANULAR MIXTAS.REGISTRO CATASTRAL.FOLIO REAL (FOTOCOPIA SIMPLE).",
    },
     
    "QUE ES EL TRAMITE DE AVALUO CATASTRAL PARA REGISTRO DE PROPIEDAD HORIZONTAL  EN DERECHOS REALES EN COCHABAMBA": {content: "EN ESTE TRAMITE SE DEMUESTRA EL VALOR CATASTRAL DEL PREDIO Y CONSTRUCCION DEL INMUEBLE PARA DISTINTOS TIPOS DE TRAMITES EN DDRR.",
    },
    "COMO HAGO EL TRAMITE DE AVALUO CATASTRAL PARA REGISTRO DE PROPIEDAD HORIZONTAL  EN DERECHOS REALES EN COCHABAMBA": {content: "EN ESTE TRAMITE SE DEMUESTRA EL VALOR CATASTRAL DEL PREDIO Y CONSTRUCCION DEL INMUEBLE PARA DISTINTOS TIPOS DE TRAMITES EN DDRR.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE AVALUO CATASTRAL PARA REGISTRO DE PROPIEDAD HORIZONTAL  EN DERECHOS REALES EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE AVALUO CATASTRAL PARA REGISTRO DE PROPIEDAD HORIZONTAL  EN DERECHOS REALES EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA EL TRAMITE DE AVALUO CATASTRAL PARA REGISTRO DE PH EN DDRR EN COCHABAMBA": {content: "LOS REQUISITOS SON SOLICITUD DIRIGIDA AL ALCALDE.RESOLUCION TECNICA (FOTOCOPIA SIMPLE).REGISTRO CATASTRAL (FOTOCOPIA SIMPLE).TITULO DE PROPIEDAD MAS FOLIO REAL (FOTOCOPIA SIMPLE).FOTOCOPIA PLANOS DE CONSTRUCCION Y/O ADECUACION DE PROPIEDAD HORIZONTAL.FORMULARIO DE DECLARACION JURADA DE ACTUALIZACION DE DATOS TECNICOS.FORMULARIO UNICO DE RECAUDACIONES (FUR DA46).IMPUESTO (FOTOCOPIA 5 ULTIMAS GESTIONES).PLANOS DE LOTE APROBADOS.BOLETA DE LIQUIDACION.",
    },
    
    
    "QUE ES EL TRAMITE DE DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "ES EL DESGLOSE DE SUPERFICIES EN PROPIEDADES HORIZONTALES, DONDE INCLUYE EL AREA PRIVADA COMO EL AREA COMUN DE LAS CONSTRUCCIONES.",
    },
    "COMO HAGO EL TRAMITE DE DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "ES EL DESGLOSE DE SUPERFICIES EN PROPIEDADES HORIZONTALES, DONDE INCLUYE EL AREA PRIVADA COMO EL AREA COMUN DE LAS CONSTRUCCIONES.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "1 DIA HABIL.",
    },
    
    "CUALES SON LOS REQUISITOS PARA EL DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "LOS REQUISITOS SON RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (FOTOCOPIA LEGALIZADA).IMPUESTOS (FOTOCOPIA ULTIMA GESTION).FOLIO REAL (FOTOCOPIA SIMPLE).",
    },
     
    "QUE ES EL TRAMITE DE AVALUO CATASTRAL A SOLICITUD DE PARTE (BASE CIERTA)  EN COCHABAMBA": {content: "ES LA ACTUALIZACION REAL DE LOS DATOS TECNICOS PARA SU RESPECTIVO PAGO IMPOSITIVO, CON VERIFICACION EN SITIO.",
    },
    "COMO HAGO EL TRAMITE DE AVALUO CATASTRAL A SOLICITUD DE PARTE (BASE CIERTA)  EN COCHABAMBA": {content: "ES LA ACTUALIZACION REAL DE LOS DATOS TECNICOS PARA SU RESPECTIVO PAGO IMPOSITIVO, CON VERIFICACION EN SITIO.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE AVALUO CATASTRAL A SOLICITUD DE PARTE (BASE CIERTA)  EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE AVALUO CATASTRAL A SOLICITUD DE PARTE (BASE CIERTA)  EN COCHABAMBA": {content: "3 DIAS HABILES.",
    },
    
    "CUALES SON LOS REQUISITOS PARA EL TRAMITE DE AVALUO CATASTRAL A SOLICITUD DE PARTE (BASE CIERTA) EN COCHABAMBA": {content: "LOS REQUISITOS SON DECLARACION JURADA REALIZADA POR EL ARQUITECTO EXTERNO.FOLIO REAL (FOTOCOPIA SIMPLE).REGISTRO CATASTRAL (FOTOCOPIA SIMPLE).IMPUESTOS (FOTOCOPIA ULTIMA GESTION).FOTOGRAFIAS DE RESPALDO DE LA CONSTRUCCION .PLANO DE LOTE APROBADO.PLANOS DE CONSTRUCCION APROBADOS.",
    },
     
    "QUE ES EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (FUSION O FRACCIONAMIENTO) EN COCHABAMBA": {content: "ES LA DETERMINACION DE UBICACION DE UN PREDIO EN CARTOGRAFIA, RESULTADO DE LAS NUEVAS APROBACIONES DE PLANOS.",
    },
    "COMO HAGO EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (FUSION O FRACCIONAMIENTO) EN COCHABAMBA": {content: "ES LA DETERMINACION DE UBICACION DE UN PREDIO EN CARTOGRAFIA, RESULTADO DE LAS NUEVAS APROBACIONES DE PLANOS.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (FUSION O FRACCIONAMIENTO) EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (FUSION O FRACCIONAMIENTO) EN COCHABAMBA": {content: "INMEDIATO.",
    },
    
    
    "CUALES SON LOS REQUISITOS PARA LA ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (FUSION O FRACCIONAMIENTO) EN COCHABAMBA": {content: "LOS REQUISITOS SON REGISTRO CATASTRAL AL DIA DE LA MATRIZ (ASIENTOS).COPIA DE PLANO APROBADO DE FUSION O DIVISION.FOLIO REAL (FOTOCOPIA SIMPLE).IMPUESTOS (FOTOCOPIA ULTIMA GESTION).",
    },
    
    "QUE ES EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (NUEVOS SECTORIALES Y PLANIMETRIAS) EN COCHABAMBA": {content: "(NUEVOS SECTORIALES Y PLANIMETRIAS). ES LA DETERMINACION DE UBICACION DE UN PREDIO EN CARTOGRAFIA, RESULTADO DE LAS NUEVAS APROBACIONES DE LOS SECTORIALES Y PLANIMETRIAS EN COORDINACION CON ORDENAMIENTO TERRITORIAL.",
    },
    "COMO HAGO EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (NUEVOS SECTORIALES Y PLANIMETRIAS) EN COCHABAMBA": {content: "(NUEVOS SECTORIALES Y PLANIMETRIAS). ES LA DETERMINACION DE UBICACION DE UN PREDIO EN CARTOGRAFIA, RESULTADO DE LAS NUEVAS APROBACIONES DE LOS SECTORIALES Y PLANIMETRIAS EN COORDINACION CON ORDENAMIENTO TERRITORIAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (NUEVOS SECTORIALES Y PLANIMETRIAS) EN COCHABAMBA": {content: "LA DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (NUEVOS SECTORIALES Y PLANIMETRIAS) EN COCHABAMBA": {content: "5 DIAS HABILES.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (NUEVOS SECTORIALES Y PLANIMETRIAS) EN COCHABAMBA": {content: "LOS REQUISITOS SON COPIA DEL PLANO SECTORIAL.COPIA DEL PLANO EN DIGITAL.FOLIO REAL.IMPUESTOS (FOTOCOPIA ULTIMA GESTION).",
    },
    
    "QUE ES EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (ACTUALIZACION) EN COCHABAMBA": {content: "ES EL AJUSTE SEGUN PLANOS APROBADOS, QUE DIFIEREN DE LOS FISICO CONSOLIDADO Y LA CORRECCION DE ALGUN TIPO DE INCONSISTENCIA.",
    },
    "COMO HAGO EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (ACTUALIZACION) EN COCHABAMBA": {content: "ES EL AJUSTE SEGUN PLANOS APROBADOS, QUE DIFIEREN DE LOS FISICO CONSOLIDADO Y LA CORRECCION DE ALGUN TIPO DE INCONSISTENCIA.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (ACTUALIZACION) EN COCHABAMBA": {content: "LA DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (ACTUALIZACION) EN COCHABAMBA": {content: "INMEDIATO.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (ACTUALIZACION) EN COCHABAMBA": {content: "LOS REQUISITOS SON COPIA DE PLANO (IDENTIFICAR PREDIO).FOLIO REAL (FOTOCOPIA SIMPLE).IMPUESTOS (FOTOCOPIA ULTIMA GESTION).",
    },
     
    "QUE ES EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (GENERACION DE MATRICES) EN COCHABAMBA ": {content: "ES LA DETERMINACION DE POLIGONOS EN CARTOGRAFIA DE PREDIOS DE MAYOR SUPERFICIE, PARA DAR CURSO AL PAGO DE IMPUESTOS Y TRAMITES ESPECIFICOS DE MI PLANO.",
    },
    "COMO HAGO EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (GENERACION DE MATRICES) EN COCHABAMBA ": {content: "ES LA DETERMINACION DE POLIGONOS EN CARTOGRAFIA DE PREDIOS DE MAYOR SUPERFICIE, PARA DAR CURSO AL PAGO DE IMPUESTOS Y TRAMITES ESPECIFICOS DE MI PLANO.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (GENERACION DE MATRICES) EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (GENERACION DE MATRICES) EN COCHABAMBA": {content: "INMEDIATO.",
    },
    
    
    "CUALES SON LOS REQUISITOS PARA LA ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (GENERACION DE MATRICES) EN COCHABAMBA": {content: "LOS REQUISITOS SONCOPIA PLANO GEOREFERENCIADO.TITULO DE PROPIEDAD MAS FOLIO REAL (FOTOCOPIA SIMPLE).IMPUESTOS.TITULO EJECUTORIAL.",
    },
    
    "QUE ES EL TRAMITE DE ASIGNACION DE GEO CODIGOS EN COCHABAMBA": {content: "SON POLIGONOS QUE SE ENCUENTRAN FUERA DE LA MANCHA URBANA.",
    },
    "COMO HAGO EL TRAMITE DE ASIGNACION DE GEO CODIGOS EN COCHABAMBA": {content: "SON POLIGONOS QUE SE ENCUENTRAN FUERA DE LA MANCHA URBANA.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE ASIGNACION DE GEO CODIGOS EN COCHABAMBA": {content: "LA DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    "CUANTO ES LA DURACION DEL TRAMITE DE ASIGNACION DE GEO CODIGOS EN COCHABAMBA": {content: "INMEDIATO.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA ASIGNACION DE GEO CODIGOS EN COCHABAMBA": {content: "LOS REQUISITOS SON COPIA PLANO GEOREFERENCIADO.TITULO DE PROPIEDAD MAS FOLIO REAL (FOTOCOPIA SIMPLE).IMPUESTOS.TITULO EJECUTORIAL.",
    },
    "QUE ES EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (LEY 204 MI PLANO) EN COCHABAMBA": {content: "ES LA DETERMINACION DE UBICACION DE UN PREDIO EN CARTOGRAFIA, A LA PRESENTACION DE UN PLANO REFERENCIAL.",
    },
    "COMO HAGO EL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (LEY 204 MI PLANO) EN COCHABAMBA": {content: "ES LA DETERMINACION DE UBICACION DE UN PREDIO EN CARTOGRAFIA, A LA PRESENTACION DE UN PLANO REFERENCIAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (LEY 204 MI PLANO) EN COCHABAMBA": {content: "LA DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },
    
    "CUANTO ES LA DURACION DEL TRAMITE DE ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (LEY 204 MI PLANO) EN COCHABAMBA": {content:"INMEDIATO.",
    },
    
    "CUALES SON LOS REQUISITOS PARA LA ASIGNACION O ACTUALIZACION DE CODIGOS CATASTRALES (LEY 204 MI PLANO) EN COCHABAMBA": {content: "LOS REQUISITOS SON COPIA SIMPLE DEL PLANO REFERENCIAL.TITULO DE PROPIEDAD MAS FOLIO REAL (FOTOCOPIA SIMPLE).IMPUESTOS (FOTOCOPIA ULTIMA GESTION).",
    },
    
    "QUE ES EL TRAMITE DE APROBACION DE PLANO DE DIVISION EN PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "LA APROBACION DEL PLANO DE DIVISION EN PROPIEDAD HORIZONTAL ES EL PROCESO ADMINISTRATIVO POR EL CUAL EL O LOS PROPIETARIOS DE UN BIEN INMUEBLE, ADECUAN EL MISMO AL REGIMEN DE PROPIEDAD HORIZONTAL DE ACUERDO CON LAS DISPOSICIONES EMANADAS DE LA LEY NACIONAL DE PROPIEDAD HORIZONTAL DEL 30 DE DICIEMBRE DE 1949, EL CODIGO CIVIL Y LA NORMATIVA MUNICIPAL EN VIGENCIA.",
    },
    "COMO HAGO EL TRAMITE DE APROBACION DE PLANO DE DIVISION EN PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "LA APROBACION DEL PLANO DE DIVISION EN PROPIEDAD HORIZONTAL ES EL PROCESO ADMINISTRATIVO POR EL CUAL EL O LOS PROPIETARIOS DE UN BIEN INMUEBLE, ADECUAN EL MISMO AL REGIMEN DE PROPIEDAD HORIZONTAL DE ACUERDO CON LAS DISPOSICIONES EMANADAS DE LA LEY NACIONAL DE PROPIEDAD HORIZONTAL DEL 30 DE DICIEMBRE DE 1949, EL CODIGO CIVIL Y LA NORMATIVA MUNICIPAL EN VIGENCIA.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE APROBACION DE PLANO DE DIVISION EN PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "DEPARTAMENTO DE ADMINISTRACION URBANA-DIRECCION DE URBANISMO.",
    },
    "CUANTO ES LA DURACION DEL TRAMITE DE APROBACION DE PLANO DE DIVISION EN PROPIEDAD HORIZONTAL EN COCHABAMBA": {content:"15 DIAS HABILES.",
    },
    "QUE OBTENGO AL FINALIZAR EL TRAMITE  DE APROBACION DE PLANO DE DIVISION EN PROPIEDAD HORIZONTAL  EN COCHABAMBA": {content: "RESOLUCION ADMINISTRATIVA MUNICIPAL PLANO APROBADO DE DIVISION EN PROPIEDAD HORIZONTAL.",
    },
    
    "QUE ES EL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content: "ES EL REGISTRO DE LA INFORMACION DEL BIEN INMUEBLE TECNICO Y LEGAL, YA SEA EN LA CREACION DE UNA NUEVA UNIDAD CATASTRAL O CUANDO EXISTAN CAMBIOS EN EL ESTADO FISICO DEL INMUEBLE, PROPIETARIOS, NUEVAS CONSTRUCCIONES O MEJORA DE LAS MISMAS.",
    },
    "COMO HAGO EL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content: "ES EL REGISTRO DE LA INFORMACION DEL BIEN INMUEBLE TECNICO Y LEGAL, YA SEA EN LA CREACION DE UNA NUEVA UNIDAD CATASTRAL O CUANDO EXISTAN CAMBIOS EN EL ESTADO FISICO DEL INMUEBLE, PROPIETARIOS, NUEVAS CONSTRUCCIONES O MEJORA DE LAS MISMAS.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE REGISTRO CATASTRAL EN COCHABAMBA": {content: "10 DIAS CALENDARIO APROXIMADAMENTE, EN CASO DE NO TENER OBSERVACION EN LOS REQUISITOS.",
    },


    "CUALES SON LOS REQUISITOS PARA EL REGISTRO CATASTRAL EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA40) - 32.00 BOLIVIANOS.MEMORIAL DIRIGIDO AL HONORABLE ALCALDE MUNICIPAL (ORIGINAL Y FOTOCOPIA SIMPLE) O FORMULARIO DE SOLICITUD DE TRAMITES CATASTRALES.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).PLANO DEL LOTE (FOTOCOPIA LEGALIZADA).PLANO DE UNIDAD DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE PROPIETARIOS (FOTOCOPIA SIMPLE).ULTIMO REGISTRO CATASTRAL (FOTOCOPIA SIMPLE).",
    },


    "QUE ES EL TRAMITE DE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "ES EL DOCUMENTO DE UNA O VARIAS PERSONAS NATURALES O JURIDICAS, QUE REPRESENTA SU PROPIEDAD SOBRE UN BIEN INMUEBLE A TRAVES DE LA ASIGNACION DE UN CODIGO CATASTRAL. CUENTA CON INFORMACION LEGAL Y TECNICA, CUANDO EXISTE UN CAMBIO EN EL PREDIO AL REGIMEN DE PROPIEDAD HORIZONTAL, PROPORCIONANDO NUEVOS CODIGOS CATASTRALES Y EL EMPADRONAMIENTO AL REGISTRO UNICO PARA ADMINISTRACION TRIBUTARIA MUNICIPAL DE LAS NUEVAS UNIDADES CATASTRALES.",
    },
    "COMO HAGO EL TRAMITE DE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "ES EL DOCUMENTO DE UNA O VARIAS PERSONAS NATURALES O JURIDICAS, QUE REPRESENTA SU PROPIEDAD SOBRE UN BIEN INMUEBLE A TRAVES DE LA ASIGNACION DE UN CODIGO CATASTRAL. CUENTA CON INFORMACION LEGAL Y TECNICA, CUANDO EXISTE UN CAMBIO EN EL PREDIO AL REGIMEN DE PROPIEDAD HORIZONTAL, PROPORCIONANDO NUEVOS CODIGOS CATASTRALES Y EL EMPADRONAMIENTO AL REGISTRO UNICO PARA ADMINISTRACION TRIBUTARIA MUNICIPAL DE LAS NUEVAS UNIDADES CATASTRALES.",
    },

    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "15 DIAS CALENDARIO APROXIMADAMENTE, EN CASO DE NO TENER OBSERVACION EN LOS REQUISITOS.",
    },

    "CUALES SON LOS REQUISITOS PARA EL REGISTRO CATASTRAL DE ADECUACION A PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA42) - 50.00 BOLIVIANOS.MEMORIAL DIRIGIDO AL HONORABLE ALCALDE MUNICIPAL (ORIGINAL Y FOTOCOPIA SIMPLE) O FORMULARIO DE SOLICITUD DE TRAMITES CATASTRALES.TITULO DE ADECUACION A PROPIEDAD HORIZONTAL CON SUS RESPECTIVOS FOLIOS REALES (FOTOCOPIA LEGALIZADA).TITULO DE PROPIEDAD CON SU RESPECTIVO FOLIO REAL (FOTOCOPIA LEGALIZADA).RESOLUCION EJECUTIVA DE APROBACION DE ADECUACION DE PROPIEDAD HORIZONTAL (FOTOCOPIA LEGALIZADA).PLANO DE ADECUACION A PROPIEDAD HORIZONTAL (FOTOCOPIA LEGALIZADA).PLANO DE LOTE O URBANIZACION (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).ULTIMO REGISTRO CATASTRAL (FOTOCOPIA SIMPLE).FOLDER.",
    },

    "QUE ES EL TRAMITE DE LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LOS PLANOS QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, DE UN PREDIO EN ESPECIFICO.",
    },
    "COMO HAGO EL TRAMITE DE LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LOS PLANOS QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, DE UN PREDIO EN ESPECIFICO.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "ARCHIVO DE PLANOS.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "1 DIA HABIL.",
    },

    "CUALES SON LOS REQUISITOS PARA LA LEGALIZACION DE PLANOS (LOTE, CONSTRUCCION O UNIDAD DE PROPIEDAD HORIZONTAL EN COCHABAMBA": {content: "LOS REQUISITOS SON  DERECHO DE ADMISION (FORMULARIO UNICO DE RECAUDACIONES FUR DA42) - 69.00 BOLIVIANOS.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).TIMBRE MUNICIPAL DE 10.00 BOLIVIANOS.",
    },

    "QUE ES EL TRAMITE DE LEGALIZACION DE PLANOS PH O URBANIZACION (LAMINA ENTERA) EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS LAMINAS ENTERAS DE LOS PLANOS DE URBANIZACIONES O PROPIEDADES HORIZONTALES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, PREVIA AUTORIZACION DE LA OTB O EL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
    "COMO HAGO EL TRAMITE DE LEGALIZACION DE PLANOS PH O URBANIZACION (LAMINA ENTERA) EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS LAMINAS ENTERAS DE LOS PLANOS DE URBANIZACIONES O PROPIEDADES HORIZONTALES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, PREVIA AUTORIZACION DE LA OTB O EL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE LEGALIZACION DE PLANOS PH O URBANIZACION (LAMINA ENTERA) EN COCHABAMBA": {content: "ARCHIVO DE PLANOS.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE LEGALIZACION DE PLANOS PH O URBANIZACION (LAMINA ENTERA) EN COCHABAMBA": {content: "1 DIA HABIL.",
    },

    "CUALES SON LOS REQUISITOS PARA LA LEGALIZACION DE PLANOS PH O URBANIZACION. (LAMINA ENTERA) EN COCHABAMBA": {content: "LOS REQUISITOS SON TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).5 TIMBRES MUNICIPALES DE 10 BOLIVIANOS.AUTORIZACION DE LA OTB O DEL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },

    "QUE ES EL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS LAMINAS ENTERAS DE LOS PLANOS DE URBANIZACIONES O PROPIEDADES HORIZONTALES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, PREVIA AUTORIZACION DE LA OTB O EL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
    "COMO HAGO EL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "EL TRAMITE CONSISTE EN LA OBTENCION DE COPIAS LEGALIZADAS DE LAS LAMINAS ENTERAS DE LOS PLANOS DE URBANIZACIONES O PROPIEDADES HORIZONTALES QUE SE ENCUENTRAN CUSTODIADOS EN ARCHIVO DE PLANOS, PREVIA AUTORIZACION DE LA OTB O EL DIRECTORIO DE LA PROPIEDAD HORIZONTAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE PRE REVISION EN COCHABAMBA": {content: "1 DIA HABIL.",
    },

    "CUALES SON LOS REQUISITOS PARA LA PRE REVISION EN COCHABAMBA": {content: "LOS REQUISITOS SON DERECHO DE ADMISION DA41 - 22.00 BOLIVIANOS.TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).PLANO DEL LOTE (FOTOCOPIA LEGALIZADA).PLANO DE UNIDAD DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).",
    },

    "QUE ES LA TRANSCRIPCION EN COCHABAMBA": {content: "ES EL PROCEDIMIENTO QUE PERMITE LA TRANSCRIPCION DE UN REGISTRO CATASTRAL ANTIGUO ENTREGADO POR EL INTERESADO DENTRO EL SISTEMA DE GESTION CATASTRAL, ACOMPANADA DE LA DOCUMENTACION DE RESPALDO",
    },
    
    "COMO HAGO LA TRANSCRIPCION EN COCHABAMBA": {content: "ES EL PROCEDIMIENTO QUE PERMITE LA TRANSCRIPCION DE UN REGISTRO CATASTRAL ANTIGUO ENTREGADO POR EL INTERESADO DENTRO EL SISTEMA DE GESTION CATASTRAL, ACOMPANADA DE LA DOCUMENTACION DE RESPALDO",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL TRAMITE DE TRANSCRIPCION EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE TRANSCRIPCION EN COCHABAMBA": {content: "10 DIAS HABILES.",
    },

    "CUALES SON LOS REQUISITOS DEL TRAMITE DE TRANSCRIPCION EN COCHABAMBA.":{content: "LOS REQUISITOS SON  DERECHO DE ADMISION DA41 - 22.00 BOLIVIANOS. TITULO DE PROPIEDAD CON SU FOLIO REAL (FOTOCOPIA LEGALIZADA).PLANO DEL LOTE (FOTOCOPIA LEGALIZADA).PLANO DE UNIDAD DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA).RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (SI CORRESPONDE) (FOTOCOPIA LEGALIZADA). REGISTRO CATASTRAL ORIGINAL.IMPUESTOS DE LAS ULTIMAS 5 GESTIONES (FOTOCOPIA SIMPLE).CARNET DE IDENTIDAD DE LOS PROPIETARIOS (FOTOCOPIA SIMPLE).",
    },


    "QUE ES LA ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA":{content: "ES UNA ACTUALIZACION REALIZADA CON UN AVALUO DE DECLARACION JURADA PARA LA MODIFICACION DE DATOS TECNICOS,PREVIA REVISION DIGITAL EN LA BASE DE DATOS DE CATASTRO Y USO DE HERRAMIENTAS INFORMATICAS.",
    },
    "COMO HAGO LA ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA":{content: "ES UNA ACTUALIZACION REALIZADA CON UN AVALUO DE DECLARACION JURADA PARA LA MODIFICACION DE DATOS TECNICOS,PREVIA REVISION DIGITAL EN LA BASE DE DATOS DE CATASTRO Y USO DE HERRAMIENTAS INFORMATICAS.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DE LA ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {content: "1 DIA HABIL.",
    },

    "CUALES SON LOS REQUISITOS PARA LA ACTUALIZACION Y MODIFICACION DE DATOS TECNICOS EN SISTEMA RUAT EN COCHABAMBA": {content: "LOS REQUISITOS SON TITULO DE PROPIEDAD MAS FOLIO REAL (FOTOCOPIA SIMPLE).COPIA DE PLANO DE LOTE O PH. FOTOCOPIA DE CARNET DE IDENTIDAD. REGISTRO CATASTRAL (OPCIONAL). IMPUESTOS (BOLETA DE LAS 5 ULTIMAS GESTIONES).",
    },

    "QUE ES EL DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "ES EL DESGLOSE DE SUPERFICIES EN PROPIEDADES HORIZONTALES, DONDE INCLUYE EL AREA PRIVADA COMO EL AREA COMUN DE LAS CONSTRUCCIONES.",
    },
    "COMO HAGO EL DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "ES EL DESGLOSE DE SUPERFICIES EN PROPIEDADES HORIZONTALES, DONDE INCLUYE EL AREA PRIVADA COMO EL AREA COMUN DE LAS CONSTRUCCIONES.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DEL DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "DIRECCION DE ADMINISTRACION GEOGRAFICA Y CATASTRO.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "1 DIA HABIL.",
    },

    "CUALES SON LOS REQUISITOS PARA EL DESGLOSE DE IMPUESTOS EN COCHABAMBA": {content: "LOS REQUISITOS SON RESOLUCION ADMINISTRATIVA MUNICIPAL DE APROBACION DE PROPIEDAD HORIZONTAL (FOTOCOPIA LEGALIZADA). IMPUESTOS (FOTOCOPIA ULTIMA GESTION).FOLIO REAL (FOTOCOPIA SIMPLE).",
    },


    "QUE ES LA CRAM EN COCHABAMBA": {content: "ES EL CERTIFICADO DE REGISTRO AMBIENTAL MUNICIPAL QUE TIENE COMO FINALIDAD LA IMPLEMENTACION DE CONTROL Y VIGILANCIA AMBIENTAL DE ACTIVIDADES ECONOMICAS COMO PARTE DE LA GESTION AMBIENTAL MUNICIPAL.",
    },
    "COMO HAGO LA CRAM EN COCHABAMBA": {content: "ES EL CERTIFICADO DE REGISTRO AMBIENTAL MUNICIPAL QUE TIENE COMO FINALIDAD LA IMPLEMENTACION DE CONTROL Y VIGILANCIA AMBIENTAL DE ACTIVIDADES ECONOMICAS COMO PARTE DE LA GESTION AMBIENTAL MUNICIPAL.",
    },
    "CUAL ES LA UNIDAD RESPONSABLE PARA EL TRAMITE MEDIOAMBIENTAL EN COCHABAMBA": {content: "EL DEPARTAMENTO DE GESTION ATMOSFERICA, CONTROL Y SEGUIMIENTO AMBIENTAL, DEPENDIENTE DE LA SECRETARIA DE PLANIFICACION Y MEDIO AMBIENTE.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE MEDIOAMBIENTAL EN COCHABAMBA": {content: "ELTRAMITE DURA 10 DIAS HABILES.",
    },

    "EL CERTIFICADO DE REGISTRO AMBIENTAL MUNICIPAL (CRAM) SUSTITUYE A UNA LICENCIA AMBIENTAL EN COCHABAMBA": {content: "NO, EL CERTIFICADO DE REGISTRO AMBIENTAL MUNICIPAL NO SUSTITUYE A UNA LICENCIA AMBIENTAL, DE ACUERDO A LA LEY NUMERO 1333 DE MEDIO AMBIENTE.",
    },

    "CUALES SON LOS REQUISITOS UN TRAMITE MEDIOAMBIENTAL EN COCHABAMBA": {content: "LOS REQUISITOS SON NOTA ESCRITA, DIRIGIDA A LA SECRETARIA DE PLANIFICACION Y MEDIO AMBIENTE, SOLICITANDO LA EMISION DEL CERTIFICADO DE REGISTRO AMBIENTAL MUNICIPAL .COMPROBANTE DE DEPOSITO BANCARIO POR EL PAGO DE ADMISION DE TRAMITE (SEGUN CATEGORIA: CLASE 1 BOLIVIANOS 150, CLASE 2  BOLIVIANOS 400) (PARA REALIZAR EL DEPOSITO, EL REPRESENTANTE LEGAL DEBERA VERIFICAR EL RUBRO QUE CORRESPONDA A SU ACTIVIDAD ECONOMICA, SEGUN EL ANEXO 3 DEL DECRETO MUNICIPAL NUMERO 146 DEL 19).FORMULARIO AMBIENTAL MUNICIPAL (FAM) DEBIDAMENTE LLENADO ACOMPANANDO LAS FOTOCOPIAS DE CEDULA DE IDENTIDAD DEL PROPIETARIO O REPRESENTANTE LEGAL, PODER DE REPRESENTANTE LEGAL EN CASO DE PERSONAS JURIDICASEL FORMULARIO AMBIENTAL MUNICIPAL, DEBERA SER PRESENTADO EN FISICO Y EN FORMATO DIGITAL (CD); EN FOLDER AMARILLO TAMANO OFICIO Y FOLIADO EN DOS EJEMPLARES, (UN EJEMPLAR SERA PARA CONSTANCIA DEL REPRESENTANTE LEGAL COMO CONSTANCIA DE PRESENTACION).",
    },

    "CUALES SON LOS REQUISITOS PARA LA RENOVACION DE LA CRAM EN COCHABAMBA": {content: "LOS REQUISITOS SON EL REPRESENTANTE LEGAL DEBERA REALIZAR LA RENOVACION CADA DOS ANOS. NOTA ESCRITA A LA SECRETARIA DE PLANIFICACION Y MEDIO AMBIENTE CERTIFICADO DE REGISTRO AMBIENTAL ORIGINAL FOTOCOPIA DE CARNET DE IDENTIDAD FOTOCOPIA DE LICENCIA DE FUNCIONAMIENTO COMPROBANTE DE PAGO SEGUN CLASE 1  BOLIVIANOS. 150, CLASE 2  BOLIVIANOS 400.",
    },
    
    "QUE ES LA RAI EN COCHABAMBA": {content: "ES EL REGISTRO AMBIENTAL INDUSTRIAL, ES UN PROCESO DE REGULACION AMBIENTAL DE LAS ACTIVIDADES DEL SECTOR INDUSTRIAL MANUFACTURERO, EN CUMPLIMIENTO DE LAS DISPOSICIONES DEL REGLAMENTO AMBIENTAL PARA EL SECTOR MANUFACTURERO (RASIM).",
    },
    "COMO HAGO LA RAI EN COCHABAMBA": {content: "ES EL REGISTRO AMBIENTAL INDUSTRIAL, ES UN PROCESO DE REGULACION AMBIENTAL DE LAS ACTIVIDADES DEL SECTOR INDUSTRIAL MANUFACTURERO, EN CUMPLIMIENTO DE LAS DISPOSICIONES DEL REGLAMENTO AMBIENTAL PARA EL SECTOR MANUFACTURERO (RASIM).",
    },
    "CUAL ES LA UNIDAD RESPONSABLE DE LA RAI EN COCHABAMBA": {content: "DEPARTAMENTO DE GESTION ATMOSFERICA, CONTROL Y SEGUIMIENTO AMBIENTAL, DEPENDIENTE DE LA SECRETARIA DE PLANIFICACION Y MEDIO AMBIENTE.",
    },

    "CUANTO ES LA DURACION DEL TRAMITE DE LA RAI EN COCHABAMBA": {content: "EL TRAMITE LLEGA A DURAR 10 DIAS HABILES.",
    },

    "CUALES SON LOS REQUISITOS PARA LA CERTIFICACION": {content: "LOS REQUISITOS SON FOTOCOPIA DE CEDULA DE IDENTIDAD DEL PROPIETARIO O REPRESENTANTE LEGAL Y CONSULTOR AMBIENTAL. FOTOCOPIA DE CERTIFICADO RENCA VIGENTE DEL CONSULTOR AMBIENTAL. DECLARACION JURADA FIRMADA POR REPRESENTANTE LEGAL Y CONSULTOR. AMBIENTAL EN LOS 3 EJEMPLARES.CROQUIS DE UBICACION DE INDUSTRIA. COORDENADAS GEOREFERENCIALES EN UTM. FOTOCOPIAS A DETALLE DE LA INDUSTRIA. FOLIADO DE DOCUMENTOS AMBIENTALES.· FOTOCOPIAS DE PODER DE PODER REPRESENTANTE LEGAL EN CASO DE SOCIEDAD. OTROS DOCUMENTOS SEGUN RUBRO.",
    },


    "QUE ES UNA LICENCIA AMBIENTAL (L.A.) EN COCHABAMBA": {content: "ES EL DOCUMENTO JURIDICO ADMINISTRATIVO OTORGADO POR LA AUTORIDAD AMBIENTAL COMPETENTE AL REPRESENTANTE LEGAL QUE AVALA EL CUMPLIMIENTO DE TODOS LOS REQUISITOS PREVISTOS EN LA LEY Y REGLAMENTACION CORRESPONDIENTE EN LO QUE SE REFIERE A LOS PROCEDIMIENTOS DE PREVENCION Y CONTROL AMBIENTAL.",
    },
    "COMO HAGO UNA LICENCIA AMBIENTAL (L.A.) EN COCHABAMBA": {content: "ES EL DOCUMENTO JURIDICO ADMINISTRATIVO OTORGADO POR LA AUTORIDAD AMBIENTAL COMPETENTE AL REPRESENTANTE LEGAL QUE AVALA EL CUMPLIMIENTO DE TODOS LOS REQUISITOS PREVISTOS EN LA LEY Y REGLAMENTACION CORRESPONDIENTE EN LO QUE SE REFIERE A LOS PROCEDIMIENTOS DE PREVENCION Y CONTROL AMBIENTAL.",
    },

    "CUAL ES LA CLASIFICACION DE LOS ESPACIOS DEPORTIVOS EN COCHABAMBA": {content: "SU CLASIFICACION ES  CATEGORIA A CORRESPONDE A CENTROS DEPORTIVOS DE ALTA COMPETENCIA;  CUENTAN CON LAS CARACTERISTICAS ESTABLECIDAS POR NORMATIVA Y REGLAMENTACION INTERNACIONAL. CATEGORIA B CORRESPONDE A COMPLEJOS, CAMPOS Y COLISEOS DEPORTIVOS CERCADOS QUE ALBERGAN UNA O MAS DISCIPLINAS DEPORTIVAS. CATEGORIA C CORRESPONDE A CAMPOS DEPORTIVOS DE SUELO NATURAL O ARTIFICIAL QUE NO SE ENCUENTREN CERCADOS. CATEGORIA D CORRESPONDE A CANCHAS POLIFUNCIONALES QUE SON DE LIBRE ACCESO PARA EL USO DE LA POBLACION EN GENERAL.",
    },

    "QUIEN ADMINISTRA LOS ESCENARIOS DEPORTIVOS EN COCHABAMBA": {content: "LA ADMINISTRACION Y USO DE LOS ESCENARIOS DEPORTIVOS SE REALIZARA A TRAVES DE LA DIRECCION DE DEPORTES DEPENDIENTE DE LA SECRETARIA DE DESARROLLO HUMANO Y DEPORTES",
    },

    "CUALES SON LAS MODALIDADES DE USO DE LOS CAMPOS DEPORTIVOS EN COCHABAMBA": {content: "LAS MODALIDADES DE USO SON  CONVENIOS ES EL ACUERDO QUE CELEBRA EL GAMC, CON UNA PERSONA NATURAL O JURIDICA, NACIONAL O EXTRANJERA, SEA PUBLICA O PRIVADA, CON EL FIN DE QUE LAS PARTES ACORDANTES SE BRINDEN CONTRAPRESTACIONES RECIPROCAS PARA EL APOYO DE DIFERENTES ACTIVIDADES Y/O EVENTOS DE DESARROLLO HUMANO. CONCESION ADMINISTRATIVA. - ES LA RELACION JURIDICA CONTRACTUAL ENTRE EL GAMC Y UNA PERSONA NATURAL O JURIDICA, PARA EL USO DE UN BIEN DE DOMINIO PUBLICO O LA PRESTACION DE UN SERVICIO PUBLICO POR UN TIEMPO LIMITADO A CAMBIO DE UNA CONTRAPRESTACION. ARRENDAMIENTO. - ES LA RELACION JURIDICA CONTRACTUAL, POR LA CUAL EL GAMC, CONCEDE EL USO Y GOCE TEMPORAL DE UN BIEN O GRUPO DE BIENES A UNA PERSONA NATURAL O JURIDICA A CAMBIO DE UNA CONTRAPRESTACION ECONOMICA, CON LA OBLIGACION DE RESTITUIRLOS A LA ENTIDAD EN EL MISMO ESTADO.",
    },


    "DONDE HAGO MI TRAMITE DE VEHICULOS EN COCHABAMBA":{content:" DEPENDIENDO DEL TRAMITE, ESTE SE PUEDE REALIZAR EN MOVILIDAD URBANA SI ES RELACIONADO AL TRANSPORTE PUBLICO,EN RECAUDACIONES SI ESTA RELACIONADO A IMPUESTOS, TRANSFERENCIAS  O REGISTROS.",
    },

    /*"QUE ES EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content: "Es un trámite a realizar cuando se requiere urbanizar un terreno de su propiedad con superficie a 1300 m2, con carácter previo al diseño de los planos definitivos del proyecto de urbanización, debe solicitar al G.A.M.C. la visación de los planos del anteproyecto.",
    },
    "DONDE SE REALIZA EL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content: "Se puede realizar en la Sub Alcaldía a la que corresponde el predio.",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE DE VISADO ANTEPROYECTO DE URBANIZACION": {
        content: "El costo depende del terreno por ejemplo la tasa de visación de anteproyecto: por terreno plano m2 es 0.05 Bs/m2",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE 101": {
        content: "el costo funciona para los tramites 101 es de 65 bolivianos",
    },
    "CUALES SON LOS COSTOS DEL TRAMITE":{
        content: "Por favor sea mas especifico sobre el costo que quiera saber",
    },*/
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
function isSimilar(question1, question2, threshold) {
    if (question1.toUpperCase() === question2.toUpperCase()) {
        return true; // Si las preguntas son idénticas, devolver true
    }
    // Calcular la distancia de Levenshtein
    const distance = levenshteinDistance(question1.toUpperCase(), question2.toUpperCase());
    return distance <= threshold || question1.toUpperCase().includes(question2.toUpperCase()) || question2.toUpperCase().includes(question1.toUpperCase());
}

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
            if (isSimilar(exampleQuestion, question, 5)) {
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

    /*if (question.includes("ALCALDE")) {
        console.log("funciona");
        try {
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
            const alcalde = "Por el momento solo tengo conocimientos sobre el alcalde constitucional de Cochabamba que es Manfred Reyes Villa Bacigalupi desde la gestión 2021";
            combinedResponse = {
                spanish: cochabambaExample.spanish,
                content: `${alcalde}`,
            };

            console.log("Respuesta de la API de OpenAI:", chatCompletion);
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
            return Response.json({ error: "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde." });
        }
    }else */if (!matchedQuestion) {
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
    }

return Response.json(combinedResponse);

    
}
