// 4.	Build a controlled form
// → multiple inputs, validation

import react, { useState } from "react"

const controlledForm = () => {
    const[form, setForm]=useState({
        name:" ",
        email:" "
    });

    function handleChange (){
        // setForm({...form, e.target.value:})
    }

    const [formData, setFormData] = useState({
        name: " ",
        email: " "
    });
   // const [error, setError] = useState({});


    function handleChange(e) {

        setFormData({ ...formData, [e.target.name]: e.target.value });


    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Name: ${form.name}, Email: ${form.email}`);
    }

    return (

        <div>
            <form action="put" onChange={handleSubmit}>

                <input
                    type="text"
                    value={formData.data}
                    onChange={handleChange}
                    placeholder="enter your name"
                />
                <input
                    type="text"
                    value={formData.data}
                    onChange={handleChange}
                    placeholder="enter your school name"
                />

                <button type="submit">submit</button>
            </form>

        </div>

    );
}

export default controlledForm;
