export const formatDateWithAgo = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();

    const diffMs = now - date; // difference in milliseconds
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHrs = Math.floor(diffMin / 60);

    let agoText = "";
    if (diffHrs >= 1) agoText = `${diffHrs} hour${diffHrs > 1 ? "s" : ""} ago`;
    else if (diffMin >= 1) agoText = `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
    else agoText = `${diffSec} second${diffSec > 1 ? "s" : ""} ago`;

    // Format absolute time
    const pad = (num) => String(num).padStart(2, "0");
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const day = pad(date.getDate());
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];

    const absolute = `${hours}:${minutes}:${seconds} ${day}-${month}`;

    return `${absolute} (${agoText})`;
}
