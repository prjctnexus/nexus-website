export default function BetterURL(url: string|null) {
    if (!url) { return; }
    return url.replace(/[^a-zA-Z\s]/g, '')
    .replace(/\s+/g, " ").trim()
}