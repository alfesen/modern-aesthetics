// Info for employers how is this page built, what is used, link to github, plaguedev.pl etc.

import { Card, Container } from '@mui/material'
import InfoItem from '../components/Info/InfoItem'
import PageTitle from '../components/UI/PageTitle'
import Loading from '../components/UI/Loading'
import { useSelector } from 'react-redux'


const Info = () => {
  const infoItems = useSelector(state => state.info.items)
  const isRendered = useSelector(state => state.info.isRendered)
 
  
  const handleEditing = () => {
    console.log('ye')
  }


  console.log(infoItems)
  let content = null

  if (infoItems !== null) {
    content = infoItems.map(item => {
      const { id, title, content, titleType } = item
      return (
        <InfoItem
          key={id}
          id={id}
          title={title}
          titleType={titleType}
          content={content}
          startEditing={handleEditing}
        />
      )
    })
  } else {
    content = <p>No info yet</p>
  }

  console.log(content)

  return (
    <Container>
      <PageTitle title='Info' />
      <Card className='p-5 m-3 mx-md-5'>
        {isRendered && content}
        {!isRendered && <Loading />}
      </Card>
    </Container>
  )
}

export default Info
