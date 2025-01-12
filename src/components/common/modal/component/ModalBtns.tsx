import styled from '@emotion/styled';

interface ModalBtnsProps {
  isPrimaryRight?: boolean;
  primaryBtnContent?: string;
  secondaryBtnContent?: string;
  singleBtnContent?: string;
  handleClose: () => void;
}

const DobbleBtns = ({ isPrimaryRight, primaryBtnContent, secondaryBtnContent, handleClose }: ModalBtnsProps) => {
  return (
    <S.ModalBtns>
      <S.ModalBtn $isPrimary={false} order={isPrimaryRight ? 0 : 1} onClick={handleClose}>
        {primaryBtnContent}
      </S.ModalBtn>
      <S.ModalBtn $isPrimary={true} order={isPrimaryRight ? 1 : 0} onClick={handleClose}>
        {secondaryBtnContent}
      </S.ModalBtn>
    </S.ModalBtns>
  );
};

const SingleBtn = ({ singleBtnContent, handleClose }: ModalBtnsProps) => {
  return <S.SingleBtn onClick={handleClose}>{singleBtnContent}</S.SingleBtn>;
};

export { DobbleBtns, SingleBtn };

const Button = styled.button`
  ${({ theme }) => theme.fonts.body_16_b};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  padding: 1.6rem 5.4rem;

  white-space: nowrap;
  text-align: center;
`;

const S = {
  ModalBtns: styled.section`
    display: flex;
    align-items: center;
  `,

  ModalBtn: styled(Button)<{ $isPrimary: boolean; order: number }>`
    order: ${({ order }) => order};

    color: ${({ theme, $isPrimary }) => ($isPrimary ? theme.colors.white1 : theme.colors.black)};

    background: ${({ theme, $isPrimary }) => ($isPrimary ? theme.colors.iris1 : theme.colors.gray4)};
    border: 1px solid ${({ theme }) => theme.colors.gray3};
    border-top: none;
    border-bottom: none;
    border-bottom-right-radius: ${({ order }) => (order ? '2rem' : '0')};
    border-bottom-left-radius: ${({ order }) => (order ? '0' : '2rem')};
  `,

  SingleBtn: styled(Button)`
    gap: 1rem;
    padding: 1.6rem 5.4rem;

    ${({ theme }) => theme.fonts.body_20_b};
    color: ${({ theme }) => theme.colors.white1};

    background: ${({ theme }) => theme.colors.iris1};
    border-radius: 3.2rem;
  `,
};
