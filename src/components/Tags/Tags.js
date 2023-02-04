import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const TagsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Tag = styled(Link)`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  font-size: 0.875rem;
  padding: 6px 12px;
`;

export const Tags = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags.map(({ tag }) => (
        <Link key={tag} to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
      ))}
    </TagsWrapper>
  );
};
