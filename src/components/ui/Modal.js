function Modal(props) {
  const project = props.project;

  function closeModalHandler() {
    props.onClose();
  }

  return (
    <div className="modal">
      <div>
        <span>{project.name} </span>
        <button onClick={closeModalHandler}>Close</button>
      </div>
      {project.description &&
        <div>
          <br />
          {project.description}
          <br />
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
