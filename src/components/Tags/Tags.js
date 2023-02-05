import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { kebabCase } from "lodash";

const TagsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-flow: wrap;
`;

const Tag = styled(Link)`
  background: ${({ theme }) => theme.tagsBackgroundColor };
  border-radius: 3px;
  font-size: 0.875rem;
  padding: 6px 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.color };
`;

export const Tags = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <Tag key={tag} to={`/tags/${kebabCase(tag)}`}>#{tag}</Tag>
      ))}
    </TagsWrapper>
  );
};
