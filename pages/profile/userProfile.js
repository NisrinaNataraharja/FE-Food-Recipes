import React, { useEffect, useState } from 'react'
import style from './userProfile.module.css'
import Link from 'next/link'
import axios from 'axios'
import { Navbar, Footer } from '../../components'
import Router from 'next/router'
import RecipeCard from '../../components/base/recipeCard/RecipeCard'

const UserProfile = () => {
  const [recipes, setRecipes] = useState([])
  const [profile, setProfile] = useState({})
  const search = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_APP_URL_API}user/profile`, {
        headers: { Authorization: `Bearer ${token}` }})
      .then((res) => {
        console.log(res);
        setProfile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_APP_URL_API}recipe/userRecipe`, {
        headers: { Authorization: `Bearer ${token}` }})
      .then((res) => {
        console.log(res);
        setRecipes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const deleteRecipe = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${process.env.NEXT_APP_URL_API}recipe/${id}`, {
      headers: { Authorization: `Bearer ${token}` }})
    .then((res) => {
      alert("Delete success")
      axios
      .get(`${process.env.NEXT_APP_URL_API}recipe/userRecipe`, {
        headers: { Authorization: `Bearer ${token}` }})
      .then((res) => {
        console.log(res);
        setRecipes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
    
  }
    return (
      <>
        <Navbar />
        <main>
          <div className={style.profile}>
            <img src={profile.avatar? profile.avatar : "/images/levi1.jpg"} alt="profile pic" />
          </div>
          <h2 style={{ margin: "40px auto", textAlign: 'center' }}>{profile.name}</h2>
          <div className={style.navigation}>
            <ul>
              <li >My Recipe</li>
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