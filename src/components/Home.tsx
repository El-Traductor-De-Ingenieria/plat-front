import { useEffect, useState } from 'react';

interface Props {
    loginURL: string;
    resourceURL: string;
}

const getData = async () => {
    var res = await fetch('http://localhost:3000/api/auth/status', {
        credentials: 'include',
    });

    const data = await res.json();

    if (data && data.username) return true;
    else return false;

    return data;
};

export function Home({ loginURL, resourceURL }: Props) {
    const [isLoggedIn, setData] = useState<boolean>(false);
    useEffect(() => {
        getData().then(setData);
    }, []);

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4">
                            La biblioteca de recursos
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-600 mb-8 dark:text-slate-400">
                                La biblioteca de recursos busca proporcionar
                                contenidos, así como servicios bibliográficos y
                                documentales. Están hechas para ayudar a los
                                estudiantes, profesionales, y cualquier otra
                                persona que este en busca de ampliar sus
                                conocimientos.
                            </p>
                            <div className="max-w-none flex justify-center">
                                <div>
                                    <a
                                        className="text-white bg-blue-600 hover:bg-blue-800 mb-4 sm:mb-0 font-bold py-2 px-4 rounded"
                                        href={
                                            isLoggedIn ? resourceURL : loginURL
                                        }
                                        target={isLoggedIn ? '_self' : '_blank'}
                                        rel="noopener">
                                        {isLoggedIn
                                            ? 'Acceder'
                                            : 'Iniciar sesión'}
                                    </a>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
