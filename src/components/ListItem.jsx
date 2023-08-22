import PropTypes from 'prop-types'

function ListItem({ item }) {
  const { number, name, team, legend } = item
  return (
    <div className="item">
      <div className={legend ? 'itemNumberLegend' : 'itemNumber'}>{number}</div>
      <div className="itemData">
        <div className="itemName">{name}</div>
        <div className="itemTeam">{team}</div>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ListItem
