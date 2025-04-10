DROP TRIGGER IF EXISTS trg_search_vector_update ON articles;

CREATE OR REPLACE FUNCTION update_search_vector() 
RETURNS trigger 
LANGUAGE plpgsql 
SECURITY INVOKER 
SET search_path = public 
AS $$
BEGIN
  NEW.search_vector := to_tsvector(
    'english',
    coalesce(NEW.category, '') || ' ' ||
    coalesce(NEW.title, '') || ' ' ||
    coalesce(NEW.description, '') || ' ' ||
    coalesce(NEW.author_name, '') || ' ' ||
    coalesce(NEW.author_role, '')
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_search_vector_update
BEFORE INSERT OR UPDATE ON articles
FOR EACH ROW EXECUTE FUNCTION update_search_vector();