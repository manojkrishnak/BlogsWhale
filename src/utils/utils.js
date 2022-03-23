export function formatDate(createdDate) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(createdDate)
      .toLocaleDateString("en-US", options)
      .replaceAll(",", "");
  }