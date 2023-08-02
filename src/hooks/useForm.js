import { useState } from "react";

const useForm = (objectInitial = {}) => {

    const [form, setForm] = useState(objectInitial);

    const serializeForm = (form) => {
        
        const formData = new FormData(form);

        const objectComplete = {};

        for(let [name, value] of formData){
            objectComplete[name] = value;
        }

        return objectComplete;
    }

    const sent = (e) => {
        e.preventDefault();
        
        let course = serializeForm(e.target);
        
        setForm(course);

        document.querySelector(".code").classList.add("sent");
    }

    const changed = ({target}) => {
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return {
        form,
        sent,
        changed
    }
}

export default useForm