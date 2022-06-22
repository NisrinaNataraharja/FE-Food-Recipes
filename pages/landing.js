import React, {useEffect, useState} from 'react'
import styles from '../styles/landing.module.css'
import RecipeCard from '../components/base/recipeCard/RecipeCard'
import { Navbar } from '../components/index'
import axios from 'axios'




const Landing = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
      axios
      .get(`${process.env.NEXT_APP_URL_API}recipe`)
      .then((res)=>{
        // console.log(res.data.data[0]);
        setRecipes(res.data.data);
      })
      .catch((err)=> {
        console.log(err);
      }) 
    }, [])
    


    return (
        <>
        <Navbar/>
            <div className="container-fluid">
                <section className={`${styles.landingone} row`}>
                    <div className="col-10 col-sm-9 d-flex flex-column justify-content-center">
                        <h1 className={`${styles.onecontent} mb-3`}>Discover Recipe & Delicious Food</h1>
                        <form className={`${styles.search} mb-3`}>
                            <label className="py-2 px-4" htmlFor="search">
                            </label>
                            <input
                                type="search"
                                className="form-control p-3"
                                id="search"
                                placeholder="Search Restaurant, Food"
                            />
                        </form>
                    </div>
                    <div className={`${styles.decoration} col-2 col-sm-3 d-flex align-items-center btn-warning`}>
                        <img className="d-none d-md-block" src="/images/landingone.webp" alt="landingone" />
                    </div>
                </section>
            </div>
            <section className='mb-5'>
                <div className={`${styles.titleSection}  mb-4 mb-md-5`}>
                    <h1>Latest Recipe</h1>
                </div>
                <div className="row">
                    {recipes.length >= 1 && recipes.map((item) => {
                        return (
                            <RecipeCard key={item.id}
                                photo={item.image}
                                nameproduct={item.title}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Landing