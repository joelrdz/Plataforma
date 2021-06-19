function Modal(props) {
  const project = props.project;

  function closeModalHandler() {
    props.onClose();
  }

  return (
    <div className="modal">
      <div className="back-container">
        <span onClick={closeModalHandler}>&#8592;</span>
      </div>
      <div>
        <span>{project.name} </span>
      </div>
      {project.description &&
        <div>
          <br />
          {project.description}
          <br /><br />
        </div>
      }
      {project.images.length > 0 &&
        <div>
          {project.images.map(image => <img src={require(`../../assets/images/${image}`).default} key={image} alt={image} />)}
        </div>
      }
    </div>
  );
}

export default Modal;
