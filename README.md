# SunnAI Website

A website for SunnAI, an AI-powered voice-to-text assistant for macOS.

## Features

- **Swiss Design Principles**: Clean, minimal aesthetic with grid-based layouts
- **Responsive Design**: Optimized for all devices
- **GitHub Releases Integration**: Downloads directly from GitHub releases
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading with optimized images and assets

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Swiss Design components
- **Icons**: Lucide React
- **Font**: Helvetica Neue (Swiss Design standard)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sunnai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
sunnai-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Swiss Design components
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section with download CTA
│   ├── Features.tsx       # Product features grid
│   ├── UseCases.tsx       # Use cases and benefits
│   ├── HowItWorks.tsx     # Step-by-step guide
│   ├── Download.tsx       # Download section
│   └── Footer.tsx         # Footer with links
├── lib/                   # Utilities and configurations
│   └── download.ts        # GitHub releases download function
├── public/                # Static assets
│   ├── icon.png           # SunnAI logo
│   └── preview.png        # App preview image
└── ...config files
```



## Download Setup

The website is configured to download SunnAI directly from GitHub releases:

### Current Configuration
- **Release Tag**: `version-1.0`
- **Asset Name**: `SunnAI-1.0.0-arm64.dmg`
- **Download URL**: `https://github.com/Gaurang105/SunnAI/releases/download/version-1.0/SunnAI-1.0.0-arm64.dmg`


### Important Notes

- **Public Releases**: Ensure releases are marked as public (not pre-release) for downloads to work
- **Asset Names**: Use descriptive names like `SunnAI-{version}-{architecture}.dmg`
- **Version Control**: GitHub automatically tracks download statistics for releases


## License

This project is proprietary software. All rights reserved.