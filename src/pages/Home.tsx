import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://api-liveloop.leomullerluiz.com/wp-json/wp/v2/posts/8')
            .then(response => {
                setData(response.data);
            })
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-svh text-center">
            Tailwind ✅ <br />
            Shadcn ✅ <br />
            Darkmode ✅ <br />
            Navigation/Routes ✅ <br />
            Axios ✅ <br />
            {data && <div>Data: {JSON.stringify(data)}</div>}
        </div>
    );
}

export default Home;