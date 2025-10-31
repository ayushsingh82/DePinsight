# DePinsight

**Vision:** Transforming DePIN analytics with real-time insights, empowering data-driven decisions in decentralized infrastructure.

A comprehensive analytics dashboard built on NodeOps Network, providing insights into DePIN protocols and blockchain infrastructure.

Built with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

DePinsight provides a comprehensive analytics experience with the following modules accessible through the sidebar:

### 📊 **Dashboard**
An overview of key metrics including total users, active sessions, and growth rate, providing a quick snapshot of platform health.

### 💰 **Revenue**
Detailed revenue analytics with real-time tracking of:
- Total revenue breakdown
- Monthly revenue trends
- Growth percentage and forecasts
- Quarterly and yearly income statements

### 📈 **Token Metrics**
Comprehensive token information including:
- Real-time token price tracking (24h, 7d, 1Y changes)
- Market data: Market cap, 24h volume, FDV
- Token supply analytics (Circulating, Total, Max Supply)
- Network status and holder information
- Category classification (DePIN/Compute)

### 📉 **Analytics**
Multi-source analytics dashboard featuring:
- **Overview Tab**: Token price charts, supply distribution, revenue trends
- **Dune Analytics**: Network growth metrics, deployment trends, resource distribution
- **DefiLlama Analytics**: Quarterly comparisons, income statements
- Interactive charts and visualizations

### 🔗 **Dune**
Direct integration with Dune Analytics showing:
- Total revenue and resource utilization
- CPU, Memory, and Storage metrics
- Network growth: Providers, Machines, Deployments
- Contract addresses across multiple chains
- Token contract information

### 📊 **DefiLlama**
Protocol-level financial data:
- Protocol information and categorization
- Quarterly and monthly income statements
- Fees, revenue, and earnings breakdown
- Revenue sources and payment models

### 👥 **Shares**
Track social engagement and community metrics:
- Share activity across platforms (Twitter, LinkedIn, Facebook)
- Audience engagement statistics
- Community growth indicators

## Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Docker

Build and run the application using Docker:

```bash
# Build the image
docker build -t depinsight .

# Run the container
docker run -p 3000:3000 depinsight
```

Or use Docker Compose:

```bash
# Build and start
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop the containers
docker-compose down
```

The application will be available at [http://localhost:3000](http://localhost:3000)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack

- **Framework**: Next.js 16.0.0
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.0
- **Charts**: Recharts 3.3.0
- **Animations**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React
- **Language**: TypeScript 5

## About NodeOps Network

NodeOps Network is a decentralized infrastructure stack powering compute and AI workloads. It enables developers and enterprises to deploy, manage, and monetize compute services seamlessly. The protocol generates on-chain revenue from product subscriptions, deployment fees, and automated $NODE-to-credits conversions for workloads.

**Category**: DePIN (Decentralized Physical Infrastructure)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
