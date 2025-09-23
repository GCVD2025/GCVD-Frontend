#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Why: GitHub Pages 배포 시 이미지 경로에 basePath가 자동으로 추가되지 않는 문제 해결
// What: 빌드된 HTML 파일들의 src 속성에 basePath를 추가
// How: 정규식을 사용하여 src="/..." 패턴을 src="/GCVD-Frontend/..."로 변경

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/GCVD-Frontend";
const outDir = path.join(__dirname, "..", "out");

function fixImagePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // img 태그의 src="/..." 패턴을 src="/GCVD-Frontend/..."로 변경
    // 단, 이미 /GCVD-Frontend로 시작하는 경우는 제외
    const regex = /<img[^>]*src="\/(?!GCVD-Frontend\/)([^"]*)"[^>]*>/g;
    const replacement = (match) => {
      return match.replace(/src="\/([^"]*)"/, `src="${basePath}/$1"`);
    };

    const newContent = content.replace(regex, replacement);

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, "utf8");
      console.log(
        `Fixed image paths in: ${path.relative(process.cwd(), filePath)}`
      );
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      processDirectory(itemPath);
    } else if (item.endsWith(".html")) {
      fixImagePaths(itemPath);
    }
  }
}

console.log(`Adding basePath "${basePath}" to image src attributes...`);
processDirectory(outDir);
console.log("Image path fixing completed!");
