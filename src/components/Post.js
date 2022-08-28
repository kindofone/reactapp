function Post(props) {
  return (
    <div className='post-container'>
      <h3>{props.title}</h3>
      <button>{props.likes}</button>
    </div>
  );
}

export default Post;