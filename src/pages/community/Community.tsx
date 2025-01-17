import { IcPlusWhite20, IcChevron } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';

import * as S from './Community.style';
import Banner from './components/banner/Banner';
import { POST_DATA } from './mocks';

import Card from '../../components/common/postCard/PostCard';

const Community = () => {
  const handleScrollUp = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <S.CommunityWrapper>
      <Banner />
      <S.CommunityContainer>
        <S.CardList>
          {POST_DATA.map((post) => (
            <Card key={`community-post-${post.boardId}`} post={post} />
          ))}
        </S.CardList>
      </S.CommunityContainer>
      <S.FollowingBtns>
        <CircleButton size="small" shadow={true} icon={<IcPlusWhite20 />}>
          글쓰기
        </CircleButton>
        <S.TopBtn type="button" onClick={handleScrollUp}>
          <IcChevron />
        </S.TopBtn>
      </S.FollowingBtns>
    </S.CommunityWrapper>
  );
};

export default Community;
