import CachedRoundedIcon from '@mui/icons-material/CachedRounded'
import { Card } from '@mui/material'
import s from './Loading.module.scss'

const Loading = () => {
  return (
    <Card className='p-5'>
      <div className={s.loading}>
        <CachedRoundedIcon />
      </div>
    </Card>
  )
}

export default Loading
