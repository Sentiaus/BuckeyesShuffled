const Officers = () => {

    const officers = [
        {
            name:"Serena Mehta",
            role:"President",
            image: "vite.svg"
        },
        {
            name:"Aniline Paudel",
            role:"Vice President",
            image: "vite.svg"
        },
        {
            name:"Victor Fawole",
            role:"Treasurer",
            image: "vite.svg"
        },
    ]


    return(
        <div className="flex flex-col bg-gray-300 px-8 py-8 w-full">
            <h1 className="flex justify-center text-3xl font-bold pb-4 ">Officers</h1>
            <div className="flex flex-col justify-between lg:justify-around items-center md:flex-row lg:mx-64">
                {officers.map((officer =>(
                    <div key={officer.name} className="flex flex-col justify-center">
                        <img src={officer.image} alt={officer.name} className="flex justify-center items-center"/>
                        <h2>{officer.name}</h2>
                        <h3>{officer.role}</h3>
                    </div>
                )))}
            </div>
        </div>

    )
}

export default Officers;