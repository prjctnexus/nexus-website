-- 1. Add the search_vector column
ALTER TABLE articles ADD COLUMN search_vector tsvector;

-- 2. Populate it with combined fields with weights
UPDATE articles SET search_vector =
  setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
  setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
  setweight(to_tsvector('english', coalesce(category, '')), 'C') ||
  setweight(to_tsvector('english', coalesce(author_name, '')), 'D') ||
  setweight(to_tsvector('english', coalesce(author_role, '')), 'D');

-- 3. Create a GIN index for fast full-text search
CREATE INDEX idx_search_vector ON articles USING GIN (search_vector);

-- Fields Eligible For Query (Concatenated)
-- * category : text 
-- * title: text
-- * description: text
-- * author_role: text
-- * author_name: text