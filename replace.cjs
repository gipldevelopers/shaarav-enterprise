const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'content');

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/\bBusinesses\b/g, 'Financial Services')
                .replace(/\bbusinesses\b/g, 'financial services')
                .replace(/\bBusiness\b/g, 'Financial Services')
                .replace(/\bbusiness\b/g, 'financial services');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated', fullPath);
            }
        }
    }
}

traverse(srcDir);
