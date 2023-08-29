
export default function createCard({id, title, price, desc,images}){
    return (
        <div className="rounded-md" id={id}>
            {images.map((img)=>{
                // eslint-disable-next-line @next/next/no-img-element
                <img src={img} alt="" />
            })}
            <p>{title}</p>
            <p>{price}</p>
            <p>{desc}</p>
            <p>hello</p>
        </div>
    )
}


