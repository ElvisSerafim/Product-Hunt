export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  publishedAt: string;
  author: string;
}

export interface ResponseAuth {
  access_token: string;
  token_type: string;
  scope: string;
}
