interface YoutubeEmbedProps {
    url?: string;
}

export function YoutubeEmbed({
    url,
}: YoutubeEmbedProps) {
    if (!url) {
        return null;
    }

    const videoId =
        url.match(
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?#]+)/
        )?.[1];

    if (!videoId) {
        return null;
    }

    console.log(videoId);


    return (
        <div className="my-8 overflow-hidden rounded-xl">
            <iframe width="849" height="478" src={`https://www.youtube.com/embed/${videoId}`} title="Scaling Hotstar for 25 million concurrent viewers" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
}