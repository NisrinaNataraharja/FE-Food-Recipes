import React, { useEffect, useState } from 'react'
import styles from './detail.module.css'
import { Navbar } from '../../components'
import { useRouter } from 'next/router'
import axios from 'axios'
import ReactPlayer from 'react-player'

const Detail = () => {
    const router = useRouter()
    const { id } = router.query
    const [dataDetail, setDataDetail] = useState()
    const fetchDetail = async (id) => {
        const result = await axios.get(`${process.env.NEXT_APP_URL_API}recipe/${id}`, {withCredentials: true})
        console.log(result);
        const data = result.data.data[0]
        setDataDetail(data)
        console.log(data)
    }
    useEffect(() => {
        fetchDetail(id)
    },[id])
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="mb-5 d-flex justify-content-center">
                    <section className={`${styles.detail} mb-5`}>
                        <h1 className={`${styles.title} text-center `}>{dataDetail ? dataDetail.title : 'Title'}</h1>
                        <div className="text-center mb-3 position-relative">
                            <img
                                className="mt-4"
                                src={dataDetail ? dataDetail.image : '/images/landingone.webp'}
                                alt='image'
                            />
                        </div>
                        <div className="mb-4">
                            <h1 className="fs-2 mb-3">Ingredients</h1>
                            <p style={{ fontSize: '16px' }}>
                                {
                                    dataDetail ? dataDetail.ingredients : ' Ingredient'
                                }
                            </p>
                        </div>
                        <div className="video-step">
                            <h1 className="fs-2 mb-3">Video Step</h1>
                            <ReactPlayer url={dataDetail && dataDetail.video}
                            controls={true}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Detail