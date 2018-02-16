import PropTypes from "prop-types";

const BasePokemon = {
  id: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
  classification: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  resistant: PropTypes.arrayOf(PropTypes.string),
  weaknesses: PropTypes.arrayOf(PropTypes.string),
  fleeRate: PropTypes.number,
  maxCP: PropTypes.number,
  maxHP: PropTypes.number,
  image: PropTypes.string,
  evolutionRequirements: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number
  }),
  weight: PropTypes.shape({
    minimum: PropTypes.string,
    maximum: PropTypes.string
  }),
  height: PropTypes.shape({
    minimum: PropTypes.string,
    maximum: PropTypes.string
  }),
  attacks: PropTypes.shape({
    special: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        damage: PropTypes.number
      })
    )
  })
};

export default Object.assign({}, BasePokemon, {
  evolutions: PropTypes.arrayOf(PropTypes.shape(BasePokemon))
})
