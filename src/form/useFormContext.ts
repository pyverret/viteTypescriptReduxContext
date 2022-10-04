import FormContext from "./FormContext";
import {useContext} from "react";

export const useFormContext = () => {
    const formContext = useContext(FormContext);

    if (!formContext.id) {
        throw new Error('No "id" provided in FormContext');
    }

    return formContext;
}