const Pizza = ({name, description}) => {
  return (
    <div className="Pizza_container">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Pizza;