import '../styles.css'
import { ACTIONS } from "./Calculator2"

export default function DigitButton({ dispatch, digit }) {

    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
}