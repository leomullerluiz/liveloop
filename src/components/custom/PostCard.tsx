const PostCardSkeleton = () => {
    return (
        <div className="overflow-hidden  animate-pulse rounded-lg border border-gray-100 bg-white shadow-xs max-w-100">
            <div className="h-56 w-[400px] bg-gray-200"></div>
            <div className="p-4 sm:p-6 flex flex-col gap-4">
                <div className="h-8 rounded bg-gray-200"></div>
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
    );
}

const PostCard = ({ loading, excerpt, title }: { loading: boolean, excerpt: string, title: string }) => {

    return (
        <>
            {loading ? (
                <PostCardSkeleton />
            ) : (
                <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs max-w-100">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">
                                {title}
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {excerpt}
                        </p>

                        <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                            Find out more

                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default PostCard;