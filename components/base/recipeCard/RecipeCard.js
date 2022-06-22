import style from './card.module.css'
import Link from 'next/link'

export default function RecipeCard({
    id,
    key,
    title,
    photo
}) {
    console.log(photo);
    return (
        <>
            <div className="col-sm-3 mb-4">
                <Link href={`/recipe/${id}`}>
                    <div className={[["card"], style["cards"]].join(" ")} key={key} >
                        <div className={style["card-body"]} >
                            <div className={style["img-div"]}>
                                <img className={style['imgproduct']} src={photo} alt="jas"/>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}