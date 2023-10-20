import { Image } from "@kvib/react/src";

type DocsAnatomyProps = {
  imgPath: string;
};

export const DocsAnatomy = ({ imgPath }: DocsAnatomyProps) => {
  return <Image width="100%" padding={[0, "1rem", "3rem"]} src={imgPath} backgroundColor="white" />;
};
