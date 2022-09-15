import type { Resourse } from '../models';
import '../styles/post.scss';

export function Recursos({ description,author, title,filename }: Resourse) {
    
	return (
			<li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img
                            className="w-8 h-8"
                            src={"../../public/images/extensions/"+getTypeofFile(getFileExtension(filename).toUpperCase())+".png"}
                            alt={"Archivo ."+getFileExtension(filename)}
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p
                            className="text-sm font-medium text-gray-900 truncate dark:text-white"
                        >
                            {title}
                        </p>
                        <p
                            className="text-sm font-light text-gray-500 dark:text-gray-400"
                        >
                            {description}
                        </p>
                        <a
                            href={author}
                            className="text-sm text-gray-500 truncate no-underline hover:underline dark:text-white"
                        >
                            {author}
                        </a>
                    </div>
                    <div
                        className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                        {getFileExtension(filename.toUpperCase())}
                    </div>
                </div>
            </li>
	);
}
function getFileExtension(fileName:string):string {
    return fileName.split('.').pop()!;
}
function getTypeofFile(fileExtension:string):string {
    let type:string="";
    let music:string[]=['WAV','MP3','OPUS','OGG'];
    let text:string[]=['TXT','DIC','DOC','TEX','DIZ','EXC','IDX','LOG'];
    let image:string[]=['BMP', 'GIF', 'JPG', 'TIF' , 'PNG'];
    let video:string[]=['MP4','MOV','WMV','AVI','AVCHD','FLV', 'F4V', 'SWF']
    let compressed:string[]=['ZIP','RAR']
    if (music.includes( fileExtension )) {
        type = "music";
    }else if(text.includes( fileExtension )){
        type = "text";
    }else if(image.includes( fileExtension )){
        type = "image";
    }else if(video.includes( fileExtension )){
        type = "video";
    }else if(compressed.includes( fileExtension )){
        type = "compressed";
    }else if("PDF"== fileExtension ){
        type = "pdf";
    }else{
        type = "unknown";
    }
    return type;
}