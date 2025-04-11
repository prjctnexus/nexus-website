DROP TRIGGER IF EXISTS trg_search_vector_update ON articles;

CREATE OR REPLACE FUNCTION update_search_vector() 
RETURNS trigger 
LANGUAGE plpgsql 
SECURITY INVOKER 
SET search_path = public 
AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', coalesce(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW.category, '')), 'C') ||
    setweight(to_tsvector('english', coalesce(NEW.author_name, '')), 'D') ||
    setweight(to_tsvector('english', coalesce(NEW.author_role, '')), 'D');
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_search_vector_update
BEFORE INSERT OR UPDATE ON articles
FOR EACH ROW EXECUTE FUNCTION update_search_vector();