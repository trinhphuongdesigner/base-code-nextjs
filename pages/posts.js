import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { CMS_NAME } from '../lib/constants';

import * as action from '../redux/actions';

const defaultDate = '2020-03-16T05:35:07.322Z';

function Posts(props) {
  const {
    postsState,
    getAllPosts,
  } = props;

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const heroPost = postsState?.data[0];
  const morePosts = postsState?.data.slice(1);
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
        <HeroPost
          title={heroPost.title}
          date={defaultDate}
          author={heroPost.userId}
          slug={heroPost.id}
          body={heroPost.body}
        />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  postsState: state.postsState,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(action.actionGetAllPosts()),
});

Posts.propTypes = {
  postsState: PropTypes.instanceOf(Object).isRequired,
  getAllPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
