import {decrement, increment} from "./counterSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

export default function Counter () {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return <>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Remote</button>
    </>;
}