export function Footer() {
    return (
        <footer>
            <div className="max-w-6xl mx-auto px-4 sm:px-4">
                <div className="grid grid-cols-1 gap-4 gap-y-4 sm:gap-8 py-4 md:py-4 border-t border-gray-200 dark:border-slate-800">
                    Agradecimientos
                    <div className="md:flex md:items-center md:justify-between py-4 md:py-8">
                        <div className="text-sm text-gray-700 mr-4 dark:text-slate-400">
                            Plantilla astrowind Realizada por el equipo de
                            <span className="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
                            <a
                                className="text-blue-600 hover:underline dark:text-gray-200"
                                href="https://onwidget.com/">
                                onWidget
                            </a>
                            . Todos los derechos reservados.
                        </div>

                        <div className="text-sm text-gray-700 mr-4 dark:text-slate-400">
                            Iconos
                            <span className="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://cdn-teams-slug.flaticon.com/roman-kacerek.jpg)]"></span>
                            Realizado por Roman kacerek{' '}
                            <a
                                className="text-blue-600 hover:underline dark:text-gray-200"
                                href="https://www.flaticon.es/packs/file-types-21?word=archivos"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
