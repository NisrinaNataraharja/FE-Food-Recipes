import React, { useState, useEffect } from "react";
import styles from '../../../styles/add.module.css'
import { Navbar } from '../../../components'
import Router from "next/router";
import axios from "axios";
import Footer from "../../../components/module/footer";

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("ingredients", ingredients);
    formData.append("title", title);
    formData.append("image", image);
    formData.append("video", video);
    await axios
      .post(`${process.env.NEXT_APP_URL_API_HEROKU}recipe/add`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      }, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log(res);
        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleVideo = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    token
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="container mb-5">
        <Navbar />
        <section className={styles.add}>
          <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <label htmlFor="photo" className="form-label me-2">
                Photo
              </label>
              <input
                type="file"
                className="form-control form-control-sm p-3"
                id="photo"
                placeholder="Photo"
                onChange={(e) => handleImage(e)}
                accept="image/*"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="form-label me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Required"
              >
              </label>
              <input
                type="text"
                className="form-control form-control-sm p-3"
                id="title"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="ingredients"
                className="form-label me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Required"
              >
              </label>
              <textarea
                className="form-control"
                id="ingredients"
                rows="10"
                placeholder="Ingredients"
                required
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="video" className="form-label me-2">
                Video
              </label>
              <input
                type="file"
                className="form-control form-control-sm p-3"
                id="video"
                placeholder="Video"
                onChange={(e) => handleVideo(e)}
                accept="video/*"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-warning w-100 text-light mb-5"
              >
                Simpan
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AddRecipe