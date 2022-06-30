import React, { useEffect, useState } from 'react'
import style from './userProfile.module.css'
import Link from 'next/link'
import axios from 'axios'
import { Navbar, Footer } from '../../components'
import Router from 'next/router'
import RecipeCard from '../../components/base/recipeCard/RecipeCard'

const UserProfile = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_APP_URL_API}recipe`, {withCredentials: true})
      .then((res) => {
        // console.log(res.data.data[0]);
        setRecipes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const deleteRecipe = async (id) => {
    await axios.delete(`${process.env.NEXT_APP_URL_API}recipe/${id}`, {withCredentials: true});
    alert("Delete success")
    Router.push("/profile/userProfile")
  }

    return (
      <>
        <Navbar />
        <main>
          <div className={style.profile}>
            <img src="/images/levi1.jpg" alt="profile pic" />
          </div>
          <h2 style={{ margin: "40px auto", textAlign: 'center' }}>Levi Ackerman</h2>
          <div className={style.navigation}>
            <ul>
              <li >My Recipe</li>
              <li >Saved Recipe</li>
              <li >Liked Recipe</li>
            </ul>
            <div className={style.area}>
                    {recipes.length >= 1 && recipes.map((item) => {
                        return (
                            <RecipeCard
                                key={item.id}
                                photo={item.image}
                                title={item.title}
                                type='edit'
                                // path={() => Router.push(`/updateRecipe${item.id}`)}
                                update={() => Router.push(`/updateRecipe/${item.id}`)}
                                drop={()=> deleteRecipe(item.id) }
                            />
                        )
                    })}
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  export default UserProfile