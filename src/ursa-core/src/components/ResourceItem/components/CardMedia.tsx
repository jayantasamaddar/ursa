import React, { FC, ReactElement } from 'react';

interface ImageComponent {
  height?: number | string;
  width?: number | string;
}

interface CardMediaProps {
  image: string | FC<ImageComponent>;
  height?: number;
  width?: number;
  alt?: string;
}

export const CardMedia = ({
  image: ImageComponent,
  height,
  width,
  alt
}: CardMediaProps): ReactElement => {
  let imageType: 'url' | 'function';

  if (typeof ImageComponent === 'string') {
    imageType = 'url';
  } else {
    imageType = 'function';
  }

  const cardMediaMarkup = {
    function: (
      <ImageComponent height={height || 'auto'} width={width || 'auto'} />
    ),
    url: (
      <img
        className="Ursa-CardImage"
        src={ImageComponent as string}
        alt={alt || ''}
      />
    )
  };

  return <div className="Ursa-CardMedia">{cardMediaMarkup[imageType]}</div>;
};
