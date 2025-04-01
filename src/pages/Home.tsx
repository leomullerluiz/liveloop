import PostCard from '@/components/custom/PostCard';
import { getPostList } from '@/services/post.service';
import { useEffect, useState } from 'react';

function Home() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState("");

    const getData = async () => {
        try {
            setLoading(true);
            const postData = await getPostList();
            setData(postData);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', data);
    }, [data]);

    return (
        <div className="items-center min-h-svh">
            <div className="container mx-auto flex gap-2 ">
                <PostCard
                    loading={loading}
                    excerpt={data?.[1]?.excerpt.rendered}
                    title={data?.[1]?.title.rendered}
                />
            </div>

        </div>
    );
}

export default Home;