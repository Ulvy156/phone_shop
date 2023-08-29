

export default function FooterComponent(){
    return (  
        <footer className="bg-black text-white">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center dark:text-gray-400">© 2023 . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Ulvy Romy</a>
                </li>
              
            </ul>
            </div>
        </footer>
    )
}