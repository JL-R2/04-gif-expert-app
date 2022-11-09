import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
// console.log(onNewCategory)
    const [inputValue, setInputValue] = useState('One punch');

    const onChange = ({ target }) => {
        setInputValue(target.value)
        // console.log("onchange")
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);

        if (inputValue.trim().length<=1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type={"text"}
                placeholder="Buscar gif"
                value={inputValue}
                onChange={(event) => onChange(event)}
            ></input>
        </form>
    )
}