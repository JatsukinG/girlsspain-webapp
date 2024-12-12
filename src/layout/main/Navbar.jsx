const items = [
    {
        href: '#home',
        name: 'Inicio'
    }, {
        href: '#models',
        name: 'Models'
    }, {
        href: '#another',
        name: 'Another'
    }, {
        href: '#another-one',
        name: 'Another One'
    },
]


const Navbar = () => {
    return (
        <header className="z-50 fixed top-0 left-0 w-full">
            <div className="relative w-full h-20 grid grid-rows-3">
                <div className="row-span-2 bg-black"/>
                <div className="w-full bg-navbar"/>
                <div className="absolute inset-0 px-8 flex items-center justify-between">
                    <h2 className="font-bold text-fuchsia-500">
                        Models Landing
                    </h2>
                    <nav>
                        <ul className="flex gap-8">
                            {
                                items.map(item => (
                                    <li key={item.href}>
                                        <a href={item.href}
                                           className="font-bold text-sm text-white hover:text-fuchsia-500">
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;