import React from 'react'
import styles from './detail.module.css'
import { Navbar } from '../../components'
import { useRouter } from 'next/router'

const Detail = () => {
    const { query } = useRouter();
    console.log(query.id);
    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="mb-5 d-flex justify-content-center">
                    <section className={`${styles.detail} mb-5`}>
                        <h1 className={`${styles.title} text-center `}>Healthy Salad</h1>
                        <div className="text-center mb-3 position-relative">
                            <img
                                className="mt-4"
                                src='/images/landingone.webp'
                                alt='image'
                            />
                        </div>
                        <div className="mb-4">
                            <h1 className="fs-2 mb-3">Ingredients</h1>
                            <p style={{ fontSize: '16px' }}>
                                - 2 eggs <br />
                                - 2 tbsp mayonnaise <br />
                                - 3 slices bread <br />
                                - a little butter <br />
                                - ⅓ carton of cress <br />
                                - 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese <br />
                                - crisps , to serve
                            </p>
                        </div>
                        <div className="video-step">
                            <h1 className="fs-2 mb-3">Video Step</h1>
                            <button className='btn btn-warning w-100'>Play</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Detail