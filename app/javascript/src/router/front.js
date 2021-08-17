
import Barber from '../pages/front/barbers'
import frontFoods from '../pages/front/foods'

const routes = [
  {
    path: '/barbers',
    name: 'frontBarbers',
    component: Barber,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/foods',
    name: 'frontFoods',
    component: frontFoods,
    meta: {
      layout: 'blank'
    }
  }
]

export default routes
