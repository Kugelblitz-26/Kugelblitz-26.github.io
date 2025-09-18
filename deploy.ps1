cd "c:\Users\premy\Documents\code\portfolio\premshinde-portfolio"
Write-Host "Building the project..." -ForegroundColor Green
& "C:\Program Files\nodejs\npm.cmd" run build

Write-Host "Deploying to GitHub Pages..." -ForegroundColor Green
& "C:\Program Files\nodejs\npm.cmd" run deploy

Write-Host "Deployment complete! Your site should be live at: https://kugelblitz-26.github.io/portfolio/" -ForegroundColor Cyan