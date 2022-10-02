import { useEffect, useState } from 'react';
import { Resource } from '@components/resources/Resource';
import sampleData from '@components/resources/sampleData.json';

const getData = async () => {
    var res = await fetch('http://localhost:3000/api/repo/search', {
        credentials: 'include',
        body: JSON.stringify({
            query: 'hola', //TODO
            num: 10,
            page: 0,
        }),
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const data = await res.json();

    //now retrieve the uploaders ids names

    if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
            res = await fetch(
                'http://localhost:3000/api/user/' + data[i].uploaderId,
                {
                    credentials: 'include',
                }
            );

            const userData = await res.json();
            data[i].uploader = userData.username;
        }
    }

    console.log(data);

    return data;
};
const logout = async () => {
    const res = await fetch('http://localhost:3000/api/auth/logout', {
        credentials: 'include',
    });

    const data = await res.json();
    return data;
};

export function Resp() {
    return sampleData.map(({ id, title, description, author, filename }) => {
        return (
            <Resource
                id={id}
                title={title}
                description={description}
                author={author}
                filename={filename}></Resource>
        );
    });
}

interface ApiResource {
    map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
    id: number;
    type: string;
    uploaderId: number;
    uploader: string;
    uploadDate: Date;
    textOrUrl: string;
    filePath: string;
    fileName: string;
    fileHash: string;
    approved: boolean;
    reputationPoint: string;
}

export function ListOfResources() {
    const [data, setData] = useState<ApiResource | undefined>(undefined);
    useEffect(() => {
        getData().then(setData);
    }, []);
    return (
        <div>
            {data?.map((item: ApiResource) => (
                <Resource
                    key={item.id}
                    id={item?.id}
                    title={item?.fileName}
                    description={item?.textOrUrl}
                    author={item?.uploader}
                    filename={item?.fileName}></Resource>
            ))}
        </div>
    );
}

export default ListOfResources;
