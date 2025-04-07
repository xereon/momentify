# Momentify

Momentify is a social media platform that combines ephemeral content with collaborative storytelling and location-based discovery.

## Key Features

- **Collaborative Stories**: Users can start a "Moment" (short video/photo) that others nearby can add to, creating collaborative narratives
- **Geo-Discovery**: Content is organized by location, allowing users to explore stories happening around them or in places they're interested in
- **Time-Limited Content**: All content expires after 24 hours, creating urgency and regular engagement
- **Reaction Paths**: Instead of simple likes, users can choose different reaction paths that influence how a story evolves

## Tech Stack

- **Frontend**: React with Next.js
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Geolocation**: Browser Geolocation API + Mapbox
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Mapbox account (for maps)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/momentify.git
   cd momentify
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file based on `.env.example` and add your Supabase and Mapbox credentials.

4. Set up your Supabase database using the SQL schema in `database-schema.sql`.

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following database tables:
- `profiles`: User profiles (extends Supabase auth.users)
- `moments`: The main content posts
- `contributions`: User contributions to moments
- `reaction_types`: Different types of reactions
- `reactions`: User reactions to moments and contributions
- `follows`: User follow relationships

## Deployment

This application can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Add your environment variables in the Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `NEXT_PUBLIC_MAPBOX_TOKEN`: Your Mapbox access token (for maps)
4. Deploy!

### Troubleshooting Deployment

If you see the default Next.js page instead of Momentify after deployment:

1. **Check Environment Variables**: Make sure all required environment variables are set in your deployment platform.
2. **Verify Build Logs**: Check the build logs for any errors during the build process.
3. **Clear Cache**: Try clearing the deployment cache and redeploying.
4. **Manual Build**: You can try building locally with `npm run build` to see if there are any issues.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
