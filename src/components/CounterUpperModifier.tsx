/**
 * @typedef {object} CounterProps
 * @property {number} count 全体でカウントしている数値
 */
export interface CounterProps {
  count: number
}

/**
 * Functionalコンポーネント
 *
 * see https://stackoverflow.com/questions/38708777/what-is-the-correct-jsdoc-syntax-for-a-local-variable
 *
 * @function CounterUpperModifier
 * @param {object} props
 * @param {number} props.count 全体でカウントしている数値
 * @property {number} upper
 */
export default function CounterUpperModifier (props: CounterProps) {
  /** 単に function が実行されるだけなので ref とか不要 */
  const upper: number = props.count + 2

  return (
    <>
      {props.count} : upper {upper}
    </>
  )
}
