import hoka_dark from "../../hoks_assets/img/1000/hokanb_dark.png";
import hoka_white from "../../hoks_assets/img/1000/hokanb_white.png";

const Navigation = () => {
    const navigasi = [
        {
            name: "Home",
            path: "home",
        },
        {
            name: "About",
            path: "about",
        },
        {
            name: "Contact",
            path: "contact",
        },
    ];
    return (
        <nav className="w-full px-28 md:px-10 bg-white fixed top-0 left-0 ring-0 h-14 flex items-center justify-between shadow-md shadow-slate-100 z-[999]">
            <header className="text-2xl font-medium font-poppins"><img src={hoka_white} alt="" width={100} className=" rounded-lg"/></header>
            <nav>
                <ul>
                    {
                    navigasi.map((item, index) => {
                        return (
                            <li key={index} className="inline-block mx-3 font-poppins font-normal text-sm">
                                <a href={`#${item.path}`}>{item.name}</a>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
        </nav>
    )
}


export default Navigation;