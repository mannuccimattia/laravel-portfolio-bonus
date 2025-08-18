const InfoSmall = ({ type, client, date }) => {
  return (
    <small className="card-text mb-3 text-secondary">
      {!type ? "Project " : `${type.name} project `}
      {!client ? "made " : `made for ${client}`}
      {` in ${date}`}
    </small>
  )
}

export default InfoSmall
