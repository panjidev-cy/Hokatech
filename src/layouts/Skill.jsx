import CardList from "../components/Card"


const Skill = () => {
    return (
        
        <section className="w-full min-h-screen mt-96 flex flex-col items-center justify-center relative overflow-hidden px-24 md:px-10">
            {/* Background Text */}
            <h1 className="font-bold text-[400px] md:text-[200px] sm:text-[100px] opacity-25 font-poppins absolute inset-0 flex items-center justify-center -z-10 -top-44   ">
                skills
            </h1>
            
            {/* Card List */}
            <div className="w-full flex items-center justify-center   py-8">
                <CardList />
            </div>
        </section>
    )
}

export default Skill;