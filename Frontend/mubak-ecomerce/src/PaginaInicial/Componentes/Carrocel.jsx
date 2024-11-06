import React, { useState, useEffect } from "react"; 
import gifImage from '/src/assets/1729888684.gif';
import jpgImage1 from '/src/assets/1730460826.jpg';
import jpgImage2 from '/src/assets/1730375902.jpg';

function Carrossel() {
  const [imagemAtual, setImagemAtual] = useState(gifImage);
  const [indiceAtual, setIndiceAtual] = useState(0); 
  const [progresso, setProgresso] = useState(0); 

  const imagens = [gifImage, jpgImage1, jpgImage2];

  function passarImagem() {
    const proximoIndex = (indiceAtual + 1) % imagens.length; 
    setImagemAtual(imagens[proximoIndex]);
    setIndiceAtual(proximoIndex);
    setProgresso(0);
  }

  function voltarImagem() {
    const anteriorIndex = (indiceAtual - 1 + imagens.length) % imagens.length;
    setImagemAtual(imagens[anteriorIndex]);
    setIndiceAtual(anteriorIndex);
    setProgresso(0);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      passarImagem(); 
    }, 7000);

    const progressoIntervalo = setInterval(() => {
      setProgresso((prev) => {
        if (prev >= 100) {
          clearInterval(progressoIntervalo);
          return 0;
        }
        return prev + (100 / 70);
      });
    }, 100);

    return () => {
      clearInterval(intervalo); 
      clearInterval(progressoIntervalo); 
    };
  }, [indiceAtual]);

  function selecionarImagem(index) {
    setImagemAtual(imagens[index]);
    setIndiceAtual(index);
    setProgresso(0);
  }

  return (
    <div className="relative">
      <img
        src={imagemAtual}
        alt="Carrossel"
        className="w-[100%] h-[120px] sm:h-auto sm:w-full object-cover" // Imagem quadrada para mobile
      />

      {/* Setas de navegação - ocultas no mobile */}
      <div className="hidden sm:flex absolute left-5 top-1/2 transform -translate-y-1/2">
        <button 
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-orange-600 hover:text-3xl"
          onClick={voltarImagem}>
          &#10094;
        </button>
      </div>
      <div className="hidden sm:flex absolute right-5 top-1/2 transform -translate-y-1/2">
        <button 
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-orange-600 hover:text-3xl"
          onClick={passarImagem}>
          &#10095;
        </button>
      </div>
      
      {/* Botões de seleção como barra de carregamento */}
      <div className="flex absolute left-1/2 top-[80%] transform -translate-x-1/2 space-x-1 sm:bottom-10"> 
        {imagens.map((imagem, index) => (
          <div className="p-1" key={`botao-${index}`}>
            <button
              className={`relative ${
                index === indiceAtual ? "bg-gray-800" : "bg-gray-400"
              } rounded-full w-8 h-2 sm:w-14 sm:h-3`} // Tamanho menor para mobile
              onClick={() => selecionarImagem(index)}
            >
              <div
                style={{
                  width: indiceAtual === index ? `${progresso}%` : '0%',
                  height: '100%',
                  backgroundColor: indiceAtual === index ? 'orange' : 'transparent',
                }}
                className="rounded-full"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrossel;
