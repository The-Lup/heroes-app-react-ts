import { useParams } from 'react-router-dom';

export const HeroPage = () => {
  const { idSlug = '' } = useParams();

  console.log({ idSlug });

  return <div>HeroPage</div>;
};
