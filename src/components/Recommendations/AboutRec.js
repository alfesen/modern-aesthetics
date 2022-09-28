import s from './AboutRec.module.scss'
import { Card } from '@mui/material'

const AboutRec = () => {
  return (
    <Card className='my-3 mb-5  mx-md-5 p-5 px-1 px-md-5 text-center'>
      <h3>What's it about?</h3>
      <div className={`${s.about} py-3 px-5`}>
        <p>
          Well, it may seem that this page is about some books, or movies, or
          any other stuff that I may read or watch earlier in my life, and it is
          obviously based on this part of my experience, but the main goal of it
          - my aim - is to incline the visitor to think a bit. You wan't find
          here any particular title or author, although some bits of content are
          indeed derived from real life examples.
        </p>
        <p>
          <span>Note:</span> if one or another card have driven you to meditate
          over some of this topics, you may give it a like by clicking the heart
          in a corner of each item or by double clicking the card itself. Keep
          in mind, that you are not authorized, so any of your likes would be
          anonymous, public, and wikipedia-ish - anyone can change your opinion
          (be careful who you are listen two). Primarily, your likes are
          informative for me if someone made any use of my working.
        </p>
      </div>
    </Card>
  )
}

export default AboutRec
