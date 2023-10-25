import { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INIT_FORM = {
        width: "",
        height: "",
        color: ""
    }
    const [formData, setFormData] = useState(INIT_FORM);

    const handleChange = (e) => {
        setFormData(oldFormData => {
            const { name, value } = e.target;
            return { ...oldFormData, [name]: value }
        });
    };

    const submit = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(value => value != "")) {
            addBox({...formData});
            setFormData(INIT_FORM)
        }
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="color">Color</label>
            <input id="color" name="color" type="text" value={formData.color} onChange={handleChange} />
            <label htmlFor="width">Width</label>
            <input id="width" name="width" type="number" min="10" max="300" value={formData.width} onChange={handleChange} />
            <label htmlFor="height">Height</label>
            <input id="height" name="height" type="number" min="10" max="300" value={formData.height} onChange={handleChange} />
            <button>Create Box</button>
        </form>
    );
};

export default NewBoxForm;