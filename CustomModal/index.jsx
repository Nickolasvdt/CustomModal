import React, { useEffect } from 'react';

import './styles.css'

export default function CustomModal({ modalInfos, handleModal }) {

  const [modalInfos, setModalInfos] = useState({});

  function handleModal(handle, type, text, description, confirmation) {
    if (handle) {
      setModalInfos({
        type: type,
        text: <p>{text}{<span>{description}</span>}</p>,
        confirmation: confirmation,
      })
    } else {
      setModalInfos({})
    }
  }

  useEffect(() => {
    // Função para fechar o modal quando clicar fora dele
    const handleClickOutside = (event) => {
      const modalContainer = document.getElementById('modal');
      const buttons = document.getElementById('buttons');

      // Verifica se o clique foi fora do modal
      if (modalContainer && !modalContainer.contains(event.target) && !buttons.contains(event.target)) {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Remove o listener ao desmontar o componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleModal]);

  return (

    <div id="modalContainer">

      <div id='modal' className="modal">

        <img src={require('./images/' + modalInfos.type + '.svg')} alt="" />

        {modalInfos.text}

        <div id='buttons' className="buttons">

          {
            modalInfos.type === 'confirmation' ?
              <button onClick={() => modalInfos.confirmation()}>
                <p>Confirmar</p>
              </button>
              :
              <button
                onClick={() => handleModal(false)}
                className={modalInfos.type === 'confirmation' ? 'confirmationButton' : ''}>
                <p>Fechar</p>
              </button>
          }
          {
            modalInfos.type === 'confirmation' &&
            <button
              onClick={() => handleModal(false)}>
              <p>Cancelar</p>
            </button>
          }
        </div>

      </div>

    </div>
  )
}