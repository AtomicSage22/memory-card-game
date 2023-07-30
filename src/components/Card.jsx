const Card = ({ title, image, setSelectedCharacters, setSuccessCount, fail, setBestScore, bestScore, successCount}) => {
     function handleCardClick (){
        setSelectedCharacters((prev) => {
            if (successCount === 21) {
                alert("You win!");
                setSuccessCount(0);
                setBestScore(successCount);
            }
            if (prev.includes(title)) {
                alert("You lose!");
                fail = true;
                setSuccessCount(0);
                if (bestScore < successCount) {
                    setBestScore(successCount);
                }
                return []
            }
            setSuccessCount((previous) => previous + 1);
            return  [...prev, title]
        })
    }
    return (
        <div className="card hover:cursor-pointer w-60 flex flex-col items-center" onClick={handleCardClick}>
        <img className="h-[10rem]" src={image} alt={title} />
        <h2 className="text-white text-2xl font-medium">{title}</h2>
        </div>
    );
    }

export default Card;