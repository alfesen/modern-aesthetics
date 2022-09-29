import { Card } from '@mui/material'

import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {splitIntoParagraphs} from '../../helpers/splitIntoParagraphs'

const About = () => {
  const info = useSelector(state => state.info.items)
  const about = info[0]

  return (
    <Card className='p-5 mx-md-5 p-md-5 mb-3'>
        <h3 className='mb-3'>{about.title}</h3>
        <p>{splitIntoParagraphs(about.content)}</p>
        <div className='d-flex justify-content-end'>
          <Link to='/info'>Read about the page...</Link>
        </div>
      </Card>
  )
}

export default About
