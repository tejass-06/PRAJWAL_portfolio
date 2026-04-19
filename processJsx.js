const fs = require("fs"); const path = require("path"); const componentsDir = "c:\\Users\\Om Pc\\Documents\\PRAJWAL\\Portfolio\\frontend\\src\\components"; const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".jsx") || f.endsWith(".js")); const stats = {filesProcessed: 0, totalReplacements: 0, removedImports: 0, removedHooks: 0, replacedTernaries: 0, replacedStyles: 0}; const filesUpdated = []; files.forEach(file => {const filePath = path.join(componentsDir, file); let content = fs.readFileSync(filePath, "utf8"); const originalContent = content; let changeCount = 0; const importRegex = /import\\s*{\\s*useTheme\\s*}\\s*from\\s*["
'
"].*?["
'
"]\\s*;?\\n?/g; const importMatches = content.match(importRegex); if (importMatches) {stats.removedImports += importMatches.length; changeCount += importMatches.length;} content = content.replace(importRegex, ""); const hookRegex = /const\\s*{\\s*isDark\\s*}\\s*=\\s*useTheme\\(\\)\\s*;?\\n?/g; const hookMatches = content.match(hookRegex); if (hookMatches) {stats.removedHooks += hookMatches.length; changeCount += hookMatches.length;} content = content.replace(hookRegex, ""); const complexTernaryRegex = /isDark\\s*\\?\\s*([^:]*?)\\s*:\\s*([^,}\\)\\]]*?)(?=[,}\\)\\]\\s;])/g; let ternaryMatches = content.match(complexTernaryRegex); if (ternaryMatches) {stats.replacedTernaries += ternaryMatches.length; changeCount += ternaryMatches.length;} content = content.replace(complexTernaryRegex, "$1"); const hexColorRegex = /isDark\\s*\\?\\s*["
'
"]?(#[a-fA-F0-9]{6})["
'
"]?\\s*:\\s*["
'
"]?(#[a-fA-F0-9]{6})["
'
"]?/g; const hexMatches = content.match(hexColorRegex); if (hexMatches) {stats.replacedStyles += hexMatches.length; changeCount += hexMatches.length;} content = content.replace(hexColorRegex, "
'
$1
'
"); if (content !== originalContent) {fs.writeFileSync(filePath, content, "utf8"); stats.filesProcessed++; stats.totalReplacements += changeCount; filesUpdated.push({file, imports: importMatches?.length || 0, hooks: hookMatches?.length || 0, ternaries: ternaryMatches?.length || 0, styles: hexMatches?.length || 0});}}); console.log("\\n=== JSX FILE PROCESSING REPORT ===\\n"); console.log("Total JSX files found: " + files.length); console.log("Files updated: " + stats.filesProcessed + "\\n"); if (filesUpdated.length > 0) {console.log("FILES UPDATED:"); filesUpdated.forEach(f => {console.log("  ✓ " + f.file); if (f.imports > 0) console.log("      - Removed " + f.imports + " useTheme import(s)"); if (f.hooks > 0) console.log("      - Removed " + f.hooks + " isDark hook(s)"); if (f.ternaries > 0) console.log("      - Replaced " + f.ternaries + " ternary pattern(s)"); if (f.styles > 0) console.log("      - Replaced " + f.styles + " hex color pattern(s)");  }); console.log("\\nSUMMARY:"); console.log("  Total useTheme imports removed: " + stats.removedImports); console.log("  Total isDark hooks removed: " + stats.removedHooks); console.log("  Total ternary patterns replaced: " + stats.replacedTernaries); console.log("  Total hex color patterns replaced: " + stats.replacedStyles); console.log("  Total replacements: " + stats.totalReplacements);} else {console.log("No files needed updating");}
