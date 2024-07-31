import { forwardRef } from "react"

export default forwardRef(function  ResultModal({ result, targetTime}, ref) {
    return <dialog ref={ref} className="result-modal">
        <h2>You {result ? "win" : "lose"}</h2>
        <p>The target time was <strong>{targetTime}</strong></p>
        {result ? <p>You stopped the timer with <strong>X seconds left</strong></p> : null}
        <form method="modal">
            <button>Close</button>
        </form>
    </dialog>
})