import { forwardRef, useRef, useImperativeHandle } from "react";

export default forwardRef(function  ResultModal({ result, targetTime}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return <dialog ref={dialog} className="result-modal">
        <h2>You {result ? "win" : "lose"}</h2>
        <p>The target time was <strong>{targetTime}</strong></p>
        {result ? <p>You stopped the timer with <strong>X seconds left</strong></p> : null}
        <form method="modal">
            <button>Close</button>
        </form>
    </dialog>
})