const Footer = () => {
    return (
        <footer className="bg-dark text-white py-10 px-6 md:px-4" id="contact">
            {/* Top Section */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-10 p-6 place-items-center border-b border-gray-700 pb-8">
                <div className="w-full flex items-center justify-center gap-4 md:flex-col md:items-start ">
                    <h1 className="text-5xl font-bold font-poppins hover:text-yellow-300">hokatech</h1>
                    <p className="text-xs opacity-50 font-poppins mt-4 w-[80%] border-l-2 pl-2 hover:text-yellow-300">
                    I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.
                    </p>
                </div>
                {/* Quick Links */}
                <div className=" flex gap-20 md:gap-10 items-center justify-between md:w-full md:flex-col-reverse md:items-start">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h2>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about" className="hover:text-yellow-300">About Me</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-yellow-300">skills</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-yellow-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div className="text-start">
                        <h2 className="text-xl font-semibold mb-4 text-yellow-300">Contact</h2>
                        <ul className="space-y-3">
                            <li>
                                📩 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hudukaja@gmail.com&su=Subject+Here&body=Message+Body+Here" target="_blank" className="hover:text-yellow-300">[hudukaja@gmail.com]</a>
                            </li>

                            <li>
                                📱 <a href="tel:+6282143698231" className="hover:text-yellow-300">0821 4369 8231</a>
                            </li>
                            <li>
                                🌐 <a href="https://linkedin.com/in/username" target="blank" className="hover:text-yellow-300">linkedin.com/in/username</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="py-6">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    
                    {/* Copyright */}
                    <p className="mt-6 md:mt-0 text-xs text-slate-400">
                        &copy; 2024 HokaTech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}


export default Footer