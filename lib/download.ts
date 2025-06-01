export async function downloadApp() {
  try {
    // GitHub release download URL
    // Format: https://github.com/{owner}/{repo}/releases/download/{tag}/{asset-name}
    const downloadUrl = 'https://github.com/Gaurang105/SunnAI/releases/download/version-1.0/SunnAI-1.0.0-arm64.dmg'
    
    // Create a temporary anchor element to trigger download
    const a = document.createElement('a')
    a.href = downloadUrl
    a.download = 'SunnAI-1.0.0-arm64.dmg'
    a.style.display = 'none'
    a.target = '_blank' // Open in new tab for better compatibility
    
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    
    return { success: true }
  } catch (error) {
    console.error('Download error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Download failed' 
    }
  }
} 