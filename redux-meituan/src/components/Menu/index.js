import classNames from 'classnames'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveIndex } from '../../store/modules/takeaway'

const Menu = () => {
  const { foodsList,activeIndex } = useSelector(state=>state.foods)
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  const dispatch = useDispatch()
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            onClick={()=>{dispatch(setActiveIndex(index))}}
            className={classNames(
              'list-menu-item',
              { active: activeIndex === index },
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
