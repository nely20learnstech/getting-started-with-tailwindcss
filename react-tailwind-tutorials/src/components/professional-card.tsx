export const Card = () => {
    return(
        <div className="flex item-center m-20 border border-gray-200 rounder shadow p-3">
            <img src="girl-fighter.jpg" alt="person-image" width={130} height={130}
             className="rounded mr-4"/>

            <div className="text-gray-700">
                <h2 className="text-gray-900 font-bold text-2xl">Maria Lindford</h2>
                <div className="text-sm">Director of Marketing</div>
                <div className="text-sm">erlindford@example.com</div>
                <div className="text-sm">(555) 765-4321</div>
            </div>

            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    )
}