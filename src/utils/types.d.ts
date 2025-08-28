export type HeadCard = {
  headline: string;
  image: string;
  url: string;
  author: {
    name: string;
  };
  publisher: {
    type: string;
    name: string;
    logo: {
      type: string;
      url: string;
    };
    datePublished: string;
    description: string;
    url: string;
  };
};
