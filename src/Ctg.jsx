import axios from 'axios';
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';

const Ctg = () => {

    const { id } = useParams();
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [desc, setDesc] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://infogujarat.in/api/news_details/1/${id}`);
                setTitle(response.data.data.title)
                setImage(response.data.data.blog_image[0].details)
                // setDesc(response.data.data.description)  // Set description too
                // document.querySelector('meta[property="og:title"]').setAttribute("content", response.data.title);
                // document.querySelector('meta[property="og:description"]').setAttribute("content", typeof response.data.description === 'string' ? response.data.description.replace(/(<([^>]+)>)/gi, '') : '');
                // document.querySelector('meta[property="og:image"]').setAttribute("content", `https://img.youtube.com/vi/${response.data.data.blog_image[0].details}/sddefault.jpg`);
                // document.querySelector('meta[property="og:url"]').setAttribute("content", `${protocol}//${host}${port ? `:${port}` : ''}/?nid=${list?.id}`);

                // document.querySelector('meta[name="title"]').setAttribute("content", response.data.title);
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                {/* <meta name="description" content={desc} /> */}
                <meta property="og:image" content={image} />
                <meta name="image" content={`https://img.youtube.com/vi/${image}/hqdefault.jpg`} />
            </Helmet>

            <h1>{title}</h1>
            {/* <p>{desc}</p> */}
            <img src={`https://img.youtube.com/vi/${image}/hqdefault.jpg`} alt="" className='' />
        </div>
    )
}

export default Ctg