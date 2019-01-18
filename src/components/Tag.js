import styled from 'styled-components';

const Tag = styled.div`
  cursor: pointer;
  background: #f5f5f5;
  border: 1px solid transparent;
  padding: 6px 12px;
  border-radius: 12px;
  display: inline-block;
  font-size: 12px;
  margin-left: 12px;
  margin-bottom: 12px;
  transition: 0.15s ease;
  &:hover {
    border: 1px solid #DADCE0;
  }
  ${({ active }) => active && `
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 1px 3px 1px rgba(60,64,67,0.15);
    border: 1px solid #DADCE0;

    &:hover {
    }
  `}
`;

export default Tag;