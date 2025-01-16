import { IcArrowDownBlack24, IcArrowDownBlack24Copy } from '@assets/svgs';
import { useState } from 'react';

import * as S from './Category.styled';

const HEADER_TEXTS = {
  category: '카테고리',
} as const;

const CATAGORY_TEXTS = [
  'AI',
  '협업&커뮤니케이션',
  '영상&음악',
  '커리어&자기개발',
  '문서 작성&편집',
  '데이터',
  '생활',
  '그래픽&디자인',
  '프레젠테이션',
  '코딩&개발',
  '설계&모델링',
] as const;

export const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState<number | null>(null);

  const toggleCategory = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCategoryClick = (index: number) => {
    setIsClicked(index); // 클릭된 항목의 index를 상태로 저장

    // TODO: 카테고리 클릭 시 '툴리스트' 페이지에서 해당 카테고리가 선택되어 보이도록 구현
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const shouldDisplayDropdown = isHover || isOpen;

  return (
    <S.CategoryNav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.CategorySection onClick={toggleCategory} aria-label="카테고리 열기">
        {HEADER_TEXTS.category}
        <IcArrowDownBlack24 width="2.4rem" height="2.4rem" />
      </S.CategorySection>
      {shouldDisplayDropdown && (
        <S.OpenedCategoryWrapper>
          <S.OpenedCategory onClick={toggleCategory}>
            카테고리 <IcArrowDownBlack24Copy width="2.4rem" height="2.4rem" />
          </S.OpenedCategory>
          <S.CategoryDropdown>
            {CATAGORY_TEXTS.map((category, index) => (
              <CategoryItem
                key={index}
                category={category}
                isClicked={isClicked === index}
                onClick={() => handleCategoryClick(index)}
              />
            ))}
          </S.CategoryDropdown>
        </S.OpenedCategoryWrapper>
      )}
    </S.CategoryNav>
  );
};

// 카테고리 아이템
interface CategoryItemProps {
  category: string;
  isClicked: boolean;
  onClick: () => void;
}

const CategoryItem = ({ category, isClicked, onClick }: CategoryItemProps) => {
  return (
    <S.CategoryItem isClicked={isClicked} onClick={onClick}>
      {category}
    </S.CategoryItem>
  );
};
