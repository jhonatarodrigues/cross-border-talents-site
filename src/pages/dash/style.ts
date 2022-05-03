import styled from 'styled-components';
import Default from '../../default';

export const Banner = styled.div`
  height: 98vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: #f0f;
`;

export const Title = styled(Default.Title)`
  color: ${Default.color.blue};
  margin-bottom: 2.1875rem;
`;
export const ContentSearch = styled.div`
  padding: 1.125rem 1.875rem;
  background: ${Default.color.white};
  border-radius: 0.9375rem;
  align-items: center;
`;
export const InputSearch = styled.input`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  border: none;
  font-size: 14px;
  font-weight: 600;
  width: 12.5rem;
`;
export const InputDropDownSearch = styled.select`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  border: none;
  font-size: 14px;
  font-weight: 600;
  width: 9.375rem;
  background: ${Default.color.white};
  color: ${Default.color.success};
  margin-right: 1.25rem;
`;
export const ButtonSearch = styled.button`
  background: ${Default.color.success};
  color: ${Default.color.white};
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  border-radius: 0.625rem;
  padding: 1.125rem;
`;
export const SubtitleSearchBanner = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.gray};
  padding: 1.25rem 0 3.75rem;
  a {
    text-decoration: underline;
    color: ${Default.color.blue};
  }
`;
export const IconSearch = styled.div`
  width: 43px;
  height: 35px;
  background: #ff0;
  margin-right: 0.625rem;
`;

export const TextIconSearch = styled.h3`
  flex-direction: column;
  font-size: 0.75rem;
  color: ${Default.color.gray};
  span {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${Default.color.spotlight};
  }
`;
