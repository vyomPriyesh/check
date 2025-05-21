import axios from 'axios'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'

const Ctg = ({ ssrData }) => {
  const { id } = useParams()

  const [title, setTitle] = useState(ssrData?.title || '')
  const [image, setImage] = useState(ssrData?.image || '')

  useEffect(() => {
    if (!ssrData) {
      const getData = async () => {
        const response = await axios.get(`https://infogujarat.in/api/news_details/1/${id}`)
        setTitle(response.data.data.title)
        setImage(response.data.data.blog_image[0]?.details || '')
      }
      getData()
    }
  }, [])

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="image" content={`https://img.youtube.com/vi/${image}/hqdefault.jpg`} />
        <meta property="og:image" content={`https://img.youtube.com/vi/${image}/hqdefault.jpg`} />
      </Helmet>

      <h1>{title}</h1>
      <img src={`https://img.youtube.com/vi/${image}/hqdefault.jpg`} alt="" />
    </div>
  )
}

export default Ctg
