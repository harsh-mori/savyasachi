$productsDir = "d:\Projects\Savyasachi\savyasachi\public\assets\images\products"
$srcDir = "d:\Projects\Savyasachi\savyasachi\src"

# Get all files in products directory that have spaces in their name
$files = Get-ChildItem -Path $productsDir -Recurse -File | Where-Object { $_.Name -match " " }

foreach ($file in $files) {
    $oldName = $file.Name
    # Create new name: lowercase and spaces to hyphens
    $newName = $oldName.ToLower().Replace(" ", "-")
    $oldPath = $file.FullName
    $newPath = Join-Path $file.Directory.FullName $newName
    
    try {
        # Rename file on disk
        Rename-Item -LiteralPath $oldPath -NewName $newName -ErrorAction Stop
        Write-Host "Renamed file: $oldName -> $newName"
        
        # Update references in src files
        $srcFiles = Get-ChildItem -Path $srcDir -Recurse -Include *.js,*.jsx
        foreach ($srcFile in $srcFiles) {
            # Use specific encoding or just allow PS to handle text reading
            $content = Get-Content $srcFile.FullName -Raw
            
            # Use escaped regex for exact matching of the old filename
            # We assume the code references the filename exactly as it was on disk
            if ($content -match [regex]::Escape($oldName)) {
                $newContent = $content -replace [regex]::Escape($oldName), $newName
                Set-Content -Path $srcFile.FullName -Value $newContent -NoNewline
                Write-Host "  Updated reference in: $($srcFile.Name)"
            }
        }
    }
    catch {
        Write-Error "Failed to rename or update $oldName : $_"
    }
}
