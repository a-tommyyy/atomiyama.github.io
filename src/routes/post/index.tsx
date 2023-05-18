import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';

const Post = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (data && data.data) {
    const { content } = data.data
	  return (
     <Markdown>{ content }</Markdown>
	  )
  }
};

export default Post