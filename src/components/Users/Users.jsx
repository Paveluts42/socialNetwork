import React from "react";
import s from "./UsersStyle.module.css";
let Users = props => {
  debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://sun9-49.userapi.com/c846123/v846123192/1cfb5/rouLzARdc4o.jpg",
        fullName: "Pavel",
        status: "i'm a boss",
        followed: true,
        location: { city: "Spb", country: "Russia" }
      },
      {
        id: 2,
        photoUrl:
          "https://sun9-13.userapi.com/c851128/v851128236/12193d/29OqWQhLIJE.jpg",
        fullName: "Nastua",
        status: "i'm a bob",
        followed: true,
        location: { city: "Sictivkar", country: "Russia" }
      },
      {
        id: 3,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dmitry_Medvedev_govru_official_photo_2.jpg",
        fullName: "Dmitry",
        status: "i'm a boss too",
        followed: false,
        location: { city: "Moscow", country: "Russia" }
      }
    ]);
  }
  debugger;
  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
