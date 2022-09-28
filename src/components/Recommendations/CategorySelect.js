import s from './CategorySelect.module.scss'
import { useState } from 'react'
import { NativeSelect } from '@mui/material'

const CategorySelect = props => {
  const [category, setCategory] = useState('any')

  const categories = []

  props.items.forEach(item => categories.push(item.category))

  const uniqueCategories = [...new Set(categories)]

  const handleChange = e => {
    props.onChange(e.target.value)
    setCategory(e.target.value)
  }

  return (
    <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center mb-3 mx-5'>
      <h3>Choose Category:</h3>
      <div className='my-1'>
        <NativeSelect
          className={s.select}
          name='category'
          size='medium'
          variant='outlined'
          value={category}
          onChange={handleChange}>
          <option key='any' value='any'>
            any
          </option>
          {uniqueCategories.map(category => {
            return (
              <option className={s.option} key={category} value={category}>
                {category}
              </option>
            )
          })}
        </NativeSelect>
      </div>
    </div>
  )
}

export default CategorySelect
