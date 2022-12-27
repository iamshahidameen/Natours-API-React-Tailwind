import ImageClipPath from './ImageClipPath';

const HeroArea = () => {
  return (
    <ImageClipPath
      cardImage={'https://natours.netlify.app/img/hero-small.jpg'}
      isHero={true}
      cardTitle={'The Sea Explorer tour'}
    />
  );
};

export default HeroArea;
