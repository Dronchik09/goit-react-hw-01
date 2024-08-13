import { listItem, list } from "./Friendlist.module.css";
import css from "./Friendlist.module.css";
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
