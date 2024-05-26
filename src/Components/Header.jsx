const Header = ({ price, image, description }) => {
    return (
        < div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl min-h-[400px] flex flex-col justify-between" >
            <div className="h-full py-4 px-6 flex flex-col gap-2">
                <a href="#" className="text-2xl font-bold text-gray-700">Adidas</a>
                <p className="text-gray-500">
                    {description}
                </p>
            </div>
            <div className={`h-full flex overflow-hidden max-h-[200px] max-w-[300px] ${image}`}>
                <img
                    src={image}
                    alt="Adidas"
                    className="w-full object-cover"
                />
            </div>
            <div className="py-4 px-6 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg">
                <span className="text-white font-bold">{price}</span>
                <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
                    Agregar al carrito
                </button>
            </div>
        </div >
    )
}

export default Header