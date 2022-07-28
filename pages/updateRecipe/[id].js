import React, { useState, useEffect } from "react";
import styles from '../recipe/add.module.css'
import { Navbar } from '../../components'
import Router, { useRouter } from "next/router";
import axios from "axios";
import Footer from "../../components/module/footer";

const UpdateRecipe = () => {
    const router = useRouter();
    const [ingredients, setIngredients] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const id = router.query.id;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("ingredients", ingredients);
        formData.append("title", title);
        formData.append("image", image);
        formData.append("video", video);
        const token = localStorage.getItem("token");
        await axios
            .put(`${process.env.NEXT_APP_URL_API_HEROKU}recipe/${id}`, formData, {
                headers: { Authorization: `Bearer ${token}` }}, {
                "content-type": "multipart/form-data",
            })
            .then((res) => {
                console.log(res);
                Router.push("/profile/userProfile");
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
    const fetchdataDetail = async (id) => {
        const token = localStorage.getItem("token");
        const result = await axios.get(`${process.env.NEXT_APP_URL_API_HEROKU}recipe/detail/${id}`, {
            headers: { Authorization: `Bearer ${token}` }})
        console.log(result.data.data);
        setTitle(result.data.data[0].title);
        setIngredients(result.data.data[0].ingredients);
        // const data = result.data.data[0]
        // setDataDetail(data)
        // console.log(data)
    }
    useEffect(() => {
        fetchdataDetail(id)
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
                                name="image"
                                onChange={(e) => handleImage(e)}
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
                                name="title"
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
                                name="ingredients"
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
                                className="btn btn-warning w-100 text-light mb-2"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default UpdateRecipe