// Netlify function to test our Supabase connection
// Grab our credentials from a .env file or environment variables
//require('dotenv').config();
/*const {
    DATABASE_URL,
    SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY, {
    db: {
        schema: 'airtable',
    },
});

// Our standard serverless handler function
exports.handler = async event => {

// Just return the date and note columns of every note 
let { data: notes, error } = await supabase
    .from('incidents')
    .select('latitude, longitude')

  // Did it work?
  console.log(data, error);
  
}*/