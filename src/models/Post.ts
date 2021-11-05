/** 本文含まない記事データ */
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  coverImage: string;
  category: string;
  tags: string[];
};

/** 本文含む記事データ */
export type PostData = {
  meta: PostMeta;
  content: string;
};
