/**
 * @function FunctionalChild
 * @param {object} props
 * @param {time} props.timer
 */
export default function FunctionalChild (props) {
  return (
    <p>{ props.timer.toString() }</p>
  )
}
