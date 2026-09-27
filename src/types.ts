export type ScreenType = 'cravings-and-pantry' | 'meal-resolver' | 'weekly-menu';

export interface Roommate {
  id: string;
  name: string;
  initials: string;
  roleTitle: string;
  dietaryTags: string[];
  emoji: string;
  hungerIndex: number; // 1 - 10
  hungerLabel: string;
  cravingQuote: string;
  intensity: 'High' | 'Moderate' | 'Critical';
  weightPercent: number;
  satisfactionPercent: number;
  highlightTag: string;
  colorBg: string;
  colorText: string;
}

export interface PantryItem {
  id: string;
  name: string;
  quantityNote: string;
  category: 'staple' | 'instant' | 'dairy' | 'fresh' | 'spice';
  inStock: boolean;
  usedInCurrentDish?: string;
  isMissing?: boolean;
  missingNote?: string;
}

export interface CookingShift {
  step: number;
  roommate: string;
  role: string;
  instruction: string;
  status: 'Done' | 'Active' | 'Next Up';
}

export interface MealArbitrationResult {
  id: string;
  title: string;
  subtitle: string;
  compromiseLogic: string;
  consensusScore: number;
  cookTimeMins: number;
  foodWasteStatus: string;
  image: string;
  dishType: string;
  satisfactionBreakdown: {
    roommate: string;
    focus: string;
    percentage: number;
    colorClass: string;
  }[];
  pantryDeductions: {
    name: string;
    deductionNote: string;
    checked: boolean;
  }[];
  dutyFlow: CookingShift[];
}

export interface UpcomingMeal {
  id: string;
  dateStr: string;
  mealSlot: 'Breakfast' | 'Lunch' | 'Dinner' | 'Late Munchies';
  title: string;
  description: string;
  chef: string;
  cleanup: string;
  pantryStatus: string;
  isGroceryAlert?: boolean;
  status: 'Locked' | 'Proposed' | 'Vote Open';
}
