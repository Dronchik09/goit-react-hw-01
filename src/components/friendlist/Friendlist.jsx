import { listItem, list } from "./Friendlist.module.css";
import Friendlistitem from "./Friendlistitem";
export default function FriendList({ friends }) {
  return (
    <ul className={list}>
      {friends.map(item => {
        return (
          <li className={listItem} key={item.id}>
            <Friendlistitem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
