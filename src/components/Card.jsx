const Card = ({ title, image }) => {
    return (
        <div className="card">
        <img className="h-[10rem]" src={image} alt={title} />
        <h2 className="text-white text-3xl font-medium">{title}</h2>
        </div>
    );
    }

export default Card;