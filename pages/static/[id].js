import styles from '../recipe/detail.module.css'
import { Navbar } from '../../components'
import axios from 'axios'
import ReactPlayer from 'react-player'

const DetailStatic = ({ recipe }) => {
   
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="mb-5 d-flex justify-content-center">
                    <section className={`${styles.detail} mb-5`}>
                        <h1 className={`${styles.title} text-center `}>{recipe ? recipe[0].title : 'Title'}</h1>
                        <div className="text-center mb-3 position-relative">
                            <img
                                className="mt-4"
                                src={recipe ? recipe[0].image : '/images/landingone.webp'}
                                alt='image'
                            />
                        </div>
                        <div className="mb-4">
                            <h1 className="fs-2 mb-3">Ingredients</h1>
                            <p style={{ fontSize: '16px' }}>
                                {
                                    recipe ? recipe[0].ingredients : ' Ingredient'
                                }
                            </p>
                        </div>
                        <div className="video-step">
                            <h1 className="fs-2 mb-3">Video Step</h1>
                            <ReactPlayer url={recipe && recipe[0].video}
                                controls={true}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const { data: respData } = await axios.get(`http://localhost:4000/v1/recipe`)
    const dataRecipes = respData.data
    const paths = dataRecipes.map((recipe) => {
        return {
            params: {
                id: recipe.id + ''
            }
        }
    })

    console.log(paths)

    return {
        paths: paths,
        fallback: true // false or 'blocking'
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    console.log(id);
    const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipe/static/${id}`);
    return {
      props: {
        recipe: RespData.data,
      },
    };
  };


export default DetailStatic