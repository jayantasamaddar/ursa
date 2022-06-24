import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';

import { CardMedia } from './components';
import { Avatar } from '../Avatar';

interface CardProps {
  image?: string;
  name?: string;
  fields?: [string, string][];
  className?: string;
  hoverChange?: boolean;
  noBorder?: boolean;
  noShadow?: boolean;
}

const UrsaCard: FC<CardProps> = ({
  image,
  name,
  fields,
  className,
  noBorder,
  noShadow
}): ReactElement => {
  return (
    <div className={`Ursa-Card ${className || ''}`}>
      <div className="Ursa-CardImageContent">
        <div className="Ursa-CardSnapshot">
          <div className="Ursa-CardImageContainer">
            {image ? (
              <CardMedia image={image} alt="Card Image" />
            ) : (
              <span className="Ursa-CardPlaceholder">
                <Avatar>{name}</Avatar>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="Ursa-CardBlockContent">
        <div className="Ursa-CardTitle">
          <span className="name">{name && name}</span>
        </div>
        {fields?.length &&
          fields?.map((e, indx) => {
            return (
              <div className="Ursa-CardText" key={indx}>
                <span className="field">{e[1]}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const Card = styled(UrsaCard)(
  ({ theme: { color, border, fontSize }, noShadow }) => `
    display: flex;
    cursor: pointer;
    border: 1px solid ${color['--ursa-border-primary']};
    border-radius: 4px;
    background-color: ${color['--ursa-bg-primary']};
    box-shadow: ${noShadow ? 'none' : '0px 0px 4px rgba(0, 0, 0, 0.25)'};

    .Ursa-CardImageContent {
      display: flex;
      flex-basis: 20%;
      justify-content: center;
      align-items: center;
      padding: 10px;

      & > .Ursa-CardSnapshot {
        display: flex;

        & > .Ursa-CardImageContainer {

          & > .Ursa-CardPlaceholder {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: ${border['--ursa-border-radius-full']};
            color: ${color['--ursa-text-primary']};
            background-color: ${color['--ursa-card-img-bg']};
            width: 56px;
            height: 56px;
            font-size: ${fontSize['--ursa-font-size-5']};
            font-weight: bold;
          }
        }
      }
    }

    .Ursa-CardBlockContent {
      flex-direction: column;
      flex-basis: 80%;
      padding: 10px;
      color: ${color['--ursa-text-primary']};

      & > .Ursa-CardTitle {
        display: flex;
        flex-grow: 1;
        padding-top: 2px;
        padding-bottom: 2px;

        & > span {
          font-weight: bold;
        }
      }

      & > .Ursa-CardText {
        display: flex;
        flex-grow: 1;
        padding-top: 2px;
        padding-bottom: 2px;
      }
    }

  `
);

export default Card;
