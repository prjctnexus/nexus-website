-- 1. Add the search_vector column
ALTER TABLE articles ADD COLUMN search_vector tsvector;

-- 2. Populate it with combined fields
UPDATE articles
SET search_vector = to_tsvector(
  'english',
  coalesce(category, '') || ' ' ||
  coalesce(title, '') || ' ' ||
  coalesce(description, '') || ' ' ||
  coalesce(author_name, '') || ' ' ||
  coalesce(author_role, '')
);

-- 3. Create a GIN index for fast full-text search
CREATE INDEX idx_search_vector ON articles USING GIN (search_vector);

-- Fields Eligible For Query (Concatenated)
-- * category : text 
-- * title: text
-- * description: text
-- * author_role: text
-- * author_name: text