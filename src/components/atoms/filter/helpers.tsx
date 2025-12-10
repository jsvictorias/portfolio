export const toggleFilterById = (
  currentSelectedIds: string[],
  targetId: string
): string[] => {
  const isSelected = currentSelectedIds.includes(targetId);

  if (isSelected) {
    return currentSelectedIds.filter((id) => id !== targetId);
  } else {
    return [...currentSelectedIds, targetId];
  }
};

export const filterDataByCategories = <T extends { categoryId: string }>(
  data: T[],
  selectedCategoryIds: string[]
): T[] => {
  if (selectedCategoryIds.length === 0) return data;
  return data.filter((item) => selectedCategoryIds.includes(item.categoryId));
};