import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { TextArea } from "../../common/formsControls/FormsControls"



const maxLength10 = maxLengthCreator(10)
const MyPostForm = React.memo((props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field name={"posted"} component={TextArea}
          placeholder={"enter you post"} validate={[required, maxLength10]}
        />

        <div className={s.buttonArea}>
          <button className={s.button}><svg className={s.button__svg}><rect className={s.button__rect}></rect></svg>add post</button>
        </div>


      </div>
    </form>
  )
})

const ReduxMyPostForm = reduxForm({ form: "post" })(MyPostForm)


const MyPosts = props => {


  let post = [...props.posts].reverse().map(p => {
    return <Post className="globolColorText" message={p.message} key={p.id} likesCount={p.likesCount} />;
  });
  let AddPost = (values) => {

    props.AddPost(values.posted)
  }

  return (<div>
    <div className={s.postBlock}>
      <h3 className="globolColorText"> My posts</h3>


      <ReduxMyPostForm onSubmit={AddPost} props={props} />
    </div>
    <div className={s.posts}>{post}</div>
  </div>
  );
};

export default MyPosts;
