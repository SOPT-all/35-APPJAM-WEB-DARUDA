import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 30.1rem;
`;

export const Label = styled.label`
  width: 100%;

  ${({ theme }) => theme.fonts.body_16_b_1};
  color: ${({ theme }) => theme.colors.black};
`;

export const Input = styled.input<{ state: 'default' | 'act' | 'error' | 'success' }>`
  width: 100%;
  padding: 1.4rem 2.2rem;

  border: 0.1rem solid;
  ${({ theme }) => theme.fonts.caption_14_m};
  border-color: ${({ state, theme }) => {
    switch (state) {
      case 'act':
        return theme.colors.sys_green;
      case 'error':
        return theme.colors.sys_red;
      case 'success':
        return null;
      default:
        return theme.colors.gray4;
    }
  }};
  border-radius: 1.2rem;
`;

export const Description = styled.span<{ state: 'default' | 'act' | 'error' | 'success' }>`
  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ state, theme }) => {
    switch (state) {
      case 'act':
        return theme.colors.sys_green;
      case 'error':
        return theme.colors.sys_red;
      case 'success':
        return theme.colors.sys_green;
      default:
        return null;
    }
  }};
`;

export const InputRestrictions = styled.pre`
  width: 31.4rem;
  height: 6rem;

  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.black};
`;
