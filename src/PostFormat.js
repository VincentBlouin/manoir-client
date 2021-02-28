import DateUtil from "@/DateUtil";
const PostFormat = {};
PostFormat.forThumb = function (post) {
    const url = new URL(post.link);
    post.link = url.pathname;
    if (post._embedded && post._embedded['wp:featuredmedia']) {
        const imageSizes = post._embedded['wp:featuredmedia']['0'].media_details.sizes;
        let chosenSize = imageSizes['medium_large'];
        post.dateFormatted = DateUtil.fromNow(new Date(post.date));
        if (!chosenSize) {
            chosenSize = imageSizes.full;
        }
        if (chosenSize !== undefined) {
            post.imageUrl = chosenSize.source_url;
        }
    }
    return post;
};
export default PostFormat;