/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const colors = {
  iris1: '#4D4ECD',
  iris2: '#B9B9F6',
  orange1: '#F77B1B',
  orange2: '#FFD3B1',
  sys_red: '#F21C00',
  sys_green: '#40C927',
  black: '#212121',
  white1: '#FFFFFF',
  white2: '#F5F5F5',
  white1_hover: 'rgba(255, 255, 255, 0.4)',
  gray1: '#565959',
  gray2: '#848688',
  gray3: '#ACACAC',
  gray4: '#CCCCCC',
  gray5: '#EBEBEB',
  gray6: '#F0F2F2',
};

const fonts = {
  title_48_b: css`
    font-weight: 700;
    font-size: 4.8rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 6.8rem;
  `,
  title_40_b: css`
    font-weight: 700;
    font-size: 4rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 6rem;
  `,
  head_32_b: css`
    font-weight: 700;
    font-size: 3.2rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 4.8rem;
  `,
  head_28_m: css`
    font-weight: 500;
    font-size: 2.8rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 5.6rem;
  `,
  body_24_b: css`
    font-weight: 700;
    font-size: 2.4rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 4.8rem;
  `,
  body_24_sb: css`
    font-weight: 600;
    font-size: 2.4rem;
    font-family: 'AppleSDGothicNeoSB00', sans-serif;
    line-height: 4.8rem;
  `,
  body_20_b: css`
    font-weight: 700;
    font-size: 2rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 2.4rem;
  `,
  body_20_m: css`
    font-weight: 500;
    font-size: 2rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 4rem;
  `,
  body_20_r: css`
    font-weight: 400;
    font-size: 2rem;
    font-family: 'AppleSDGothicNeoR00', sans-serif;
    line-height: 4rem;
  `,
  body_16_b_1: css`
    font-weight: 700;
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 3.2rem;
  `,
  ody_16_b_2: css`
    font-weight: 700;
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 2rem;
  `,
  body_16_m: css`
    font-weight: 500;
    font-size: 1.6rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 3.2rem;
  `,
  caption_14_m: css`
    font-weight: 500;
    font-size: 1.4rem;
    font-family: 'AppleSDGothicNeoM00', sans-serif;
    line-height: 2rem;
  `,
  caption_12_b: css`
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'AppleSDGothicNeoB00', sans-serif;
    line-height: 1.8rem;
  `,
  caption_12_r: css`
    font-weight: 400;
    font-size: 1.2rem;
    font-family: 'AppleSDGothicNeoR00', sans-serif;
    line-height: 1.6rem;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;
