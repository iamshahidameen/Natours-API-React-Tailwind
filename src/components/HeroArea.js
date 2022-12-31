import ImageClipPath from './ImageClipPath';

const HeroArea = ({ image, hero, name, days, location }) => {
  return (
    <ImageClipPath
      cardImage={image}
      isHero={hero}
      cardTitle={name}
      days={days}
      location={location}
    />
  );
};

export default HeroArea;
