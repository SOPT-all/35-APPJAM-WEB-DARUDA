import styled from '@emotion/styled';

export const CardWrapper = styled.li`
  background: ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 1.6rem;
`;

export const CardLayout = styled.section`
  display: inline-flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-end;
  width: 100%;
  padding: 3rem 4.8rem 1.6rem;
`;

export const CardTopContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;

  header {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
`;

export const MetaInfo = styled.span`
  ${({ theme }) => theme.fonts.caption_12_r};
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const CardDivider = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.colors.gray4};

  stroke: ${({ theme }) => theme.colors.gray4};
`;

export const CardBottomBar = styled.section`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`;

export const CardTitleItem = styled.h1`
  ${({ theme }) => theme.fonts.body_20_b};
  color: ${({ theme }) => theme.colors.black};
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardTextItem = styled.pre<{ $isImgInclude: boolean }>`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;

  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.gray1};
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ $isImgInclude }) => ($isImgInclude ? 2 : 4)};
  -webkit-box-orient: vertical;

  word-wrap: break-word;
  word-break: break-word;
`;

export const BottomBarLeft = styled.span`
  display: flex;
  gap: 1.9rem;
  align-items: center;
`;
export const ImageGrid = styled.div<{ $imageCount: number }>`
  display: grid;
  grid-template-rows: ${({ $imageCount }) => {
    switch ($imageCount) {
      case 4:
        return 'repeat(2, 1fr)';
      case 3:
        return '1fr';
      case 2:
        return '1fr';
      case 1:
        return '1fr';
      default:
        return 'none';
    }
  }};
  grid-template-columns: ${({ $imageCount }) => {
    switch ($imageCount) {
      case 4:
        return 'repeat(2, 1fr)';
      case 3:
        return 'repeat(3, 1fr)';
      case 2:
        return 'repeat(2, 1fr)';
      case 1:
        return '1fr';
      default:
        return 'none';
    }
  }};
  gap: 0.8rem;
  width: 100%;
  margin-top: 0.6rem;

  ${({ $imageCount }) =>
    $imageCount === 5 &&
    `
    & > *:nth-child(1) {
      grid-column: 1 / 4; 
      grid-row: 1 / 2; 
    }

    & > *:nth-child(2) {
      grid-column:  4 / 7;  
      grid-row: 1 / 2; 
    }

    & > *:nth-child(3) {
      grid-column: 1 / 3;  
      grid-row: 2 / 3;  
    }

    & > *:nth-child(4) {
      grid-column: 3 / 5;  
      grid-row: 2 / 3; 
    }

    & > *:nth-child(5) {
      grid-column: 5 / 7;
      grid-row: 2 / 3;  
    }
  `}

  img {
    width: 100%;
  }
`;
