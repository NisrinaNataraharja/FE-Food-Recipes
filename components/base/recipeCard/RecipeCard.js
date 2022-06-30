import style from './card.module.css'
import Link from 'next/link'


export default function RecipeCard({
    id,
    key,
    title,
    photo,
    path,
    type,
    drop,
    update
}) {
    console.log(photo);
    return (
        <>
            <div className="col-sm-3 mb-4">
                <Link href={`/recipe/${id}`}>
                    <div className={[["card"], style["cards"]].join(" ")} key={key} >
                        <div className={style["card-body"]} >
                            <div className={style["img-div"]}>
                                <img className={style['imgproduct']} src={photo} alt="jas" 
                                onClick={path} />
                                {type==='edit' && <i onClick={drop} className="bi bi-x-circle"></i>}
                                {type==='edit' && <button onClick={update}>Update</button>}
                                <p>{title}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}