import { IcMypageBookmark32 } from '@assets/svgs';
import Chip from '@components/chip/Chip';

import * as S from './PostCard.styled';

interface PostCardPropsType {
  isMine: boolean;
  title: string;
  updatedAt: string;
  toolLogo: string;
  onClick: () => void;
}

const PostCard = ({ isMine, title, updatedAt, toolLogo, onClick }: PostCardPropsType) => {
  return (
    <S.CardWrapper>
      <Chip stroke={true} size="medium">
        <Chip.RectContainer>
          <Chip.Icon src={toolLogo} alt="Custom Icon" />
          <Chip.Label>ChatGPT</Chip.Label>
        </Chip.RectContainer>
      </Chip>
      <S.Title>{title}</S.Title>
      <S.Date>{updatedAt}</S.Date>
      <S.ButtonWrapper>
        {isMine ? <button onClick={onClick}>삭제</button> : <IcMypageBookmark32 onClick={onClick} />}
      </S.ButtonWrapper>
    </S.CardWrapper>
  );
};

export default PostCard;
