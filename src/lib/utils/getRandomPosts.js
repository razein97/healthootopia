
export default function getRandomPost(
  posts,
  currentSlug,
  category,
  numberOfPostReturn
) {
  const sortedPosts = posts.map((post) => {
    //sort into passed category
    if (post.category === category) {
      return post;
    }
  });

  const totalPosts = sortedPosts.filter((e) => {
    if (e !== {}) {
      return e;
    }
  });

  //remove currentpost
  const tempRemovedCurrentPost = totalPosts.map((e) => {
    if (e.slug !== currentSlug) {
      return e;
    }
  });

  const removedCurrentPost = tempRemovedCurrentPost.filter((e) => {
    if (e !== {}) {
      return e;
    }
  });

  if (removedCurrentPost.length < numberOfPostReturn) {
    return removedCurrentPost;
  } else {
    // var sortDated = removedCurrentPost.sort(sortByDate);
    const shuffled = shuffleFisherYates(removedCurrentPost);
    const slicedArray = shuffled.slice(0, 3);
    return slicedArray;
  }
}

function shuffleFisherYates(array) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}
