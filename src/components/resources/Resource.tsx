import '@styles/post.scss';

interface Resource {
	id: number;
	author: string;
	title: string;
	description:string;
	filename: string;
}

function getFileExtension(fileName: string): string {
    return fileName.split('.').pop()!;
}

function getTypeOfFile(fileExtension: string): string {
    let fileTypes = {
        "music": ['WAV', 'MP3', 'OPUS', 'OGG'],
        "text": ['TXT', 'DIC', 'DOC', 'TEX', 'DIZ', 'EXC', 'IDX', 'LOG'],
        "image": ['BMP', 'GIF', 'JPG', 'TIF', 'PNG'],
        "video": ['MP4', 'MOV', 'WMV', 'AVI', 'AVCHD', 'FLV', 'F4V', 'SWF'],
        "compressed": ['ZIP', 'RAR'],
        "pdf": ['PDF'],
    };

    let fType: keyof typeof fileTypes;

    for (fType in fileTypes) {
        const extensions = fileTypes[fType];
        if (extensions.includes(fileExtension)) return fType;
    }
    
    return 'unknown';
}


export function Resource({author, title, description, filename}: Resource) {
    return (
    <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img
                    className="w-8 h-8"
                    src={ `../../public/images/extensions/${getTypeOfFile(getFileExtension(filename).toUpperCase())}.png` }
                    alt={ `Archivo .${getFileExtension(filename)}` }
                />
            </div>

            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white"> 
                    {title} 
                </p>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400"> 
                    {description} 
                </p>

                <a href={author} className="text-sm text-gray-500 truncate no-underline hover:underline dark:text-white"> 
                    {author} 
                </a>
            </div>

            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                { getFileExtension(filename.toUpperCase()) }
            </div>
        </div>
    </li>
    );
}

export default Resource;