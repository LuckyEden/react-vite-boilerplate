import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description
}) => {
    return (
        <Helmet>
            <title>
                {title}
            </title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default SEO;