-- First, drop the table and start fresh
DROP TABLE IF EXISTS review CASCADE;

-- Create the review table
CREATE TABLE review (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  language TEXT,
  full_name TEXT,
  email TEXT,
  nationality TEXT,
  travel_agent TEXT,
  wildlife_experience TEXT,
  guide TEXT,
  guide_rating TEXT,
  key_sightings TEXT[], -- Array type for multiple selections
  activities TEXT[], -- Array type for multiple selections
  wildlife_comments TEXT,
  accommodation_rating TEXT,
  facilities_rating TEXT,
  food_rating TEXT,
  housekeeping_rating TEXT,
  staff_rating TEXT,
  staff_standout TEXT[], -- Array type for multiple selections
  hospitality_comments TEXT,
  recommend_tuludi TEXT,
  communication_rating TEXT,
  marketing_source TEXT,
  overall_experience TEXT,
  final_comments TEXT
);

-- Enable RLS
ALTER TABLE review ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON review;
DROP POLICY IF EXISTS "Enable read access for authenticated users only" ON review;

-- Create a policy that allows all operations for anonymous users
CREATE POLICY "Allow anonymous access"
ON review
FOR ALL
TO anon
USING (true)
WITH CHECK (true);

-- Create a policy that allows all operations for authenticated users
CREATE POLICY "Allow authenticated access"
ON review
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true); 