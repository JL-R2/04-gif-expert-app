import { useState } from "react";
import { React } from "react";
import { AddCategory ,GifGrid} from "./components";

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['one Punch', 'Dragon Ball']);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories(cat => [newCategory, ...cat]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>

       

            <AddCategory onNewCategory={(value) => onAddCategory(value)}>
            </AddCategory>
        
          
                {categories.map((category) => 

                     (
                       <GifGrid key={category} category={category}></GifGrid>

                    )
                   
                )
                }

            

        </>

    )
};
