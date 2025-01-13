import { IcBookmark32 } from '@assets/svgs';
import styled from '@emotion/styled';

export const CardWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 0.9rem;
  width: 20rem;
  height: 20rem;
  padding: 2.1rem 2.6rem 1.6rem;

  background: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: 2rem;

  &:hover {
    box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  }
`;

export const CardLogo = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 1.4rem;
`;

export const CardTitle = styled.h2<{ $lineCount: number }>`
  color: ${({ theme }) => theme.colors.black};
  ${({ $lineCount, theme }) => ($lineCount === 1 ? theme.fonts.body_20_b : theme.fonts.body_16_b_2)};
  white-space: pre;
`;

export const CardKeyword = styled.div`
  position: absolute;
  bottom: 1.6rem;
  display: flex;
  gap: 0.6rem;
`;

export const BookmarkBtn = styled(IcBookmark32)`
  position: absolute;
  right: 2.6rem;
`;
