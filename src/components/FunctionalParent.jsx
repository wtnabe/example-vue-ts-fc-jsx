import { ref } from 'vue'
import FunctionalChild from './FunctionalChild'

/**
 * @function FunctionalParent
 * @property {time} timer
 */
export default function ParentFunctional() {
  const timer = ref(new Date())

  setInterval(() => {
    timer.value = new Date()
  }, 1000)

  return (
    <FunctionalChild timer={ timer.value } />
  )
}
