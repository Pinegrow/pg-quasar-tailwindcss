import { createHead } from 'unhead'

export default ({ app /* , router, store */ }) => {
  app.use(createHead())
}
