interface ArticleProps {
  content: string;
}

const Article = ({ content }: ArticleProps) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Article;
