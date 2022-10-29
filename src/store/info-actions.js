import { infoActions } from './info-slice'

export const fetchInfoData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/info.json`
      )

      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = await response.json()

      return data
    }
    try {
      const infoData = await fetchData()
      dispatch(
        infoActions.replaceItems({
          items: infoData,
        })
      )
    } catch (err) {}

    dispatch(infoActions.render())
  }
}

export const sendInfoData = async info => {
  await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/info.json`, {
    method: 'PUT',
    body: JSON.stringify(info),
  })
}
