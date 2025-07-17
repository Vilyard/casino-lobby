export const getCategoryIcon = (category: string): string => {
  switch (category) {
    case "slots":
      return "🎰";
    case "table":
      return "🃏";
    case "live":
      return "🎥";
    default:
      return "🎮";
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case "slots":
      return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30";
    case "table":
      return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
    case "live":
      return "bg-red-500/20 text-red-300 border-red-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};
