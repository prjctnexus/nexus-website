CREATE OR REPLACE FUNCTION search_articles(query text)
RETURNS TABLE (
  id bigint,
  title text,
  description text,
  created_at timestamptz,
  href text,
  category text,
  author_name text,
  author_role text,
  author_image_url text,
  author_href text,
  rank real
) AS $$
  SELECT 
    id,
    title,
    description,
    created_at,
    href,
    category,
    author_name,
    author_role,
    author_image_url,
    author_href,
    ts_rank(search_vector, websearch_to_tsquery('english', query)) AS rank
  FROM articles
  WHERE search_vector @@ websearch_to_tsquery('english', query)
  ORDER BY rank DESC;
$$ LANGUAGE sql STABLE SET search_path = 'public';