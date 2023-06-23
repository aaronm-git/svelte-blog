# PureCSS Blog Site

This is a blog site built with PureCSS, SvelteKit 1.0, and Strapi v4. It serves as an example of how to integrate a headless CMS with a SvelteKit frontend.

## Prerequisites

Before running the app, ensure that you have the following:

- Node.js installed on your machine.
- A running instance of Strapi with the necessary configuration.
- An `.env` file with the following variables:

```plaintext
PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
PUBLIC_SUPABASE_KEY="xxx"
PUBLIC_STRAPI_URL="xxx"
STRAPI_KEY="xxx"
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aaronm-git/svelte-blog.git
```

2. Navigate to the project directory:

```bash
cd svelte-blog
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

1. Create an `.env` file in the project root directory.
2. Open the `.env` file and provide the required variables:

```plaintext
PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
PUBLIC_SUPABASE_KEY=""      # Add your Supabase key here
PUBLIC_STRAPI_URL=""        # Add your Strapi URL here
STRAPI_KEY=""               # Add your Strapi key here
```

Make sure to replace the placeholder values (`https://xxx.supabase.co`) with the actual URL of your Supabase instance.

## Usage

1. Start your Strapi app by following the necessary steps for running Strapi.
2. Run the SvelteKit app:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` to access the blog site.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue in the project repository.

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more details.

## Acknowledgments

- This project was inspired by the PureCSS framework and aims to showcase its usage in a SvelteKit application.
- Special thanks to the developers of SvelteKit, Strapi, and Supabase for providing excellent tools for building modern web applications.