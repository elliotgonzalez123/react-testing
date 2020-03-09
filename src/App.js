import React from 'react';
import Header from './components/header';
import './app.scss';
import Headline from './components/headline';
import SharedButton from './components/button/';
import ListItem from './components/listitem';
import Test from './components/test';
import { connect } from 'react-redux';
import { getPosts } from './actions/index';

function App({ posts, getPosts }) {
  const configButton = {
    buttonText: 'Get posts',
    emitEvent: getPosts
  };

  const onTestClick = () => {
    console.log('taakov');
  };

  return (
    <div data-test="app-component" className="App">
      <Header />

      <section className="main">
        <Test onTestClick={onTestClick} />
        <Headline header="Posts" desc="Click the button to render posts" />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, idx) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return <ListItem key={idx} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { getPosts })(App);
