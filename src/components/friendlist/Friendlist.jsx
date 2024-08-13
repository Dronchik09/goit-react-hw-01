import { listItem, list } from "./FriendList.module.css";
import css from "./FriendList.module.css";
import clsx from "clsx";
export default function FriendList({ friends }) {
  return (
    <ul className={list}>
      {friends.map(( {avatar, name, isOnline, id}) => {
        return (
          <li className={listItem} key={id}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.nameTitle}>{name}</p>
            <p className={clsx(isOnline ? css.online : css.offline)}>
              {isOnline ? "online" : "offline"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
