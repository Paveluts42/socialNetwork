import React from "react";
import s from "./UsersStyle.module.css";
import * as axios from "axios";
import userImg from "../../content/img projekt/016f722ab179a9441086e259856049b0.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props)

    alert("hah")
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

      this.props.setUsers(response.data.items)
    })

  }


  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userImg} className={s.usersPhoto} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
                      }}
                    >
                      Follow
                  </button>
                  )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    )
  }
}
export default Users;
