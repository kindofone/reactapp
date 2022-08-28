import './App.css';
import Post from './Post';

const posts = [
  {
    title: "Hello",
    likes: 12,
  },
  {
    title: "DALKJL",
    likes: 212,
  },
  {
    title: "KJKK",
    likes: 2,
  },
  {
    title: "KK",
    likes: 12,
  },
];

function App() {
  return (
    <div className="App">
      {posts.map(post => (
          <Post key={post.title} title={post.title} likes={post.likes} />
        ))}
    </div>
  );
}

export default App;
