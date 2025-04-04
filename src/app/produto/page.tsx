import Image from "next/image";


export default function () {
    // position: static, absolute, relative, fixed, sticky, z-index
    // flex: gap-0, flex-row, flex-col, items-center, justify-center
    return (
        <div>
            <header className="sticky z-3 top-0 left-0 bg-amber-600 h-32">
                <nav></nav>
                <aside className="absolute top-6 right-3">
                    <div className="z-2 h-20 w-20 bg-black rounded-full relative bg-cover bg-[url(/avatar.png)]">
                        <div className="bg-yellow-500 animate-pulse text-white h-5 w-5 rounded-full 
                        flex items-center justify-center absolute top-16">JS</div>

                        <div className="bg-black animate-pulse text-white h-5 w-5 rounded-full 
                        flex items-center justify-center absolute top-16 right-0">N</div>

                        <div className="bg-red-600 animate-pulse text-white h-5 w-5 rounded-full z-1
                        flex items-center justify-center absolute top-0 right-0">A</div>
                    </div>
                </aside>
            </header>
            <section className="bg-slate-700 h-[100vh] ">
                <h1>Produto</h1>

                <div className="flex flex-col md:flex-row justify-center p-5 gap-3">
                    <button className=" py-[10px] px-[50px] mr-3 w-full md:w-36 bg-violet-600">Home</button>
                    <button className="btn-css w-full md:w-36">Home</button>
                </div>



            </section>

            <section className="bg-blue-700 h-[100vh]">

            </section>

            <Image className="fixed right-3 bottom-3 animate-pulse" alt="logo" height={40} width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" />

        </div>
    )
}