const Main = () => {
    return(
        <div className="flex flex-col justify-center items-center bg-buckeyes-logo px-8 py-8 w-full bg-cover bg-center h-screen brightness-90" id="#home">
            <h1 className="text-6xl md:text-8xl font-semibold drop-shadow-lg pb-2">BUCKEYES SHUFFLED</h1>
            <h2 className="text-2xl md:text-4xl font-semibold drop-shadow-lg pb-4">Thursdays from 5-6pm</h2>
            <a href="https://www.instagram.com/buckeyesshuffled/?hl=en">
                <div className="rounded-md border-2 flex border-gray-100 px-8 py-2 transition duration-500 hover:bg-gray-100 brightness-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/>
                        <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"/></g></svg>
                    <h2 className="pl-4 font-semibold transition">Instagram</h2>
                </div>
            </a>
            
        </div>
    )
}

export default Main;