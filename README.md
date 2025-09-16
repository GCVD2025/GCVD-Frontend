This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## GitHub Pages 배포

이 프로젝트는 GitHub Pages에 자동으로 배포됩니다.

### 배포 설정

1. **GitHub 저장소 설정**:

   - GitHub 저장소의 Settings > Pages로 이동
   - Source를 "GitHub Actions"로 설정

2. **자동 배포**:

   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - GitHub Actions가 빌드하고 GitHub Pages에 배포합니다

3. **수동 빌드**:
   ```bash
   yarn build
   ```

### 배포된 사이트

배포가 완료되면 다음 URL에서 사이트를 확인할 수 있습니다:
`https://[your-username].github.io/GCVD-Frontend`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
