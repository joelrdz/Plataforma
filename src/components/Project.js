import { useState } from 'react';

import Modal from './ui/Modal';
import Backdrop from './ui/Backdrop';

export default function Project({ project }) {
  const [ modalOpen, setModalOpen ] = useState(false);

  function openModalHandler() {
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <>
      <div className="project" onClick={openModalHandler}>
        <div className="project__title">{project.name}</div>
        <div className="project__thumb">{project.thumb ? <img src={require(`../assets/images/${project.thumb}`).default} alt={`Thumb de ${project.name}`} /> : 'No thumb'}</div>
      </div>

      {modalOpen && <Modal project={project} onClose={closeModalHandler} />}
      {modalOpen && <Backdrop onClick={closeModalHandler} />}
    </>
  );
}