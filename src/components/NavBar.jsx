

export default function navBar(){
    return (
        <div>
            <ul className="flex justify-evenly uppercase fixed z-[999] w-full  border-b border-white p-3 bg-black text-white">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Contacts</li>
            </ul>
        </div>
    )
}