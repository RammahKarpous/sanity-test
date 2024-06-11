export type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    body: {
        _type: string;
        _style: string;
        children: {
            _type: string;
            text: string;
        }[];
    }[];
};
