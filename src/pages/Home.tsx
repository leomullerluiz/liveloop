import { useState } from 'react';
import { getPostDataById } from '../services/post.service';
import { Button } from '@/components/ui/button';


function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState("");

    const getData = async () => {
        try {
            setLoading(true);
            const postData = await getPostDataById();
            setData(postData);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-svh text-center">
            Tailwind ✅ <br />
            Shadcn ✅ <br />
            Darkmode ✅ <br />
            Navigation/Routes ✅ <br />
            Axios ✅ <br />
            <Button onClick={getData}>Get Data {loading && <div>Loading...</div>}</Button>
            {data && <div>Data: {JSON.stringify(data)}</div>}
        </div>
    );
}

export default Home;