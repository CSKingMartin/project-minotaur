import InputContext from '@atoms/Input';

export default class NavigationLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.list.map((objects) => (
        <div>
          <ul>
          <li>
            <a key={objects.category} className="NavigationLink" href="/">{ objects.category }</a>
            <ul className="Dropdown_Item_List">
            {
              objects.items.map((itemlist) => {
                return (
                  itemlist.map((item) => {
                    return (
                      <li key={item}>
                        <div className="Dropdown_Item" style= {{backgroundColor: this.props.secondarycolor }}>
                          <a href={"/catalog/" + objects.category + "/" + item}>{item}</a>
                        </div>
                      </li>
                    ) //return
                  }) //itemlist.map
                ) // return
              }) //objects.items.map
            }
            </ul>
          </li>
          </ul>
        </div>
      ))// this.props.list.map
    )//return
  }
}
