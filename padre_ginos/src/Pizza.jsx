export default function Pizza({name, description, image}) {
  return (
    <div className="Pizza_container">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  )
}

// export default Pizza;