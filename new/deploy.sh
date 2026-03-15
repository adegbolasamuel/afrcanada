#!/bin/bash

# AfriCanada Expo Deployment Script

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build for production
echo "🏗️ Building for production..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in the 'dist' directory"
    echo "🌐 Ready for deployment to production!"
else
    echo "❌ Build failed!"
    exit 1
fi
