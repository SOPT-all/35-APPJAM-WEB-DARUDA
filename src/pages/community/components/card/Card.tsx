import { IcComment, IcBookmark, IcOverflowGray44 } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Chip from '@components/chip/Chip';
import DropDown from '@components/dropdown/DropDown';
import { formatContent } from '@pages/community/utils';

import * as S from './Card.styled';

interface CardDataProp {
  post: {
    boardId: number;
    toolId: number;
    toolName: string;
    toolLogo: string;
    title: string;
    content: string;
    images: string[];
    updatedAt: string;
    nickName: string;
    commentCount: number;
  };
}

const Card = ({ post }: CardDataProp) => {
  const { toolName, toolLogo, title, content, images, updatedAt, nickName, commentCount } = post;

  return (
    <S.CardWrapper>
      <S.CardLayout>
        <S.CardTopContent>
          <header>
            <Chip size="medium" stroke={true}>
              <Chip.RectContainer>
                <Chip.Icon src={toolLogo} alt={`icon-${toolName}`} height={2} />
                <Chip.Label>{toolName}</Chip.Label>
              </Chip.RectContainer>
            </Chip>
            <S.MetaInfo>
              <span>{nickName}</span>
              <span>|</span>
              <span>{updatedAt}</span>
            </S.MetaInfo>
          </header>
          <S.CardTitleItem>{title}</S.CardTitleItem>
          <S.CardTextItem>{formatContent(content, images.length)}</S.CardTextItem>
          <S.ImageGrid $imageCount={images.length}>
            {images.map((image, i) => (
              <img key={i} src={image} alt={`${i}`} />
            ))}
          </S.ImageGrid>
        </S.CardTopContent>
        <S.CardDivider />
        <S.CardBottomBar>
          <S.BottomBarLeft>
            <SquareButton icon={<IcComment />} size="small" stroke={false}>{`${commentCount}개`}</SquareButton>
            <SquareButton icon={<IcBookmark />} size="small" stroke={false}>
              북마크
            </SquareButton>
          </S.BottomBarLeft>
          <DropDown position="end">
            <DropDown.ToggleBtn>
              <IcOverflowGray44 />
            </DropDown.ToggleBtn>
            <DropDown.Content>
              <DropDown.Item
                onClick={() => {
                  alert('클릭!');
                }}
              >
                수정하기
              </DropDown.Item>
              <DropDown.Item
                status="danger"
                onClick={() => {
                  alert('클릭!');
                }}
              >
                삭제하기
              </DropDown.Item>
            </DropDown.Content>
          </DropDown>
        </S.CardBottomBar>
      </S.CardLayout>
    </S.CardWrapper>
  );
};

export default Card;