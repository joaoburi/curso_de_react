import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      }
    ]
  };

  // timeoutUpdate = null; 

  // componentDidMount() {
  //   this.handleTimeOut();
  // }

  // componentDidUpdate() {
  //   this.handleTimeOut();
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.timeoutUpdate);
  // }

  // handleTimeOut = () => {
  //   const { posts, counter } = this.state;
  //   posts[0].title = 'O titulo mudou';


  //  this.timeoutUpdate = setTimeout(() => {
  //     this.setState({ posts, counter: counter + 1 })
  //   }, 1000);
  // }


  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1> {post.title} </h1>
            <p> {post.body} </p>

          </div>
        ))}
      </div>
    )


    // return (
    //   <div className="App">
    //     <h1>{counter}</h1>
    //     {posts.map(post => (
    //       <div key={post.id}>
    //         <h1>{post.title}</h1>
    //         <p>{post.body}</p>
    //       </div>
    //       ))}
    //   </div>
    // );
  }
}


export default App;
