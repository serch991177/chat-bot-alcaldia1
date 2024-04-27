import { useAITeacher } from "@/hooks/useAITeacher";
import { useEffect, useRef, useState } from "react";

export const MessagesList = ({visibleTypingBox,changeAnimation}) => {
  const messages = useAITeacher((state) => state.messages);
  const playMessage = useAITeacher((state) => state.playMessage);
  const stopMessage = useAITeacher((state) => state.stopMessage);
  const { currentMessage } = useAITeacher();
  const english = useAITeacher((state) => state.english);
  const classroom = useAITeacher((state) => state.classroom);
  const loading = useAITeacher((state) => state.loading);
  const [isLoading, setIsLoading] = useState(false); // Definir isLoading aquí

  const container = useRef();
  const [showQuestionButtons, setShowQuestionButtons] = useState(false);

  useEffect(() => {
    container.current.scrollTo({
      top: container.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length]);

  const renderEnglish = (englishText) => (
    <>
      {english && (
        <p className="text-4xl inline-block px-2 rounded-sm font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-300/90 to-white/90">
          {englishText}
        </p>
      )}
    </>
  );

  const handleYesClick = () => {
    // Lógica para el botón "Sí"
    setShowQuestionButtons(false);
    visibleTypingBox();
  };

  const handleNoClick = () => {
    // Lógica para el botón "No"
    setShowQuestionButtons(false);
    // Limpiar el contenido y establecer messages.length en 0
    useAITeacher.setState({ messages: [] });
    changeAnimation(1);
    // Reproducir el audio después de cambiar a la animación 2
    const audio = new Audio('/models/despedida.wav');
    audio.addEventListener('loadedmetadata', () => {
        // Reproducir el audio
        audio.play();
        //Establecer un temporizador para cambiar la animación después de la duración del audio
        setTimeout(() => {
            changeAnimation(4);
            //console.log("cambiar animacion");
            visibleTypingBox();
        }, audio.duration * 1000); // Convertir la duración a milisegundos
    });
  };
  return (
    <div
      className={`${
        classroom === "default"
          ? "w-[1288px] h-[676px]"
          : "w-[2528px] h-[856px]"
      } p-8 overflow-y-auto flex flex-col space-y-8 bg-transparent opacity-80`}
      ref={container}
    >
      {messages.length === 0 && (
        <div className="h-full w-full grid place-content-center text-center">
          <h2 className="text-8xl font-bold text-white/90 italic">
            AVONNI
            <br/>
           TU ASISTENTE VIRTUAL
          </h2>
        </div>
      )}
      {loading ? null : messages.map((message, i) => (
        <div key={i}>
          <div className="flex">
            <div className="flex-grow">
              <div className="flex items-center gap-3">
                {renderEnglish(message.answer.english)}
              </div>
            </div><br/><br/><br/>
            <p style={{fontSize:"62px"}}>Para volver a reproducir haz click aqui</p>
            {currentMessage === message ? (
              <button
                className="text-black/65"
                onClick={() => stopMessage(message)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="text-black/65"
                onClick={() => playMessage(message)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="p-5 mt-5  bg-gradient-to-br from-pink-200/20 to-pink-500/20 rounded-xl">
            <span className="pr-4 italic bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/70  font-bold uppercase inline-block" style={{fontSize:"67px"}}>
              Quieres Hacer Otra Pregunta?
            </span>
            
            
            <div className="flex justify-center mt-4">
            <button
                className="bg-green-500 px-10 py-1 text-white rounded-lg mr-4"
                onClick={() =>{ 
                  handleYesClick();
                  stopMessage(message);
                  }
                }
            >
                <p style={{
                    fontSize:"100px"
                }}>Sí</p>
            </button>
            <button
                className="bg-red-500 px-10 py-1 text-white rounded-lg"
                onClick={() => {
                  handleNoClick();
                  stopMessage(message);
                }}  
            >
                <p style={{
                    fontSize:"100px"
                }}>No</p>
            </button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};
