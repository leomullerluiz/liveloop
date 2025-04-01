import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();

    return (
        <>
            Post {id}
        </>
    );
}

export default Post;